"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { doctors, intros } from "@/lib/content";
import { gsap, ScrollTrigger, useGSAP } from "@/lib/gsap";
import { delay, distance, duration, ease } from "@/lib/motion-tokens";
import { Eyebrow, Heading } from "../ui";
import { Chevron } from "../icons";

function Doctor({ d }: { d: (typeof doctors)[number] }) {
  const root = useRef<HTMLElement>(null);
  const [open, setOpen] = useState(false);
  const { contextSafe } = useGSAP({ scope: root });
  const [lead, ...more] = d.bio;

  // Same expand/collapse choreography as the FAQ (house tokens).
  const toggle = contextSafe(() => {
    const next = !open;
    const [panel] = gsap.utils.toArray<HTMLElement>("[data-bio-panel]"); // scoped to this article
    const content = panel?.firstElementChild;
    if (!panel || !content) return;
    const refresh = () => ScrollTrigger.refresh();
    if (next) {
      gsap.to(panel, { height: "auto", duration: duration.expand, ease: ease.out, overwrite: true, onComplete: refresh });
      gsap.fromTo(
        content,
        { autoAlpha: 0, y: distance.contentShift },
        { autoAlpha: 1, y: 0, duration: duration.expand, delay: delay.expandContent, ease: ease.out },
      );
    } else {
      gsap.to(panel, { height: 0, duration: duration.collapse, ease: ease.in, overwrite: true, onComplete: refresh });
      gsap.to(content, { autoAlpha: 0, y: -distance.contentShift, duration: duration.collapse, ease: ease.in });
    }
    gsap.to("[data-bio-icon]", { rotation: next ? 180 : 0, duration: duration.iconMorph, ease: ease.inOut });
    setOpen(next);
  });

  return (
    <article ref={root} data-reveal>
      <div data-zoom-card className="relative aspect-[3/4] overflow-hidden rounded-card bg-surface md:aspect-[1400/900]">
        <Image
          data-zoom-img
          src={d.photo}
          alt={`Portrait of ${d.name}`}
          fill
          sizes="(min-width: 768px) 45vw, 100vw"
          className="object-cover object-top will-change-transform"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/10 to-transparent" />
        <div className="absolute inset-x-0 bottom-0 p-3 text-white md:p-7">
          <h3 className="font-display text-[clamp(17px,2.6vw,40px)] font-semibold tracking-[-0.03em]">{d.name}</h3>
          <p className="mt-0.5 text-[12px] text-white/85 md:mt-1 md:text-[14px]">{d.credentials}</p>
        </div>
      </div>

      <p className="mt-6 hidden max-w-[60ch] text-[15px] leading-relaxed text-muted sm:block">{lead}</p>
      <div
        id={`bio-${d.key}`}
        data-bio-panel
        className="overflow-hidden"
        style={{ height: 0 }}
        aria-hidden={!open}
      >
        <div className="space-y-4 pt-4" style={{ visibility: "hidden" }}>
          <p className="max-w-[60ch] text-[15px] leading-relaxed text-muted sm:hidden">{lead}</p>
          {more.map((p) => (
            <p key={p.slice(0, 24)} className="max-w-[60ch] text-[15px] leading-relaxed text-muted">
              {p}
            </p>
          ))}
        </div>
      </div>
      <button
        type="button"
        aria-expanded={open}
        aria-controls={`bio-${d.key}`}
        onClick={toggle}
        className="mt-3 inline-flex items-center gap-2 text-[14px] font-medium text-ink transition-colors hover:text-primary md:mt-5 md:text-[15px]"
      >
        {open ? "Show less" : "Read full bio"}
        <span data-bio-icon className="inline-block">
          <Chevron dir="down" className="size-4" />
        </span>
      </button>
    </article>
  );
}

export default function Doctors() {
  return (
    <section id="doctors" className="bg-surface py-14 md:py-20">
      <div className="container-x">
        <div className="grid gap-3 md:grid-cols-[0.37fr_0.63fr] md:gap-8">
          <Eyebrow data-reveal>Meet Our Doctors</Eyebrow>
          <Heading data-reveal className="text-[clamp(28px,3.9vw,60px)]">
            The Doctors Behind
            <br className="hidden md:block" /> Your Care
          </Heading>
          <p data-reveal className="max-w-[46ch] text-[14px] leading-relaxed text-muted md:mt-5 md:text-[15px]">
            {intros.doctors}
          </p>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-4 md:mt-12 md:gap-8">
          {doctors.map((d) => (
            <Doctor key={d.key} d={d} />
          ))}
        </div>
      </div>
    </section>
  );
}
