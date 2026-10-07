"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { faqs } from "@/lib/content";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { delay, distance, duration, ease } from "@/lib/motion-tokens";
import { Eyebrow, Heading } from "../ui";
import { Chevron } from "../icons";

const INITIAL_OPEN = 0;

export default function Faq() {
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState<number | null>(INITIAL_OPEN);
  const { contextSafe } = useGSAP({ scope: root });

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
      // Page height changed — let the pinned carousel and reveals re-measure.
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

  return (
    <section id="faq" ref={root} className="bg-white py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div data-reveal>
            <Eyebrow>FAQs</Eyebrow>
            <Heading className="mt-5">
              Got Questions?
              <br />
              We’re Here to Help.
            </Heading>
          </div>
          <p data-reveal className="max-w-[46ch] text-[15px] leading-relaxed text-muted md:mb-2">
            Quick answers about our hours, prices, insurance, payment and what to expect at your first visit.
          </p>
        </div>

        <div className="mt-12 grid items-start gap-10 md:mt-16 md:grid-cols-[1fr_1.06fr] lg:gap-14">
          <ul>
            {faqs.map((f, i) => {
              const isOpen = open === i;
              return (
                <li key={f.q} data-reveal className="border-b border-line">
                  <h3>
                    <button
                      id={`faq-btn-${i}`}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      onClick={() => toggle(i)}
                      className={`flex w-full items-center justify-between gap-6 px-4 py-6 text-left font-display text-[clamp(16px,1.3vw,19px)] font-medium tracking-[-0.01em] transition-colors hover:text-primary focus-visible:outline-2 focus-visible:outline-primary ${
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
                    <p className="max-w-[62ch] px-4 pb-6 text-[15px] leading-relaxed text-muted">{f.a}</p>
                  </div>
                </li>
              );
            })}
          </ul>

          <div data-reveal className="relative aspect-[1450/1085] overflow-hidden rounded-card">
            <Image
              src="/images/about-office.jpg"
              alt="Bright consultation room at Idea Dental"
              fill
              sizes="(min-width: 768px) 48vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
