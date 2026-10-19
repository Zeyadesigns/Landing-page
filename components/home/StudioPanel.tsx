import Image from "next/image";
import Chapter from "@/components/ds/Chapter";
import Button from "@/components/ds/Button";
import TimeBridge from "@/components/ds/TimeBridge";
import { photos } from "@/content/credits";
import styles from "./StudioPanel.module.css";

/** Inset panel, shaped picture: the studio, its city and its clock. */
export default function StudioPanel() {
  const p = photos.mashrabiya;
  return (
    <Chapter theme="ink" id="studio" labelledBy="studio-title" className={styles.chapter}>
      <div className={styles.panel} data-chapter="steel">
        <h2 id="studio-title" className={styles.statement}>
          A studio in Cairo,
          <br />
          working worldwide
        </h2>

        <figure className={styles.figure} data-shutter>
          <Image src={p.src} alt={p.caption} width={p.width} height={p.height} sizes="(max-width: 900px) 86vw, 38vw" />
        </figure>

        <div className={styles.blocks}>
          <div className={styles.block}>
            <h3 className={styles.sub}>One studio, every surface</h3>
            <p>
              Identity, website, product interface and deck from one studio, so the first thing an investor sees and the
              last screen a customer uses speak the same language.
            </p>
          </div>
          <div className={styles.block}>
            <h3 className={styles.sub}>On your clock</h3>
            <TimeBridge />
          </div>
          <Button href="/studio">About the studio</Button>
        </div>
      </div>
    </Chapter>
  );
}
