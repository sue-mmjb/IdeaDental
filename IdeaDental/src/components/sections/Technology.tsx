import { features, intros, technology } from "@/lib/content";
import VideoThumb from "./VideoThumb";
import { ArrowPill, Eyebrow, Heading } from "../ui";

export default function Technology() {
  return (
    <section id="technology" className="overflow-hidden bg-paper py-12 md:py-20">
      <div className="container-x text-center">
        <Eyebrow data-reveal>Technology</Eyebrow>
        <Heading data-reveal className="mx-auto mt-3 max-w-[16ch] text-[clamp(28px,3.9vw,60px)] md:mt-4">
          Advanced Dental Technology
        </Heading>
        <p data-reveal className="mx-auto mt-3 max-w-[58ch] text-[14px] leading-relaxed text-muted md:mt-4 md:text-[15px]">
          {intros.technology}
        </p>

        <dl className="mx-auto mt-6 grid max-w-[900px] grid-cols-2 gap-4 text-left md:mt-10 md:gap-12">
          {technology.map((t) => (
            <div key={t.title} data-reveal className="border-t border-line pt-3 md:pt-5">
              <dt className="font-display text-[15px] font-semibold tracking-[-0.01em] md:text-[19px]">{t.title}</dt>
              <dd className="mt-1 text-[13px] leading-relaxed text-muted md:mt-2 md:text-[15px]">
                {t.description}
                <VideoThumb id={t.video.id} title={t.video.title} start={t.video.start} />
              </dd>
            </div>
          ))}
        </dl>

        <div data-reveal className="mt-7 flex flex-col items-center gap-2 md:mt-10 md:gap-3">
          <ArrowPill solid href="#contact">
            Request an Appointment
          </ArrowPill>
          <p className="text-[13px] text-muted">Hablamos Español</p>
        </div>

        {/* Feature marquee: the set renders twice for a seamless loop;
            with reduced motion only the first set shows, wrapped and centred. */}
        <div
          data-reveal
          className="mt-12 hidden overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_14%,#000_86%,transparent)] md:block"
        >
          <div data-marquee-track className="flex w-max motion-reduce:w-full motion-reduce:justify-center">
            {[0, 1].map((copy) => (
              <ul
                key={copy}
                aria-label={copy === 0 ? "What to expect at Idea Dental" : undefined}
                aria-hidden={copy === 1 || undefined}
                className={`flex shrink-0 items-center gap-12 pr-12 md:gap-16 md:pr-16 ${
                  copy === 1 ? "motion-reduce:hidden" : "motion-reduce:flex-wrap motion-reduce:justify-center"
                }`}
              >
                {features.map((f) => (
                  <li
                    key={f}
                    className="flex shrink-0 items-center gap-12 whitespace-nowrap font-display text-[clamp(20px,2vw,30px)] font-semibold tracking-[-0.02em] text-ink/35 md:gap-16"
                  >
                    {f}
                    <span aria-hidden className="text-primary/60">
                      ✦
                    </span>
                  </li>
                ))}
              </ul>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
