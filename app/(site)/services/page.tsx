import Link from "next/link";
import PageIntro from "@/components/templates/PageIntro";
import Chapter from "@/components/ds/Chapter";
import CtaInverted from "@/components/ds/CtaInverted";
import JsonLd from "@/components/seo/JsonLd";
import { services } from "@/content/services";
import { pageMetadata } from "@/lib/seo";
import { breadcrumbList, graph, itemList, serviceNode, webPage } from "@/lib/schema";
import styles from "@/components/templates/Hub.module.css";

const path = "/services";
const title = "Design Services for Tech and AI Startups";
const description =
  "Four services for founder-led tech and AI companies: brand identity, website design and development, product and UI design, pitch decks and launch assets. Projects start at $1999.";
const crumbs = [
  { name: "Home", path: "/" },
  { name: "Services", path },
];

export const metadata = pageMetadata({ path, title, description });

export default function ServicesHub() {
  return (
    <>
      <JsonLd
        data={graph(
          webPage({ path, name: title, description, crumbs, type: "CollectionPage" }),
          breadcrumbList(path, crumbs),
          itemList(path, "Services", services.map((s) => ({ name: s.name, path: `/services/${s.slug}` }))),
          ...services.map(serviceNode),
        )}
      />
      <PageIntro
        crumbs={crumbs}
        title="Services"
        lede={<p>Four things we make for founder-led tech and AI companies, alone or together. Projects start at $1999.</p>}
      />

      <Chapter theme="paper" cut labelledBy="list-title">
        <div className="wrap">
          <h2 id="list-title" className="sr-only">
            All services
          </h2>
          <ul className={styles.poster}>
            {services.map((s) => (
              <li key={s.slug} data-reveal>
                <Link href={`/services/${s.slug}`} className={`grid ${styles.posterRow}`}>
                  <span className={styles.posterName}>{s.short}</span>
                  <span className={styles.posterText}>
                    <b>{s.name}</b>
                    {s.summary}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </Chapter>

      <CtaInverted theme="ink" title={["Not sure which", "you need?"]} text="Tell us what you are working towards. On the call we will recommend where to start, and why." />
    </>
  );
}
