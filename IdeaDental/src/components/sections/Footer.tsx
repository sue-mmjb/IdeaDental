import Image from "next/image";
import { business, hours } from "@/lib/content";
import { Clock, Phone, Pin } from "../icons";

export default function Footer() {
  return (
    <footer id="contact" className="relative isolate overflow-hidden bg-night text-white">
      <Image src="/images/about-office.jpg" alt="" fill sizes="100vw" className="-z-20 object-cover opacity-[0.14]" />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-night/85 via-night/70 to-night" />

      {/* Final CTA + appointment request */}
      <div className="container-x pt-24 text-center md:pt-32">
        <p data-reveal className="text-[13px] uppercase tracking-[0.14em] text-white/50">
          {business.name} · Houston, TX
        </p>
        <h2
          data-reveal
          className="mx-auto mt-5 max-w-[14ch] font-display text-[clamp(40px,5.6vw,90px)] font-semibold leading-[1.02] tracking-[-0.045em]"
        >
          Your smile starts here.
        </h2>
        <p data-reveal className="mx-auto mt-6 max-w-[60ch] text-[15px] leading-relaxed text-white/70">
          Request an appointment, or call and speak to our bilingual team.
        </p>
        <div data-reveal className="mt-10 flex flex-wrap justify-center gap-3">
          <a
            href={business.smsHref}
            data-hover-scale
            className="inline-flex items-center gap-2 rounded-full bg-primary px-7 py-4 text-[15px] font-medium text-white transition-colors hover:bg-primary-hover focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Request an appointment
          </a>
          <a
            href={business.phoneHref}
            data-hover-scale
            className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-4 text-[15px] font-medium text-white transition-colors hover:border-white focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
          >
            Call {business.phone}
          </a>
        </div>
      </div>

      {/* Contact details */}
      <div className="container-x mt-24 md:mt-32">
        <div className="grid gap-10 border-t border-white/10 pt-12 md:grid-cols-3 md:gap-8">
          <div data-reveal>
            <p className="flex items-center gap-2 text-[13px] uppercase tracking-[0.08em] text-white/50">
              <Pin className="size-4" /> Visit
            </p>
            <address className="mt-4 text-[16px] not-italic leading-relaxed text-white/90">
              {business.address.line1}
              <br />
              {business.address.line2}
            </address>
            <a
              href={business.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="mt-3 inline-block text-[14px] text-white/70 underline-offset-4 hover:text-white hover:underline"
            >
              Get directions
            </a>
            <p className="mt-3 max-w-[32ch] text-[14px] leading-relaxed text-white/60">
              {business.locationNote}
            </p>
          </div>

          <div data-reveal>
            <p className="flex items-center gap-2 text-[13px] uppercase tracking-[0.08em] text-white/50">
              <Phone className="size-4" /> Call or text
            </p>
            <a href={business.phoneHref} className="mt-4 block font-display text-[26px] font-semibold tracking-[-0.02em] hover:text-white/80">
              {business.phone}
            </a>
            <p className="mt-2 text-[14px] text-white/70">Hablamos Español</p>
            <p className="mt-1 text-[14px] text-white/60">Languages: {business.languages}</p>
            <ul className="mt-5 flex gap-6 text-[15px] text-white/90">
              {business.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="transition-colors hover:text-white">
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div data-reveal>
            <p className="flex items-center gap-2 text-[13px] uppercase tracking-[0.08em] text-white/50">
              <Clock className="size-4" /> Office hours
            </p>
            <table className="mt-4 w-full text-[14px]">
              <caption className="sr-only">Office hours</caption>
              <tbody>
                {hours.map((h) => (
                  <tr key={h.day} className="align-top">
                    <th scope="row" className="py-1 pr-4 text-left font-normal text-white/60">
                      {h.day}
                    </th>
                    <td className="py-1 text-white/90">
                      {h.time}
                      {h.note && <span className="block text-[12px] text-white/50">{h.note}</span>}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Footer mark: the logo, capped at the height the lettered wordmark used to fill */}
        <div className="mt-16 flex justify-center">
          <Image
            src="/images/logo-wordmark-white.png"
            alt={business.name}
            width={1428}
            height={528}
            sizes="(min-width: 768px) 720px, 100vw"
            className="h-auto w-full max-w-[720px]"
          />
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-8 text-[14px] text-white/70 md:flex-row md:items-center md:justify-between">
          <p>© {business.name}. All Rights Reserved</p>
          <p>
            {business.address.line1}, {business.address.line2}
          </p>
        </div>
      </div>
    </footer>
  );
}
