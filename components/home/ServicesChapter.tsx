"use client";

import Link from "next/link";
import { useId, useState } from "react";
import Chapter from "@/components/ds/Chapter";
import { specimenFor } from "@/components/specimens/Specimens";
import { services } from "@/content/services";
import styles from "./ServicesChapter.module.css";

const FALLBACK = "Your company";
// tile colours rotate through the palette fields (paper chapter behind them)
const tileTheme = ["cyan", "steel", "fog", "ink"] as const;

/** Specimens on colour tiles, re-set live with the visitor's company name. */
export default function ServicesChapter() {
  const [value, setValue] = useState("");
  const inputId = useId();
  const name = value.trim() || FALLBACK;

  return (
    <Chapter theme="paper" cut id="services" labelledBy="services-title">
      <div className={`wrap grid ${styles.layout}`}>
        <div className={styles.intro} data-reveal>
          <h2 id="services-title" className={styles.title}>
            Four things we make
          </h2>
          <p className={styles.lede}>
            Each one built for founders who need to look as credible as their product. Type your company name to see
            it set in all four.
          </p>
          <div className={styles.field}>
            <label htmlFor={inputId} className={styles.label}>
              Your company name
            </label>
            <input
              id={inputId}
              className={styles.input}
              value={value}
              onChange={(e) => setValue(e.target.value.slice(0, 24))}
              placeholder={FALLBACK}
              autoComplete="organization"
              spellCheck={false}
              maxLength={24}
            />
          </div>
        </div>

        <ul className={styles.tiles} data-reveal>
          {services.map((s, i) => {
            const Specimen = specimenFor[s.specimen];
            return (
              <li key={s.slug} className={styles.item} data-shape={s.specimen} style={{ ["--i" as string]: i }}>
                <Link href={`/services/${s.slug}`} className={styles.tileLink}>
                  <div className={styles.tile} data-chapter={tileTheme[i]}>
                    <Specimen name={name} />
                  </div>
                  <span className={styles.name}>{s.name}</span>
                  <span className={styles.fact}>{s.fact}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </Chapter>
  );
}
