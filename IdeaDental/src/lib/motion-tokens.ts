/**
 * Motion tokens — ported from the project's house motion system
 * (../../services-motion/lib/motion-config.ts, derived in services-motion/analysis/easing.md
 * and motion-system/ANALYSIS.md). Change values here, not in components.
 *
 * Working rules carried over:
 *  - Four curves only. Entering / growing → `out`; exiting / shrinking → `in`;
 *    transforming in place → `inOut`; loops and anything scroll-scrubbed → `linear`.
 *  - If something needs different timing it needs a different *duration*, not a new curve.
 *  - No springs, no overshoot.
 */

export const ease = {
  out: "house.out", // cubic-bezier(0.16, 1, 0.3, 1)
  in: "house.in", // cubic-bezier(0.7, 0, 1, 1)
  inOut: "house.inOut", // cubic-bezier(0.65, 0, 0.35, 1)
  linear: "none",
} as const;

/** Bezier control points registered with CustomEase under the names above. */
export const bezier = {
  "house.out": "0.16,1,0.3,1",
  "house.in": "0.7,0,1,1",
  "house.inOut": "0.65,0,0.35,1",
} as const;

export const duration = {
  /** Small UI element arriving (row append, hover grow). */
  enter: 0.3,
  /** Active item collapsing — quicker than expand so it's out of the way first. */
  collapse: 0.14,
  /** Item expanding into its active state. */
  expand: 0.2,
  /** Icon transform in place (chevron flip). */
  iconMorph: 0.2,
  /** Section-scale reveal — same `out` curve, longer travel. */
  reveal: 0.9,
  /** Hero load-in pieces. */
  intro: 1.2,
} as const;

export const delay = {
  /** Expanding content waits for its container to start making room. */
  expandContent: 0.05,
} as const;

export const distance = {
  /** Content shift inside an expanding/collapsing item. */
  contentShift: 8,
} as const;

/** Infinite logo marquee speed (motion-system/ANALYSIS.md §B.1). */
export const marqueePxPerSecond = 60;
