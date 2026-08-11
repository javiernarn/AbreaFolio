---
name: design-system-abreafolio-jb-boy-abrea-portfolio
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards for AbreaFolio. Use when creating or updating UI rules, component specifications, or design-system documentation for JB Boy M. Abrea's portfolio.
---

<!-- TYPEUI_SH_MANAGED_START -->

# AbreaFolio: JB Boy M. Abrea — Project Manager & Data Analyst Portfolio

## Mission
Deliver implementation-ready design-system guidance for AbreaFolio that can be applied consistently across the personal portfolio web app.

## Brand
- Product/brand: AbreaFolio — JB Boy M. Abrea Portfolio
- URL: (example placeholder — add real deployment URL later)
- Audience: recruiters, hiring managers, capstone advisers, and collaborators
- Product surface: personal portfolio web app

## Style Foundations
- Visual style: precise, data-driven, "Limitless" energy theme — deep void backgrounds with electric-blue and violet accents
- Main font style: `font.family.primary=Poppins`, `font.family.display=Playfair Display`, `font.family.stack=Poppins, system-ui, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=25.6px`
- Typography scale: `font.size.xs=13.5px`, `font.size.sm=14.5px`, `font.size.md=16px`, `font.size.lg=18px`, `font.size.xl=26px`, `font.size.2xl=42px`, `font.size.3xl=50px`
- Color palette: `color.bg.void=#05060f`, `color.bg.surface=#0a0c1f`, `color.text.primary=#f5f7ff`, `color.text.dim=#b9c2e8`, `color.accent.blue=#4f8cff`, `color.accent.cyan=#22d3ee`, `color.accent.violet=#8b5cf6`
- Spacing scale: `space.1=8px`, `space.2=14px`, `space.3=18px`, `space.4=20px`, `space.5=24px`, `space.6=32px`, `space.7=44px`, `space.8=60px`
- Radius/shadow/motion tokens: `radius.sm=13px` | `radius.md=20px` | `radius.lg=30px` | `shadow.glow=0 25px 70px -25px rgba(79,140,255,.4)` | `motion.duration.instant=200ms` | `motion.duration.reveal=800ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required.

## Writing Tone
confident, precise, outcome-focused

## Rules: Do
- Use semantic tokens, not raw hex values in component guidance.
- Every component must define required states: default, hover, focus-visible, active, disabled, loading, error.
- Responsive behavior and edge-case handling should be specified for every component family.
- Accessibility acceptance criteria must be testable in implementation.
- Flag placeholder/example content (dates, employers, figures) until replaced with verified data.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.
- Do not present placeholder biographical data as verified fact.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy, variants, and interactions.
4. Add accessibility acceptance criteria.
5. Add anti-patterns and migration notes.
6. End with QA checklist.

## Required Output Structure
- Context and goals
- Design tokens and foundations
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Prefer system consistency over local visual exceptions.

<!-- TYPEUI_SH_MANAGED_END -->
