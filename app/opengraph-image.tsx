import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const alt = "Finestkraft: design that makes customers lean in";
export const size = ogSize;
export const contentType = ogContentType;

export default function Image() {
  return renderOg({ title: "Design that makes customers lean in.", label: "Projects from $1999" });
}
