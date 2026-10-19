import Link from "next/link";
import Chapter from "@/components/ds/Chapter";
import ConceptStill from "@/components/concepts/ConceptStill";
import { concepts } from "@/content/work";
import { services } from "@/content/services";
import styles from "./WorkFolders.module.css";

const serviceName = (slug: string) => services.find((s) => s.slug === slug)?.short ?? slug;

/** Concept projects filed as folders that stack as the page scrolls. */
export default function WorkFolders({ headingLevel = 2 }: { headingLevel?: 2 | 3 }) {
  const H = `h${headingLevel}` as "h2";
  return (
    <Chapter theme="ink" id="work" labelledBy="work-title" className={styles.chapter}>
      <div className="wrap">
        <div className={styles.head} data-reveal>
          <H id="work-title" className={styles.title}>
            Concept work
          </H>
          <p className={styles.note}>
            Self-initiated studies for fictional companies, made to show how we think until client work can be
            published.{" "}
            <Link href="/work" className="link">
              All concepts
            </Link>
          </p>
        </div>
      </div>

      <ol className={styles.stack}>
        {concepts.map((c, i) => (
          <li key={c.slug} className={styles.folder} style={{ ["--i" as string]: i }}>
            <div className={styles.tabs}>
              <span className={styles.tab} data-chapter={c.band}>
                {c.name}
              </span>
              <span className={`${styles.tab} ${styles.tabConcept}`}>Concept</span>
            </div>
            <article className={styles.band} data-chapter={c.band} aria-labelledby={`folder-${c.slug}`}>
              <div className={`wrap ${styles.strip}`}>
                <span>{c.sector}</span>
                <span>{c.services.map(serviceName).join(", ")}</span>
              </div>
              <div className={`wrap grid ${styles.body}`}>
                <Link href={`/work/${c.slug}`} className={styles.still} tabIndex={-1} aria-hidden="true">
                  <ConceptStill concept={c} />
                </Link>
                <div className={styles.copy}>
                  <h3 id={`folder-${c.slug}`} className={styles.name}>
                    {c.name}
                  </h3>
                  <p className={styles.premise}>{c.premise}</p>
                  <p>{c.summary}</p>
                  <Link href={`/work/${c.slug}`} className={`link ${styles.more}`}>
                    Read the {c.name} concept
                  </Link>
                </div>
              </div>
            </article>
          </li>
        ))}
      </ol>
    </Chapter>
  );
}
