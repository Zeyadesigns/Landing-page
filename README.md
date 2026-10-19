# Finestkraft

Marketing site for Finestkraft, a brand and web studio for founder-led tech and AI companies.
Next.js 16 (App Router, TypeScript), plain CSS with design tokens, deployed on Vercel.

```bash
npm install
npm run dev     # http://localhost:3000
npm run build   # static build: every page is prerendered
npm run lint
```

## Settings (environment variables)

All optional. Unset values are left out of the page and the structured data rather than invented.

| Variable | What it does |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical origin for URLs, sitemap and JSON-LD. Default `https://finestkraft-landing.vercel.app`. Change it when a custom domain is live. |
| `NEXT_PUBLIC_BOOKING_URL` | Where every "Book a call" goes (Cal.com, Calendly…). Unset: `/contact`. |
| `NEXT_PUBLIC_CONTACT_EMAIL` | Shown in the footer and used by the brief builder's "Email this brief". |
| `NEXT_PUBLIC_SAME_AS` | Comma-separated social profile URLs for schema.org `sameAs`. |

Search indexing is on only for Vercel production (`VERCEL_ENV=production`); previews send `noindex` and a disallow-all robots.txt.

## Structure

```
app/                  routes (one folder per template) + sitemap, robots, manifest, icons, OG images, RSS, llms.txt
components/ds/        design-system components: Button, Chapter, SiteHeader, SiteFooter, Breadcrumbs, FaqBands, CtaInverted, TimeBridge, BriefBuilder, Motion
components/home/      home-page chapters
components/templates/ page templates: PageIntro, Prose, and the CSS for pillar, article, case study, hub, studio, contact
components/specimens/ the four drawn service specimens (take a company name)
components/concepts/  drawn stills of the concept projects
content/              all copy and data: services, insights, work, studio, credits
lib/                  site config, metadata builder, schema.org builders, OG image renderer
styles/               tokens.css (the design tokens) and type.css (the five type roles)
design/               incumbent hero CSS and the clustered token report
scripts/              cluster-tokens.mjs: derives the spacing and type tiers
```

## Design system

Documented in [DESIGN.md](DESIGN.md) (tokens in its frontmatter), rendered live at `/design-system` (noindex).
Product facts the design must respect are in [PRODUCT.md](PRODUCT.md).

The spacing and type scales were derived by clustering the original hero's values:

```bash
node scripts/cluster-tokens.mjs --write   # → design/tokens.clusters.json
```

## Content architecture (topic clusters)

Each service is a **pillar** page (`/services/<slug>`) and the hub of one cluster. Each insight
(`/insights/<slug>`) belongs to one pillar (`pillar` in `content/insights.ts`):

- the article links up to its pillar ("From our guide to …") and across to its sibling;
- the pillar lists its cluster ("Read before you brief us") and emits it as an ItemList;
- the insights hub groups articles by pillar.

To add an article, append it to `content/insights.ts` with its `pillar`; the routes, sitemap,
RSS feed, llms.txt, OG image and JSON-LD all follow.

## Page templates and structured data

Every page emits one linked JSON-LD `@graph` (Organization + WebSite + the page's entities):

| Template | Route | Structured data |
| --- | --- | --- |
| Home | `/` | WebPage, Service ×4, ItemList, FAQPage |
| Service hub | `/services` | CollectionPage, BreadcrumbList, ItemList, Service ×4 |
| Service pillar | `/services/[slug]` | WebPage, BreadcrumbList, Service (with Offer, minPrice 1999 USD), FAQPage, ItemList |
| Insights hub | `/insights` | CollectionPage, BreadcrumbList, Blog, ItemList |
| Article | `/insights/[slug]` | WebPage, BreadcrumbList, BlogPosting |
| Work hub | `/work` | CollectionPage, BreadcrumbList, ItemList, CreativeWork ×4 |
| Case study | `/work/[slug]` | WebPage, BreadcrumbList, CreativeWork (genre: concept) |
| Studio | `/studio` | AboutPage, BreadcrumbList |
| Contact | `/contact` | ContactPage, BreadcrumbList |

Also: per-page canonical URLs, Open Graph and Twitter cards with generated 1200×630 images,
`sitemap.xml` with last-modified dates, `robots.txt`, a web manifest, SVG + Apple icons,
an RSS feed at `/insights/feed.xml`, and `/llms.txt`.

## Honesty rules

- Work under `/work` is **concept work** for fictional companies and is labelled so everywhere.
- Demo data inside drawings is labelled synthetic.
- Every photograph that is not the studio's own is credited on `/studio#credits` (`content/credits.ts`).

## Design skills used

Installed in `.claude/skills/` for future sessions:
[impeccable](https://github.com/pbakaus/impeccable) (Apache 2.0),
[taste-skill](https://github.com/Leonxlnx/taste-skill) (MIT) and Anthropic's
[frontend-design](https://github.com/anthropics/skills/tree/main/skills/frontend-design).
Run notes: `.taste-skill/notes.md`; review record: `.impeccable/review/finish-review.md`.
