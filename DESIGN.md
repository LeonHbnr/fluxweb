# Visual Design System: Warm Editorial Tech

## 1. Color Tokens & Semantic Roles
- Canvas (Background): #C8F3FF (Ice Cream Blue — crisp, pale cyan baseline)
- Surface Elevated: rgba(255, 255, 255, 0.45) (Frosted tinted backing)
- Primary Text / Ink: #3D1405 (Burnt Umber — high-contrast 13.6:1 legible anchor)
- Secondary Text: #6E4436 (Muted Umber — 6.8:1 contrast for captions, metadata, indexes)
- Accent / Display: #FF5C23 (Atomic Orange — strictly for display titles, badges, and button fills)
- Structural Border: rgba(61, 20, 5, 0.12) (1px architectural grid lines using ink base)

## 2. Text-on-Surface Rules
- NEVER render Atomic Orange body text on Ice Cream Blue (fails WCAG at 2.6:1).
- Use Atomic Orange exclusively on:
  - Hero display headlines (minimum size `text-4xl` / 36px font-light)
  - Solid button fills with Burnt Umber text (#3D1405)
  - 1px hairline accents and status indicator dots
- All continuous reading copy, paragraphs, and lists MUST use Burnt Umber (#3D1405).

## 3. Interaction & Hierarchy
- Primary Buttons: Solid `#FF5C23` background with `#3D1405` bold text.
- Micro-interaction: Active state darkens slightly (`active:scale-[0.98]`).
- Grid Dividers: 1px continuous borders (`divide-editorial`).

