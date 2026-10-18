"use client";

import React, { useEffect, useRef, useState } from "react";

interface SplitTextRevealProps {
  text: string;
  bulletColor?: string;
  showGooeyBullets?: boolean;
  className?: string;
  staggerMs?: number;
}

/**
 * Wembi-style .text + .js-text component:
 * Splits copy into masked word tokens that slide up when entering the viewport,
 * preceded by the signature Gooey Twin Bullets that separate apart via #goo-meta filter.
 */
export function SplitTextReveal({
  text,
  bulletColor = "#EBFBFF",
  showGooeyBullets = true,
  className = "",
  staggerMs = 24,
}: SplitTextRevealProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
          }
        });
      },
      { threshold: 0.18 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  const words = text.split(" ");

  return (
    <div
      ref={containerRef}
      className={`leading-[1.14] tracking-tight ${
        isInView ? "is-inview" : ""
      } ${className}`}
    >
      {showGooeyBullets && (
        <span className="goo-bullet-pair" aria-hidden="true">
          <span
            className="goo-bullet-dot"
            style={{ backgroundColor: bulletColor }}
          />
          <span
            className="goo-bullet-dot"
            style={{ backgroundColor: bulletColor }}
          />
        </span>
      )}
      <span className="inline">
        {words.map((word, i) => (
          <React.Fragment key={`${word}-${i}`}>
            <span className="word-mask">
              <span
                className="word-inner"
                style={{
                  transitionDelay: isInView ? `${i * staggerMs}ms` : "0ms",
                }}
              >
                {word}
              </span>
            </span>
            {i < words.length - 1 ? " " : ""}
          </React.Fragment>
        ))}
      </span>
    </div>
  );
}
