import { insights } from "@/content/insights";
import { getService } from "@/content/services";
import { absolute, site } from "@/lib/site";

export const dynamic = "force-static";

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

export function GET() {
  const items = [...insights]
    .sort((a, b) => b.published.localeCompare(a.published))
    .map((i) => {
      const url = absolute(`/insights/${i.slug}`);
      return `    <item>
      <title>${esc(i.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${esc(i.description)}</description>
      <category>${esc(getService(i.pillar)?.name ?? "Insights")}</category>
      <pubDate>${new Date(i.published).toUTCString()}</pubDate>
    </item>`;
    })
    .join("\n");
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${esc(site.name)} Insights</title>
    <link>${absolute("/insights")}</link>
    <description>Writing for founders on brand, websites, product UI and pitch decks.</description>
    <language>en</language>
    <atom:link href="${absolute("/insights/feed.xml")}" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`;
  return new Response(xml, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } });
}
