"use client";

import { useEffect } from "react";

/**
 * Keeps the pricing cards' rows aligned, as in Figma, without equalising the cards' heights:
 * every description takes the height of the tallest one, so prices, buttons and feature lists
 * start at the same line in all three cards whatever the copy wraps to.
 */
export default function TierRows({ selector }: { selector: string }) {
  useEffect(() => {
    const items = [...document.querySelectorAll<HTMLElement>(selector)];
    if (items.length < 2) return;
    const row = window.matchMedia("(min-width: 1100px)"); // the cards sit side by side from here
    let frame = 0;
    const sync = () => {
      cancelAnimationFrame(frame);
      frame = requestAnimationFrame(() => {
        items.forEach((el) => (el.style.minHeight = ""));
        if (!row.matches) return;
        const tallest = Math.max(...items.map((el) => el.getBoundingClientRect().height));
        items.forEach((el) => (el.style.minHeight = `${tallest}px`));
      });
    };
    const ro = new ResizeObserver(sync);
    items.forEach((el) => ro.observe(el.parentElement ?? el));
    row.addEventListener("change", sync);
    document.fonts?.ready.then(sync);
    sync();
    return () => {
      cancelAnimationFrame(frame);
      ro.disconnect();
      row.removeEventListener("change", sync);
    };
  }, [selector]);
  return null;
}
