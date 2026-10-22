import { about } from "@/lib/content";
import { Eyebrow } from "../ui";

/**
 * About: the statement on the left at the section-heading scale, the philosophy paragraph beside
 * it. Same two-column rhythm as Pricing and Doctors, so the block reads as one piece instead of a
 * narrow paragraph on one edge and a headline floating over empty space on the other.
 */
export default function About() {
  return (
    <section id="about" className="bg-paper py-14 md:py-20">
      <div className="container-x grid gap-8 md:grid-cols-[0.42fr_0.58fr] md:gap-12 lg:gap-20">
        <div>
          <Eyebrow>{about.eyebrow}</Eyebrow>
          {/*
            House text reveal: a muted base layer with an identical ink layer stacked on top,
            uncovered by one clip line on scroll. Without motion the ink layer shows in full.
          */}
          <h2 className="relative mt-4 max-w-[11ch] font-display text-[clamp(34px,3.9vw,60px)] font-semibold leading-[1.08] tracking-[-0.035em]">
            <span className="text-soft">{about.intro}</span>
            <span data-reveal-overlay aria-hidden className="absolute inset-0 text-ink">
              {about.intro}
            </span>
          </h2>
        </div>

        <p data-reveal className="max-w-[60ch] text-[16px] leading-[1.7] text-muted md:pt-1 md:text-[17px]">
          {about.philosophy}
        </p>
      </div>
    </section>
  );
}
