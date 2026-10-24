import Link from "next/link";
import PageIntro from "@/components/templates/PageIntro";
import Chapter from "@/components/ds/Chapter";
import Button from "@/components/ds/Button";
import Breadcrumbs from "@/components/ds/Breadcrumbs";
import ConceptStill from "@/components/concepts/ConceptStill";
import { BrandSpecimen, DeckSpecimen, ProductSpecimen, WebSpecimen } from "@/components/specimens/Specimens";
import { concepts } from "@/content/work";
import { pageMetadata } from "@/lib/seo";
import clusters from "@/design/tokens.clusters.json";
import styles from "@/components/templates/DesignSystem.module.css";

const path = "/design-system";
export const metadata = pageMetadata({
  path,
  title: "Design System",
  description: "The Finestkraft design system: tokens, type, space, the cut, components and page templates.",
  noindex: true,
});

const primitives = [
  ["--bg", "#101010", "Ground, ink chapters"],
  ["--white", "#FFFFFF", "Ink on dark fields"],
  ["--warm-white", "#FBFAFA", "Paper chapter"],
  ["--off-white", "#F9FFFF", "Frost chapter"],
  ["--light-grey", "#D9D9D9", "Fog chapter, soft ink on dark"],
  ["--mid-grey", "#3F3F3F", "Steel chapter, soft ink on light"],
  ["--cyan", "#00FFFF", "The accent: actions, the price, one chapter"],
  ["--black", "#000000", "Ink on cyan"],
] as const;
const ramp = ["--cyan-900", "--cyan-700", "--cyan-500", "--cyan-300", "--cyan-100"];
const chapters = ["ink", "steel", "paper", "frost", "fog", "cyan"] as const;
const steps = [
  ["--step-display", "Chapter headings", "Projects start"],
  ["--step-title", "Page and section titles, hero h1", "Design that makes"],
  ["--step-lead", "Statements, ledes, specimen names", "A brand that looks as serious as your technology"],
  ["--step-body", "Running text (16px floor on phones: 17px)", "Founders are judged in seconds: on a pitch slide, in an inbox, in a list of fifty tools."],
  ["--step-small", "Meta, captions, labels", "Published 19 October 2026"],
] as const;
const space = [
  ["--space-2xs", "8px"], ["--space-xs", "12px"], ["--space-s", "20px"], ["--space-m", "28px"],
  ["--space-l", "40px"], ["--space-xl", "56px"], ["--space-2xl", "72–128px"], ["--space-3xl", "96–200px"],
] as const;
const templates = [
  ["Home", "/", "WebPage + Service × 4 + ItemList + FAQPage"],
  ["Service hub", "/services", "CollectionPage + ItemList + Service × 4"],
  ["Service pillar", "/services/brand-identity", "WebPage + Service + FAQPage + ItemList (cluster)"],
  ["Insights hub", "/insights", "CollectionPage + Blog + ItemList"],
  ["Article (cluster)", "/insights/brand-identity-for-ai-startups", "WebPage + BlogPosting"],
  ["Work hub", "/work", "CollectionPage + ItemList + CreativeWork × 4"],
  ["Case study (concept)", "/work/dars", "WebPage + CreativeWork (genre: concept)"],
  ["Studio", "/studio", "AboutPage"],
  ["Contact", "/contact", "ContactPage"],
] as const;

export default function DesignSystemPage() {
  return (
    <>
      <PageIntro
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Design system", path },
        ]}
        title="Design system"
        lede={
          <p>
            Everything the site is built from. Colour comes from the Figma styles; the spacing and type scales come from
            clustering the values in the original hero; the cut corner is the one shaping device.
          </p>
        }
      />

      {/* ---------- Colour ---------- */}
      <Chapter theme="paper" cut labelledBy="ds-colour">
        <div className="wrap">
          <h2 id="ds-colour" className={styles.h2}>Colour</h2>
          <ul className={styles.swatches}>
            {primitives.map(([token, hex, use]) => (
              <li key={token}>
                <span className={styles.chip} style={{ background: `var(${token})` }} />
                <code>{token}</code>
                <span className="num">{hex}</span>
                <span className={styles.use}>{use}</span>
              </li>
            ))}
          </ul>
          <h3 className={styles.h3}>Cyan ramp, for ordered sequences</h3>
          <div className={styles.ramp}>
            {ramp.map((t) => (
              <div key={t} style={{ background: `var(${t})` }}>
                <code>{t}</code>
              </div>
            ))}
          </div>
          <h3 className={styles.h3}>Chapters: a field and its inks</h3>
          <div className={styles.chapters}>
            {chapters.map((c) => (
              <div key={c} data-chapter={c} className={styles.chapterSample}>
                <p className={styles.chapterName}>{c}</p>
                <p className="ink-soft">Soft ink for secondary text.</p>
                <Button href="#ds-colour">Action</Button>
              </div>
            ))}
          </div>
        </div>
      </Chapter>

      {/* ---------- Type ---------- */}
      <Chapter theme="ink" labelledBy="ds-type">
        <div className="wrap">
          <h2 id="ds-type" className={styles.h2}>Type</h2>
          <p className={styles.note}>
            Manrope everywhere. Hedvig Letters Serif only for the hero&apos;s accent, Geist Mono only for the studio clock and {/* taste-skill-ignore: documents the brand faces */}
            code. Five steps; every size on the site maps onto one.
          </p>
          <ul className={styles.steps}>
            {steps.map(([token, use, sample]) => (
              <li key={token}>
                <div className={styles.stepMeta}>
                  <code>{token}</code>
                  <span>{use}</span>
                </div>
                <p style={{ fontSize: `var(${token})`, lineHeight: token.includes("display") || token.includes("title") ? 0.98 : 1.4, letterSpacing: token.includes("display") ? "-0.035em" : token.includes("title") ? "-0.03em" : undefined }}>
                  {sample}
                </p>
              </li>
            ))}
          </ul>
        </div>
      </Chapter>

      {/* ---------- Space (clustered) ---------- */}
      <Chapter theme="fog" cut labelledBy="ds-space">
        <div className="wrap grid">
          <div className={styles.half}>
            <h2 id="ds-space" className={styles.h2}>Space</h2>
            <p className={styles.note}>
              Derived by 1-D k-means (log scale) over every spacing value in the original hero:{" "}
              <code>scripts/cluster-tokens.mjs</code>. Three tiers came out (silhouette {clusters.space.silhouette}); each
              tier holds two steps, and a section tier was added for long pages.
            </p>
            <ul className={styles.clusterList}>
              {clusters.space.clusters.map((c) => (
                <li key={c.token}>
                  <b className="num">{c.token}px tier</b>
                  <span className="num">from {c.members.join(", ")}</span>
                </li>
              ))}
            </ul>
            <p className={styles.note}>
              Type clustered into {clusters.type.k} tiers (silhouette {clusters.type.silhouette}):{" "}
              {clusters.type.clusters.map((c) => `${c.token}px from ${c.members.join(", ")}`).join("; ")}.
            </p>
          </div>
          <ul className={`${styles.half2} ${styles.spaceScale}`}>
            {space.map(([token, value]) => (
              <li key={token}>
                <code>{token}</code>
                <span className="num">{value}</span>
                <i style={{ width: `var(${token})` }} />
              </li>
            ))}
          </ul>
        </div>
      </Chapter>

      {/* ---------- The cut ---------- */}
      <Chapter theme="cyan" cut labelledBy="ds-cut">
        <div className="wrap grid">
          <div className={styles.half}>
            <h2 id="ds-cut" className={styles.h2}>The cut</h2>
            <p className={styles.noteStrong}>
              The monogram ends in a diagonal; the button cuts two corners. The same cut, at every scale, is the
              system&apos;s only shaping device. Everything else is square.
            </p>
          </div>
          <ul className={`${styles.half2} ${styles.cuts}`}>
            <li><Button href="#ds-cut">--chamfer, 12px</Button><span>Buttons, inputs, menus</span></li>
            <li><span className={styles.cutTile} /><span>--chamfer-lg on tiles, frames, chapters</span></li>
            <li><span className={styles.cutBullet} /><span>List bullets</span></li>
          </ul>
        </div>
      </Chapter>

      {/* ---------- Components ---------- */}
      <Chapter theme="paper" cut labelledBy="ds-components">
        <div className="wrap">
          <h2 id="ds-components" className={styles.h2}>Components</h2>
          <div className={styles.components}>
            <section>
              <h3 className={styles.h3}>Button</h3>
              <div className={styles.row}>
                <Button href="#ds-components">Book a Discovery Call</Button>
                <div data-chapter="ink" className={styles.inline}><Button href="#ds-components">On ink</Button></div>
                <div data-chapter="cyan" className={styles.inline}><Button href="#ds-components">On cyan</Button></div>
              </div>
            </section>
            <section>
              <h3 className={styles.h3}>Breadcrumbs</h3>
              <Breadcrumbs items={[{ name: "Home", path: "/" }, { name: "Insights", path: "/insights" }, { name: "An article", path: "/insights/x" }]} />
            </section>
            <section>
              <h3 className={styles.h3}>Specimens (take a company name)</h3>
              <div className={styles.specimens}>
                {[BrandSpecimen, WebSpecimen, ProductSpecimen, DeckSpecimen].map((S, i) => (
                  <div key={i} className={styles.specimenTile} data-chapter={(["cyan", "steel", "fog", "ink"] as const)[i]}>
                    <S name="Northwind" />
                  </div>
                ))}
              </div>
            </section>
            <section>
              <h3 className={styles.h3}>Concept stills (two frames each)</h3>
              <div className={styles.stills}>
                {concepts.map((c) => (
                  <ConceptStill key={c.slug} concept={c} frame="detail" />
                ))}
              </div>
            </section>
          </div>
        </div>
      </Chapter>

      {/* ---------- Templates ---------- */}
      <Chapter theme="ink" labelledBy="ds-templates">
        <div className="wrap">
          <h2 id="ds-templates" className={styles.h2}>Page templates</h2>
          <p className={styles.note}>
            Every template opens with <code>PageIntro</code> (header, breadcrumbs, the page&apos;s one h1) and closes with{" "}
            <code>CtaInverted</code>. Each emits one linked JSON-LD graph with Organization and WebSite.
          </p>
          <table className={styles.table}>
            <thead>
              <tr><th>Template</th><th>Example</th><th>Structured data</th></tr>
            </thead>
            <tbody>
              {templates.map(([name, href, schema]) => (
                <tr key={name}>
                  <td>{name}</td>
                  <td><Link href={href} className="link">{href}</Link></td>
                  <td>{schema}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Chapter>
    </>
  );
}
