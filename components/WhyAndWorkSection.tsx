"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from "./SectionHeader";
import { FluxWebLogo } from "./FluxWebLogo";
import { useSmoothScroll } from "./SmoothScrollProvider";
import { ArrowUpRight, CheckCircle2, Globe } from "lucide-react";

const WHY_PILLS = [
  { label: "Effective", bg: "#FFFFFF", color: "#3D1405", radius: "2rem" },
  { label: "Distinctive", bg: "#BEFF8B", color: "#3D1405", radius: "9999px" },
  { label: "Performant", bg: "#D5BAFB", color: "#3D1405", radius: "2rem" },
  { label: "Conversion-First", bg: "#0B0B0D", color: "#EBFBFF", radius: "9999px" },
];

interface SectorCaseStudy {
  id: string;
  sector: string;
  client: string;
  headline: string;
  summary: string;
  accent: string;
  deliverables: string[];
  metrics: { value: string; label: string }[];
  liveUrlLabel: string;
}

const SECTORS: SectorCaseStudy[] = [
  {
    id: "ai-saas",
    sector: "AI & SaaS",
    client: "Synthetix Cloud · Neural Infrastructure",
    headline: "Turning developer documentation into a kinetic product showroom.",
    summary:
      "We redesigned Synthetix's flagship web presence with real-time interactive latency benchmarks, Lenis scroll-pinned architecture diagrams, and an instant sandbox onboarding flow.",
    accent: "#BEFF8B",
    deliverables: [
      "Bespoke Design System",
      "Interactive Telemetry Grid",
      "Next.js Edge + MDX Docs",
    ],
    metrics: [
      { value: "+240%", label: "Enterprise Trial Signups" },
      { value: "0.32s", label: "Global Edge LCP" },
    ],
    liveUrlLabel: "synthetix.fluxweb.studio",
  },
  {
    id: "industrial",
    sector: "Industrial & IoT",
    client: "Kinetix Robotics · Autonomous Digital Twins",
    headline: "Blueprint-grade web engineering for physical automation leaders.",
    summary:
      "Inspired by reference-grade industrial storytelling, we built a 60fps 3D product configurator and scroll-scrubbed hardware breakdown that shortened enterprise sales cycles.",
    accent: "#FF5C23",
    deliverables: [
      "3D WebGL Asset Pipeline",
      "Scroll-Pinned Stepper",
      "Multi-Locale Headless CMS",
    ],
    metrics: [
      { value: "3.4x", label: "Qualified Architecture Briefs" },
      { value: "99.9%", label: "Lighthouse Performance" },
    ],
    liveUrlLabel: "kinetix.fluxweb.studio",
  },
  {
    id: "fintech",
    sector: "Fintech & Web3",
    client: "Aether Treasury · Institutional Liquidity",
    headline: "Editorial authority meets cryptographic precision.",
    summary:
      "For Aether's Series B launch, FluxWeb engineered a high-contrast editorial flagship with live yield simulations, SOC2 trust verification modules, and instantaneous page transitions.",
    accent: "#D5BAFB",
    deliverables: [
      "Interactive Yield Simulator",
      "Editorial Brand Identity",
      "Real-Time API Telemetry",
    ],
    metrics: [
      { value: "$1.8B+", label: "Institutional TVL Onboarded" },
      { value: "-58%", label: "Bounce Rate Reduction" },
    ],
    liveUrlLabel: "aether.fluxweb.studio",
  },
  {
    id: "commerce",
    sector: "Design Commerce",
    client: "Atelier Forma · Architectural Objects",
    headline: "Tactile storytelling and zero-latency headless checkout.",
    summary:
      "We crafted an editorial flagship store with smooth momentum galleries, liquid vector transitions, and sub-second Shopify Storefront API cart orchestration.",
    accent: "#FF5C23",
    deliverables: [
      "Headless Storefront",
      "Custom Gesture Galleries",
      "3D Object Inspection",
    ],
    metrics: [
      { value: "+176%", label: "Average Order Conversion" },
      { value: "60 FPS", label: "Mobile Scroll Fluidity" },
    ],
    liveUrlLabel: "forma.fluxweb.studio",
  },
];

export function WhyAndWorkSection() {
  const whyContainerRef = useRef<HTMLDivElement>(null);
  const pillRefs = useRef<(HTMLLIElement | null)[]>([]);
  const [activeSectorIdx, setActiveSectorIdx] = useState<number>(0);
  const { openBriefModal } = useSmoothScroll();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const container = whyContainerRef.current;
    if (!container) return;

    const ctx = gsap.context(() => {
      pillRefs.current.forEach((pill, i) => {
        if (!pill) return;
        gsap.fromTo(
          pill,
          {
            yPercent: (i - 1.5) * -48,
            scale: 0.68,
            force3D: true,
          },
          {
            yPercent: 0,
            scale: 1,
            force3D: true,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              start: "top 80%",
              end: "bottom 40%",
              scrub: true,
            },
          }
        );
      });
    }, container);

    return () => ctx.revert();
  }, []);

  const currentSector = SECTORS[activeSectorIdx];

  return (
    <>
      {/* n.003 / WHY — Wembi .section-text-list 4-Pill Stack */}
      <section data-anchor="why" className="relative px-[var(--offset)] py-10">
        <div
          ref={whyContainerRef}
          style={{
            background:
              "radial-gradient(circle at 50% 50%, rgba(255, 92, 35, 0.25) 0%, rgba(200, 243, 255, 0.08) 45%, #160702 75%)",
          }}
          className="relative w-full min-h-[90vh] md:min-h-[100vh] rounded-[2rem] md:rounded-[2.5rem] bg-[#160702] text-surface-light overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-14 border border-editorial shadow-2xl"
        >
          {/* Section Header n.003 / WHY */}
          <div className="relative z-10">
            <SectionHeader index="n.003" title="WHY" variant="orange" />
          </div>

          {/* 4-Pill Stack (Hardware-accelerated 3D transforms) */}
          <div className="relative z-10 my-auto py-12 flex flex-col items-center justify-center">
            <ul className="flex flex-col items-center justify-center gap-2">
              {WHY_PILLS.map((pill, idx) => (
                <li
                  key={pill.label}
                  ref={(el) => {
                    pillRefs.current[idx] = el;
                  }}
                  style={{
                    backgroundColor: pill.bg,
                    color: pill.color,
                    borderRadius: pill.radius,
                    zIndex: WHY_PILLS.length - idx,
                  }}
                  className="px-10 sm:px-16 md:px-24 py-6 sm:py-9 md:py-12 shadow-xl flex items-center justify-center will-change-transform"
                >
                  <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight whitespace-nowrap">
                    {pill.label}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Bottom Metadata Bar */}
          <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-canvas/70 border-t border-canvas/15 pt-4">
            <span>ZERO TEMPLATES · 100% BESPOKE ARCHITECTURE</span>
            <span>BUILT FOR LONG-TERM BRAND EQUITY</span>
          </div>
        </div>
      </section>

      {/* n.004 / WHERE — Wembi .accordion-list Client Sectors & Interactive Case Studies */}
      <section
        data-anchor="where"
        className="relative py-20 md:py-32 px-[var(--offset)]"
      >
        <div className="max-w-[1680px] mx-auto">
          <SectionHeader index="n.004" title="WHERE" variant="dark" />

          {/* Centered Square Preview Window (.accordion-list__media) + Case Study Details */}
          <div className="mt-14 md:mt-24 grid grid-cols-1 lg:grid-cols-12 gap-10 items-center max-w-6xl mx-auto">
            {/* Square Rounded Media Viewport */}
            <div
              style={{
                background: `radial-gradient(circle at 85% 85%, ${currentSector.accent}33 0%, #160702 65%)`,
              }}
              className="lg:col-span-5 aspect-square w-full max-w-[440px] mx-auto rounded-[2rem] bg-[#160702] text-surface-light p-7 sm:p-9 flex flex-col justify-between relative overflow-hidden shadow-xl border border-editorial"
            >
              <div className="relative z-10 flex items-center justify-between font-mono text-xs text-canvas/70 border-b border-canvas/15 pb-3">
                <span className="inline-flex items-center gap-1.5">
                  <Globe className="w-3.5 h-3.5 text-brand-orange" />
                  {currentSector.liveUrlLabel}
                </span>
                <FluxWebLogo variant="badge" className="h-5 w-auto" />
              </div>

              <div className="relative z-10 my-auto py-4 flex flex-col items-center text-center">
                <div className="w-32 h-32 sm:w-40 sm:h-40 mb-4">
                  <FluxWebLogo variant="complete" className="w-full h-full" />
                </div>
                <span
                  className="px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest text-brand-umber mb-2"
                  style={{ backgroundColor: currentSector.accent }}
                >
                  {currentSector.client}
                </span>
                <h4 className="text-xl sm:text-2xl font-light text-surface-light leading-snug">
                  {currentSector.headline}
                </h4>
              </div>

              <div className="relative z-10 grid grid-cols-2 gap-3 pt-3 border-t border-canvas/15">
                {currentSector.metrics.map((m) => (
                  <div key={m.label}>
                    <div
                      className="text-2xl sm:text-3xl font-light"
                      style={{ color: currentSector.accent }}
                    >
                      {m.value}
                    </div>
                    <div className="font-mono text-[10px] uppercase tracking-wider text-canvas/70">
                      {m.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Selected Sector Breakdown */}
            <div className="lg:col-span-7 space-y-6 px-2">
              <div className="font-mono text-xs uppercase tracking-widest text-brand-muted">
                SELECTED INDUSTRY CASE STUDY // 0{activeSectorIdx + 1}
              </div>
              <h3 className="text-3xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-umber leading-tight">
                {currentSector.headline}
              </h3>
              <p className="text-base sm:text-lg text-brand-umber/85 leading-relaxed">
                {currentSector.summary}
              </p>

              <div className="flex flex-wrap gap-2.5 pt-2">
                {currentSector.deliverables.map((del) => (
                  <span
                    key={del}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white/70 border border-editorial font-mono text-xs text-brand-umber"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-brand-orange" />
                    {del}
                  </span>
                ))}
              </div>

              <div className="pt-4">
                <button
                  onClick={openBriefModal}
                  className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3.5 text-brand-umber font-bold font-mono text-xs uppercase tracking-wider active:scale-[0.98] transition-transform"
                >
                  <span>Commission a {currentSector.sector} Flagship</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>

          {/* Wembi-style Oversized Typographic Accordion List (.accordion__list) */}
          <div className="mt-16 md:mt-24 max-w-6xl mx-auto border-t border-brand-umber">
            <ul className="divide-y divide-brand-umber">
              {SECTORS.map((item, idx) => {
                const isActive = idx === activeSectorIdx;
                return (
                  <li key={item.id} className="relative">
                    <button
                      onClick={() => setActiveSectorIdx(idx)}
                      onMouseEnter={() => setActiveSectorIdx(idx)}
                      data-cursor-label="Inspect"
                      className={`w-full py-6 sm:py-8 md:py-10 px-4 sm:px-8 flex items-center justify-between text-center transition-colors duration-300 rounded-2xl ${
                        isActive
                          ? "bg-white/75 shadow-sm"
                          : "hover:bg-white/40"
                      }`}
                    >
                      <span className="font-mono text-xs sm:text-sm uppercase tracking-widest text-brand-muted">
                        0{idx + 1}
                      </span>

                      <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight text-brand-umber">
                        {item.sector}
                      </span>

                      <span
                        className="px-3.5 py-1.5 rounded-full font-mono text-xs font-bold uppercase tracking-wider text-brand-umber"
                        style={{
                          backgroundColor: isActive
                            ? item.accent
                            : "rgba(255,255,255,0.6)",
                        }}
                      >
                        {isActive ? "Active" : "View"}
                      </span>
                    </button>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
