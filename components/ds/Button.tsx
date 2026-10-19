import Link from "next/link";
import styles from "./Button.module.css";

type Props = {
  href: string;
  children: React.ReactNode;
  /** stretch to the container on phones */
  block?: boolean;
  className?: string;
};

/** The chamfered action. One shape, one fill per chapter (--action-bg / --action-ink). */
export default function Button({ href, children, block, className }: Props) {
  const cls = [styles.btn, block && styles.block, className].filter(Boolean).join(" ");
  const external = /^https?:\/\//.test(href);
  return external ? (
    <a href={href} className={cls} target="_blank" rel="noopener">
      {children}
    </a>
  ) : (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}
