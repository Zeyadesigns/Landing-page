import Link from "next/link";
import Logo from "@/components/Logo";
import StudioClock from "./StudioClock";
import { homepage } from "@/content/homepage";
import styles from "./Footer.module.css";

/** A link when it has an href; otherwise the same label as plain text, so the layout holds. */
function MaybeLink({ href, className, children }: { href: string; className?: string; children: React.ReactNode }) {
  if (!href) return <span className={className}>{children}</span>;
  const external = /^(https?:|mailto:)/.test(href);
  return external ? (
    <a href={href} className={className} {...(href.startsWith("http") && { target: "_blank", rel: "noopener" })}>
      {children}
    </a>
  ) : (
    <Link href={href} className={className}>
      {children}
    </Link>
  );
}

/** Figma "Footer": brand left, links on the second column with the booking link at the end, then the legal row. */
export default function Footer() {
  const { tagline, links, book, copyright, legal } = homepage.footer;
  return (
    <footer className={styles.footer} data-chapter="ink">
      <div className={styles.top}>
        <div className={styles.brand}>
          <Link href="/" className={styles.logo} aria-label="Finestkraft home">
            <Logo />
          </Link>
          <p className={styles.tagline}>{tagline}</p>
        </div>
        <nav className={styles.links} aria-label="Contact">
          <ul className={styles.social}>
            {links.map((l) => (
              <li key={l.label}>
                <MaybeLink href={l.href} className={styles.link}>
                  {l.label}
                </MaybeLink>
              </li>
            ))}
          </ul>
          <MaybeLink href={book.href} className={styles.book}>
            {book.label}
          </MaybeLink>
        </nav>
      </div>

      <div className={styles.bottom}>
        <p className={styles.copyright}>{copyright}</p>
        <ul className={styles.legal}>
          {legal.map((l) => (
            <li key={l.label}>
              <MaybeLink href={l.href} className={styles.link}>
                <span className={styles.long}>{l.label}</span>
                <span className={styles.short}>{l.short}</span>
              </MaybeLink>
            </li>
          ))}
        </ul>
        <StudioClock className={styles.clock} tzClassName={styles.tz} />
      </div>
    </footer>
  );
}
