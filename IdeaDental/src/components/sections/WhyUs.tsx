import { whyUs } from "@/lib/content";
import { Eyebrow, Heading } from "../ui";

/**
 * "Why patients choose Idea Dental" — the five reasons from the content file. Only their short
 * labels were on the page before, scrolling past in the feature marquee; the reasons themselves
 * had nowhere to live, so they get a section in the same numbered-card language as Technology.
 */
export default function WhyUs() {
  return (
    <section id="why" className="bg-paper py-20 md:py-28">
      <div className="container-x">
        <div data-reveal>
          <Eyebrow>{whyUs.eyebrow}</Eyebrow>
          <Heading className="mt-5">{whyUs.heading}</Heading>
        </div>

        <dl className="mt-12 grid gap-8 md:mt-16 md:grid-cols-3 md:gap-10">
          {whyUs.reasons.map((r, i) => (
            <div key={r.title} data-reveal className="border-t border-line pt-5">
              <p className="text-[13px] tabular-nums text-muted">
                {String(i + 1).padStart(2, "0")} / {String(whyUs.reasons.length).padStart(2, "0")}
              </p>
              <dt className="mt-3 font-display text-[19px] font-semibold tracking-[-0.01em]">
                {r.title}
              </dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-muted">{r.body}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
