"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

/**
 * The motion layer. Content is visible without it; once it runs, the parts of
 * each [data-reveal] block rise in sequence the first time they enter, and the
 * one [data-shutter] picture opens.
 */
export default function Motion() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;
    const els = Array.from(document.querySelectorAll<HTMLElement>("[data-reveal], [data-shutter]")).filter(
      (el) => !el.classList.contains("is-in"),
    );
    els.forEach((el) => {
      if (el.hasAttribute("data-reveal")) {
        Array.from(el.children).forEach((child, i) => {
          const c = child as HTMLElement;
          if (!c.style.getPropertyValue("--i")) c.style.setProperty("--i", String(i));
        });
      }
    });

    // anything already on screen when the page loads shows at once, without travel
    const vh = window.innerHeight;
    els.forEach((el) => {
      if (el.getBoundingClientRect().top < vh * 0.9) el.classList.add("is-in");
    });
    root.classList.add("js");

    // A closed shutter has no visible area, and IntersectionObserver counts the
    // target's own clip-path, so shutters are watched through their parent.
    const watched = new Map<Element, HTMLElement>();
    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            watched.get(e.target)?.classList.add("is-in");
            io.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.05 },
    );
    els.forEach((el) => {
      if (el.classList.contains("is-in")) return;
      const target = el.hasAttribute("data-shutter") && el.parentElement ? el.parentElement : el;
      watched.set(target, el);
      io.observe(target);
    });
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
