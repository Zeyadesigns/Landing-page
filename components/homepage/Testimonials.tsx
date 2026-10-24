import { homepage } from "@/content/homepage";
import QuoteMark from "./QuoteMark";
import styles from "./Testimonials.module.css";

/** Figma "Featured quote" plus the pair below it; on mobile all three stack, each with its quote mark. */
export default function Testimonials() {
  const { headline, intro, items } = homepage.testimonials;
  const [featured, ...rest] = items;
  return (
    <section className={styles.testimonials} data-chapter="ink" aria-labelledby="testimonials-title">
      <header className={styles.header}>
        <h2 id="testimonials-title" className={styles.headline}>
          {headline.lead} <em>{headline.accent}</em>
        </h2>
        <p className={styles.intro}>{intro}</p>
      </header>

      <figure className={`${styles.quote} ${styles.featured}`}>
        <QuoteMark className={styles.mark} />
        <blockquote className={styles.text}>
          <p>{featured.quote}</p>
        </blockquote>
        <figcaption className={styles.person}>
          <span className={styles.name}>{featured.name}</span>
          <span className={styles.role}>{featured.role}</span>
        </figcaption>
      </figure>

      <div className={styles.pair}>
        {rest.map((t) => (
          <figure key={t.name} className={styles.quote}>
            <QuoteMark className={`${styles.mark} ${styles.markSmall}`} />
            <blockquote className={styles.text}>
              <p>{t.quote}</p>
            </blockquote>
            <figcaption className={styles.person}>
              <span className={styles.name}>{t.name}</span>
              <span className={styles.role}>{t.role}</span>
            </figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
