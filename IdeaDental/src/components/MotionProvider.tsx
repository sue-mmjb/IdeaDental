"use client";

import { useRef, type ReactNode } from "react";
import { gsap, ScrollTrigger, useGSAP, MOTION_OK, REDUCED_MOTION } from "@/lib/gsap";
import { aboutMotion, heroMotion, hoverMotion, marqueeMotion, revealMotion } from "@/lib/choreography";

/**
 * Owns every scroll-driven animation. Scrolling itself is native (no smoother, no pinning):
 * sections reveal with a short fade as they enter, and that is the extent of it, so the page
 * feels as quick as the browser's own scroll on every device.
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  const root = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        { motion: MOTION_OK, reduce: REDUCED_MOTION, hover: "(hover: hover) and (pointer: fine)" },
        (ctx) => {
          const { motion, hover } = ctx.conditions as { motion: boolean; hover: boolean };
          let removeHover: (() => void) | undefined;

          if (motion) {
            heroMotion();
            aboutMotion();
            marqueeMotion();
            revealMotion();
            if (hover) removeHover = hoverMotion();
          }

          // Fonts and lazy images land after the first measurement; re-measure once they settle.
          const settle = () => ScrollTrigger.refresh();
          document.fonts?.ready.then(settle);
          if (document.readyState === "complete") settle();
          else window.addEventListener("load", settle);

          return () => {
            removeHover?.();
            window.removeEventListener("load", settle);
          };
        },
      );
    },
    { scope: root },
  );

  return <div ref={root}>{children}</div>;
}
