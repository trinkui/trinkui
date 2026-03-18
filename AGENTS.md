# TrinkUI — Agent Conventions

This document defines the rules, conventions, and constraints for all AI agents working in this repository. These rules apply to Claude Code, Cursor, Copilot, and any other AI assistant.

---

## 1. Project Overview

**TrinkUI** is an open-source React UI library focused exclusively on landing pages. It is distributed as an npm package (`@trinkui/react`) under the MIT license.

**What it is:**
- A curated library of landing page section components (Hero, Features, Pricing, Testimonials, CTA, FAQ, etc.)
- A set of animation wrappers for scroll-triggered reveal effects
- A theme system based on CSS custom properties

**What it is NOT:**
- A general-purpose UI library (no data tables, complex forms, dashboards)
- A dependency on Radix, Shadcn, HeroUI, Chakra, or any third-party component system
- A component wrapping framework — everything is built from scratch

**Audience:** React developers building marketing/landing pages.

---

## 2. Architecture

### Monorepo (Turborepo + pnpm workspaces)

```
trinkui/
├── packages/
│   ├── react/          # @trinkui/react — main component library
│   └── shared/         # @trinkui/shared — shared TypeScript types and constants
├── apps/
│   └── docs/           # Documentation site (Next.js 15 App Router)
└── templates/          # Full-page templates (future)
```

### Package responsibilities

| Package | Purpose |
|---------|---------|
| `@trinkui/shared` | `ActionProps`, `ImageProps`, `BaseSectionProps`, `Theme`, `ContainerSize`, `SectionSpacing`, constants (`SECTION_SPACING`, `CONTAINER_SIZES`) |
| `@trinkui/react` | All components, animation wrappers, utilities (`cn`, `variants`), CSS theme |
| `apps/docs` | Next.js 15 documentation site — shows previews, code, and props tables |

### 3-layer component hierarchy

```
Primitives   →   packages/react/src/primitives/   (Button, Badge, Input…)
Layout       →   packages/react/src/layout/        (Section, Container, SectionHeader)
Sections     →   packages/react/src/sections/      (Hero, Features, Pricing…)
```

Rules:
- Sections use Layout and Primitives internally
- Sections never import other Sections
- Primitives never import Layout or Sections

### Build system

- **packages**: `tsup` → CJS + ESM + `.d.ts`
- **docs**: `next build` via Next.js 15
- **orchestration**: `turbo run build` (respects dependency order: shared → react → docs)

---

## 3. Tech Stack

| Concern | Tool | Notes |
|---------|------|-------|
| Framework | React 19 + TypeScript 5 | Strict mode |
| Styling | Tailwind CSS v4 | CSS variables for theming, no Tailwind config file needed |
| Animation | `motion` (`motion/react`) | Was `framer-motion`, now `motion` package |
| Build (library) | `tsup` | CJS + ESM + declaration files |
| Build (docs) | Next.js 15 App Router | `transpilePackages: ["@trinkui/react"]` |
| Package manager | pnpm 9 | Workspaces via `pnpm-workspace.yaml` |
| Tests | Vitest + Testing Library | |

**Banned external UI dependencies:** Shadcn, Radix UI, HeroUI, Chakra UI, Mantine, DaisyUI, Ant Design, Material UI, or any other UI component system.

---

## 4. File Structure Conventions

### Component folder structure (primitive example: Button)
```
src/primitives/button/
├── Button.tsx            # component implementation
├── button.types.ts       # TypeScript interfaces
├── button.styles.ts      # variant class definitions (variants())
└── index.ts              # barrel: export { Button } from "./Button"
```

### Section folder structure (section example: Hero)
```
src/sections/hero/
├── hero.types.ts         # HeroBaseProps interface
├── HeroCentered.tsx      # centered variant
├── HeroSplit.tsx         # split layout variant
├── HeroMinimal.tsx       # minimal variant
└── index.ts              # barrel export
```

### Naming rules
- Component files: `PascalCase.tsx` (`HeroCentered.tsx`, `Button.tsx`)
- Type files: `kebab-case.types.ts` (`hero.types.ts`, `button.types.ts`)
- Style files: `kebab-case.styles.ts` (`button.styles.ts`)
- Hooks: `camelCase.ts` (`useScrollAnimation.ts`)
- Every folder must have an `index.ts` barrel export

---

## 5. Component API Design Rules

### Standard prop names (apply across all section components)

| Prop | Type | Description |
|------|------|-------------|
| `title` | `string` | Main heading — required for sections |
| `subtitle` | `string` | Supporting description — optional |
| `pill` | `string` | Top badge/label — optional |
| `primaryAction` | `ActionProps` | Main CTA button |
| `secondaryAction` | `ActionProps` | Secondary CTA button |
| `image` | `ImageProps` | Section image |
| `theme` | `"light" \| "dark"` | Section color theme |
| `animated` | `boolean` | Enable entrance animations (default: `true`) |
| `className` | `string` | Extra Tailwind classes merged via `cn()` |
| `children` | `ReactNode` | Custom slot content |

### Shared type definitions (from `@trinkui/shared`)

```ts
interface ActionProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  target?: "_blank" | "_self";
}

interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

interface BaseSectionProps {
  theme?: "light" | "dark";
  className?: string;
  children?: ReactNode;
}
```

### Component requirements
- **All props are optional** with sensible defaults (except `title` on section components)
- `forwardRef` is mandatory on every component
- `displayName` must be set: `MyComponent.displayName = "MyComponent"`
- `className` must always be merged with `cn()`, never concatenated with `+`

---

## 6. Styling Rules

### Do
```tsx
// ✅ CSS variable via Tailwind arbitrary value
className="text-[rgb(var(--trinkui-fg))]"

// ✅ Merge classes with cn()
className={cn("flex items-center", isActive && "font-bold", className)}

// ✅ Variant classes in styles file using variants()
import { myStyles } from "./my.styles";
className={cn(myStyles({ variant, size }), className)}

// ✅ Tailwind tokens for spacing, typography
className="px-4 py-2 text-sm font-medium"

// ✅ CSS variable for radius/shadow in arbitrary value
className="rounded-[var(--trinkui-radius-md)] shadow-[var(--trinkui-shadow-lg)]"
```

### Don't
```tsx
// ❌ Hardcoded color
style={{ color: "#6366f1" }}
className="text-indigo-500"   // only if indigo-500 isn't a CSS variable

// ❌ Inline style
style={{ padding: "16px", background: "white" }}

// ❌ CSS-in-JS
const StyledDiv = styled.div`background: blue;`

// ❌ Global CSS (except theme files in src/themes/)
// ❌ !important
```

### `variants()` utility usage
```ts
// button.styles.ts
import { variants } from "../../utils/variants";

export const buttonStyles = variants({
  base: "inline-flex items-center font-medium transition-all",
  variants: {
    variant: {
      primary: "bg-[rgb(var(--trinkui-primary))] text-[rgb(var(--trinkui-primary-fg))]",
      outline: "border border-[rgb(var(--trinkui-border))] text-[rgb(var(--trinkui-fg))]",
    },
    size: {
      sm: "h-8 px-3 text-sm rounded-[var(--trinkui-radius-sm)]",
      md: "h-10 px-4 text-sm rounded-[var(--trinkui-radius-md)]",
    },
  },
  defaultVariants: { variant: "primary", size: "md" },
});
```

---

## 7. Animation Rules

### Animation wrappers
- `FadeIn` — opacity: 0 → 1 on scroll
- `SlideUp` — opacity: 0 + y: N → opacity: 1 + y: 0 on scroll
- `StaggerChildren` — sequential reveal of children

### Rules
1. Every animation wrapper calls `useReducedMotion()` — if `true`, renders plain `<div>` with no animation
2. Section components accept `animated={false}` — when false, skip all animation wrappers entirely:
   ```tsx
   const Wrapper = animated ? SlideUp : React.Fragment;
   const wrapperProps = animated ? { scrollTrigger: false } : {};
   ```
3. Default `scrollTrigger={true}` — animations fire when element enters viewport
4. Use `viewport={{ once: true, margin: "-50px" }}` — animate only once
5. Stagger delays: `0`, `0.05`, `0.1`, `0.15`, `0.25` (max)
6. Animate **only** `opacity` and `transform` (no width, height, or layout properties)

---

## 8. TypeScript Rules

- TypeScript `strict: true` — always
- `any` type is forbidden everywhere
- `as unknown as X` cast is acceptable only to resolve ref type mismatches
- All prop shapes defined as `interface`, not `type`
- Every public prop must have a `/** JSDoc comment */`
- Type files are separate: `component.types.ts`
- Import types with the `import type` keyword:
  ```ts
  import type { ButtonProps } from "./button.types";
  ```
- Generic constraints are required: `<T extends string>` not `<T>`

---

## 9. Accessibility Rules

- Use semantic HTML elements: `<section>`, `<article>`, `<nav>`, `<main>`, `<header>`, `<footer>`, `<aside>`
- Every `<img>` requires `alt` (empty `alt=""` for decorative images)
- Every interactive element needs `focus-visible:ring-2 focus-visible:ring-offset-2` styles
- Heading hierarchy in sections starts at `<h2>` (the page has exactly one `<h1>` in the Hero)
- Add `aria-label` when the visible label is missing or ambiguous
- Add `aria-busy={true}` on loading states (already in Button)
- Color contrast: WCAG AA minimum (4.5:1 for normal text, 3:1 for large)
- Use `aria-hidden="true"` on decorative SVGs and icons

---

## 10. Section Component Pattern

Every section component follows this exact pattern (reference: `packages/react/src/sections/hero/HeroCentered.tsx`):

```tsx
"use client";  // required: uses useReducedMotion via animation wrappers

import React, { forwardRef } from "react";
import type { MyBaseProps } from "./my.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { SlideUp } from "../../animation/SlideUp";
import { cn } from "../../utils/cn";

export interface MySectionProps extends MyBaseProps {
  /** Additional class for inner wrapper */
  contentClassName?: string;
}

export const MySection = forwardRef<HTMLElement, MySectionProps>(
  ({ title, subtitle, theme, animated = true, className, contentClassName, children, ...props }, ref) => {
    const Wrapper = animated ? SlideUp : React.Fragment;
    const wrapperProps = animated ? { scrollTrigger: false } : {};

    return (
      <Section ref={ref} theme={theme} spacing="lg" className={cn("relative overflow-hidden", className)} {...props}>
        <Container size="xl">
          <div className={cn("flex flex-col gap-8", contentClassName)}>
            <Wrapper {...(wrapperProps as object)} delay={0}>
              <h2 className="font-heading text-3xl font-bold tracking-tight text-[rgb(var(--trinkui-fg))] sm:text-4xl">
                {title}
              </h2>
            </Wrapper>
            {subtitle && (
              <Wrapper {...(wrapperProps as object)} delay={0.05}>
                <p className="text-lg text-[rgb(var(--trinkui-muted))]">{subtitle}</p>
              </Wrapper>
            )}
            {children}
          </div>
        </Container>
      </Section>
    );
  }
);

MySection.displayName = "MySection";
```

**Structural checklist for every section:**
- Wraps content in `<Section>` (handles spacing, theme, background)
- Uses `<Container>` for max-width
- Supports `animated` prop with `React.Fragment` fallback
- Passes `ref` to `Section`
- Merges `className` via `cn()`
- Fully responsive (mobile-first breakpoints)
- Supports `theme="dark"` / `theme="light"`

---

## 11. Testing Conventions

- **Framework:** Vitest + `@testing-library/react`
- **Location:** Same folder as the component: `Button.test.tsx` next to `Button.tsx`
- **Required test cases for every component:**
  1. Renders without crashing
  2. Applies correct variant/size classes
  3. Passes ref correctly
  4. Renders children
  5. Keyboard accessibility (Tab, Enter/Space for interactive elements)
  6. Accessibility with `axe-core` (`@axe-core/react` or `jest-axe`)
- **Forbidden:** Snapshot tests (`toMatchSnapshot`, `toMatchInlineSnapshot`)

---

## 12. Git & PR Conventions

### Commit message format (Conventional Commits)
```
feat(hero): add HeroVideo variant with autoplay support
fix(button): correct focus-visible ring color in dark mode
docs(pricing): add PricingCards documentation page
refactor(animation): extract shared viewport options
test(button): add keyboard navigation and axe accessibility tests
chore(deps): bump motion to 11.15.0
```

### Branch naming
```
feat/hero-video
feat/pricing-cards
fix/button-focus-dark
fix/hero-centered-mobile
docs/section-header
refactor/animation-hooks
```

### PR requirements
- Description of what changed and why
- Screenshot or screen recording for any visual component change

---

## 13. Docs Site Conventions

- **Location:** `apps/docs/app/components/[slug]/page.tsx`
- **Page structure:**
  1. Category breadcrumb (e.g., "Hero")
  2. Component name heading
  3. Short description
  4. Installation code block
  5. `ComponentPreview` with live preview + code tab
  6. `PropsTable` for API reference
- **Sidebar:** Add new components to `apps/docs/components/Sidebar.tsx` under the correct category
- **ComponentPreview:** Always pass `animated={false}` to section components inside `ComponentPreview` (prevents animation firing in the doc iframe)
- **Code examples:** Show real usage, not contrived examples

---

## 14. Anti-Patterns — NEVER DO

```
❌ Add Shadcn, Radix, HeroUI, Chakra, Mantine, or any external UI library
❌ Hardcode colors: "#6366f1", "rgb(99,102,241)", "bg-indigo-500" as fixed colors
❌ Use inline style={{}} for anything other than dynamic CSS variables
❌ Use CSS-in-JS (styled-components, emotion, stitches)
❌ Write global CSS outside of src/themes/
❌ Use TypeScript's `any` type
❌ Leave console.log() in committed code
❌ Make animations non-disableable (always provide animated={false})
❌ Add "use client" to files that have no hooks or browser APIs
❌ Fetch data inside a component (no useEffect + fetch, no SWR, no React Query)
❌ Write snapshot tests (toMatchSnapshot)
❌ Create a component without adding it to packages/react/src/index.ts
❌ Use !important in CSS
❌ Import from @trinkui/react inside @trinkui/react (circular)
❌ Create a Section that imports another Section
```
