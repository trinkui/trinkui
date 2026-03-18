# TrinkUI — Claude Code Instructions

This file tells Claude Code how to work in this repository. Read it fully before making any changes.

## What is TrinkUI

TrinkUI is a **landing page–focused, open-source React UI library** distributed as `@trinkui/react`. It is NOT a general-purpose component library. Every component exists to serve landing pages: hero sections, features, pricing, testimonials, FAQ, CTA, etc.

## Monorepo Structure

```
trinkui/
├── packages/
│   ├── react/          # @trinkui/react — the component library (tsup CJS+ESM+DTS)
│   └── shared/         # @trinkui/shared — shared types and constants
├── apps/
│   └── docs/           # Next.js 15 documentation site
└── templates/          # Full landing page templates (future)
```

**Build commands:**
```bash
pnpm build                          # build everything (turbo)
pnpm --filter @trinkui/react build  # build only the library
pnpm --filter @trinkui/shared build # build only shared
pnpm --filter docs build            # build only docs
pnpm --filter docs dev              # start docs dev server
```

## Component Directory Layout

```
packages/react/src/
├── animation/          # FadeIn, SlideUp, StaggerChildren
├── layout/             # Container, Section, SectionHeader
├── primitives/
│   ├── button/         # Button.tsx, button.types.ts, button.styles.ts, index.ts
│   └── badge/          # Badge.tsx, index.ts
├── sections/
│   └── hero/           # HeroCentered.tsx, HeroSplit.tsx, HeroMinimal.tsx, hero.types.ts, index.ts
├── themes/             # default.css (CSS custom properties)
├── utils/              # cn.ts, variants.ts
└── index.ts            # single barrel export for the entire package
```

## The 3-Layer Component Hierarchy

1. **Primitives** (`src/primitives/`) — atomic UI: Button, Badge, Input, Card, etc.
2. **Layout** (`src/layout/`) — structural wrappers: Section, Container, SectionHeader
3. **Sections** (`src/sections/`) — full landing page sections: Hero, Features, Pricing, etc.
   - Sections always use Layout components internally.
   - Sections never use other Sections internally.

## Required Pattern for Every Component

### File structure (example: new Pricing section)
```
src/sections/pricing/
├── pricing.types.ts    # all TypeScript interfaces
├── pricing.styles.ts   # variant class definitions using variants()
├── PricingCards.tsx    # first variant
├── PricingTable.tsx    # second variant (if any)
└── index.ts            # barrel export
```

### Section component template (follow HeroCentered.tsx exactly)
```tsx
"use client";

import React, { forwardRef } from "react";
import type { MyBaseProps } from "./my.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { FadeIn } from "../../animation/FadeIn";   // or SlideUp/StaggerChildren
import { cn } from "../../utils/cn";

export interface MyComponentProps extends MyBaseProps {
  // extra props
}

export const MyComponent = forwardRef<HTMLElement, MyComponentProps>(
  ({ title, subtitle, theme, animated = true, className, children, ...props }, ref) => {
    return (
      <Section ref={ref} theme={theme} spacing="lg" className={cn("relative", className)} {...props}>
        <Container size="xl">
          {/* content */}
        </Container>
      </Section>
    );
  }
);

MyComponent.displayName = "MyComponent";
```

### Primitive component template (follow Button.tsx exactly)
```tsx
import React, { forwardRef } from "react";
import type { MyProps } from "./my.types";
import { myStyles } from "./my.styles";
import { cn } from "../../utils/cn";

export const MyPrimitive = forwardRef<HTMLElement, MyProps>(
  ({ variant = "default", size = "md", className, children, ...props }, ref) => {
    return (
      <element
        ref={ref}
        className={cn(myStyles({ variant, size }), className)}
        {...props}
      >
        {children}
      </element>
    );
  }
);

MyPrimitive.displayName = "MyPrimitive";
```

## Styling Rules

- **Always** use Tailwind CSS v4 utility classes
- **Always** reference colors via CSS variables: `text-[rgb(var(--trinkui-fg))]`
- **Always** merge classes with `cn()` from `src/utils/cn.ts`
- **Always** define variant classes in a separate `*.styles.ts` file using `variants()` from `src/utils/variants.ts`
- **Never** hardcode hex/rgb color values
- **Never** use inline `style={{}}`
- **Never** use CSS-in-JS (styled-components, emotion, etc.)
- **Never** write `!important`
- Responsive: mobile-first — `sm:` → `md:` → `lg:`
- Dark mode: `.dark` class strategy (already handled by `Section` component's `theme` prop)

## CSS Variable Reference

```css
--trinkui-bg          /* page/section background */
--trinkui-fg          /* primary text */
--trinkui-primary     /* brand color (indigo-500 light, indigo-400 dark) */
--trinkui-primary-fg  /* text on primary */
--trinkui-secondary   /* secondary surfaces */
--trinkui-secondary-fg
--trinkui-accent      /* accent (orange) */
--trinkui-muted       /* muted/secondary text */
--trinkui-border      /* borders */
--trinkui-surface     /* elevated surfaces (cards, sidebars) */
--trinkui-radius-sm/md/lg/xl/full
--trinkui-shadow-sm/md/lg
--trinkui-font-heading/body/mono
```

## Animation Rules

- Use `FadeIn`, `SlideUp`, or `StaggerChildren` from `src/animation/`
- All animation wrappers call `useReducedMotion()` — if true, render plain `<div>` instead
- Always support `animated={false}` prop on section components to skip animation entirely
- Animation defaults: `scrollTrigger={true}`, `once: true`
- Only animate `opacity` and `transform` (no layout animations)

## TypeScript Rules

- Strict mode — no `any` type
- All prop interfaces in a separate `*.types.ts` file
- Every public prop must have a `/** JSDoc comment */`
- Import types with `import type { ... }` (not `import { type ... }`)
- Use `interface` not `type` for prop objects
- Use `forwardRef` on every component

## Accessibility Rules

- Use semantic HTML: `<section>`, `<article>`, `<nav>`, `<header>`, `<footer>`
- Every `<img>` requires `alt` text
- Interactive elements need `focus-visible:ring-2` styles (already in Button)
- Heading hierarchy inside sections starts at `<h2>` (page has one `<h1>`)
- Add `aria-label` where visible text is insufficient

## "use client" Rules

- Add `"use client"` ONLY when a component uses React hooks (`useState`, `useEffect`, `useRef`, custom hooks), browser APIs, or Motion animation hooks
- Animation wrappers (`FadeIn`, `SlideUp`, `StaggerChildren`) have it because they use `useReducedMotion`
- Section components that use animation wrappers also need it
- Layout components (`Container`, `Section`, `SectionHeader`) do NOT need it
- Primitive `Button` does NOT need it — it has no hooks

## Adding a New Component — Checklist

Before saying you're done, verify:
- [ ] TypeScript: all props have JSDoc, no `any`, interfaces in `*.types.ts`
- [ ] Styling: all colors via CSS variables, `cn()` used, variants in `*.styles.ts`
- [ ] Animation: `animated` prop supported, `useReducedMotion` respected
- [ ] Accessibility: semantic HTML, `alt`, `focus-visible`, aria where needed
- [ ] `forwardRef` implemented, `displayName` set
- [ ] `index.ts` barrel export in component folder updated
- [ ] `packages/react/src/index.ts` updated with the new export
- [ ] Build passes: `pnpm --filter @trinkui/react build`

## What NOT To Do

- Do NOT add Shadcn, Radix, HeroUI, Chakra, or any external UI library
- Do NOT hardcode colors (`#6366f1`, `rgb(99,102,241)`, `indigo-500` literals)
- Do NOT use `any` type
- Do NOT leave `console.log` in code
- Do NOT make animations mandatory (always provide `animated={false}` escape)
- Do NOT add `"use client"` to files that don't need it
- Do NOT fetch data inside components
- Do NOT write snapshot tests
- Do NOT forget to add new components to `packages/react/src/index.ts`
- Do NOT create a component without checking if a similar one already exists

## Docs Site Conventions

- Docs: `apps/docs/` — Next.js 15 App Router
- Component pages live at `apps/docs/app/components/[component-name]/page.tsx`
- Use `ComponentPreview` for live previews with toggle between preview/code tabs
- Use `PropsTable` for API documentation
- Use `CodeBlock` for static code snippets
- When adding a new component page, also add it to the Sidebar nav in `apps/docs/components/Sidebar.tsx`

## Commit Message Format

```
feat(hero): add HeroVideo variant
fix(button): correct focus-visible ring color in dark mode
docs(pricing): add PricingCards component page
refactor(animation): extract shared viewport config
test(button): add keyboard navigation test
```

## Before You Start Any Task

1. Read the relevant existing source files — never assume the pattern
2. Check `packages/react/src/index.ts` to understand current exports
3. Run `pnpm build` at the end to confirm nothing is broken
4. If you changed `Sidebar.tsx`, verify the nav link works

## Semantic Color Variables

In addition to the base variables, use these semantic colors:

```css
--trinkui-success   /* green — positive actions, success states */
--trinkui-warning   /* amber — caution, warnings */
--trinkui-danger    /* red — errors, destructive actions */
--trinkui-info      /* blue — informational */
```

Always use `rgb(var(--trinkui-danger))` instead of hardcoded `red-500` etc.

## Testing

- Tests use Vitest + @testing-library/react
- Test files go next to the component: `Button.test.tsx`
- Run: `pnpm --filter @trinkui/react test`
- Minimum: test render, props, events, accessibility
