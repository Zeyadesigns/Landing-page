"use client";

import { useEffect, useRef, useState } from "react";

/** Copies the address to the clipboard and swaps the label for a brief "Copied", without moving the layout. */
export default function CopyEmail({
  address,
  label,
  copied,
  className,
}: {
  address: string;
  label: string;
  copied: string;
  className?: string;
}) {
  const [done, setDone] = useState(false);
  const timer = useRef<number | undefined>(undefined);
  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(address);
    } catch {
      // older browsers, or no clipboard permission: a hidden textarea and execCommand
      const area = document.createElement("textarea");
      area.value = address;
      area.setAttribute("readonly", "");
      area.style.cssText = "position:fixed;opacity:0;pointer-events:none";
      document.body.appendChild(area);
      area.select();
      document.execCommand("copy");
      area.remove();
    }
    setDone(true);
    window.clearTimeout(timer.current);
    timer.current = window.setTimeout(() => setDone(false), 1600);
  };

  return (
    <>
      <button
        type="button"
        className={className}
        onClick={copy}
        title={address}
        aria-label={`Copy email address, ${address}`}
        data-copied={done ? "" : undefined}
      >
        {/* both labels share one grid cell, so the button keeps the width of the longer one */}
        <span data-label aria-hidden="true">
          {label}
        </span>
        <span data-label aria-hidden="true">
          {copied}
        </span>
      </button>
      <span className="sr-only" aria-live="polite">
        {done ? `${address} copied to the clipboard` : ""}
      </span>
    </>
  );
}
