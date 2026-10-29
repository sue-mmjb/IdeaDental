import Image from "next/image";
import Link from "next/link";
import { business, hours, nav } from "@/lib/content";

/**
 * The closing of every page, in two parts, after the Diamond Smiles pattern Sue pointed to:
 *
 * 1. Contact (#contact): the approved closing line and both CTAs, then ONE key/value card with
 *    the practice details. Label left, value right, one row per fact, so it reads the same on a
 *    phone as on a desktop with nothing floating.
 * 2. Footer: brand, Visit, Explore and Services columns on the night background, then a single
 *    line of small print.
 */

const serviceList = [
  "Dental implants",
  "Metal braces",
  "Veneers",
  "Cleanings",
  "Deep cleanings",
  "Perio maintenance",
  "Fillings & crowns",
  "Root canals",
  "Extractions & bone grafts",
  "Dentures & partials",
];

function Row({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    // Phones: label above the value, full width, so nothing wraps into a stray word. From sm: label left, value right.
    <div className="grid gap-2 border-b border-line py-4 last:border-0 sm:grid-cols-[140px_1fr] sm:gap-4">
      <dt className="text-[12px] uppercase tracking-[0.12em] text-muted sm:pt-0.5">{label}</dt>
      <dd className="text-[15px] leading-relaxed text-ink sm:text-right">{children}</dd>
    </div>
  );
}

export default function Footer() {
  return (
    <>
      {/* Contact */}
      <section id="contact" className="bg-surface py-14 md:py-20">
        <div className="container-x">
          <div className="text-center">
            <p data-reveal className="text-[13px] uppercase tracking-[0.14em] text-muted">
              {business.name} · Houston, TX
            </p>
            <h2
              data-reveal
              className="mx-auto mt-4 max-w-[18ch] font-display text-[clamp(32px,4vw,56px)] font-semibold leading-[1.05] tracking-[-0.04em]"
            >
              Your smile starts here.
            </h2>
            <p data-reveal className="mx-auto mt-4 max-w-[60ch] text-[16px] leading-relaxed text-muted">
              Request an appointment, or call and speak to our bilingual team.
            </p>
            <div data-reveal className="mt-7 flex flex-wrap justify-center gap-3">
              <a
                href={business.smsHref}
                data-hover-scale
                className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
              >
                Request an appointment
              </a>
            </div>
          </div>

          <dl data-reveal className="mx-auto mt-10 max-w-[760px] rounded-card bg-white px-5 py-2 ring-1 ring-line sm:px-8 md:mt-12">
            <Row label="Address">
              {business.address.line1}
              <br />
              {business.address.line2}
              <span className="text-muted"> · </span>
              <a href={business.mapsUrl} target="_blank" rel="noreferrer" className="whitespace-nowrap text-primary underline-offset-4 hover:underline">
                Get directions
              </a>
            </Row>
            <Row label="Phone">
              <a href={business.phoneHref} className="font-display text-[18px] font-semibold tracking-[-0.01em] hover:text-primary">
                {business.phone}
              </a>
            </Row>
            {/* Office hours: one row per day, time and note on the right, after the schedule table Sue approved. */}
            <div className="border-b border-line py-4">
              <dt className="text-[12px] uppercase tracking-[0.12em] text-muted">Hours</dt>
              <dd className="mt-2">
                <ul className="divide-y divide-line/70">
                  {hours.map((h) => (
                    <li key={h.day} className="flex items-baseline justify-between gap-3 py-1.5 text-[14px] leading-relaxed">
                      <span className="shrink-0 text-muted">{h.day}</span>
                      <span className="text-right">
                        <span className="block whitespace-nowrap font-medium tabular-nums text-ink">{h.time}</span>
                        {h.note && <span className="block text-[12px] text-muted">{h.note}</span>}
                      </span>
                    </li>
                  ))}
                </ul>
              </dd>
            </div>
            <Row label="Fax">{business.fax}</Row>
            <Row label="Languages">{business.languages} (se habla español)</Row>
            <Row label="Dentist">Dr. Stephanie Vu, DDS</Row>
            <Row label="Follow">
              {business.social.map((s, i) => (
                <span key={s.label}>
                  {i > 0 && <span className="text-muted"> · </span>}
                  <a href={s.href} target="_blank" rel="noreferrer" className="hover:text-primary">
                    {s.label}
                  </a>
                </span>
              ))}
            </Row>
          </dl>
        </div>
      </section>

      {/* Footer: on phones a tight two-column grid (brand, Visit | Explore, Services, small print) that fits
          one screen; from md the four columns of the design. */}
      <footer className="bg-night text-white">
        <div className="container-x pt-8 md:pt-16">
          <div className="grid grid-cols-2 gap-x-6 gap-y-6 md:grid-cols-[1.3fr_1fr_1fr_1.4fr] md:gap-8">
            <div className="col-span-2 md:col-span-1">
              <Image src="/images/logo-wordmark-white.png" alt={business.name} width={1428} height={528} sizes="160px" className="h-auto w-[128px] md:w-[160px]" />
              <p className="mt-3 text-[13px] leading-relaxed text-white/70 md:mt-4 md:max-w-[30ch] md:text-[14px]">
                Family and cosmetic dentistry in north Houston, in English and Spanish. Care provided by Dr. Stephanie Vu, DDS.
              </p>
            </div>

            <div>
              <h3 className="text-[11px] uppercase tracking-[0.14em] text-white/60 md:text-[12px]">Visit</h3>
              <address className="mt-2 text-[13px] not-italic leading-relaxed text-white/85 md:mt-3 md:text-[14px]">
                {business.name}
                <br />
                {business.address.line1}
                <br />
                {business.address.line2}
              </address>
            </div>

            <div>
              <h3 className="text-[11px] uppercase tracking-[0.14em] text-white/60 md:text-[12px]">Explore</h3>
              <ul className="mt-2 space-y-1 text-[13px] text-white/85 md:mt-3 md:space-y-2 md:text-[14px]">
                {nav.map((item) => (
                  <li key={item.href}>
                    <Link href={item.href} className="transition-colors hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="col-span-2 md:col-span-1">
              <h3 className="text-[11px] uppercase tracking-[0.14em] text-white/60 md:text-[12px]">Services</h3>
              <ul className="mt-2 grid grid-cols-2 gap-x-6 gap-y-1 text-[13px] text-white/85 md:mt-3 md:grid-cols-1 md:gap-y-2 md:text-[14px]">
                {serviceList.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-6 flex items-center justify-between gap-4 border-t border-white/10 py-4 pb-24 text-[12px] text-white/55 md:mt-12 md:py-6 md:text-[13px] lg:pb-6">
            <p>© {business.name} · Houston, Texas</p>
            <p>Hablamos Español</p>
          </div>
        </div>
      </footer>
    </>
  );
}
