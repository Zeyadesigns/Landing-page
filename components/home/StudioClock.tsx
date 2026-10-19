"use client";

import { useEffect, useState } from "react";
import styles from "./Hero.module.css";

const TIME_ZONE = "Africa/Cairo";

// Live studio clock in Cairo time (offset label updates automatically).
// Renders a placeholder on the server and fills in after mount to avoid hydration mismatches.
export default function StudioClock() {
  const [tz, setTz] = useState("GMT+3");
  const [time, setTime] = useState("--:--");

  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-GB", {
      timeZone: TIME_ZONE,
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const tick = () => {
      setTime(fmt.format(new Date()));
      try {
        const parts = new Intl.DateTimeFormat("en-US", {
          timeZone: TIME_ZONE,
          timeZoneName: "shortOffset",
        }).formatToParts(new Date());
        const p = parts.find((x) => x.type === "timeZoneName");
        if (p) setTz(p.value);
      } catch {}
    };
    tick();
    const id = setInterval(tick, 15000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className={styles.clock} aria-label="Studio local time">
      <span className={styles.tz}>{tz}</span>
      <span>{time}</span>
    </div>
  );
}
