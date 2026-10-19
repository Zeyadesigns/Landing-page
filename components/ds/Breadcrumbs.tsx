import Link from "next/link";
import type { Crumb } from "@/lib/schema";
import styles from "./Breadcrumbs.module.css";

/** Visible trail; the matching BreadcrumbList JSON-LD is emitted by the page graph. */
export default function Breadcrumbs({ items }: { items: Crumb[] }) {
  return (
    <nav aria-label="Breadcrumb" className={styles.nav}>
      <ol className={styles.list}>
        {items.map((c, i) => {
          const last = i === items.length - 1;
          return (
            <li key={c.path} className={styles.item}>
              {last ? (
                <span aria-current="page">{c.name}</span>
              ) : (
                <>
                  <Link href={c.path} className={styles.link}>
                    {c.name}
                  </Link>
                  <svg className={styles.sep} viewBox="0 0 8 12" aria-hidden="true">
                    <path d="M1.5 1l5 5-5 5" fill="none" stroke="currentColor" strokeWidth="1.4" />
                  </svg>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
