import { insurance, pricing, pricingDisclaimer, pricingNotes } from "@/lib/content";
import { ArrowPill, Eyebrow, Heading } from "../ui";

/** Insurance + the practice's current price list, set as a quiet editorial table. */
export default function Pricing() {
  return (
    <section id="pricing" className="bg-paper pb-20 md:pb-28">
      <div className="container-x grid gap-12 md:grid-cols-[0.37fr_0.63fr] md:gap-8">
        <div data-reveal>
          <Eyebrow>Insurance &amp; Pricing</Eyebrow>
          <Heading className="mt-5">Our Prices</Heading>
          <p className="mt-6 max-w-[40ch] text-[15px] leading-relaxed text-muted">{insurance}</p>
          <dl className="mt-8 grid gap-6 sm:grid-cols-2 md:grid-cols-1 md:gap-5">
            {pricingNotes.map((n) => (
              <div key={n.title} className="border-t border-line pt-4">
                <dt className="font-display text-[16px] font-semibold tracking-[-0.01em]">{n.title}</dt>
                <dd className="mt-1 text-[14px] leading-relaxed text-muted">{n.body}</dd>
              </div>
            ))}
          </dl>
          <div className="mt-10">
            <ArrowPill href="#contact">Text to Book</ArrowPill>
          </div>
        </div>

        <table data-reveal className="w-full border-collapse text-left">
          <caption className="sr-only">Treatments we quote</caption>
          <thead>
            <tr className="border-b border-ink/80 text-[13px] uppercase tracking-[0.08em] text-muted">
              <th scope="col" className="py-4 pr-4 font-medium">
                Treatment
              </th>
              <th scope="col" className="py-4 text-right font-medium">
                Price
              </th>
            </tr>
          </thead>
          <tbody>
            {pricing.map((p) => (
              <tr key={p.item} className="border-b border-line">
                <th scope="row" className="py-4 pr-4 font-display text-[clamp(16px,1.3vw,19px)] font-medium tracking-[-0.01em]">
                  {p.item}
                </th>
                <td className="whitespace-nowrap py-4 text-right font-display text-[clamp(16px,1.3vw,19px)] font-semibold text-ink">
                  {p.price}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <p data-reveal className="text-[13px] leading-relaxed text-muted md:col-start-2">
          {pricingDisclaimer}
        </p>
      </div>
    </section>
  );
}
