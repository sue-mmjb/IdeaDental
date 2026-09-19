# Idea Dental — Service-Page Content Briefs

**Purpose:** Build specs for the 5 MUST spoke pages. Written to be build-tool-independent (Framer, code, or v0). Each brief reuses existing site copy where it exists (tagged `REUSE`), flags every unconfirmed claim `[CONFIRM]`, and lists the exact FAQs to embed from the finished FAQ page.

**Global rules for all 5 pages (apply without exception):**

- **Guardrail:** No free-offer / zero-cost / "$0" / free-second-opinion / new-patient-special language anywhere — copy, alt text, meta, or schema. (Dr. Vu directive.)
- **Standard section order:** H1 + CTA → What it is → Who it's for → Process → Cost & payment (neutral + approved levers) → Trust → FAQs → Related + final CTA.
- **Two CTAs on every page:** `Call (832) 664-8640` (tel: link) + `Request an appointment`. Sticky on mobile.
- **Cost language (approved levers only):** payment plans for all patients · insurance verified before treatment · affordable positioning. **No dollar figures** — all `[CONFIRM: pricing]`.
- **Provider line (footer of each page):** "Care provided by Dr. Stephanie Vu, DDS · Se habla español."
- **Schema per page:** `MedicalWebPage` (or `Service`) + the page's `FAQPage` block (reuse from FAQ page, kept in sync) + site-wide `Dentist` LocalBusiness in the footer/head.
- **Real photos:** prefer the practice's own before/after cases over stock. `[CONFIRM: which real images available]`

---

## 1 · Dental Implants — `/services/dental-implants/`

**Priority:** MUST (highest value/intent). **Source copy:** exists on Restorative page — `REUSE`.

- **Meta title:** `Dental Implants in Houston, TX | Idea Dental`
- **Meta description:** `Permanent, natural-looking tooth replacement with dental implants at Idea Dental in Houston. Payment plans for all patients. Call (832) 664-8640.`
- **H1:** Dental Implants in Houston

**Section order & content:**

1. **Hero + CTA** — one-line promise: permanent replacement for missing teeth. Both CTAs.
2. **What it is** — `REUSE` existing: *"When you have missing teeth, an alternative to dentures is dental implants. While dentures are removable, dental implants provide permanent new teeth to restore your mouth's function and appearance…"* Expand with the osseointegration explanation from the FAQ answer.
3. **Who it's for / candidacy** — most healthy adults with ≥1 missing tooth; needs adequate bone + healthy gums; note smoking/diabetes/gum-disease factors. (From FAQ answer — clinically neutral.)
4. **Process** — consultation + imaging → placement → healing (~3–6 mo) → crown. `[CONFIRM: timeline wording w/ Dr. Vu]`
5. **Options** — single implant, implant bridge, full-arch. (From FAQ.)
6. **Cost & payment** — neutral + approved levers. `[CONFIRM: pricing]`
7. **Trust** — real before/after implant case from gallery `REUSE` + 4.9★/118 line + Dr. Vu DDS.
8. **FAQs (embed):** "How does a dental implant work?" · "Can implants replace several teeth or a full arch?" · "Am I a candidate for dental implants?" · "Is dental implant surgery painful?"
9. **Related + CTA:** links to Dentures, Emergency; final Call + Request.

**Internal links in:** Home services grid, /services/ hub, Restorative category, Dentures page, FAQ implant answers.

---

## 2 · Invisalign — `/services/invisalign/` (canonical — resolves the duplicate)

**Priority:** MUST. **Source copy:** exists on BOTH Cosmetic and Ortho pages — consolidate here; make the two old mentions link to this one canonical page.

- **Meta title:** `Invisalign Clear Aligners in Houston, TX | Idea Dental`
- **Meta description:** `Straighten your teeth with nearly invisible, removable Invisalign aligners at Idea Dental, Houston. Bilingual team, payment plans. Call (832) 664-8640.`
- **H1:** Invisalign in Houston

**Section order & content:**

1. **Hero + CTA.**
2. **What it is** — `REUSE` existing: *"Invisalign® is a modern alternative to straighten your teeth without wires or metal… a series of custom trays… smooth plastic that gradually moves them into place."*
3. **Who it's for** — teens and adults wanting a discreet, removable option; mild-to-moderate alignment. Note complex cases may suit braces.
4. **Process** — scan (iTero) → custom aligners → wear each set ~1–2 wks → refinements → retention. `REUSE` the removable/easy-to-clean copy.
5. **iTero advantage** — `REUSE`: preview your Invisalign result before starting; no goopy impressions. (Differentiator.)
6. **Cost & payment** — neutral + approved levers. `[CONFIRM: pricing]`
7. **Trust** — before/after (braces/aligner case) + reviews + Dr. Vu.
8. **FAQs (embed):** "What is Invisalign and how does it work?" · "Is Invisalign better than braces?" · "What is the iTero scanner?"
9. **Related + CTA:** links to Braces, Veneers; final CTAs.

**Internal links in:** Home grid, /services/ hub, Ortho category, Cosmetic category, Braces page, FAQ.

---

## 3 · Braces — `/services/braces/`

**Priority:** MUST. **Source copy:** rich existing ortho copy — `REUSE` (Traditional Braces, Clear Braces, teens/adults).

- **Meta title:** `Braces in Houston, TX — Metal & Clear | Idea Dental`
- **Meta description:** `Traditional and clear braces for children, teens and adults at Idea Dental, Houston. Payment plans for all patients. Call (832) 664-8640.`
- **H1:** Braces in Houston — for Kids, Teens & Adults

**Section order & content:**

1. **Hero + CTA.**
2. **What it is** — `REUSE`: *"Even though there are many types of braces, traditional braces are still the most popular option… stainless steel brackets and archwires to move your teeth into position."*
3. **Types offered** — Traditional metal · Clear (tooth-colored) braces `REUSE` clear-braces copy · link to Invisalign. Note clear braces cost more but are less noticeable; **"we offer payment plans for all patients"** `REUSE` (this is the approved cost lever, already in their copy).
4. **Who it's for** — kids (early treatment), teens, adults. `REUSE` age-7 AAO recommendation copy.
5. **Process** — consult/scan → placement → adjustments (note Thu adjustment day) → retention. `REUSE` retention copy.
6. **Cost & payment** — neutral + approved levers. `[CONFIRM: pricing]`
7. **Trust** — before/after braces case (strong existing gallery asset) + reviews + Dr. Vu.
8. **FAQs (embed):** "What types of braces do you offer?" · "At what age should my child see an orthodontist?" · "Is Invisalign better than braces?"
9. **Related + CTA:** Invisalign, Retention; final CTAs.

**Internal links in:** Home grid, /services/ hub, Ortho category, Invisalign page, FAQ.

---

## 4 · Veneers — `/services/veneers/`

**Priority:** MUST (high-margin cosmetic). **Source copy:** exists on Cosmetic page — `REUSE`.

- **Meta title:** `Porcelain Veneers in Houston, TX | Idea Dental`
- **Meta description:** `Transform your smile with custom porcelain veneers at Idea Dental, Houston. Natural-looking results, payment plans. Call (832) 664-8640.`
- **H1:** Porcelain Veneers in Houston

**Section order & content:**

1. **Hero + CTA.**
2. **What it is** — `REUSE`: *"Porcelain veneers are wafer-thin, custom-made shells… bonded to the front of the teeth changing their color, shape, size, or length…"*
3. **Who it's for** — `REUSE`: discoloration that whitening can't fix, damaged/uneven/unhappy-with-shape teeth.
4. **Process** — consult → prep → custom fabrication → bonding. `[CONFIRM: visit count]`
5. **Veneers vs. whitening/bonding** — brief comparison (route decision). Link to whitening in Cosmetic.
6. **Cost & payment** — neutral + approved levers. `[CONFIRM: pricing]`
7. **Trust** — cosmetic before/after from gallery `REUSE` + reviews + Dr. Vu.
8. **FAQs (embed):** "What are porcelain veneers?" · "How long does teeth whitening last?" (whitening alternative) · add "How long do veneers last?" `[CONFIRM: clinical]`
9. **Related + CTA:** Cosmetic hub, Invisalign; final CTAs.

**Internal links in:** Home grid, /services/ hub, Cosmetic category, FAQ.

---

## 5 · Emergency Dentist — `/services/emergency-dentist/`

**Priority:** MUST (highest urgency). **Now confirmed** by Dr. Vu — build it confidently.

- **Meta title:** `Emergency & Same-Day Dentist in Houston, TX | Idea Dental`
- **Meta description:** `Emergency and same-day dental care in Houston for toothache, broken or knocked-out teeth. Tue/Wed 10–6, 2nd & 4th Sat 10–4. Call (832) 664-8640.`
- **H1:** Emergency & Same-Day Dentist in Houston

**Section order & content (note: urgency layout — put phone + hours ABOVE everything):**

1. **Emergency band (top of page)** — big `Call (832) 664-8640` + confirmed hours: **Tue & Wed 10–6, 2nd & 4th Saturdays 10–4.** Line: *if trouble breathing/swallowing, call 911.*
2. **What we treat same-day** — severe toothache, swelling, knocked-out/broken tooth, lost crown/filling, orthodontic pokes. (From FAQ.)
3. **What to do right now** — quick first-aid blocks: knocked-out tooth, lost crown/filling, broken tooth. `REUSE` FAQ answers.
4. **What counts as an emergency** — from FAQ; includes the 911 caveat.
5. **Walk-ins** — Tue/Wed 10–6 welcome; call ahead for wait times.
6. **Cost & payment** — neutral + approved levers; payment plans. `[CONFIRM: pricing]`
7. **Trust** — bilingual, 4.9★/118, Dr. Vu DDS.
8. **FAQs (embed):** "Does Idea Dental offer emergency or same-day dental care?" · "What counts as a dental emergency?" · "What should I do if my tooth gets knocked out?" · "What should I do if my crown or filling falls out?"
9. **Final CTA** — Call primary; Request secondary.

**Internal links in:** Home (emergency highlight), /services/ hub, all service pages (footer "Dental emergency? →"), FAQ emergency answers.

---

## Build order (within the 5, for the 4-day clock)

1. **Emergency** — highest urgency, all copy ready, confirmed. Build as real page first.
2. **Dental Implants** — highest value, copy ready.
3. **Invisalign** — resolves the duplicate; copy ready.
4. **Braces** — richest existing copy.
5. **Veneers** — quick, copy ready.

## Open confirmations rolled up (send to Dr. Vu only if convenient — none block the briefs)

- Pricing figures (all pages) — placeholders until confirmed.
- Implant + veneer clinical timelines/lifespan wording.
- Which real before/after + office/team photos may be used.
- Accepted insurance list & any financing partner names.
