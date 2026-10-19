---
name: Finestkraft
description: Brand and web studio for founder-led tech and AI companies. Colour chapters joined by one cut corner.
colors:
  ground: "#101010"
  white: "#FFFFFF"
  warm-white: "#FBFAFA"
  off-white: "#F9FFFF"
  light-grey: "#D9D9D9"
  mid-grey: "#3F3F3F"
  cyan: "#00FFFF"
  black: "#000000"
  cyan-900: "#002E2E"
  cyan-700: "#005C5C"
  cyan-500: "#00A8A8"
  cyan-100: "#B8FFFF"
typography:
  display:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(52px, 8.4vw, 148px)"
    fontWeight: 400
    lineHeight: 0.94
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(40px, 5vw, 72px)"
    fontWeight: 400
    lineHeight: 0.97
    letterSpacing: "-0.03em"
  lead:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "clamp(20px, 1.6vw, 26px)"
    fontWeight: 400
    lineHeight: 1.3
    letterSpacing: "-0.015em"
  body:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "18px"
    fontWeight: 400
    lineHeight: 1.5
    letterSpacing: "-0.005em"
  small:
    fontFamily: "Manrope, system-ui, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.45
    letterSpacing: "0"
  hero-accent:
    fontFamily: "Hedvig Letters Serif, Georgia, serif"
    fontSize: "inherit"
    fontWeight: 400
    lineHeight: 0.97
    letterSpacing: "-0.03em"
  clock:
    fontFamily: "Geist Mono, ui-monospace, monospace"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.2
    letterSpacing: "0.01em"
rounded:
  none: "0"
  chamfer: "12px"
  chamfer-lg: "clamp(28px, 4vw, 64px)"
spacing:
  2xs: "8px"
  xs: "12px"
  s: "20px"
  m: "28px"
  l: "40px"
  xl: "56px"
  2xl: "clamp(72px, 9vw, 128px)"
  3xl: "clamp(96px, 14vw, 200px)"
  gutter: "40px"
components:
  button-primary:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.black}"
    rounded: "{rounded.chamfer}"
    padding: "0 22px"
    height: "50px"
  button-primary-on-light:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.cyan}"
    rounded: "{rounded.chamfer}"
    padding: "0 22px"
    height: "50px"
  input-text:
    backgroundColor: "{colors.white}"
    textColor: "{colors.black}"
    rounded: "{rounded.chamfer}"
    padding: "0 16px"
    height: "52px"
  chip:
    backgroundColor: "{colors.light-grey}"
    textColor: "{colors.ground}"
    rounded: "{rounded.none}"
    padding: "0 16px"
    height: "44px"
  folder-tab:
    backgroundColor: "{colors.cyan}"
    textColor: "{colors.black}"
    rounded: "{rounded.none}"
    padding: "0 28px 0 22px"
    height: "48px"
---

# Design System: Finestkraft

## Overview

**Creative North Star: "The Cut Corner"**

Finestkraft's monogram ends in a diagonal and its button cuts two corners. The system takes that one cut and uses it at every scale: on buttons and inputs, on folder tabs, on the corner of every picture frame and specimen tile, as the list bullet, and, at page scale, as the top-left corner of each full-bleed colour chapter, so the chapter above shows through the diagonal. Everything else is square.

Pages are built as **colour chapters**: full-bleed fields of one flat colour, butted together, each holding one thing at full size. Pure screen cyan (#00FFFF), the colour of a display rather than of paint, is the brand's only saturated colour. It starts as the button and grows into whole chapters at the moments that matter: the price, the questions, the brand pillar.

The system was extracted from the client's approved hero (kept as a brand commitment) and extended to a full site for a founder audience: confident, plain-spoken and quick to read.

**Key Characteristics:**
- One cut, at every scale; no rounded corners anywhere.
- Flat colour fields, never gradients; fields change at hard edges.
- One typeface (Manrope) for everything outside the hero.
- Cyan for actions and for whole chapters, never for small text on light grounds.
- Real pictures in greyscale; drawn interface fragments in their own palettes.

## Colors

### Primary
- **Screen Cyan** (`cyan`, #00FFFF): the action colour (buttons, the price block, list bullets on dark) and one chapter colour (`[data-chapter="cyan"]`). Black ink on it (16:1).

### Neutral
- **Ground** (`ground`, #101010): the hero and every `ink` chapter. White ink (18:1), light-grey soft ink.
- **Steel** (`mid-grey`, #3F3F3F): the `steel` chapter and inset panels. White ink (10:1).
- **Fog** (`light-grey`, #D9D9D9): the `fog` chapter and soft ink on dark fields.
- **Paper** (`warm-white`, #FBFAFA): the `paper` chapter, where long reading happens.
- **Frost** (`off-white`, #F9FFFF): a cyan-tinted paper for the `frost` chapter.

### Cyan ramp
`cyan-900 → cyan-700 → cyan-500 → cyan → cyan-100`: one hue, dark to light, used only where order matters (the five process stages). The ramp carries the sequence so no numerals are needed.

### Named Rules
**The Chapter Rule.** A colour is a place, not a decoration: it fills a whole section edge to edge, with its own assigned inks (`--field`, `--ink`, `--ink-soft`, `--action-bg`, `--action-ink`). Neighbouring chapters differ in lightness as well as hue.

**The Inverted Action Rule.** On light fields (paper, frost, fog, cyan) the action flips to a ground-coloured button with cyan text; cyan never sits on white as a fill for text.

## Typography

**Body and display font:** Manrope (300, 400, 500), self-hosted through `next/font`.
**Hero accent:** Hedvig Letters Serif, only on "lean in." in the hero headline (brand commitment).
**Clock and code:** Geist Mono, only on the hero's positioning line and live clock, and in `<pre>`/`<code>`.

**Character:** a quiet, slightly technical grotesk set large and tight. The type does the shouting so the colour does not have to compete with ornament.

### Hierarchy
Five steps; every size on the site maps onto one of them. They come from clustering the hero (see Layout) into a **text tier** and a **display tier**, each split in two, plus a lead.
- **Display** (`--step-display`, clamp 52→148px, 0.94, -0.035em): chapter headings, page H1s on hubs.
- **Title** (`--step-title`, clamp 40→72px, 0.97, -0.03em): the hero H1, section titles, long H1s.
- **Lead** (`--step-lead`, clamp 20→26px, 1.3): statements, ledes, specimen names. Statements stay at or under 36px.
- **Body** (`--step-body`, 18px; 17px on phones, 1.5): running text in full ink, 62ch measure.
- **Small** (`--step-small`, 14px, 1.45): meta, captions, breadcrumbs. Nothing readable under 13px.

### Named Rules
**The Two-Line Rule.** Every heading fits on two lines at 1440, 768 and 390px. Cut words before shrinking type.

**The No-Label Rule.** No eyebrow or kicker above a heading anywhere except the hero's approved positioning line.

## Layout

One 12-column grid (`.wrap.grid`), one pair of outer margins (`--gutter`: 40px, 20px on phones), max width 1680px. Asymmetry lives inside the grid; the outer margins are always equal.

**Spacing was derived, not invented.** `scripts/cluster-tokens.mjs` runs 1-D k-means in log space over every spacing value in the incumbent hero CSS (`design/incumbent/`). The best silhouette (0.645) found three tiers, recorded in `design/tokens.clusters.json`:
- **tight** (8, 10, 14) → `--space-2xs` 8px, `--space-xs` 12px
- **group** (20, 22, 24, 28) → `--space-s` 20px, `--space-m` 28px
- **separation** (34 … 56) → `--space-l` 40px, `--space-xl` 56px
- **section** (extension, not clustered) → `--space-2xl` clamp(72, 9vw, 128), `--space-3xl` clamp(96, 14vw, 200), for gaps between chapters on long pages.

Type clustered into two tiers (silhouette 0.799): text (12, 16, 18) and display (40, 44, 60, 72).

Chapters are 72–128px apart vertically. More space above a heading than below it. Phones get their own composition (stacked, full-width actions), not a shrunken desktop.

## Elevation & Depth

Flat. Surfaces separate by a **tone step** (`color-mix` 4–10% of the ink into the field), never by a line or a resting shadow. The only shadows are on things that truly float: windows inside drawn interface fragments (`data-ui`). Focus is shown with an inset ring, because `clip-path` hides outlines.

## Shapes

**The cut** is the only shaping device:
- `--chamfer` (12px; 10px on phones): buttons, inputs, menu sheets. Top-left and bottom-right corners cut.
- `--chamfer-lg` (clamp 28→64px): top-left corner of chapters, specimen tiles, picture frames, CTA panels.
- The bullet: a small square with two cut corners.
- Folder tabs: both top corners cut (a shouldered tab).

Corner radius is 0 everywhere else. The cut animates on hover (`--c` grows 1.6×) as the button's feedback.

## Components

### Buttons
`components/ds/Button`: one shape, 50px tall, 16px label, chamfered. Fill and ink come from the chapter (`--action-bg`, `--action-ink`). Hover: brightness up and a deeper cut; active: 1px press; focus: 3px inset ring. Label names the action ("Book a Discovery Call", never "Submit").

### Inputs / Fields
White field, 2px ink border, top-left cut, 18px text, cyan caret. Focus thickens the border inward.

### Chips
Selectable chips in the brief builder: a tone step at rest, ink-filled when on, 44px tall, top-left cut.

### Navigation
`SiteHeader`: the monogram, four plain links (Services, Work, Insights, Studio) and one action. It lives inside each page's first chapter and takes its colours. Under 900px the links collapse to one word, "Menu", a `<details>` sheet that works without script.

### Breadcrumbs
On every inner page above the H1, 14px soft ink with a drawn chevron; mirrored by a BreadcrumbList in the page's JSON-LD.

### Chapter (signature)
`components/ds/Chapter`: a full-bleed `<section>` with `theme` (ink, steel, paper, frost, fog, cyan), optional `cut` (overlaps the chapter above and clips its own top-left corner) and `tall` (90svh poster).

### Specimens (signature)
Four drawn service specimens (brand lockup, website first screen, product UI, deck title slide) sized in container units; each takes a company name. On the home page the visitor types their own.

### Folder stack, FAQ bands, inverted close
Concept work filed as colour bands under shouldered tabs, a second white tab always reading "Concept"; one full-bleed band per question with every answer visible; and the close, which flips the page's colours and repeats the promise.

## Do's and Don'ts

### Do:
- **Do** start a new section as a `Chapter` with a theme whose lightness differs from its neighbour.
- **Do** map every size onto one of the five type steps and every gap onto a space token.
- **Do** use the cut for anything that needs a shape, at the scale of the thing.
- **Do** label concept work and synthetic demo data where a visitor could mistake it for real.
- **Do** show pictures in greyscale and credit every one on `/studio#credits`.

### Don't:
- **Don't** add rounded corners, gradients, glass, glows or resting shadows.
- **Don't** put an eyebrow or kicker above a heading, or number sections 01/02/03.
- **Don't** use monospace outside the hero clock line and real code.
- **Don't** set cyan text on a light field, or grey running text.
- **Don't** build a row of identical icon cards; each section takes its own composition.
- **Don't** invent clients, quotes, results or prices beyond the published starting price.
