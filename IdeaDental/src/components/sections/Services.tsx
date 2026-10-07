import Image from "next/image";
import { about, services, type ServiceCategory } from "@/lib/content";
import { ArrowPill, Heading } from "../ui";
import { ArrowUpRight } from "../icons";

function ServiceCard({ s, large, className = "" }: { s: ServiceCategory; large?: boolean; className?: string }) {
  return (
    <a
      href={s.cta.href}
      aria-label={`${s.label}: ${s.cta.label.toLowerCase()}`}
      data-reveal
      data-zoom-card
      className={`group relative block min-h-[420px] overflow-hidden rounded-card bg-night text-white md:min-h-0 ${className}`}
    >
      {s.cutout ? (
        // A cut-out on the card colour: a photo fill would crop the tooth to nothing.
        <Image
          data-zoom-img
          src={s.image}
          alt={s.alt}
          width={468}
          height={476}
          sizes="(min-width: 768px) 30vw, 60vw"
          className="absolute right-[6%] top-1/2 h-[68%] w-auto -translate-y-1/2 object-contain will-change-transform"
        />
      ) : (
        <>
          <Image
            data-zoom-img
            src={s.image}
            alt={s.alt}
            fill
            sizes={large ? "(min-width: 768px) 62vw, 100vw" : "(min-width: 768px) 34vw, 100vw"}
            className="object-cover will-change-transform"
          />
          <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-black/5" />
        </>
      )}
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 md:p-7">
        <div className="max-w-[46ch]">
          <h3
            className={`font-display font-semibold tracking-[-0.03em] ${
              large ? "text-[clamp(26px,2.7vw,42px)]" : "text-[clamp(22px,1.9vw,30px)]"
            }`}
          >
            {s.label}
          </h3>
          <p className={`mt-2 text-[14px] leading-relaxed text-white/80 ${large ? "line-clamp-3" : "line-clamp-2"}`}>
            {s.description}
          </p>
          {s.treatments.length > 0 && (
            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${s.label} treatments`}>
              {s.treatments.map((t) => (
                <li key={t} className="rounded-full border border-white/30 px-3 py-1 text-[12px] text-white/90">
                  {t}
                </li>
              ))}
            </ul>
          )}
          <p className="mt-4 text-[14px] font-medium text-white">
            {s.cta.label} <span aria-hidden>→</span>
          </p>
        </div>
        <span className="grid size-11 shrink-0 place-items-center rounded-full border border-white/50 transition-colors group-hover:border-primary group-hover:bg-primary">
          <ArrowUpRight className="size-5" />
        </span>
      </div>
    </a>
  );
}

export default function Services() {
  const [restorative, braces, cosmetic, faq] = services;
  return (
    <section id="services" className="bg-surface py-20 md:py-28">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <div>
            <Heading data-reveal>
              One office.
              <br className="hidden md:block" /> Every stage of your smile.
            </Heading>
            <p data-reveal className="mt-5 max-w-[52ch] text-[15px] leading-relaxed text-muted">
              {about.underOneRoof}
            </p>
          </div>
          <div data-reveal className="md:mb-2">
            <ArrowPill solid href="#contact">
              Request an Appointment
            </ArrowPill>
          </div>
        </div>

        {/* Uneven masonry, two rows with the wide card alternating sides (StayGo ratio 797 : 427). */}
        <div className="mt-12 grid gap-5 md:mt-14">
          <div className="grid gap-5 md:h-[clamp(420px,38vw,600px)] md:grid-cols-[1.866fr_1fr]">
            <ServiceCard s={restorative} large />
            <ServiceCard s={braces} />
          </div>
          <div className="grid gap-5 md:h-[clamp(420px,38vw,600px)] md:grid-cols-[1fr_1.866fr]">
            <ServiceCard s={cosmetic} />
            <ServiceCard s={faq} large />
          </div>
        </div>
      </div>
    </section>
  );
}
