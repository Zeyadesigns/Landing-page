"use client";

import { useEffect, useRef, useState } from "react";

type Props = {
  /** The in-page nav this bar stands in for; the bar stays hidden while any of it is on screen. */
  anchorId: string;
  className?: string;
  children: React.ReactNode;
};

/** Distance to scroll before the bar changes state, so small jitters don't toggle it. */
const SLACK = 6;

/**
 * A fixed copy of the nav that hides while scrolling down and slides back in while scrolling up,
 * once the hero's own nav has left the viewport. Hidden, it is inert (no focus, not announced).
 */
export default function StickyNav({ anchorId, className, children }: Props) {
  const [shown, setShown] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const anchor = document.getElementById(anchorId);
    if (!anchor) return;
    let last = window.scrollY;
    let raf: number | null = null;

    const update = () => {
      raf = null;
      const y = window.scrollY;
      const anchorBottom = anchor.getBoundingClientRect().bottom + y;
      if (y <= anchorBottom) {
        setShown(false);
        last = y;
      } else if (y < last - SLACK) {
        setShown(true);
        last = y;
      } else if (y > last + SLACK) {
        setShown(false);
        last = y;
      }
    };
    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(update);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (raf != null) cancelAnimationFrame(raf);
    };
  }, [anchorId]);

  // Hiding the bar while focus is inside it would strand keyboard users on an inert element.
  useEffect(() => {
    if (!shown && ref.current?.contains(document.activeElement)) (document.activeElement as HTMLElement).blur();
  }, [shown]);

  return (
    <div ref={ref} className={className} data-shown={shown ? "" : undefined} inert={!shown}>
      {children}
    </div>
  );
}
