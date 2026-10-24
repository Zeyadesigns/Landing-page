/**
 * Homepage copy, in one place. The copy is not final: edit strings here, not in components.
 * Sections are added as they are built from the Figma frames.
 */

/**
 * One gallery image. w/h are the Figma frame size: they set the aspect ratio and the share of the row.
 * `video` plays over the image (muted, looping) unless the visitor prefers reduced motion.
 */
export type ProjectImage = { src: string; alt: string; w: number; h: number; position?: string; video?: string };
export type Project = { name: string; services: string; rows: ProjectImage[][] };

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
            img("gearz-6", "Gearz G monogram inside a speedometer ring", 432, 396),
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
            { ...img("answerica-6", "Answerica symbol cycling through the brand colours", 432, 324), video: "/homepage/work/answerica-6.mp4" },
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
};
