// schema.org JSON-LD builders. Every page emits one @graph whose nodes link by
// @id: Organization ← WebSite ← WebPage → BreadcrumbList, plus the page's main
// entity (Service, BlogPosting, CreativeWork, FAQPage, ItemList).

import { absolute, site } from "./site";
import type { Service } from "@/content/services";
import type { InsightWithMeta } from "@/content/insights";
import type { Concept } from "@/content/work";

export type Crumb = { name: string; path: string };
type Node = Record<string, unknown>;

export const ids = {
  org: `${site.url}/#organization`,
  website: `${site.url}/#website`,
  logo: `${site.url}/#logo`,
  page: (path: string) => `${absolute(path)}#webpage`,
  breadcrumb: (path: string) => `${absolute(path)}#breadcrumb`,
};

export function organization(): Node {
  return {
    "@type": ["Organization", "ProfessionalService"],
    "@id": ids.org,
    name: site.name,
    legalName: site.legalName,
    url: site.url,
    description: site.description,
    slogan: "Design that makes customers lean in.",
    logo: {
      "@type": "ImageObject",
      "@id": ids.logo,
      url: absolute("/icon.svg"),
      contentUrl: absolute("/icon.svg"),
      caption: site.name,
    },
    image: { "@id": ids.logo },
    address: { "@type": "PostalAddress", addressLocality: site.city, addressCountry: site.countryCode },
    areaServed: "Worldwide",
    priceRange: `From $${site.startingPrice}`,
    knowsAbout: ["Brand identity design", "Website design", "Web development", "Product design", "UI design", "Pitch deck design"],
    ...(site.email ? { email: site.email, contactPoint: { "@type": "ContactPoint", contactType: "sales", email: site.email } } : {}),
    ...(site.sameAs.length ? { sameAs: site.sameAs } : {}),
  };
}

export function website(): Node {
  return {
    "@type": "WebSite",
    "@id": ids.website,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: "en",
    publisher: { "@id": ids.org },
  };
}

export function breadcrumbList(path: string, crumbs: Crumb[]): Node {
  return {
    "@type": "BreadcrumbList",
    "@id": ids.breadcrumb(path),
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.name,
      item: absolute(c.path),
    })),
  };
}

export function webPage(opts: {
  path: string;
  name: string;
  description: string;
  type?: string;
  crumbs?: Crumb[];
  mainEntity?: string;
  image?: string;
}): Node {
  return {
    "@type": opts.type ?? "WebPage",
    "@id": ids.page(opts.path),
    url: absolute(opts.path),
    name: opts.name,
    description: opts.description,
    inLanguage: "en",
    isPartOf: { "@id": ids.website },
    about: { "@id": ids.org },
    ...(opts.crumbs ? { breadcrumb: { "@id": ids.breadcrumb(opts.path) } } : {}),
    ...(opts.mainEntity ? { mainEntity: { "@id": opts.mainEntity } } : {}),
    ...(opts.image ? { primaryImageOfPage: { "@type": "ImageObject", url: absolute(opts.image) } } : {}),
  };
}

export function serviceNode(s: Service): Node {
  const path = `/services/${s.slug}`;
  return {
    "@type": "Service",
    "@id": `${absolute(path)}#service`,
    name: s.name,
    serviceType: s.name,
    description: s.seoDescription,
    url: absolute(path),
    provider: { "@id": ids.org },
    areaServed: "Worldwide",
    audience: { "@type": "BusinessAudience", audienceType: "Founder-led tech and AI companies" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `${s.name} deliverables`,
      itemListElement: s.deliverables.map((d) => ({
        "@type": "Offer",
        itemOffered: { "@type": "Service", name: d.name, description: d.detail },
      })),
    },
    offers: {
      "@type": "Offer",
      url: absolute(path),
      priceSpecification: {
        "@type": "PriceSpecification",
        minPrice: site.startingPrice,
        priceCurrency: site.currency,
        description: `Projects start at $${site.startingPrice}; final price depends on scope.`,
      },
    },
  };
}

export function articleNode(a: InsightWithMeta, pillarName: string): Node {
  const path = `/insights/${a.slug}`;
  return {
    "@type": "BlogPosting",
    "@id": `${absolute(path)}#article`,
    headline: a.title,
    description: a.description,
    url: absolute(path),
    mainEntityOfPage: { "@id": ids.page(path) },
    image: absolute(`${path}/opengraph-image`),
    datePublished: a.published,
    dateModified: a.updated ?? a.published,
    author: { "@id": ids.org },
    publisher: { "@id": ids.org },
    isPartOf: { "@id": ids.website },
    about: { "@id": `${absolute(`/services/${a.pillar}`)}#service`, name: pillarName },
    articleSection: pillarName,
    wordCount: a.words,
    timeRequired: `PT${a.readMinutes}M`,
    inLanguage: "en",
  };
}

export function conceptNode(c: Concept): Node {
  const path = `/work/${c.slug}`;
  return {
    "@type": "CreativeWork",
    "@id": `${absolute(path)}#work`,
    name: `${c.name} (concept project)`,
    description: `Self-initiated concept, not client work. ${c.summary}`,
    url: absolute(path),
    genre: "Concept project",
    creator: { "@id": ids.org },
    dateCreated: c.published,
    about: c.services.map((s) => ({ "@id": `${absolute(`/services/${s}`)}#service` })),
  };
}

export function faqNode(path: string, items: readonly { q: string; a: string }[]): Node {
  return {
    "@type": "FAQPage",
    "@id": `${absolute(path)}#faq`,
    mainEntity: items.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  };
}

export function itemList(path: string, name: string, items: { name: string; path: string }[]): Node {
  return {
    "@type": "ItemList",
    "@id": `${absolute(path)}#list`,
    name,
    numberOfItems: items.length,
    itemListElement: items.map((it, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: it.name,
      url: absolute(it.path),
    })),
  };
}

/** Wraps nodes with the site-wide Organization and WebSite into one graph. */
export function graph(...nodes: Node[]) {
  return { "@context": "https://schema.org", "@graph": [organization(), website(), ...nodes] };
}
