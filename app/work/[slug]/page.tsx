import { notFound } from "next/navigation";
import Link from "next/link";
import PageIntro from "@/components/templates/PageIntro";
import Chapter from "@/components/ds/Chapter";
import CtaInverted from "@/components/ds/CtaInverted";
import ConceptStill from "@/components/concepts/ConceptStill";
import JsonLd from "@/components/seo/JsonLd";
import { concepts, getConcept } from "@/content/work";
import { getService } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { absolute } from "@/lib/site";
import { breadcrumbList, conceptNode, graph, webPage } from "@/lib/schema";
import styles from "@/components/templates/CaseStudy.module.css";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return concepts.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Params) {
  const c = getConcept((await params).slug);
  if (!c) return {};
  return pageMetadata({
    path: `/work/${c.slug}`,
    title: `${c.name}: ${c.sector} concept`,
    description: `A Finestkraft concept project (not client work). ${c.summary}`,
  });
}

export default async function ConceptPage({ params }: Params) {
  const c = getConcept((await params).slug);
  if (!c) notFound();
  const path = `/work/${c.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Work", path: "/work" },
    { name: `${c.name} (concept)`, path },
  ];
  const idx = concepts.findIndex((x) => x.slug === c.slug);
  const next = concepts[(idx + 1) % concepts.length];
  const svc = c.services.map((s) => getService(s)!).filter(Boolean);

  return (
    <>
      <JsonLd
        data={graph(
          webPage({ path, name: `${c.name} concept`, description: c.summary, crumbs, mainEntity: `${absolute(path)}#work` }),
          breadcrumbList(path, crumbs),
          conceptNode(c),
        )}
      />
      <PageIntro
        theme={c.band}
        crumbs={crumbs}
        title={c.name}
        lede={<p>{c.premise}</p>}
        meta={
          <>
            <span>{c.sector}</span>
            <span>{svc.map((s) => s.name).join(", ")}</span>
          </>
        }
      />

      <Chapter theme="ink" cut labelledBy="frames-title">
        <div className="wrap">
          <h2 id="frames-title" className="sr-only">
            Frames
          </h2>
          <div className={styles.notice} role="note">
            <b>This is a concept.</b> {c.name} is a fictional company. We made this study to show how we approach a brief
            like it; it is not client work and claims no results.
          </div>
          <figure className={styles.cover} data-reveal>
            <ConceptStill concept={c} frame="cover" />
          </figure>
          <p className={styles.summary}>{c.summary}</p>
        </div>
      </Chapter>

      <Chapter theme="paper" cut labelledBy="brief-title">
        <div className="wrap grid">
          <h2 id="brief-title" className={styles.h2}>
            The brief
          </h2>
          <p className={styles.challenge} data-reveal>
            {c.challenge}
          </p>
        </div>
        <div className={`wrap grid ${styles.approachRow}`}>
          <h2 className={styles.h2}>The approach</h2>
          <ul className={styles.approach} data-reveal>
            {c.approach.map((a) => (
              <li key={a.slice(0, 20)}>{a}</li>
            ))}
          </ul>
        </div>
        <div className={`wrap ${styles.detail}`}>
          <figure data-reveal>
            <ConceptStill concept={c} frame="detail" />
          </figure>
        </div>
      </Chapter>

      <Chapter theme="fog" cut labelledBy="deliver-title">
        <div className="wrap grid">
          <div className={styles.col}>
            <h2 id="deliver-title" className={styles.h3}>
              What the project would deliver
            </h2>
            <ul className={styles.list}>
              {c.deliverables.map((d) => (
                <li key={d}>{d}</li>
              ))}
            </ul>
          </div>
          <div className={styles.col2}>
            <h2 className={styles.h3}>What we would measure</h2>
            <ul className={styles.list}>
              {c.measures.map((m) => (
                <li key={m}>{m}</li>
              ))}
            </ul>
          </div>
          <div className={styles.palette}>
            <h2 className={styles.h3}>Palette</h2>
            <ul className={styles.swatches}>
              {Object.entries(c.palette).map(([role, hex]) => (
                <li key={role}>
                  <span style={{ background: hex }} />
                  <b>{role}</b>
                  <code>{hex}</code>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Chapter>

      <Chapter theme="ink" labelledBy="next-title" className={styles.nextChapter}>
        <div className="wrap grid">
          <div className={styles.services}>
            <h2 className={styles.h3}>Services in this concept</h2>
            <ul>
              {svc.map((s) => (
                <li key={s.slug}>
                  <Link href={`/services/${s.slug}`} className="link">
                    {s.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link href={`/work/${next.slug}`} className={styles.next}>
            <span id="next-title" className={styles.nextLabel}>
              Next concept
            </span>
            <span className={styles.nextName}>{next.name}</span>
          </Link>
        </div>
      </Chapter>

      <CtaInverted title={["Make yours", "real."]} />
    </>
  );
}
