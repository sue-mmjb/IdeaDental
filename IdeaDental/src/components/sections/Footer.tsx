import Image from "next/image";
import { business, hours } from "@/lib/content";
import { Clock, Phone, Pin } from "../icons";

/**
 * Closing CTA and contact details. One even three-column grid under the CTA: the logo and
 * address, the phone, and the hours as single lines, so no column towers over the others and
 * nothing sits alone in a field of space.
 */
export default function Footer() {
  return (
    <footer id="contact" className="relative isolate overflow-hidden bg-night text-white">
      <Image src="/images/about-office.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-[0.14]" />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-night/85 via-night/70 to-night" />

      {/* Final CTA */}
      <div className="container-x pt-14 text-center md:pt-20">
        <p data-reveal className="text-[13px] uppercase tracking-[0.14em] text-white/50">
          {business.name} · Houston, TX
        </p>
        <h2
          data-reveal
          className="mx-auto mt-4 max-w-[18ch] font-display text-[clamp(34px,4.4vw,64px)] font-semibold leading-[1.05] tracking-[-0.04em]"
        >
          Your smile starts here.
        </h2>
        <p data-reveal className="mx-auto mt-4 max-w-[60ch] text-[15px] leading-relaxed text-white/70">
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
      <div className="container-x mt-12 md:mt-16">
        <div className="grid gap-10 border-t border-white/10 pt-10 md:grid-cols-3 md:gap-8 lg:grid-cols-[1.1fr_0.9fr_1.2fr] lg:gap-12">
          <div data-reveal>
            <Image
              src="/images/logo-wordmark-white.png"
              alt={business.name}
              width={1428}
              height={528}
              sizes="200px"
              className="h-auto w-[180px]"
            />
            <p className="mt-6 flex items-center gap-2 text-[13px] uppercase tracking-[0.08em] text-white/50">
              <Pin className="size-4" /> Visit
            </p>
            <address className="mt-2 text-[15px] not-italic leading-relaxed text-white/90">
              {business.address.line1}
              <br />
              {business.address.line2}
            </address>
            <p className="mt-1 max-w-[32ch] text-[14px] leading-relaxed text-white/60">{business.locationNote}</p>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-2 inline-block text-[14px] text-white/80 underline underline-offset-4 hover:text-white"
            >
              Get directions
            </a>
          </div>

          <div data-reveal className="md:pt-1">
            <p className="flex items-center gap-2 text-[13px] uppercase tracking-[0.08em] text-white/50">
              <Phone className="size-4" /> Call or text
            </p>
            <a href={business.phoneHref} className="mt-2 block font-display text-[24px] font-semibold tracking-[-0.02em] hover:text-white/80">
              {business.phone}
            </a>
            <p className="mt-1 text-[14px] text-white/70">Hablamos Español · {business.languages}</p>
            <p className="mt-5 text-[13px] uppercase tracking-[0.08em] text-white/50">Follow</p>
            <ul className="mt-2 flex gap-5 text-[15px] text-white/90">
              {business.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal className="md:pt-1">
            <p className="flex items-center gap-2 text-[13px] uppercase tracking-[0.08em] text-white/50">
              <Clock className="size-4" /> Office hours
            </p>
            <dl className="mt-2 text-[14px]">
              {hours.map((h) => (
                <div key={h.day} className="flex items-baseline justify-between gap-4 border-b border-white/10 py-1.5 last:border-0">
                  <dt className="text-white/60">{h.day}</dt>
                  <dd className="text-right text-white/90">
                    {h.time}
                    {h.note && <span className="ml-2 text-[12px] text-white/50">{h.note}</span>}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-2 border-t border-white/10 py-6 pb-24 text-[13px] text-white/60 md:flex-row md:items-center md:justify-between lg:pb-6">
          <p>© {business.name}. All Rights Reserved</p>
          <p>
            {business.address.line1}, {business.address.line2}
          </p>
        </div>
      </div>
    </footer>
  );
}
