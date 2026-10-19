import type { MetadataRoute } from "next";
import { absolute } from "@/lib/site";
import { services } from "@/content/services";
import { insights } from "@/content/insights";
import { concepts } from "@/content/work";

// Last real content change for pages without their own date.
const SITE_UPDATED = "2026-10-19";

export default function sitemap(): MetadataRoute.Sitemap {
  const page = (path: string, priority: number, changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"], lastModified = SITE_UPDATED) => ({
    url: absolute(path),
    lastModified,
    changeFrequency,
    priority,
  });
  return [
    page("/", 1, "weekly"),
    page("/services", 0.9, "monthly"),
    ...services.map((s) => page(`/services/${s.slug}`, 0.9, "monthly")),
    page("/insights", 0.7, "weekly"),
    ...insights.map((i) => page(`/insights/${i.slug}`, 0.7, "yearly", i.updated ?? i.published)),
    page("/work", 0.6, "monthly"),
    ...concepts.map((c) => page(`/work/${c.slug}`, 0.5, "yearly", c.published)),
    page("/studio", 0.5, "yearly"),
    page("/contact", 0.6, "yearly"),
  ];
}
