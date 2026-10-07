"use client";

import Image from "next/image";
import { useEffect, useRef, useState, useSyncExternalStore } from "react";
import { createPortal } from "react-dom";
import { business, nav } from "@/lib/content";
import { gsap, useGSAP } from "@/lib/gsap";
import { duration, ease } from "@/lib/motion-tokens";
import { PrimaryButton } from "../ui";
import { Menu, Phone } from "../icons";

export default function Header() {
  const [open, setOpen] = useState(false);
  // true on the client only — the portal target (document.body) doesn't exist during SSR.
  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );
  const panel = useRef<HTMLDivElement>(null);
  const toggle = useRef<HTMLButtonElement>(null);

  // Menu open/close: panel slides with house eases; links follow on open.
  useGSAP(
    () => {
      const el = panel.current;
      if (!el) return;
      const links = el.querySelectorAll("[data-menu-item]");
      if (open) {
        gsap.set(el, { display: "flex" });
        gsap.fromTo(el, { autoAlpha: 0, yPercent: -4 }, { autoAlpha: 1, yPercent: 0, duration: duration.enter, ease: ease.out });
        gsap.fromTo(
          links,
          { autoAlpha: 0, y: 12 },
          { autoAlpha: 1, y: 0, duration: duration.enter, ease: ease.out, stagger: 0.04, delay: 0.05 },
        );
      } else {
        gsap.to(el, {
          autoAlpha: 0,
          yPercent: -4,
          duration: duration.collapse,
          ease: ease.in,
          onComplete: () => gsap.set(el, { display: "none" }),
        });
      }
    },
    { dependencies: [open, mounted] },
  );

  // Escape closes the menu and returns focus to the toggle.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
    };
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="container-x relative pt-6 md:pt-8">
      <div data-hero-nav className="flex items-center justify-between gap-6 border-b border-white/25 pb-5">
        <a href="#top" aria-label="Idea Dental home" className="shrink-0">
          <Image src="/images/logo-white.png" alt="Idea Dental" width={476} height={176} className="h-10 w-auto md:h-11" preload />
        </a>
        <nav aria-label="Primary" className="hidden items-center gap-7 text-[15px] text-white/90 lg:flex">
          {nav.map((item) => (
            <a key={item.href} href={item.href} className="transition-colors hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          {/* Wrapper owns visibility — the button's own inline-flex would otherwise beat `hidden`. */}
          <span className="hidden sm:block">
            <PrimaryButton href="#contact" className="px-6 py-2.5">
              Request an Appointment
            </PrimaryButton>
          </span>
          <button
            ref={toggle}
            type="button"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((o) => !o)}
            className="grid size-12 place-items-center rounded-full border border-white/30 text-white lg:hidden"
          >
            <Menu open={open} />
          </button>
        </div>
      </div>

      {/* Portal: #smooth-content is transformed, so a fixed panel must live outside it. */}
      {mounted &&
        createPortal(
          <div
            ref={panel}
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Menu"
            className="fixed inset-0 z-50 hidden flex-col bg-night px-5 pb-8 pt-24 text-white"
            style={{ visibility: "hidden" }}
          >
            <button
              type="button"
              aria-label="Close menu"
              onClick={() => setOpen(false)}
              className="absolute right-5 top-6 grid size-12 place-items-center rounded-full border border-white/30"
            >
              <Menu open />
            </button>
            <nav aria-label="Mobile" className="flex flex-col">
              {nav.map((item) => (
                <a
                  key={item.href}
                  data-menu-item
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="border-b border-white/10 py-4 font-display text-[28px] font-semibold tracking-[-0.02em]"
                >
                  {item.label}
                </a>
              ))}
            </nav>
            <div data-menu-item className="mt-auto flex flex-col gap-3">
              <PrimaryButton href="#contact" onClick={() => setOpen(false)} className="py-4">
                Request an Appointment
              </PrimaryButton>
              <a href={business.phoneHref} className="inline-flex items-center justify-center gap-2 py-3 text-white/80">
                <Phone /> Call or text {business.phone}
              </a>
            </div>
          </div>,
          document.body,
        )}
    </header>
  );
}
