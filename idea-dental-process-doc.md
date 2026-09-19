# Idea Dental Website Rebuild — How I Built It

**Prepared for:** Tim
**Prepared by:** Sue
**Scope:** AI-visible rebuild of ideadentistry.com — structure, content, and FAQ, built without a single one-shot prompt.

---

## The short version

You asked for four things: make it **AI-visible**, give it a **strong FAQ**, **keep the good existing content**, and remove the free-exam offers — and you said the winner would be whoever combines **research, tools, AI prompting, and judgment** rather than pasting one prompt into an AI and shipping the result.

This document shows the process, not just the result. It walks through how the site was rebuilt in stages — research → audit → architecture → content → build → QA — where AI did the heavy lifting, and where human judgment overruled it. Every claim on the site is either sourced from your existing materials or flagged for confirmation; nothing about the business was invented.

**Live pages built so far:** FAQ, Emergency Dentist, Dental Implants (each with embedded, validated schema).
**Fully specified and ready to build:** Invisalign, Braces, Veneers, plus the homepage.

---

## Why this wasn't a one-shot prompt

A one-shot prompt ("make me a dental website") produces a generic, good-looking site that says nothing true about Idea Dental, invents prices and dentists, and ignores your removal instructions. It fails all four of your requirements at once.

Instead the work ran in deliberate stages, each feeding the next. The AI was a drafting and analysis tool inside that process — not the process itself.

| Stage | What happened | Who decided |
|---|---|---|
| 1. Requirements | Extracted your and Dr. Vu's instructions from the chat, separated confirmed from inferred | Human framing, AI structuring |
| 2. Research | Reviewed AI-visibility guidance; flagged unverifiable stats in the research briefs | Human judgment on what to trust |
| 3. Audit | Full audit of the live site — business, content, UX, SEO, AI, conversion | AI analysis, human priorities |
| 4. Architecture | Sitemap + page priority + internal linking | Human decisions, AI drafting |
| 5. Content | Rebuilt the FAQ; wrote service-page specs from real copy | AI drafting, human curation |
| 6. Build | Hand-built pages in VS Code with embedded schema | Human build + editing |
| 7. QA | Programmatic checks for schema validity, text/schema sync, and forbidden phrases | Automated + human review |

---

## Stage 1 — Locking what you actually want

Before any design, I turned the chat into a requirements list and split it into **confirmed** (things you and Dr. Vu said outright) versus **inferred** (what your instructions imply). That mattered because your win-condition is subjective ("the person I like the best"), so the safest move was to over-index on your explicit MUSTs:

- AI-visible · strong FAQ · preserve existing content · remove free exams · pricing as structure (not final numbers) · 4 days · **no one-shot prompt.**

Dr. Vu's removal instructions were treated as a hard rule and turned into a literal kill-list: no free exam, free X-rays, free second opinions, free consultations, free cleanings for moms, or "$0 / zero dollars," anywhere — including inside body copy, not just the Specials page.

## Stage 2 — Research, with a filter

AI-visibility advice online is full of confident numbers. The research briefs I started with contained specific 2026 citation statistics — and several had broken citation markers, a tell that they may be AI-hallucinated. **Judgment call: those numbers were set aside and not quoted as fact.** What was kept were the well-supported principles: for a single-location practice, AI visibility is driven mostly by clear entity data, consistent business information (NAP), real reviews, structured content, named providers, and genuinely useful FAQ answers — not by tricks.

## Stage 3 — Auditing the real site

I audited the actual Idea Dental site (from the live pages and screenshots), not a generic template. That surfaced the real strengths to keep and the real gaps to fix:

**Keep:** the detailed orthodontic and service copy, the before/after gallery, the 4.9★/118 reviews, bilingual positioning, the iTero scanner and payment-plan mentions, accurate hours and address.

**Fix:** no FAQ anywhere; no named dentist on-site; the phone number wasn't a click-to-call button; free-exam language live in several places; treatments buried inside category pages with no individual URLs; thin/empty page metadata; no LocalBusiness or FAQ schema.

## Stage 4 — Architecture that AI and patients can both navigate

I chose a **hub-and-spoke** structure over dumping services on the homepage. The reason is mechanical: AI systems and Google cite *pages*, not paragraphs. When someone asks an assistant "dental implants Houston" or "emergency dentist near Little York," the systems look for a dedicated, specific page to quote. A homepage bullet can't be that; a full implants page can.

So the money treatments (Implants, Invisalign, Braces, Veneers, Emergency) each got their own page, with the four existing category pages kept as hubs that house the good existing copy and pass link equity down. No page was added just because dental sites usually have it — each earns its place.

## Stage 5 — The FAQ: from raw bank to AI-visible page

This is the clearest example of judgment over automation. The starting point was a **480-question FAQ bank** — thorough, and already scrubbed of free-offer language.

The problem: the answers were 8–15 words each — dictionary stubs. AI systems quote *specific, self-contained* answers (roughly 40–60 words). Too-short answers are, ironically, invisible to AI. And 480 one-line Q&As on a public page reads as thin to Google.

**What I did:**
- Selected the ~31 highest-value patient questions.
- Rewrote each to citable depth — real specifics (e.g., how osseointegration works, real emergency hours), while staying strictly neutral on price per Dr. Vu's rule.
- Set the internal/operational parts of the bank (staff scripts, chatbot rules, QC notes) aside for internal use — they don't belong on a public page.
- Built it as a real HTML page with **embedded FAQPage schema**, so it's machine-readable, and verified the schema matches the visible text exactly.

The 480-question bank wasn't wasted — it became the raw material and the compliance record. But the *public* FAQ is the curated, deepened version.

## Stage 6 — Building in VS Code

The pages were hand-built and edited in **VS Code**, not generated and left untouched. This is the "graphic tools + human editing" half of the brief: AI drafted the copy and the schema; the pages were then assembled, styled, linked, and refined locally. Working in VS Code means full control over the markup, the schema blocks, the internal links, and the visual design — and it's the opposite of a one-shot output.

Each page carries:
- A consistent, modern design system (shared across all pages so the site feels like one site).
- Click-to-call and appointment CTAs, sticky on mobile.
- Embedded LocalBusiness (Dentist) + FAQPage schema with real NAP, geo-coordinates, hours, and links to the Google/Yelp/Facebook profiles.
- Bilingual signalling and the named provider, Dr. Stephanie Vu, DDS.

## Stage 7 — QA: checked, not assumed

Every page was run through programmatic checks before being called done:

- **Schema validity** — JSON-LD parses correctly.
- **Text/schema sync** — every question in the schema matches a visible question word-for-word (Google's requirement).
- **Forbidden-phrase scan** — automated search confirming no free-offer or "$0" language reaches any patient- or AI-visible content.
- **No fabrication** — scans confirming no invented dollar figures and no invented credentials beyond the confirmed DDS.
- **NAP consistency** — phone and address identical across every page.

---

## What's confirmed vs. what's flagged

Nothing about the business was invented. Where a fact wasn't confirmed, it's marked on the page rather than guessed:

**Confirmed and used:** address, phone, hours, bilingual service, 4.9★/118 reviews, services offered, iTero scanner, payment plans, emergency/same-day care (Tue/Wed 10–6, 2nd & 4th Sat 10–4, confirmed by Dr. Vu), provider credential (DDS).

**Flagged for confirmation (not invented):** specific pricing figures, the accepted-insurance list, financing partner names, two clinical timeline wordings, and a provider photo (Dr. Vu noted she doesn't have a recent headshot).

## What's next

- Build the remaining spoke pages (Invisalign, Braces, Veneers) — specs are written.
- Build the homepage last, once real photos and Dr. Vu's confirmations are in hand, so it's built once and complete.
- Drop in final pricing numbers when confirmed — the structure is already in place to receive them.

---

*Every page in this rebuild can be traced back to a real source in Idea Dental's own materials or is explicitly flagged as needing confirmation. The method — research, audit, architecture, AI-assisted drafting, human judgment, hand-built and QA'd in VS Code — is the point as much as the pages themselves.*
