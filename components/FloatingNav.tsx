"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useSmoothScroll } from "./SmoothScrollProvider";
import { FluxWebLogo } from "./FluxWebLogo";
import { ArrowUpRight, Minimize2, Sparkles, X } from "lucide-react";

const SECTION_LINKS = [
  { id: "what", label: "What", index: "01" },
  { id: "how", label: "How", index: "02" },
  { id: "why", label: "Why", index: "03" },
  { id: "where", label: "Sectors", index: "04" },
  { id: "faq", label: "FAQ", index: "05" },
];

const RECAP_CARDS = [
  {
    index: "N°01",
    title: "Bespoke Web Architecture",
    tag: "Next.js · Edge · TypeScript",
    bg: "#BEFF8B",
    text: "#3D1405",
    metric: "99.8 Lighthouse Score",
    summary:
      "Custom-engineered web platforms with zero-bloat component systems and sub-second global delivery.",
    anchor: "#what",
  },
  {
    index: "N°02",
    title: "Kinetic Scroll Storytelling",
    tag: "Lenis · GSAP · WebGL",
    bg: "#FFFFFF",
    text: "#3D1405",
    metric: "60 FPS Fluid Motion",
    summary:
      "Choreographed scroll-pinned narratives, liquid SVG filters, and tactile micro-interactions that captivate buyers.",
    anchor: "#how",
  },
  {
    index: "N°03",
    title: "Brand & Design Systems",
    tag: "Editorial UI · 3D Identity",
    bg: "#D5BAFB",
    text: "#3D1405",
    metric: "+214% Conversion Lift",
    summary:
      "High-contrast editorial typography, custom 3D visual assets, and tokenized design languages built to scale.",
    anchor: "#why",
  },
  {
    index: "N°04",
    title: "Sector-Specific Flagships",
    tag: "AI · Fintech · DeepTech · Luxury",
    bg: "#FF5C23",
    text: "#3D1405",
    metric: "42+ Enterprise Launches",
    summary:
      "Tailored digital flagships for category leaders in artificial intelligence, industrial automation, and commerce.",
    anchor: "#where",
  },
];

export function FloatingNav() {
  const { scrollTo, activeSection, openBriefModal } = useSmoothScroll();
  const [isRecapOpen, setIsRecapOpen] = useState(false);
  const pathname = usePathname();
  const isCleanMode = pathname?.startsWith("/clean");

  return (
    <>
      {/* Wembi-style Fullscreen Horizontal Fan-Out Recap / Menu Drawer */}
      <aside
        data-lenis-prevent
        className={`fixed inset-0 z-[75] bg-brand-umber/90 backdrop-blur-xl flex flex-col justify-between p-5 md:p-10 transition-all duration-500 ease-wembi-quart ${
          isRecapOpen
            ? "opacity-100 visible pointer-events-auto"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex items-center justify-between text-surface-light border-b border-surface-light/15 pb-4">
          <div className="flex items-center gap-3">
            <FluxWebLogo variant="badge" className="h-7 w-auto" />
            <span className="font-mono text-xs uppercase tracking-widest text-surface-light/70">
              STUDIO RECAP / CAPABILITIES DECK
            </span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href={isCleanMode ? "/" : "/clean"}
              onClick={() => setIsRecapOpen(false)}
              className="inline-flex items-center gap-2 rounded-full bg-surface-light/15 hover:bg-surface-light/25 border border-surface-light/20 px-4 py-2 text-xs font-mono uppercase tracking-wider text-surface-light transition-colors"
            >
              <Minimize2 className="w-3.5 h-3.5 text-brand-orange" />
              <span>{isCleanMode ? "Switch to Expressive" : "Switch to Clean"}</span>
            </Link>
            <button
              onClick={() => setIsRecapOpen(false)}
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2 text-xs font-mono font-bold uppercase tracking-wider text-brand-umber active:scale-95 transition-transform"
            >
              <span>Close</span>
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

        <div className="my-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 py-6 overflow-y-auto">
          {RECAP_CARDS.map((card, i) => (
            <div
              key={card.index}
              onClick={() => {
                setIsRecapOpen(false);
                scrollTo(card.anchor);
              }}
              style={{
                backgroundColor: card.bg,
                color: card.text,
                transitionDelay: isRecapOpen ? `${i * 65}ms` : "0ms",
              }}
              className={`group cursor-pointer rounded-[1.75rem] p-6 md:p-8 flex flex-col justify-between min-h-[290px] md:min-h-[380px] transition-all duration-500 ease-wembi-out hover:-translate-y-2 ${
                isRecapOpen
                  ? "translate-y-0 opacity-100"
                  : "translate-y-12 opacity-0"
              }`}
            >
              <div>
                <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest opacity-75 pb-4 border-b border-brand-umber/15">
                  <span>{card.index}</span>
                  <span>{card.tag}</span>
                </div>
                <h4 className="mt-6 text-2xl md:text-3xl font-light tracking-tight leading-tight">
                  {card.title}
                </h4>
                <p className="mt-4 text-sm leading-relaxed text-brand-umber/85">
                  {card.summary}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-brand-umber/15 flex items-center justify-between">
                <span className="font-mono text-xs font-semibold uppercase tracking-wider">
                  {card.metric}
                </span>
                <span className="w-9 h-9 rounded-full bg-brand-umber text-surface-light flex items-center justify-center group-hover:scale-110 transition-transform">
                  <ArrowUpRight className="w-4 h-4" />
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-surface-light/70 font-mono text-xs uppercase tracking-widest border-t border-surface-light/15 pt-4">
          <span>FLUXWEB — BESPOKE DIGITAL FLAGSHIPS</span>
          <span>SELECT ANY MODULE TO JUMP TO SECTION</span>
        </div>
      </aside>

      {/* Wembi-style Fixed Bottom Pill Navigation (.site-nav) */}
      <div className="site-nav-wrapper fixed bottom-4 md:bottom-6 inset-x-4 md:inset-x-8 z-[65] pointer-events-none flex items-center justify-between max-w-[1760px] mx-auto">
        {/* Left Section Jump Pill (Desktop) */}
        <nav
          aria-label="Section index navigation"
          className="hidden lg:flex items-center h-14 px-3 rounded-full bg-surface-light/65 backdrop-blur-xl border border-editorial pointer-events-auto shadow-sm"
        >
          <ul className="flex items-center gap-1 font-mono text-xs uppercase tracking-wider">
            {SECTION_LINKS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <li key={item.id}>
                  <button
                    onClick={() => scrollTo(`[data-anchor="${item.id}"]`)}
                    className={`relative px-4 py-2 rounded-full transition-all duration-300 flex items-center gap-2 ${
                      isActive
                        ? "text-brand-umber font-semibold bg-white/75"
                        : "text-brand-muted hover:text-brand-umber"
                    }`}
                  >
                    <span
                      className={`w-2 h-2 rounded-full bg-brand-orange transition-transform duration-300 ${
                        isActive ? "scale-100" : "scale-0"
                      }`}
                    />
                    <span className="wembi-link">
                      <span className="wembi-link-inner" data-label={item.label}>
                        {item.label}
                      </span>
                    </span>
                  </button>
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Primary Wembi Pill Navigation */}
        <nav
          aria-label="Primary navigation"
          className="w-full lg:w-auto lg:ml-auto flex items-center justify-between lg:justify-start h-14 p-1.5 rounded-full bg-surface-light/70 backdrop-blur-xl border border-editorial pointer-events-auto shadow-md"
        >
          <ul className="flex items-center justify-between w-full lg:w-auto gap-1 text-xs sm:text-sm font-medium">
            {/* Overview */}
            <li>
              <button
                onClick={() => scrollTo('[data-anchor="hero"]')}
                className="h-11 px-4 sm:px-6 rounded-full flex items-center gap-2 text-brand-umber hover:bg-white/60 transition-colors"
              >
                <span
                  className={`w-2 h-2 rounded-full bg-brand-orange transition-transform duration-300 ${
                    activeSection === "hero" ? "scale-100" : "scale-0"
                  }`}
                />
                <span className="wembi-link">
                  <span className="wembi-link-inner" data-label="Overview">
                    Overview
                  </span>
                </span>
              </button>
            </li>

            {/* Recap Drawer Trigger */}
            <li>
              <button
                onClick={() => setIsRecapOpen(true)}
                className="h-11 px-4 sm:px-6 rounded-full flex items-center gap-1.5 text-brand-umber hover:bg-white/60 transition-colors"
              >
                <span className="wembi-link">
                  <span className="wembi-link-inner" data-label="Recap">
                    Recap
                  </span>
                </span>
              </button>
            </li>

            {/* Mode Switcher: Expressive vs Clean */}
            <li>
              <Link
                href={isCleanMode ? "/" : "/clean"}
                data-cursor-label={isCleanMode ? "Expressive" : "Clean"}
                className="h-11 px-3.5 sm:px-5 rounded-full bg-white/80 hover:bg-white border border-editorial text-brand-umber font-mono text-[11px] sm:text-xs uppercase tracking-wider flex items-center gap-1.5 transition-all hover:scale-[0.98]"
                title={
                  isCleanMode
                    ? "Switch to Full Expressive Edition"
                    : "Switch to Simpler Clean Edition"
                }
              >
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                <span>{isCleanMode ? "Expressive" : "Clean View"}</span>
              </Link>
            </li>

            {/* Dark Highlighted Pill (Showcase / Work) */}
            <li className="hidden sm:block">
              <button
                onClick={() => scrollTo('[data-anchor="where"]')}
                className="h-11 px-4 sm:px-5 rounded-full bg-brand-umber text-brand-orange font-mono text-xs uppercase tracking-wider flex items-center gap-1.5 hover:scale-[0.97] active:scale-[0.93] transition-transform"
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Work</span>
              </button>
            </li>

            {/* Atomic Orange Highlighted CTA Pill */}
            <li>
              <button
                onClick={openBriefModal}
                data-cursor-label="Brief"
                className="h-11 px-5 sm:px-7 rounded-full bg-brand-orange text-brand-umber font-bold tracking-tight flex items-center gap-1.5 hover:scale-[0.97] active:scale-[0.94] transition-transform"
              >
                <span>Contact</span>
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
