# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Founders of early-stage and growing tech and AI companies, usually the person who signs off on brand and website work. They arrive while preparing a launch, a raise, or a repositioning, and need to judge in minutes whether this studio can make their company look as credible as the technology is. Secondary readers: co-founders and early marketing leads who are forwarded the link.

## Product Purpose

Finestkraft is a brand and web studio for tech and AI companies. The site exists to turn a qualified founder into a booked discovery call. Success is a founder understanding what the studio does, what it costs to start, and booking a call.

## Positioning

A focused studio for founder-led tech and AI companies, not a generalist agency: brand identity and high-impact websites built for this one audience, with a published entry price ("Projects starting at $1999").

## Operating Context

- Primary action: "Book a Discovery Call". The booking destination (Cal.com, Calendly, form) is **undecided**; the CTA currently anchors to `#book`.
- The studio shows its local time in the hero (Africa/Cairo timezone, computed live).
- Founders often evaluate on mobile from a shared link, then return on desktop.

## Capabilities and Constraints

Services offered (confirmed):
1. Brand identity
2. Website design and development
3. Product / UI design
4. Pitch decks and launch assets

Constraints:
- Stack: Next.js (App Router, TypeScript), deployed on Vercel.
- Canonical origin: `https://finestkraft-landing.vercel.app` for now, set by one env var (`NEXT_PUBLIC_SITE_URL`) so a custom domain is a one-line change.
- Undecided: booking tool, contact email, social profiles, legal entity name and address, pricing for anything beyond the $1999 starting point.

## Brand Commitments

- Name: Finestkraft. Monogram mark (the K/F glyph in `components/Logo.tsx`).
- Hero line: "Design that makes customers lean in." and the sub-line "We build brand identities & high impact websites for founder led companies. Projects starting at $1999".
- Eyebrow: "Brand / Web studio for Tech & AI".
- Incumbent visual system lives in code (`app/globals.css`, `components/Hero.module.css`): Manrope, Hedvig Letters Serif, Geist Mono; cyan accent `#00FFFF` on `#101010`; chamfered (cut-corner) buttons; mirrored monochrome arc background.

## Evidence on Hand

- No real client work, testimonials, logos, metrics or press yet.
- The user approved **clearly labelled concept placeholders** for work and case studies. Every placeholder must say it is a concept. Never present it as a real client, result or quote, and never mark it up as a real Review, Rating or client Organization in structured data.

## Product Principles

1. One audience, said plainly: founders building tech and AI companies.
2. Price transparency is part of the pitch; keep the starting price visible.
3. Every page leads to the discovery call.
4. Honesty over polish: concept work is labelled as concept until real work replaces it.
5. The site itself is the portfolio piece; its craft is the first proof.

## Accessibility & Inclusion

WCAG 2.2 AA as the floor: visible keyboard focus, reduced-motion respected, sufficient contrast on the cyan accent (dark text on cyan, never cyan text on light).
