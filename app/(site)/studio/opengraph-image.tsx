import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "A studio in Cairo, working worldwide";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ title: "A studio in Cairo, working worldwide", label: "Studio", theme: "ink" });
}
