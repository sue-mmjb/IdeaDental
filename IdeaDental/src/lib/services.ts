// Service pages. Copy comes from Sue's original service-page builds (idea-dental-implants.html,
// idea-dental-braces.html, idea-dental-veneers.html in the repo's history), brought in line with
// Dr. Vu's later directives: metal braces only (no Invisalign, no clear braces), no teeth
// whitening, no emergency service, no "orthodontist" claims, no free / $0 offers, and the
// approved price list. Same-day treatment is paid in full; multi-visit care can go on a plan.

import { faqs, pricing } from "./content";

export type ServiceSection = {
  heading: string;
  paragraphs?: string[];
  bullets?: string[];
  /** Numbered steps: "Title. Detail." */
  steps?: string[];
};

export type ServicePage = {
  slug: string;
  name: string;
  h1: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  image: string;
  sections: ServiceSection[];
  cost: { intro: string; items: string[] };
  /** Gallery cards to show, by `results` key. */
  gallery: string[];
  /** Questions to embed, matched against the FAQ list by exact text. */
  faqs: string[];
  related: { label: string; href: string }[];
};

const insuranceLine =
  "Idea Dental is known for keeping treatment affordable. Treatment finished in a single visit is paid in full that day; care spread over multiple visits can be arranged on a payment plan, and we verify your insurance benefits before treatment.";

export const servicePages: Record<string, ServicePage> = {
  "dental-implants": {
    slug: "dental-implants",
    name: "Dental Implants",
    h1: "Dental implants in Houston",
    lead:
      "A permanent, natural-looking way to replace missing teeth, and restore how you eat, speak and smile. Bilingual team, payment plans for care spread over multiple visits.",
    metaTitle: "Dental Implants in Houston, TX | Idea Dental",
    metaDescription:
      "Permanent, natural-looking tooth replacement with dental implants at Idea Dental in Houston. Dental implant $3,500. Payment plans for multi-visit care. Call (832) 664-8640.",
    image: "/images/services/dental-implants.jpg",
    sections: [
      {
        heading: "What dental implants are",
        paragraphs: [
          "When you have missing teeth, an alternative to dentures is dental implants. While dentures are removable, dental implants provide permanent new teeth that restore your mouth's function and appearance, offering a lasting solution to the loss of some or all of your teeth.",
          "An implant is a small titanium post placed in the jawbone to replace the root of a missing tooth. Over about three to six months it fuses with the bone, a process called osseointegration, creating a stable foundation. A custom crown is then attached on top, so the finished tooth looks and works like a natural one.",
        ],
      },
      {
        heading: "Who dental implants are for",
        paragraphs: ["Most healthy adults with one or more missing teeth are candidates. The best candidates have:"],
        bullets: [
          "Enough jawbone to support the implant (a bone graft can sometimes help if not)",
          "Healthy gums",
          "Good general health and oral hygiene",
        ],
      },
      {
        heading: "Your options",
        paragraphs: ["Implants can replace a single tooth or many:"],
        bullets: [
          "Single tooth: one implant with a custom crown.",
          "Several teeth: an implant-supported bridge.",
          "Full arch: an implant-supported denture for selected patients.",
        ],
      },
      {
        heading: "What to expect",
        steps: [
          "Consultation and imaging. The dentist examines your mouth, evaluates the bone, and discusses your options.",
          "Implant placement. The titanium post is placed under local anesthesia.",
          "Healing. The implant fuses with the bone over roughly three to six months; a temporary tooth may be possible in the meantime.",
          "Crown placement. Once healed and stable, your custom crown is attached.",
        ],
      },
    ],
    cost: {
      intro:
        "The cost of implant treatment depends on how many teeth are being replaced, whether a bone graft is needed, and your treatment plan, so a final price is confirmed after the dentist evaluates your teeth.",
      items: ["Dental implant", "Implant crown & abutment", "Bone graft & membrane"],
    },
    gallery: ["implants", "dentures"],
    faqs: [
      "How does a dental implant work?",
      "Can implants replace several teeth or a full arch?",
      "Am I a candidate for dental implants?",
      "Is dental implant surgery painful?",
    ],
    related: [
      { label: "Braces", href: "/services/braces" },
      { label: "Veneers", href: "/services/veneers" },
      { label: "Our prices", href: "/#pricing" },
      { label: "All FAQs", href: "/faq" },
    ],
  },

  braces: {
    slug: "braces",
    name: "Braces",
    h1: "Braces in Houston, for kids, teens and adults",
    lead:
      "Straighten your smile with traditional metal braces, fitted by a team that treats the whole family. Payment plans for care spread over multiple visits.",
    metaTitle: "Braces in Houston, TX | Idea Dental",
    metaDescription:
      "Traditional metal braces for children, teens and adults at Idea Dental, Houston. Braces $2,500 to $5,500. Payment plans for multi-visit care. Call (832) 664-8640.",
    image: "/images/services/braces.jpg",
    sections: [
      {
        heading: "What braces do",
        paragraphs: [
          "Even though there are many types of braces, traditional braces are still the most popular option. Great strides in technology have been made since they were first used, so they're becoming more comfortable and effective. Traditional braces use stainless steel brackets and archwires to move your teeth into their proper position, and many teens like to decorate them with different colored bands at every adjustment.",
        ],
      },
      {
        heading: "Traditional metal braces",
        paragraphs: [
          "The most reliable option, especially for complex cases. Durable, effective, and customizable with colored bands.",
          "We place traditional metal braces only. We don't offer Invisalign or clear aligners.",
        ],
      },
      {
        heading: "Braces for every age",
        paragraphs: [
          "Braces aren't just for children anymore. Idea Dental treats kids, teens and adults, and offers early treatment when it's needed. It's widely recommended that a child's bite be evaluated by around age seven: the earlier a problem is caught, the easier it usually is to treat.",
        ],
      },
      {
        heading: "What to expect",
        steps: [
          "Consultation and scan. The dentist examines your teeth and takes a digital iTero scan, with no goopy impressions.",
          "Placement. Brackets and archwires are fitted in one visit.",
          "Adjustments. Regular visits tighten the wires and move your teeth step by step.",
          "Retention. Once the braces come off, a retainer keeps your new smile in place.",
        ],
      },
    ],
    cost: {
      intro:
        "Braces range from $2,500 to $5,500 depending on how much correction your teeth need, which the dentist confirms at your consultation.",
      items: ["Braces"],
    },
    gallery: ["traditional-braces-1", "traditional-braces-2", "traditional-braces-3"],
    faqs: ["What kind of braces do you offer?", "At what age should my child’s bite be checked?", "What is the iTero scanner?"],
    related: [
      { label: "Dental implants", href: "/services/dental-implants" },
      { label: "Veneers", href: "/services/veneers" },
      { label: "Our prices", href: "/#pricing" },
      { label: "All FAQs", href: "/faq" },
    ],
  },

  veneers: {
    slug: "veneers",
    name: "Veneers",
    h1: "Veneers in Houston",
    lead:
      "Custom porcelain or composite veneers that reshape and brighten your smile with natural-looking, lasting results. Bilingual team, payment plans for care spread over multiple visits.",
    metaTitle: "Porcelain & Composite Veneers in Houston, TX | Idea Dental",
    metaDescription:
      "Transform your smile with custom porcelain or composite veneers at Idea Dental, Houston. Composite veneers $6,000. Payment plans for multi-visit care. Call (832) 664-8640.",
    image: "/images/services/cosmetic-dentistry.jpg",
    sections: [
      {
        heading: "What veneers are",
        paragraphs: [
          "Porcelain veneers are wafer-thin, custom-made shells of tooth-colored material designed to cover the front surface of teeth and improve their appearance. These shells are bonded to the front of the teeth, changing their color, shape, size or length.",
          "Composite veneers do the same job in tooth-colored resin rather than porcelain. The dentist talks through which is the better fit for your teeth and your goals.",
        ],
      },
      {
        heading: "Who veneers are for",
        paragraphs: [
          "Veneers are a good option if you have discoloration, chipped or damaged teeth, uneven or misshapen teeth, or gaps you'd like to close cosmetically. We recommend veneers for anyone who is simply unhappy with the shape or look of their natural teeth.",
        ],
      },
      {
        heading: "What to expect",
        steps: [
          "Consultation. The dentist examines your teeth, discusses your goals, and confirms veneers are right for you.",
          "Preparation. The teeth are lightly prepared and an impression or digital scan is taken.",
          "Custom fabrication. Your veneers are made to match your desired color, shape and size.",
          "Bonding. The finished veneers are bonded to the front of your teeth.",
        ],
      },
    ],
    cost: {
      intro:
        "Composite veneers are $6,000. Contact us for more information. Porcelain veneer pricing depends on how many teeth you're treating and is confirmed after the dentist evaluates your teeth.",
      items: ["Composite veneers"],
    },
    gallery: ["composite-veneers", "cosmetic-bonding"],
    faqs: ["What are porcelain veneers?", "How much do composite veneers cost?", "Do you offer teeth whitening?"],
    related: [
      { label: "Dental implants", href: "/services/dental-implants" },
      { label: "Braces", href: "/services/braces" },
      { label: "Our prices", href: "/#pricing" },
      { label: "All FAQs", href: "/faq" },
    ],
  },
};

export const serviceSlugs = Object.keys(servicePages);

export const costLine = insuranceLine;

/** The FAQ entries a page embeds, in the page's order; unknown questions are skipped. */
export function faqsFor(questions: string[]) {
  return questions.map((q) => faqs.find((f) => f.q === q)).filter((f): f is (typeof faqs)[number] => Boolean(f));
}

/** The price rows a page shows, in the page's order. */
export function pricesFor(items: string[]) {
  return items.map((i) => pricing.find((p) => p.item === i)).filter((p): p is (typeof pricing)[number] => Boolean(p));
}
