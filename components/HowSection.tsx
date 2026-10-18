"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from "./SectionHeader";
import { FluxWebLogo } from "./FluxWebLogo";
import { Code2, Cpu, Eye, Gauge, Layers, Sparkles } from "lucide-react";

interface StepItem {
  category: string;
  description: string;
  tag: string;
  metrics: { label: string; value: string }[];
  accentBg: string;
  visualType: "blueprint" | "kinetic" | "edge" | "telemetry" | "cms" | "ai";
}

const ARCHITECTURE_STEPS: StepItem[] = [
  {
    category: "Brand & Grid",
    description:
      "Editorial design systems, custom variable typography, and 1px architectural grid tokenization tailored to your brand positioning.",
    tag: "STEP 01.A / EDITORIAL SYSTEM",
    metrics: [
      { label: "Contrast Ratio", value: "13.6 : 1 WCAG AAA" },
      { label: "Design Tokens", value: "100% Typed CSS/TW" },
    ],
    accentBg: "#FF5C23",
    visualType: "blueprint",
  },
  {
    category: "3D & WebGL",
    description:
      "Custom 3D fluid sculptures, interactive shaders, and kinetic vector graphics that respond organically to cursor and scroll velocity.",
    tag: "STEP 01.B / SPATIAL IDENTITY",
    metrics: [
      { label: "Frame Budget", value: "< 6.2ms GPU Time" },
      { label: "Asset Payload", value: "Draco / SVG Vector" },
    ],
    accentBg: "#BEFF8B",
    visualType: "kinetic",
  },
  {
    category: "Edge Application",
    description:
      "Full-stack Next.js App Router engineering with server components, instant route transitions, and global CDN edge caching.",
    tag: "STEP 01.C / PRODUCTION ENGINE",
    metrics: [
      { label: "Lighthouse Perf", value: "99.8 / 100" },
      { label: "Core Web Vitals", value: "Zero CLS / <40ms INP" },
    ],
    accentBg: "#D5BAFB",
    visualType: "edge",
  },
];

const FUNCTIONING_STEPS: StepItem[] = [
  {
    category: "Scroll Narrative",
    description:
      "Real-time conversion of complex B2B value propositions into choreographed, scroll-pinned visual chapters that hold executive attention.",
    tag: "STEP 02.A / LENIS + GSAP SYNC",
    metrics: [
      { label: "Dwell Time", value: "+168% Avg Session" },
      { label: "Scroll Depth", value: "89% Full-Page Read" },
    ],
    accentBg: "#BEFF8B",
    visualType: "telemetry",
  },
  {
    category: "Full Control CMS",
    description:
      "Visual headless CMS integration empowering marketing teams to launch new pages, case studies, and languages without touching code.",
    tag: "STEP 02.B / COMPOSABLE STUDIO",
    metrics: [
      { label: "Publish Speed", value: "Instant ISR Revalidation" },
      { label: "Autonomy", value: "100% Modular Blocks" },
    ],
    accentBg: "#FF5C23",
    visualType: "cms",
  },
  {
    category: "Conversion AI",
    description:
      "Predictive funnel telemetry, interactive ROI calculators, and frictionless booking flows engineered to maximize qualified pipeline.",
    tag: "STEP 02.C / REVENUE ARCHITECTURE",
    metrics: [
      { label: "Demo Requests", value: "3.1x Pipeline Lift" },
      { label: "Lead Qualification", value: "Real-Time Routing" },
    ],
    accentBg: "#D5BAFB",
    visualType: "ai",
  },
];

export function HowSection() {
  const bannerRef = useRef<HTMLDivElement>(null);
  const pill0Ref = useRef<HTMLLIElement>(null);
  const pill1Ref = useRef<HTMLLIElement>(null);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const banner = bannerRef.current;
    const pill0 = pill0Ref.current;
    const pill1 = pill1Ref.current;
    if (!banner || !pill0 || !pill1) return;

    const ctx = gsap.context(() => {
      gsap.set(pill0, { yPercent: 32, scale: 0.72, rotation: -3, force3D: true });
      gsap.set(pill1, { yPercent: -32, scale: 0.72, rotation: 3, force3D: true });

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: banner,
          start: "top 80%",
          end: "bottom 35%",
          scrub: true,
        },
      });

      tl.to(
        pill0,
        {
          yPercent: -5,
          scale: 1,
          rotation: 0,
          force3D: true,
          ease: "none",
        },
        0
      ).to(
        pill1,
        {
          yPercent: 5,
          scale: 1,
          rotation: 0,
          force3D: true,
          ease: "none",
        },
        0
      );
    }, banner);

    return () => ctx.revert();
  }, []);

  return (
    <section data-anchor="how" className="relative px-[var(--offset)] py-8">
      {/* Part A: Wembi .service-list Banner featuring FluxWeb_complete.pdf Atomic Orange Field & Stacked Pills */}
      <div
        ref={bannerRef}
        className="relative w-full min-h-[82vh] md:min-h-[92vh] rounded-[2rem] md:rounded-[2.5rem] bg-brand-orange text-brand-umber overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-14 border border-editorial shadow-xl"
      >
        {/* Background Official 3D Fluid Sculpture Watermark (Static GPU layer) */}
        <div
          className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-30"
          aria-hidden="true"
        >
          <div className="w-[460px] h-[460px] md:w-[620px] md:h-[620px]">
            <FluxWebLogo variant="complete" className="w-full h-full" />
          </div>
        </div>

        {/* Top Section Header */}
        <div className="relative z-10">
          <SectionHeader index="n.002" title="HOW" variant="dark" />
        </div>

        {/* Center Stacked Pills (Hardware-accelerated 3D transforms without runtime SVG Gaussian blur stall) */}
        <div className="relative z-10 my-auto py-12 flex flex-col items-center justify-center">
          <ul className="flex flex-col items-center justify-center">
            <li
              ref={pill0Ref}
              className="z-20 rounded-[2rem] bg-pill-lime text-brand-umber px-10 sm:px-16 md:px-24 py-7 sm:py-10 md:py-14 shadow-lg flex items-center justify-center will-change-transform"
            >
              <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight whitespace-nowrap">
                Web Architecture
              </span>
            </li>
            <li
              ref={pill1Ref}
              className="z-10 rounded-full bg-white text-brand-umber px-10 sm:px-16 md:px-24 py-7 sm:py-10 md:py-14 shadow-lg flex items-center justify-center will-change-transform"
            >
              <span className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight whitespace-nowrap">
                Execution
              </span>
            </li>
          </ul>
        </div>

        {/* Bottom Caption Bar */}
        <div className="relative z-10 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-widest text-brand-umber/85 border-t border-brand-umber/20 pt-4">
          <span>TWO CORE PILLARS OF EVERY FLUXWEB FLAGSHIP</span>
          <span>SCROLL TO STEP THROUGH THE PIPELINE ↓</span>
        </div>
      </div>

      {/* Part B: Dual Scroll-Pinned 3-Step Sticky Showcases (Wembi .steps choreography) */}
      <div className="mt-16 md:mt-28 space-y-16 md:space-y-28">
        <PinnedStepsShowcase
          stepNumber="01"
          heading="Web Architecture"
          accentColor="#FF5C23"
          isLeftToRight={true}
          steps={ARCHITECTURE_STEPS}
        />

        <PinnedStepsShowcase
          stepNumber="02"
          heading="Execution"
          accentColor="#BEFF8B"
          isLeftToRight={false}
          steps={FUNCTIONING_STEPS}
        />
      </div>
    </section>
  );
}

interface PinnedStepsShowcaseProps {
  stepNumber: string;
  heading: string;
  accentColor: string;
  isLeftToRight: boolean;
  steps: StepItem[];
}

function PinnedStepsShowcase({
  stepNumber,
  heading,
  accentColor,
  isLeftToRight,
  steps,
}: PinnedStepsShowcaseProps) {
  const sectionRef = useRef<HTMLDivElement>(null);
  const lastStepRef = useRef<number>(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const el = sectionRef.current;
    if (!el) return;

    const ctx = gsap.context(() => {
      ScrollTrigger.create({
        trigger: el,
        start: "top 12%",
        end: "+=155%",
        pin: true,
        scrub: true,
        onUpdate: (self) => {
          const idx = Math.min(
            steps.length - 1,
            Math.floor(self.progress * steps.length)
          );
          if (idx !== lastStepRef.current) {
            lastStepRef.current = idx;
            setActiveStep(idx);
          }
        },
      });
    }, el);

    return () => ctx.revert();
  }, [steps.length]);

  return (
    <div
      ref={sectionRef}
      className="min-h-[86vh] w-full flex items-center justify-center py-6 md:py-10"
    >
      <div
        className={`w-full max-w-[1560px] mx-auto flex flex-col ${
          isLeftToRight ? "lg:flex-row" : "lg:flex-row-reverse"
        } items-stretch justify-between gap-8 lg:gap-16`}
      >
        {/* Media Frame (.steps__media) with GPU-friendly scale & opacity transitions */}
        <div className="w-full lg:w-[44%] aspect-[720/780] max-h-[640px] rounded-[2rem] bg-[#160702] overflow-hidden relative shadow-xl border border-editorial">
          {steps.map((step, idx) => {
            const isActive = idx === activeStep;
            return (
              <div
                key={step.category}
                style={{
                  background: `radial-gradient(circle at 88% 12%, ${step.accentBg}33 0%, transparent 55%)`,
                }}
                className={`absolute inset-0 p-6 sm:p-8 md:p-10 flex flex-col justify-between transition-all duration-500 ease-wembi-quart will-change-transform ${
                  isActive
                    ? "opacity-100 scale-100 z-10"
                    : "opacity-0 scale-105 z-0 pointer-events-none"
                }`}
              >
                {/* Top Step Telemetry Bar */}
                <div className="relative z-10 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-canvas/75 border-b border-canvas/15 pb-4">
                  <span>{step.tag}</span>
                  <span
                    className="px-2.5 py-0.5 rounded-full text-brand-umber font-bold"
                    style={{ backgroundColor: step.accentBg }}
                  >
                    0{idx + 1} / 0{steps.length}
                  </span>
                </div>

                {/* Interactive Step Visual Centerpiece */}
                <div className="relative z-10 my-auto py-6">
                  <StepInteractiveCard step={step} stepIndex={idx} />
                </div>

                {/* Bottom Step Metrics */}
                <div className="relative z-10 grid grid-cols-2 gap-3 pt-4 border-t border-canvas/15">
                  {step.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl bg-white/[0.06] border border-white/10 p-3"
                    >
                      <div className="font-mono text-[10px] uppercase tracking-wider text-canvas/60">
                        {m.label}
                      </div>
                      <div className="font-mono text-sm font-semibold text-surface-light mt-0.5">
                        {m.value}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Content Column (.steps__content) */}
        <div className="w-full lg:w-[52%] flex flex-col justify-between py-2">
          {/* Top Title Block (.steps__title) */}
          <div className="space-y-3">
            {/* Step Index (01 / 02) with 1px bottom hairline */}
            <div className="border-b border-brand-umber pb-2 flex items-center justify-between">
              <span className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-brand-umber">
                {stepNumber}
              </span>
              <div className="flex items-center gap-2">
                {steps.map((s, idx) => (
                  <button
                    key={s.category}
                    onClick={() => {
                      lastStepRef.current = idx;
                      setActiveStep(idx);
                    }}
                    className={`px-3.5 py-1.5 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                      activeStep === idx
                        ? "bg-brand-umber text-surface-light font-semibold"
                        : "bg-white/50 text-brand-muted hover:bg-white"
                    }`}
                  >
                    0{idx + 1}. {s.category}
                  </button>
                ))}
              </div>
            </div>

            {/* Highlighted Pill Heading (.steps__heading) */}
            <div className="border-b border-brand-umber pb-3 pt-1">
              <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-brand-umber">
                <span
                  className="inline-block px-5 py-1 rounded-2xl transition-colors duration-500"
                  style={{ backgroundColor: accentColor }}
                >
                  {heading}
                </span>
              </h2>
            </div>

            {/* Vertical Slot-Machine Category Ticker (.steps__category) */}
            <div className="border-b border-brand-umber h-14 sm:h-20 md:h-24 overflow-hidden relative">
              <div
                className="flex flex-col transition-transform duration-500 ease-wembi-quart will-change-transform"
                style={{
                  transform: `translate3d(0, -${
                    (100 / steps.length) * activeStep
                  }%, 0)`,
                }}
              >
                {steps.map((s) => (
                  <div
                    key={s.category}
                    className="h-14 sm:h-20 md:h-24 flex items-center justify-between"
                  >
                    <span className="text-3xl sm:text-5xl md:text-6xl font-light tracking-tight text-brand-umber">
                      {s.category}
                    </span>
                    <span className="font-mono text-xs uppercase tracking-widest text-brand-muted">
                      ACTIVE MODULE
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Staggered Descriptions (.steps__descriptions) */}
          <div className="mt-10 lg:mt-auto pt-8">
            <div className="grid">
              {steps.map((s, idx) => {
                const isActive = idx === activeStep;
                return (
                  <div
                    key={s.category}
                    className={`col-start-1 row-start-1 transition-all duration-500 ease-wembi-out ${
                      isActive
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 translate-y-4 pointer-events-none"
                    }`}
                  >
                    <p className="text-2xl sm:text-3xl md:text-4xl font-light leading-snug text-brand-umber">
                      {s.description}
                    </p>
                  </div>
                );
              })}
            </div>

            {/* Progress bar for the 3 steps */}
            <div className="mt-8 flex items-center gap-3">
              {steps.map((s, idx) => (
                <button
                  key={s.category}
                  onClick={() => {
                    lastStepRef.current = idx;
                    setActiveStep(idx);
                  }}
                  aria-label={`Select step ${s.category}`}
                  className="flex-1 h-1.5 rounded-full bg-brand-umber/15 overflow-hidden"
                >
                  <div
                    className={`h-full transition-all duration-500 ${
                      idx <= activeStep ? "w-full bg-brand-orange" : "w-0"
                    }`}
                  />
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function StepInteractiveCard({
  step,
  stepIndex,
}: {
  step: StepItem;
  stepIndex: number;
}) {
  return (
    <div className="rounded-2xl bg-white/[0.05] border border-white/15 p-5 sm:p-6 space-y-5">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <div
            className="w-9 h-9 rounded-xl flex items-center justify-center text-brand-umber"
            style={{ backgroundColor: step.accentBg }}
          >
            {stepIndex === 0 ? (
              <Layers className="w-5 h-5" />
            ) : stepIndex === 1 ? (
              <Sparkles className="w-5 h-5" />
            ) : (
              <Cpu className="w-5 h-5" />
            )}
          </div>
          <div>
            <div className="text-sm font-medium text-surface-light">
              FluxWeb {step.category} Engine
            </div>
            <div className="font-mono text-[11px] text-canvas/60">
              deterministic-build-v2.{stepIndex + 4}
            </div>
          </div>
        </div>
        <FluxWebLogo variant="badge" className="h-6 w-auto" />
      </div>

      <div className="relative h-44 sm:h-52 rounded-xl bg-[#0D0401] border border-white/10 overflow-hidden flex items-center justify-between p-5">
        <div
          className="absolute inset-0 opacity-20"
          style={{
            backgroundImage: "radial-gradient(#C8F3FF 1px, transparent 1px)",
            backgroundSize: "16px 16px",
          }}
        />
        <div className="relative z-10 space-y-2.5 max-w-[55%]">
          <span
            className="inline-block px-2.5 py-0.5 rounded font-mono text-[10px] font-bold uppercase text-brand-umber"
            style={{ backgroundColor: step.accentBg }}
          >
            LIVE TELEMETRY
          </span>
          <div className="text-lg sm:text-xl font-light text-surface-light leading-tight">
            {step.category} Verification
          </div>
          <div className="flex items-center gap-3 font-mono text-xs text-canvas/75">
            <span className="inline-flex items-center gap-1">
              <Gauge className="w-3.5 h-3.5 text-brand-orange" /> 60 FPS
            </span>
            <span className="inline-flex items-center gap-1">
              <Code2 className="w-3.5 h-3.5 text-pill-lime" /> Strict TS
            </span>
            <span className="inline-flex items-center gap-1">
              <Eye className="w-3.5 h-3.5 text-pill-lavender" /> Awwwards UI
            </span>
          </div>
        </div>

        <div className="relative z-10 w-28 h-28 sm:w-36 sm:h-36 shrink-0">
          <FluxWebLogo variant="complete" className="w-full h-full" />
        </div>
      </div>
    </div>
  );
}
