import Link from "next/link";
import Logo from "@/components/Logo";
import Button from "@/components/ds/Button";
import StudioClock from "./StudioClock";
import CrtBackground from "./CrtBackground";
import StickyNav from "./StickyNav";
import { homepage } from "@/content/homepage";
import { bookHref } from "@/lib/site";
import styles from "./Hero.module.css";

/**
 * Figma "Hero Section": logo, studio clock and an outlined CTA over the liquid gradient, then the headline
 * block. Past the hero nav, scrolling up brings back a black bar with the logo and the CTA filled cyan.
 */
export default function Hero() {
  const { eyebrow, headline, subhead, subheadExtra, cta, navCta } = homepage.hero;
  return (
    <>
      <section className={styles.hero} data-chapter="ink" aria-labelledby="hero-title">
        <CrtBackground src="/homepage/hero-crt-source.webp" className={styles.bg} canvasClassName={styles.crt} />
        <header id="hero-nav" className={styles.nav}>
          <Link href="/" className={styles.logo} aria-label="Finestkraft home">
            <Logo />
          </Link>
          <div className={styles.navEnd}>
            <StudioClock className={styles.clock} tzClassName={styles.tz} />
            <Link href={bookHref} className={styles.outline}>
              {navCta}
            </Link>
          </div>
        </header>

        <div className={styles.copy}>
          <p className={styles.eyebrow}>{eyebrow}</p>
          <h1 id="hero-title" className={styles.headline}>
            {headline.lead} <em>{headline.accent}</em>
          </h1>
          <p className={styles.subhead}>
            {subhead} <span className={styles.extra}>{subheadExtra}</span>
          </p>
          <Button href={bookHref} className={styles.cta}>
            {cta}
          </Button>
        </div>
      </section>

      <StickyNav anchorId="hero-nav" className={styles.bar}>
        <Link href="/" className={styles.logo} aria-label="Finestkraft home">
          <Logo />
        </Link>
        <Link href={bookHref} className={styles.solid}>
          {navCta}
        </Link>
      </StickyNav>
    </>
  );
}
