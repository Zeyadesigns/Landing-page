import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Brand, web, product and pitch deck design";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ title: "Brand, web, product and pitch deck design", label: "Services", theme: "paper" });
}
