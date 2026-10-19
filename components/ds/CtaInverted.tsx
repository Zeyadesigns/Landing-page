import Chapter from "./Chapter";
import Button from "./Button";
import { bookHref } from "@/lib/site";
import styles from "./CtaInverted.module.css";

type Props = { title?: [string, string]; text?: string; theme?: "paper" | "ink" | "cyan" };

/** The close: the page's colours flipped, the promise said again, one action. */
export default function CtaInverted({
  title = ["Make them", "lean in."],
  text = "Tell us what you are building. You leave the call with a scope and a price.",
  theme = "paper",
}: Props) {
  return (
    <Chapter theme={theme} cut id="book" labelledBy="book-title" className={styles.chapter}>
      <div className={`wrap ${styles.inner}`}>
        <h2 id="book-title" className={styles.title} data-reveal>
          <span>{title[0]}</span>
          <span>{title[1]}</span>
        </h2>
        <div className={`grid ${styles.foot}`}>
          <p className={styles.text}>{text}</p>
          <div className={styles.action}>
            <Button href={bookHref} block>
              Book a Discovery Call
            </Button>
          </div>
        </div>
      </div>
    </Chapter>
  );
}
