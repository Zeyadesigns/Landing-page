import Image from "next/image";
import SiteHeader from "@/components/ds/SiteHeader";
import Button from "@/components/ds/Button";
import StudioClock from "./StudioClock";
import { bookHref } from "@/lib/site";
import styles from "./Hero.module.css";

/** The client's approved hero (brand commitment), now carrying the site navigation. */
export default function Hero() {
  return (
    <section className={styles.hero} data-chapter="ink" aria-labelledby="hero-title">
      {/* Background: Figma export, mirrored horizontally */}
      <div className={styles.heroBg} aria-hidden="true">
        <Image src="/hero-bg.webp" alt="" fill priority sizes="100vw" />
      </div>

      <SiteHeader className={styles.nav} />

      <p className={styles.eyebrow}>Brand / Web studio for Tech &amp; AI</p> {/* taste-skill-ignore: client-approved hero positioning line (brand commitment) */}

      <div className={styles.heroContent}>
        <h1 id="hero-title" className={styles.headline}>
          Design that makes
          <br />
          customers <em>lean in.</em>
        </h1>
        <p className={styles.subhead}>
          We build brand identities &amp; high impact websites for founder led companies. Projects starting
          at $1999
        </p>
        <Button href={bookHref} block className={styles.cta}>
          Book a Discovery Call
        </Button>
      </div>

      <StudioClock />
    </section>
  );
}
