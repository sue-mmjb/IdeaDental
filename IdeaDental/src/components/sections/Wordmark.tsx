"use client";

import { useEffect, useRef } from "react";

/**
 * Screen-width footer wordmark that always fits its row. Viewport-based sizes can't account for
 * scrollbars, browser zoom, or the fallback font showing before Manrope loads, so after mount it
 * measures its letters and scales the font to fill the container exactly (re-run on resize and
 * font load). Before JS, the container-query size in CSS is a safe, slightly smaller default.
 */
export default function Wordmark({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fit = () => {
      el.style.fontSize = "";
      const letters = Array.from(el.children) as HTMLElement[];
      const width = letters.reduce((sum, s) => sum + s.getBoundingClientRect().width, 0);
      if (!width) return;
      const current = parseFloat(getComputedStyle(el).fontSize);
      // 0.99 leaves a hair of room so rounding never pushes the last glyph past the edge.
      el.style.fontSize = `${(current * el.clientWidth * 0.99) / width}px`;
    };

    fit();
    document.fonts?.ready.then(fit);
    document.fonts?.addEventListener("loadingdone", fit);
    const ro = new ResizeObserver(fit);
    ro.observe(el);
    return () => {
      ro.disconnect();
      document.fonts?.removeEventListener("loadingdone", fit);
    };
  }, []);

  return (
    <div className="mt-16 [container-type:inline-size]">
      <p
        ref={ref}
        aria-label={text}
        className="-mb-[0.12em] flex justify-between overflow-hidden pb-[0.16em] font-display text-[calc(100cqw/5.8)] font-semibold leading-[0.95]"
      >
        {text.split("").map((ch, i) => (
          <span key={i} aria-hidden data-wordmark-letter className="inline-block">
            {ch === " " ? " " : ch}
          </span>
        ))}
      </p>
    </div>
  );
}
