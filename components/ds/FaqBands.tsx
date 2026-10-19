import styles from "./FaqBands.module.css";

type Props = {
  id?: string;
  title: string;
  items: readonly { q: string; a: string }[];
  headingLevel?: 2 | 3;
};

/** One full-bleed band per question, alternating tones. Every answer is visible. */
export default function FaqBands({ id = "faq", title, items, headingLevel = 2 }: Props) {
  const H = `h${headingLevel}` as "h2";
  const Q = `h${headingLevel + 1}` as "h3";
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={styles.faq}>
      <div className={styles.head} data-chapter="cyan">
        <div className="wrap">
          <H id={`${id}-title`} className={styles.title}>
            {title}
          </H>
        </div>
      </div>
      {items.map((f, i) => (
        <div key={f.q} className={styles.band} data-chapter={i % 2 ? "fog" : "paper"}>
          <div className="wrap grid" data-reveal>
            <Q className={styles.q}>{f.q}</Q>
            <p className={styles.a}>{f.a}</p>
          </div>
        </div>
      ))}
    </section>
  );
}
