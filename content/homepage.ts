import { bookHref, site } from "@/lib/site";

const profile = (domain: RegExp) => site.sameAs.find((u) => domain.test(u)) ?? "";

/**
 * Homepage copy, in one place. The copy is not final: edit strings here, not in components.
 * Sections are added as they are built from the Figma frames.
 */

/**
 * One gallery image. w/h are the Figma frame size: they set the aspect ratio and the share of the row.
 * `video` plays over the image (muted, looping) unless the visitor prefers reduced motion; list WebM first,
 * then an MP4 fallback. The image is the poster and what reduced-motion visitors see.
 * `bleed` widens a lone image past the column on both sides (Figma px at 1440) when its artwork has
 * transparent margins, so the visible artwork lines up with the column.
 */
export type ProjectImage = {
  src: string;
  alt: string;
  w: number;
  h: number;
  position?: string;
  video?: string[];
  bleed?: number;
};
/** A row holds images side by side; an array inside a row is a vertical stack sharing one column. */
export type Project = { name: string; services: string; rows: (ProjectImage | ProjectImage[])[][] };
export type Tier = {
  name: string;
  description: string;
  price: string;
  terms: string;
  cta: string;
  features: string[];
  /** The light, larger card with the "Recommended" tag. */
  featured?: boolean;
};

const img = (file: string, alt: string, w: number, h: number, position?: string): ProjectImage => ({
  src: `/homepage/work/${file}.webp`,
  alt,
  w,
  h,
  position,
});

export const homepage = {
  hero: {
    eyebrow: "Brand / Web studio for Tech & AI",
    headline: { lead: "Design that makes customers", accent: "lean in." },
    subhead: "We build brand identities & high impact websites for founder led companies.",
    /** Shown from tablet up; the mobile frame stops at the first sentence. */
    subheadExtra: "Projects starting at $1999.",
    cta: "Book a Discovery Call",
    navCta: "Book a Discovery Call",
  },

  work: {
    headline: { lead: "Selected", accent: "Work" },
    /** Shown before Pricing, in this order. */
    projects: [
      {
        name: "Gearz AI",
        services: "Logo · Brand identity",
        rows: [
          [img("gearz-1", "Gearz logo over an aerial photo of a roundabout, with the words Automotive Intelligence", 1128, 548)],
          [
            img("gearz-2", "Gearz AI wordmark over a yellow-lit tyre", 548, 548),
            img("gearz-3", "Gearz app icon on a phone home screen", 548, 548),
          ],
          [
            img("gearz-4", "Gearz colour palette: Cyber Yellow, Silver and Snow", 317, 396),
            img("gearz-5", "Gearz business cards", 317, 396),
            {
              ...img("gearz-6", "Gearz splash screen: the G monogram unfolds into the Gearz wordmark", 432, 396),
              video: ["/homepage/work/gearz-6.webm", "/homepage/work/gearz-6.mp4"],
            },
          ],
        ],
      },
      {
        name: "Apexxtech.io",
        services: "Logo · Branding · Website",
        rows: [
          [img("apexxtech-1", "Apexxtech website hero: Build better products, without the agency drag", 1128, 871)],
          [
            img("apexxtech-2", "Apexxtech services section", 548, 438, "100% 50%"),
            img("apexxtech-3", "Apexxtech contact form", 548, 438, "100% 50%"),
          ],
          [
            img("apexxtech-4", "Apexxtech How we work section", 548, 438, "0% 50%"),
            img("apexxtech-5", "Apexxtech closing call to action and footer", 548, 438, "0% 50%"),
          ],
        ],
      },
      {
        name: "Answerica AI",
        services: "Logo design",
        rows: [
          [img("answerica-1", "Answerica AI logo on a blue to violet gradient", 1128, 548)],
          [
            img("answerica-2", "Answerica logo construction grid", 316, 394),
            img("answerica-3", "Answerica app icon on a phone lock screen", 315, 394),
            img("answerica-4", "Answerica ad: never miss a call", 432, 394, "26.7% 50%"),
          ],
          [
            img("answerica-5", "Answerica in a browser tab", 432, 324),
            { ...img("answerica-6", "Answerica symbol cycling through the brand colours", 432, 324), video: ["/homepage/work/answerica-6.webm", "/homepage/work/answerica-6.mp4"] },
            img("answerica-7", "Answerica icon set", 200, 324),
          ],
        ],
      },
      {
        name: "Aerospace",
        services: "Web design",
        rows: [[img("aerospace-1", "Aerospace operations website: Ground control for the modern fleet", 1128, 821)]],
      },
    ] satisfies Project[],
    /** Shown after Pricing, continuing the list. */
    more: [
      {
        name: "Mantra",
        services: "Editorial Layout",
        rows: [[img("mantra-1", "Mantra website hero: Above and beyond the ordinary", 1128, 759)]],
      },
      {
        name: "RaveCultur",
        services: "Brand identity",
        rows: [
          [
            {
              ...img("ravecultur-1", "RaveCultur artist plans presentation, slide by slide", 1128, 634),
              video: ["/homepage/work/ravecultur-1.webm", "/homepage/work/ravecultur-1.mp4"],
            },
          ],
        ],
      },
      {
        name: "Falcon Systems",
        services: "Web design",
        rows: [[img("falcon-1", "Falcon Systems website hero: Most IT firms fix problems, we prevent them", 1128, 657)]],
      },
      {
        name: "Bloomberry AI",
        services: "Logo design",
        rows: [
          [
            img("bloomberry-1", "Bloomberry AI wordmark on a deep blue sky", 548, 548),
            // Figma overlaps two images under a bar; these are the two tiles as it shows them
            [
              img("bloomberry-2", "Bloomberry leaf mark in navy on white and in blush on blue", 548, 258),
              img("bloomberry-3", "Bloomberry in a browser tab", 548, 258),
            ],
          ],
        ],
      },
      {
        name: "Balich Wonder SA",
        services: "Brand identity · Presentation",
        rows: [
          [
            {
              ...img("balich-1", "Al Ula Hot Air Balloon presentation spreads: logo, typography, journey and applications", 1142, 662),
              bleed: 7,
            },
          ],
        ],
      },
    ] satisfies Project[],
  },

  pricing: {
    headline: { lead: "Three ways to", accent: "work together." },
    intro: "One fixed price, no surprises. Pick one and tell me about your project.",
    recommended: "Recommended",
    /** In page order: left, centre, right on desktop; top to bottom on mobile. */
    tiers: [
      {
        name: "Sprint",
        description: "One focused project, shipped in 14 days",
        price: "$2,750",
        terms: "14 days · Paid upfront",
        cta: "Start a sprint",
        features: [
          "Pick one: brand identity, landing page, or launch assets",
          "Kickoff strategy call",
          "3 creative directions",
          "2 revision rounds",
          "Final files and handoff",
        ],
      },
      {
        name: "Retainer",
        description: "A full month to give your product the brand and site it deserves.",
        price: "$4,999",
        terms: "1 month · 50% to start",
        cta: "Start a sprint",
        featured: true,
        features: [
          "Full brand identity",
          "Logo, color, type and guidelines",
          "High-impact website, designed and built",
          "Additional pages as needed",
          "Product UI explorations",
          "Launch and social assets",
          "Weekly check-in calls",
          "Shared Slack channel",
        ],
      },
      {
        // Description, CTA and features repeat Sprint's in the Figma file: placeholder copy.
        name: "Partner",
        description: "One focused project, shipped in 14 days",
        price: "$12,000",
        terms: "billed monthly at $4,000",
        cta: "Start a sprint",
        features: [
          "Pick one: brand identity, landing page, or launch assets",
          "Kickoff strategy call",
          "3 creative directions",
          "2 revision rounds",
          "Final files and handoff",
        ],
      },
    ] satisfies Tier[],
    custom: {
      lead: "Need something custom?",
      body: "Tell me what you're building and we'll scope it.",
      link: "Get a custom quote →",
    },
  },

  testimonials: {
    headline: { lead: "Kind words from people I've", accent: "built with." },
    intro: "Founders I've worked with over the years.",
    /** The first is the large featured quote; the rest sit in pairs below it. */
    items: [
      {
        quote: "His passion for design is unmatched. He's willing to spend hours perfecting his work and going beyond his given tasks.",
        name: "Fatos Cunaku",
        role: "Founder, RaveCultur (688K+ followers)",
      },
      {
        quote: "Zeyad's reliability is unmatched. He consistently delivers on his commitments and has a remarkable ability to meet deadlines, even under pressure.",
        name: "Ryan O'Shaughnessy",
        role: "Owner, Medtronica",
      },
      {
        quote: "I remain impressed with his driven work ethic and ability to work creatively with not so much information.",
        name: "Rens Couwenberg",
        role: "Owner, Advertime Media",
      },
    ],
  },

  faq: {
    headline: { lead: "Frequently asked", accent: "questions" },
    /** The first item starts open. Only its answer is in Figma; the others are drafts to review. */
    items: [
      {
        q: "What happens on the discovery call?",
        a: "We spend 30 minutes on your product, your customers and what you need. If it's a fit, you get a clear scope, a timeline and the plan that suits you.",
      },
      {
        // Draft, from the pricing tiers.
        q: "How long does a project take?",
        a: "A Sprint ships in 14 days and a Retainer runs for a month. Anything bigger gets its own timeline, agreed with the scope after the discovery call.",
      },
      {
        // Draft, from the (hidden) Project Approach copy in Figma.
        q: "How involved do I need to be?",
        a: "Mostly at three points: the discovery call, choosing one of the creative directions, and the revision rounds while I refine it into your brand and website.",
      },
      {
        // No source copy yet: write this one, then remove `draft`.
        q: "Do you work alone or with a team?",
        a: "Answer to come.",
        draft: true,
      },
      {
        // Draft, from the current site's website service page.
        q: "Do you only build in Framer?",
        a: "No. I usually build in Next.js on Vercel, because it's fast and easy to grow with. If you'd rather edit the site yourself without code, we can talk about Framer or Webflow on the call.",
      },
      {
        // Draft, from the pricing tiers.
        q: "How do payments work?",
        a: "It depends on the plan: a Sprint is paid upfront, a Retainer starts with 50%, and Partner is billed monthly at $4,000. Custom projects get their terms with the quote.",
      },
    ],
    closing: {
      // Figma has "Still Deciding?" on desktop and "Still deciding?" on mobile.
      headline: { lead: "Still", accent: "deciding?" },
      body: "Here's the questions founders ask most. Anything else, ask me on the call.",
      cta: "Book a Discovery Call",
      headshot: { src: "/homepage/headshot.webp", alt: "Zeyad, who runs Finestkraft" },
    },
  },

  /**
   * An empty href renders the label as plain text, so the footer keeps its Figma look until a link exists.
   * Socials and email default to NEXT_PUBLIC_SAME_AS and NEXT_PUBLIC_CONTACT_EMAIL (see README).
   */
  footer: {
    tagline: "Brand and web studio for tech and AI founders.",
    links: [
      { label: "X (Twitter)", href: profile(/\/\/(www\.)?(x|twitter)\.com\//) },
      { label: "LinkedIn", href: profile(/\/\/([a-z]+\.)?linkedin\.com\//) },
      { label: "Email", href: site.email ? `mailto:${site.email}` : "" },
    ],
    book: { label: "Book a Discovery Call", href: bookHref },
    copyright: "© 2026 Finestkraft LLC",
    // "Privacy Policy" on desktop, "Privacy" on mobile, as in the frames
    legal: [
      { label: "Privacy Policy", short: "Privacy", href: "" },
      { label: "Terms", short: "Terms", href: "" },
    ],
  },
};
