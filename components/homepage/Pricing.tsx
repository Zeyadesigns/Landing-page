import Link from "next/link";
import Button from "@/components/ds/Button";
import { homepage } from "@/content/homepage";
import { bookHref } from "@/lib/site";
import TierRows from "./TierRows";
import styles from "./Pricing.module.css";

function Tick() {
  return (
    <svg className={styles.tick} width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
      <path d="M2.5 7.4L5.6 10.5L11.5 3.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

/** Figma "Pricing / Mono": three chamfered tier cards, the middle one light and recommended, then a custom-quote line. */
export default function Pricing() {
  const { headline, intro, recommended, tiers, custom } = homepage.pricing;
  return (
    <section className={styles.pricing} data-chapter="ink" aria-labelledby="pricing-title">
      <h2 id="pricing-title" className={styles.headline}>
        {headline.lead} <em>{headline.accent}</em>
      </h2>
      <p className={styles.intro}>{intro}</p>

      <ul className={styles.tiers}>
        {tiers.map((t) => (
          <li key={t.name} className={[styles.card, t.featured && styles.featured].filter(Boolean).join(" ")}>
            {t.featured && <p className={styles.tag}>{recommended}</p>}
            <h3 className={styles.name}>{t.name}</h3>
            <p className={styles.description} data-tier-description>
              {t.description}
            </p>
            <p className={styles.price}>{t.price}</p>
            <p className={styles.terms}>{t.terms}</p>
            <div className={styles.action}>
              <Button href={bookHref} className={styles.cta}>
                {t.cta}
              </Button>
            </div>
            <ul className={styles.features}>
              {t.features.map((f) => (
                <li key={f}>
                  <Tick />
                  {f}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>

      <TierRows selector="[data-tier-description]" />

      <div className={styles.custom}>
        <p className={styles.customCopy}>
          <strong>{custom.lead}</strong> {custom.body}
        </p>
        <Link href={bookHref} className={styles.customLink}>
          {custom.link}
        </Link>
      </div>
    </section>
  );
}
