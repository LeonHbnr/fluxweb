"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FluxWebLogo } from "@/components/FluxWebLogo";
import { SplitTextReveal } from "@/components/SplitTextReveal";
import { SectionHeader } from "@/components/SectionHeader";
import { useSmoothScroll } from "@/components/SmoothScrollProvider";
import {
  ArrowDownRight,
  ArrowUpRight,
  CheckCircle2,
  Code2,
  Cpu,
  Eye,
  Gauge,
  Globe,
  Layers,
  Mail,
  Phone,
  Plus,
  Minus,
  Send,
  Sparkles,
  X,
  Zap,
} from "lucide-react";

const TELEMETRY_ITEMS = [
  {
    index: "01 / VELOCITY",
    value: "< 40ms",
    label: "Global Edge TTFB",
    detail: "Zero-bloat Next.js App Router builds on distributed edge nodes.",
  },
  {
    index: "02 / CHOREOGRAPHY",
    value: "120 Hz",
    label: "Fluid Scroll Sync",
    detail: "Lenis smooth interpolation coupled with hardware-accelerated GSAP.",
  },
  {
    index: "03 / IMPACT",
    value: "+214%",
    label: "Pipeline Conversion Lift",
    detail: "Interactive storytelling that turns visitors into enterprise demos.",
  },
  {
    index: "04 / QUALITY",
    value: "99.8",
    label: "Lighthouse Score",
    detail: "100% typed design tokens, zero CLS, and WCAG AAA contrast anchor.",
  },
];

const CAPABILITY_MODULES = [
  {
    id: "01.A",
    pillar: "architecture",
    pillarLabel: "01 / Web Architecture",
    title: "Brand & Editorial Grid",
    description:
      "Bespoke design systems, custom variable typography, and 1px architectural grid tokenization tailored to your brand positioning.",
    metricLabel: "Contrast Ratio",
    metricValue: "13.6 : 1 WCAG AAA",
    badgeBg: "#FF5C23",
    icon: Layers,
  },
  {
    id: "01.B",
    pillar: "architecture",
    pillarLabel: "01 / Web Architecture",
    title: "3D & Spatial Identity",
    description:
      "Custom 3D fluid sculptures, interactive shaders, and kinetic vector graphics that respond organically to scroll and cursor velocity.",
    metricLabel: "Frame Budget",
    metricValue: "< 6.2ms GPU Time",
    badgeBg: "#BEFF8B",
    icon: Sparkles,
  },
  {
    id: "01.C",
    pillar: "architecture",
    pillarLabel: "01 / Web Architecture",
    title: "Edge Application Engine",
    description:
      "Full-stack Next.js App Router engineering with server components, instant route transitions, and global CDN edge caching.",
    metricLabel: "Lighthouse Perf",
    metricValue: "99.8 / 100",
    badgeBg: "#D5BAFB",
    icon: Cpu,
  },
  {
    id: "02.A",
    pillar: "execution",
    pillarLabel: "02 / Execution & Growth",
    title: "Choreographed Scroll Narrative",
    description:
      "Translating complex B2B value propositions into clear, progressive visual chapters that hold executive attention without scroll-jacking.",
    metricLabel: "Dwell Time",
    metricValue: "+168% Avg Session",
    badgeBg: "#BEFF8B",
    icon: Gauge,
  },
  {
    id: "02.B",
    pillar: "execution",
    pillarLabel: "02 / Execution & Growth",
    title: "Composable Headless CMS",
    description:
      "Visual headless CMS integration empowering marketing teams to launch new pages, case studies, and locales without engineering bottlenecks.",
    metricLabel: "Publish Speed",
    metricValue: "Instant Edge ISR",
    badgeBg: "#FF5C23",
    icon: Code2,
  },
  {
    id: "02.C",
    pillar: "execution",
    pillarLabel: "02 / Execution & Growth",
    title: "Conversion Telemetry",
    description:
      "Predictive funnel analytics, interactive architecture configurators, and frictionless booking flows engineered to maximize pipeline.",
    metricLabel: "Demo Requests",
    metricValue: "3.1x Pipeline Lift",
    badgeBg: "#D5BAFB",
    icon: Eye,
  },
];

const SPRINT_TIMELINE = [
  {
    phase: "WEEK 01–02",
    title: "Architecture & Editorial System",
    summary:
      "Information architecture, narrative wireframing, custom 3D brand direction, and tokenized Figma-to-code design system.",
  },
  {
    phase: "WEEK 03–04",
    title: "Kinetic Motion Prototyping",
    summary:
      "Lenis + GSAP scroll choreography, interactive component sandboxes, and 60fps GPU budget verification across desktop and mobile.",
  },
  {
    phase: "WEEK 05–06",
    title: "Full-Stack Next.js + CMS Build",
    summary:
      "Production TypeScript engineering, modular headless CMS integration, technical SEO schema, and edge caching configuration.",
  },
  {
    phase: "WEEK 07",
    title: "Global Launch & Handover",
    summary:
      "Zero-downtime global deployment, 99+ Lighthouse verification, and full team training with 100% repository ownership.",
  },
];

const WHY_PILLARS = [
  {
    index: "01",
    title: "Effective",
    subtitle: "Engineered for pipeline conversion",
    detail:
      "Every motion cue and typographic hierarchy guides decision-makers toward high-intent actions.",
    accent: "#FFFFFF",
  },
  {
    index: "02",
    title: "Distinctive",
    subtitle: "Unmistakable category authority",
    detail:
      "Zero templates. Custom 3D fluid art and editorial grids that separate you from generic SaaS clones.",
    accent: "#BEFF8B",
  },
  {
    index: "03",
    title: "Performant",
    subtitle: "Sub-second global edge speed",
    detail:
      "Hardware-accelerated motion paired with server-rendered Next.js for instant loading and full SEO.",
    accent: "#D5BAFB",
  },
  {
    index: "04",
    title: "Autonomous",
    subtitle: "100% code & CMS ownership",
    detail:
      "No vendor lock-in. Your team owns the clean TypeScript repository and modular CMS blocks.",
    accent: "#FF5C23",
  },
];

const CASE_STUDIES = [
  {
    id: "ai-saas",
    index: "01",
    sector: "AI & SaaS",
    client: "Synthetix Cloud · Neural Infrastructure",
    headline: "Turning developer documentation into a kinetic product showroom.",
    summary:
      "We redesigned Synthetix's flagship web presence with real-time interactive latency benchmarks, smooth scroll architecture diagrams, and an instant sandbox onboarding flow.",
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
    index: "02",
    sector: "Industrial & IoT",
    client: "Kinetix Robotics · Autonomous Digital Twins",
    headline: "Blueprint-grade web engineering for physical automation leaders.",
    summary:
      "We built a 60fps 3D product configurator and scroll-scrubbed hardware breakdown that clarified complex robotics architecture and shortened enterprise sales cycles.",
    accent: "#FF5C23",
    deliverables: [
      "3D WebGL Asset Pipeline",
      "Interactive Stepper",
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
    index: "03",
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
    index: "04",
    sector: "Design Commerce",
    client: "Atelier Forma · Architectural Objects",
    headline: "Tactile storytelling and zero-latency headless checkout.",
    summary:
      "We crafted an editorial flagship store with smooth momentum galleries, liquid vector transitions, and sub-second Shopify Storefront API cart orchestration.",
    accent: "#BEFF8B",
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

const CLEAN_FAQS = [
  {
    id: "faq-1",
    index: "01",
    question: "What exactly does FluxWeb build for companies?",
    answer:
      "FluxWeb designs and engineers custom, flagship websites and interactive web applications for ambitious companies. Every build includes a bespoke editorial design system, 60fps scroll choreography (Lenis + GSAP), custom 3D/SVG visual assets, and a production-ready Next.js edge codebase.",
  },
  {
    id: "faq-2",
    index: "02",
    question: "How do scroll motions impact page speed and SEO?",
    answer:
      "Unlike bloated template agencies, we engineer animations using hardware-accelerated CSS transforms, requestAnimationFrame-synced Lenis smooth scrolling, and server-rendered Next.js HTML. You get refined editorial motion with 99+ Lighthouse performance and full semantic SEO indexing.",
  },
  {
    id: "faq-3",
    index: "03",
    question: "What is the typical timeline for a flagship website launch?",
    answer:
      "Most flagship commissions take between 4 to 7 weeks from architecture brief to global edge deployment. We work in deterministic weekly sprints covering Brand & Design System, Interactive Motion Prototyping, and Full-Stack Next.js + Headless CMS integration.",
  },
  {
    id: "faq-4",
    index: "04",
    question: "Are there any recurring license fees or vendor lock-in?",
    answer:
      "Zero lock-in. Upon launch, your company owns 100% of the TypeScript/Next.js repository, custom 3D/SVG brand assets, and design tokens. Your team can edit copy and publish new pages autonomously via a clean headless CMS.",
  },
  {
    id: "faq-5",
    index: "05",
    question: "Can we provide both an expressive and a streamlined experience?",
    answer:
      "Yes—just like this live showcase, we can engineer adaptive motion systems that pair signature storytelling with high-clarity editorial layouts so technical buyers and executives alike find answers effortlessly.",
  },
];

const PROJECT_SCOPES = [
  "Flagship Corporate Website",
  "3D & Kinetic Scroll Redesign",
  "Design System + Next.js Build",
  "Interactive Product Launch",
];

const BUDGET_TIERS = ["€15k – €30k", "€30k – €60k", "€60k – €100k", "€100k+"];

export function CleanExperience() {
  const rootRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const heroSculptureRef = useRef<HTMLDivElement>(null);
  const heroTiltRef = useRef<HTMLDivElement>(null);
  const whatLineRef = useRef<HTMLDivElement>(null);
  const sprintLineRef = useRef<HTMLDivElement>(null);

  const { scrollTo, activeSection, isBriefModalOpen, openBriefModal, closeBriefModal } =
    useSmoothScroll();

  const [capabilityFilter, setCapabilityFilter] = useState<
    "all" | "architecture" | "execution"
  >("all");
  const [openFaqId, setOpenFaqId] = useState<string>("faq-1");

  // Brief Modal State
  const [selectedScope, setSelectedScope] = useState(PROJECT_SCOPES[0]);
  const [selectedBudget, setSelectedBudget] = useState(BUDGET_TIERS[1]);
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [projectNotes, setProjectNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const filteredModules =
    capabilityFilter === "all"
      ? CAPABILITY_MODULES
      : CAPABILITY_MODULES.filter((m) => m.pillar === capabilityFilter);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const root = rootRef.current;
    if (!root) return;

    const ctx = gsap.context(() => {
      // 1. Global top reading progress bar scrubbed to page scroll
      if (progressBarRef.current) {
        gsap.fromTo(
          progressBarRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: root,
              start: "top top",
              end: "bottom bottom",
              scrub: 0.15,
            },
          }
        );
      }

      // 2. Hero Entrance Stagger
      gsap.fromTo(
        ".clean-hero-reveal",
        { y: 28, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.1,
          ease: "power3.out",
        }
      );

      // 3. Hero 3D Sculpture Scroll Parallax
      if (heroSculptureRef.current) {
        gsap.to(heroSculptureRef.current, {
          yPercent: 16,
          rotation: 8,
          scale: 1.04,
          ease: "none",
          scrollTrigger: {
            trigger: '[data-anchor="hero"]',
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        });
      }

      // 4. n.001 WHAT vertical reading progress line
      if (whatLineRef.current) {
        gsap.fromTo(
          whatLineRef.current,
          { scaleY: 0 },
          {
            scaleY: 1,
            ease: "none",
            scrollTrigger: {
              trigger: '[data-anchor="what"]',
              start: "top 65%",
              end: "bottom 45%",
              scrub: true,
            },
          }
        );
      }

      // 5. n.002 Sprint Timeline horizontal progress bar
      if (sprintLineRef.current) {
        gsap.fromTo(
          sprintLineRef.current,
          { scaleX: 0 },
          {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              trigger: ".clean-sprint-container",
              start: "top 75%",
              end: "bottom 55%",
              scrub: true,
            },
          }
        );
      }

      // 6. Scroll-triggered section batch reveals (.clean-scroll-card)
      const cards = gsap.utils.toArray<HTMLElement>(".clean-scroll-card");
      cards.forEach((card) => {
        gsap.fromTo(
          card,
          { y: 36, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 86%",
              toggleActions: "play none none none",
            },
          }
        );
      });

      // 7. Subtle parallax on Case Study visual frames
      const parallaxFrames = gsap.utils.toArray<HTMLElement>(
        ".clean-case-sculpture"
      );
      parallaxFrames.forEach((frame) => {
        gsap.fromTo(
          frame,
          { yPercent: -10, rotate: -4 },
          {
            yPercent: 10,
            rotate: 4,
            ease: "none",
            scrollTrigger: {
              trigger: frame,
              start: "top bottom",
              end: "bottom top",
              scrub: true,
            },
          }
        );
      });
    }, root);

    // Gentle cursor tilt on Hero 3D Sculpture
    const tiltEl = heroTiltRef.current;
    let handleMouseMove: ((e: MouseEvent) => void) | null = null;
    if (tiltEl) {
      const xTo = gsap.quickTo(tiltEl, "x", {
        duration: 0.6,
        ease: "power2.out",
      });
      const yTo = gsap.quickTo(tiltEl, "y", {
        duration: 0.6,
        ease: "power2.out",
      });
      handleMouseMove = (e: MouseEvent) => {
        const relX = e.clientX / window.innerWidth - 0.5;
        const relY = e.clientY / window.innerHeight - 0.5;
        xTo(relX * 20);
        yTo(relY * 16);
      };
      window.addEventListener("mousemove", handleMouseMove, { passive: true });
    }

    return () => {
      if (handleMouseMove) {
        window.removeEventListener("mousemove", handleMouseMove);
      }
      ctx.revert();
    };
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <div ref={rootRef} className="relative min-h-screen bg-canvas text-brand-umber">
      {/* Top Sticky Architectural Bar with Scroll-Scrubbed Progress Line & Mode Switcher */}
      <header className="sticky top-0 z-[60] bg-surface-light/80 backdrop-blur-xl border-b border-editorial">
        {/* Scroll-scrubbed 2px Atomic Orange progress indicator */}
        <div className="w-full h-[2px] bg-brand-umber/10 overflow-hidden">
          <div
            ref={progressBarRef}
            className="w-full h-full bg-brand-orange origin-left scale-x-0"
          />
        </div>

        <div className="max-w-[1680px] mx-auto px-4 sm:px-8 h-16 flex items-center justify-between gap-4">
          {/* Brand Identity */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => scrollTo('[data-anchor="hero"]')}
              className="flex items-center gap-2.5 text-left"
            >
              <FluxWebLogo variant="badge" className="h-6 w-auto" />
              <span className="hidden sm:inline font-mono text-xs uppercase tracking-widest text-brand-muted">
                CLEAN EDITORIAL EDITION
              </span>
            </button>
          </div>

          {/* Quick Section Links (Desktop) */}
          <nav
            aria-label="Clean section navigation"
            className="hidden xl:flex items-center gap-6 font-mono text-xs uppercase tracking-wider"
          >
            {[
              { id: "what", label: "01. Manifesto" },
              { id: "how", label: "02. Capabilities" },
              { id: "why", label: "03. Principles" },
              { id: "where", label: "04. Selected Work" },
              { id: "faq", label: "05. FAQ" },
            ].map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(`[data-anchor="${item.id}"]`)}
                className={`transition-colors flex items-center gap-1.5 ${
                  activeSection === item.id
                    ? "text-brand-umber font-bold"
                    : "text-brand-muted hover:text-brand-umber"
                }`}
              >
                <span
                  className={`w-1.5 h-1.5 rounded-full bg-brand-orange transition-transform ${
                    activeSection === item.id ? "scale-100" : "scale-0"
                  }`}
                />
                <span>{item.label}</span>
              </button>
            ))}
          </nav>

          {/* Right Mode Switcher + Brief CTA */}
          <div className="flex items-center gap-3">
            <div
              className="inline-flex items-center rounded-full bg-canvas/80 p-1 border border-editorial font-mono text-[11px] uppercase tracking-wider"
              role="group"
              aria-label="Website edition switcher"
            >
              <Link
                href="/"
                data-cursor-label="Expressive"
                className="px-3 py-1 rounded-full text-brand-muted hover:text-brand-umber transition-colors"
              >
                Expressive
              </Link>
              <span className="px-3 py-1 rounded-full bg-brand-orange text-brand-umber font-bold shadow-sm">
                Clean
              </span>
            </div>

            <button
              onClick={openBriefModal}
              data-cursor-label="Brief"
              className="hidden sm:inline-flex items-center gap-1.5 rounded-full bg-brand-orange px-5 py-2 text-brand-umber font-mono text-xs font-bold uppercase tracking-wider active:scale-[0.98] transition-transform"
            >
              <span>Start Brief</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </header>

      {/* =====================================================================
          HERO SECTION (#hero) — Light, Airy, Architectural & Kinetic
      ===================================================================== */}
      <section
        data-anchor="hero"
        className="relative px-[var(--offset)] pt-6 pb-12 md:pt-8 md:pb-16"
      >
        <div className="max-w-[1680px] mx-auto rounded-[2rem] bg-surface-light/90 border border-editorial shadow-sm overflow-hidden relative">
          {/* Subtle Architectural 1px Blueprint Grid */}
          <div
            className="absolute inset-0 pointer-events-none opacity-[0.35]"
            aria-hidden="true"
            style={{
              backgroundImage:
                "linear-gradient(to right, rgba(61, 20, 5, 0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(61, 20, 5, 0.06) 1px, transparent 1px)",
              backgroundSize: "5rem 5rem",
            }}
          />

          {/* Soft Warm Radial Accent (Zero GPU blur filter cost) */}
          <div
            className="absolute inset-0 pointer-events-none"
            aria-hidden="true"
            style={{
              background:
                "radial-gradient(circle at 82% 28%, rgba(255, 92, 35, 0.14) 0%, rgba(200, 243, 255, 0.25) 42%, transparent 70%)",
            }}
          />

          <div className="relative z-10 p-6 sm:p-10 md:p-14 lg:p-16">
            {/* Top Metadata Row */}
            <div className="clean-hero-reveal flex flex-wrap items-center justify-between gap-4 pb-6 mb-8 border-b border-editorial font-mono text-xs uppercase tracking-widest text-brand-muted">
              <span className="inline-flex items-center gap-2 text-brand-umber font-medium">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                N°001 / BESPOKE DIGITAL FLAGSHIP STUDIO
              </span>
              <span>ACCEPTING Q4 / Q1 ENTERPRISE COMMISSIONS</span>
            </div>

            {/* Main 12-Column Editorial Hero Grid */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
              {/* Left 7 Columns: Clean Typographic Hierarchy */}
              <div className="lg:col-span-7 space-y-6 md:space-y-8">
                <div className="clean-hero-reveal w-48 sm:w-64">
                  <FluxWebLogo
                    variant="hero-banner"
                    color="#FF5C23"
                    className="w-full h-auto"
                  />
                </div>

                <h1 className="clean-hero-reveal text-4xl sm:text-5xl md:text-6xl xl:text-[4.15rem] font-light tracking-tight text-brand-umber leading-[1.08]">
                  Clarity in structure.{" "}
                  <span className="text-brand-orange">Fluidity in motion.</span>{" "}
                  Engineered to convert.
                </h1>

                <p className="clean-hero-reveal text-base sm:text-lg md:text-xl text-brand-muted max-w-2xl leading-relaxed font-normal">
                  FluxWeb designs and engineers category-defining websites for
                  ambitious technology, AI, fintech, and design-forward
                  companies—combining architectural typography, 60fps scroll
                  choreography, and sub-second Next.js edge velocity.
                </p>

                <div className="clean-hero-reveal pt-2 flex flex-wrap items-center gap-4">
                  <button
                    onClick={openBriefModal}
                    data-cursor-label="Configure"
                    className="group inline-flex items-center gap-2.5 rounded-full bg-brand-orange px-7 py-4 text-brand-umber font-mono text-xs sm:text-sm font-bold uppercase tracking-wider active:scale-[0.98] transition-transform shadow-sm"
                  >
                    <span>Configure Architecture Brief</span>
                    <ArrowDownRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-transform" />
                  </button>

                  <button
                    onClick={() => scrollTo('[data-anchor="where"]')}
                    className="inline-flex items-center gap-2 rounded-full bg-white/80 hover:bg-white border border-editorial px-6 py-4 text-brand-umber font-mono text-xs sm:text-sm uppercase tracking-wider transition-colors"
                  >
                    <span>Inspect Selected Work</span>
                  </button>
                </div>
              </div>

              {/* Right 5 Columns: Framed 3D Fluid Sculpture with Scroll Parallax */}
              <div className="lg:col-span-5 flex items-center justify-center">
                <div className="clean-hero-reveal relative w-full max-w-[400px] aspect-square rounded-[2rem] bg-canvas/55 border border-editorial p-6 flex flex-col justify-between overflow-hidden shadow-inner">
                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-brand-muted">
                    <span>FIG 01 // FLUID IDENTITY</span>
                    <span className="inline-flex items-center gap-1 text-brand-umber font-semibold">
                      <Zap className="w-3 h-3 text-brand-orange" /> 60 FPS SYNC
                    </span>
                  </div>

                  <div
                    ref={heroSculptureRef}
                    className="relative my-auto w-56 h-56 sm:w-64 sm:h-64 mx-auto flex items-center justify-center will-change-transform"
                  >
                    <div className="absolute inset-2 rounded-full border border-brand-umber/10" />
                    <div
                      ref={heroTiltRef}
                      className="w-full h-full will-change-transform"
                    >
                      <FluxWebLogo
                        variant="complete"
                        className="w-full h-full"
                      />
                    </div>
                  </div>

                  <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-wider text-brand-muted pt-3 border-t border-editorial">
                    <span>NEXT.JS 14 · LENIS · GSAP</span>
                    <span>SCROLL TO EXPLORE ↓</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Bottom 4-Column Architectural Telemetry Bar */}
          <div className="relative z-10 border-t border-editorial grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-editorial bg-white/60">
            {TELEMETRY_ITEMS.map((item) => (
              <div
                key={item.index}
                className="p-6 sm:p-8 flex flex-col justify-between hover:bg-white/90 transition-colors"
              >
                <div className="flex items-center justify-between font-mono text-[11px] uppercase tracking-widest text-brand-muted mb-4">
                  <span>{item.index}</span>
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                </div>
                <div>
                  <div className="text-3xl sm:text-4xl font-light tracking-tight text-brand-umber">
                    {item.value}
                  </div>
                  <div className="text-sm font-medium text-brand-umber mt-1">
                    {item.label}
                  </div>
                  <p className="text-xs text-brand-muted mt-1 leading-relaxed">
                    {item.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          n.001 / WHAT — Editorial Manifesto & Scroll-Scrubbed Reading Anchor
      ===================================================================== */}
      <section
        data-anchor="what"
        className="relative py-16 md:py-24 px-[var(--offset)]"
      >
        <div className="max-w-[1680px] mx-auto">
          <SectionHeader index="n.001" title="WHAT WE DO" variant="dark" />

          <div className="mt-14 md:mt-20 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start max-w-6xl mx-auto">
            {/* Left Sticky Index & Scroll-Scrubbed Progress Line */}
            <div className="lg:col-span-4 lg:sticky lg:top-28 space-y-4">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-surface-light border border-editorial font-mono text-xs uppercase tracking-widest text-brand-umber">
                <span className="w-2 h-2 rounded-full bg-brand-orange" />
                <span>THE FLUXWEB THESIS</span>
              </div>
              <p className="text-sm text-brand-muted leading-relaxed">
                Your website is the primary architectural interface of your
                company. We replace static templates with living product
                storytelling.
              </p>
              <div className="hidden lg:flex items-center gap-4 pt-4">
                <div className="w-[2px] h-28 bg-brand-umber/15 overflow-hidden rounded-full">
                  <div
                    ref={whatLineRef}
                    className="w-full h-full bg-brand-orange origin-top scale-y-0"
                  />
                </div>
                <div className="font-mono text-[11px] uppercase tracking-widest text-brand-muted space-y-1">
                  <div>01. EDITORIAL AUTHORITY</div>
                  <div>02. KINETIC PRECISION</div>
                  <div>03. CONVERSION SCIENCE</div>
                </div>
              </div>
            </div>

            {/* Right Masked Manifesto Reveal */}
            <div className="lg:col-span-8 space-y-10">
              <div className="text-brand-umber text-3xl sm:text-4xl md:text-5xl font-light leading-[1.16]">
                <SplitTextReveal
                  text="An intelligent digital flagship crafted from the ground up. We blend architectural typography, fluid 3D motion, and conversion science to make your company unforgettable."
                  showGooeyBullets={false}
                  staggerMs={20}
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="clean-scroll-card rounded-2xl bg-surface-light/85 border border-editorial p-6 sm:p-8">
                  <div className="font-mono text-xs uppercase tracking-widest text-brand-muted mb-3">
                    01 // PERCEPTION SHIFT
                  </div>
                  <h3 className="text-xl font-medium text-brand-umber mb-2">
                    Enterprise-Ready from First Scroll
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    Buyers judge technical maturity in milliseconds. Our
                    bespoke design systems and crisp 60fps transitions position
                    your brand at the top of its category.
                  </p>
                </div>

                <div className="clean-scroll-card rounded-2xl bg-surface-light/85 border border-editorial p-6 sm:p-8">
                  <div className="font-mono text-xs uppercase tracking-widest text-brand-muted mb-3">
                    02 // ENGINEERING RIGOR
                  </div>
                  <h3 className="text-xl font-medium text-brand-umber mb-2">
                    Zero Motion Tax on Speed
                  </h3>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    Every scroll reveal and 3D asset runs on GPU-composited
                    layers with zero layout shift—delivering sub-second edge
                    loads alongside tactile motion.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          n.002 / HOW — Clean Architectural Capabilities Grid & Sprint Pipeline
      ===================================================================== */}
      <section
        data-anchor="how"
        className="relative py-16 md:py-24 px-[var(--offset)]"
      >
        <div className="max-w-[1680px] mx-auto">
          <SectionHeader index="n.002" title="HOW WE ENGINEER" variant="dark" />

          {/* Header + Filter Controls */}
          <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-brand-muted mb-2">
                CAPABILITIES ARCHITECTURE // 06 CORE MODULES
              </div>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-brand-umber">
                Two pillars. Six modular deliverables.
              </h2>
            </div>

            {/* Clean Pillar Filter Tabs */}
            <div className="inline-flex items-center p-1 rounded-full bg-surface-light border border-editorial self-start">
              {[
                { key: "all", label: "All Modules (06)" },
                { key: "architecture", label: "01. Web Architecture" },
                { key: "execution", label: "02. Execution" },
              ].map((tab) => {
                const active = capabilityFilter === tab.key;
                return (
                  <button
                    key={tab.key}
                    onClick={() =>
                      setCapabilityFilter(
                        tab.key as "all" | "architecture" | "execution"
                      )
                    }
                    className={`px-4 py-2 rounded-full font-mono text-xs uppercase tracking-wider transition-all ${
                      active
                        ? "bg-brand-umber text-surface-light font-semibold shadow-sm"
                        : "text-brand-muted hover:text-brand-umber"
                    }`}
                  >
                    {tab.label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* 3-Column Clean Architectural Grid */}
          <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredModules.map((mod) => {
              const IconComponent = mod.icon;
              return (
                <div
                  key={mod.id}
                  className="clean-scroll-card group rounded-[1.75rem] bg-surface-light/90 hover:bg-white border border-editorial p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-sm"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-brand-muted pb-4 border-b border-editorial">
                      <span>
                        STEP {mod.id} · {mod.pillarLabel}
                      </span>
                      <span
                        className="w-8 h-8 rounded-xl flex items-center justify-center text-brand-umber"
                        style={{ backgroundColor: mod.badgeBg }}
                      >
                        <IconComponent className="w-4 h-4" />
                      </span>
                    </div>

                    <h3 className="mt-6 text-2xl sm:text-3xl font-light tracking-tight text-brand-umber">
                      {mod.title}
                    </h3>
                    <p className="mt-3 text-sm text-brand-muted leading-relaxed">
                      {mod.description}
                    </p>
                  </div>

                  <div className="mt-8 pt-4 border-t border-editorial flex items-center justify-between font-mono text-xs">
                    <span className="text-brand-muted uppercase tracking-wider">
                      {mod.metricLabel}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-brand-umber font-bold"
                      style={{ backgroundColor: mod.badgeBg }}
                    >
                      {mod.metricValue}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Scroll-Scrubbed 4-Phase Sprint Pipeline */}
          <div className="clean-sprint-container mt-16 md:mt-24 rounded-[2rem] bg-surface-light/90 border border-editorial p-6 sm:p-10 md:p-12">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-editorial">
              <div>
                <span className="font-mono text-xs uppercase tracking-widest text-brand-muted">
                  DETERMINISTIC DELIVERY PIPELINE
                </span>
                <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-brand-umber mt-1">
                  From Architecture Brief to Global Edge Launch in 4–7 Weeks
                </h3>
              </div>
              <button
                onClick={openBriefModal}
                className="self-start sm:self-auto inline-flex items-center gap-2 rounded-full bg-brand-orange px-5 py-2.5 text-brand-umber font-mono text-xs font-bold uppercase tracking-wider"
              >
                <span>Book Sprint Slot</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Scroll-scrubbed horizontal progress track */}
            <div className="my-8 w-full h-1.5 rounded-full bg-brand-umber/10 overflow-hidden">
              <div
                ref={sprintLineRef}
                className="w-full h-full bg-brand-orange origin-left scale-x-0"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {SPRINT_TIMELINE.map((item, idx) => (
                <div
                  key={item.phase}
                  className="clean-scroll-card rounded-2xl bg-canvas/45 border border-editorial p-5 sm:p-6 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between font-mono text-xs font-bold uppercase tracking-wider text-brand-umber mb-3">
                      <span>{item.phase}</span>
                      <span className="w-6 h-6 rounded-full bg-white border border-editorial flex items-center justify-center text-[11px]">
                        0{idx + 1}
                      </span>
                    </div>
                    <h4 className="text-lg font-medium text-brand-umber mb-2">
                      {item.title}
                    </h4>
                    <p className="text-xs sm:text-sm text-brand-muted leading-relaxed">
                      {item.summary}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          n.003 / WHY — Streamlined 4-Pillar Architectural Strip
      ===================================================================== */}
      <section
        data-anchor="why"
        className="relative py-12 md:py-20 px-[var(--offset)]"
      >
        <div className="max-w-[1680px] mx-auto">
          <SectionHeader index="n.003" title="WHY FLUXWEB" variant="dark" />

          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 border border-editorial divide-y sm:divide-y-0 sm:divide-x divide-editorial rounded-[2rem] bg-surface-light/90 overflow-hidden shadow-sm">
            {WHY_PILLARS.map((pillar) => (
              <div
                key={pillar.index}
                className="clean-scroll-card p-7 sm:p-9 flex flex-col justify-between hover:bg-white transition-colors"
              >
                <div>
                  <div className="flex items-center justify-between font-mono text-xs uppercase tracking-widest text-brand-muted mb-6">
                    <span>PILLAR // {pillar.index}</span>
                    <span
                      className="px-2.5 py-0.5 rounded-full text-brand-umber font-bold text-[10px]"
                      style={{ backgroundColor: pillar.accent }}
                    >
                      CORE
                    </span>
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-light tracking-tight text-brand-umber mb-2">
                    {pillar.title}
                  </h3>
                  <div className="text-sm font-medium text-brand-umber mb-3">
                    {pillar.subtitle}
                  </div>
                  <p className="text-sm text-brand-muted leading-relaxed">
                    {pillar.detail}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          n.004 / WHERE — Clean 2x2 Editorial Case Study Showcase Grid
      ===================================================================== */}
      <section
        data-anchor="where"
        className="relative py-16 md:py-24 px-[var(--offset)]"
      >
        <div className="max-w-[1680px] mx-auto">
          <SectionHeader index="n.004" title="SELECTED WORK" variant="dark" />

          <div className="mt-12 md:mt-16 flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <div>
              <div className="font-mono text-xs uppercase tracking-widest text-brand-muted mb-2">
                PROVEN ACROSS HIGH-GROWTH SECTORS
              </div>
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-brand-umber">
                Category-defining digital flagships.
              </h2>
            </div>
            <p className="text-sm text-brand-muted max-w-md">
              Every project combines custom 3D visual identity, smooth scroll
              storytelling, and measurable conversion lift.
            </p>
          </div>

          {/* 2x2 Clean Architectural Case Study Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8">
            {CASE_STUDIES.map((study) => (
              <article
                key={study.id}
                className="clean-scroll-card group rounded-[2rem] bg-surface-light/95 border border-editorial overflow-hidden flex flex-col justify-between shadow-sm hover:shadow-md transition-all"
              >
                {/* Top Visual Viewport Band with Scroll Parallax */}
                <div className="relative p-6 sm:p-8 bg-canvas/55 border-b border-editorial flex items-center justify-between gap-6 overflow-hidden">
                  <div className="relative z-10 space-y-3 max-w-[65%]">
                    <div className="inline-flex items-center gap-2 font-mono text-xs text-brand-muted">
                      <Globe className="w-3.5 h-3.5 text-brand-orange" />
                      <span>{study.liveUrlLabel}</span>
                    </div>
                    <div>
                      <span
                        className="inline-block px-3 py-1 rounded-full font-mono text-[10px] font-bold uppercase tracking-widest text-brand-umber mb-2"
                        style={{ backgroundColor: study.accent }}
                      >
                        {study.sector}
                      </span>
                      <div className="font-mono text-xs uppercase tracking-wider text-brand-muted">
                        {study.client}
                      </div>
                    </div>
                  </div>

                  {/* Parallax 3D Sculpture Emblem */}
                  <div className="clean-case-sculpture relative z-10 w-24 h-24 sm:w-28 sm:h-28 shrink-0 will-change-transform">
                    <FluxWebLogo variant="complete" className="w-full h-full" />
                  </div>
                </div>

                {/* Case Study Body */}
                <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                  <div>
                    <h3 className="text-2xl sm:text-3xl font-light tracking-tight text-brand-umber leading-snug">
                      {study.headline}
                    </h3>
                    <p className="mt-3 text-sm sm:text-base text-brand-muted leading-relaxed">
                      {study.summary}
                    </p>

                    {/* Deliverable Pills */}
                    <div className="mt-5 flex flex-wrap gap-2">
                      {study.deliverables.map((del) => (
                        <span
                          key={del}
                          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white border border-editorial font-mono text-[11px] text-brand-umber"
                        >
                          <CheckCircle2 className="w-3 h-3 text-brand-orange" />
                          {del}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Metrics + Action Row */}
                  <div className="pt-5 border-t border-editorial flex flex-wrap items-center justify-between gap-4">
                    <div className="flex items-center gap-6">
                      {study.metrics.map((m) => (
                        <div key={m.label}>
                          <div className="text-2xl sm:text-3xl font-light text-brand-umber">
                            {m.value}
                          </div>
                          <div className="font-mono text-[10px] uppercase tracking-wider text-brand-muted">
                            {m.label}
                          </div>
                        </div>
                      ))}
                    </div>

                    <button
                      onClick={openBriefModal}
                      className="inline-flex items-center gap-1.5 rounded-full bg-brand-orange px-4 py-2.5 text-brand-umber font-mono text-xs font-bold uppercase tracking-wider active:scale-95 transition-transform"
                    >
                      <span>Commission Similar</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* =====================================================================
          n.005 / QUESTIONS — Clean 1px Architectural Accordion
      ===================================================================== */}
      <section
        data-anchor="faq"
        className="relative py-16 md:py-24 px-[var(--offset)]"
      >
        <div className="max-w-[1680px] mx-auto">
          <SectionHeader index="n.005" title="QUESTIONS" variant="dark" />

          <div className="mt-12 md:mt-16 max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="text-3xl sm:text-5xl font-light tracking-tight text-brand-umber">
                Transparent architecture & process answers.
              </h2>
            </div>

            <div className="rounded-[2rem] bg-surface-light/95 border border-editorial divide-y divide-editorial overflow-hidden shadow-sm">
              {CLEAN_FAQS.map((item) => {
                const isOpen = openFaqId === item.id;
                return (
                  <div key={item.id} className="clean-scroll-card">
                    <button
                      onClick={() =>
                        setOpenFaqId(isOpen ? "" : item.id)
                      }
                      aria-expanded={isOpen}
                      className="w-full p-6 sm:p-8 text-left flex items-center justify-between gap-4 hover:bg-white/70 transition-colors"
                    >
                      <div className="flex items-baseline gap-4 sm:gap-6">
                        <span className="font-mono text-xs uppercase tracking-widest text-brand-muted">
                          {item.index}
                        </span>
                        <span className="text-xl sm:text-2xl font-light tracking-tight text-brand-umber">
                          {item.question}
                        </span>
                      </div>

                      <span
                        className={`w-9 h-9 rounded-full shrink-0 flex items-center justify-center transition-colors ${
                          isOpen
                            ? "bg-brand-orange text-brand-umber"
                            : "bg-canvas/70 text-brand-umber"
                        }`}
                      >
                        {isOpen ? (
                          <Minus className="w-4 h-4" />
                        ) : (
                          <Plus className="w-4 h-4" />
                        )}
                      </span>
                    </button>

                    {isOpen && (
                      <div className="px-6 sm:px-8 pb-7 pt-1 pl-14 sm:pl-20 text-sm sm:text-base text-brand-muted leading-relaxed bg-white/50">
                        {item.answer}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* =====================================================================
          n.006 / CONTACT & ARCHITECTURAL FOOTER (#contact)
      ===================================================================== */}
      <section
        data-anchor="contact"
        className="relative py-16 md:py-24 px-[var(--offset)]"
      >
        <div className="max-w-[1680px] mx-auto">
          <SectionHeader index="n.006" title="CONTACT" variant="dark" />

          <div className="mt-12 md:mt-16 rounded-[2rem] bg-surface-light border border-editorial p-8 sm:p-12 md:p-16 text-center max-w-5xl mx-auto shadow-sm">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pill-lime text-brand-umber font-mono text-xs font-bold uppercase tracking-wider mb-6">
              <span className="w-2 h-2 rounded-full bg-brand-umber" />
              Ready for Q4 / Q1 Commissions
            </div>

            <h2 className="text-4xl sm:text-6xl md:text-7xl font-light tracking-tight text-brand-umber leading-[1.08]">
              Your digital flagship starts here.
            </h2>

            <p className="mt-4 text-base sm:text-lg text-brand-muted max-w-xl mx-auto leading-relaxed">
              Configure your project scope in 60 seconds or reach out directly
              to our principal web architects in Berlin.
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <button
                onClick={openBriefModal}
                data-cursor-label="Configure"
                className="inline-flex items-center gap-2.5 rounded-full bg-brand-orange px-8 py-4 text-brand-umber font-mono text-xs sm:text-sm font-bold uppercase tracking-wider active:scale-[0.98] transition-transform shadow-sm"
              >
                <span>Open Project Configurator</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>

              <a
                href="mailto:hello@fluxweb.studio"
                className="inline-flex items-center gap-2 rounded-full bg-white hover:bg-canvas/40 border border-editorial px-7 py-4 text-brand-umber font-mono text-xs sm:text-sm uppercase tracking-wider transition-colors"
              >
                <Mail className="w-4 h-4 text-brand-orange" />
                <span>hello@fluxweb.studio</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Architectural 2-Column Footer */}
      <footer className="relative overflow-hidden px-[var(--offset)] pb-28 md:pb-32 pt-4">
        <div className="max-w-[1680px] mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-brand-umber">
            <div className="border-b border-brand-umber">
              <div className="border-b border-brand-umber py-4 px-4 md:px-8 flex items-center justify-between">
                <span className="text-lg sm:text-xl font-light text-brand-umber">
                  Headquarter
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-brand-muted">
                  STUDIO // 01
                </span>
              </div>
              <div className="py-8 md:py-10 px-4 md:px-8 flex items-center justify-between gap-6">
                <div className="text-lg sm:text-xl font-light text-brand-umber leading-snug">
                  <p>FluxWeb Digital Architecture</p>
                  <p>Torstraße 112 · 10119 Berlin</p>
                  <p className="text-brand-muted text-sm mt-1">
                    Operating Globally · Remote & On-Site
                  </p>
                </div>
                <div className="w-20 h-20 shrink-0">
                  <FluxWebLogo variant="complete" className="w-full h-full" />
                </div>
              </div>
            </div>

            <div className="border-b md:border-l border-brand-umber">
              <div className="border-b border-brand-umber py-4 px-4 md:px-8 flex items-center justify-between">
                <span className="text-lg sm:text-xl font-light text-brand-umber">
                  Direct Channels
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-brand-muted">
                  CONTACT // 02
                </span>
              </div>
              <div className="py-8 md:py-10 px-4 md:px-8 space-y-2.5 text-lg sm:text-xl font-light text-brand-umber">
                <div>
                  <a
                    href="tel:+4930901820"
                    className="wembi-underline inline-flex items-center gap-2.5"
                  >
                    <Phone className="w-4 h-4 text-brand-orange" />
                    <span>+49 30 9018 2040</span>
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:hello@fluxweb.studio"
                    className="wembi-underline inline-flex items-center gap-2.5"
                  >
                    <Mail className="w-4 h-4 text-brand-orange" />
                    <span>hello@fluxweb.studio</span>
                  </a>
                </div>
                <div className="pt-2 flex flex-wrap items-center gap-3">
                  <button
                    onClick={openBriefModal}
                    className="font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full bg-brand-orange text-brand-umber font-bold"
                  >
                    Open Architecture Brief →
                  </button>
                  <Link
                    href="/"
                    className="font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full bg-surface-light border border-editorial text-brand-umber hover:bg-white"
                  >
                    Switch to Expressive Edition
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-brand-umber">
            <div className="flex items-center gap-3">
              <FluxWebLogo variant="badge" className="h-5 w-auto" />
              <span>FluxWeb Studio · Clean Edition © 2026</span>
            </div>
            <div className="flex items-center gap-6">
              <Link href="/" className="hover:text-brand-orange transition-colors">
                Expressive Edition
              </Link>
              <Link
                href="/clean"
                className="underline underline-offset-4 font-bold"
              >
                Clean Edition
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Interactive Project Configurator / Architecture Brief Modal */}
      {isBriefModalOpen && (
        <div
          data-lenis-prevent
          className="fixed inset-0 z-[95] bg-brand-umber/80 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
        >
          <div className="relative w-full max-w-2xl rounded-[2rem] bg-surface-light text-brand-umber border border-brand-umber p-6 sm:p-10 shadow-2xl my-auto">
            <div className="flex items-center justify-between border-b border-editorial pb-4 mb-6">
              <div className="flex items-center gap-3">
                <FluxWebLogo variant="badge" className="h-6 w-auto" />
                <span className="font-mono text-xs uppercase tracking-widest text-brand-muted">
                  ARCHITECTURE BRIEF // PROJECT CONFIGURATOR
                </span>
              </div>
              <button
                onClick={() => {
                  setIsSubmitted(false);
                  closeBriefModal();
                }}
                aria-label="Close brief modal"
                className="w-9 h-9 rounded-full bg-brand-orange text-brand-umber flex items-center justify-center active:scale-95"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {isSubmitted ? (
              <div className="py-12 text-center space-y-5">
                <div className="w-24 h-24 mx-auto">
                  <FluxWebLogo variant="complete" className="w-full h-full" />
                </div>
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-pill-lime text-brand-umber font-mono text-xs font-bold uppercase tracking-wider">
                  <CheckCircle2 className="w-4 h-4" />
                  Brief Received
                </div>
                <h4 className="text-3xl sm:text-4xl font-light tracking-tight">
                  Thank you{companyName ? `, ${companyName}` : ""}.
                </h4>
                <p className="text-sm sm:text-base text-brand-muted max-w-md mx-auto leading-relaxed">
                  Our principal web architects have received your{" "}
                  <span className="text-brand-umber font-medium">
                    {selectedScope}
                  </span>{" "}
                  parameters and will respond within 24 hours with a tailored
                  architecture blueprint.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setIsSubmitted(false);
                      closeBriefModal();
                    }}
                    className="rounded-full bg-brand-orange px-8 py-3.5 text-brand-umber font-mono text-xs font-bold uppercase tracking-wider"
                  >
                    Return to FluxWeb
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-brand-muted mb-2.5">
                    01. Select Flagship Scope
                  </label>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                    {PROJECT_SCOPES.map((scope) => {
                      const active = selectedScope === scope;
                      return (
                        <button
                          type="button"
                          key={scope}
                          onClick={() => setSelectedScope(scope)}
                          className={`text-left px-4 py-3 rounded-xl border font-mono text-xs transition-all ${
                            active
                              ? "bg-brand-orange text-brand-umber border-brand-umber font-bold"
                              : "bg-white/70 text-brand-umber border-editorial hover:bg-white"
                          }`}
                        >
                          {scope}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div>
                  <label className="block font-mono text-xs uppercase tracking-wider text-brand-muted mb-2.5">
                    02. Estimated Investment Range
                  </label>
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                    {BUDGET_TIERS.map((tier) => {
                      const active = selectedBudget === tier;
                      return (
                        <button
                          type="button"
                          key={tier}
                          onClick={() => setSelectedBudget(tier)}
                          className={`px-3 py-2.5 rounded-xl border font-mono text-xs text-center transition-all ${
                            active
                              ? "bg-pill-lime text-brand-umber border-brand-umber font-bold"
                              : "bg-white/70 text-brand-umber border-editorial hover:bg-white"
                          }`}
                        >
                          {tier}
                        </button>
                      );
                    })}
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      htmlFor="clean-brief-company"
                      className="block font-mono text-xs uppercase tracking-wider text-brand-muted mb-1.5"
                    >
                      03. Company / Brand
                    </label>
                    <input
                      id="clean-brief-company"
                      type="text"
                      required
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      placeholder="Acme Corp"
                      className="w-full rounded-xl border border-brand-umber/30 bg-white px-4 py-3 text-sm text-brand-umber placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="clean-brief-email"
                      className="block font-mono text-xs uppercase tracking-wider text-brand-muted mb-1.5"
                    >
                      04. Work Email
                    </label>
                    <input
                      id="clean-brief-email"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="founder@company.com"
                      className="w-full rounded-xl border border-brand-umber/30 bg-white px-4 py-3 text-sm text-brand-umber placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-orange"
                    />
                  </div>
                </div>

                <div>
                  <label
                    htmlFor="clean-brief-notes"
                    className="block font-mono text-xs uppercase tracking-wider text-brand-muted mb-1.5"
                  >
                    05. Project Goals & Reference Notes
                  </label>
                  <textarea
                    id="clean-brief-notes"
                    rows={3}
                    value={projectNotes}
                    onChange={(e) => setProjectNotes(e.target.value)}
                    placeholder="Tell us about your current website, target launch window, and desired interactive features..."
                    className="w-full rounded-xl border border-brand-umber/30 bg-white px-4 py-3 text-sm text-brand-umber placeholder:text-brand-muted/50 focus:outline-none focus:border-brand-orange"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full rounded-xl bg-brand-orange py-4 px-6 text-brand-umber font-mono text-xs sm:text-sm font-bold uppercase tracking-wider flex items-center justify-center gap-2 active:scale-[0.98] transition-transform"
                >
                  <Send className="w-4 h-4" />
                  <span>Transmit Architecture Brief</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
