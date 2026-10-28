"use client";

import { useRef, useState } from "react";
import { reviewSummary, testimonials } from "@/lib/content";
import { gsap, useGSAP } from "@/lib/gsap";
import { delay, distance, duration, ease } from "@/lib/motion-tokens";
import { Eyebrow, NavArrow } from "../ui";
import { Quote } from "../icons";

const initials = (name: string) =>
  name
    .split(/\s+/)
    .map((p) => p[0])
    .join("")
    .replace(/[^A-Z]/gi, "")
    .slice(0, 2);

export default function Testimonials() {
  const root = useRef<HTMLElement>(null);
  const [index, setIndex] = useState(0);
  const t = testimonials[index];

  const { contextSafe } = useGSAP({ scope: root });

  // House swap: outgoing quote collapses on ease.in, incoming expands on ease.out after a beat.
  const go = contextSafe((dir: 1 | -1) => {
    gsap.to("[data-quote]", {
      autoAlpha: 0,
      y: -distance.contentShift,
      duration: duration.collapse,
      ease: ease.in,
      onComplete: () => {
        setIndex((i) => (i + dir + testimonials.length) % testimonials.length);
        gsap.fromTo(
          "[data-quote]",
          { autoAlpha: 0, y: distance.contentShift },
          { autoAlpha: 1, y: 0, duration: duration.enter, delay: delay.expandContent, ease: ease.out },
        );
      },
    });
  });

  return (
    <section
      ref={root}
      aria-roledescription="carousel"
      aria-label="Patient reviews"
      className="bg-surface py-14 md:py-20"
    >
      <div className="container-x grid gap-8 md:grid-cols-[1fr_auto_1.15fr] md:gap-10 lg:gap-16">
        <div className="flex flex-col justify-between gap-6 md:gap-10">
          <div data-reveal>
            <Eyebrow>Patient Reviews</Eyebrow>
            <p className="mt-3 font-display text-[clamp(17px,1.9vw,28px)] font-medium leading-[1.3] tracking-[-0.02em] text-ink/75 md:max-w-[26ch]">
              See why Houston patients choose Idea Dental for affordable, compassionate dental care.
            </p>
            <p data-reveal className="mt-4 flex items-baseline gap-3 md:mt-6">
              <span className="font-display text-[28px] font-semibold tracking-[-0.02em] md:text-[34px]">
                {reviewSummary.rating}
              </span>
              <span aria-hidden className="text-[15px] tracking-[0.1em] text-primary">
                ★★★★★
              </span>
              <span className="text-[14px] text-muted">{reviewSummary.count}</span>
            </p>
          </div>
          <div data-reveal className="hidden items-center gap-3 md:flex">
            <NavArrow dir="left" active={false} onClick={() => go(-1)} />
            <NavArrow dir="right" active onClick={() => go(1)} />
            <p className="ml-3 text-[13px] tabular-nums text-muted" aria-live="polite">
              {index + 1} / {testimonials.length}
            </p>
          </div>
        </div>

        <Quote className="hidden h-16 w-20 text-[#B9BDD3] md:block" />

        <figure data-reveal>
          <div data-quote>
            <blockquote>
              <p className="font-display text-[clamp(24px,3.7vw,58px)] font-semibold leading-[1.1] tracking-[-0.035em]">
                {t.headline}
              </p>
              <p className="mt-4 max-w-[58ch] text-[15px] leading-relaxed text-muted md:mt-6 md:text-[16px]">{t.body}</p>
            </blockquote>
            <figcaption className="mt-5 flex items-center gap-3 md:mt-8">
              <span
                aria-hidden
                className="grid size-12 place-items-center rounded-full bg-white font-display text-[15px] font-semibold text-ink ring-1 ring-line"
              >
                {initials(t.name)}
              </span>
              <div>
                <p className="text-[16px] font-medium">{t.name}</p>
                <p className="mt-0.5 text-[13px] text-muted">Idea Dental patient</p>
              </div>
            </figcaption>
          </div>
          <div className="mt-5 flex items-center gap-3 md:hidden">
            <NavArrow dir="left" active={false} onClick={() => go(-1)} />
            <NavArrow dir="right" active onClick={() => go(1)} />
            <p className="ml-2 text-[13px] tabular-nums text-muted">
              {index + 1} / {testimonials.length}
            </p>
          </div>
        </figure>
      </div>
    </section>
  );
}
