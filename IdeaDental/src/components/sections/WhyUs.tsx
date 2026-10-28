import { whyUs } from "@/lib/content";
import { Eyebrow, Heading } from "../ui";

/**
 * "Why patients choose Idea Dental" — the five reasons from the content file. Only their short
 * labels were on the page before, scrolling past in the feature marquee; the reasons themselves
 * had nowhere to live, so they get a section in the same numbered-card language as Technology.
 */
export default function WhyUs() {
  return (
    <section id="why" className="bg-paper py-14 md:py-20">
      <div className="container-x">
        <div data-reveal>
          <Eyebrow>{whyUs.eyebrow}</Eyebrow>
          <Heading className="mt-5">{whyUs.heading}</Heading>
        </div>

        <dl className="mt-8 grid grid-cols-2 gap-x-5 gap-y-6 md:mt-12 md:grid-cols-3 md:gap-10 xl:grid-cols-5">
          {whyUs.reasons.map((r, i) => (
            <div key={r.title} data-reveal className="border-t border-line pt-4 md:pt-5">
              <p className="hidden text-[13px] tabular-nums text-muted sm:block">
                {String(i + 1).padStart(2, "0")} / {String(whyUs.reasons.length).padStart(2, "0")}
              </p>
              <dt className="font-display text-[16px] font-semibold tracking-[-0.01em] sm:mt-3 md:text-[19px]">
                {r.title}
              </dt>
              <dd className="mt-1.5 text-[14px] leading-relaxed text-muted md:mt-2 md:text-[15px]">{r.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
