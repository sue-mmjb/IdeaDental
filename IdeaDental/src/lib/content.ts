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
  { day: "Saturday", time: "2nd & 4th Saturdays only", note: "" },
  { day: "Sunday", time: "Closed", note: "" },
];

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
  headline: ["General dentistry", "in Houston, TX"],
  body: "Comprehensive dental care for you and your family, from routine checkups to restorative and cosmetic treatments.",
};

export const about = {
  intro:
    "Idea Dental provides general, restorative and cosmetic dentistry, dental implants and traditional metal braces from a clinic conveniently located in Houston, Texas, treating patients of all ages.",
  philosophy:
    "The team at Idea Dental approaches dentistry with a patient-first philosophy. The friendly staff creates a warm and welcoming environment that puts patients at ease from the moment they call to book their appointment until they leave the practice’s offices.",
  underOneRoof:
    "We offer a full range of dental services, so all of your family’s needs are met under one roof.",
};

export type ServiceCategory = {
  key: string;
  label: string;
  description: string;
  treatments: string[];
  image: string;
  alt: string;
};

export const services: ServiceCategory[] = [
  {
    key: "general",
    label: "General Dentistry",
    description:
      "Helping our patients maintain a healthy mouth and smile is the main goal of general dentistry. We prefer to provide more minor, preventive care than to see patients suffer with more intensive treatments from a problem that was not managed in time.",
    treatments: ["Cleanings", "Deep Cleaning", "Fillings", "Extractions", "Root Canals", "Crowns"],
    image: "/images/services/general-dentistry.jpg",
    alt: "Patient receiving a general dental checkup",
  },
  {
    key: "braces",
    label: "Metal Braces",
    description:
      "We straighten teeth with traditional metal braces: stainless steel brackets and archwires that gently move teeth into place. They work for children, teens and adults, and the dentist plans treatment around your goals and budget.",
    treatments: ["Braces for Kids", "Braces for Teens", "Adult Braces", "Retention", "iTero Scanner"],
    image: "/images/services/braces.jpg",
    alt: "A young patient smiling, wearing metal braces",
  },
  {
    key: "cosmetic",
    label: "Cosmetic Dentistry",
    description:
      "A beautiful smile is one of the most sought after cosmetic features in the world. Whether through minor adjustments or major treatment plans, our cosmetic dentistry practice aims to improve your smile and help you build confidence.",
    treatments: ["Porcelain Veneers"],
    image: "/images/services/cosmetic-dentistry.jpg",
    alt: "Close-up of a bright, even smile",
  },
  {
    key: "restorative",
    label: "Restorative Dentistry",
    description:
      "Idea Dental is committed to offering a full range of dentistry services. Whether you’ve had repairs or need a complete replacement, we recommend continual check-ups to assess your gums and bone density.",
    treatments: ["Dental Implants", "Implant Crowns", "Bone Grafts", "Dentures & Partials"],
    image: "/images/services/dental-implants.jpg",
    alt: "Dental implant model",
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
      "Stephanie Vu, DDS, is a dedicated and caring dentist who provides exceptional care to her patients at Idea Dental, conveniently located in Houston, Texas.",
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
      "Idea Dental is proud to have Dr. Nukul Rathi visiting as a provider. Dr. Rathi has specialized in implants and full mouth rehabilitation, pursuing his interest in dental implants at New York University, College of Dentistry.",
      "He completed his Masters of Science and Advanced Prosthodontics Clinical Residency Program at The Ohio State University, working within a clinic that has completed over 25,000 implants.",
      "Dr. Rathi was selected as the ‘New and Emerging Speaker’ by the American Dental Association in Washington DC in 2015, and lectures internationally on implant dentistry and CAD-CAM in dentistry.",
    ],
  },
];

export const technology = [
  {
    title: "iTero Element Scanner",
    description:
      "Precise 3D imaging of your smile in place of traditional impressions, used to plan braces and implant treatment.",
  },
  {
    title: "Piezotome Cube Extraction",
    description: "Modern equipment used to support gentler, more controlled extraction procedures.",
  },
];

// Short feature names for the marquee — each is a fact from the verified `features` list.
export const features = [
  "iTero digital scanning",
  "Piezotome technology",
  "Hablamos Español",
  "75″ TV in every patient room",
  "All insurance plans accepted",
  "Flexible payment plans",
];

// Client price list, 2026-10-01 (Ihna → Jun) — replaces the live site's old comparison table.
// The update has no "other dentist" figures, so the comparison column is gone.
export const pricing = [
  { item: "Adult Cleaning", price: "$75" },
  { item: "Full Mouth Debridement", price: "$200" },
  { item: "Deep Cleaning", price: "$500" },
  { item: "Filling", price: "$250 and up" },
  { item: "Simple Extraction", price: "$350" },
  { item: "Surgical Extraction", price: "$450" },
  { item: "Bone Graft and Membrane", price: "$600" },
  { item: "Crown", price: "$1,200" },
  { item: "Root Canal", price: "$800" },
  { item: "Denture or Partial Denture", price: "$1,200 per arch" },
  { item: "Implant", price: "$3,500" },
  { item: "Implant Crown and Abutment", price: "$1,800" },
  { item: "Braces", price: "$2,500 – $5,500" },
];

export const insurance =
  "We accept all insurance plans. Treatment completed in a single visit is paid in full that day; dental work spread over several visits can be arranged on a payment plan, depending on the work needed. Final pricing is confirmed after the dentist evaluates your teeth.";

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
    a: "We see patients Tuesday and Wednesday, 10am–6pm, and on the 2nd and 4th Saturday of each month. Monday and Thursday, 8:30am–2pm, are for surgeries only. We're closed Friday and Sunday.",
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
    a: "Yes, for care spread over more than one visit. Treatment completed in a single visit is paid in full that day; dental work spread over time can be arranged on a payment plan, depending on the work needed.",
  },
  {
    q: "Do you accept my insurance?",
    a: "We accept all insurance plans. Our team can review your benefits with you before treatment.",
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
    a: "We'll assess your oral health and build a dental plan based on your individual needs. We see your first visit as the start of a long-term relationship, not a one-off appointment.",
  },
  {
    q: "¿Hablan español?",
    a: "Sí, hablamos español. Our team is glad to assist Spanish-speaking patients throughout their visit.",
  },
];
