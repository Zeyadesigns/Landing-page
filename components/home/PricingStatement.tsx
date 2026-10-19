import Link from "next/link";
import Chapter from "@/components/ds/Chapter";
import Button from "@/components/ds/Button";
import { bookHref, site } from "@/lib/site";
import styles from "./PricingStatement.module.css";

/** The whole offer as one sentence; the price sits on a block of the accent. */
export default function PricingStatement() {
  return (
    <Chapter theme="fog" cut tall id="pricing" labelledBy="pricing-title" className={styles.chapter}>
      <div className="wrap">
        <h2 id="pricing-title" className={styles.sentence} data-reveal>
          <span>Projects start</span>{" "}
          <span>
            at <span className={`${styles.price} num`}>${site.startingPrice}</span>
          </span>
        </h2>
        <div className={`grid ${styles.foot}`}>
          <p className={styles.includes}>
            The final price depends on the scope. You get it after the discovery call, before any work starts.
          </p>
          <div className={styles.actions}>
            <Button href={bookHref} block>
              Book a Discovery Call
            </Button>
            <Link href="/#faq" className="link">
              How pricing works
            </Link>
          </div>
        </div>
      </div>
    </Chapter>
  );
}
