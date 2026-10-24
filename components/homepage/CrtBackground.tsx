"use client";

import { useEffect, useRef, useState } from "react";
import { useWebGPUDevice } from "@/lib/shader-runtime";
import type { CustomEffectState } from "@/lib/shader-runtime/types";
import {
  setup as setupCrt,
  render as renderCrt,
  cleanup as cleanupCrt,
} from "@/lib/custom-effects/CodeComponentId_7630a8cddc92709138efc2a272175c3e1677f5a9_584";

/** The "Liquid Gradient" layer from the Figma frames: one image under the CRT shader effect. */
type Layer = {
  /** Shader parameters, exactly as set on the Figma layer. */
  params: Record<string, unknown>;
  /** Places the layer box inside the hero, in CSS px, given the hero's size. */
  box: (w: number, h: number) => { left: number; top: number; width: number; height: number };
  /** The layer's own transform in Figma (applied to the shader output, as Figma does). */
  transform: string;
};

const LAYER_RATIO = 1440 / 808;

/**
 * The grille and scanlines are sized in device pixels, and the design was made (and Figma renders it)
 * on a 2x screen, so the canvas always renders at 2x: 1x screens get the same look scaled down, and 3x
 * phones skip the extra pixels, which they'd spend on a finer grille than the design has.
 */
const RENDER_SCALE = 2;
/** The flicker and noise read the same at 30fps, and it halves the GPU work. */
const FRAME_MS = 1000 / 30;
/** Rendering holds while the page scrolls (the shader competes with scrolling for the GPU). */
const SCROLL_IDLE_MS = 150; // both frames use the same 16:9-ish layer (866x486 on mobile)

const LAYERS: { desktop: Layer; mobile: Layer } = {
  // 19:379, 1440x808 at the frame origin, mirrored horizontally. Covers the hero like the still does.
  desktop: {
    params: { flicker: 43, clipToCurve: true, mask: 80, rollSpeed: 5, noiseSize: 1, speed: 0.5, jitter: 0, maskPitch: 4, aberrationScheme: 2, maskType: 0, brightness: 0, scanlines: 20, curvature: 0, vignette: 0, noise: 15, scanlineSize: 12, aberration: 45 },
    box: (w, h) => {
      const width = Math.max(w, h * LAYER_RATIO);
      const height = width / LAYER_RATIO;
      return { left: (w - width) / 2, top: (h - height) / 2, width, height };
    },
    transform: "scaleX(-1)",
  },
  // 87:1033, 866x486 rotated 180°, reaching 51px past the left edge and 42px above the top of the
  // 390x444 hero (a deliberate placement for readability). Scales with the hero's width.
  mobile: {
    params: { flicker: 43, clipToCurve: true, mask: 71, rollSpeed: 5, noiseSize: 1, speed: 0.699999988079071, jitter: 0, maskPitch: 4, aberrationScheme: 2, maskType: 0, brightness: 0, scanlines: 20, curvature: 0, vignette: 0, noise: 20, scanlineSize: 12, aberration: 22 },
    box: (w, h) => {
      const width = (w * 866) / 390;
      return { left: (-51 * w) / 390, top: (-42 * h) / 444, width, height: width / LAYER_RATIO };
    },
    transform: "rotate(180deg)",
  },
};

type Props = {
  /** The layer's source image (the Figma fill), sampled by the shader. */
  src: string;
  className?: string;
  canvasClassName?: string;
};

/**
 * Runs Figma's CRT shader (vendored verbatim in lib/custom-effects) over the hero image with the
 * runtime's shared WebGPU device. Figma's <ShaderEffect> captures live DOM through HTML-in-Canvas,
 * which browsers don't ship yet; the input here is one static image, so it is uploaded as the
 * input texture instead and the shader runs unchanged wherever WebGPU exists.
 * Until the first frame lands, and with no WebGPU or with reduced motion, the root shows the still.
 * It draws at 30fps and holds while the page scrolls or the hero is off screen, to keep scrolling smooth.
 */
export default function CrtBackground({ src, className, canvasClassName }: Props) {
  const [motionOk, setMotionOk] = useState(false);
  const [live, setLive] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    const sync = () => setMotionOk(!mq.matches);
    sync();
    mq.addEventListener("change", sync);
    return () => mq.removeEventListener("change", sync);
  }, []);

  return (
    <div className={className} data-live={live && motionOk ? "" : undefined} aria-hidden="true">
      {motionOk && <CrtCanvas src={src} className={canvasClassName} onLive={setLive} />}
    </div>
  );
}

function CrtCanvas({ src, className, onLive }: { src: string; className?: string; onLive: (live: boolean) => void }) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { device } = useWebGPUDevice();

  useEffect(() => {
    const canvas = canvasRef.current;
    const host = canvas?.parentElement;
    if (!canvas || !host || !device) return;

    let disposed = false;
    let raf: number | null = null;
    let last: number | null = null;
    let drawn = -Infinity;
    let visible = true;
    let scrolling = false;
    let scrollTimer: ReturnType<typeof setTimeout> | undefined;
    let image: ImageBitmap | null = null;
    let input: GPUTexture | null = null;
    let layer = LAYERS.desktop;
    const desktopQuery = window.matchMedia("(min-width: 769px)");

    const context = canvas.getContext("webgpu");
    if (!context) return;
    // Same canvas setup as the Figma runtime (useShaderRuntime).
    const format: GPUTextureFormat = "rgba8unorm";
    context.configure({ device, format, alphaMode: "premultiplied" });

    const frame = {
      gpu: { device, context, format },
      input: null as GPUTexture | null,
      output: null as GPUTexture | null,
      time: 0,
      deltaTime: 0,
      frame: 0,
      mousePosition: { x: 0, y: 0, down: false },
      renderScale: RENDER_SCALE,
      params: layer.params,
      state: {} as Record<string, unknown>,
    };

    // Lay the canvas out as the Figma layer, size its backing store in device pixels, and draw the
    // image into an input texture of that size (the runtime's input is always canvas-sized).
    const layout = async () => {
      layer = desktopQuery.matches ? LAYERS.desktop : LAYERS.mobile;
      frame.params = layer.params;
      const { width: w, height: h } = host.getBoundingClientRect();
      const box = layer.box(w, h);
      Object.assign(canvas.style, {
        left: `${box.left}px`,
        top: `${box.top}px`,
        width: `${box.width}px`,
        height: `${box.height}px`,
        transform: layer.transform,
      });
      canvas.width = Math.max(Math.round(box.width * RENDER_SCALE), 1);
      canvas.height = Math.max(Math.round(box.height * RENDER_SCALE), 1);
      if (!image) return;
      const sized = await createImageBitmap(image, {
        resizeWidth: canvas.width,
        resizeHeight: canvas.height,
        resizeQuality: "high",
      });
      if (disposed) return;
      input?.destroy();
      input = device.createTexture({
        size: [canvas.width, canvas.height, 1],
        format,
        usage: GPUTextureUsage.TEXTURE_BINDING | GPUTextureUsage.COPY_DST | GPUTextureUsage.RENDER_ATTACHMENT,
      });
      device.queue.copyExternalImageToTexture(
        { source: sized },
        { texture: input, premultipliedAlpha: true },
        [canvas.width, canvas.height],
      );
      sized.close();
      frame.input = input;
    };

    // The runtime's clock: time advances only while frames are drawn, so a pause resumes where it left off.
    const tick = (ts: number) => {
      raf = null;
      if (disposed || !visible || scrolling || !frame.input) return;
      if (ts - drawn < FRAME_MS - 2) {
        raf = requestAnimationFrame(tick);
        return;
      }
      drawn = ts;
      frame.deltaTime = last == null ? 0 : ts - last;
      last = ts;
      frame.time += frame.deltaTime;
      frame.frame += 1;
      try {
        frame.output = context.getCurrentTexture();
        renderCrt(device, frame as unknown as CustomEffectState);
      } catch (e) {
        console.warn("Failed to render effect", e);
        return;
      }
      if (frame.frame === 1) onLive(true);
      raf = requestAnimationFrame(tick);
    };
    const start = () => {
      if (raf == null && visible && !scrolling && !document.hidden) {
        last = null;
        raf = requestAnimationFrame(tick);
      }
    };
    const stop = () => {
      if (raf != null) cancelAnimationFrame(raf);
      raf = null;
    };

    // Pause off-screen and in background tabs.
    const io = new IntersectionObserver(([entry]) => {
      visible = entry.isIntersecting;
      if (visible) start();
      else stop();
    });
    const onVisibility = () => (document.hidden ? stop() : start());
    const onScroll = () => {
      if (!scrolling) {
        scrolling = true;
        stop();
      }
      clearTimeout(scrollTimer);
      scrollTimer = setTimeout(() => {
        scrolling = false;
        start();
      }, SCROLL_IDLE_MS);
    };
    const ro = new ResizeObserver(() => void layout().then(start));
    const onQuery = () => void layout().then(start);

    (async () => {
      try {
        const blob = await (await fetch(src)).blob();
        image = await createImageBitmap(blob, { premultiplyAlpha: "premultiply", colorSpaceConversion: "none" });
        if (disposed) return;
        setupCrt(device, frame as unknown as CustomEffectState);
        await layout();
        io.observe(host);
        ro.observe(host);
        desktopQuery.addEventListener("change", onQuery);
        document.addEventListener("visibilitychange", onVisibility);
        window.addEventListener("scroll", onScroll, { passive: true });
        start();
      } catch (e) {
        console.warn("Failed to set up effect", e);
      }
    })();

    return () => {
      disposed = true;
      stop();
      io.disconnect();
      ro.disconnect();
      desktopQuery.removeEventListener("change", onQuery);
      document.removeEventListener("visibilitychange", onVisibility);
      window.removeEventListener("scroll", onScroll);
      clearTimeout(scrollTimer);
      cleanupCrt(device, frame as unknown as CustomEffectState);
      input?.destroy();
      image?.close();
      onLive(false);
    };
  }, [device, src, onLive]);

  return <canvas ref={canvasRef} className={className} />;
}
