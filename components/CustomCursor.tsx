"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";

export function CustomCursor() {
  const cursorRef = useRef<HTMLDivElement>(null);
  const lastHoveredRef = useRef<boolean>(false);
  const lastLabelRef = useRef<string | null>(null);
  const [hoveredLabel, setHoveredLabel] = useState<string | null>(null);
  const [isPointerHovered, setIsPointerHovered] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    const xTo = gsap.quickTo(cursor, "x", {
      duration: 0.18,
      ease: "power3.out",
    });
    const yTo = gsap.quickTo(cursor, "y", {
      duration: 0.18,
      ease: "power3.out",
    });

    const onMouseMove = (e: MouseEvent) => {
      xTo(e.clientX);
      yTo(e.clientY);

      const target = e.target as HTMLElement | null;
      const interactive = target?.closest(
        "button, a, [data-cursor-label]"
      ) as HTMLElement | null;

      const nextHover = Boolean(interactive);
      const nextLabel = interactive?.getAttribute("data-cursor-label") || null;

      if (nextHover !== lastHoveredRef.current) {
        lastHoveredRef.current = nextHover;
        setIsPointerHovered(nextHover);
      }
      if (nextLabel !== lastLabelRef.current) {
        lastLabelRef.current = nextLabel;
        setHoveredLabel(nextLabel);
      }
    };

    window.addEventListener("mousemove", onMouseMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return (
    <div
      ref={cursorRef}
      className="fixed top-0 left-0 z-[90] pointer-events-none hidden md:flex items-center justify-center -translate-x-1/2 -translate-y-1/2 will-change-transform"
    >
      <div
        className={`rounded-full bg-brand-orange text-brand-umber font-mono text-[10px] font-bold tracking-wider uppercase flex items-center justify-center transition-all duration-300 ease-wembi-out ${
          hoveredLabel
            ? "px-3.5 py-1.5 min-w-[4.5rem] h-7 shadow-md"
            : isPointerHovered
            ? "w-6 h-6 opacity-90 scale-125"
            : "w-3.5 h-3.5 opacity-100 scale-100"
        }`}
      >
        {hoveredLabel && <span>{hoveredLabel}</span>}
      </div>
    </div>
  );
}
