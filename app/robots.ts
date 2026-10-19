import type { MetadataRoute } from "next";
import { absolute, isIndexable } from "@/lib/site";

// Production allows crawling; previews and local builds ask crawlers to stay out.
export default function robots(): MetadataRoute.Robots {
  if (!isIndexable) {
    return { rules: [{ userAgent: "*", disallow: "/" }] };
  }
  return {
    // /design-system stays crawlable so crawlers can read its noindex tag
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: absolute("/sitemap.xml"),
  };
}
