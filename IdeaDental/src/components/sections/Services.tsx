import Image from "next/image";
import Link from "next/link";
import { about, services, type ServiceCategory } from "@/lib/content";
import { ArrowPill, Heading } from "../ui";
import { ArrowUpRight } from "../icons";

/**
 * Service cards. From md up they are the photo tiles of the design: the image fills the card
 * and the copy sits over a dark gradient. On phones the same four become compact rows, a small
 * square picture beside the title and one line, so the whole set fits in one screen.
 */

/** The question card is a signpost, not a photo tile: ink on paper, the artwork in its own column. */
function QuestionCard({ s, className = "" }: { s: ServiceCategory; className?: string }) {
  return (
    <Link
      href={s.cta.href}
      aria-label={`${s.label}: ${s.cta.label.toLowerCase()}`}
      data-reveal
      data-zoom-card
      className={`group relative flex items-center overflow-hidden rounded-card bg-white ring-1 ring-line md:flex-row-reverse ${className}`}
    >
      <div className="flex w-24 shrink-0 items-center justify-center p-3 md:w-[42%] md:px-8 md:py-0">
        <Image
          data-zoom-img
          src={s.image}
          alt={s.alt}
          width={468}
          height={476}
          sizes="(min-width: 768px) 28vw, 96px"
          className="h-auto w-full object-contain will-change-transform md:max-w-[260px]"
        />
      </div>
      <div className="flex-1 py-3 pr-12 md:p-7 md:pr-20">
        <div className="max-w-[40ch]">
          <h3 className="font-display text-[17px] font-semibold tracking-[-0.02em] text-ink md:text-[clamp(22px,2.4vw,38px)] md:tracking-[-0.03em]">
            {s.label}
          </h3>
          <p className="mt-1 text-[13px] leading-snug text-muted md:mt-2 md:text-[14px] md:leading-relaxed">{s.description}</p>
          <p className="mt-2 text-[13px] font-medium text-primary md:mt-4 md:text-[14px]">
            {s.cta.label} <span aria-hidden>→</span>
          </p>
        </div>
      </div>
      <span className="absolute right-3 top-1/2 grid size-9 -translate-y-1/2 place-items-center rounded-full border border-ink/25 text-ink transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white md:bottom-7 md:right-7 md:top-auto md:size-11 md:translate-y-0">
        <ArrowUpRight className="size-4 md:size-5" />
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
      className={`group relative flex items-center overflow-hidden rounded-card bg-white ring-1 ring-line md:block md:bg-night md:text-white md:ring-0 ${className}`}
    >
      {/* Phone: a square picture at the left. Desktop: the picture fills the card. */}
      <div className="relative m-3 size-24 shrink-0 overflow-hidden rounded-[14px] md:absolute md:inset-0 md:m-0 md:size-auto md:rounded-none">
        <Image
          data-zoom-img
          src={s.image}
          alt={s.alt}
          fill
          sizes={large ? "(min-width: 768px) 62vw, 96px" : "(min-width: 768px) 34vw, 96px"}
          className="object-cover will-change-transform"
        />
      </div>
      <div className="absolute inset-0 hidden bg-linear-to-t from-black/85 via-black/35 to-black/5 md:block" />
      <div className="relative flex flex-1 items-center justify-between gap-3 py-3 pr-3 md:absolute md:inset-x-0 md:bottom-0 md:items-end md:p-7">
        <div className="max-w-[46ch]">
          <h3
            className={`font-display text-[17px] font-semibold tracking-[-0.02em] text-ink md:text-white md:tracking-[-0.03em] ${
              large ? "md:text-[clamp(26px,2.7vw,42px)]" : "md:text-[clamp(22px,1.9vw,30px)]"
            }`}
          >
            {s.label}
          </h3>
          <p className={`mt-1 text-[13px] leading-snug text-muted md:mt-2 md:text-[14px] md:leading-relaxed md:text-white/80 ${large ? "md:line-clamp-3" : "md:line-clamp-2"}`}>
            {s.description}
          </p>
          <p className="mt-2 text-[13px] font-medium text-primary md:mt-4 md:text-[14px] md:text-white">
            {s.cta.label} <span aria-hidden>→</span>
          </p>
        </div>
        <span className="grid size-9 shrink-0 place-items-center rounded-full border border-ink/25 text-ink transition-colors group-hover:border-primary group-hover:bg-primary group-hover:text-white md:size-11 md:border-white/50 md:text-white">
          <ArrowUpRight className="size-4 md:size-5" />
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

        {/* Phones: four rows. Desktop: uneven masonry, two rows with the wide card alternating sides. */}
        <div className="mt-6 grid gap-3 md:mt-12 md:gap-5">
          <div className="grid gap-3 md:h-[clamp(340px,30vw,460px)] md:grid-cols-[1.866fr_1fr] md:gap-5">
            <ServiceCard s={restorative} large />
            <ServiceCard s={braces} />
          </div>
          <div className="grid gap-3 md:h-[clamp(340px,30vw,460px)] md:grid-cols-[1fr_1.866fr] md:gap-5">
            <ServiceCard s={cosmetic} />
            <ServiceCard s={faq} large />
          </div>
        </div>
      </div>
    </section>
  );
}
