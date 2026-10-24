import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Writing on brand, web and product for founders";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ title: "Writing on brand, web and product for founders", label: "Insights", theme: "fog" });
}
