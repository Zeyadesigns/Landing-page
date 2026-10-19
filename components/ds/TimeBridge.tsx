"use client";

import { useEffect, useState } from "react";
import { site } from "@/lib/site";

type State = { cairo: string; local: string; diff: number; sameZone: boolean } | null;

const fmt = (tz?: string) =>
  new Intl.DateTimeFormat("en-GB", { timeZone: tz, hour: "2-digit", minute: "2-digit", hour12: false });

/** minutes east of UTC for a zone at a given instant */
function offset(tz: string, at: Date) {
  const parts = new Intl.DateTimeFormat("en-US", { timeZone: tz, timeZoneName: "longOffset" }).formatToParts(at);
  const v = parts.find((p) => p.type === "timeZoneName")?.value ?? "GMT";
  const m = v.match(/GMT([+-])(\d{2}):?(\d{2})?/);
  return m ? (m[1] === "+" ? 1 : -1) * (Number(m[2]) * 60 + Number(m[3] ?? 0)) : 0;
}

/** Cairo time next to the visitor's own, and the difference in plain words. */
export default function TimeBridge({ className }: { className?: string }) {
  const [s, setS] = useState<State>(null);

  useEffect(() => {
    const tick = () => {
      const now = new Date();
      const localTz = Intl.DateTimeFormat().resolvedOptions().timeZone;
      const diff = (offset(site.timeZone, now) - offset(localTz, now)) / 60;
      setS({ cairo: fmt(site.timeZone).format(now), local: fmt(localTz).format(now), diff, sameZone: diff === 0 });
    };
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  if (!s) {
    return (
      <p className={className}>
        The studio works on Cairo time, and schedules calls in yours.
      </p>
    );
  }
  const hours = Math.abs(s.diff);
  const rel = s.sameZone
    ? "the same time as you"
    : `${hours} hour${hours === 1 ? "" : "s"} ${s.diff > 0 ? "ahead of" : "behind"} you`;
  return (
    <p className={className} aria-live="off">
      It is <b className="num">{s.cairo}</b> in Cairo and <b className="num">{s.local}</b> where you are: the studio is {rel}.
      Calls are scheduled in your working hours.
    </p>
  );
}
