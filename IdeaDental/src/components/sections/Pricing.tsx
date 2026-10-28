import { insurance, pricing, pricingDisclaimer, pricingNotes } from "@/lib/content";
import { ArrowPill, Eyebrow, Heading } from "../ui";

/** Insurance + the practice's current price list, set as a quiet editorial table. */
export default function Pricing() {
  return (
    <section id="pricing" className="bg-paper pb-14 md:pb-20">
      <div className="container-x grid gap-6 md:grid-cols-[0.37fr_0.63fr] md:gap-8">
        <div data-reveal>
          <Eyebrow>Insurance &amp; Pricing</Eyebrow>
          <Heading className="mt-3 text-[clamp(28px,3.9vw,60px)] md:mt-5">Our Prices</Heading>
          <p className="mt-3 text-[14px] leading-relaxed text-muted md:mt-6 md:max-w-[40ch] md:text-[15px]">{insurance}</p>
          <dl className="mt-8 hidden gap-6 sm:grid sm:grid-cols-2 md:grid-cols-1 md:gap-5">
            {pricingNotes.map((n) => (
              <div key={n.title} className="border-t border-line pt-4">
                <dt className="font-display text-[16px] font-semibold tracking-[-0.01em]">{n.title}</dt>
                <dd className="mt-1 text-[14px] leading-relaxed text-muted">{n.body}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-6 hidden md:mt-10 md:block">
            <ArrowPill href="#contact">Text to Book</ArrowPill>
          </div>
        </div>

        <table data-reveal className="w-full border-collapse text-left">
          <caption className="sr-only">Treatments we quote</caption>
          <thead>
            <tr className="border-b border-ink/80 text-[13px] uppercase tracking-[0.08em] text-muted">
              <th scope="col" className="py-2 pr-4 font-medium md:py-4">
                Treatment
              </th>
              <th scope="col" className="py-2 text-right font-medium md:py-4">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {pricing.map((p) => (
              <tr key={p.item} className="border-b border-line">
                <th scope="row" className="py-2 pr-4 font-display text-[clamp(14px,1.3vw,19px)] font-medium tracking-[-0.01em] md:py-3">
                  {p.item}
                  {p.note && <span className="mt-1 block font-sans text-[13px] font-normal text-muted">{p.note}</span>}
                </th>
                <td className="whitespace-nowrap py-2 text-right font-display text-[clamp(14px,1.3vw,19px)] font-semibold text-ink md:py-3">
                  {p.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p data-reveal className="text-[12px] leading-relaxed text-muted md:col-start-2 md:text-[13px]">
          {pricingDisclaimer}
        </p>
      </div>
    </section>
  );
}
