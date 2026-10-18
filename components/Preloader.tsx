"use client";

import React, { useEffect, useState } from "react";
import { FluxWebLogo } from "./FluxWebLogo";

export function Preloader() {
  const [progress, setProgress] = useState(0);
  const [wordsRevealed, setWordsRevealed] = useState(false);
  const [isExiting, setIsExiting] = useState(false);
  const [isHidden, setIsHidden] = useState(false);

  useEffect(() => {
    const revealTimer = setTimeout(() => setWordsRevealed(true), 80);

    let frameId: number;
    const startTime = performance.now();
    const duration = 1550;

    const tick = (now: number) => {
      const elapsed = now - startTime;
      const ratio = Math.min(1, elapsed / duration);
      // Smooth cubic-bezier-like ease-in-out
      const eased =
        ratio < 0.5
          ? 4 * ratio * ratio * ratio
          : 1 - Math.pow(-2 * ratio + 2, 3) / 2;

      setProgress(Math.round(eased * 100));

      if (ratio < 1) {
        frameId = requestAnimationFrame(tick);
      } else {
        setTimeout(() => {
          setIsExiting(true);
          setTimeout(() => setIsHidden(true), 850);
        }, 220);
      }
    };

    frameId = requestAnimationFrame(tick);

    return () => {
      clearTimeout(revealTimer);
      cancelAnimationFrame(frameId);
    };
  }, []);

  if (isHidden) return null;

  const formattedNumber = String(progress).padStart(3, "0");

  return (
    <div
      id="app-loader"
      className={`fixed inset-0 z-[100] bg-brand-orange text-brand-umber flex flex-col items-center justify-center overflow-hidden transition-transform duration-[850ms] ease-wembi-quart ${
        isExiting ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      {/* Top index bar */}
      <div className="absolute top-6 inset-x-6 md:top-8 md:inset-x-10 flex items-center justify-between font-mono text-xs md:text-sm tracking-widest uppercase text-brand-umber/80">
        <span>N°000 / FLUXWEB STUDIO</span>
        <span>BESPOKE WEB ENGINEERING</span>
      </div>

      {/* Centerpiece: Official FluxWeb_complete.pdf composition (3D fluid sculpture + pill badge on #FF5C23) */}
      <div className="flex flex-col items-center justify-center px-6 max-w-5xl w-full">
        <div
          className={`w-44 h-44 md:w-60 md:h-60 mb-6 transition-all duration-700 ease-wembi-out ${
            wordsRevealed
              ? "opacity-100 scale-100 translate-y-0"
              : "opacity-0 scale-90 translate-y-6"
          }`}
        >
          <FluxWebLogo variant="complete" className="w-full h-full" />
        </div>

        {/* Wembi-style masked 3-part tagline reveal */}
        <h3 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light tracking-tight text-center flex flex-col md:flex-row items-center justify-center gap-x-3 gap-y-1 text-brand-umber">
          {["Bespoke", "Digital Flagships", "of Everything"].map((word, idx) => (
            <span
              key={word}
              className="inline-block overflow-hidden"
              style={{ clipPath: "inset(-10% 0 -10% 0)" }}
            >
              <span
                className="inline-block transition-transform duration-700 ease-wembi-out"
                style={{
                  transform: wordsRevealed
                    ? "translateY(0%)"
                    : "translateY(110%)",
                  transitionDelay: `${idx * 90}ms`,
                }}
              >
                {word}
              </span>
            </span>
          ))}
        </h3>
      </div>

      {/* Wembi bottom sliding counter (000 -> 100) + progress hairline */}
      <div className="absolute bottom-8 inset-x-6 md:bottom-10 md:inset-x-10">
        <div className="relative w-full h-8 mb-2 overflow-hidden">
          <div
            className="w-full transition-transform duration-75 ease-out"
            style={{ transform: `translateX(${progress}%)` }}
          >
            <span
              className="inline-block font-mono text-lg md:text-2xl font-medium text-brand-umber"
              style={{ transform: `translateX(-${progress}%)` }}
            >
              {formattedNumber}
            </span>
          </div>
        </div>
        <div className="w-full h-[2px] bg-brand-umber/20 overflow-hidden">
          <div
            className="w-full h-full bg-brand-umber origin-left transition-transform duration-75 ease-out"
            style={{ transform: `scaleX(${progress / 100})` }}
          />
        </div>
      </div>
    </div>
  );
}
