import { ImageResponse } from "next/og";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default function AppleIcon() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", alignItems: "center", justifyContent: "center", background: "#101010" }}>
        <svg width="110" height="96" viewBox="0 0 55 48">
          <path
            fill="#ffffff"
            d="M11.0664 0L27.998 19.6426V0H55V9.0664H37.0283V19.4668H51.0156V28.5332H37.0283V48H27.998V28.5361L11.5312 48H0.11035L20.915 23.667L0 0H11.0664Z"
          />
        </svg>
      </div>
    ),
    size,
  );
}
