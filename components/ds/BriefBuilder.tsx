"use client";

import { useMemo, useState } from "react";
import { services } from "@/content/services";
import styles from "./BriefBuilder.module.css";

const stages = ["Pre-launch", "Launched, pre-revenue", "Revenue, raising next", "Growing team"] as const;

/** Writes a short brief from a few choices; send it by email (when configured) or copy it. */
export default function BriefBuilder({ email }: { email: string }) {
  const [picked, setPicked] = useState<string[]>([]);
  const [stage, setStage] = useState<string>("");
  const [company, setCompany] = useState("");
  const [note, setNote] = useState("");
  const [copied, setCopied] = useState(false);

  const brief = useMemo(() => {
    const lines = [
      `Company: ${company.trim() || "(not given)"}`,
      `Interested in: ${picked.length ? picked.join(", ") : "(not sure yet)"}`,
      `Stage: ${stage || "(not given)"}`,
      "",
      note.trim() || "(What are you building, and what needs to be true by when?)",
    ];
    return lines.join("\n");
  }, [company, picked, stage, note]);

  const toggle = (name: string) =>
    setPicked((p) => (p.includes(name) ? p.filter((x) => x !== name) : [...p, name]));

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(brief);
      setCopied(true);
      setTimeout(() => setCopied(false), 2400);
    } catch {
      setCopied(false);
    }
  };

  const mailto = email
    ? `mailto:${email}?subject=${encodeURIComponent(`Discovery call: ${company.trim() || "new project"}`)}&body=${encodeURIComponent(brief)}`
    : "";

  return (
    <form className={styles.form} onSubmit={(e) => e.preventDefault()} aria-describedby="brief-help">
      <p id="brief-help" className={styles.help}>
        Four quick answers make the first call more useful. Nothing is sent until you choose to send it.
      </p>

      <label className={styles.field}>
        <span>Company name</span>
        <input value={company} onChange={(e) => setCompany(e.target.value)} autoComplete="organization" maxLength={60} />
      </label>

      <fieldset className={styles.field}>
        <legend>What do you need?</legend>
        <div className={styles.chips}>
          {services.map((s) => (
            <label key={s.slug} className={styles.chip} data-on={picked.includes(s.name) || undefined}>
              <input type="checkbox" checked={picked.includes(s.name)} onChange={() => toggle(s.name)} />
              {s.name}
            </label>
          ))}
        </div>
      </fieldset>

      <fieldset className={styles.field}>
        <legend>Where is the company?</legend>
        <div className={styles.chips}>
          {stages.map((s) => (
            <label key={s} className={styles.chip} data-on={stage === s || undefined}>
              <input type="radio" name="stage" checked={stage === s} onChange={() => setStage(s)} />
              {s}
            </label>
          ))}
        </div>
      </fieldset>

      <label className={styles.field}>
        <span>What are you building, and by when?</span>
        <textarea value={note} onChange={(e) => setNote(e.target.value)} rows={5} maxLength={1200} />
      </label>

      <div className={styles.preview}>
        <p className={styles.previewHead}>Your brief</p>
        <pre>{brief}</pre>
      </div>

      <div className={styles.actions}>
        {mailto ? (
          <a href={mailto} className={styles.primary}>
            Email this brief
          </a>
        ) : null}
        <button type="button" onClick={copy} className={mailto ? styles.secondary : styles.primary}>
          {copied ? "Brief copied" : "Copy brief"}
        </button>
        <span role="status" className="sr-only">
          {copied ? "Brief copied to clipboard" : ""}
        </span>
      </div>
    </form>
  );
}
