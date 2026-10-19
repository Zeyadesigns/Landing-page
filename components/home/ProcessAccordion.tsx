"use client";

import Image from "next/image";
import { useState } from "react";
import Chapter from "@/components/ds/Chapter";
import { process } from "@/content/studio";
import { photos } from "@/content/credits";
import styles from "./ProcessAccordion.module.css";

const pictures = [photos.discovery, photos.direction, photos.design, photos.build, photos.launch];

/** Stages as tinted panels, darkest first: order is carried by colour, not numerals. */
export default function ProcessAccordion() {
  const [open, setOpen] = useState(0);

  return (
    <Chapter theme="ink" id="process" labelledBy="process-title">
      <div className="wrap">
        <div className={`grid ${styles.intro}`} data-reveal>
          <h2 id="process-title" className={styles.title}>
            From call to launch
          </h2>
          <p className={styles.lede}>
            Every project runs the same five stages. You always know which one you are in, what you will see next, and
            what we need from you.
          </p>
        </div>

        <ol className={styles.row}>
          {process.map((stage, i) => {
            const isOpen = open === i;
            const panelId = `stage-${i}`;
            return (
              <li key={stage.name} className={styles.stage} data-open={isOpen || undefined} data-tone={i}>
                <h3 className={styles.stageHead}>
                  <button
                    type="button"
                    className={styles.trigger}
                    aria-expanded={isOpen}
                    aria-controls={panelId}
                    onClick={() => setOpen(i)}
                  >
                    <span className={styles.stageName}>{stage.name}</span>
                  </button>
                </h3>
                <div id={panelId} className={styles.panel} hidden={!isOpen}>
                  <p className={styles.text}>{stage.text}</p>
                  <figure className={styles.figure}>
                    <Image
                      src={pictures[i].src}
                      alt={pictures[i].caption}
                      width={pictures[i].width}
                      height={pictures[i].height}
                      sizes="(max-width: 900px) 90vw, 28vw"
                    />
                  </figure>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </Chapter>
  );
}
