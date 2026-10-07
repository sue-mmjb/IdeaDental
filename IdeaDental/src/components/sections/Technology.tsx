import Image from "next/image";
import { business, features, technology } from "@/lib/content";
import { ArrowPill, Eyebrow, Heading } from "../ui";
import { ArrowUpRight } from "../icons";

// Real office photos floating around the call card; left/top/width are % of the stage (StayGo 1400×420).
const floats = [
  { src: "/images/gallery-waiting.jpg", alt: "", left: "-3%", top: "8%", width: "10%", depth: 0.6 },
  { src: "/images/practice-gallery.jpg", alt: "", left: "10%", top: "18%", width: "21%", depth: 1.2 },
  { src: "/images/gallery-treatment.jpg", alt: "", left: "69%", top: "30%", width: "21%", depth: 0.9 },
  { src: "/images/gallery-signage.jpg", alt: "", left: "93%", top: "4%", width: "10%", depth: 0.5 },
];

export default function Technology() {
  return (
    <section id="technology" className="overflow-hidden bg-white pb-24 pt-20 md:pb-32 md:pt-28">
      <div className="container-x text-center">
        <Eyebrow data-reveal>Technology</Eyebrow>
        <Heading data-reveal className="mx-auto mt-5 max-w-[16ch]">
          We Have the Newest Technology
        </Heading>

        <dl className="mx-auto mt-10 grid max-w-[900px] gap-8 text-left md:grid-cols-2 md:gap-12">
          {technology.map((t) => (
            <div key={t.title} data-reveal className="border-t border-line pt-5">
              <dt className="font-display text-[19px] font-semibold tracking-[-0.01em]">{t.title}</dt>
              <dd className="mt-2 text-[15px] leading-relaxed text-muted">{t.description}</dd>
            </div>
          ))}
        </dl>

        <div data-reveal className="mt-12 flex flex-col items-center gap-3">
          <ArrowPill solid href="#contact">
            Request an Appointment
          </ArrowPill>
          <p className="text-[13px] text-muted">Hablamos Español</p>
        </div>

        {/* Feature marquee (StayGo's partner row): the set renders twice for a seamless loop;
            with reduced motion only the first set shows, wrapped and centred. */}
        <div
          data-reveal
          className="mt-14 overflow-hidden [mask-image:linear-gradient(90deg,transparent,#000_14%,#000_86%,transparent)]"
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

      {/* Office stage */}
      <div className="mt-16 px-5 md:mt-20 md:px-0">
        <div className="relative md:aspect-[1400/440]">
          {floats.map((f) => (
            <div
              key={f.src}
              data-float={f.depth}
              className="absolute hidden aspect-[460/365] overflow-hidden rounded-card md:block"
              style={{ left: f.left, top: f.top, width: f.width }}
              aria-hidden
            >
              <div data-reveal className="relative size-full">
                <Image src={f.src} alt={f.alt} fill sizes="22vw" className="object-cover" />
              </div>
            </div>
          ))}

          <div
            data-reveal
            className="relative mx-auto rounded-card bg-night px-6 py-10 text-center text-white md:absolute md:left-[35%] md:top-0 md:w-[30%] md:px-9 md:py-12"
          >
            <p className="mx-auto max-w-[22ch] font-display text-[clamp(18px,1.6vw,23px)] font-medium leading-[1.45]">
              Have a question before your visit? Call or text our team.
            </p>
            <a
              href={business.phoneHref}
              className="mt-8 flex items-center rounded-full border border-white/25 bg-white/5 p-1 pl-5 text-left text-[15px] text-white transition-colors hover:border-white/50"
            >
              <span className="flex-1">{business.phone}</span>
              <span data-hover-scale className="grid size-11 shrink-0 place-items-center rounded-full bg-white text-primary">
                <ArrowUpRight className="size-5" />
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
