"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SectionHeader } from "./SectionHeader";
import { FluxWebLogo } from "./FluxWebLogo";
import { useSmoothScroll } from "./SmoothScrollProvider";
import { CheckCircle2, Mail, Phone, Send, X } from "lucide-react";

const PROJECT_SCOPES = [
  "Flagship Corporate Website",
  "3D & Kinetic Scroll Redesign",
  "Design System + Next.js Build",
  "Interactive Product Launch",
];

const BUDGET_TIERS = ["€15k – €30k", "€30k – €60k", "€60k – €100k", "€100k+"];

export function ContactAndFooter() {
  const contactSectionRef = useRef<HTMLElement>(null);
  const pill0Ref = useRef<HTMLLIElement>(null);
  const pill1Ref = useRef<HTMLLIElement>(null);
  const { isBriefModalOpen, openBriefModal, closeBriefModal } =
    useSmoothScroll();

  const [selectedScope, setSelectedScope] = useState(PROJECT_SCOPES[0]);
  const [selectedBudget, setSelectedBudget] = useState(BUDGET_TIERS[1]);
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [projectNotes, setProjectNotes] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);
    const section = contactSectionRef.current;
    const p0 = pill0Ref.current;
    const p1 = pill1Ref.current;
    if (!section || !p0 || !p1) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        p0,
        { yPercent: 25, scale: 0.76, force3D: true },
        {
          yPercent: -4,
          scale: 1,
          force3D: true,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "center 45%",
            scrub: true,
          },
        }
      );

      gsap.fromTo(
        p1,
        { yPercent: -25, scale: 0.76, force3D: true },
        {
          yPercent: 4,
          scale: 1,
          force3D: true,
          ease: "none",
          scrollTrigger: {
            trigger: section,
            start: "top 80%",
            end: "center 45%",
            scrub: true,
          },
        }
      );
    }, section);

    return () => ctx.revert();
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  return (
    <>
      {/* n.006 / CONTACT — Wembi .contact Section */}
      <section
        ref={contactSectionRef}
        data-anchor="contact"
        className="relative py-20 md:py-32 px-[var(--offset)]"
      >
        <div className="max-w-[1680px] mx-auto">
          <SectionHeader index="n.006" title="CONTACT" variant="dark" />

          <div className="max-w-5xl mx-auto text-center mt-16 md:mt-28 px-4">
            <h3 className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-light tracking-tight text-brand-umber leading-[1.06]">
              Your transformation starts here. Contact us.
            </h3>
          </div>

          {/* Wembi Contact Pills (Start Brief in #BEFF8B & Mail in #D5BAFB) */}
          <div className="mt-14 md:mt-20 flex flex-col items-center justify-center">
            <ul className="flex flex-col items-center justify-center">
              <li
                ref={pill0Ref}
                className="z-20 rounded-[2rem] bg-pill-lime text-brand-umber shadow-lg will-change-transform"
              >
                <button
                  onClick={openBriefModal}
                  data-cursor-label="Configure"
                  className="px-12 sm:px-20 md:px-28 py-7 sm:py-10 md:py-14 flex items-center justify-center"
                >
                  <span className="wembi-link text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
                    <span className="wembi-link-inner" data-label="Start Brief">
                      Start Brief
                    </span>
                  </span>
                </button>
              </li>

              <li
                ref={pill1Ref}
                className="z-10 rounded-full bg-pill-lavender text-brand-umber shadow-lg will-change-transform"
              >
                <a
                  href="mailto:hello@fluxweb.studio"
                  data-cursor-label="Email"
                  className="px-12 sm:px-20 md:px-28 py-7 sm:py-10 md:py-14 flex items-center justify-center"
                >
                  <span className="wembi-link text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-light tracking-tight">
                    <span className="wembi-link-inner" data-label="Mail">
                      Mail
                    </span>
                  </span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Wembi Architectural 2-Column Footer (.footer) */}
      <footer className="relative overflow-hidden px-[var(--offset)] pb-28 md:pb-32 pt-8">
        <div className="max-w-[1680px] mx-auto">
          {/* 2-Column 1px Bordered Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 border-t border-brand-umber">
            {/* Left Column: Studio Headquarters */}
            <div className="border-b border-brand-umber">
              <div className="border-b border-brand-umber py-5 px-4 md:px-10 flex items-center justify-between">
                <span className="text-xl sm:text-2xl md:text-3xl font-light text-brand-umber">
                  Headquarter
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-brand-muted">
                  STUDIO // 01
                </span>
              </div>
              <div className="py-10 md:py-14 px-4 md:px-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
                <div className="text-xl sm:text-2xl md:text-3xl font-light text-brand-umber leading-snug">
                  <p>FluxWeb Digital Architecture</p>
                  <p>Torstraße 112 · 10119 Berlin</p>
                  <p className="text-brand-muted text-lg mt-1">
                    Operating Globally · Remote & On-Site
                  </p>
                </div>
                <div className="w-24 h-24 shrink-0">
                  <FluxWebLogo variant="complete" className="w-full h-full" />
                </div>
              </div>
            </div>

            {/* Right Column: Direct Contact Endpoints */}
            <div className="border-b md:border-l border-brand-umber">
              <div className="border-b border-brand-umber py-5 px-4 md:px-10 flex items-center justify-between">
                <span className="text-xl sm:text-2xl md:text-3xl font-light text-brand-umber">
                  Contact
                </span>
                <span className="font-mono text-xs uppercase tracking-widest text-brand-muted">
                  DIRECT CHANNELS // 02
                </span>
              </div>
              <div className="py-10 md:py-14 px-4 md:px-10 space-y-3 text-xl sm:text-2xl md:text-3xl font-light text-brand-umber">
                <div>
                  <a
                    href="tel:+4930901820"
                    className="wembi-link wembi-underline inline-flex items-center gap-3"
                  >
                    <Phone className="w-5 h-5 text-brand-orange" />
                    <span
                      className="wembi-link-inner"
                      data-label="Phone — +49 30 9018 2040"
                    >
                      Phone — +49 30 9018 2040
                    </span>
                  </a>
                </div>
                <div>
                  <a
                    href="mailto:hello@fluxweb.studio"
                    className="wembi-link wembi-underline inline-flex items-center gap-3"
                  >
                    <Mail className="w-5 h-5 text-brand-orange" />
                    <span
                      className="wembi-link-inner"
                      data-label="Mail — hello@fluxweb.studio"
                    >
                      Mail — hello@fluxweb.studio
                    </span>
                  </a>
                </div>
                <div className="pt-2">
                  <button
                    onClick={openBriefModal}
                    className="font-mono text-xs uppercase tracking-widest px-4 py-2 rounded-full bg-brand-orange text-brand-umber font-bold"
                  >
                    Open Interactive Architecture Brief →
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Footer Bottom Legal & Language Row (.footer__bottom) */}
          <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 font-mono text-xs uppercase tracking-wider text-brand-umber">
            <div className="flex items-center gap-3">
              <FluxWebLogo variant="badge" className="h-6 w-auto" />
              <span>FluxWeb Studio · All Rights Reserved © 2026</span>
            </div>

            <ul className="flex flex-wrap items-center gap-6">
              <li>
                <a
                  href="#hero"
                  className="wembi-underline hover:text-brand-orange transition-colors"
                >
                  Privacy
                </a>
              </li>
              <li>
                <a
                  href="#hero"
                  className="wembi-underline hover:text-brand-orange transition-colors"
                >
                  Imprint
                </a>
              </li>
              <li>
                <a
                  href="#hero"
                  className="wembi-underline hover:text-brand-orange transition-colors"
                >
                  System v2.6.0
                </a>
              </li>
              <li className="flex items-center gap-1.5 pl-2 border-l border-editorial">
                <span className="text-brand-muted mr-1">Language</span>
                <span className="underline underline-offset-4 font-bold">
                  Eng
                </span>
                <span>·</span>
                <button
                  onClick={openBriefModal}
                  className="text-brand-muted hover:text-brand-umber"
                >
                  Deu
                </button>
              </li>
            </ul>
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
                      htmlFor="brief-company"
                      className="block font-mono text-xs uppercase tracking-wider text-brand-muted mb-1.5"
                    >
                      03. Company / Brand
                    </label>
                    <input
                      id="brief-company"
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
                      htmlFor="brief-email"
                      className="block font-mono text-xs uppercase tracking-wider text-brand-muted mb-1.5"
                    >
                      04. Work Email
                    </label>
                    <input
                      id="brief-email"
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
                    htmlFor="brief-notes"
                    className="block font-mono text-xs uppercase tracking-wider text-brand-muted mb-1.5"
                  >
                    05. Project Goals & Reference Notes
                  </label>
                  <textarea
                    id="brief-notes"
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
    </>
  );
}
