// Finished stills of the concept projects, drawn in HTML/SVG in each concept's
// own palette. Demonstration data is synthetic and labelled as such.
import { Noto_Kufi_Arabic } from "next/font/google";
import type { Concept } from "@/content/work";
import styles from "./ConceptStill.module.css";

const kufi = Noto_Kufi_Arabic({ subsets: ["arabic"], weight: ["500"], display: "swap", preload: false });

type Frame = "cover" | "detail";

export default function ConceptStill({ concept, frame = "cover" }: { concept: Concept; frame?: Frame }) {
  const p = concept.palette;
  const vars = { "--g": p.ground, "--k": p.ink, "--a": p.accent, "--s": p.soft } as React.CSSProperties;
  const Draw = drawings[concept.slug]?.[frame];
  return (
    <div className={styles.still} style={vars} data-ui role="img" aria-label={`${concept.name} concept, ${frame === "cover" ? "cover frame" : "detail frame"}`}>
      {Draw ? <Draw /> : null}
    </div>
  );
}

/* ---------- Dars: bilingual identity + a worked problem ---------- */
function DarsCover() {
  return (
    <div className={styles.dars}>
      <div className={styles.darsLamp} />
      <p className={`${styles.darsAr} ${kufi.className}`} lang="ar" dir="rtl">
        درس
      </p>
      <p className={styles.darsEn}>Dars</p>
      <p className={styles.darsLine}>Practise maths in your own language.</p>
    </div>
  );
}
function DarsDetail() {
  return (
    <div className={styles.darsDetail}>
      <div className={styles.darsCard}>
        <p className={styles.darsQ}>Solve for x</p>
        <p className={styles.darsEq}>2x + 6 = 14</p>
        <ol className={styles.darsSteps}>
          <li><span>Subtract 6 from both sides</span><b>2x = 8</b></li>
          <li><span>Divide both sides by 2</span><b>x = 4</b></li>
        </ol>
        <p className={`${styles.darsHint} ${kufi.className}`} lang="ar" dir="rtl">أحسنت! جرّب السؤال التالي</p>
      </div>
      <p className={styles.synthetic}>Synthetic lesson</p>
    </div>
  );
}

/* ---------- Kestrel Grid: forecast with its uncertainty ---------- */
const hours = Array.from({ length: 49 }, (_, i) => i);
const load = (h: number) => 3.1 + 0.55 * Math.sin(((h - 7) / 24) * Math.PI * 2) + 0.5 * Math.exp(-((h - 42) ** 2) / 18);
const spread = (h: number) => 0.08 + h * 0.005;
const X = (h: number) => 20 + (h / 48) * 560;
const Y = (v: number) => 230 - ((v - 2) / 2.6) * 190;
const line = hours.map((h, i) => `${i ? "L" : "M"}${X(h).toFixed(1)} ${Y(load(h)).toFixed(1)}`).join(" ");
const band =
  hours.map((h, i) => `${i ? "L" : "M"}${X(h).toFixed(1)} ${Y(load(h) + spread(h)).toFixed(1)}`).join(" ") +
  " " +
  [...hours].reverse().map((h) => `L${X(h).toFixed(1)} ${Y(load(h) - spread(h)).toFixed(1)}`).join(" ") +
  " Z";
const peakH = 42;

function KestrelCover() {
  const peak = load(peakH);
  return (
    <div className={styles.kestrel} data-ui>
      <div className={styles.kTop}>
        <b>Kestrel Grid</b>
        <span>Next peak</span>
        <strong className="num">Thu 18:00 · {peak.toFixed(1)} GW ± {spread(peakH).toFixed(1)}</strong>
      </div>
      <svg viewBox="0 0 600 250" className={styles.kChart} aria-hidden="true">
        <path d={band} className={styles.kBand} />
        <path d={line} className={styles.kLine} />
        <circle cx={X(peakH)} cy={Y(peak)} r="6" className={styles.kPeak} />
        {["Wed", "Thu"].map((d, i) => (
          <text key={d} x={X(i * 24) + 4} y="246" className={styles.kAxis}>{d}</text>
        ))}
      </svg>
      <p className={styles.synthetic}>Synthetic data</p>
    </div>
  );
}
function KestrelDetail() {
  return (
    <div className={styles.kestrelDetail} data-ui>
      <div className={styles.kAlert}>
        <p className={styles.kAlertHead}>Peak alert</p>
        <p className={styles.kAlertBig}>Thursday, 18:00</p>
        <p>Demand is likely to exceed the planned reserve by 0.3 GW. The forecast band is narrow: the model has seen this weather pattern often.</p>
        <div className={styles.kActions}>
          <i>Acknowledge</i>
          <span>Override with reason</span>
        </div>
      </div>
      <p className={styles.synthetic}>Synthetic data</p>
    </div>
  );
}

/* ---------- Verrin: a bench note becoming a record ---------- */
const record: [string, string][] = [
  ["Run", "14"],
  ["Buffer", "pH 7.4"],
  ["Temperature", "37 °C"],
  ["Incubation", "2 h"],
  ["Outcome", "Low yield, flagged"],
];
function VerrinCover() {
  return (
    <div className={styles.verrin}>
      <div className={styles.vNote}>
        <p>run 14 — buffer 7.4, 37°, 2h incubation.</p>
        <p>yield low again?? check enzyme lot</p>
      </div>
      <div className={styles.vArrow} aria-hidden="true">
        <svg viewBox="0 0 40 16"><path d="M0 8h34M28 2l6 6-6 6" fill="none" stroke="currentColor" strokeWidth="2.4" /></svg>
      </div>
      <dl className={styles.vRecord} data-ui>
        {record.map(([k, v]) => (
          <div key={k}>
            <dt>{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
      <p className={styles.synthetic}>Synthetic notebook</p>
    </div>
  );
}
function VerrinDetail() {
  return (
    <div className={styles.verrinDetail} data-ui>
      <div className={styles.vSearch}>runs where yield is below expected</div>
      <ul className={styles.vResults}>
        <li><b>Run 14</b><span>Enzyme lot B-22 · low yield</span></li>
        <li><b>Run 11</b><span>Enzyme lot B-22 · low yield</span></li>
        <li><b>Run 9</b><span>Enzyme lot B-19 · expected</span></li>
      </ul>
      <p className={styles.vInsight}>2 of 3 low-yield runs share enzyme lot B-22.</p>
      <p className={styles.synthetic}>Synthetic notebook</p>
    </div>
  );
}

/* ---------- Palmo: a deck cover and a call turning into a booking ---------- */
function PalmoCover() {
  return (
    <div className={styles.palmo}>
      <span className={styles.pMark}>P</span>
      <p className={styles.pTitle}>Palmo answers the clinic phone.</p>
      <p className={styles.pSub}>Seed round · Investor presentation</p>
      <span className={`${styles.pNo} num`}>1 / 14</span>
    </div>
  );
}
function PalmoDetail() {
  return (
    <div className={styles.palmoDetail}>
      <div className={styles.pCall}>
        <p className={styles.pCaller}>“Hi, can I see someone about my knee this week?”</p>
        <p className={styles.pAgent}>“Tuesday at 10:30 is free. Shall I book it?”</p>
      </div>
      <div className={styles.pSlot}>
        <p>Booked</p>
        <b className="num">Tue 10:30</b>
        <span>Physiotherapy · Room 2</span>
      </div>
      <p className={styles.synthetic}>Synthetic call</p>
    </div>
  );
}

const drawings: Record<string, Record<Frame, () => React.ReactElement>> = {
  dars: { cover: DarsCover, detail: DarsDetail },
  "kestrel-grid": { cover: KestrelCover, detail: KestrelDetail },
  verrin: { cover: VerrinCover, detail: VerrinDetail },
  palmo: { cover: PalmoCover, detail: PalmoDetail },
};
