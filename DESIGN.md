# AbreaFolio: JB Boy M. Abrea — Project Manager & Data Analyst Portfolio

## Mission
Create implementation-ready, token-driven UI guidance for AbreaFolio that is optimized for consistency, accessibility, and fast delivery across a personal portfolio web app.

## Brand
- Product/brand: AbreaFolio — JB Boy M. Abrea Portfolio
- URL: (example placeholder — add real deployment URL later)
- Audience: recruiters, hiring managers, capstone advisers, and collaborators
- Product surface: personal portfolio web app

## Style Foundations
- Visual style: precise, data-driven, "Limitless" energy theme — deep void backgrounds with electric-blue and violet cursed-energy accents
- Main font style: `font.family.primary=Poppins`, `font.family.display=Playfair Display`, `font.family.stack=Poppins, system-ui, sans-serif`, `font.size.base=16px`, `font.weight.base=400`, `font.lineHeight.base=25.6px`
- Typography scale: `font.size.xs=13.5px`, `font.size.sm=14.5px`, `font.size.md=16px`, `font.size.lg=18px`, `font.size.xl=26px`, `font.size.2xl=42px`, `font.size.3xl=50px`
- Color palette: `color.bg.void=#05060f`, `color.bg.surface=#0a0c1f`, `color.text.primary=#f5f7ff`, `color.text.dim=#b9c2e8`, `color.accent.blue=#4f8cff`, `color.accent.cyan=#22d3ee`, `color.accent.violet=#8b5cf6`
- Spacing scale: `space.1=8px`, `space.2=14px`, `space.3=18px`, `space.4=20px`, `space.5=24px`, `space.6=32px`, `space.7=44px`, `space.8=60px`
- Radius/shadow/motion tokens: `radius.sm=13px` | `radius.md=20px` | `radius.lg=30px` | `shadow.glow=0 25px 70px -25px rgba(79,140,255,.4)` | `motion.duration.instant=200ms` | `motion.duration.reveal=800ms`

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required.
- Focus-visible rules required.
- Contrast constraints required (electric-blue and violet accents must be checked against the near-black background at body-text sizes; large display text may use lighter-weight contrast only per WCAG large-text thresholds).

## Writing Tone
Confident, precise, and outcome-focused — describe project-management and data work in plain, testable claims rather than vague adjectives.

## Rules: Do
- Use semantic tokens, not raw hex values, in component guidance.
- Every component must define states for default, hover, focus-visible, active, disabled, loading, and error.
- Component behavior should specify responsive and edge-case handling.
- Interactive components must document keyboard, pointer, and touch behavior.
- Accessibility acceptance criteria must be testable in implementation.
- Placeholder/example content (dates, employers, figures) must be visually or textually flagged as an example until replaced with verified data.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions (e.g. "Click Here").
- Do not ship component guidance without explicit state rules.
- Do not present placeholder dates, employers, or metrics as verified fact in the shipped copy.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and semantic tokens.
3. Define component anatomy, variants, interactions, and state behavior.
4. Add accessibility acceptance criteria with pass/fail checks.
5. Add anti-patterns, migration notes, and edge-case handling.
6. End with a QA checklist.

## Required Output Structure
- Context and goals.
- Design tokens and foundations.
- Component-level rules (anatomy, variants, states, responsive behavior).
- Accessibility requirements and testable acceptance criteria.
- Content and tone standards with examples.
- Anti-patterns and prohibited implementations.
- QA checklist.

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.
- Include known page component density: nav links (7), buttons (4), timeline items (variable, education + experience), skill cards (8), project cards (1 featured + 3 collaboration), cert cards (4), interest cards (4).

- Extraction diagnostics: Personal details (employer names, dates, certifications, project scope) are currently placeholder/example content pending JB's verified information; treat all biographical data as low-confidence until confirmed.

## Quality Gates
- Every non-negotiable rule must use "must".
- Every recommendation should use "should".
- Every accessibility rule must be testable in implementation.
- Teams should prefer system consistency over local visual exceptions.
