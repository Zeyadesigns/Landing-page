// Service pillars. Each pillar is the hub of one topic cluster: its insights
// (content/insights.ts → `pillar`) link up to it and it links down to them.

export type Chapter = "ink" | "steel" | "paper" | "frost" | "fog" | "cyan";
export type SpecimenKind = "brand" | "web" | "product" | "deck";

export type Service = {
  slug: string;
  name: string;
  /** Short label for nav, tables and tiles */
  short: string;
  specimen: SpecimenKind;
  chapter: Chapter;
  /** <title> and H1 differ on purpose: the title targets the query, the H1 speaks to the founder */
  seoTitle: string;
  seoDescription: string;
  headline: string;
  summary: string;
  /** one fact shown under the specimen tile */
  fact: string;
  intro: string[];
  forWhom: string[];
  deliverables: { name: string; detail: string }[];
  signals: string[];
  faqs: { q: string; a: string }[];
  keywords: string[];
};

export const services: Service[] = [
  {
    slug: "brand-identity",
    name: "Brand identity",
    short: "Brand",
    specimen: "brand",
    chapter: "cyan",
    seoTitle: "Brand Identity Design for Tech & AI Startups",
    seoDescription:
      "Brand identity design for founder-led tech and AI companies: logo, type, colour and a guideline your team can use. Projects start at $1999.",
    headline: "A brand that looks as serious as your technology",
    summary: "Logo, type, colour and the rules that hold them together.",
    fact: "Mark, type, colour, guidelines",
    intro: [
      "Early-stage tech companies are judged in seconds: on a pitch slide, in an investor's inbox, in a list of fifty tools a buyer is comparing. A brand identity is how you win those seconds before anyone reads a word of your product copy.",
      "We design identities for founder-led tech and AI companies: a mark that holds up at 16 pixels and on a stage screen, a type system with a voice, a colour palette that survives dark mode, and a short guideline your first designer, developer or agency can actually follow.",
    ],
    forWhom: [
      "You are raising, launching or repositioning and the current logo was a weekend job.",
      "Your product has outgrown its name's first visual, or you are renaming.",
      "You need one coherent system before you brief a website, a deck and a product UI.",
    ],
    deliverables: [
      { name: "Logo and mark", detail: "Primary logo, monogram or symbol, and lockups for horizontal, stacked and favicon sizes." },
      { name: "Type system", detail: "Typefaces chosen for licence, language coverage and screen rendering, with a working scale." },
      { name: "Colour", detail: "A palette with roles (ground, ink, accent), tested for contrast in light and dark interfaces." },
      { name: "Brand guideline", detail: "A concise guide: usage rules, clear space, do and don't, file naming. Built to be read, not filed." },
      { name: "Source files", detail: "Vector masters, exports for web, social and print, organised for the next person who opens them." },
    ],
    signals: [
      "The mark is legible as a 16px favicon and as an app icon.",
      "Every colour pairing in the guide passes WCAG AA for its stated use.",
      "A developer can implement the type and colour tokens without asking a question.",
    ],
    faqs: [
      {
        q: "Do you do naming?",
        a: "Naming is not one of our core services. If you are still choosing a name, we can review a shortlist for how each will work as a mark, a domain and a word people say out loud, before the identity work starts.",
      },
      {
        q: "Can you keep parts of our current logo?",
        a: "Yes. A refresh keeps what already carries recognition and fixes what holds it back. We decide that together on the discovery call, after looking at where the current logo actually appears.",
      },
      {
        q: "Will we own the files and the rights?",
        a: "You receive the source files and own the final identity once the project is paid. Third-party fonts carry their own licences, which we explain before you choose them.",
      },
    ],
    keywords: ["brand identity design", "startup logo design", "AI startup branding", "tech brand identity"],
  },
  {
    slug: "website-design-development",
    name: "Website design and development",
    short: "Web",
    specimen: "web",
    chapter: "fog",
    seoTitle: "Website Design & Development for Tech Startups",
    seoDescription:
      "High-impact marketing websites for founder-led tech and AI companies, designed and built for speed, search and conversion. Projects start at $1999.",
    headline: "A website that turns a visit into a booked call",
    summary: "Marketing sites designed and built to load fast, rank and convert.",
    fact: "Design, build, launch",
    intro: [
      "For most early-stage companies the website is the sales team that never sleeps: it is where an investor checks you after the intro, where a buyer lands from a search, where a candidate decides whether to apply.",
      "We design and build marketing websites that say what you do in the first screen, prove it in the second, and make the next step obvious. Built on a modern stack, measured against Core Web Vitals, with the search foundations (metadata, structured data, sitemaps) done properly from day one.",
    ],
    forWhom: [
      "Your site still describes the product you had a year ago.",
      "You are launching and need a site that can carry a press moment or a Product Hunt day.",
      "You have traffic but visitors do not understand the product or do not book.",
    ],
    deliverables: [
      { name: "Message and structure", detail: "The page argument: what each section claims and what proves it, before any visual design." },
      { name: "Design", detail: "Desktop and mobile layouts for every template, in your brand, with real copy." },
      { name: "Build", detail: "A fast, accessible site on a modern framework, deployed with previews for every change." },
      { name: "Search foundations", detail: "Titles, descriptions, canonical URLs, schema.org structured data, sitemap and robots." },
      { name: "Handover", detail: "A walkthrough of how to edit content and ship changes without breaking the design." },
    ],
    signals: [
      "A first-time visitor can say what you do after five seconds on the first screen.",
      "Core Web Vitals in the green on a mid-range phone.",
      "Every page has a single, unmistakable next step.",
    ],
    faqs: [
      {
        q: "Which platform do you build on?",
        a: "Usually Next.js on Vercel, because it is fast, flexible and easy to grow with. When a no-code editor matters more to your team, we discuss Framer or Webflow on the call and recommend the one that fits how you will update the site.",
      },
      {
        q: "Can you work with our existing brand?",
        a: "Yes. If you already have an identity we design within it. If it has gaps (no type system, colours that fail contrast), we flag them and fix only what the site needs.",
      },
      {
        q: "Do you write the copy?",
        a: "We shape the message and structure with you and write working copy for every section. You know your product and customers best, so final wording is a shared job.",
      },
    ],
    keywords: ["startup website design", "website development for startups", "AI company website", "Next.js website design"],
  },
  {
    slug: "product-ui-design",
    name: "Product and UI design",
    short: "Product UI",
    specimen: "product",
    chapter: "steel",
    seoTitle: "Product & UI Design for AI and SaaS Products",
    seoDescription:
      "Product and interface design for AI and SaaS companies: clearer flows, a usable design system and screens your engineers can ship. Projects start at $1999.",
    headline: "An interface people trust on the first click",
    summary: "App and SaaS interfaces with a component system engineers can ship.",
    fact: "Flows, screens, components",
    intro: [
      "AI products ask users to trust output they cannot fully inspect. That puts unusual weight on the interface: how a result is shown, how uncertainty is admitted, how a mistake is undone.",
      "We design product interfaces for AI and SaaS teams, from a single critical flow to a full component system. The work is grounded in the screens people actually use every day, with states (loading, empty, error, partial) designed as carefully as the happy path.",
    ],
    forWhom: [
      "Your MVP works but new users get lost before they reach the value.",
      "Engineers are designing screens as they build and the product has drifted.",
      "You are adding AI features and need a pattern for showing and correcting model output.",
    ],
    deliverables: [
      { name: "Flow audit", detail: "A walkthrough of the critical path with the moments users stall, ranked by impact." },
      { name: "Screens", detail: "High-fidelity designs for the agreed flows, every state included." },
      { name: "Component system", detail: "Tokens and components in Figma, named the way your codebase names them." },
      { name: "Prototype", detail: "A clickable prototype for usability sessions or investor demos." },
      { name: "Engineering handover", detail: "Annotated specs and a review pass on the first implemented screens." },
    ],
    signals: [
      "Every screen has designed loading, empty and error states.",
      "Components map one-to-one to code components.",
      "AI output always shows its source or confidence, and can be undone.",
    ],
    faqs: [
      {
        q: "Do you design for web, mobile or both?",
        a: "Web applications are our main focus. We design responsive web apps and can design native screens when they follow the same system, keeping iOS and Android conventions intact.",
      },
      {
        q: "Can you work inside our existing design system?",
        a: "Yes, and it is usually the fastest route. We extend what exists, document what we add, and point out inconsistencies worth fixing later.",
      },
      {
        q: "How do you hand off to engineering?",
        a: "Through Figma with tokens and components named to match your code, plus a review of the first screens your team implements so details do not get lost.",
      },
    ],
    keywords: ["product design for startups", "SaaS UI design", "AI product UX", "design system for startups"],
  },
  {
    slug: "pitch-decks-launch-assets",
    name: "Pitch decks and launch assets",
    short: "Decks",
    specimen: "deck",
    chapter: "paper",
    seoTitle: "Pitch Deck Design & Launch Assets for Founders",
    seoDescription:
      "Investor pitch deck design and launch assets for founder-led tech and AI companies: decks, launch visuals and social kits. Projects start at $1999.",
    headline: "A deck an investor reads to the last slide",
    summary: "Investor decks, launch visuals and social kits in one voice.",
    fact: "Decks, launch kits, social",
    intro: [
      "An investor deck is read fast, often on a phone, often forwarded without you in the room. Its design has one job: make the story impossible to misread.",
      "We design pitch decks and the assets around a launch (announcement visuals, social kits, product imagery for a launch page) so the moment you have been building towards looks like one company speaking with one voice.",
    ],
    forWhom: [
      "You are raising and your deck is a template with your logo on it.",
      "You have a launch date and need visuals for the site, the announcement and social.",
      "Your deck has to work as a send-ahead, not only as a backdrop to your voice.",
    ],
    deliverables: [
      { name: "Story structure", detail: "A slide-by-slide outline that puts problem, product, traction and ask in the right order." },
      { name: "Deck design", detail: "A designed deck in Keynote, PowerPoint, Google Slides or Figma, built from a reusable master." },
      { name: "Data slides", detail: "Charts and diagrams redrawn so the one number that matters reads first." },
      { name: "Launch kit", detail: "Announcement visuals, social formats and a launch-page hero in the same system." },
      { name: "Editable master", detail: "Layouts your team can reuse for updates, board meetings and the next round." },
    ],
    signals: [
      "Each slide makes one point you can say in a sentence.",
      "The deck reads without a presenter, on a phone.",
      "Launch visuals, deck and site share one type and colour system.",
    ],
    faqs: [
      {
        q: "Do you write the deck content?",
        a: "We structure the story with you and tighten every headline. The numbers, the traction and the ask are yours; we make sure they read first.",
      },
      {
        q: "Which tools will the deck be in?",
        a: "Whichever your team edits in: Keynote, PowerPoint, Google Slides or Figma. We build it on a master so later edits stay on-brand.",
      },
      {
        q: "Can you design a deck without a full brand identity?",
        a: "Yes. We work with your current logo and set a minimal type and colour system for the deck, which can grow into a full identity later.",
      },
    ],
    keywords: ["pitch deck design", "investor deck design", "startup launch assets", "AI startup pitch deck"],
  },
];

export const getService = (slug: string) => services.find((s) => s.slug === slug);
