# Finestkraft: taste-skill run notes

## 1. Inventory (things only this client has)
1. The name: Finest + Kraft (German for strength, and an echo of craft).
2. The K/F monogram: an angular glyph whose stroke ends in a diagonal cut.
3. The cut-corner (chamfered) button: top-left and bottom-right corners cut.
4. Pure screen cyan, #00FFFF: the RGB additive primary, the colour of a screen and not of paint.
5. The studio's live clock in Cairo time (Africa/Cairo), shown in the hero.
6. The published entry price: projects start at $1999.
7. One audience: founder-led tech and AI companies.
8. Four services: brand identity, websites, product UI, pitch decks and launch assets.
9. The mirrored monochrome arc of light in the hero background.
10. The promise in the hero: customers "lean in".
11. Cairo itself: the city the studio works from, many hours away from a founder in SF or a founder in Singapore.

## 2. The argument (claim → proof, one line per section)
- hero: we make founders' companies look as credible as their technology → the site itself, the price, the call.
- services (features): four things we make → each one shown as a specimen, carrying the visitor's own company name.
- work: what our craft looks like → four concept projects, drawn as finished stills, labelled as concepts.
- how-it-works: a project is short and has a known shape → five stages from call to launch.
- pricing: the price is public → "Projects start at $1999" and what sets the final scope.
- about (studio): a small studio in Cairo, working with founders anywhere → the city, the clock, how we work across time zones.
- faq: the questions founders ask before a call → answered in full.
- list (insights): we write down how we think → the article index, grouped by service.
- cta: back to the promise → book the call.
- footer: the name, where we are, every page.

## 3. Direction
`colour-chapters`, seed 830485780, `--keep palette,type` (brand fixed). Why: the brand already owns one loud flat colour (cyan) and one geometric cut. Chapters let the cyan grow from a button into whole fields, and the cut corner can become the edge of the fields, the folder tabs and the picture frames.
Redraws:
- list → `list-statement-table-pushed-right`: no dated events exist, so day tabs would bend the content; insights are a table of titles.
- hero slot not used: the client's approved hero is a brand commitment (PRODUCT.md), and the brief wins over the dealt "giant cropped shape".

## 4. The idea
On this page, **the cut corner of the Finestkraft monogram and button** becomes **the edge of every colour chapter, folder tab and picture frame**.
Competitor test: another studio has no cut-corner mark, so the sentence fails for them. It belongs to Finestkraft.

The one live thing: **"Try your company name"**. The visitor types their company name and the four service specimens (a brand lockup, a website first screen, a product UI header, a deck title slide) re-set themselves with it, live. Phone-friendly, no script needed (fallback name: "Your company").

## 5. Brand exceptions (kept, reported)
- The hero keeps the Hedvig serif accent ("lean in.") and Geist Mono on the eyebrow and clock: they are the client's approved hero. New sections use Manrope only, with tabular figures where numbers align.
- The hero eyebrow "Brand / Web studio for Tech & AI" stays as the client's positioning line. No eyebrows anywhere else.

## 8. Critique

ROUND 1 (inspect.mjs: 0 FAIL, 5 WARN after fixes)
Seen in one second: a dark studio hero with one cyan action, then a stack of full-bleed colour chapters joined by cut corners.
Idea (one sentence): the cut corner of the Finestkraft monogram and button becomes the edge of every chapter, folder tab, frame and bullet.
Live thing: "Type your company name" re-sets four service specimens live (plus the Cairo/your-time bridge in the studio chapter).
Layout words by section: hero=split grid (incumbent) / services=specimen tiles 4:5 + 8:5 / work=folders with tabs / process=dark-to-light accordion / pricing=one sentence with price block / studio=inset panel, shaped picture / faq=band per question / insights=statement, table pushed right / cta=inverted close / footer=name first.
Scores: design 8 · usability 8 · creativity 8 · content 7 → overall 7.9
Caps applied: overall ≤ 6.5 because the client-approved hero keeps its monospace eyebrow and clock (brand commitment, PRODUCT.md). Without the brand exception the arithmetic is 7.9.
Top three problems (most visible first):
1. desktop-page-03: the insights chapter leaves ~400px of empty ground above the bottom-aligned Nile photograph. Fix: centre the photograph against the table (done).
2. desktop-page-03: the studio panel's lower right is empty below the button once the shaped picture ends. Accepted as the panel's one rest; the picture closes the left half.
3. desktop-page-02: the pricing chapter holds one sentence across a 90svh field. Accepted: it is the page's deliberate colour rest and the inspector no longer reports a blank stretch.

Defended WARNs: mixed-font headline (the hero's serif "lean in." is the brand), size count (container-scaled specimen artwork and the full-width footer wordmark), no footage (no honest clip of the studio's world exists in the open collections; the hero arc drifts as the moving picture), lopsided @768 (type-only close).
