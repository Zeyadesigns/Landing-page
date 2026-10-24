"use client";

import { useEffect, useRef } from "react";

/** A decorative muted loop laid over its still. Starts only when motion is welcome; until it plays, the still shows. */
export default function LoopVideo({ sources }: { sources: string[] }) {
  const ref = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = ref.current;
    if (!video || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    video.addEventListener("playing", () => (video.style.opacity = "1"), { once: true });
    video.play().catch(() => {});
  }, []);

  return (
    <video
      ref={ref}
      muted
      loop
      playsInline
      preload="metadata"
      aria-hidden="true"
      style={{ position: "absolute", inset: 0, width: "100%", height: "100%", objectFit: "cover", opacity: 0 }}
    >
      {sources.map((src) => (
        <source key={src} src={src} type={src.endsWith(".webm") ? "video/webm" : "video/mp4"} />
      ))}
    </video>
  );
}
