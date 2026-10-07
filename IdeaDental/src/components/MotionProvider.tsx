"use client";

import { useRef, type ReactNode } from "react";
import { gsap, ScrollSmoother, ScrollTrigger, useGSAP, MOTION_OK, REDUCED_MOTION } from "@/lib/gsap";
import {
  aboutMotion,
  carouselMotion,
  heroMotion,
  hoverMotion,
  marqueeMotion,
  revealMotion,
} from "@/lib/choreography";

/**
 * Owns ScrollSmoother and every scroll-driven animation. Creating the smoother first and the
 * ScrollTriggers after it is required for correct pinning, which is why the choreography lives
 * here rather than in each section (React runs child effects before parent effects).
 */
export default function MotionProvider({ children }: { children: ReactNode }) {
  const wrapper = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const mm = gsap.matchMedia();

      mm.add(
        { motion: MOTION_OK, reduce: REDUCED_MOTION, hover: "(hover: hover) and (pointer: fine)" },
        (ctx) => {
          const { motion, hover } = ctx.conditions as { motion: boolean; hover: boolean };
          let removeHover: (() => void) | undefined;

          if (motion) {
            // A phone's address bar hides and reappears as you scroll, which resizes the
            // viewport. Treated as a real resize it re-measures every pin mid-scroll, and the
            // page ends up with the gallery slipping its pin and dead space past the footer.
            // Ignoring it, and letting GSAP own touch scrolling, keeps the measurements still.
            ScrollTrigger.config({ ignoreMobileResize: true });

            ScrollSmoother.create({
              wrapper: "#smooth-wrapper",
              content: "#smooth-content",
              smooth: 1.1,
              smoothTouch: 0.1,
              effects: false,
              normalizeScroll: true,
            });
            heroMotion();
            aboutMotion();
            carouselMotion();
            marqueeMotion();
            revealMotion();
            if (hover) removeHover = hoverMotion();
          }

          // In-page anchors: ScrollSmoother owns scrolling, so native #hash jumps must go through it.
          const onAnchor = (e: MouseEvent) => {
            const link = (e.target as Element | null)?.closest?.('a[href^="#"]');
            const id = link?.getAttribute("href")?.slice(1);
            const target = id ? document.getElementById(id) : null;
            const smoother = ScrollSmoother.get();
            if (!target || !smoother) return;
            e.preventDefault();
            smoother.scrollTo(target, true, "top top");
            history.replaceState(null, "", `#${id}`);
          };
          document.addEventListener("click", onAnchor);

          // Fonts and lazy images land after the first measurement, so the page height the
          // smoother caches is a guess until they do. Re-measure once they have settled.
          const settle = () => ScrollTrigger.refresh();
          document.fonts?.ready.then(settle);
          if (document.readyState === "complete") settle();
          else window.addEventListener("load", settle);

          return () => {
            removeHover?.();
            document.removeEventListener("click", onAnchor);
            window.removeEventListener("load", settle);
          };
        },
      );
    },
    { scope: wrapper },
  );

  return (
    <div id="smooth-wrapper" ref={wrapper}>
      <div id="smooth-content">{children}</div>
    </div>
  );
}
