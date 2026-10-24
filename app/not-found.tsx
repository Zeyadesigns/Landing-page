import Link from "next/link";
import SiteHeader from "@/components/ds/SiteHeader";
import Button from "@/components/ds/Button";
import SiteFooter from "@/components/ds/SiteFooter";
import { services } from "@/content/services";
import styles from "@/components/templates/NotFound.module.css";

export const metadata = { title: "Page not found", robots: { index: false, follow: true } };

export default function NotFound() {
  return (
    <>
    <section data-chapter="cyan" className={styles.page} aria-labelledby="nf-title">
      <div className="wrap">
        <SiteHeader />
      </div>
      <div className={`wrap ${styles.body}`}>
        <h1 id="nf-title" className={styles.title}>
          This page was
          <br />
          cut off.
        </h1>
        <p className={styles.text}>The link may be old or mistyped. These pages exist:</p>
        <ul className={styles.links}>
          <li><Link href="/" className="link">Home</Link></li>
          {services.map((s) => (
            <li key={s.slug}>
              <Link href={`/services/${s.slug}`} className="link">{s.name}</Link>
            </li>
          ))}
          <li><Link href="/work" className="link">Concept work</Link></li>
          <li><Link href="/insights" className="link">Insights</Link></li>
        </ul>
        <Button href="/">Back to the home page</Button>
      </div>
    </section>
    <SiteFooter />
    </>
  );
}
