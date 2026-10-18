import React from "react";
import { SmoothScrollProvider } from "@/components/SmoothScrollProvider";
import { Preloader } from "@/components/Preloader";
import { CustomCursor } from "@/components/CustomCursor";
import { FloatingNav } from "@/components/FloatingNav";
import { HeroSection } from "@/components/HeroSection";
import { WhatSection } from "@/components/WhatSection";
import { HowSection } from "@/components/HowSection";
import { WhyAndWorkSection } from "@/components/WhyAndWorkSection";
import { FaqSection } from "@/components/FaqSection";
import { ContactAndFooter } from "@/components/ContactAndFooter";

export default function HomePage() {
  return (
    <SmoothScrollProvider>
      <Preloader />
      <CustomCursor />
      <FloatingNav />
      <main id="app" className="relative min-h-screen">
        <article>
          <HeroSection />
          <WhatSection />
          <HowSection />
          <WhyAndWorkSection />
          <FaqSection />
          <ContactAndFooter />
        </article>
      </main>
    </SmoothScrollProvider>
  );
}
