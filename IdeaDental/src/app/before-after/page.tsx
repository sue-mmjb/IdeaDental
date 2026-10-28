import type { Metadata } from "next";
import Image from "next/image";
import MotionProvider from "@/components/MotionProvider";
import Header from "@/components/sections/Header";
import Footer from "@/components/sections/Footer";
import { intros, results } from "@/lib/content";

export const metadata: Metadata = {
  title: "Before & After Gallery | Idea Dental, Houston TX",
  description:
    "Real patient results from Idea Dental in Houston: braces, implants, veneers, dentures, fillings and cleanings, before and after.",
};

/** Every case on its own page, as a grid; the homepage links here instead of carrying the row. */
export default function BeforeAfterPage() {
  return (
    <MotionProvider>
      <main>
        <div className="bg-night text-white">
          <Header />
          <div className="container-x pb-12 pt-10 md:pb-16 md:pt-14">
            <p className="text-[15px] text-white/70">Patient results · {results.length} cases</p>
            <h1 className="mt-4 max-w-[16ch] font-display text-[clamp(34px,4.6vw,68px)] font-semibold leading-[1.06] tracking-[-0.035em]">
              Before &amp; After Gallery
            </h1>
            <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-white/75">{intros.results}</p>
          </div>
        </div>

        <section className="bg-paper py-12 md:py-16">
          <div className="container-x grid grid-cols-2 gap-5 sm:grid-cols-3 lg:grid-cols-4 lg:gap-6">
            {results.map((r, i) => (
              <figure key={r.key} data-reveal>
                <div className="relative aspect-[2/3] overflow-hidden rounded-card bg-surface">
                  <Image
                    src={`/images/results/${r.key}.jpg`}
                    alt={`${r.treatment} before and after${r.timing ? `, ${r.timing}` : ""}`}
                    fill
                    sizes="(min-width: 1024px) 24vw, (min-width: 640px) 32vw, 48vw"
                    className="object-cover"
                    loading={i < 4 ? "eager" : "lazy"}
                  />
                </div>
                <figcaption className="mt-3 px-1">
                  <p className="font-display text-[16px] font-semibold tracking-[-0.01em]">
                    {r.treatment}
                    {r.timing && <span className="font-normal text-ink/70"> · {r.timing}</span>}
                  </p>
                  <p className="mt-0.5 text-[13px] text-muted">{r.category}</p>
                </figcaption>
              </figure>
            ))}
          </div>
        </section>
      </main>
      <Footer />
    </MotionProvider>
  );
}
