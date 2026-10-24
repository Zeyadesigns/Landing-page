import { notFound } from "next/navigation";
import Link from "next/link";
import PageIntro from "@/components/templates/PageIntro";
import Chapter from "@/components/ds/Chapter";
import Prose, { headingsOf } from "@/components/templates/Prose";
import CtaInverted from "@/components/ds/CtaInverted";
import Button from "@/components/ds/Button";
import JsonLd from "@/components/seo/JsonLd";
import { getInsight, insights, insightsFor } from "@/content/insights";
import { getService } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { articleNode, breadcrumbList, graph, webPage } from "@/lib/schema";
import { absolute } from "@/lib/site";
import styles from "@/components/templates/Article.module.css";

type Params = { params: Promise<{ slug: string }> };

export const dynamicParams = false;
export function generateStaticParams() {
  return insights.map((i) => ({ slug: i.slug }));
}

export async function generateMetadata({ params }: Params) {
  const a = getInsight((await params).slug);
  if (!a) return {};
  const pillar = getService(a.pillar);
  return pageMetadata({
    path: `/insights/${a.slug}`,
    title: a.title,
    description: a.description,
    type: "article",
    publishedTime: a.published,
    modifiedTime: a.updated,
    section: pillar?.name,
  });
}

const fmt = new Intl.DateTimeFormat("en-GB", { day: "numeric", month: "long", year: "numeric" });

export default async function ArticlePage({ params }: Params) {
  const a = getInsight((await params).slug);
  if (!a) notFound();
  const pillar = getService(a.pillar)!;
  const path = `/insights/${a.slug}`;
  const crumbs = [
    { name: "Home", path: "/" },
    { name: "Insights", path: "/insights" },
    { name: a.title, path },
  ];
  const siblings = insightsFor(a.pillar).filter((i) => i.slug !== a.slug);
  const note = a.body.find((b) => b.type === "note");
  const toc = headingsOf(a.body);

  return (
    <>
      <JsonLd
        data={graph(
          webPage({ path, name: a.title, description: a.description, crumbs, mainEntity: `${absolute(path)}#article`, image: `${path}/opengraph-image` }),
          breadcrumbList(path, crumbs),
          articleNode(a, pillar.name),
        )}
      />
      <PageIntro
        crumbs={crumbs}
        size="title"
        title={a.title}
        lede={<p>{a.description}</p>}
        meta={
          <>
            <Link href={`/services/${pillar.slug}`} className="link">
              {pillar.name}
            </Link>
            <time dateTime={a.published} className="num">
              {fmt.format(new Date(a.published))}
            </time>
            <span className="num">{a.readMinutes} min read</span>
          </>
        }
      />

      <Chapter theme="paper" cut labelledBy="page-title">
        <div className={`wrap grid ${styles.layout}`}>
          <aside className={styles.side}>
            {toc.length ? (
              <nav aria-label="On this page" className={styles.toc}>
                <p className={styles.sideHead}>On this page</p>
                <ol>
                  {toc.map((h) => (
                    <li key={h.id}>
                      <a href={`#${h.id}`}>{h.text}</a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}
          </aside>

          <article className={styles.article}>
            <Prose blocks={a.body} />

            <div className={styles.pillar} data-chapter="cyan">
              <p className={styles.pillarKicker}>From our guide to {pillar.name}</p>
              <p className={styles.pillarText}>{note && "text" in note ? note.text : pillar.summary}</p>
              <Button href={`/services/${pillar.slug}`}>{pillar.name}</Button>
            </div>

            {siblings.length ? (
              <nav aria-label="Related reading" className={styles.related}>
                <h2 className={styles.relatedHead}>Read next</h2>
                <ul>
                  {siblings.map((s) => (
                    <li key={s.slug}>
                      <Link href={`/insights/${s.slug}`} className={styles.relatedLink}>
                        <span>{s.title}</span>
                        <span className="num">{s.readMinutes} min</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ) : null}
          </article>
        </div>
      </Chapter>

      <CtaInverted theme="ink" title={["Want this done", "for you?"]} text={`We do this as our ${pillar.name.toLowerCase()} service. Projects start at $1999.`} />
    </>
  );
}
