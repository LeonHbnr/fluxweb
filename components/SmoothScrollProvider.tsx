"use client";

import React, { createContext, useContext, useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

interface SmoothScrollContextValue {
  scrollTo: (target: string | number | HTMLElement) => void;
  activeSection: string;
  openBriefModal: () => void;
  closeBriefModal: () => void;
  isBriefModalOpen: boolean;
}

const SmoothScrollContext = createContext<SmoothScrollContextValue>({
  scrollTo: () => {},
  activeSection: "hero",
  openBriefModal: () => {},
  closeBriefModal: () => {},
  isBriefModalOpen: false,
});

export const useSmoothScroll = () => useContext(SmoothScrollContext);

export function SmoothScrollProvider({ children }: { children: React.ReactNode }) {
  const lenisRef = useRef<Lenis | null>(null);
  const [activeSection, setActiveSection] = useState<string>("hero");
  const [isBriefModalOpen, setIsBriefModalOpen] = useState(false);

  useEffect(() => {
    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      wheelMultiplier: 1,
    });

    lenisRef.current = lenis;

    let lastScroll = 0;
    let isScrollingDown = false;

    lenis.on("scroll", (e: { scroll: number; direction: number }) => {
      ScrollTrigger.update();

      const html = document.documentElement;
      const shouldHide =
        e.scroll > 120 && e.direction === 1 && e.scroll > lastScroll + 2;
      const shouldShow = e.direction === -1 || e.scroll <= 120;

      if (shouldHide && !isScrollingDown) {
        isScrollingDown = true;
        html.classList.add("scrolling-down");
        html.classList.remove("scrolling-up");
      } else if (shouldShow && isScrollingDown) {
        isScrollingDown = false;
        html.classList.remove("scrolling-down");
        html.classList.add("scrolling-up");
      }
      lastScroll = e.scroll;
    });

    const updateTicker = (time: number) => {
      lenis.raf(time * 1000);
    };

    gsap.ticker.add(updateTicker);
    gsap.ticker.lagSmoothing(0);

    const anchors = ["hero", "what", "how", "why", "where", "faq", "contact"];
    const observers: IntersectionObserver[] = [];

    anchors.forEach((anchor) => {
      const el = document.querySelector(`[data-anchor="${anchor}"]`);
      if (!el) return;
      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              setActiveSection(anchor);
            }
          });
        },
        { rootMargin: "-35% 0px -45% 0px", threshold: 0.01 }
      );
      obs.observe(el);
      observers.push(obs);
    });

    return () => {
      observers.forEach((o) => o.disconnect());
      gsap.ticker.remove(updateTicker);
      lenis.destroy();
    };
  }, []);

  const scrollTo = (target: string | number | HTMLElement) => {
    if (lenisRef.current) {
      lenisRef.current.scrollTo(target, {
        duration: 1.25,
        easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      });
    } else if (typeof target === "string") {
      const el = document.querySelector(target);
      el?.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <SmoothScrollContext.Provider
      value={{
        scrollTo,
        activeSection,
        openBriefModal: () => setIsBriefModalOpen(true),
        closeBriefModal: () => setIsBriefModalOpen(false),
        isBriefModalOpen,
      }}
    >
      {/* Lightweight SVG Gooey Filter for the Twin Bullets */}
      <svg
        className="fixed w-0 h-0 pointer-events-none opacity-0"
        aria-hidden="true"
      >
        <defs>
          <filter id="goo-meta" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur
              in="SourceGraphic"
              stdDeviation="6"
              result="blur"
            />
            <feColorMatrix
              in="blur"
              type="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8"
              result="goo"
            />
            <feComposite in="SourceGraphic" in2="goo" operator="atop" />
          </filter>
        </defs>
      </svg>
      {children}
    </SmoothScrollContext.Provider>
  );
}
