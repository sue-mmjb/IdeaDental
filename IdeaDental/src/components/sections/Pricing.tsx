import { insurance, pricing } from "@/lib/content";
import { ArrowPill, Eyebrow, Heading } from "../ui";

/** Insurance + the practice's current price list, set as a quiet editorial table. */
export default function Pricing() {
  return (
    <section id="pricing" className="bg-white pb-20 md:pb-28">
      <div className="container-x grid gap-12 md:grid-cols-[0.37fr_0.63fr] md:gap-8">
        <div data-reveal>
          <Eyebrow>Insurance &amp; Pricing</Eyebrow>
          <Heading className="mt-5">Our Prices</Heading>
          <p className="mt-6 max-w-[40ch] text-[15px] leading-relaxed text-muted">{insurance}</p>
          <div className="mt-10">
            <ArrowPill href="#contact">Text to Book</ArrowPill>
          </div>
        </div>

        <table data-reveal className="w-full border-collapse text-left">
          <caption className="sr-only">Idea Dental treatment prices</caption>
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
      </div>
    </section>
  );
}
