"use client";

import React from "react";

interface SectionHeaderProps {
  index: string;
  title: string;
  variant?: "dark" | "orange" | "light";
  className?: string;
}

/**
 * Wembi-style .s-head architectural 3-column header with 1px bottom hairline:
 * [ n.001 ]                 [ WHAT ]                 [ n.001 ]
 */
export function SectionHeader({
  index,
  title,
  variant = "dark",
  className = "",
}: SectionHeaderProps) {
  const colorClasses =
    variant === "orange"
      ? "text-brand-orange border-brand-orange/40"
      : variant === "light"
      ? "text-surface-light border-surface-light/30"
      : "text-brand-umber border-editorial";

  return (
    <div
      className={`w-full border-b py-8 md:py-12 px-4 md:px-8 flex items-center justify-center ${colorClasses} ${className}`}
    >
      <div className="w-full max-w-5xl grid grid-cols-3 items-center font-mono text-xs sm:text-sm md:text-base tracking-widest uppercase">
        <span className="text-left">{index}</span>
        <span className="text-center font-medium">{title}</span>
        <span className="text-right">{index}</span>
      </div>
    </div>
  );
}
