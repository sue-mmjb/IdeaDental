"use client";

import { gsap, ScrollTrigger } from "./gsap";
import { duration, ease, marqueePxPerSecond } from "./motion-tokens";

/*
 * Scroll choreography for the whole page. Each function is called from <MotionProvider>
 * inside a gsap.matchMedia() handler, AFTER ScrollSmoother exists, so every ScrollTrigger
 * picks up the smoother's scroller proxy and transform-based pinning.
 *
 * Follows the house motion system (see motion-tokens.ts): scroll-scrubbed = linear with
 * `scrub: true`; time-based entrances = ease.out; exits = ease.in. Transforms / opacity /
 * clip-path only, so everything stays on the compositor.
 */

const q = <T extends Element = HTMLElement>(sel: string, root: ParentNode = document) =>
  gsap.utils.toArray<T>(root.querySelectorAll(sel));

/** Hero: load-in timeline + watermark parallax (scrub) so the wordmark drifts slower than the page. */
export function heroMotion() {
  const hero = document.querySelector<HTMLElement>("[data-hero]");
  if (!hero) return;

  const intro = gsap.timeline({ defaults: { ease: ease.out, duration: duration.intro } });
  intro
    .from(hero.querySelector("[data-hero-bg]"), { scale: 1.15, duration: 1.8 }, 0)
    .from(hero.querySelector("[data-hero-watermark-inner]"), { yPercent: 30, autoAlpha: 0 }, 0.15)
    .from(q("[data-hero-nav] > *", hero), { y: -16, autoAlpha: 0, duration: 0.7, stagger: 0.08 }, 0.3)
    .from(q("[data-hero-line]", hero), { yPercent: 110, duration: 1, stagger: 0.12 }, 0.45)
    .from(hero.querySelector("[data-hero-search]"), { y: 30, autoAlpha: 0, duration: 0.9 }, 0.75);

  // Outer wrapper carries the scrub so it never fights the intro tween on the inner element.
  gsap.to(hero.querySelector("[data-hero-watermark]"), {
    yPercent: 70,
    ease: ease.linear,
    scrollTrigger: { trigger: hero, start: "top top", end: "bottom top", scrub: true },
  });
}

/**
 * About: house text-colour reveal — a dark overlay layer, stacked exactly on a muted base,
 * is uncovered by ONE vertical clip line sweeping left→right (so shorter lines finish first).
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
      scrollTrigger: { trigger: overlay.parentElement, start: "top 80%", end: "bottom 40%", scrub: true },
    },
  );
}

/** Partner row: seamless infinite marquee, constant speed, independent of scroll. */
export function marqueeMotion() {
  const track = document.querySelector<HTMLElement>("[data-marquee-track]");
  if (!track) return;
  // The track renders the logo set twice; one set's width is the loop distance.
  const loop = track.scrollWidth / 2;
  gsap.to(track, { x: -loop, duration: loop / marqueePxPerSecond, ease: ease.linear, repeat: -1 });
}

/** Batch reveal: opacity 0→1, y 50→0, stagger 0.15 as elements enter. */
export function revealMotion() {
  const items = q("[data-reveal]");
  gsap.set(items, { autoAlpha: 0, y: 50 });
  ScrollTrigger.batch(items, {
    start: "top 88%",
    once: true,
    onEnter: (batch) =>
      gsap.to(batch, {
        autoAlpha: 1,
        y: 0,
        duration: duration.reveal,
        ease: ease.out,
        stagger: 0.15,
        overwrite: true,
      }),
  });

  // Footer wordmark: letters rise out of a mask.
  const letters = q("[data-wordmark-letter]");
  if (letters.length) {
    gsap.from(letters, {
      yPercent: 100,
      duration: duration.intro,
      stagger: 0.06,
      ease: ease.out,
      scrollTrigger: { trigger: letters[0].parentElement, start: "top 92%" },
    });
  }

  // Community floats drift at different depths.
  q("[data-float]").forEach((el) => {
    const depth = Number(el.dataset.float) || 1;
    gsap.fromTo(
      el,
      { y: 40 * depth },
      {
        y: -40 * depth,
        ease: ease.linear,
        scrollTrigger: { trigger: el.parentElement, start: "top bottom", end: "bottom top", scrub: true },
      },
    );
  });
}

export const CAROUSEL_ID = "stays-carousel";
export const CAROUSEL_EVENT = "staygo:carousel";

/** Carousel: pin the section and translate the track on X by scroll depth. */
export function carouselMotion() {
  const section = document.querySelector<HTMLElement>("[data-carousel]");
  const viewport = section?.querySelector<HTMLElement>("[data-carousel-viewport]");
  const track = section?.querySelector<HTMLElement>("[data-carousel-track]");
  if (!section || !viewport || !track) return;

  const distance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
  let last = -1;

  const tl = gsap.timeline({
    defaults: { ease: ease.linear },
    scrollTrigger: {
      id: CAROUSEL_ID,
      trigger: section,
      start: "top top",
      end: () => `+=${distance()}`,
      pin: true,
      scrub: true,
      invalidateOnRefresh: true,
      onUpdate: (self) => {
        // Only notify the arrows when progress moves meaningfully.
        const p = Math.round(self.progress * 100) / 100;
        if (p !== last) {
          last = p;
          window.dispatchEvent(new CustomEvent(CAROUSEL_EVENT, { detail: p }));
        }
      },
    },
  });

  tl.to(track, { x: () => -distance() }, 0);
  // Optional inner image parallax (skipped for photos with burned-in captions, e.g. before/after).
  const parallax = q("[data-stay-img]", track);
  if (parallax.length) tl.fromTo(parallax, { xPercent: -6 }, { xPercent: 6 }, 0);
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
