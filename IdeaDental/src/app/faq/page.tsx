import type { Metadata } from "next";
import MotionProvider from "@/components/MotionProvider";
import Header from "@/components/sections/Header";
import Faq from "@/components/sections/Faq";
import Footer from "@/components/sections/Footer";
import { faqs } from "@/lib/content";

export const metadata: Metadata = {
  title: "Patient FAQs | Idea Dental, Houston TX",
  description:
    "Answers to common questions about Idea Dental's hours, prices, insurance, payment plans, braces, implants, veneers and your first visit.",
};

/** Every question, on its own page, so the homepage only carries the handful most people ask. */
export default function FaqPage() {
  return (
    <MotionProvider>
      <main>
        <div className="bg-night text-white">
          <Header />
          <div className="container-x pb-12 pt-10 md:pb-16 md:pt-14">
            <p className="text-[15px] text-white/70">FAQs · {faqs.length} questions</p>
            <h1 className="mt-4 max-w-[16ch] font-display text-[clamp(34px,4.6vw,68px)] font-semibold leading-[1.06] tracking-[-0.035em]">
              Got Questions? We’re Here to Help.
            </h1>
            <p className="mt-5 max-w-[56ch] text-[15px] leading-relaxed text-white/75">
              Hours, prices, insurance, payment and what to expect at your first visit. Can’t find it here?
              Text or call (832) 664-8640.
            </p>
          </div>
        </div>
        <Faq />
      </main>
      <Footer />
    </MotionProvider>
  );
}
