import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Book a discovery call";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ title: "Book a discovery call", label: "Contact", theme: "cyan" });
}
