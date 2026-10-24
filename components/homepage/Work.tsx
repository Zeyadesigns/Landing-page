import Image from "next/image";
import type { Project, ProjectImage } from "@/content/homepage";
import LoopVideo from "./LoopVideo";
import styles from "./Work.module.css";

type Props = {
  projects: Project[];
  /** Only the first group carries the "Selected Work" headline; the group after Pricing continues the list. */
  headline?: { lead: string; accent: string };
};

function Tile({ im, share, aspect }: { im: ProjectImage; share: number; aspect: boolean }) {
  return (
    <div
      className={styles.cell}
      style={
        aspect
          ? {
              flexGrow: im.w,
              aspectRatio: `${im.w} / ${im.h}`,
              ...(im.bleed && { "--bleed": `${(100 * im.bleed) / 1128}%` }),
            } as React.CSSProperties
          : undefined
      }
    >
      <Image
        src={im.src}
        alt={im.alt}
        fill
        sizes={`(min-width: 1920px) ${Math.round(1504 * share)}px, ${Math.round(100 * share)}vw`}
        quality={90}
        style={im.position ? { objectPosition: im.position } : undefined}
      />
      {im.video && <LoopVideo sources={im.video} />}
    </div>
  );
}

/** Figma "Project/…" frames: rows of images that share a height, then the name and services. */
export default function Work({ projects, headline }: Props) {
  return (
    <section
      className={[styles.work, !headline && styles.continued].filter(Boolean).join(" ")}
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
                  const width = (item: ProjectImage | ProjectImage[]) => (Array.isArray(item) ? item[0].w : item.w);
                  const total = row.reduce((n, item) => n + width(item), 0);
                  return (
                    <div key={i} className={styles.row}>
                      {row.map((item) =>
                        Array.isArray(item) ? (
                          // a stack takes its column's share of the row and splits the row's height
                          <div key={item[0].src} className={styles.stack} style={{ flexGrow: item[0].w }}>
                            {item.map((im) => (
                              <Tile key={im.src} im={im} share={im.w / total} aspect={false} />
                            ))}
                          </div>
                        ) : (
                          <Tile key={item.src} im={item} share={item.w / total} aspect />
                        ),
                      )}
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
