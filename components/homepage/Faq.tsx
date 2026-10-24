import Image from "next/image";
import Button from "@/components/ds/Button";
import { homepage } from "@/content/homepage";
import { bookHref } from "@/lib/site";
import styles from "./Faq.module.css";

/** Figma "Questions" (an accordion, first item open) and the "Still deciding?" block with the headshot. */
export default function Faq() {
  const { headline, items, closing } = homepage.faq;
  return (
    <section className={styles.faq} data-chapter="ink" aria-labelledby="faq-title">
      <div className={styles.grid}>
        <h2 id="faq-title" className={styles.headline}>
          {headline.lead} <em>{headline.accent}</em>
        </h2>
        <div className={styles.list}>
          {items.map((item, i) => (
            // native disclosure: works without JS; the shared name keeps one answer open at a time
            <details key={item.q} name="faq" open={i === 0} className={styles.item}>
              <summary className={styles.question}>
                {item.q}
                <span className={styles.icon} aria-hidden="true" />
              </summary>
              <p className={styles.answer}>{item.a}</p>
            </details>
          ))}
        </div>
      </div>

      <div className={styles.closing}>
        <div className={styles.closingCopy}>
          <Image className={styles.headshot} src={closing.headshot.src} alt={closing.headshot.alt} width={84} height={84} />
          <div>
            <h3 className={styles.closingTitle}>
              {closing.headline.lead} <em>{closing.headline.accent}</em>
            </h3>
            <p className={styles.closingBody}>{closing.body}</p>
          </div>
        </div>
        <Button href={bookHref} className={styles.cta}>
          {closing.cta}
        </Button>
      </div>
    </section>
  );
}
