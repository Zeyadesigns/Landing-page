import type { Block } from "@/content/insights";
import styles from "./Prose.module.css";

const slug = (s: string) => s.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/(^-|-$)/g, "");

/** The reading column: calm, real measure, headings with anchors. */
export default function Prose({ blocks, children }: { blocks: Block[]; children?: React.ReactNode }) {
  return (
    <div className={styles.prose}>
      {blocks.map((b, i) => {
        switch (b.type) {
          case "h2":
            return (
              <h2 key={i} id={slug(b.text)}>
                {b.text}
              </h2>
            );
          case "p":
            return <p key={i}>{b.text}</p>;
          case "ul":
            return (
              <ul key={i}>
                {b.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            );
          case "ol":
            return (
              <ol key={i}>
                {b.items.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ol>
            );
          case "note":
            return null; // rendered by the template as the cluster link-up
        }
      })}
      {children}
    </div>
  );
}

export const headingsOf = (blocks: Block[]) =>
  blocks.filter((b): b is { type: "h2"; text: string } => b.type === "h2").map((b) => ({ id: slug(b.text), text: b.text }));
