import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import MotionProvider from "@/components/MotionProvider";
import Header from "@/components/sections/Header";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import { PrimaryButton } from "@/components/ui";
import { Phone } from "@/components/icons";
import { business, results, reviewSummary } from "@/lib/content";
import { costLine, faqsFor, pricesFor, servicePages, serviceSlugs } from "@/lib/services";

export const dynamicParams = false;

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

type Props = { params: Promise<{ slug: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages[slug];
  return page ? { title: page.metaTitle, description: page.metaDescription } : {};
}

/** One treatment, on its own page: Sue's service copy in the order her briefs set. */
export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const page = servicePages[slug];
  if (!page) notFound();

  const prices = pricesFor(page.cost.items);
  const cases = page.gallery.map((k) => results.find((r) => r.key === k)).filter((r) => r !== undefined);

  return (
    <MotionProvider>
      <main>
        {/* Hero: dark band with the page header, the promise and both CTAs */}
        <section className="relative isolate overflow-hidden bg-night text-white">
          <Image src={page.image} alt="" fill sizes="100vw" className="-z-20 object-cover opacity-30" />
          <div className="absolute inset-0 -z-10 bg-linear-to-r from-night via-night/85 to-night/40" />
          <Header />
          <div className="container-x pb-14 pt-10 md:pb-20 md:pt-14">
            <p className="text-[15px] text-white/70">Idea Dental · Houston, TX · Se habla español</p>
            <h1 className="mt-4 max-w-[18ch] font-display text-[clamp(34px,4.6vw,68px)] font-semibold leading-[1.06] tracking-[-0.035em]">
              {page.h1}
            </h1>
            <p className="mt-5 max-w-[56ch] text-[16px] leading-relaxed text-white/80">{page.lead}</p>
            <div className="mt-8 flex flex-wrap gap-3">
              <PrimaryButton href="/#contact" className="px-7 py-3.5">
                Request an Appointment
              </PrimaryButton>
              <a
                href={business.phoneHref}
                className="inline-flex items-center gap-2 rounded-full border border-white/40 px-7 py-3.5 text-[15px] font-medium text-white transition-colors hover:border-white"
              >
                <Phone className="size-4" /> Call {business.phone}
              </a>
            </div>
            <p className="mt-6 flex items-center gap-2 text-[14px] text-white/80">
              <span aria-hidden className="tracking-[0.1em] text-brand">★★★★★</span>
              <span>
                <strong className="font-semibold text-white">{reviewSummary.rating}</strong> · {reviewSummary.count}
              </span>
            </p>
          </div>
        </section>

        {/* Body */}
        <section className="bg-paper py-14 md:py-20">
          <div className="container-x grid gap-12 md:grid-cols-[minmax(0,1fr)_320px] md:gap-16">
            <div className="max-w-[66ch]">
              {page.sections.map((s) => (
                <div key={s.heading} data-reveal className="mb-10 md:mb-12">
                  <h2 className="font-display text-[clamp(24px,2.4vw,34px)] font-semibold leading-[1.15] tracking-[-0.025em]">
                    {s.heading}
                  </h2>
                  {s.paragraphs?.map((p) => (
                    <p key={p.slice(0, 32)} className="mt-4 text-[16px] leading-[1.7] text-muted">
                      {p}
                    </p>
                  ))}
                  {s.bullets && (
                    <ul className="mt-4 list-disc space-y-2 pl-5 text-[16px] leading-[1.7] text-muted marker:text-primary">
                      {s.bullets.map((b) => (
                        <li key={b}>{b}</li>
                      ))}
                    </ul>
                  )}
                  {s.steps && (
                    <ol className="mt-5 space-y-4">
                      {s.steps.map((step, i) => {
                        const [title, ...rest] = step.split(". ");
                        return (
                          <li key={step} className="flex gap-4">
                            <span className="grid size-8 shrink-0 place-items-center rounded-full bg-primary text-[14px] font-semibold text-white">
                              {i + 1}
                            </span>
                            <p className="text-[16px] leading-[1.7] text-muted">
                              <strong className="font-semibold text-ink">{title}.</strong> {rest.join(". ")}
                            </p>
                          </li>
                        );
                      })}
                    </ol>
                  )}
                </div>
              ))}

              <div data-reveal>
                <h2 className="font-display text-[clamp(24px,2.4vw,34px)] font-semibold leading-[1.15] tracking-[-0.025em]">
                  Cost &amp; payment
                </h2>
                <p className="mt-4 text-[16px] leading-[1.7] text-muted">{page.cost.intro}</p>
                {prices.length > 0 && (
                  <table className="mt-5 w-full border-collapse text-left">
                    <caption className="sr-only">Prices</caption>
                    <tbody>
                      {prices.map((p) => (
                        <tr key={p.item} className="border-b border-line">
                          <th scope="row" className="py-3 pr-4 font-display text-[16px] font-medium">
                            {p.item}
                          </th>
                          <td className="whitespace-nowrap py-3 text-right font-display text-[16px] font-semibold">{p.price}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                )}
                <p className="mt-4 text-[15px] leading-relaxed text-muted">{costLine}</p>
              </div>
            </div>

            {/* Side rail: real cases and the care line */}
            <aside className="md:pt-2">
              {cases.length > 0 && (
                <div data-reveal>
                  <p className="text-[13px] uppercase tracking-[0.12em] text-muted">Real patient results</p>
                  <div className="mt-4 grid grid-cols-2 gap-4 md:grid-cols-1">
                    {cases.map((r) => (
                      <figure key={r.key}>
                        <div className="relative aspect-[2/3] overflow-hidden rounded-card bg-surface">
                          <Image
                            src={`/images/results/${r.key}.jpg`}
                            alt={`${r.treatment} before and after${r.timing ? `, ${r.timing}` : ""}`}
                            fill
                            sizes="(min-width: 768px) 320px, 45vw"
                            className="object-cover"
                          />
                        </div>
                        <figcaption className="mt-2 text-[14px]">
                          <span className="font-medium">{r.treatment}</span>
                          {r.timing && <span className="text-muted"> · {r.timing}</span>}
                        </figcaption>
                      </figure>
                    ))}
                  </div>
                  <Link href="/#before-after" className="mt-4 inline-block text-[14px] font-medium text-primary hover:underline">
                    See the full gallery →
                  </Link>
                </div>
              )}
              <div data-reveal className="mt-10 rounded-card bg-surface p-6 text-[15px] leading-relaxed text-muted">
                Care provided by <span className="font-medium text-ink">Dr. Stephanie Vu, DDS</span>. Bilingual team,
                English and Spanish. {business.address.line1}, {business.address.line2}.
              </div>
            </aside>
          </div>
        </section>

        <Faq items={faqsFor(page.faqs)} title={`Common questions about ${page.name.toLowerCase()}`} />

        {/* Related */}
        <section className="bg-surface py-10">
          <div className="container-x flex flex-wrap items-center gap-x-6 gap-y-3 text-[15px]">
            <span className="text-muted">Related:</span>
            {page.related.map((r) => (
              <Link key={r.href} href={r.href} className="font-medium text-ink underline-offset-4 hover:text-primary hover:underline">
                {r.label}
              </Link>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </MotionProvider>
  );
}
