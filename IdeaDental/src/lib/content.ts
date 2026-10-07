// Idea Dental content. Design from the IdeaDental3 template (merged per Tim);
// content aligned to Dr. Stephanie Vu's directives:
//  - metal braces only (no Invisalign, no clear braces); no teeth whitening;
//  - no emergency service; no "orthodontist"/specialist claims for the practice;
//  - same-day treatment paid in full; multi-visit care can go on a payment plan;
//  - patients book by texting/calling (832) 664-8640, not through a web form;
//  - never include the free / $0 / "Current Specials" promotions.

export const business = {
  name: "Idea Dental",
  phone: "(832) 664-8640",
  phoneHref: "tel:+18326648640",
  smsHref: "sms:+18326648640",
  address: { line1: "216 W Little York Road, Suite B", line2: "Houston, TX 77076" },
  locationNote: "Conveniently located in north Houston, just off I-45.",
  languages: "English & Spanish",
  mapsUrl: "https://goo.gl/maps/PBzLzgfFhGXrSZxf9",
  social: [
    { label: "Facebook", href: "https://www.facebook.com/Idea-Dental-at-West-Little-York-PLLC-137635463309853" },
    { label: "Yelp", href: "https://www.yelp.com/biz/idea-dental-houston" },
  ],
};

export const hours = [
  // Dr. Vu, client update. Saturday time not given; Sunday not in the update, kept as Closed.
  { day: "Monday", time: "8:30 AM – 2:00 PM", note: "Surgeries only" },
  { day: "Tuesday", time: "10:00 AM – 6:00 PM", note: "General dentistry" },
  { day: "Wednesday", time: "10:00 AM – 6:00 PM", note: "General dentistry" },
  { day: "Thursday", time: "8:30 AM – 2:00 PM", note: "Surgeries only" },
  { day: "Friday", time: "Closed", note: "" },
  { day: "Saturday", time: "10:00 AM – 4:00 PM", note: "2nd & 4th Saturdays" },
  { day: "Sunday", time: "Closed", note: "" },
];

// Section intros from the content file that had no equivalent on the page.
export const intros = {
  results: "See selected treatment results from Idea Dental.",
  technology:
    "Modern technology designed to make diagnosis, treatment planning, and care more precise and comfortable.",
  doctors: "Care from a dedicated, bilingual team at Idea Dental.",
};

// "Why patients choose Idea Dental". Only the short labels were on the page, in the feature
// marquee; these are the reasons behind them.
export const whyUs = {
  eyebrow: "Why patients choose Idea Dental",
  heading: "Real reasons, not slogans.",
  reasons: [
    {
      title: "About half the cost",
      body: "We’re known for affordable pricing on the treatments Houston families need most.",
    },
    {
      title: "Bilingual team",
      body: "Discuss your care comfortably in English or Spanish. Se habla español.",
    },
    {
      title: "Modern iTero® 3D scanner",
      body: "No goopy impressions, just a precise digital model the dentist uses to plan your treatment.",
    },
    {
      title: "Payment plans available",
      body: "Same-day treatment is paid in full; care spread over multiple visits can be arranged on a payment plan.",
    },
    {
      title: "Whole-family care",
      body: "Children, teens and adults are all seen under one roof.",
    },
  ],
};

// The Google rating the content file carries above the reviews.
export const reviewSummary = { rating: "4.9", count: "119 Google reviews" };

// The two reassurance blocks and the footnote that sit under the price list.
export const pricingNotes = [
  {
    title: "Need flexibility?",
    body: "Payment plans for care spread over multiple visits. Spread out the cost of care instead of paying all at once.",
  },
  {
    title: "No guesswork",
    body: "Final pricing is confirmed after the dentist evaluates your teeth.",
  },
];

export const pricingDisclaimer =
  "Prices vary by case. Contact the office at (832) 664-8640 for current fees and to verify your insurance benefits.";

export const nav = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Doctors", href: "#doctors" },
  { label: "Technology", href: "#technology" },
  { label: "Before & After", href: "#before-after" },
  { label: "Contact", href: "#contact" },
];

// Client-approved hero copy (web/ git history: "Update Hero copy to client-approved version").
export const hero = {
  headline: ["Quality dental care in Houston,", "for about half the cost."],
  body: "From cleanings to implants and braces, Idea Dental gives Houston families honest, affordable care in English and Spanish.",
};

export const about = {
  // The content file's About block, word for word.
  eyebrow: "Idea Dental · Houston",
  intro: "Care designed around you.",
  philosophy:
    "The team at Idea Dental approaches dentistry with a patient-first philosophy. The friendly staff creates a warm and welcoming environment that puts patients at ease from the moment they call to book their appointment until they leave the practice’s offices. Comprehensive dental care for you and your family, from routine checkups to restorative and cosmetic treatments. From everyday dentistry to advanced restorative care, our team helps you understand your options and move forward with confidence.",
  underOneRoof:
    "One office for your whole family: general, preventive, restorative, braces and implant dentistry. We offer a full range of dental services, so all of your family’s needs are met under one roof.",
};

export type ServiceCategory = {
  key: string;
  label: string;
  description: string;
  treatments: string[];
  image: string;
  alt: string;
  /** The card's own link, labelled as the previous site labelled it. */
  cta: { label: string; href: string };
  /** The question card is a signpost, not a treatment: its art is a cut-out, not a photo fill. */
  cutout?: boolean;
};

export const services: ServiceCategory[] = [
  {
    key: "restorative",
    label: "Dental Implants",
    description: "Permanent, natural-looking replacements for missing teeth.",
    treatments: ["Dental Implants", "Implant Crowns", "Bone Grafts", "Dentures & Partials"],
    image: "/images/services/dental-implants.jpg",
    alt: "Dental implant model",
    cta: { label: "Learn more", href: "#contact" },
  },
  {
    key: "braces",
    label: "Braces",
    description: "Metal braces for kids, teens and adults.",
    treatments: ["Braces for Kids", "Braces for Teens", "Adult Braces", "Early Treatment", "Retention", "iTero Scanner"],
    image: "/images/services/braces.jpg",
    alt: "A young patient smiling, wearing metal braces",
    cta: { label: "Learn more", href: "#contact" },
  },
  {
    key: "cosmetic",
    label: "Veneers",
    description: "Custom porcelain shells for a brighter, even smile.",
    treatments: ["Porcelain Veneers"],
    image: "/images/services/cosmetic-dentistry.jpg",
    alt: "Close-up of a bright, even smile",
    cta: { label: "Learn more", href: "#contact" },
  },
  {
    key: "faq",
    label: "Have a question?",
    description: "Answers on treatments, insurance, payment and more.",
    treatments: [],
    image: "/images/services/have-a-question.png",
    alt: "A tooth beside a speech bubble",
    cta: { label: "Read FAQs", href: "#faq" },
    cutout: true,
  },
];

// Real photos from the live "Before & After Gallery" page. Each image already carries its own
// before/after caption, so these labels are only used for the card text and alt text.
export type Result = { key: string; treatment: string; timing?: string; category: string };

export const results: Result[] = [
  { key: "traditional-braces-1", treatment: "Traditional Braces", timing: "9 months later", category: "Braces" },
  { key: "traditional-braces-2", treatment: "Traditional Braces", timing: "1 week later", category: "Braces" },
  { key: "teeth-cleaning", treatment: "Teeth Cleaning", category: "General Dentistry" },
  { key: "cosmetic-bonding", treatment: "Cosmetic Bonding", category: "Cosmetic Dentistry" },
  { key: "dentures", treatment: "Dentures", category: "Cosmetic Dentistry" },
  { key: "traditional-braces-3", treatment: "Traditional Braces", timing: "4 months later", category: "Braces" },
  { key: "fillings", treatment: "Fillings", category: "General Dentistry" },
  { key: "implants", treatment: "Implants", category: "Restorative Dentistry" },
];

export const doctors = [
  {
    key: "vu",
    name: "Dr. Stephanie Vu",
    credentials: "DDS",
    photo: "/images/stephanie-vu.jpg",
    bio: [
      "Dr. Vu is a dedicated dentist who provides exceptional care to patients at Idea Dental in Houston, offering general, restorative, braces and implant care to patients of all ages in both English and Spanish.",
      "Dr. Vu graduated with a bachelor’s degree in biology from the University of Texas at Austin. She discovered her passion for dentistry during her undergraduate years while volunteering at the San Jose Clinic in Houston, and decided to pursue her dental degree.",
      "Dr. Vu earned her Doctor of Dental Surgery from the University of Texas School of Dentistry at Houston. She graduated from her dental program with honors and won the prestigious Student Achievement Award of Endodontics.",
    ],
  },
  {
    key: "rathi",
    name: "Dr. Nukul Rathi",
    credentials: "Implants & Full Mouth Rehabilitation",
    photo: "/images/nukul-rathi.jpg",
    bio: [
      "Idea Dental is proud to have Dr. Nukul Rathi as a visiting provider. Dr. Rathi specializes in implants and full-mouth rehabilitation.",
      "He completed his Masters of Science and Advanced Prosthodontics Clinical Residency Program at The Ohio State University, working within a clinic that has completed over 25,000 implants.",
      "Dr. Rathi was selected as the ‘New and Emerging Speaker’ by the American Dental Association in Washington DC in 2015, and lectures internationally on implant dentistry and CAD-CAM in dentistry.",
    ],
  },
];

export type TechItem = {
  title: string;
  description: string;
  // The demonstration video the previous site linked from this card.
  video: { id: string; title: string; start?: number };
};

export const technology: TechItem[] = [
  {
    title: "iTero Element Scanner",
    description:
      "Digital scanning technology that creates detailed 3D images of the teeth for modern treatment planning.",
    video: { id: "cby3c8VHLgM", title: "Introducing the iTero Element 2 intraoral scanner" },
  },
  {
    title: "Piezotome Cube",
    description: "Advanced ultrasonic technology used in certain dental extraction procedures.",
    video: { id: "dyivqeElRVg", title: "Piezotome CUBE vs Rotary Burr", start: 5 },
  },
];

// Short feature names for the marquee — each is a fact from the verified `features` list.
export const features = [
  "iTero digital scanning",
  "Piezotome technology",
  "Hablamos Español",
  "75″ TV in every patient room",
  "Many insurance plans accepted",
  "Flexible payment plans",
  "Whole-family care",
];

// Client price list, 2026-10-01 (Ihna → Jun) — replaces the live site's old comparison table.
// The update has no "other dentist" figures, so the comparison column is gone.
export const pricing = [
  { item: "Adult cleaning", price: "$75" },
  { item: "Full-mouth debridement", price: "$200" },
  { item: "Deep cleaning", price: "$500" },
  { item: "Filling", price: "From $250" },
  { item: "Simple extraction", price: "$350" },
  { item: "Surgical extraction", price: "$450" },
  { item: "Bone graft & membrane", price: "$600" },
  { item: "Root canal", price: "$800" },
  { item: "Crown", price: "$1,200" },
  { item: "Denture or partial (per arch)", price: "$1,200" },
  { item: "Dental implant", price: "$3,500" },
  { item: "Implant crown & abutment", price: "$1,800" },
  { item: "Braces", price: "$2,500–$5,500" },
];

export const insurance =
  "Idea Dental is known for keeping treatment affordable. Final pricing is confirmed after the dentist evaluates your teeth. Treatment finished in a single visit is paid in full that day; care spread over multiple visits can be arranged on a payment plan.";

// Real reviews, unedited. `headline` + `body` split the same review into a pull-quote and the
// remaining sentences — no words added or changed.
export const testimonials = [
  {
    name: "Dawn W.",
    headline: "Exceptional customer service!",
    body: "Had a problem come up in between appointments, and they said come on in and took care of it.",
  },
  {
    name: "Tommy H.",
    headline: "I recommend this dental office!!!",
    body: "I got my braces and implant done here. The doctors and staff were really very nice and the price was half of what other dentists quoted me.",
  },
  {
    name: "Thuy B.",
    headline: "Great experience!!!!",
    body: "Staffs are extremely friendly and professional. I would highly recommend this dental office.",
  },
  {
    name: "Jahoward H.",
    headline: "The absolute best.",
    body: "The staff was warm and caring, the facility was perfect and the accommodations were nice.",
  },
];

// Patient FAQ. Every answer is drawn from the client's confirmed facts; prices are Dr. Vu's list.
export const faqs = [
  {
    q: "What are your office hours?",
    a: "Idea Dental sees patients Tuesday and Wednesday from 10:00 AM to 6:00 PM, and on the 2nd and 4th Saturdays from 10:00 AM to 4:00 PM. Mondays and Thursdays from 8:30 AM to 2:00 PM are reserved for surgeries only. The office is closed Friday and Sunday. Please call to confirm availability.",
  },
  {
    q: "Do you take walk-ins?",
    a: "Yes, Idea Dental welcomes walk-ins on Tuesdays and Wednesdays from 10:00 AM to 6:00 PM. Calling ahead at (832) 664-8640 is still a good idea so the team can let you know about wait times and be ready for your visit.",
  },
  {
    q: "How do I book an appointment?",
    a: "Text the office at (832) 664-8640. Texting is the fastest and most reliable way to reach us, and a team member will reply to set up your visit. You can also call. Please don't include personal health details in your message.",
  },
  {
    q: "How much does a cleaning cost?",
    a: "An adult cleaning is $75. A full-mouth debridement is $200, and a deep cleaning is $500. The dentist confirms which one you need after evaluating your teeth.",
  },
  {
    q: "Do you offer payment plans?",
    a: "Yes, for treatment that’s spread over more than one visit. Treatment completed in a single visit is paid in full that day, and care planned across multiple visits can often be arranged on a payment plan, depending on the work needed. The team reviews the options with you when you visit or call the office.",
  },
  {
    q: "Do you accept my insurance?",
    a: "Idea Dental works with many dental insurance plans. Because coverage and your out-of-pocket responsibility vary by plan and treatment, our team verifies your benefits before treatment so you know what to expect. Call (832) 664-8640 or ask at your visit and we’ll help check your coverage.",
  },
  {
    q: "What kind of braces do you offer?",
    a: "We place traditional metal braces for children, teens and adults. Braces range from $2,500 to $5,500 depending on how much correction your teeth need. We don't offer Invisalign or clear aligners.",
  },
  {
    q: "How much does a dental implant cost?",
    a: "A dental implant is $3,500, and the implant crown and abutment is $1,800. If a bone graft and membrane are needed, that is $600. The dentist confirms your total after evaluating your teeth.",
  },
  {
    q: "What general dental treatments do you provide?",
    a: "Cleanings and deep cleanings, fillings, simple and surgical extractions, root canals, crowns, and dentures or partial dentures, along with dental implants, veneers and metal braces.",
  },
  {
    q: "Do you offer teeth whitening?",
    a: "No, we don't offer teeth whitening. For teeth that are chipped, uneven or discolored, porcelain veneers may be an option. The dentist can talk through your choices.",
  },
  {
    q: "What should I expect at my first visit?",
    a: "At your first visit the dentist reviews your health history, examines your teeth and gums, takes any necessary imaging, and discusses your goals. You’ll receive a recommended treatment plan with the options available to you. It’s a good time to ask about scheduling, insurance and payment options.",
  },
  {
    q: "¿Hablan español?",
    a: "Yes. Idea Dental is a bilingual dental office and our team speaks both English and Spanish, so Spanish-speaking patients can discuss symptoms, treatment options and costs comfortably in their own language. Sí, hablamos español.",
  },
  {
    q: "What is Idea Dental?",
    a: "Idea Dental is a family and cosmetic dental practice in Houston, Texas, at 216 W Little York Road, Suite B. We provide general, preventive, restorative, braces, implant and cosmetic dentistry for children, teens and adults. Our team is bilingual and treats patients in both English and Spanish.",
  },
  {
    q: "Where is Idea Dental located?",
    a: "Idea Dental is located at 216 W Little York Road, Suite B, Houston, TX 77076, just off I-45 in north Houston. You can reach the office by phone at (832) 664-8640.",
  },
  {
    q: "Are you accepting new patients?",
    a: "Yes, Idea Dental welcomes new patients of all ages, including families who want children and adults seen at the same office. You can request an appointment online or call (832) 664-8640 to schedule your first visit.",
  },
  {
    q: "Do you treat children and families?",
    a: "Yes. Idea Dental provides family dentistry, so children, teens and adults can be seen under one roof. This includes preventive care, orthodontics for kids and teens, and general treatment for the whole family.",
  },
  {
    q: "How does a dental implant work?",
    a: "A dental implant is a small titanium post placed in the jawbone to replace the root of a missing tooth. Over about three to six months it fuses with the bone, a process called osseointegration, creating a stable foundation. A custom crown is then attached on top, giving you a replacement tooth that looks and functions like a natural one.",
  },
  {
    q: "Can implants replace several teeth or a full arch?",
    a: "Yes. A single implant with a crown can replace one tooth, while implant-supported bridges or dentures can replace several teeth or a full arch. The right option depends on how many teeth are missing and the condition of your jawbone, which the dentist evaluates at your consultation.",
  },
  {
    q: "Am I a candidate for dental implants?",
    a: "Most healthy adults with one or more missing teeth are candidates. Good candidates have enough jawbone to support the implant and healthy gums. Factors like smoking, uncontrolled diabetes or gum disease can affect healing, so the dentist reviews your health history and takes imaging before recommending implants.",
  },
  {
    q: "Is dental implant surgery painful?",
    a: "The procedure itself is done with local anesthesia, so you should not feel pain during placement. Afterward, most patients have mild swelling or soreness for a few days that is usually managed with over-the-counter pain relief and settles quickly.",
  },
  {
    q: "What is the iTero scanner?",
    a: "The iTero scanner is a digital 3D scanner Idea Dental uses to create precise images of your teeth without the messy, uncomfortable putty impressions of the past. It makes appointments more comfortable and gives the dentist a detailed digital model to plan your treatment.",
  },
  {
    q: "At what age should my child’s bite be checked?",
    a: "It’s widely recommended that a child’s bite be evaluated by around age seven. Treatment often isn’t needed that early, but a check lets the dentist watch how the teeth and jaw are developing and catch problems while they are simpler to correct.",
  },
  {
    q: "What are porcelain veneers?",
    a: "Porcelain veneers are thin, custom-made shells bonded to the front of your teeth to improve their color, shape, size or length. They are a cosmetic option for teeth that are discolored, chipped or uneven, and they give a natural-looking, lasting result.",
  },
  {
    q: "What is a root canal and does it hurt?",
    a: "A root canal treats an infected or badly damaged tooth by removing the inflamed inner tissue, cleaning the space and sealing it, which relieves pain and saves the tooth. Modern root canals are done under anesthesia and, for most patients, feel similar to getting a filling rather than the painful reputation they once had.",
  },
  {
    q: "Do I really need to replace a missing tooth?",
    a: "Yes, replacing a missing tooth is usually recommended. When a tooth is gone, nearby teeth can shift, the jawbone can shrink over time, and chewing and speech can be affected. Options such as implants, bridges and dentures restore function and help protect your remaining teeth.",
  },
  {
    q: "What are dentures and are there different kinds?",
    a: "Dentures are removable replacements for missing teeth. Full dentures replace all the teeth in an arch, while partial dentures fill in gaps when some natural teeth remain. Idea Dental fits dentures for proper function and comfort and provides guidance on at-home care and follow-up cleanings.",
  },
  {
    q: "How often should I have a dental check-up and cleaning?",
    a: "For most people a check-up and professional cleaning every six months is recommended. Regular visits let the dentist catch small problems early, before they need more involved treatment. Some patients with gum disease or other conditions may be advised to come more often.",
  },
  {
    q: "How much will my treatment cost?",
    a: "The cost depends on the examination findings, the specific treatment you need, your insurance benefits and the agreed treatment plan, so a final price is confirmed after the dentist evaluates your teeth. Idea Dental is known for affordable pricing and offers payment plans for care spread over multiple visits. Contact the office for current fees for your treatment.",
  },
  {
    q: "Can I request an appointment online?",
    a: "Yes. You can request an appointment through the form on our website and a member of the team will confirm your appointment by phone. For urgent problems or same-day care, calling (832) 664-8640 is the fastest way to be seen.",
  },
];
