import { getInsight, insights } from "@/content/insights";
import { getService } from "@/content/services";
import { ogContentType, ogSize, renderOg } from "@/lib/og";

export const size = ogSize;
export const contentType = ogContentType;
export const alt = "Finestkraft insight";

export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export default async function Image({ params }: { params: Promise<{ slug: string }> }) {
  const a = getInsight((await params).slug)!;
  return renderOg({ title: a.title, label: `${getService(a.pillar)?.name ?? "Insights"}, ${a.readMinutes} min read`, theme: "paper" });
}
