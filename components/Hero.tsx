import Image from "next/image";
import Link from "next/link";
import Logo from "./Logo";
import StudioClock from "./StudioClock";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <header className={styles.hero}>
      {/* Background: Figma export, mirrored horizontally */}
      <div className={styles.heroBg} aria-hidden="true">
        <Image src="/hero-bg.webp" alt="" fill priority sizes="100vw" />
      </div>

      <Link href="/" className={styles.logo} aria-label="Finestkraft home">
        <Logo />
      </Link>

      <p className={styles.eyebrow}>Brand / Web studio for Tech &amp; AI</p>

      <div className={styles.heroContent}>
        <h1 className={styles.headline}>
          Design that makes
          <br />
          customers <em>lean in.</em>
        </h1>
        <p className={styles.subhead}>
          We build brand identities &amp; high impact websites for founder led companies. Projects starting
          at $1999
        </p>
        <a href="#book" className={`${styles.btn} ${styles.btnSolid}`}>
          Book a Discovery Call
        </a>
      </div>

      <StudioClock />
    </header>
  );
}
