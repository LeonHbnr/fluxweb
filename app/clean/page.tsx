import React from "react";
import type { Metadata } from "next";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { CustomCursor } from "@/components/CustomCursor";
import { FloatingNav } from "@/components/FloatingNav";
import { CleanExperience } from "@/components/clean/CleanExperience";

export const metadata: Metadata = {
  title: "FluxWeb (Clean Edition) • Bespoke Digital Flagships",
  description:
    "Streamlined editorial edition of FluxWeb—combining architectural clarity, smooth scroll motions, and sub-second Next.js edge performance.",
};

export default function CleanPage() {
  return (
    <SmoothScrollProvider>
      <CustomCursor />
      <FloatingNav />
      <main id="app-clean" className="relative min-h-screen">
        <CleanExperience />
      </main>
    </SmoothScrollProvider>
  );
}
