import { about } from "@/lib/content";
import { ArrowPill, Eyebrow } from "../ui";

export default function About() {
  return (
    <section id="about" className="bg-white py-20 md:py-28">
      <div className="container-x grid gap-10 md:grid-cols-[0.37fr_0.63fr] md:gap-8">
        <div className="flex flex-col justify-between gap-8">
          <Eyebrow>About Idea Dental</Eyebrow>
          <p data-reveal className="max-w-[380px] text-[15px] leading-relaxed text-muted">
            {about.philosophy}
          </p>
        </div>

        <div>
          {/*
            House text reveal: a muted base layer with an identical ink layer stacked on top,
            uncovered by one clip line on scroll. Without motion the ink layer shows in full.
          */}
          <p className="relative max-w-[17em] font-display text-[clamp(26px,3vw,46px)] font-medium leading-[1.18] tracking-[-0.03em]">
            <span className="text-soft">{about.intro}</span>
            <span data-reveal-overlay aria-hidden className="absolute inset-0 text-ink">
              {about.intro}
            </span>
          </p>
          <div data-reveal className="mt-12 md:mt-16">
            <ArrowPill href="#doctors">Meet Our Doctors</ArrowPill>
          </div>
        </div>
      </div>
    </section>
  );
}
