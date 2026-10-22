"use client";

import Link from "next/link";
import { useRef, useState } from "react";
import { faqs } from "@/lib/content";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { delay, distance, duration, ease } from "@/lib/motion-tokens";
import { Eyebrow, Heading } from "../ui";
import { Chevron } from "../icons";
import AskIdeaDental from "./AskIdeaDental";

const INITIAL_OPEN = 0;
/** How many questions the homepage shows; the rest live on /faq. */
export const HOME_FAQ_COUNT = 6;

type Props = {
  /** Homepage: the first few questions beside the assistant, with a link to the full list. */
  compact?: boolean;
};

export default function Faq({ compact = false }: Props) {
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(INITIAL_OPEN);
  const { contextSafe } = useGSAP({ scope: root });
  const items = compact ? faqs.slice(0, HOME_FAQ_COUNT) : faqs;

  const toggle = contextSafe((i: number) => {
    const next = open === i ? null : i;
    const panels = gsap.utils.toArray<HTMLElement>("[data-faq-panel]");
    const icons = gsap.utils.toArray<HTMLElement>("[data-faq-icon]");

    // House expand/collapse (services-motion/analysis/transitions.md §B): the outgoing item
    // collapses faster on ease.in so it's out of the way; the incoming one expands on ease.out and
    // its text waits a beat for the container to make room.
    panels.forEach((panel, idx) => {
      const content = panel.firstElementChild;
      const wasOpen = idx === open;
      const expand = idx === next;
      // Page height changed: let the reveals re-measure.
      const refresh = idx === i ? () => ScrollTrigger.refresh() : undefined;

      if (expand && !wasOpen) {
        gsap.to(panel, { height: "auto", duration: duration.expand, ease: ease.out, overwrite: true, onComplete: refresh });
        gsap.fromTo(
          content,
          { autoAlpha: 0, y: distance.contentShift },
          { autoAlpha: 1, y: 0, duration: duration.expand, delay: delay.expandContent, ease: ease.out, overwrite: true },
        );
      } else if (!expand && wasOpen) {
        gsap.to(panel, { height: 0, duration: duration.collapse, ease: ease.in, overwrite: true, onComplete: refresh });
        gsap.to(content, { autoAlpha: 0, y: -distance.contentShift, duration: duration.collapse, ease: ease.in, overwrite: true });
      }
      gsap.to(icons[idx], { rotation: expand ? 180 : 0, duration: duration.iconMorph, ease: ease.inOut, overwrite: true });
    });
    setOpen(next);
  });

  const list = (
    <ul>
      {items.map((f, i) => {
        const isOpen = open === i;
        return (
          <li key={f.q} data-reveal className="border-b border-line">
            <h3>
              <button
                id={`faq-btn-${i}`}
                aria-expanded={isOpen}
                aria-controls={`faq-panel-${i}`}
                onClick={() => toggle(i)}
                className={`flex w-full items-center justify-between gap-6 px-3 py-4 text-left font-display text-[clamp(16px,1.3vw,19px)] font-medium tracking-[-0.01em] transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary md:py-5 ${
                  isOpen ? "text-ink" : "text-ink/70"
                }`}
              >
                {f.q}
                <span data-faq-icon className={`shrink-0 ${isOpen ? "text-primary" : ""}`}>
                  <Chevron dir="down" className="size-5" />
                </span>
              </button>
            </h3>
            {/* Height is owned by GSAP after mount; the style value never changes so React won't reset it. */}
            <div
              id={`faq-panel-${i}`}
              role="region"
              aria-labelledby={`faq-btn-${i}`}
              data-faq-panel
              className="overflow-hidden"
              style={{ height: i === INITIAL_OPEN ? "auto" : 0 }}
            >
              <p className="max-w-[62ch] px-3 pb-5 text-[15px] leading-relaxed text-muted">{f.a}</p>
            </div>
          </li>
        );
      })}
    </ul>
  );

  if (!compact) {
    return (
      <section id="faq" ref={root} className="bg-paper py-14 md:py-20">
        <div className="container-x">
          <div className="mx-auto max-w-[820px]">{list}</div>
        </div>
      </section>
    );
  }

  return (
    <section id="faq" ref={root} className="bg-paper py-14 md:py-20">
      <div className="container-x">
        <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
          <div data-reveal>
            <Eyebrow>FAQs</Eyebrow>
            <Heading className="mt-4">
              Got Questions?
              <br />
              We’re Here to Help.
            </Heading>
          </div>
          <p data-reveal className="max-w-[46ch] text-[15px] leading-relaxed text-muted md:mb-2">
            Quick answers about our hours, prices, insurance, payment and what to expect at your first visit.
          </p>
        </div>

        <div className="mt-10 grid items-start gap-10 md:mt-12 md:grid-cols-2 lg:gap-14">
          <div>
            {list}
            <div data-reveal className="mt-8">
              <Link
                href="/faq"
                data-hover-scale
                className="group inline-flex items-center gap-4 rounded-full border border-ink/70 py-1 pl-6 pr-1 text-[15px] font-medium text-ink transition-colors hover:border-primary focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                See all {faqs.length} questions
                <span className="grid size-10 place-items-center rounded-full bg-primary text-white">
                  <Chevron dir="right" className="size-4" />
                </span>
              </Link>
            </div>
          </div>

          <div>
            <p data-reveal className="font-display text-[19px] font-semibold tracking-[-0.01em]">
              Still have a question? Ask Idea Dental.
            </p>
            <p data-reveal className="mt-2 text-[15px] leading-relaxed text-muted">
              Our assistant answers questions about treatments, insurance and payment any time. For
              appointments, text or call the office.
            </p>
            <div className="mt-6">
              <AskIdeaDental />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
