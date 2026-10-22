"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { intros, results } from "@/lib/content";
import { Eyebrow, Heading, NavArrow } from "../ui";

// Keeps the track's left edge aligned with .container-x, even past its 1600px max width.
const edgePad = "max(clamp(20px, 5.5vw, 88px), calc((100vw - 1600px) / 2 + 88px))";

/**
 * Before & After gallery: a plain swipeable row. It scrolls sideways with a finger, a trackpad
 * or the arrows, and never takes over the page's vertical scroll, so it costs the reader one
 * card-height of page instead of several screens.
 */
export default function Results() {
  const viewport = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const vp = viewport.current;
    if (!vp) return;
    const update = () => {
      const max = vp.scrollWidth - vp.clientWidth;
      setProgress(max > 0 ? vp.scrollLeft / max : 0);
    };
    update();
    vp.addEventListener("scroll", update, { passive: true });
    const ro = new ResizeObserver(update);
    ro.observe(vp);
    return () => {
      vp.removeEventListener("scroll", update);
      ro.disconnect();
    };
  }, []);

  // One step = two cards (plus their gap), which reads as "the next pair" on any screen.
  const step = (dir: 1 | -1) => {
    const vp = viewport.current;
    const card = vp?.querySelector<HTMLElement>("figure");
    if (!vp || !card) return;
    vp.scrollBy({ left: dir * (card.offsetWidth + 20) * 2, behavior: "smooth" });
  };

  return (
    <section
      id="before-after"
      aria-roledescription="carousel"
      aria-label="Before and after gallery"
      className="overflow-hidden bg-paper py-14 md:py-20"
    >
      <div className="container-x flex items-end justify-between gap-6">
        <div>
          <Eyebrow data-reveal>Patient results</Eyebrow>
          <Heading data-reveal className="mt-4">
            Before &amp; After Gallery
          </Heading>
          <p data-reveal className="mt-4 max-w-[46ch] text-[15px] leading-relaxed text-muted">
            {intros.results}
          </p>
        </div>
        <div data-reveal className="flex shrink-0 gap-3 md:mb-2">
          <NavArrow dir="left" active={progress > 0.01} onClick={() => step(-1)} />
          <NavArrow dir="right" active={progress < 0.99} onClick={() => step(1)} />
        </div>
      </div>

      <div
        ref={viewport}
        tabIndex={0}
        aria-label="Scrollable before and after photos"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="no-scrollbar mt-8 snap-x snap-mandatory overflow-x-auto outline-none md:mt-10"
        style={{ scrollPaddingInline: edgePad }}
      >
        <div className="flex w-max gap-5" style={{ paddingLeft: edgePad, paddingRight: edgePad }}>
          {results.map((r, i) => (
            <figure key={r.key} data-reveal className="w-[clamp(200px,22vw,280px)] shrink-0 snap-start">
              <div className="relative aspect-[2/3] overflow-hidden rounded-card bg-surface">
                <Image
                  src={`/images/results/${r.key}.jpg`}
                  alt={`${r.treatment} before and after${r.timing ? `, ${r.timing}` : ""}`}
                  fill
                  sizes="(min-width: 768px) 22vw, 60vw"
                  className="object-cover"
                  loading={i < 4 ? "eager" : "lazy"}
                />
              </div>
              <figcaption className="mt-3 flex items-start justify-between gap-3 px-1">
                <div>
                  <p className="font-display text-[16px] font-semibold tracking-[-0.01em]">{r.treatment}</p>
                  <p className="mt-0.5 text-[13px] text-muted">{r.category}</p>
                </div>
                {r.timing && <p className="shrink-0 pt-0.5 text-[13px] text-ink/70">{r.timing}</p>}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
