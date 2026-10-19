// Concept work. These are self-initiated studies for fictional companies, built
// to show the studio's craft until client work can be published. Every surface
// that shows them says so (PRODUCT.md: honesty over polish).

export type Concept = {
  slug: string;
  name: string;
  /** what the fictional company does */
  premise: string;
  sector: string;
  services: string[]; // service slugs
  /** band (field) and tab colours in the folder stack */
  band: "cyan" | "fog" | "steel" | "paper";
  /** the concept's own palette, used by its drawn stills */
  palette: { ground: string; ink: string; accent: string; soft: string };
  summary: string;
  challenge: string;
  approach: string[];
  deliverables: string[];
  measures: string[];
  published: string;
};

export const concepts: Concept[] = [
  {
    slug: "dars",
    name: "Dars",
    premise: "An AI tutor that helps Arabic-speaking students practise maths and science in their own language.",
    sector: "Education AI",
    services: ["brand-identity", "website-design-development"],
    band: "cyan",
    palette: { ground: "#0e2a47", ink: "#f4f1e8", accent: "#ffb547", soft: "#7f9bb8" },
    summary:
      "A bilingual identity and launch site for a tutoring product whose name means \"lesson\" in Arabic, built to feel patient rather than clinical.",
    challenge:
      "Edtech brands for teenagers swing between childish and corporate. Dars needed to earn a parent's trust and a student's attention at once, in Arabic and English, without treating either script as decoration.",
    approach: [
      "We started from the two scripts. The wordmark pairs a Latin and an Arabic setting drawn to share stroke weight and rhythm, so neither reads as a translation of the other.",
      "The palette takes the deep blue of an exercise-book cover and the amber of a desk lamp: study at night, at home, with help nearby.",
      "The launch site leads with a worked problem, solved step by step in the product's own interface, so a parent sees the method before the promise.",
    ],
    deliverables: ["Bilingual wordmark and app icon", "Type and colour system", "Launch website, Arabic and English", "Social launch kit"],
    measures: ["Share of visitors who start the sample lesson", "Waitlist sign-ups by language", "Parent versus student traffic on the pricing page"],
    published: "2026-10-19",
  },
  {
    slug: "kestrel-grid",
    name: "Kestrel Grid",
    premise: "Load forecasting software that helps regional utilities plan for demand peaks a week ahead.",
    sector: "Energy AI",
    services: ["product-ui-design", "brand-identity"],
    band: "steel",
    palette: { ground: "#101814", ink: "#e9f2ec", accent: "#c6ff3d", soft: "#7f9488" },
    summary:
      "A forecasting interface for grid operators that puts tomorrow's peak, and how sure the model is about it, at the top of every screen.",
    challenge:
      "Operators make expensive decisions from these forecasts. The interface had to show a prediction and its uncertainty together, every time, without burying the one number a control room needs.",
    approach: [
      "Every forecast is drawn as a band, never a single line, so the model's uncertainty is visible before anyone reads a figure.",
      "The home screen answers one question: when is the next peak and how confident are we? Everything else is one click away.",
      "A high-contrast palette, tested for control rooms lit for screens around the clock.",
    ],
    deliverables: ["Forecast dashboard and alert flows", "Component system in Figma", "Identity refresh for the product", "Clickable prototype for operator sessions"],
    measures: ["Time for an operator to state the next peak and its confidence", "Alert acknowledgement time", "Forecast overrides with a reason logged"],
    published: "2026-10-19",
  },
  {
    slug: "verrin",
    name: "Verrin",
    premise: "A lab notebook that turns experiment notes into searchable, structured records with AI.",
    sector: "Science tooling",
    services: ["website-design-development"],
    band: "fog",
    palette: { ground: "#e6ebef", ink: "#1b1f24", accent: "#2f5bff", soft: "#5c636b" },
    summary:
      "A marketing site for a research tool that shows a messy bench note becoming a clean, queryable record, on the first screen.",
    challenge:
      "Scientists distrust software that promises to \"understand\" their work. The site had to prove the transformation with a real-looking example instead of claiming it.",
    approach: [
      "The first screen is the product's mechanism: a handwritten-style note on the left, the structured record it becomes on the right, linked line by line.",
      "Copy written in the language of the bench (protocols, reagents, runs), not of AI marketing.",
      "A built-in example notebook with synthetic data, clearly labelled, that visitors can search.",
    ],
    deliverables: ["Website design and build", "Interactive example notebook", "Search foundations and structured data"],
    measures: ["Searches run in the example notebook", "Demo requests from lab-domain emails", "Time on the security page"],
    published: "2026-10-19",
  },
  {
    slug: "palmo",
    name: "Palmo",
    premise: "Voice AI that answers clinic phone lines and books appointments into existing calendars.",
    sector: "Health operations",
    services: ["pitch-decks-launch-assets"],
    band: "paper",
    palette: { ground: "#ffe3da", ink: "#2a1a14", accent: "#cc3814", soft: "#8a5a4a" },
    summary:
      "A seed deck and launch kit for a voice assistant, designed so the deck reads on a phone and the launch looks like one company everywhere.",
    challenge:
      "The story mixes healthcare, voice and automation, three things investors have heard pitched many times. The deck needed one clear sequence and one number per slide.",
    approach: [
      "We rewrote every slide headline as the point it makes, then designed only what supports that point.",
      "The product is shown as a call transcript turning into a booked slot: the one image that explains the business.",
      "The launch kit derives every format from the deck's cover, so the announcement, social posts and site share one system.",
    ],
    deliverables: ["Seed pitch deck with editable master", "Data slides redrawn from source", "Launch announcement visuals", "Social formats"],
    measures: ["Deck read-through rate in the data room", "Questions in first meetings about what the product does (fewer is better)", "Launch-day link previews rendering correctly"],
    published: "2026-10-19",
  },
];

export const getConcept = (slug: string) => concepts.find((c) => c.slug === slug);
export const conceptsFor = (service: string) => concepts.filter((c) => c.services.includes(service));
