import { concepts, getConcept } from "@/content/work";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Finestkraft concept project";

export function generateStaticParams() {
  return concepts.map((c) => ({ slug: c.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const c = getConcept((await params).slug)!;
  return renderOg({ title: `${c.name}: ${c.premise}`, label: "Concept project", theme: c.band });
}
