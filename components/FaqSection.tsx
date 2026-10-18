"use client";

import React, { useState } from "react";
import { SectionHeader } from "./SectionHeader";
import { SplitTextReveal } from "./SplitTextReveal";
import { ChevronLeft, ChevronRight } from "lucide-react";

interface FaqItem {
  id: string;
  tabLabel: string;
  question: string;
  answer: string;
}

const FAQ_ITEMS: FaqItem[] = [
  {
    id: "faq-1",
    tabLabel: "01",
    question: "What exactly does FluxWeb build for companies?",
    answer:
      "FluxWeb designs and engineers custom, flagship websites and interactive web applications for ambitious companies. Every build includes a bespoke editorial design system, 60fps scroll choreography (Lenis + GSAP), custom 3D/SVG visual assets, and a production-ready Next.js edge codebase.",
  },
  {
    id: "faq-2",
    tabLabel: "02",
    question: "How do heavy scrolling animations impact page speed and SEO?",
    answer:
      "Unlike bloated template agencies, we engineer animations using hardware-accelerated CSS transforms, requestAnimationFrame-synced Lenis smooth scrolling, and server-rendered Next.js HTML. You get Awwwards-caliber motion with 99+ Lighthouse performance and full semantic SEO indexing.",
  },
  {
    id: "faq-3",
    tabLabel: "03",
    question: "What is the typical timeline for a flagship website launch?",
    answer:
      "Most flagship commissions take between 4 to 8 weeks from architecture brief to global edge deployment. We work in deterministic weekly sprints: Week 1–2 Brand & Design System, Week 3–4 Interactive Motion Prototyping, and Week 5–6 Full-Stack Next.js + Headless CMS integration.",
  },
  {
    id: "faq-4",
    tabLabel: "04",
    question: "Are there any recurring license fees or vendor lock-in?",
    answer:
      "Zero lock-in. Upon launch, your company owns 100% of the TypeScript/Next.js repository, custom 3D/SVG brand assets, and design tokens. Your team can edit copy and publish new pages autonomously via a clean headless CMS.",
  },
  {
    id: "faq-5",
    tabLabel: "05",
    question: "Why invest in an interactive flagship instead of a standard site?",
    answer:
      "Your website is the primary digital twin of your company's reputation. A choreographed, tactile web experience immediately signals category leadership, increases executive dwell time by over 2x, and converts high-value enterprise prospects significantly faster.",
  },
];

export function FaqSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isAnswerOpen, setIsAnswerOpen] = useState(false);

  const handleSelectTab = (idx: number) => {
    setActiveIndex(idx);
    setIsAnswerOpen(false);
  };

  const handlePrev = () => {
    setIsAnswerOpen(false);
    setActiveIndex((prev) => (prev === 0 ? FAQ_ITEMS.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setIsAnswerOpen(false);
    setActiveIndex((prev) => (prev === FAQ_ITEMS.length - 1 ? 0 : prev + 1));
  };

  const currentItem = FAQ_ITEMS[activeIndex];

  return (
    <section data-anchor="faq" className="relative px-[var(--offset)] py-10">
      {/* Wembi .faq Rounded Pale Card */}
      <div className="w-full max-w-[1680px] mx-auto rounded-[2rem] md:rounded-[2.5rem] bg-surface-light border border-editorial pb-20 md:pb-32 px-4 sm:px-8 md:px-14 shadow-sm">
        <SectionHeader index="n.005" title="QUESTIONS" variant="dark" />

        {/* Heading + Gooey Twin-Bullet Lead-in */}
        <div className="max-w-4xl mx-auto text-center mt-14 md:mt-24">
          <h3 className="text-5xl sm:text-7xl md:text-8xl font-light tracking-tight text-brand-umber mb-8">
            FAQ
          </h3>
          <div className="text-xl sm:text-2xl md:text-3xl font-light text-brand-umber max-w-2xl mx-auto text-left sm:text-center">
            <SplitTextReveal
              text="To make everything transparent, we have collected answers to the most frequent architecture and process questions here."
              bulletColor="#FF5C23"
              showGooeyBullets={true}
            />
          </div>
        </div>

        {/* Wembi Signature Folder-Tabbed Deck (.tabs) */}
        <div className="mt-16 md:mt-24 max-w-4xl mx-auto">
          {/* Overlapping Folder Tabs (.tabs__labels) */}
          <div className="flex items-end relative z-10 overflow-x-auto no-scrollbar">
            {FAQ_ITEMS.map((item, idx) => {
              const isChecked = idx === activeIndex;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(idx)}
                  style={{
                    zIndex: isChecked ? 20 : FAQ_ITEMS.length - idx,
                    marginLeft: idx === 0 ? "0px" : "-12px",
                  }}
                  className={`group cursor-pointer rounded-t-2xl border border-brand-umber px-5 sm:px-8 py-3.5 sm:py-4 flex items-center gap-2.5 transition-all duration-500 ease-wembi-quart ${
                    isChecked
                      ? "bg-surface-light border-b-surface-light pr-8 sm:pr-12"
                      : "bg-canvas hover:bg-white/80"
                  }`}
                >
                  <span
                    className={`w-3.5 h-3.5 sm:w-5 sm:h-5 rounded-full bg-brand-orange transition-transform duration-300 ease-wembi-quart ${
                      isChecked ? "scale-100" : "scale-0 w-0 sm:w-0"
                    }`}
                  />
                  <span className="font-mono text-xs sm:text-sm md:text-base font-medium text-brand-umber">
                    {item.tabLabel}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Folder Body (.tabs__body) */}
          <div className="relative z-10 -mt-[1px] rounded-b-2xl rounded-tr-2xl border border-brand-umber bg-surface-light p-6 sm:p-10 md:p-14 min-h-[380px] sm:min-h-[430px] flex flex-col justify-between overflow-hidden">
            {/* Top Question Label */}
            <div>
              <div className="border-b border-brand-umber pb-3 mb-6 flex items-center justify-between font-mono text-xs uppercase tracking-widest text-brand-muted">
                <span>Question // {currentItem.tabLabel}</span>
                <span>
                  {activeIndex + 1} OF {FAQ_ITEMS.length}
                </span>
              </div>

              {/* Oversized Question Text */}
              <div className="py-4 min-h-[140px] flex items-center">
                <h4
                  key={currentItem.id}
                  className="text-2xl sm:text-4xl md:text-5xl font-light tracking-tight text-brand-umber leading-[1.15] transition-all duration-500"
                >
                  {currentItem.question}
                </h4>
              </div>
            </div>

            {/* Frosted Lime Answer Overlay (.tabs__answers) */}
            <div
              className={`absolute inset-x-4 sm:inset-x-8 bottom-24 top-6 rounded-2xl p-6 sm:p-10 backdrop-blur-xl transition-all duration-500 ease-wembi-quart flex flex-col justify-between border border-brand-umber/20 shadow-lg ${
                isAnswerOpen
                  ? "opacity-100 translate-y-0 pointer-events-auto z-20"
                  : "opacity-0 translate-y-8 pointer-events-none z-0"
              }`}
              style={{
                background:
                  "linear-gradient(0deg, rgba(190, 255, 139, 0.96), rgba(190, 255, 139, 0.88))",
              }}
            >
              <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-brand-umber/75 border-b border-brand-umber/15 pb-3">
                <span>FLUXWEB ARCHITECTURE ANSWER // {currentItem.tabLabel}</span>
                <span>VERIFIED</span>
              </div>
              <p className="my-auto py-4 text-base sm:text-xl md:text-2xl font-light leading-relaxed text-brand-umber">
                {currentItem.answer}
              </p>
            </div>

            {/* Bottom Controls Bar (.tabs__controls): Read Answer CTA + Prev/Next Square Buttons */}
            <div className="relative z-30 mt-8 flex items-stretch gap-2.5 sm:gap-3 h-14 sm:h-16">
              <button
                onClick={() => setIsAnswerOpen((prev) => !prev)}
                data-cursor-label={isAnswerOpen ? "Close" : "Read"}
                className="flex-1 rounded-xl bg-brand-orange text-brand-umber px-6 font-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-between active:scale-[0.99] transition-transform"
              >
                <span className="wembi-link">
                  <span
                    className="wembi-link-inner"
                    data-label={isAnswerOpen ? "Close Answer" : "Read Answer"}
                  >
                    {isAnswerOpen ? "Close Answer" : "Read Answer"}
                  </span>
                </span>
                <span className="font-mono text-xs">
                  {isAnswerOpen ? "−" : "+"}
                </span>
              </button>

              <button
                onClick={handlePrev}
                aria-label="Previous question"
                className="aspect-square h-full rounded-xl bg-brand-orange text-brand-umber flex items-center justify-center hover:brightness-105 active:scale-90 transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>

              <button
                onClick={handleNext}
                aria-label="Next question"
                className="aspect-square h-full rounded-xl bg-brand-orange text-brand-umber flex items-center justify-center hover:brightness-105 active:scale-90 transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
