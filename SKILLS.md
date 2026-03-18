# TrinkUI — Agent Skills

Step-by-step recipes for common development tasks. Each skill is a complete how-to guide that any AI agent should be able to execute autonomously.

---

## Skill 1: Create a New Section Component

Create a new landing page section (e.g., Pricing, Features, Testimonials, FAQ).

**Reference:** `packages/react/src/sections/hero/` — follow this directory and its files exactly.

### Steps

**1. Create the directory**
```
packages/react/src/sections/[section-name]/
```

**2. Write `[section-name].types.ts`**

Extend `BaseSectionProps` from `@trinkui/shared`. Use `ActionProps` and `ImageProps` as needed.

```ts
// packages/react/src/sections/features/features.types.ts
import type { BaseSectionProps, ActionProps, ImageProps } from "@trinkui/shared";

export interface FeatureItem {
  /** Icon element or emoji */
  icon?: React.ReactNode;
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
}

export interface FeaturesBaseProps extends BaseSectionProps {
  /** Top badge label */
  pill?: string;
  /** Section headline */
  title: string;
  /** Supporting description */
  subtitle?: string;
  /** Array of feature items */
  features?: FeatureItem[];
  /** Primary CTA */
  primaryAction?: ActionProps;
  /** Enable entrance animations (default: true) */
  animated?: boolean;
}
```

**3. Write `[section-name].styles.ts`** (if the section has variant styles)

```ts
// packages/react/src/sections/features/features.styles.ts
import { variants } from "../../utils/variants";

export const featureCardStyles = variants({
  base: "flex flex-col gap-3 rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] p-6",
  variants: {
    variant: {
      default: "bg-[rgb(var(--trinkui-surface))]",
      outlined: "bg-transparent",
    },
  },
  defaultVariants: { variant: "default" },
});
```

**4. Write the main variant component**

Follow `HeroCentered.tsx` structure exactly:
- `"use client"` at the top
- `forwardRef<HTMLElement, Props>`
- `const Wrapper = animated ? SlideUp : React.Fragment`
- Wrap content in `<Section>` → `<Container>`
- All colors via CSS variables
- `displayName` at the bottom

```tsx
// packages/react/src/sections/features/FeaturesGrid.tsx
"use client";

import React, { forwardRef } from "react";
import type { FeaturesBaseProps } from "./features.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { SectionHeader } from "../../layout/SectionHeader";
import { StaggerChildren } from "../../animation/StaggerChildren";
import { SlideUp } from "../../animation/SlideUp";
import { featureCardStyles } from "./features.styles";
import { cn } from "../../utils/cn";

export interface FeaturesGridProps extends FeaturesBaseProps {
  /** Number of columns (default: 3) */
  columns?: 2 | 3 | 4;
}

export const FeaturesGrid = forwardRef<HTMLElement, FeaturesGridProps>(
  ({ pill, title, subtitle, features = [], columns = 3, theme, animated = true, className, children, ...props }, ref) => {
    const Wrapper = animated ? SlideUp : React.Fragment;
    const wrapperProps = animated ? { scrollTrigger: false } : {};

    return (
      <Section ref={ref} theme={theme} spacing="lg" className={cn("relative", className)} {...props}>
        <Container size="xl">
          <div className="flex flex-col gap-12">
            <Wrapper {...(wrapperProps as object)} delay={0}>
              <SectionHeader pill={pill} title={title} subtitle={subtitle} align="center" />
            </Wrapper>
            <StaggerChildren
              staggerDelay={0.08}
              className={cn(
                "grid gap-6",
                columns === 2 && "sm:grid-cols-2",
                columns === 3 && "sm:grid-cols-2 lg:grid-cols-3",
                columns === 4 && "sm:grid-cols-2 lg:grid-cols-4"
              )}
            >
              {features.map((feature, i) => (
                <div key={i} className={featureCardStyles({ variant: "default" })}>
                  {feature.icon && <div className="text-[rgb(var(--trinkui-primary))]">{feature.icon}</div>}
                  <h3 className="text-lg font-semibold text-[rgb(var(--trinkui-fg))]">{feature.title}</h3>
                  <p className="text-[rgb(var(--trinkui-muted))]">{feature.description}</p>
                </div>
              ))}
            </StaggerChildren>
            {children}
          </div>
        </Container>
      </Section>
    );
  }
);

FeaturesGrid.displayName = "FeaturesGrid";
```

**5. Write `index.ts`**
```ts
// packages/react/src/sections/features/index.ts
export { FeaturesGrid } from "./FeaturesGrid";
export type { FeaturesGridProps, FeaturesBaseProps, FeatureItem } from "./features.types";
```

**6. Add to main `packages/react/src/index.ts`**
```ts
// Sections — Features
export { FeaturesGrid } from "./sections/features";
export type { FeaturesGridProps, FeaturesBaseProps, FeatureItem } from "./sections/features";
```

**7. Add docs page** at `apps/docs/app/components/features-grid/page.tsx` (see Skill 7)

**8. Add to Sidebar** in `apps/docs/components/Sidebar.tsx` under the "Features" category

**9. Verify build**
```bash
pnpm --filter @trinkui/react build
pnpm --filter docs build
```

---

## Skill 2: Create a New Primitive Component

Create a new atomic UI primitive (e.g., Input, Card, Accordion, Avatar).

**Reference:** `packages/react/src/primitives/button/` — follow this directory exactly.

### Steps

**1. Create the directory**
```
packages/react/src/primitives/[component-name]/
```

**2. Write `[component-name].types.ts`**
```ts
// packages/react/src/primitives/input/input.types.ts
import type { InputHTMLAttributes } from "react";

export type InputVariant = "default" | "filled" | "outline";
export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  /** Visual style variant */
  variant?: InputVariant;
  /** Size */
  size?: InputSize;
  /** Label text */
  label?: string;
  /** Helper text below input */
  hint?: string;
  /** Error message (also sets error state) */
  error?: string;
  /** Left slot content (icon) */
  leftSlot?: React.ReactNode;
  /** Right slot content (icon, button) */
  rightSlot?: React.ReactNode;
  /** Stretch to container width (default: true) */
  fullWidth?: boolean;
}
```

**3. Write `[component-name].styles.ts`**
```ts
// packages/react/src/primitives/input/input.styles.ts
import { variants } from "../../utils/variants";

export const inputStyles = variants({
  base: [
    "flex items-center gap-2 transition-colors",
    "border border-[rgb(var(--trinkui-border))]",
    "bg-[rgb(var(--trinkui-bg))] text-[rgb(var(--trinkui-fg))]",
    "placeholder:text-[rgb(var(--trinkui-muted))]",
    "focus-within:ring-2 focus-within:ring-[rgb(var(--trinkui-primary))] focus-within:ring-offset-1",
    "disabled:opacity-50 disabled:pointer-events-none",
  ].join(" "),
  variants: {
    variant: {
      default: "rounded-[var(--trinkui-radius-md)]",
      filled: "rounded-[var(--trinkui-radius-md)] bg-[rgb(var(--trinkui-surface))]",
      outline: "rounded-[var(--trinkui-radius-md)] bg-transparent",
    },
    size: {
      sm: "h-8 px-3 text-sm",
      md: "h-10 px-4 text-sm",
      lg: "h-12 px-4 text-base",
    },
    hasError: {
      true: "border-red-500 focus-within:ring-red-500",
      false: "",
    },
  },
  defaultVariants: { variant: "default", size: "md", hasError: "false" },
});
```

**4. Write the component**
```tsx
// packages/react/src/primitives/input/Input.tsx
import React, { forwardRef } from "react";
import type { InputProps } from "./input.types";
import { inputStyles } from "./input.styles";
import { cn } from "../../utils/cn";

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ variant = "default", size = "md", label, hint, error, leftSlot, rightSlot, fullWidth = true, className, id, ...props }, ref) => {
    const inputId = id ?? `input-${Math.random().toString(36).slice(2, 7)}`;

    return (
      <div className={cn("flex flex-col gap-1.5", fullWidth && "w-full")}>
        {label && (
          <label htmlFor={inputId} className="text-sm font-medium text-[rgb(var(--trinkui-fg))]">
            {label}
          </label>
        )}
        <div className={cn(inputStyles({ variant, size, hasError: error ? "true" : "false" }), className)}>
          {leftSlot && <span className="text-[rgb(var(--trinkui-muted))]">{leftSlot}</span>}
          <input
            ref={ref}
            id={inputId}
            aria-describedby={error ? `${inputId}-error` : hint ? `${inputId}-hint` : undefined}
            aria-invalid={!!error}
            className="flex-1 bg-transparent outline-none"
            {...props}
          />
          {rightSlot && <span className="text-[rgb(var(--trinkui-muted))]">{rightSlot}</span>}
        </div>
        {error && (
          <p id={`${inputId}-error`} className="text-sm text-red-500" role="alert">{error}</p>
        )}
        {!error && hint && (
          <p id={`${inputId}-hint`} className="text-sm text-[rgb(var(--trinkui-muted))]">{hint}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
```

**5. Write `index.ts`**
```ts
export { Input } from "./Input";
export type { InputProps, InputVariant, InputSize } from "./input.types";
```

**6. Add to `packages/react/src/index.ts`**
```ts
export { Input } from "./primitives/input/Input";
export type { InputProps, InputVariant, InputSize } from "./primitives/input/input.types";
```

**7. Add docs page** (see Skill 7)

**8. Verify build**
```bash
pnpm --filter @trinkui/react build
```

---

## Skill 3: Add a New Variant to an Existing Section

Add a new variant to an existing section (e.g., adding `HeroVideo` to the hero section).

**Reference:** `packages/react/src/sections/hero/HeroSplit.tsx` — copy structure, don't modify existing files.

### Steps

**1. Read the existing section directory**
```bash
# Read all existing files before writing anything
```
- Read `[section].types.ts` — understand existing props
- Read one existing variant — understand the pattern

**2. Create the new variant file** in the existing section directory
```
packages/react/src/sections/hero/HeroVideo.tsx
```

**3. Extend types if needed**
```ts
// hero.types.ts — add to the existing file only if new props are needed
export interface HeroVideoProps extends HeroBaseProps {
  /** Video URL (mp4) */
  videoSrc: string;
  /** Video poster image */
  videoPoster?: string;
  /** Autoplay the video */
  autoplay?: boolean;
}
```

**4. Write the new variant** following the section pattern

**5. Update `index.ts`** in the section folder
```ts
// Add to existing exports
export { HeroVideo } from "./HeroVideo";
export type { HeroVideoProps } from "./HeroVideo";
```

**6. Update `packages/react/src/index.ts`**
```ts
// Add to existing hero exports
export { HeroCentered, HeroSplit, HeroMinimal, HeroVideo } from "./sections/hero";
export type { HeroCenteredProps, HeroSplitProps, HeroMinimalProps, HeroVideoProps } from "./sections/hero";
```

**7. Add to docs Sidebar** under the existing section category

**8. Add docs page** for the new variant

**9. Verify build**
```bash
pnpm --filter @trinkui/react build
```

---

## Skill 4: Create a New Theme Preset

Create a new color theme (e.g., `midnight`, `forest`, `brutalist`).

**Reference:** `packages/react/src/themes/default.css` — override the same set of variables.

### Steps

**1. Read `default.css`** to understand all variables that must be defined

**2. Create the theme file**
```css
/* packages/react/src/themes/midnight.css */
@import "tailwindcss";

[data-theme="midnight"] {
  --trinkui-bg: 2 6 23;             /* slate-950 */
  --trinkui-fg: 226 232 240;        /* slate-200 */
  --trinkui-primary: 139 92 246;    /* violet-500 */
  --trinkui-primary-fg: 255 255 255;
  --trinkui-secondary: 15 23 42;    /* slate-900 */
  --trinkui-secondary-fg: 148 163 184;
  --trinkui-accent: 236 72 153;     /* pink-500 */
  --trinkui-muted: 100 116 139;     /* slate-500 */
  --trinkui-border: 30 41 59;       /* slate-800 */
  --trinkui-surface: 15 23 42;      /* slate-900 */

  --trinkui-font-heading: "Inter", sans-serif;
  --trinkui-font-body: "Inter", sans-serif;
  --trinkui-font-mono: "JetBrains Mono", monospace;

  --trinkui-radius-sm: 0.375rem;
  --trinkui-radius-md: 0.75rem;
  --trinkui-radius-lg: 1rem;
  --trinkui-radius-xl: 1.5rem;
  --trinkui-radius-full: 9999px;

  --trinkui-shadow-sm: 0 1px 2px rgba(0,0,0,0.3);
  --trinkui-shadow-md: 0 4px 6px rgba(0,0,0,0.4);
  --trinkui-shadow-lg: 0 10px 25px rgba(0,0,0,0.5);
}
```

**3. All 17 required variables** (never omit any):
`--trinkui-bg`, `--trinkui-fg`, `--trinkui-primary`, `--trinkui-primary-fg`, `--trinkui-secondary`, `--trinkui-secondary-fg`, `--trinkui-accent`, `--trinkui-muted`, `--trinkui-border`, `--trinkui-surface`, `--trinkui-font-heading`, `--trinkui-font-body`, `--trinkui-font-mono`, `--trinkui-radius-sm/md/lg/xl/full`, `--trinkui-shadow-sm/md/lg`

**4. Export from package** — update `packages/react/package.json` exports:
```json
{
  "exports": {
    "./styles": "./dist/styles.css",
    "./themes/midnight": "./src/themes/midnight.css"
  }
}
```

**5. Add docs preview page** at `apps/docs/app/themes/[theme-name]/page.tsx` showing the theme applied to all section components

---

## Skill 5: Create a New Animation Wrapper

Create a new animation component (e.g., `ScaleIn`, `BlurIn`, `Parallax`).

**Reference:** `packages/react/src/animation/FadeIn.tsx` — follow this pattern exactly.

### Steps

**1. Create the file** at `packages/react/src/animation/[AnimationName].tsx`

**2. Write the component**
```tsx
// packages/react/src/animation/ScaleIn.tsx
"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "../utils/cn";

export interface ScaleInProps {
  /** Content to animate */
  children: React.ReactNode;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Animation duration (seconds) */
  duration?: number;
  /** Starting scale (0–1) */
  from?: number;
  /** Whether animation triggers on scroll into view */
  scrollTrigger?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Scale-in entrance animation wrapper.
 * Element starts smaller and scales up to full size.
 * Respects prefers-reduced-motion.
 */
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  from = 0.9,
  scrollTrigger = true,
  className,
}: ScaleInProps) {
  const shouldReduceMotion = useReducedMotion();

  // Always render without animation when user prefers reduced motion
  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const initial = { opacity: 0, scale: from };
  const animate = { opacity: 1, scale: 1 };

  return (
    <motion.div
      initial={initial}
      animate={scrollTrigger ? undefined : animate}
      whileInView={scrollTrigger ? animate : undefined}
      viewport={scrollTrigger ? { once: true, margin: "-50px" } : undefined}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
```

**3. Add export to `packages/react/src/index.ts`**
```ts
export { ScaleIn } from "./animation/ScaleIn";
export type { ScaleInProps } from "./animation/ScaleIn";
```

**4. Required checklist:**
- [ ] `"use client"` at top
- [ ] Imports `useReducedMotion` from `motion/react`
- [ ] Returns plain `<div>` when `shouldReduceMotion` is true
- [ ] Props: `delay`, `duration`, `scrollTrigger`, `className` (at minimum)
- [ ] `viewport={{ once: true }}` when `scrollTrigger={true}`
- [ ] Only animates `opacity` and `transform` (scale, y, x, rotate)

**5. Verify build**
```bash
pnpm --filter @trinkui/react build
```

---

## Skill 6: Add a New Landing Page Template

Create a full landing page template composed of section components.

### Steps

**1. Create the template directory**
```
templates/[template-name]/
├── index.tsx          # full page template
├── metadata.ts        # template information
└── README.md          # screenshot + usage instructions
```

**2. Write the template**
```tsx
// templates/saas-minimal/index.tsx
import { HeroCentered } from "@trinkui/react";
import { FeaturesGrid } from "@trinkui/react";
// ... import all needed sections

export function SaasMinimalTemplate() {
  return (
    <main>
      <HeroCentered
        pill="Built for developers"
        title="Ship your SaaS faster"
        subtitle="Production-ready React components for your landing page."
        primaryAction={{ label: "Get Started", href: "/signup" }}
        secondaryAction={{ label: "View Demo", href: "/demo", variant: "outline" }}
      />
      <FeaturesGrid
        title="Everything you need"
        features={[
          { title: "Fast", description: "Optimized for performance." },
          { title: "Accessible", description: "WCAG AA compliant out of the box." },
          { title: "Themeable", description: "CSS variables for easy customization." },
        ]}
      />
      {/* ... more sections */}
    </main>
  );
}
```

**3. Write `metadata.ts`**
```ts
export const templateMetadata = {
  name: "SaaS Minimal",
  slug: "saas-minimal",
  description: "Clean, minimal landing page for SaaS products.",
  sections: ["HeroCentered", "FeaturesGrid", "PricingCards", "FAQ", "CTABanner"],
  tags: ["saas", "minimal", "dark"],
};
```

**4. Add docs showcase page** at `apps/docs/app/templates/[slug]/page.tsx`

---

## Skill 7: Write Documentation for a Component

Write the docs page for a component in the docs site.

**Reference:** `apps/docs/app/components/hero-centered/page.tsx`

### Steps

**1. Create the page file**
```
apps/docs/app/components/[component-slug]/page.tsx
```

**2. Structure of the page:**
```tsx
import { MyComponent } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

// 1. The example code string (shown in the code tab)
const exampleCode = `import { MyComponent } from "@trinkui/react";

export default function Example() {
  return (
    <MyComponent
      title="Example Title"
      subtitle="Supporting text."
      primaryAction={{ label: "Get Started", href: "/docs" }}
    />
  );
}`;

// 2. Props table data
const props = [
  { name: "title", type: "string", required: true, description: "Main heading text" },
  { name: "subtitle", type: "string", description: "Supporting description" },
  { name: "animated", type: "boolean", default: "true", description: "Enable entrance animations" },
  { name: "theme", type: '"light" | "dark"', description: "Section color theme" },
  { name: "className", type: "string", description: "Extra CSS classes" },
];

export default function MyComponentPage() {
  return (
    <div className="space-y-8">
      {/* Breadcrumb + title */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Category Name</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">MyComponent</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">Short description of the component.</p>
      </div>

      {/* Installation */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Installation</h2>
        <pre className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[#0d1117] px-4 py-3 text-sm text-slate-200">
          <code>npm install @trinkui/react</code>
        </pre>
      </div>

      {/* Live preview */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Preview</h2>
        <ComponentPreview code={exampleCode}>
          {/* IMPORTANT: always pass animated={false} in docs previews */}
          <MyComponent
            title="Example Title"
            subtitle="Supporting text."
            primaryAction={{ label: "Get Started", href: "#" }}
            animated={false}
          />
        </ComponentPreview>
      </div>

      {/* Props API */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Props</h2>
        <PropsTable props={props} />
      </div>
    </div>
  );
}
```

**3. Add to Sidebar** in `apps/docs/components/Sidebar.tsx`:
```ts
// Add under appropriate category in the navigation array
{ label: "MyComponent", href: "/components/my-component" }
```

**4. Verify the page builds**
```bash
pnpm --filter docs build
```

---

## Skill 8: Fix a Styling Issue

Diagnose and fix a visual styling problem.

### Diagnosis checklist (run through in order)

**Step 1: Check Tailwind is scanning the file**
- Is the component in `packages/react/src/`?
- Is `apps/docs/app/globals.css` including `@source "../../../packages/react/src"`?
- Run `pnpm --filter docs build` and check CSS output size (should be >20KB)

**Step 2: Check color references**
```tsx
// ✅ Correct
className="text-[rgb(var(--trinkui-fg))]"
className="bg-[rgb(var(--trinkui-primary)/0.1)]"

// ❌ Wrong — hardcoded
className="text-slate-900"
style={{ color: "#0a0a0a" }}
```

**Step 3: Check `cn()` usage**
```tsx
// ✅ Correct
className={cn("base-classes", conditional && "extra", className)}

// ❌ Wrong — cn() not used, className not forwarded
className="base-classes"
```

**Step 4: Check responsive breakpoints**
```tsx
// ✅ Correct — mobile-first
className="text-2xl sm:text-3xl lg:text-5xl"

// ❌ Wrong — desktop-first
className="lg:text-5xl"  // no mobile base
```

**Step 5: Check dark mode**
- Is the `Section` component receiving `theme="dark"` prop?
- Does the `Section` add the `.dark` class when `theme="dark"`?
- Are colors using CSS variables (they auto-flip in dark mode)?

**Step 6: Check CSS variable definition**
```css
/* Is the variable defined in globals.css :root? */
:root {
  --trinkui-primary: 99 102 241;  /* ✅ space-separated for /alpha-value support */
}
```

**Step 7: Run build and inspect output**
```bash
pnpm --filter @trinkui/react build
pnpm --filter docs build
# Check .next/static/css/*.css for the utility class
```

---

## Skill 9: Add Accessibility to a Component

Add or improve accessibility on a component.

### Steps

**Step 1: Audit semantic HTML**
```tsx
// ✅ Correct semantic structure
<section aria-labelledby="features-heading">
  <h2 id="features-heading">Features</h2>
  <ul>
    <li>...</li>
  </ul>
</section>

// ❌ Non-semantic
<div>
  <div className="text-3xl font-bold">Features</div>
  <div>...</div>
</div>
```

**Step 2: Add image alt text**
```tsx
// ✅ Descriptive alt
<img src={image.src} alt={image.alt} />  // alt comes from props

// ✅ Decorative image
<img src="/decoration.svg" alt="" aria-hidden="true" />
```

**Step 3: Verify focus styles on interactive elements**
```tsx
// ✅ Already in button.styles.ts
"focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2"
"focus-visible:ring-[rgb(var(--trinkui-primary))]"
```

**Step 4: Add aria attributes where needed**
```tsx
// Loading state
<button aria-busy={loading} disabled={loading}>

// Expandable (accordion, dropdown)
<button aria-expanded={isOpen} aria-controls="panel-id">

// Icon-only button
<button aria-label="Close menu">
  <XIcon aria-hidden="true" />
</button>

// Error message
<input aria-describedby="error-id" aria-invalid={!!error} />
<p id="error-id" role="alert">{error}</p>
```

**Step 5: Keyboard navigation**
```tsx
// Ensure Tab order is logical (no tabindex > 0)
// Ensure Enter/Space activates buttons and links
// Ensure Escape closes modals/dropdowns
```

**Step 6: Check `prefers-reduced-motion`**
- Is the component using an animation wrapper (FadeIn, SlideUp, StaggerChildren)?
- Those wrappers already call `useReducedMotion()` ✅
- If custom animation via `motion`, add:
  ```tsx
  const shouldReduceMotion = useReducedMotion();
  if (shouldReduceMotion) return <div>{children}</div>;
  ```

**Step 7: Run axe audit** (in tests)
```tsx
import { axe, toHaveNoViolations } from "jest-axe";
expect.extend(toHaveNoViolations);

it("has no accessibility violations", async () => {
  const { container } = render(<MyComponent title="Test" />);
  const results = await axe(container);
  expect(results).toHaveNoViolations();
});
```

---

## Skill 10: Release a New Version

Publish a new version of `@trinkui/react` to npm.

### Steps

**1. Determine version bump** (semver)
- `patch` (0.0.x): bug fixes, documentation, accessibility improvements
- `minor` (0.x.0): new components, new props, backwards-compatible features
- `major` (x.0.0): breaking changes (prop renames, removed components, API changes)

**2. Update `CHANGELOG.md`** (create if it doesn't exist)
```md
## [0.1.0] - 2026-03-18
### Added
- `FeaturesGrid` section component
- `HeroVideo` variant
### Fixed
- Button focus ring in dark mode
```

**3. Bump version in both packages**
```bash
# packages/shared/package.json
# packages/react/package.json
# Update "version" field in both
```

**4. Run full checks**
```bash
pnpm build          # must pass with no errors
pnpm test           # must pass with no failures
pnpm typecheck      # must pass with no errors
pnpm lint           # must pass (or warnings only)
```

**5. Build for publish**
```bash
pnpm --filter @trinkui/shared build
pnpm --filter @trinkui/react build
```

**6. Publish**
```bash
pnpm --filter @trinkui/shared publish --no-git-checks
pnpm --filter @trinkui/react publish --no-git-checks
```

**7. Create git tag and push**
```bash
git tag v0.1.0
git push origin main --tags
```

**8. Create GitHub release** with changelog notes

---

## Skill 11: Keep This Documentation In Sync

When to update `AGENTS.md`, `SKILLS.md`, and `CLAUDE.md`:

| Change made | File to update |
|-------------|----------------|
| New file naming convention adopted | `AGENTS.md` §4 |
| New standard prop added to all sections | `AGENTS.md` §5, `SKILLS.md` Skill 1 |
| New animation wrapper created | `AGENTS.md` §7, `SKILLS.md` Skill 5 |
| New utility added to `utils/` | `AGENTS.md` §6, `CLAUDE.md` |
| New anti-pattern discovered | `AGENTS.md` §14, `CLAUDE.md` |
| New component type added (e.g., "Overlays") | `AGENTS.md` §2 (architecture table) |
| Docs site structure changes | `AGENTS.md` §13, `SKILLS.md` Skill 7 |
| Build command changes | `CLAUDE.md`, `AGENTS.md` §2 |

**Rule:** If you add a new component that establishes a new pattern, update the relevant skill with that component as the new reference example.
