import Image from "next/image";
import { business, hero } from "@/lib/content";
import { PrimaryButton } from "../ui";
import { Phone } from "../icons";
import Header from "./Header";

export default function Hero() {
  return (
    <section id="top" data-hero className="relative isolate h-[100svh] min-h-[660px] overflow-hidden bg-night text-white">
      <div data-hero-bg className="absolute inset-0 -z-20">
        <Image
          src="/images/hero.jpg"
          alt="Smiling patient during a dental checkup at Idea Dental"
          fill
          preload
          sizes="100vw"
          className="object-cover object-[70%_40%]"
        />
      </div>
      {/* Deep left/bottom scrim keeps the headline legible over a bright clinical photo. */}
      <div className="absolute inset-0 -z-10 bg-linear-to-r from-night/85 via-night/45 to-night/10" />
      <div className="absolute inset-0 -z-10 bg-linear-to-b from-night/55 via-transparent to-night/80" />

      {/* Massive watermark — outer div scrubs with scroll, inner div handles the intro. */}
      <div
        data-hero-watermark
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[15%] -z-10 select-none md:top-[13%]"
      >
        <div
          data-hero-watermark-inner
          className="container-x flex justify-end whitespace-nowrap bg-linear-to-b from-white/35 via-white/15 to-white/0 bg-clip-text font-display text-[17vw] font-semibold leading-[0.9] tracking-[-0.05em] text-transparent md:text-[14.5vw] 2xl:text-[232px]"
        >
          Idea Dental
        </div>
      </div>

      <Header />

      <div className="container-x absolute inset-x-0 bottom-0 pb-10 md:pb-14">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <h1 className="font-display text-[clamp(40px,5.4vw,88px)] font-semibold leading-[1.04] tracking-[-0.04em]">
              {hero.headline.map((line) => (
                <span key={line} className="block overflow-hidden pb-[0.06em]">
                  <span data-hero-line className="block">
                    {line}
                  </span>
                </span>
              ))}
            </h1>
            <p data-hero-line className="mt-5 max-w-[46ch] text-[16px] leading-relaxed text-white/80">
              {hero.body}
            </p>
          </div>

          {/* Floating pill — StayGo's search bar, reworked as the appointment entry point. */}
          <div
            data-hero-search
            className="flex w-full items-center gap-2 rounded-full border border-white/30 bg-white/10 p-1 shadow-[0_20px_60px_-20px_rgba(0,0,0,0.6)] backdrop-blur-md lg:mb-2 lg:w-auto"
          >
            <a
              href={business.phoneHref}
              aria-label={`Call or text ${business.phone}`}
              className="inline-flex shrink-0 items-center gap-2 px-4 text-[15px] text-white/90 transition-colors hover:text-white"
            >
              <Phone className="size-4 shrink-0" />
              <span className="hidden sm:inline">Call or text {business.phone}</span>
              <span className="sm:hidden">Call</span>
            </a>
            <PrimaryButton href="#contact" className="flex-1 px-6 py-2.5 lg:flex-none">
              Request an Appointment
            </PrimaryButton>
          </div>
        </div>
      </div>
    </section>
  );
}
