// Single source for site-wide facts. Anything undecided in PRODUCT.md is read
// from an env var and left out of the page (and the structured data) when unset.

const url = (process.env.NEXT_PUBLIC_SITE_URL || "https://finestkraft-landing.vercel.app").replace(/\/$/, "");

export const site = {
  name: "Finestkraft",
  legalName: "Finestkraft",
  url,
  tagline: "Brand / Web studio for Tech & AI",
  description:
    "We build brand identities and high impact websites for founder led companies. Projects starting at $1999.",
  startingPrice: 1999,
  currency: "USD",
  city: "Cairo",
  countryCode: "EG",
  timeZone: "Africa/Cairo",
  locale: "en_US",
  /** Booking destination (Cal.com, Calendly…). Undecided: unset falls back to /contact. */
  bookingUrl: process.env.NEXT_PUBLIC_BOOKING_URL || "",
  /** Contact email. NEXT_PUBLIC_CONTACT_EMAIL overrides it. */
  email: process.env.NEXT_PUBLIC_CONTACT_EMAIL || "zeyad@finestkraft.com",
  /** Public profiles (footer links and schema.org sameAs). NEXT_PUBLIC_SAME_AS (comma-separated) overrides them. */
  sameAs: (process.env.NEXT_PUBLIC_SAME_AS || "https://x.com/zeyadesign,https://www.linkedin.com/in/zeiiyadsalih/")
    .split(",")
    .map((s) => s.trim())
    .filter(Boolean),
} as const;

/** Where every "Book a discovery call" action goes. */
export const bookHref = site.bookingUrl || "/contact";

export const absolute = (path = "/") => `${site.url}${path === "/" ? "" : path}`;

/** Only production on the real origin may be indexed; previews stay out of search. */
export const isIndexable =
  process.env.VERCEL_ENV ? process.env.VERCEL_ENV === "production" : process.env.NODE_ENV === "production";

export const nav = [
  { href: "/services", label: "Services" },
  { href: "/work", label: "Work" },
  { href: "/insights", label: "Insights" },
  { href: "/studio", label: "Studio" },
] as const;
