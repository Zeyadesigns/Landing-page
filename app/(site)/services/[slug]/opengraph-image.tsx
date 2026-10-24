import { getService, services } from "@/content/services";
import { ogContentType, ogSize, renderOg, type OgTheme } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Finestkraft service";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const s = getService((await params).slug)!;
  return renderOg({ title: s.headline, label: `${s.name}, from $1999`, theme: s.chapter as OgTheme });
}
