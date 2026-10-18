# FluxWeb — Bespoke Digital Flagships

**FluxWeb** is the web flagship for a bespoke web engineering and design studio. It showcases category-defining digital architecture, kinetic scroll choreography, interactive 3D fluid branding, and sub-second Next.js performance.

---

## Key Features & Sections

- **Count-Up Preloader & Hero (`#hero`)** — Full-viewport Atomic Orange (`#FF5C23`) count-up preloader (`000 → 100`), interactive 3D fluid sculpture centerpiece, spanning `flux web` vector wordmark, and gooey double-dot manifesto reveal.
- **Floating Navigation & Custom Cursor** — Persistent floating navigation bar with section anchors and a custom interactive cursor.
- **`n.001` / WHAT (`#what`)** — Editorial manifesto with line-by-line masked text reveals and an architectural 3-column telemetry strip (`99.8` Lighthouse Velocity, `60 FPS` Kinetic Choreography, `+210%` Conversion Lift).
- **`n.002` / HOW (`#how`)** — Scroll-fanning gooey mega-pills (`Design Architecture` & `Kinetic Engineering`) paired with dual scroll-pinned 3-step sticky showcases (`01 Web Craft` & `02 Performance`) featuring clip-path media transitions and slot-machine category tickers.
- **`n.003` / WHY & `n.004` / WHERE (`#why`, `#where`)** — 4-pill scroll-scrubbed value stack (`Distinctive`, `Performant`, `Scalable`, `Conversion-Driven`) and an interactive Client Sector & Case-Study Accordion (`AI & SaaS Flagships`, `Fintech & Web3`, `Industrial & DeepTech`, `Design-Forward Commerce`) with live interactive viewport mockups.
- **`n.005` / QUESTIONS (`#faq`)** — Signature folder-tabbed FAQ deck (`01`–`05`) with animated active tab indicators, frosted `#BEFF8B` answer overlay, and sequential controls.
- **`n.006` / CONTACT & Footer (`#contact`)** — Oversized display CTA, gooey action pills (`Start a Brief`, `Book a Call`, `Direct Mail`), interactive Project Configurator Drawer, and a 2-column `1px` architectural footer.

---

## Tech Stack

- **Framework:** [Next.js 14](https://nextjs.org/) (App Router)
- **Language:** [TypeScript 5](https://www.typescriptlang.org/)
- **UI Library:** [React 18](https://react.dev/)
- **Styling:** [Tailwind CSS 3.4](https://tailwindcss.com/)
- **Animation & Choreography:** [GSAP 3](https://gsap.com/) & `@gsap/react`
- **Smooth Scrolling:** [Lenis](https://lenis.darkroom.engineering/) (`lenis` & `@studio-freight/react-lenis`)
- **Icons:** [Lucide React](https://lucide.dev/)
- **Typography:** `Inter` (`--font-sans`) & `JetBrains Mono` (`--font-mono`) via `next/font/google`

---

## Design System ("Warm Editorial Tech")

| Token | Value | Role |
| :--- | :--- | :--- |
| **Canvas (`bg-canvas`)** | `#C8F3FF` | Ice Cream Blue baseline background |
| **Surface (`bg-surface`)** | `rgba(255, 255, 255, 0.45)` | Frosted tinted elevated surface |
| **Primary Ink (`text-brand-umber`)** | `#3D1405` | Burnt Umber primary typography (13.6:1 contrast) |
| **Secondary Ink (`text-brand-muted`)** | `#6E4436` | Muted Umber captions, metadata, and indexes |
| **Accent (`bg-brand-orange`)** | `#FF5C23` | Atomic Orange display headlines, badges, and solid button fills |
| **Accent Pills** | `#BEFF8B` / `#D5BAFB` | Lime & Lavender highlight pills and overlays |
| **Editorial Border (`border-editorial`)** | `rgba(61, 20, 5, 0.12)` | `1px` continuous architectural grid dividers |

For full design guidelines and product specifications, see [`DESIGN.md`](./DESIGN.md) and [`PRODUCT.md`](./PRODUCT.md).

---

## Project Structure

```text
fluxweb/
├── app/
│   ├── globals.css                # Global styles, custom utilities, and SVG gooey filters
│   ├── layout.tsx                 # Root layout, Google Fonts setup, and page metadata
│   └── page.tsx                   # Main single-page flagship experience
├── components/
│   ├── Preloader.tsx              # Full-viewport 000 -> 100 count-up preloader
│   ├── SmoothScrollProvider.tsx   # Lenis smooth scroll wrapper & GSAP ScrollTrigger sync
│   ├── CustomCursor.tsx           # Interactive custom cursor follower
│   ├── FloatingNav.tsx            # Floating navigation bar & quick section jumper
│   ├── FluxWebLogo.tsx            # Vector wordmark & brand mark components
│   ├── SectionHeader.tsx          # Architectural numbered section header
│   ├── SplitTextReveal.tsx        # Line-by-line masked text animation component
│   ├── HeroSection.tsx            # Hero container with interactive 3D fluid centerpiece
│   ├── WhatSection.tsx            # n.001 Manifesto & telemetry strip
│   ├── HowSection.tsx             # n.002 Scroll-fanning mega-pills & sticky showcases
│   ├── WhyAndWorkSection.tsx      # n.003 Value stack & n.004 Sector case-study accordion
│   ├── FaqSection.tsx             # n.005 Folder-tabbed FAQ deck
│   └── ContactAndFooter.tsx       # n.006 Contact CTA, Project Configurator Drawer & footer
├── public/
│   ├── FluxWeb_logo.svg           # Full vector wordmark
│   ├── FluxWeb_mark.svg           # Brand mark symbol
│   ├── fluxweb-3d.png             # 3D fluid sculpture (PNG)
│   └── fluxweb-3d.webp            # 3D fluid sculpture (WebP)
├── DESIGN.md                      # Visual design system tokens & accessibility rules
├── PRODUCT.md                     # Product context, audience, and section blueprint
├── tailwind.config.ts             # Custom Tailwind theme tokens, colors, and easings
└── package.json
```

---

## Getting Started

### Prerequisites

- **Node.js** `>= 18.17`
- **npm** (or `pnpm` / `yarn`)

### Installation

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts the Next.js development server with hot reloading |
| `npm run build` | Creates an optimized production build |
| `npm run start` | Starts the Next.js production server |
| `npm run lint` | Runs ESLint checks via `next lint` |
