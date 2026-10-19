import SiteHeader from "@/components/ds/SiteHeader";
import Breadcrumbs from "@/components/ds/Breadcrumbs";
import type { Crumb } from "@/lib/schema";
import type { Chapter } from "@/content/services";
import styles from "./PageIntro.module.css";

type Props = {
  theme?: Chapter;
  crumbs: Crumb[];
  title: React.ReactNode;
  lede?: React.ReactNode;
  /** small facts under the lede (date, reading time, pillar) */
  meta?: React.ReactNode;
  /** right-hand column: a specimen, a still, an action */
  aside?: React.ReactNode;
  size?: "display" | "title";
};

/** The first chapter of every inner page: header, breadcrumbs, the page's one h1. */
export default function PageIntro({ theme = "ink", crumbs, title, lede, meta, aside, size = "display" }: Props) {
  return (
    <section data-chapter={theme} className={styles.intro} aria-labelledby="page-title">
      <div className={`wrap ${styles.top}`}>
        <SiteHeader />
      </div>
      <div className={`wrap grid ${styles.body}`}>
        <div className={aside ? styles.mainWithAside : styles.main} data-reveal>
          <Breadcrumbs items={crumbs} />
          <h1 id="page-title" className={size === "display" ? styles.display : styles.title}>
            {title}
          </h1>
          {lede ? <div className={styles.lede}>{lede}</div> : null}
          {meta ? <div className={styles.meta}>{meta}</div> : null}
        </div>
        {aside ? <div className={styles.aside}>{aside}</div> : null}
      </div>
    </section>
  );
}
