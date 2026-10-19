import Link from "next/link";
import { bookHref, site } from "@/lib/site";
import { services } from "@/content/services";
import styles from "./SiteFooter.module.css";

const year = new Date().getFullYear();

/** The name returns at full width, then the ways in, then every page. */
export default function SiteFooter() {
  return (
    <footer className={styles.footer} data-chapter="ink">
      <div className="wrap">
        <p className={styles.name} aria-hidden="true">
          Finestkraft
        </p>

        <div className={`grid ${styles.row}`}>
          <ul className={styles.places}>
            <li>
              <Link href={bookHref}>Book a call</Link>
            </li>
            {site.email ? (
              <li>
                <a href={`mailto:${site.email}`}>{site.email}</a>
              </li>
            ) : null}
            <li>
              <Link href="/studio">Cairo, Egypt</Link>
            </li>
          </ul>

          <nav aria-label="Footer" className={styles.cols}>
            <div>
              <p className={styles.colHead}>Services</p>
              <ul>
                {services.map((s) => (
                  <li key={s.slug}>
                    <Link href={`/services/${s.slug}`}>{s.name}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className={styles.colHead}>Studio</p>
              <ul>
                <li><Link href="/work">Concept work</Link></li>
                <li><Link href="/insights">Insights</Link></li>
                <li><Link href="/studio">About the studio</Link></li>
                <li><Link href="/contact">Contact</Link></li>
              </ul>
            </div>
            <div>
              <p className={styles.colHead}>Resources</p>
              <ul>
                <li><Link href="/design-system">Design system</Link></li>
                <li><a href="/insights/feed.xml">RSS feed</a></li>
                <li><a href="/sitemap.xml">Sitemap</a></li>
              </ul>
            </div>
          </nav>
        </div>

        <div className={styles.legal}>
          <p>
            © {year} {site.name}. <Link href="/studio#credits">Photo credits</Link>
          </p>
          <a href="#top">Back to top</a>
        </div>
      </div>
    </footer>
  );
}
