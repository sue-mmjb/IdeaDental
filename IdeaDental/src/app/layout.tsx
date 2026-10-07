import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import { business, faqs, pricing } from "@/lib/content";
import "./globals.css";

const inter = Inter({ variable: "--font-inter", subsets: ["latin"] });
const manrope = Manrope({ variable: "--font-manrope", subsets: ["latin"], weight: ["500", "600", "700"] });

export const metadata: Metadata = {
  title: "Idea Dental — General Dentistry in Houston, TX",
  description:
    "Idea Dental is a bilingual family dentist in Houston, TX: cleanings, fillings, extractions, root canals, crowns, dental implants, veneers and traditional metal braces. Text (832) 664-8640 to book. Hablamos Español.",
};

// LocalBusiness/Dentist structured data built only from verified NAP + hours.
const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Dentist",
  name: business.name,
  telephone: "+1-832-664-8640",
  address: {
    "@type": "PostalAddress",
    streetAddress: business.address.line1,
    addressLocality: "Houston",
    addressRegion: "TX",
    postalCode: "77076",
    addressCountry: "US",
  },
  url: "https://www.ideadentistry.com/",
  sameAs: business.social.map((s) => s.href),
  openingHoursSpecification: [
    // Regular weekly hours only — the 2nd/4th-Saturday schedule can't be expressed here.
    { dayOfWeek: ["Monday", "Thursday"], opens: "08:30", closes: "14:00" },
    { dayOfWeek: ["Tuesday", "Wednesday"], opens: "10:00", closes: "18:00" },
  ].map((h) => ({ "@type": "OpeningHoursSpecification", ...h })),
  knowsLanguage: ["en", "es"],
  priceRange: "$$",
  makesOffer: pricing.map((p) => ({
    "@type": "Offer",
    itemOffered: { "@type": "Service", name: p.item },
    description: p.price,
  })),
};

// FAQPage built from the same FAQ list rendered on the page, so the two never drift.
const faqLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable} antialiased`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqLd) }} />
        {children}
      </body>
    </html>
  );
}
