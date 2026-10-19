// Drawn specimens of the four services. Each takes the visitor's company name.
// The web and product specimens are interface fragments (data-ui).
import styles from "./Specimens.module.css";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, 2)
    .map((w) => w[0]!.toUpperCase())
    .join("") || "Y";

export function BrandSpecimen({ name }: { name: string }) {
  return (
    <div className={styles.brand} data-ui aria-hidden="true">
      <div className={styles.brandMark}>{initials(name)}</div>
      <div className={styles.brandName}>{name}</div>
      <div className={styles.brandRow}>
        <span className={styles.chip} style={{ background: "#101010" }} />
        <span className={styles.chip} style={{ background: "#fbfafa" }} />
        <span className={styles.chip} style={{ background: "#00a8a8" }} />
        <span className={styles.favicon}>{initials(name)[0]}</span>
      </div>
    </div>
  );
}

export function WebSpecimen({ name }: { name: string }) {
  return (
    <div className={styles.browser} data-ui aria-hidden="true">
      <div className={styles.browserBar}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.url}>{slug(name)}.com</span>
      </div>
      <div className={styles.page}>
        <div className={styles.pageNav}>
          <b>{name}</b>
          <span>Product</span>
          <span>Pricing</span>
          <span>Docs</span>
          <i>Book a demo</i>
        </div>
        <div className={styles.pageHero}>
          <p className={styles.pageH}>
            {name} does the work
            <br />
            your team dreads.
          </p>
          <p className={styles.pageSub}>One sentence that says exactly what {name} does and for whom.</p>
          <i className={styles.pageBtn}>Book a demo</i>
        </div>
      </div>
    </div>
  );
}

export function ProductSpecimen({ name }: { name: string }) {
  const rows = [
    ["Quarterly report draft", "Ready for review", "92%"],
    ["Customer call summary", "Needs a source", "61%"],
    ["Contract clause check", "Ready for review", "88%"],
  ];
  return (
    <div className={styles.app} data-ui aria-hidden="true">
      <div className={styles.appSide}>
        <b>{initials(name)}</b>
        <span className={styles.appSideOn}>Inbox</span>
        <span>Drafts</span>
        <span>Sources</span>
        <span>Settings</span>
      </div>
      <div className={styles.appMain}>
        <div className={styles.appTop}>
          <b>{name}</b>
          <span>3 drafts need review</span>
        </div>
        <table className={styles.appTable}>
          <thead>
            <tr>
              <th>Draft</th>
              <th>Status</th>
              <th>Confidence</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r[0]}>
                <td>{r[0]}</td>
                <td>
                  <em data-state={r[1] === "Needs a source" ? "warn" : "ok"}>{r[1]}</em>
                </td>
                <td className="num">{r[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className={styles.appNote}>Sample data</p>
      </div>
    </div>
  );
}

export function DeckSpecimen({ name }: { name: string }) {
  return (
    <div className={styles.deck} data-ui aria-hidden="true">
      <div className={styles.slide}>
        <span className={styles.slideMark}>{initials(name)}</span>
        <p className={styles.slideTitle}>{name}</p>
        <p className={styles.slideSub}>Investor presentation</p>
        <span className={styles.slideNo}>1 / 12</span>
      </div>
      <div className={`${styles.slide} ${styles.slideBack}`} />
      <div className={`${styles.slide} ${styles.slideBack2}`} />
    </div>
  );
}

function slug(name: string) {
  return name.toLowerCase().replace(/[^a-z0-9]+/g, "") || "yourcompany";
}

export const specimenFor = {
  brand: BrandSpecimen,
  web: WebSpecimen,
  product: ProductSpecimen,
  deck: DeckSpecimen,
} as const;
