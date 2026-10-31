import Image from "next/image";
import Link from "next/link";
import { about, services, type ServiceCategory } from "@/lib/content";
import { ArrowPill, Heading } from "../ui";
import { ArrowUpRight } from "../icons";

/**
 * Service cards. Four photo tiles: on phones a two-by-two grid of equal tiles, from md the
 * uneven masonry of the design. The copy sits over a dark gradient at the foot of each tile.
 */

/** The question card: on phones a night tile like the others, from md ink on paper with the artwork in its own column. */
function QuestionCard({ s, className = "" }: { s: ServiceCategory; className?: string }) {
  return (
    <Link
      href={s.cta.href}
      aria-label={`${s.label}: ${s.cta.label.toLowerCase()}`}
      data-reveal
      data-zoom-card
      className={`group relative block aspect-[4/5] overflow-hidden rounded-card bg-linear-to-b from-brand/55 via-primary/70 via-45% to-night text-white md:flex md:aspect-auto md:flex-row-reverse md:items-center md:bg-white md:bg-none md:text-ink md:ring-1 md:ring-line ${className}`}
    >
      <div className="absolute left-1/2 top-[3%] w-[54%] -translate-x-1/2 drop-shadow-[0_18px_24px_rgba(0,30,45,0.35)] md:static md:flex md:w-[42%] md:shrink-0 md:translate-x-0 md:items-center md:justify-center md:px-8 md:drop-shadow-none">
        <Image
          data-zoom-img
          src={s.image}
          alt={s.alt}
          width={468}
          height={476}
          sizes="(min-width: 768px) 28vw, 40vw"
          className="h-auto w-full object-contain will-change-transform md:max-w-[260px]"
        />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-3 md:static md:flex-1 md:p-7">
        <div className="max-w-[40ch]">
          <h3 className="font-display text-[17px] font-semibold tracking-[-0.02em] md:text-[clamp(22px,2.4vw,38px)] md:tracking-[-0.03em]">
            {s.label}
          </h3>
          <p className="mt-1 line-clamp-2 text-[12px] leading-snug text-white/80 md:mt-2 md:line-clamp-none md:text-[14px] md:leading-relaxed md:text-muted">
            {s.description}
          </p>
          <p className="mt-2 text-[12px] font-medium text-white md:mt-4 md:text-[14px] md:text-accent">
            {s.cta.label} <span aria-hidden>→</span>
          </p>
        </div>
      </div>
      <span className="absolute bottom-7 right-7 hidden size-11 shrink-0 place-items-center rounded-full border border-ink/25 text-ink transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white md:grid">
        <ArrowUpRight className="size-5" />
      </span>
    </Link>
  );
}

function ServiceCard({ s, large, className = "" }: { s: ServiceCategory; large?: boolean; className?: string }) {
  if (s.cutout) return <QuestionCard s={s} className={className} />;
  return (
    <Link
      href={s.cta.href}
      aria-label={`${s.label}: ${s.cta.label.toLowerCase()}`}
      data-reveal
      data-zoom-card
      className={`group relative block aspect-[4/5] overflow-hidden rounded-card bg-night text-white md:aspect-auto ${className}`}
    >
      <Image
        data-zoom-img
        src={s.image}
        alt={s.alt}
        fill
        sizes={large ? "(min-width: 768px) 62vw, 50vw" : "(min-width: 768px) 34vw, 50vw"}
        className="object-cover will-change-transform"
      />
      <div className="absolute inset-0 bg-linear-to-t from-black/85 via-black/35 to-black/5" />
      <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-3 md:p-7">
        <div className="max-w-[46ch]">
          <h3
            className={`font-display text-[17px] font-semibold tracking-[-0.02em] md:tracking-[-0.03em] ${
              large ? "md:text-[clamp(26px,2.7vw,42px)]" : "md:text-[clamp(22px,1.9vw,30px)]"
            }`}
          >
            {s.label}
          </h3>
          <p className={`mt-1 line-clamp-2 text-[12px] leading-snug text-white/80 md:mt-2 md:text-[14px] md:leading-relaxed ${large ? "md:line-clamp-3" : "md:line-clamp-2"}`}>
            {s.description}
          </p>
          <p className="mt-2 text-[12px] font-medium text-white md:mt-4 md:text-[14px]">
            {s.cta.label} <span aria-hidden>→</span>
          </p>
        </div>
        <span className="hidden size-11 shrink-0 place-items-center rounded-full border border-white/50 transition-colors group-hover:border-primary group-hover:bg-primary md:grid">
          <ArrowUpRight className="size-5" />
        </span>
      </div>
    </Link>
  );
}

export default function Services() {
  const [restorative, braces, cosmetic, faq] = services;
  return (
    <section id="services" className="bg-surface py-12 md:py-20">
      <div className="container-x">
        <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between md:gap-6">
          <div>
            <Heading data-reveal className="text-[clamp(28px,3.9vw,60px)]">
              One office.
              <br className="hidden md:block" /> Every stage of your smile.
            </Heading>
            <p data-reveal className="mt-3 max-w-[52ch] text-[14px] leading-relaxed text-muted md:mt-5 md:text-[15px]">
              {about.underOneRoof}
            </p>
          </div>
          <div data-reveal className="hidden md:mb-2 md:block">
            <ArrowPill solid href="#contact">
              Request an Appointment
            </ArrowPill>
          </div>
        </div>

        {/* Phones: two by two. Desktop: uneven masonry, two rows with the wide card alternating sides. */}
        <div className="mt-6 grid gap-3 md:mt-12 md:gap-5">
          <div className="grid grid-cols-2 gap-3 md:h-[clamp(340px,30vw,460px)] md:grid-cols-[1.866fr_1fr] md:gap-5">
            <ServiceCard s={restorative} large />
            <ServiceCard s={braces} />
          </div>
          <div className="grid grid-cols-2 gap-3 md:h-[clamp(340px,30vw,460px)] md:grid-cols-[1fr_1.866fr] md:gap-5">
            <ServiceCard s={cosmetic} />
            <ServiceCard s={faq} large />
          </div>
        </div>
      </div>
    </section>
  );
}
