"use client";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollSmoother } from "gsap/ScrollSmoother";
import { CustomEase } from "gsap/CustomEase";
import { useGSAP } from "@gsap/react";
import { bezier, duration, ease } from "./motion-tokens";

// Register once, client-side only. Every component imports gsap from here.
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger, ScrollSmoother, CustomEase, useGSAP);
  for (const [name, points] of Object.entries(bezier)) CustomEase.create(name, points);
  gsap.defaults({ ease: ease.out, duration: duration.enter });
}

export const REDUCED_MOTION = "(prefers-reduced-motion: reduce)";
export const MOTION_OK = "(prefers-reduced-motion: no-preference)";

export { gsap, ScrollTrigger, ScrollSmoother, useGSAP };
