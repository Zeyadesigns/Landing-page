// Cluster content. Every article belongs to one service pillar (`pillar`) and
// links up to it; the pillar page lists its cluster. Reading time is computed.

export type Block =
  | { type: "p"; text: string }
  | { type: "h2"; text: string }
  | { type: "ul"; items: string[] }
  | { type: "ol"; items: string[] }
  | { type: "note"; text: string };

export type Insight = {
  slug: string;
  pillar: string;
  title: string;
  description: string;
  published: string;
  updated?: string;
  body: Block[];
};

const raw: Insight[] = [
  {
    slug: "brand-identity-for-ai-startups",
    pillar: "brand-identity",
    title: "What an AI startup's brand identity actually needs",
    description:
      "The parts of a brand identity an early AI company really uses, the parts it can skip, and how to brief the work so it survives contact with a product.",
    published: "2026-10-19",
    body: [
      { type: "p", text: "Most early-stage companies over-buy brand work in one place and under-buy it in another. They commission a sixty-page guideline nobody opens, and ship a logo that turns to mush as a favicon. An AI company has a particular version of this problem, because its brand has to look trustworthy on surfaces it does not control: a model marketplace, a browser tab, a partner's integration page." },
      { type: "h2", text: "Start from where the brand will appear" },
      { type: "p", text: "Before anyone sketches a mark, list the ten places your brand will actually appear in the next twelve months. For most AI startups that list looks like: a favicon and app icon, a product header, an investor deck, a launch announcement, a social avatar, an integration directory, a conference badge, a README, and the website. Design for that list, in that order of importance. A mark that only works large on a poster is a mark for a company you are not yet." },
      { type: "h2", text: "The five parts you will use every week" },
      { type: "ol", items: [
        "A mark that survives 16 pixels. Test it as a favicon on a crowded tab bar before you approve it.",
        "A type system, not a typeface. Two roles at most (display and text), with a scale your developers can turn into tokens.",
        "A colour palette with roles. Ground, ink and one accent, each tested for contrast in light and dark interfaces.",
        "A short guideline. Clear space, minimum sizes, colour pairings that pass, and the three mistakes people will make. A few pages, not sixty.",
        "Organised source files. Named so that the next designer, developer or agency can find the right file in seconds.",
      ] },
      { type: "h2", text: "What you can safely skip at seed" },
      { type: "p", text: "Brand architecture for sub-products you have not built, illustration systems before you know what you need to illustrate, motion principles before the product has motion, and photography direction before you have a photo budget. All of these are real needs later. Paying for them now means paying to guess." },
      { type: "h2", text: "The AI-specific traps" },
      { type: "ul", items: [
        "Neural-network clichés. Glowing nodes, brains and sparkles say \"AI\" in the same way every competitor's does. They date fast and differentiate nothing.",
        "Purple-to-blue gradients. They have become the default visual of the category. If yours is one of fifty tools in a comparison, the default is camouflage.",
        "A name and mark that only work in English. If your customers or models span languages, check how the name reads and sounds in the markets you will sell into.",
      ] },
      { type: "h2", text: "How to brief the work" },
      { type: "p", text: "A good brief for an identity is short and factual: who buys from you, what they are comparing you against, the ten surfaces above, any constraints (an existing name, a colour a partner requires, a deadline tied to a raise), and what the brand must never be mistaken for. Leave the visual answer to the designer, but be specific about the problem." },
      { type: "h2", text: "Test the identity before you approve it"},
      { type: "p", text: "Presentation boards flatter every identity. Before you sign off, put the work where it will actually live and look at it with the eyes of a stranger. Ask the designer for these tests, or run them yourself."},
      { type: "ol", items: ["Open a browser with twenty tabs and add your favicon. Can you find it in under a second?", "Put your logo in a row of competitor logos at the same height. Does it hold its own without being louder than everyone else?", "Drop the mark into a dark-mode product header and a light-mode email signature. Does either version need a special exception?", "Print the guideline's colour pairings and check each one against a contrast checker. Does every pairing pass for the text size it is meant for?", "Hand the guideline to a developer and ask for tokens. Do they come back with questions?"]},
      { type: "p", text: "Each failure is cheap to fix during the project and expensive to fix after launch, when the mark is on a deck, a site, a product and a hundred social posts."},
      { type: "h2", text: "How the identity should connect to the product"},
      { type: "p", text: "For a software company, the product interface is where customers spend most of their time with your brand. An identity that only lives in marketing, with a product that looks like a different company, wastes most of its value. Make sure the type system works at interface sizes, that the palette includes the neutral greys and state colours an interface needs (success, warning, error), and that the accent colour is usable for primary actions without failing contrast."},
      { type: "p", text: "This is also where a small team saves real money: one set of tokens that the website, the product and the deck all read from means design decisions are made once, not three times."},
      { type: "h2", text: "What to budget for, beyond the design"},
      { type: "ul", items: ["Font licences. Some typefaces are free; others are licensed per website, per app or per number of employees. Choose with the licence in front of you.", "Domain and handles. Check that the name works as a domain, on the social platforms you use and in the app stores, before the identity is finalised.", "Trademark. A designer is not a lawyer. If the name and mark matter to your business, a trademark search is worth doing before you print anything."]},
      { type: "note", text: "If you are deciding whether you need a full identity or a refresh, our brand identity page explains how we scope both." },
    ],
  },
  {
    slug: "when-to-rebrand-a-startup",
    pillar: "brand-identity",
    title: "When to rebrand a startup, and when not to",
    description:
      "The good reasons to rebrand an early-stage company, the bad ones, and the cheaper alternative that fixes most problems without starting over.",
    published: "2026-10-19",
    body: [
      { type: "p", text: "A rebrand is one of the few projects that can make a company feel like it is moving fast while standing still. It is also, at the right moment, one of the highest-leverage things a founder can commission. The difference is whether the brand is the actual bottleneck." },
      { type: "h2", text: "Good reasons" },
      { type: "ul", items: [
        "The product has changed category. You started as a developer tool and now sell to finance teams; your brand still speaks to the first audience.",
        "You are raising or launching into a more serious market, and the current identity was made in a weekend for a hackathon.",
        "The name or mark causes real confusion: with a competitor, with a trademark, or in a language you now sell in.",
        "Nobody can implement the brand consistently because there is no system behind the logo.",
      ] },
      { type: "h2", text: "Bad reasons" },
      { type: "ul", items: [
        "A new team member dislikes the colour.",
        "Growth has stalled and a new look feels like action. If the product or the message is the problem, the new look inherits it.",
        "A competitor just rebranded.",
      ] },
      { type: "h2", text: "The refresh: usually the better first move" },
      { type: "p", text: "A refresh keeps whatever already carries recognition (the name, often the core of the mark, sometimes the colour) and rebuilds what holds the brand back: a mark that fails at small sizes, type that renders poorly on screens, a palette that fails contrast, and the missing guideline. It costs less, ships faster, and does not ask customers who already know you to learn you again." },
      { type: "h2", text: "A quick test" },
      { type: "ol", items: [
        "Put your logo on a favicon, a deck cover and a dark-mode product header. Does it hold up on all three?",
        "Show your homepage to someone in your target market for five seconds. Can they say what you do and who it is for?",
        "Ask a new hire to make a social graphic without help. Does it look like your company?",
      ] },
      { type: "p", text: "If the first fails, you need a refresh. If the second fails, you need message work before visual work. If the third fails, you need a system. Only when all three fail, and your market has moved, is a full rebrand the right call." },
      { type: "h2", text: "What a rebrand actually costs"},
      { type: "p", text: "The design fee is the visible part. The larger costs are the ones that come after: updating the website, the product interface, the deck, the email templates, the social profiles, the app store listings, the documentation and every partner directory you appear in. For an early-stage company that is mostly founder and engineering time, and it competes with the roadmap."},
      { type: "p", text: "A good rebrand plan lists every surface the brand appears on, decides which ones change on launch day and which ones change over the following month, and assigns an owner to each. Without that list, old logos linger in corners of the product for years."},
      { type: "h2", text: "How to roll it out without confusing customers"},
      { type: "ul", items: ["Change everything customers see first on one day: website, product header, social avatars, email signatures.", "Tell existing customers before or on the day, in one short message that says what changed and what did not.", "Keep the old logo recognisable in transition if your name stayed the same: a refresh needs less explanation than a new name.", "Redirect old URLs and keep old brand assets out of public download pages so partners stop using them."]},
      { type: "h2", text: "When the name itself is the problem"},
      { type: "p", text: "A new name is a different project from a new identity. It is slower, riskier and needs legal checks, domains and social handles before any design starts. If confusion with another company, a trademark conflict or a meaning in another language is the real issue, solve the name first, then design the identity for the name you will keep."},
      { type: "p", text: "If the name is fine and only the visuals are failing, protect the name. Recognition is the hardest part of a brand to rebuild."},
      { type: "note", text: "Our brand identity service covers both full identities and refreshes. The scope is set on the discovery call." },
    ],
  },
  {
    slug: "startup-website-before-fundraise",
    pillar: "website-design-development",
    title: "What your website needs before you raise",
    description:
      "Investors check your website after the intro and before the meeting. What they look for, what to fix first, and what can wait until after the round.",
    published: "2026-10-19",
    body: [
      { type: "p", text: "Almost every investor who takes an intro will open your website before the first meeting. They are not reading it like a customer. They are checking whether the company in the deck exists as a real, coherent business, and whether the founders can explain what they do without being in the room." },
      { type: "h2", text: "What gets checked in the first minute" },
      { type: "ol", items: [
        "The first screen. Does it say plainly what the product is and who it is for? A clever headline that needs the deck to decode is a missed chance.",
        "Proof. Product screenshots, a demo, customers, design partners, a waitlist count: whatever is real. Absence reads as \"nothing to show\".",
        "Consistency with the deck. Same name, same positioning, same visual system. Two different companies in two tabs creates doubt.",
        "The team. Who is building this, and why them.",
        "Signs of life. A recent update, a changelog, a dated post. A copyright line from two years ago is a quiet red flag.",
      ] },
      { type: "h2", text: "Fix these first" },
      { type: "ul", items: [
        "Rewrite the first screen until a stranger can repeat it back after five seconds.",
        "Replace stock illustration with your real product, even if it is early. A real interface beats a polished abstraction.",
        "Make the site fast on a phone. Many first looks happen on mobile, between meetings.",
        "Give every page one clear next step: book a demo, join the waitlist, read the docs.",
      ] },
      { type: "h2", text: "What can wait until after the round" },
      { type: "p", text: "A blog strategy, a resource library, multi-language versions, elaborate animation and a full careers section can all wait. A raise-ready site is usually smaller than founders expect: a strong home page, a page per product or use case, a short about page, and a way to get in touch." },
      { type: "h2", text: "Do the search basics anyway" },
      { type: "p", text: "Titles and descriptions that say what you do, one canonical URL per page, a sitemap, structured data for your organisation, and preview images that render properly when someone pastes your link into a chat. These take hours, not weeks, and every share of your link benefits from them." },
      { type: "h2", text: "A page structure that works for most early companies"},
      { type: "ol", items: ["Home: what you do, for whom, shown with the real product, and one action.", "Product or use-case pages: one per job your product does, each with its own proof.", "About: who is building this, and why these people.", "Contact or demo: the action, with as few fields as you can manage.", "Legal: privacy and terms, because procurement and investors both look for them."]},
      { type: "p", text: "Five pages, done well, carry most seed-stage companies further than twenty pages done quickly. Each extra page is a page that can go out of date."},
      { type: "h2", text: "Make the site agree with the deck"},
      { type: "p", text: "Investors read your deck and your site in the same afternoon, often side by side. Use the same one-line description in both, word for word. Use the same names for your product and its features. Use the same visual system, so the deck looks like a page of the site rather than a document from another company. Inconsistency is not fatal, but it creates a question you would rather not answer in a first meeting."},
      { type: "h2", text: "Speed is part of the first impression"},
      { type: "p", text: "A slow site reads as a careless company. Most early-stage sites are slow for a few predictable reasons: oversized images, heavy third-party scripts for chat widgets and analytics, and fonts loaded from several places. Compress and size images for the space they fill, load only the scripts you actually use, and self-host your fonts. Then test the site on a mid-range phone on a mobile connection, not on your laptop on office wifi."},
      { type: "h2", text: "A checklist for the week before you raise"},
      { type: "ul", items: ["The first screen says what you do in one line a stranger can repeat.", "Every screenshot shows the current product.", "The team page is current, with roles that match the deck.", "Every link works, including the footer and the legal pages.", "Your link preview shows the right title, description and image in a chat app.", "The contact or demo form reaches a real inbox, and someone answers it."]},
      { type: "note", text: "Our website service is built around this list: message first, then design, then a fast build with the search foundations in place." },
    ],
  },
  {
    slug: "landing-page-structure-for-ai-products",
    pillar: "website-design-development",
    title: "How to structure a landing page for an AI product",
    description:
      "A section-by-section structure for AI product landing pages that leads with what the product does, proves it with real output, and handles trust and pricing honestly.",
    published: "2026-10-19",
    body: [
      { type: "p", text: "AI product pages have converged on one template: a big promise, a gradient, a grid of features with icons, a wall of logos, and a pricing table. Visitors have seen it so many times that it no longer registers. The structure below starts from what a buyer of an AI product actually needs to believe, in the order they need to believe it." },
      { type: "h2", text: "Write the argument before the layout" },
      { type: "p", text: "List what the page must make a visitor believe, one claim per line, and next to each claim the proof you actually have. Every section of the page is one of those lines. A section with no claim gets deleted; a claim with no proof gets reworded or dropped." },
      { type: "h2", text: "A structure that holds up" },
      { type: "ol", items: [
        "What it does, for whom, in one line, with the product visible. Show real output on the first screen: a generated result, a before and after, the interface at work.",
        "The job it replaces. Describe the work your buyer does today without you, in their words, then show the same job done with the product.",
        "How it works, briefly. Enough mechanism to be credible, not a technical paper. Link to docs for the people who want depth.",
        "Where the limits are. Say what the product does not do and how errors are caught. Admitting limits is the strongest trust signal an AI product has.",
        "Proof. Real customers, design partners, usage, benchmarks you can defend. If you have little, show the product in more detail rather than inventing social proof.",
        "Security and data. Where data goes, what is stored, what is used for training. Answer it before procurement asks.",
        "Pricing or the path to it. A starting price, or exactly how pricing is decided.",
        "One action, repeated at the end.",
      ] },
      { type: "h2", text: "Show the output, not the vibe" },
      { type: "p", text: "The most persuasive asset an AI company has is the thing its model produces. A real, specific example (a drafted contract clause, a forecast against what actually happened, a summarised call) does more work than any illustration of a glowing network. If the output is sensitive, build a realistic example with synthetic data and label it as such." },
      { type: "h2", text: "Design choices that help" },
      { type: "ul", items: [
        "Headlines that fit on two lines at every width. Long headlines get skimmed, not read.",
        "Real interface fragments built in HTML, so they stay sharp, load fast and can be updated.",
        "One accent colour, used for the action. When everything is highlighted, nothing is.",
      ] },
      { type: "h2", text: "Handle trust before the visitor asks"},
      { type: "p", text: "Buyers of AI products arrive with a specific set of worries: whether their data will be used to train a model, whether the output can be wrong in ways that hurt them, whether the product will still exist next year. A landing page that waits for a sales call to answer these loses the visitors who never book one."},
      { type: "ul", items: ["State plainly what happens to customer data, where it is processed and whether it is used for training.", "Name the controls customers have: review steps, approvals, audit logs, the ability to turn features off.", "Link to a security page with specifics, and keep it current.", "Show how errors are caught, ideally with an example of the product flagging its own uncertainty."]},
      { type: "h2", text: "Pricing on AI product pages"},
      { type: "p", text: "Usage-based pricing is common for AI products and hard to read. If your price depends on usage, give a worked example in your customers' units (documents a month, calls a day, seats) rather than in tokens or credits. If you sell through a sales process, say what determines the price and roughly where it starts. A visible starting point keeps the visitors who can afford you and saves everyone else a call."},
      { type: "h2", text: "Common mistakes to remove first"},
      { type: "ul", items: ["A headline about the future of work instead of what the product does today.", "A wall of integration logos above the product itself.", "Feature names that only make sense inside your company.", "Three different calls to action competing in the first screen.", "Demo videos with no captions, autoplaying with sound."]},
      { type: "h2", text: "Measure the page, then change one thing at a time"},
      { type: "p", text: "Decide what a successful visit is (a demo booked, a sign-up, a trial started) and measure the share of visitors who do it. Change one section at a time, starting with the first screen, and give each change long enough to show a difference. Small sites rarely have enough traffic for formal tests, so look for large, obvious changes in behaviour rather than small percentages."},
      { type: "note", text: "We design and build pages like this as part of our website service." },
    ],
  },
  {
    slug: "designing-trust-into-ai-interfaces",
    pillar: "product-ui-design",
    title: "Designing trust into AI product interfaces",
    description:
      "Interface patterns that help people trust AI output appropriately: showing sources, admitting uncertainty, making correction easy and keeping the human in control.",
    published: "2026-10-19",
    body: [
      { type: "p", text: "Trust in an AI product is not something to maximise. You want users to trust the output exactly as much as it deserves: enough to save them time, not so much that they stop checking where checking matters. That calibration is mostly an interface problem." },
      { type: "h2", text: "Show where answers come from" },
      { type: "p", text: "When output is grounded in sources (documents, records, search results), show them next to the claim they support, not in a list at the bottom. A user who can verify one claim in a click will trust the rest of the answer more accurately." },
      { type: "h2", text: "Admit uncertainty in the interface, not just the disclaimer" },
      { type: "ul", items: [
        "Distinguish confident from tentative output visually, with words where they fit (\"likely\", \"no match found\") rather than raw scores most people cannot interpret.",
        "Design the \"I don't know\" state. A model that sometimes declines, and says why, is more trustworthy than one that always answers.",
        "Never style a guess like a fact. Generated values in a form should look different from values the user typed or confirmed.",
      ] },
      { type: "h2", text: "Make correction cheap" },
      { type: "p", text: "Every AI action should be reviewable before it is final and reversible after. Inline editing of generated text, undo for automated actions, and a clear history of what the system changed turn mistakes from incidents into edits." },
      { type: "h2", text: "Keep the human in the loop where it matters" },
      { type: "p", text: "Decide, per action, whether the system suggests, drafts or acts. Sending an email, moving money, deleting data and changing permissions should need explicit confirmation. Summarising, drafting and sorting usually should not. Make the level visible, so users know which mode they are in." },
      { type: "h2", text: "Design the waiting" },
      { type: "p", text: "Generation takes time. Stream partial output where it is meaningful, show what the system is doing when it is not, and let people keep working instead of watching a spinner. Long waits with no feedback read as failure." },
      { type: "h2", text: "A checklist for every AI screen" },
      { type: "ol", items: [
        "Can the user see what the output is based on?",
        "Can they tell a confident answer from a guess?",
        "Can they correct or undo it in one step?",
        "Is it clear whether the system suggested something or did it?",
        "Are loading, empty, partial and error states designed?",
      ] },
      { type: "h2", text: "Explain what the system can see"},
      { type: "p", text: "Many AI mistakes come from missing context: the model did not have access to the document, the date, or the setting that would have changed its answer. Show users what the system is working from (which files, which account, which time range) and let them change it. When people can see the inputs, they understand the outputs and forgive the mistakes they can trace."},
      { type: "h2", text: "Write the error messages the model will need"},
      { type: "p", text: "AI features fail in more ways than ordinary software: a timeout, a refusal, a low-confidence result, a source that could not be read, a rate limit. Each needs its own message that says what happened and what the user can do next. A generic \"Something went wrong\" is especially damaging here, because users cannot tell whether the model failed, the product failed, or they did something wrong."},
      { type: "ul", items: ["Name the failure: \"We could not read page 4 of this PDF\" rather than \"Error processing file\".", "Offer the next step: retry, choose another source, continue without it.", "Keep the user's work: never lose a long prompt or an edited draft because a request failed."]},
      { type: "h2", text: "Let feedback change something"},
      { type: "p", text: "Thumbs up and down buttons are everywhere and often lead nowhere visible. If you ask for feedback, show what happens to it: the correction is saved to the record, the source is marked as unreliable, the example is used to improve future results. Feedback that visibly changes something gets given; feedback that vanishes stops being given."},
      { type: "h2", text: "Test with the real failure cases"},
      { type: "p", text: "Usability sessions for AI features tend to use the demo scenario, where the model performs well. Add the uncomfortable cases on purpose: an ambiguous request, a missing source, a confidently wrong answer. Watch whether people notice, whether they can correct it, and whether they still trust the next answer. Those sessions show more about the interface than ten sessions on the happy path."},
      { type: "note", text: "We design with these patterns in our product and UI design service." },
    ],
  },
  {
    slug: "signs-your-mvp-interface-needs-a-redesign",
    pillar: "product-ui-design",
    title: "Signs your MVP interface needs a redesign",
    description:
      "How to tell whether your product's interface is now holding growth back, which problems a redesign fixes, and how to redesign without stopping the roadmap.",
    published: "2026-10-19",
    body: [
      { type: "p", text: "An MVP interface is supposed to be rough. Its job was to prove that someone wants the thing. The question is when \"rough\" stops being a sensible trade-off and starts costing you users, deals and engineering time." },
      { type: "h2", text: "The signs" },
      { type: "ul", items: [
        "New users need a call to get to value. If onboarding depends on a human walkthrough, the interface is not explaining the product.",
        "Support questions repeat. The same \"where do I…\" question every week is a design bug, not a documentation gap.",
        "Every new feature adds a new pattern. Three different table styles, four kinds of modal, buttons that mean different things on different screens.",
        "Engineers design while they build. Without a component system, every screen is a fresh decision, and the product drifts.",
        "Sales demos avoid parts of the product. If your team steers around a screen, so will your buyers.",
      ] },
      { type: "h2", text: "What a redesign should and should not fix" },
      { type: "p", text: "A redesign is the right tool for navigation that no longer matches what the product does, inconsistent patterns, missing states and a visual layer that undermines credibility. It is the wrong tool for a product that solves the wrong problem, or a pricing and packaging question dressed up as a UX one." },
      { type: "h2", text: "Redesign without stopping the roadmap" },
      { type: "ol", items: [
        "Audit the critical path first: sign-up to first value. Rank the moments people stall.",
        "Build the component system from the screens you have, not from a blank file, so it fits the real product.",
        "Ship the redesign flow by flow behind the existing navigation, starting where the audit found the most friction.",
        "Leave stable, rarely used screens for last. Consistency matters, but not more than impact.",
      ] },
      { type: "h2", text: "Measure the right things" },
      { type: "p", text: "Pick two or three measures before you start: time from sign-up to first meaningful action, the share of new users who reach it, and the volume of the support questions the audit found. Compare them before and after each flow ships, so the redesign is judged on behaviour rather than on opinions about how it looks." },
      { type: "h2", text: "Where redesigns go wrong"},
      { type: "ul", items: ["Redesigning everything at once. The team stops shipping features for months and the new version arrives with new bugs and no proof it is better.", "Copying a successful competitor's interface. Their navigation reflects their product, their users and their history, not yours.", "Starting from the visual style. A new colour palette over the same confusing flows changes how the product looks in screenshots, not how it works.", "Skipping the empty and error states. The demo path looks finished while real users meet the unfinished parts every day."]},
      { type: "h2", text: "Questions to ask before you commit"},
      { type: "ol", items: ["Which single flow, if it were easy, would change your numbers most?", "What do new users try to do in their first session, and where do they stop?", "Which screens do your engineers dread changing, and why?", "What will you stop building while this happens, and can you afford that?"]},
      { type: "p", text: "If you cannot answer the first question, start with research, not design. A week of watching real sessions and reading support threads is cheaper than a redesign aimed at the wrong flow."},
      { type: "h2", text: "Bring engineering in from the first day"},
      { type: "p", text: "A redesign that ignores how the product is built becomes a set of beautiful screens that ship slowly and drift from the design within months. Agree early on how components will be named, which parts of the existing code can be kept, and how the new design will be rolled out. The best redesigns end with fewer components in the codebase than they started with."},
      { type: "note", text: "Our product and UI design service starts with this audit." },
    ],
  },
  {
    slug: "pitch-deck-design-what-investors-see",
    pillar: "pitch-decks-launch-assets",
    title: "Pitch deck design: what an investor actually sees",
    description:
      "How investors read pitch decks in practice, and the design decisions that make a deck's story impossible to misread: headlines, data slides, structure and format.",
    published: "2026-10-19",
    body: [
      { type: "p", text: "Founders design decks for the meeting. Investors often meet the deck first: forwarded in an email, opened on a phone, skimmed between other decks. Design for that reading, and the presented version gets better too." },
      { type: "h2", text: "Each slide is one sentence" },
      { type: "p", text: "Write the headline of every slide as the point it makes, not the topic it covers. \"Market\" is a topic. \"Mid-size logistics firms spend weeks a quarter on manual reconciliation\" is a point. Read only the headlines in order: if they tell the whole story, the deck works without you." },
      { type: "h2", text: "Make the one number read first" },
      { type: "ul", items: [
        "Every data slide has one number that matters. Make it the largest thing on the slide.",
        "Redraw charts from the source data in your brand, with the axis labels a reader needs and nothing else.",
        "Label what a number is and over what period. Unlabelled growth charts invite the worst interpretation.",
      ] },
      { type: "h2", text: "Structure that respects the reader" },
      { type: "ol", items: [
        "What you do, in one line, on the cover or the slide after.",
        "The problem, as your customer experiences it.",
        "The product, shown, not described.",
        "Why now, and why you.",
        "Traction, honestly framed.",
        "Business model and market.",
        "The team.",
        "The ask, and what it gets you to.",
      ] },
      { type: "h2", text: "Format details that matter more than they should" },
      { type: "ul", items: [
        "Export a PDF that is light enough to email and legible on a phone screen.",
        "Use type sizes that survive a small screen: if you have to zoom, the slide has too much on it.",
        "Keep a send-ahead version and a presented version. The first needs more words; the second needs fewer.",
        "Build it on a master, so updates for the next meeting, the board or the next round stay consistent.",
      ] },
      { type: "h2", text: "Design decisions that help a deck read fast"},
      { type: "ul", items: ["One typeface family, at most two weights, and the same headline size on every slide.", "A consistent position for the headline, so the eye knows where to look on every slide.", "Real product screenshots, cropped to the part that matters, instead of the whole screen at thumbnail size.", "Colour used to point, not to decorate: the one bar, line or number you want read first gets the accent.", "Generous margins. A slide filled edge to edge reads as a document, and documents get skimmed."]},
      { type: "h2", text: "Data slides deserve the most design time"},
      { type: "p", text: "Traction, market and financial slides carry the most weight and are most often designed last. Redraw every chart from the source data instead of pasting a screenshot from your analytics tool. Remove gridlines, legends and decimal places that do not change the reading. Put the takeaway in the headline (what the chart proves) and let the chart be the evidence underneath."},
      { type: "p", text: "Be careful with axes. A growth chart that starts the vertical axis above zero to make growth look steeper will be noticed, and it costs more credibility than the steeper line gains."},
      { type: "h2", text: "Mistakes that cost attention"},
      { type: "ul", items: ["A cover with only a logo, so the reader opens slide two to learn what you do.", "Dense paragraphs written for a reader, presented to a room.", "Team slides with photos and no reason why these people.", "A market slide with one giant number and no path from it to your revenue.", "An ask with no plan: how much, for how long, to reach which milestone."]},
      { type: "h2", text: "Keep the deck alive"},
      { type: "p", text: "A deck is used for months: first meetings, follow-ups, the data room, board updates. Build it on a master with defined layouts so updates take minutes and stay consistent. Keep a changelog slide or file so you always know which version an investor saw."},
      { type: "note", text: "Our pitch deck service starts with the headline story before any slide is designed." },
    ],
  },
  {
    slug: "launch-asset-checklist",
    pillar: "pitch-decks-launch-assets",
    title: "The launch asset checklist for a tech product",
    description:
      "Every visual asset a tech product launch needs, from the launch page hero to social formats and press images, and how to keep them consistent.",
    published: "2026-10-19",
    body: [
      { type: "p", text: "A launch is a few days when many people see your company for the first time, in many places at once. Every one of those places needs an asset in the right format, and the launch looks like one company only if they share a system." },
      { type: "h2", text: "The core set" },
      { type: "ul", items: [
        "Launch page hero: the product at work, with the one-line description and the action.",
        "Open Graph image: what your link looks like when it is pasted into a chat or a post. Test it before launch day.",
        "Announcement visual: one image that carries the news on its own, in landscape and square.",
        "Product shots: real screens, cropped to the feature you are announcing, at high resolution.",
        "Short demo clip: under a minute, captioned, with a poster frame that makes sense without sound.",
        "Social avatar and banner refresh, so profiles match the launch.",
      ] },
      { type: "h2", text: "For press and partners" },
      { type: "ul", items: [
        "A press page with the logo in light and dark, founder photos, product shots and a short description in several lengths.",
        "Partner and integration directory listings: icon, logo, short description and screenshots at each directory's sizes.",
      ] },
      { type: "h2", text: "Keep it one system" },
      { type: "ol", items: [
        "Start from one master composition, usually the launch page hero, and derive the other formats from it.",
        "Use the same type, colour and image treatment everywhere. Resist one-off styles for one channel.",
        "Write the one-line description once and reuse it word for word.",
        "Name and store files so someone else can post on launch day without asking you.",
      ] },
      { type: "h2", text: "The day before" },
      { type: "p", text: "Paste every launch link into a chat app and check its preview. Open the launch page on a phone on a slow connection. Read the announcement image at thumbnail size. Most launch-day visual problems are found in these three checks." },
      { type: "h2", text: "Formats to prepare"},
      { type: "p", text: "Every platform crops differently, and launch day is a bad time to discover it. Prepare each asset in the shapes it will actually be shown in, and check the safe areas where platform interfaces cover the image."},
      { type: "ul", items: ["Landscape at 1200 by 630 for link previews.", "Square for feeds and directories.", "Vertical for stories and short-form video.", "A wide banner for profile headers.", "A small icon that reads at 48 pixels for directories and integration listings."]},
      { type: "h2", text: "Write the words once"},
      { type: "p", text: "A launch generates a surprising amount of copy: the announcement, the social posts, the directory descriptions, the press note, the changelog entry. Write one short description, one medium and one long, and reuse them everywhere. Consistency helps people recognise the same launch in different places, and it saves the team from writing the same thing ten slightly different ways on the day."},
      { type: "h2", text: "Make the product the hero of every asset"},
      { type: "p", text: "Launch visuals often drift towards abstract graphics because they are easier to make look polished. The asset that does the most work is usually a clear, cropped view of the product doing the thing you are announcing. If the feature is hard to show in a still, use a short captioned clip and give it a poster frame that makes sense on its own."},
      { type: "h2", text: "After launch"},
      { type: "ul", items: ["Collect every asset and its source file in one shared folder for the next announcement.", "Update the press page with the new product shots.", "Note which formats and channels worked, so the next launch starts from what you learned."]},
      { type: "note", text: "Our launch assets service builds the whole set from one system, alongside the deck if you need one." },
    ],
  },
];

const words = (b: Block) =>
  ("text" in b ? b.text : b.items.join(" ")).split(/\s+/).filter(Boolean).length;

export type InsightWithMeta = Insight & { readMinutes: number; words: number };

export const insights: InsightWithMeta[] = raw.map((i) => {
  const count = i.body.reduce((n, b) => n + words(b), 0);
  return { ...i, words: count, readMinutes: Math.max(1, Math.round(count / 230)) };
});

export const getInsight = (slug: string) => insights.find((i) => i.slug === slug);
export const insightsFor = (pillar: string) => insights.filter((i) => i.pillar === pillar);
