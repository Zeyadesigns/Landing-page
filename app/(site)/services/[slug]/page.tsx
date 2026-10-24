import { notFound } from "next/navigation";
import Link from "next/link";
import PageIntro from "@/components/templates/PageIntro";
import Chapter from "@/components/ds/Chapter";
import FaqBands from "@/components/ds/FaqBands";
import CtaInverted from "@/components/ds/CtaInverted";
import ConceptStill from "@/components/concepts/ConceptStill";
import JsonLd from "@/components/seo/JsonLd";
import { specimenFor } from "@/components/specimens/Specimens";
import { getService, services } from "@/content/services";
import { insightsFor } from "@/content/insights";
import { conceptsFor } from "@/content/work";
import { pageMetadata } from "@/lib/seo";
import { absolute } from "@/lib/site";
import { breadcrumbList, faqNode, graph, itemList, serviceNode, webPage } from "@/lib/schema";
import styles from "@/components/templates/Pillar.module.css";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Params) {
  const s = getService((await params).slug);
  if (!s) return {};
  return pageMetadata({ path: `/services/${s.slug}`, title: s.seoTitle, description: s.seoDescription });
}


export default async function ServicePage({ params }: Params) {
  const s = getService((await params).slug);
  if (!s) notFound();
  const path = `/services/${s.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: s.name, path },
  ];
  const cluster = insightsFor(s.slug);
  const concepts = conceptsFor(s.slug);
  const Specimen = specimenFor[s.specimen];
  const others = services.filter((o) => o.slug !== s.slug);

  return (
    <>
      <JsonLd
        data={graph(
          webPage({ path, name: s.seoTitle, description: s.seoDescription, crumbs, mainEntity: `${absolute(path)}#service` }),
          breadcrumbList(path, crumbs),
          serviceNode(s),
          faqNode(path, s.faqs),
          itemList(path, `${s.name} insights`, cluster.map((i) => ({ name: i.title, path: `/insights/${i.slug}` }))),
        )}
      />

      <PageIntro
        theme={s.chapter}
        crumbs={crumbs}
        title={s.name}
        lede={
          <>
            <p className={styles.headline}>{s.headline}.</p>
            <p>{s.summary} Projects start at $1999.</p>
          </>
        }
      />

      <Chapter theme="ink" cut labelledBy="why-title">
        <div className="wrap grid">
          <div className={styles.whyHead}>
            <h2 id="why-title" className={styles.h2plain}>
              Why it matters
            </h2>
            <div className={styles.specimen} data-shape={s.specimen} data-chapter={s.chapter}>
              <Specimen name="Your company" />
            </div>
          </div>
          <div className={styles.copy} data-reveal>
            {s.intro.map((p) => (
              <p key={p.slice(0, 24)}>{p}</p>
            ))}
          </div>
        </div>
        <div className={`wrap grid ${styles.second}`}>
          <h2 className={styles.h2}>Is this for you?</h2>
          <ul className={styles.forWhom} data-reveal>
            {s.forWhom.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
        </div>
      </Chapter>

      <Chapter theme="paper" cut labelledBy="get-title">
        <div className="wrap">
          <h2 id="get-title" className={styles.big}>
            What you get
          </h2>
          <dl className={styles.deliverables}>
            {s.deliverables.map((d) => (
              <div key={d.name} className="grid" data-reveal>
                <dt>{d.name}</dt>
                <dd>{d.detail}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Chapter>

      <Chapter theme="cyan" cut labelledBy="signals-title">
        <div className="wrap grid">
          <h2 id="signals-title" className={styles.h2}>
            How you will know it worked
          </h2>
          <ul className={styles.signals} data-reveal>
            {s.signals.map((x) => (
              <li key={x}>{x}</li>
            ))}
          </ul>
        </div>
      </Chapter>

      {concepts.length ? (
        <Chapter theme="ink" labelledBy="concepts-title">
          <div className="wrap">
            <h2 id="concepts-title" className={styles.big}>
              In concept work
            </h2>
            <ul className={styles.concepts}>
              {concepts.map((c) => (
                <li key={c.slug} className="grid" data-reveal>
                  <Link href={`/work/${c.slug}`} className={styles.conceptStill} tabIndex={-1} aria-hidden="true">
                    <ConceptStill concept={c} />
                  </Link>
                  <div className={styles.conceptCopy}>
                    <h3>
                      <Link href={`/work/${c.slug}`} className="link">
                        {c.name}
                      </Link>{" "}
                      <span className={styles.badge}>Concept</span>
                    </h3>
                    <p>{c.summary}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </Chapter>
      ) : null}

      <Chapter theme="fog" cut labelledBy="cluster-title">
        <div className="wrap grid">
          <h2 id="cluster-title" className={styles.h2}>
            Read before you brief us
          </h2>
          <ul className={styles.cluster}>
            {cluster.map((i) => (
              <li key={i.slug} data-reveal>
                <Link href={`/insights/${i.slug}`} className={styles.clusterLink}>
                  <span className={styles.clusterTitle}>{i.title}</span>
                  <span className={styles.clusterDesc}>{i.description}</span>
                  <span className={`${styles.clusterMeta} num`}>{i.readMinutes} min read</span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Chapter>

      <FaqBands id="service-faq" title={`${s.short} questions`} items={s.faqs} />

      <Chapter theme="ink" labelledBy="others-title" className={styles.othersChapter}>
        <div className="wrap">
          <h2 id="others-title" className={styles.h2small}>
            Other services
          </h2>
          <ul className={styles.others}>
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`/services/${o.slug}`}>{o.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      </Chapter>

      <CtaInverted title={["Start with", "a call."]} text={`Tell us about your ${s.name.toLowerCase()} project. You leave the call with a scope and a price.`} />
    </>
  );
}
