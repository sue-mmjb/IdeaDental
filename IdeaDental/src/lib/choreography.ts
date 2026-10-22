"use client";

import { gsap, ScrollTrigger } from "./gsap";
import { duration, ease, marqueePxPerSecond } from "./motion-tokens";

/*
 * Scroll choreography for the whole page. Each function is called from <MotionProvider>
 * inside a gsap.matchMedia() handler. Scrolling is native, so nothing here pins, scrubs the
 * page or fights the user's scroll: entrances are short time-based fades (ease.out), and the
 * only scroll-linked effects are two gentle scrubs (hero watermark, About text colour).
 *
 * Follows the house motion system (see motion-tokens.ts). Transforms / opacity / clip-path
 * only, so everything stays on the compositor.
 */

const q = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  gsap.utils.toArray<T>(root.querySelectorAll(sel));

/** Hero: load-in timeline + watermark parallax (scrub) so the wordmark drifts slower than the page. */
export function heroMotion() {
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  if (!hero) return;

  const intro = gsap.timeline({ defaults: { ease: ease.out, duration: duration.intro } });
  intro
    .from(hero.querySelector("[data-hero-bg]"), { scale: 1.12, duration: 1.6 }, 0)
    .from(hero.querySelector("[data-hero-watermark-inner]"), { yPercent: 30, autoAlpha: 0 }, 0.1)
    .from(q("[data-hero-nav] > *", hero), { y: -12, autoAlpha: 0, duration: 0.6, stagger: 0.06 }, 0.2)
    .from(q("[data-hero-line]", hero), { yPercent: 110, duration: 0.9, stagger: 0.1 }, 0.3)
    .from(hero.querySelector("[data-hero-search]"), { y: 24, autoAlpha: 0, duration: 0.8 }, 0.55);

  // Outer wrapper carries the scrub so it never fights the intro tween on the inner element.
  gsap.to(hero.querySelector("[data-hero-watermark]"), {
    yPercent: 70,
    ease: ease.linear,
    scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
  });
}

/**
 * About: house text-colour reveal. A dark overlay layer, stacked exactly on a muted base,
 * is uncovered by ONE vertical clip line sweeping left to right (so shorter lines finish first).
 * Linear scrub across roughly the middle 60% of the block's scroll-through.
 */
export function aboutMotion() {
  const overlay = document.querySelector<HTMLElement>("[data-reveal-overlay]");
  if (!overlay) return;
  gsap.fromTo(
    overlay,
    { clipPath: "inset(0% 100% 0% 0%)" },
    {
      clipPath: "inset(0% 0% 0% 0%)",
      ease: ease.linear,
      scrollTrigger: {
        trigger: overlay.parentElement,
        start: "top 85%",
        end: "top 35%",
        scrub: true,
        invalidateOnRefresh: true,
      },
    },
  );
}

/** Feature row: seamless infinite marquee, constant speed, independent of scroll. */
export function marqueeMotion() {
  const track = document.querySelector<HTMLElement>("[data-marquee-track]");
  if (!track) return;
  // The track renders the set twice; one set's width is the loop distance.
  const loop = track.scrollWidth / 2;
  gsap.to(track, { x: -loop, duration: loop / marqueePxPerSecond, ease: ease.linear, repeat: -1 });
}

/**
 * Batch reveal: a short fade with a small rise as elements enter. Kept quick and shallow
 * (0.6s, 20px, tight stagger) so content is readable almost as soon as it is on screen and
 * nothing feels like it is lagging behind the scroll.
 */
export function revealMotion() {
  const items = q("[data-reveal]");
  gsap.set(items, { autoAlpha: 0, y: 20 });
  ScrollTrigger.batch(items, {
    start: "top 92%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: duration.reveal,
        ease: ease.out,
        stagger: 0.06,
        overwrite: true,
      }),
  });
  // Anything already past the trigger line when the page loads mid-way (a #hash link, a reload)
  // must not stay hidden.
  ScrollTrigger.refresh();
}

/** Hover: buttons scale to 1.05; destination images zoom gently inside their card. */
export function hoverMotion() {
  const cleanups: Array<() => void> = [];
  const on = (el: Element, type: string, fn: () => void) => {
    el.addEventListener(type, fn);
    cleanups.push(() => el.removeEventListener(type, fn));
  };
  // Growing = out, shrinking = in; the shrink is the quicker "collapse" duration.
  const grow = (el: Element, scale: number, d: number) =>
    gsap.to(el, { scale, duration: d, ease: ease.out, overwrite: "auto" });
  const shrink = (el: Element, d: number) => gsap.to(el, { scale: 1, duration: d, ease: ease.in, overwrite: "auto" });

  q("[data-hover-scale]").forEach((el) => {
    on(el, "mouseenter", () => grow(el, 1.05, duration.enter));
    on(el, "mouseleave", () => shrink(el, duration.expand));
  });

  q("[data-zoom-card]").forEach((card) => {
    const img = card.querySelector("[data-zoom-img]");
    if (!img) return;
    on(card, "mouseenter", () => grow(img, 1.08, duration.reveal));
    on(card, "mouseleave", () => shrink(img, duration.reveal * 0.6));
  });

  return () => cleanups.forEach((fn) => fn());
}
