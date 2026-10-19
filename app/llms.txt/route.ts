import { services } from "@/content/services";
import { insights } from "@/content/insights";
import { concepts } from "@/content/work";
import { absolute, site } from "@/lib/site";

export const dynamic = "force-static";

// A plain-text map of the site for language-model crawlers (llmstxt.org).
export function GET() {
  const lines = [
    `# ${site.name}`,
    "",
    `> ${site.description} A brand and web studio based in ${site.city}, working worldwide with founder-led tech and AI companies.`,
    "",
    "## Services",
    ...services.map((s) => `- [${s.name}](${absolute(`/services/${s.slug}`)}): ${s.summary}`),
    "",
    "## Insights",
    ...insights.map((i) => `- [${i.title}](${absolute(`/insights/${i.slug}`)}): ${i.description}`),
    "",
    "## Concept work",
    "These are self-initiated studies for fictional companies, not client work.",
    ...concepts.map((c) => `- [${c.name}](${absolute(`/work/${c.slug}`)}): ${c.premise}`),
    "",
    "## Studio",
    `- [About the studio](${absolute("/studio")})`,
    `- [Book a discovery call](${absolute("/contact")})`,
    "",
  ];
  return new Response(lines.join("\n"), { headers: { "Content-Type": "text/plain; charset=utf-8" } });
}
