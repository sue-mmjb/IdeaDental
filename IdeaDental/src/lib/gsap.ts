"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import { bezier, duration, ease } from "./motion-tokens";

// Register once, client-side only. Every component imports gsap from here.
// Scrolling is native: no ScrollSmoother, so the browser (and the user's finger) keeps control.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, CustomEase, useGSAP);
  for (const [name, points] of Object.entries(bezier)) CustomEase.create(name, points);
  gsap.defaults({ ease: ease.out, duration: duration.enter });
}

export const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";

export { gsap, ScrollTrigger, useGSAP };
