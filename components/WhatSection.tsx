"use client";

import React from "react";
import { SectionHeader } from "./SectionHeader";
import { SplitTextReveal } from "./SplitTextReveal";
import { FluxWebLogo } from "./FluxWebLogo";

const TELEMETRY_METRICS = [
  {
    index: "01 / VELOCITY",
    value: "< 40ms",
    label: "Global Edge Time-to-First-Byte",
    detail:
      "Zero-bloat Next.js App Router builds deployed on distributed edge nodes with 99.8+ Lighthouse performance.",
  },
  {
    index: "02 / CHOREOGRAPHY",
    value: "120 Hz",
    label: "Hardware-Accelerated Scroll Sync",
    detail:
      "Lenis smooth interpolation coupled directly to GSAP ScrollTrigger timelines and custom SVG liquid filters.",
  },
  {
    index: "03 / IMPACT",
    value: "+214%",
    label: "Enterprise Pipeline Conversion Lift",
    detail:
      "Interactive product storytelling that turns passive visitors into high-intent enterprise demos and contracts.",
  },
];

export function WhatSection() {
  return (
    <section
      data-anchor="what"
      className="relative py-16 md:py-28 px-[var(--offset)]"
    >
      <div className="max-w-[1680px] mx-auto">
        {/* Wembi n.001 / WHAT Header */}
        <SectionHeader index="n.001" title="WHAT" variant="dark" />

        {/* Editorial Manifesto Container */}
        <div className="max-w-5xl mx-auto mt-16 md:mt-28 px-2 sm:px-6">
          <div className="flex items-center justify-between flex-wrap gap-4 mb-6 md:mb-10">
            <div className="flex items-center gap-6 font-mono text-xs sm:text-sm md:text-base text-brand-muted">
              <span className="inline-block min-w-[4rem]">N°001</span>
              <span className="uppercase tracking-wider text-brand-umber font-medium">
                Bespoke Websites for Category Leaders
              </span>
            </div>
            <FluxWebLogo variant="badge" className="h-6 w-auto" />
          </div>

          <div className="text-brand-umber text-3xl sm:text-5xl md:text-6xl lg:text-[4.15rem] font-light">
            <SplitTextReveal
              text="An intelligent digital flagship crafted from the ground up. We blend architectural typography, fluid 3D motion, and conversion science to make your company unforgettable."
              bulletColor="#FF5C23"
              showGooeyBullets={true}
            />
          </div>
        </div>

        {/* Architectural 3-Column Telemetry Grid (1px divide-editorial from DESIGN.md) */}
        <div className="mt-20 md:mt-32 border-y border-editorial grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-editorial bg-surface backdrop-blur-sm rounded-2xl overflow-hidden">
          {TELEMETRY_METRICS.map((item) => (
            <div
              key={item.index}
              className="p-8 md:p-12 flex flex-col justify-between group hover:bg-white/60 transition-colors duration-500"
            >
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-brand-muted mb-8">
                <span>{item.index}</span>
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
              </div>

              <div>
                <div className="text-5xl sm:text-6xl md:text-7xl font-light tracking-tight text-brand-umber mb-3 group-hover:translate-x-1 transition-transform duration-500 ease-wembi-out">
                  {item.value}
                </div>
                <h3 className="text-lg font-medium text-brand-umber mb-2">
                  {item.label}
                </h3>
                <p className="text-sm text-brand-muted leading-relaxed">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
