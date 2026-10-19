// Shared Open Graph / social image: 1200×630, the brand's field, cut and type.
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";

export const ogSize = { width: 1200, height: 630 };
export const ogContentType = "image/png";

const font = (file: string) => readFile(join(process.cwd(), "assets/fonts", file));

const themes = {
  ink: { bg: "#101010", fg: "#ffffff", soft: "#d9d9d9", block: "#00ffff", blockInk: "#000000" },
  cyan: { bg: "#00ffff", fg: "#000000", soft: "#0a3d3d", block: "#101010", blockInk: "#00ffff" },
  paper: { bg: "#fbfafa", fg: "#101010", soft: "#3f3f3f", block: "#00ffff", blockInk: "#000000" },
  steel: { bg: "#3f3f3f", fg: "#ffffff", soft: "#d9d9d9", block: "#00ffff", blockInk: "#000000" },
  fog: { bg: "#d9d9d9", fg: "#101010", soft: "#3f3f3f", block: "#00ffff", blockInk: "#000000" },
} as const;

export type OgTheme = keyof typeof themes;

const MARK =
  "M11.0664 0L27.998 19.6426V0H55V9.0664H37.0283V19.4668H51.0156V28.5332H37.0283V48H27.998V28.5361L11.5312 48H0.11035L20.915 23.667L0 0H11.0664Z";

export async function renderOg({ title, label, theme = "ink" }: { title: string; label: string; theme?: OgTheme }) {
  const t = themes[theme];
  const [regular, medium] = await Promise.all([font("manrope-400.woff"), font("manrope-500.woff")]);
  const size = title.length > 60 ? 64 : title.length > 36 ? 76 : 96;
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", background: t.bg, color: t.fg, padding: "64px 72px", fontFamily: "Manrope", position: "relative" }}>
        {/* the cut, at poster scale */}
        <div style={{ position: "absolute", right: 0, bottom: 0, width: 300, height: 300, background: t.block, clipPath: "polygon(100% 0, 100% 100%, 0 100%)" }} />
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <svg width="66" height="58" viewBox="0 0 55 48">
            <path d={MARK} fill={t.fg} />
          </svg>
          <div style={{ display: "flex", fontSize: 26, color: t.soft }}>{label}</div>
        </div>
        <div style={{ display: "flex", fontSize: size, fontWeight: 500, lineHeight: 1.0, letterSpacing: "-0.04em", maxWidth: 940 }}>{title}</div>
        <div style={{ display: "flex", alignItems: "center", gap: 18, fontSize: 26 }}>
          <span style={{ fontWeight: 500 }}>Finestkraft</span>
          <span style={{ color: t.soft }}>Brand and web studio for tech and AI</span>
        </div>
      </div>
    ),
    {
      ...ogSize,
      fonts: [
        { name: "Manrope", data: regular, weight: 400, style: "normal" },
        { name: "Manrope", data: medium, weight: 500, style: "normal" },
      ],
    },
  );
}
