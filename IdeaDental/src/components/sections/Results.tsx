"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { intros, results } from "@/lib/content";
import { ScrollSmoother, ScrollTrigger } from "@/lib/gsap";
import { CAROUSEL_EVENT, CAROUSEL_ID } from "@/lib/choreography";
import { Eyebrow, Heading, NavArrow } from "../ui";

// Keeps the track's left edge aligned with .container-x, even past its 1600px max width.
const edgePad = "max(clamp(20px, 5.5vw, 88px), calc((100vw - 1600px) / 2 + 88px))";

/** Before & After gallery on StayGo's pinned horizontal carousel. */
export default function Results() {
  const viewport = useRef<HTMLDivElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [progress, setProgress] = useState(0);

  // Pinned mode reports progress from the ScrollTrigger; native mode (reduced motion) from scrollLeft.
  useEffect(() => {
    const onPinned = (e: Event) => setProgress((e as CustomEvent<number>).detail);
    const vp = viewport.current;
    const onNative = () => {
      if (!vp) return;
      const max = vp.scrollWidth - vp.clientWidth;
      setProgress(max > 0 ? vp.scrollLeft / max : 0);
    };
    window.addEventListener(CAROUSEL_EVENT, onPinned);
    vp?.addEventListener("scroll", onNative, { passive: true });
    return () => {
      window.removeEventListener(CAROUSEL_EVENT, onPinned);
      vp?.removeEventListener("scroll", onNative);
    };
  }, []);

  const step = (dir: 1 | -1) => {
    const vp = viewport.current;
    const tr = track.current;
    if (!vp || !tr) return;
    const cards = Array.from(tr.children) as HTMLElement[];
    const max = Math.max(1, tr.scrollWidth - vp.clientWidth);
    const offsets = cards.map((c) => Math.min(c.offsetLeft - cards[0].offsetLeft, max) / max);
    const target =
      dir > 0
        ? (offsets.find((o) => o > progress + 0.02) ?? 1)
        : ([...offsets].reverse().find((o) => o < progress - 0.02) ?? 0);

    const st = ScrollTrigger.getById(CAROUSEL_ID);
    if (st) {
      const y = st.start + (st.end - st.start) * target;
      const smoother = ScrollSmoother.get();
      if (smoother) smoother.scrollTo(y, true);
      else window.scrollTo({ top: y, behavior: "smooth" });
    } else {
      vp.scrollTo({ left: target * (vp.scrollWidth - vp.clientWidth), behavior: "smooth" });
    }
  };

  return (
    <section
      data-carousel
      id="before-after"
      aria-roledescription="carousel"
      aria-label="Before and after gallery"
      className="flex min-h-[100svh] flex-col justify-center overflow-hidden bg-paper py-[max(56px,8vh)]"
    >
      <div className="container-x flex items-end justify-between gap-6">
        <div>
          <Eyebrow data-reveal>Patient results</Eyebrow>
          <Heading data-reveal className="mt-4">
            Before &amp; After
            <br />
            Gallery
          </Heading>
          <p data-reveal className="mt-5 max-w-[46ch] text-[15px] leading-relaxed text-muted">
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
        data-carousel-viewport
        tabIndex={0}
        aria-label="Scrollable before and after photos"
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") step(1);
          if (e.key === "ArrowLeft") step(-1);
        }}
        className="mt-10 overflow-hidden outline-none motion-reduce:snap-x motion-reduce:snap-mandatory motion-reduce:overflow-x-auto md:mt-12"
      >
        <div
          ref={track}
          data-carousel-track
          className="flex w-max gap-5 will-change-transform"
          style={{ paddingLeft: edgePad, paddingRight: edgePad }}
        >
          {results.map((r, i) => (
            <figure key={r.key} data-reveal className="w-[clamp(220px,min(20vw,36vh),330px)] shrink-0 snap-start">
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
              <figcaption className="mt-4 flex items-start justify-between gap-3 px-1">
                <div>
                  <p className="font-display text-[17px] font-semibold tracking-[-0.01em]">{r.treatment}</p>
                  <p className="mt-1 text-[13px] text-muted">{r.category}</p>
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
