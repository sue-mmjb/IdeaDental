import Image from "next/image";
import { business, hours } from "@/lib/content";

/**
 * Closing CTA and contact details, kept plain: a solid night background, the logo, and blocks
 * that each start with a bold uppercase heading followed by simple stacked lines. Days with the
 * same hours share one line, so the hours read in four lines instead of seven rows of three.
 */

const dayGroups = (() => {
  const groups: { days: string[]; time: string; note: string }[] = [];
  for (const h of hours) {
    const g = groups.find((x) => x.time === h.time && x.note === h.note);
    if (g) g.days.push(h.day);
    else groups.push({ days: [h.day], time: h.time, note: h.note });
  }
  return groups.map((g) => ({ ...g, label: g.days.join(" & ") }));
})();

function BlockHeading({ children }: { children: React.ReactNode }) {
  return <h3 className="font-display text-[15px] font-semibold uppercase tracking-[0.16em] text-white">{children}</h3>;
}

export default function Footer() {
  return (
    <footer id="contact" className="bg-night text-white">
      {/* Final CTA */}
      <div className="container-x pt-14 text-center md:pt-20">
        <p data-reveal className="text-[13px] uppercase tracking-[0.14em] text-white/55">
          {business.name} · Houston, TX
        </p>
        <h2
          data-reveal
          className="mx-auto mt-4 max-w-[18ch] font-display text-[clamp(34px,4.4vw,64px)] font-semibold leading-[1.05] tracking-[-0.04em]"
        >
          Your smile starts here.
        </h2>
        <p data-reveal className="mx-auto mt-4 max-w-[60ch] text-[16px] leading-relaxed text-white/75">
          Request an appointment, or call and speak to our bilingual team.
        </p>
        <div data-reveal className="mt-7 flex flex-wrap justify-center gap-3">
          <a
            href={business.smsHref}
            data-hover-scale
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Request an appointment
          </a>
          <a
            href={business.phoneHref}
            data-hover-scale
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Call {business.phone}
          </a>
        </div>
      </div>

      {/* Contact details */}
      <div className="container-x mt-14 border-t border-white/10 pt-12 md:mt-16">
        <Image
          data-reveal
          src="/images/logo-wordmark-white.png"
          alt={business.name}
          width={1428}
          height={528}
          sizes="200px"
          className="mx-auto h-auto w-[190px] md:mx-0 md:w-[170px]"
        />

        <div className="mt-12 grid gap-12 text-[17px] leading-[1.65] md:mt-10 md:grid-cols-3 md:gap-8 md:text-[16px] lg:grid-cols-[1.1fr_0.9fr_1.2fr] lg:gap-12">
          <div data-reveal>
            <BlockHeading>Visit</BlockHeading>
            <address className="mt-4 not-italic text-white/90">
              {business.address.line1}
              <br />
              {business.address.line2}
            </address>
            <p className="mt-3 max-w-[32ch] text-[15px] leading-relaxed text-white/60">{business.locationNote}</p>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-[15px] font-medium text-white/90 transition-colors hover:text-white"
            >
              Get directions →
            </a>
          </div>

          <div data-reveal>
            <BlockHeading>Call or text</BlockHeading>
            <a href={business.phoneHref} className="mt-4 block font-display text-[26px] font-semibold tracking-[-0.02em] hover:text-white/80">
              {business.phone}
            </a>
            <p className="mt-1 text-white/75">Hablamos Español · {business.languages}</p>

            <div className="mt-10">
              <BlockHeading>Follow</BlockHeading>
              <ul className="mt-4 flex gap-6 text-white/90">
                {business.social.map((s) => (
                  <li key={s.label}>
                    <a href={s.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                      {s.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div data-reveal>
            <BlockHeading>Office hours</BlockHeading>
            <dl className="mt-4 space-y-4">
              {dayGroups.map((g) => (
                <div key={g.label}>
                  <dt className="text-white/90">{g.label}</dt>
                  <dd className="text-white/70">
                    {g.time}
                    {g.note && <span className="text-white/50"> · {g.note}</span>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-1 border-t border-white/10 py-6 pb-24 text-center text-[13px] text-white/55 md:flex-row md:items-center md:justify-between md:text-left lg:pb-6">
          <p>© {business.name}. All Rights Reserved</p>
          <p>
            {business.address.line1}, {business.address.line2}
          </p>
        </div>
      </div>
    </footer>
  );
}
