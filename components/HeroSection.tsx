"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FluxWebLogo } from "./FluxWebLogo";
import { SplitTextReveal } from "./SplitTextReveal";
import { useSmoothScroll } from "./SmoothScrollProvider";
import { ArrowDownRight, Layers, Zap } from "lucide-react";

export function HeroSection() {
  const heroRef = useRef<HTMLDivElement>(null);
  const sculptureScrollRef = useRef<HTMLDivElement>(null);
  const sculptureTiltRef = useRef<HTMLDivElement>(null);
  const wordmarkRef = useRef<HTMLDivElement>(null);
  const { scrollTo, openBriefModal } = useSmoothScroll();

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const hero = heroRef.current;
    const sculptureScroll = sculptureScrollRef.current;
    const sculptureTilt = sculptureTiltRef.current;
    const wordmark = wordmarkRef.current;
    if (!hero || !sculptureScroll || !sculptureTilt || !wordmark) return;

    const ctx = gsap.context(() => {
      // Dedicated scroll-only transform layer (no conflict with pointer or CSS keyframes)
      gsap.to(sculptureScroll, {
        yPercent: 14,
        scale: 1.05,
        force3D: true,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });

      gsap.to(wordmark, {
        yPercent: -18,
        force3D: true,
        ease: "none",
        scrollTrigger: {
          trigger: hero,
          start: "top top",
          end: "bottom top",
          scrub: true,
        },
      });
    }, hero);

    // Lightweight GSAP quickTo for pointer parallax on separate inner wrapper
    const xTo = gsap.quickTo(sculptureTilt, "x", {
      duration: 0.6,
      ease: "power2.out",
    });
    const yTo = gsap.quickTo(sculptureTilt, "y", {
      duration: 0.6,
      ease: "power2.out",
    });

    const handleMouseMove = (e: MouseEvent) => {
      const relX = e.clientX / window.innerWidth - 0.5;
      const relY = e.clientY / window.innerHeight - 0.5;
      xTo(relX * 24);
      yTo(relY * 18);
    };

    hero.addEventListener("mousemove", handleMouseMove, { passive: true });
    return () => {
      hero.removeEventListener("mousemove", handleMouseMove);
      ctx.revert();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      data-anchor="hero"
      className="relative p-[var(--offset)]"
    >
      {/* Wembi-style Framed Rounded Hero Container */}
      <div className="relative w-full min-h-[calc(100vh-2*var(--offset))] md:min-h-[94vh] rounded-[2rem] md:rounded-[2.5rem] bg-[#160702] text-surface-light overflow-hidden flex flex-col justify-between p-6 sm:p-10 md:p-14 lg:p-16 border border-editorial shadow-xl">
        {/* Background Atmospheric Layer: Pure GPU-friendly radial gradients (Zero CSS blur filter cost) */}
        <div
          className="absolute inset-0 pointer-events-none z-0"
          aria-hidden="true"
          style={{
            background: `
              radial-gradient(circle at 85% 15%, rgba(255, 92, 35, 0.34) 0%, rgba(255, 92, 35, 0.12) 28%, transparent 58%),
              radial-gradient(circle at 12% 52%, rgba(200, 243, 255, 0.22) 0%, rgba(200, 243, 255, 0.06) 30%, transparent 55%)
            `,
          }}
        >
          {/* Architectural 1px Blueprint Grid Lines */}
          <div
            className="absolute inset-0 opacity-[0.09]"
            style={{
              backgroundImage:
                "linear-gradient(to right, #C8F3FF 1px, transparent 1px), linear-gradient(to bottom, #C8F3FF 1px, transparent 1px)",
              backgroundSize: "6rem 6rem",
            }}
          />
        </div>

        {/* Top Oversized Vector Wordmark (Zero CSS drop-shadow filter for instant GPU scroll) */}
        <div
          ref={wordmarkRef}
          className="relative z-10 w-full will-change-transform"
        >
          <div className="flex flex-wrap items-center justify-between gap-3 font-mono text-[11px] sm:text-xs uppercase tracking-widest text-canvas/75 pb-4 mb-4 border-b border-canvas/15">
            <span className="inline-flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-orange" />
              N°001 / SYSTEM STATUS: ACCEPTING Q4/Q1 FLAGSHIP COMMISSIONS
            </span>
            <div className="flex items-center gap-3 ml-auto">
              <span className="hidden md:inline text-canvas/60">
                EDITION:
              </span>
              <div className="inline-flex items-center rounded-full bg-white/10 p-0.5 border border-white/15">
                <span className="px-3 py-1 rounded-full bg-brand-orange text-brand-umber font-bold text-[10px]">
                  Expressive
                </span>
                <Link
                  href="/clean"
                  data-cursor-label="Clean"
                  className="px-3 py-1 rounded-full text-canvas/85 hover:text-white text-[10px] transition-colors"
                >
                  Clean
                </Link>
              </div>
            </div>
          </div>

          <FluxWebLogo
            variant="hero-banner"
            color="#FF5C23"
            className="w-full h-auto"
          />
        </div>

        {/* Centerpiece: Official 3D Fluid Intertwined Sculpture + "flux web" Pill Badge */}
        <div className="relative z-10 my-4 md:my-8 flex flex-col lg:flex-row items-center justify-between gap-8">
          {/* Left Telemetry Badges */}
          <div className="hidden xl:flex flex-col gap-3 max-w-xs font-mono text-xs text-canvas/80">
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4">
              <div className="flex items-center gap-2 text-brand-orange mb-1">
                <Zap className="w-3.5 h-3.5" />
                <span>DETERMINISTIC VELOCITY</span>
              </div>
              <p className="text-canvas/75 leading-relaxed">
                Sub-second Next.js edge architecture paired with 60fps WebGL &
                GSAP scroll pipelines.
              </p>
            </div>
            <div className="rounded-2xl bg-white/[0.06] border border-white/10 p-4">
              <div className="flex items-center gap-2 text-pill-lime mb-1">
                <Layers className="w-3.5 h-3.5" />
                <span>BESPOKE DESIGN SYSTEMS</span>
              </div>
              <p className="text-canvas/75 leading-relaxed">
                Tailored editorial grids, tactile micro-interactions, and 3D
                brand worlds for category leaders.
              </p>
            </div>
          </div>

          {/* Official 3D Fluid Sculpture Centerpiece */}
          <div
            ref={sculptureScrollRef}
            className="relative mx-auto w-[280px] h-[280px] sm:w-[360px] sm:h-[360px] md:w-[430px] md:h-[430px] flex items-center justify-center will-change-transform"
          >
            <div className="absolute inset-6 rounded-full border border-brand-orange/25" />
            <div className="absolute inset-12 rounded-full border border-canvas/15" />
            <div
              ref={sculptureTiltRef}
              className="w-full h-full will-change-transform"
            >
              <FluxWebLogo variant="complete" className="w-full h-full" />
            </div>
          </div>

          {/* Right Quick CTA Card */}
          <div className="hidden xl:flex flex-col items-end text-right max-w-xs">
            <span className="font-mono text-xs uppercase tracking-widest text-canvas/60 mb-2">
              REFERENCE-GRADE CRAFT
            </span>
            <p className="text-sm text-canvas/80 leading-relaxed mb-4">
              We turn corporate websites into high-converting interactive
              product experiences.
            </p>
            <button
              onClick={openBriefModal}
              data-cursor-label="Start"
              className="group inline-flex items-center gap-2.5 rounded-full bg-brand-orange px-6 py-3.5 text-brand-umber font-bold text-xs font-mono uppercase tracking-wider active:scale-[0.98] transition-transform"
            >
              <span>Request Architecture Brief</span>
              <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
            </button>
          </div>
        </div>

        {/* Bottom Wembi Hero Content (.hero__content) */}
        <div className="relative z-10 w-full max-w-6xl">
          <div className="flex items-center gap-6 font-mono text-xs sm:text-sm md:text-base text-brand-orange mb-4 md:mb-6">
            <span className="inline-block min-w-[4rem]">N°001</span>
            <span className="uppercase tracking-wider">
              The Digital Flagship of Ambitious Companies
            </span>
          </div>

          <div className="text-brand-orange text-3xl sm:text-5xl md:text-6xl lg:text-[4.25rem] font-light">
            <SplitTextReveal
              text="FluxWeb instantly elevates the perception and conversion of any company by engineering its living digital flagship."
              bulletColor="#C8F3FF"
              showGooeyBullets={true}
            />
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 xl:hidden">
            <button
              onClick={openBriefModal}
              className="inline-flex items-center gap-2 rounded-full bg-brand-orange px-6 py-3.5 text-brand-umber font-bold text-xs font-mono uppercase tracking-wider active:scale-[0.98]"
            >
              <span>Request Architecture Brief</span>
              <ArrowDownRight className="w-4 h-4" />
            </button>
            <button
              onClick={() => scrollTo('[data-anchor="what"]')}
              className="inline-flex items-center gap-2 rounded-full border border-canvas/30 px-5 py-3.5 text-canvas text-xs font-mono uppercase tracking-wider"
            >
              <span>Explore Process</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
