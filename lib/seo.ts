// Page metadata builder: one canonical URL, Open Graph and Twitter cards per page.
import type { Metadata } from "next";
import { absolute, isIndexable, site } from "./site";

export function pageMetadata(opts: {
  path: string;
  title: string;
  description: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  section?: string;
  noindex?: boolean;
  /** absolute title, skipping the "| Finestkraft" template */
  absoluteTitle?: boolean;
}): Metadata {
  const url = absolute(opts.path);
  const index = isIndexable && !opts.noindex;
  return {
    title: opts.absoluteTitle ? { absolute: opts.title } : opts.title,
    description: opts.description,
    alternates: { canonical: url },
    robots: index
      ? { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } }
      : { index: false, follow: !opts.noindex },
    openGraph: {
      type: opts.type ?? "website",
      url,
      siteName: site.name,
      locale: site.locale,
      title: opts.title,
      description: opts.description,
      ...(opts.type === "article"
        ? { publishedTime: opts.publishedTime, modifiedTime: opts.modifiedTime ?? opts.publishedTime, section: opts.section, authors: [site.url] }
        : {}),
    },
    twitter: { card: "summary_large_image", title: opts.title, description: opts.description },
  };
}
