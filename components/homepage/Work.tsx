import Image from "next/image";
import type { Project } from "@/content/homepage";
import LoopVideo from "./LoopVideo";
import styles from "./Work.module.css";

type Props = {
  projects: Project[];
  /** Only the first group carries the "Selected Work" headline; the group after Pricing continues the list. */
  headline?: { lead: string; accent: string };
};

/** Figma "Project/…" frames: rows of images that share a height, then the name and services. */
export default function Work({ projects, headline }: Props) {
  return (
    <section
      className={styles.work}
      data-chapter="ink"
      aria-labelledby={headline ? "work-title" : undefined}
      aria-label={headline ? undefined : "More work"}
    >
      {headline && (
        <h2 id="work-title" className={styles.headline}>
          {headline.lead} <em>{headline.accent}</em>
        </h2>
      )}
      <ul className={styles.list}>
        {projects.map((p) => (
          <li key={p.name}>
            <article className={styles.project} aria-label={p.name}>
              <div className={styles.gallery}>
                {p.rows.map((row, i) => {
                  const total = row.reduce((n, im) => n + im.w, 0);
                  return (
                    <div key={i} className={styles.row}>
                      {row.map((im) => (
                        <div key={im.src} className={styles.cell} style={{ flexGrow: im.w, aspectRatio: `${im.w} / ${im.h}` }}>
                          <Image
                            src={im.src}
                            alt={im.alt}
                            fill
                            sizes={`(min-width: 1920px) ${Math.round((1504 * im.w) / total)}px, ${Math.round((100 * im.w) / total)}vw`}
                            quality={90}
                            style={im.position ? { objectPosition: im.position } : undefined}
                          />
                          {im.video && <LoopVideo src={im.video} />}
                        </div>
                      ))}
                    </div>
                  );
                })}
              </div>
              <footer className={styles.label}>
                <h3 className={styles.name}>{p.name}</h3>
                <p className={styles.services}>{p.services}</p>
              </footer>
            </article>
          </li>
        ))}
      </ul>
    </section>
  );
}
