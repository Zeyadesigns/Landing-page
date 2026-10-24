import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Concept projects for fictional tech companies";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ title: "Concept projects for fictional tech companies", label: "Work", theme: "steel" });
}
