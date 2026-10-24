/**
 * Homepage copy, in one place. The copy is not final: edit strings here, not in components.
 * Sections are added as they are built from the Figma frames.
 */

/**
 * One gallery image. w/h are the Figma frame size: they set the aspect ratio and the share of the row.
 * `video` plays over the image (muted, looping) unless the visitor prefers reduced motion; list WebM first,
 * then an MP4 fallback. The image is the poster and what reduced-motion visitors see.
 */
export type ProjectImage = { src: string; alt: string; w: number; h: number; position?: string; video?: string[] };
export type Project = { name: string; services: string; rows: ProjectImage[][] };
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
};
