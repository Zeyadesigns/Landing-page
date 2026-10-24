import Link from "next/link";
import PageIntro from "@/components/templates/PageIntro";
import Chapter from "@/components/ds/Chapter";
import CtaInverted from "@/components/ds/CtaInverted";
import JsonLd from "@/components/seo/JsonLd";
import { insights, insightsFor } from "@/content/insights";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { absolute, site } from "@/lib/site";
import { breadcrumbList, graph, ids, itemList, webPage } from "@/lib/schema";
import styles from "@/components/templates/Hub.module.css";

const path = "/insights";
const title = "Startup Brand and Web Design Insights";
const description =
  "Practical writing for founders of tech and AI companies on brand identity, startup websites, product UI and pitch decks.";
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Insights", path },
];

export const metadata = pageMetadata({ path, title, description });

const fmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default function InsightsHub() {
  return (
    <>
      <JsonLd
        data={graph(
          webPage({ path, name: title, description, crumbs, type: "CollectionPage", mainEntity: `${absolute(path)}#blog` }),
          breadcrumbList(path, crumbs),
          {
            "@type": "Blog",
            "@id": `${absolute(path)}#blog`,
            name: `${site.name} Insights`,
            url: absolute(path),
            publisher: { "@id": ids.org },
            blogPost: insights.map((i) => ({ "@id": `${absolute(`/insights/${i.slug}`)}#article`, headline: i.title, url: absolute(`/insights/${i.slug}`) })),
          },
          itemList(path, "Insights", insights.map((i) => ({ name: i.title, path: `/insights/${i.slug}` }))),
        )}
      />
      <PageIntro
        crumbs={crumbs}
        title="Insights"
        lede={<p>What we have learned about making early-stage companies look as good as their product, grouped by the work it informs.</p>}
        meta={
          <a href="/insights/feed.xml" className="link">
            Subscribe by RSS
          </a>
        }
      />

      <Chapter theme="paper" cut labelledBy="groups-title">
        <div className="wrap">
          <h2 id="groups-title" className="sr-only">
            Articles by service
          </h2>
          <div className={styles.groups}>
            {services.map((s) => (
              <section key={s.slug} className={`grid ${styles.group}`} aria-labelledby={`g-${s.slug}`}>
                <div className={styles.groupHead}>
                  <h2 id={`g-${s.slug}`}>{s.name}</h2>
                  <Link href={`/services/${s.slug}`} className="link">
                    The {s.short.toLowerCase()} service
                  </Link>
                </div>
                <ul className={styles.articles}>
                  {insightsFor(s.slug).map((i) => (
                    <li key={i.slug} data-reveal>
                      <Link href={`/insights/${i.slug}`} className={styles.article}>
                        <span className={styles.articleTitle}>{i.title}</span>
                        <span className={styles.articleDesc}>{i.description}</span>
                        <span className={`${styles.articleMeta} num`}>
                          <time dateTime={i.published}>{fmt.format(new Date(i.published))}</time> · {i.readMinutes} min read
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </section>
            ))}
          </div>
        </div>
      </Chapter>

      <CtaInverted theme="ink" title={["Rather talk", "it through?"]} />
    </>
  );
}
