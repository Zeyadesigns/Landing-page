import styles from "./Chapter.module.css";
import type { Chapter as ChapterName } from "@/content/services";

type Props = {
  theme: ChapterName;
  /** cut the top-left corner so the previous chapter shows through (the brand cut at page scale) */
  cut?: boolean;
  /** min-height: full poster (90svh) or content height */
  tall?: boolean;
  id?: string;
  labelledBy?: string;
  className?: string;
  as?: "section" | "div" | "header" | "footer";
  children: React.ReactNode;
};

/** A full-bleed colour field. Its children read --field, --ink, --ink-soft, --action-*. */
export default function Chapter({ theme, cut, tall, id, labelledBy, className, as: Tag = "section", children }: Props) {
  const cls = [styles.chapter, cut && styles.cut, tall && styles.tall, className].filter(Boolean).join(" ");
  return (
    <Tag data-chapter={theme} id={id} aria-labelledby={labelledBy} className={cls}>
      {children}
    </Tag>
  );
}
