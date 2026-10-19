import Image from "next/image";
import Link from "next/link";
import Chapter from "@/components/ds/Chapter";
import { insights } from "@/content/insights";
import { services } from "@/content/services";
import { photos } from "@/content/credits";
import styles from "./InsightsTable.module.css";

/** Statement heading, the index pushed right, grouped by service pillar. */
export default function InsightsTable() {
  const p = photos.nileBanks;
  return (
    <Chapter theme="ink" id="insights" labelledBy="insights-title">
      <div className="wrap">
        <h2 id="insights-title" className={styles.title} data-reveal>
          <span>What we have learned,</span>
          <span>written down</span>
        </h2>

        <div className={`grid ${styles.body}`}>
          <figure className={styles.figure}>
            <Image src={p.src} alt={p.caption} width={p.width} height={p.height} sizes="(max-width: 900px) 60vw, 22vw" />
          </figure>
          <p className={styles.label} aria-hidden="true">
            Insights
          </p>
          <div className={styles.table}>
            {services.map((s) => (
              <ul key={s.slug} className={styles.group} aria-label={s.name}>
                {insights
                  .filter((i) => i.pillar === s.slug)
                  .map((i) => (
                    <li key={i.slug}>
                      <Link href={`/insights/${i.slug}`} className={styles.row}>
                        <span className={styles.kind}>{s.short}</span>
                        <span className={styles.what}>{i.title}</span>
                        <span className={`${styles.value} num`}>
                          {i.readMinutes} min
                          <svg viewBox="0 0 12 12" aria-hidden="true">
                            <path d="M2 10L10 2M4 2h6v6" fill="none" stroke="currentColor" strokeWidth="1.5" />
                          </svg>
                        </span>
                      </Link>
                    </li>
                  ))}
              </ul>
            ))}
            <Link href="/insights" className={`link ${styles.all}`}>
              All insights
            </Link>
          </div>
        </div>
      </div>
    </Chapter>
  );
}
