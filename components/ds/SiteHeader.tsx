import Link from "next/link";
import Logo from "@/components/Logo";
import Button from "./Button";
import { bookHref, nav } from "@/lib/site";
import styles from "./SiteHeader.module.css";

/** Wordmark, four plain links, one action. Lives inside the page's first chapter. */
export default function SiteHeader({ className }: { className?: string }) {
  return (
    <header className={[styles.header, className].filter(Boolean).join(" ")}>
      <Link href="/" className={styles.logo} aria-label="Finestkraft home">
        <Logo />
      </Link>

      <nav aria-label="Main" className={styles.nav}>
        <ul className={styles.links}>
          {nav.map((n) => (
            <li key={n.href}>
              <Link href={n.href} className={styles.link}>
                {n.label}
              </Link>
            </li>
          ))}
        </ul>
        <Button href={bookHref} className={styles.cta}>
          Book a call
        </Button>
      </nav>

      <details className={styles.menu}>
        <summary className={styles.summary}>Menu</summary>
        <div className={styles.sheet} data-chapter="steel">
          <ul>
            {nav.map((n) => (
              <li key={n.href}>
                <Link href={n.href} className={styles.sheetLink}>
                  {n.label}
                </Link>
              </li>
            ))}
          </ul>
          <Button href={bookHref} block>
            Book a Discovery Call
          </Button>
        </div>
      </details>
    </header>
  );
}
