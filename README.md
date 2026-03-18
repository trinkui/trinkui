<p align="center">
  <img src="./apps/docs/public/logo-dark.svg" alt="trink-ui" height="40" />
</p>

<h3 align="center">Design that resonates.</h3>

<p align="center">
  An open-source React component library with 49+ production-ready components,<br/>
  8 landing page templates, and full dark/light mode support.<br/>
  Built on <strong>Tailwind CSS v4</strong>, <strong>TypeScript</strong>, and <strong>Motion</strong>.
</p>

<p align="center">
  <a href="./LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" /></a>
  <a href="https://www.typescriptlang.org/"><img src="https://img.shields.io/badge/TypeScript-5.7-3178c6.svg" alt="TypeScript" /></a>
  <a href="https://tailwindcss.com/"><img src="https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg" alt="Tailwind CSS" /></a>
  <a href="https://react.dev/"><img src="https://img.shields.io/badge/React-18%2F19-61dafb.svg" alt="React" /></a>
</p>

---

## Features

- **49+ Components** — Primitives, sections, layout, and animation wrappers
- **8 Landing Page Templates** — SaaS, Agency, AI, Mobile, Startup, Portfolio, Event, Product Launch
- **Dark/Light Mode** — CSS variable-based theming with automatic dark mode
- **Fully Typed** — Strict TypeScript with JSDoc on every prop
- **Accessible** — WAI-ARIA compliant, keyboard navigable, focus-visible rings
- **Tree-Shakeable** — `sideEffects: false`, import only what you use
- **Responsive** — Mobile-first design, every component adapts to all screen sizes
- **Animated** — Scroll-triggered animations with `prefers-reduced-motion` support
- **Zero Runtime CSS** — Built on Tailwind utility classes, no CSS-in-JS overhead

---

## Quick Start

```bash
npm install @trinkui/react
# or
pnpm add @trinkui/react
# or
yarn add @trinkui/react
```

### Build a landing page in under a minute

```tsx
import {
  NavbarSimple,
  HeroCentered,
  FeaturesGrid,
  PricingCards,
  TestimonialsGrid,
  FAQAccordion,
  CTACentered,
  FooterColumns,
} from "@trinkui/react";

export default function LandingPage() {
  return (
    <>
      <NavbarSimple
        brandName="MyProduct"
        links={[{ label: "Features", href: "#features" }]}
        primaryAction={{ label: "Get Started", href: "/signup" }}
      />
      <HeroCentered
        title="Ship faster with trink-ui"
        subtitle="Production-ready landing page components for React."
        primaryAction={{ label: "Get Started", href: "/signup" }}
        secondaryAction={{ label: "Learn More", href: "#features" }}
      />
      <FeaturesGrid
        title="Everything you need"
        features={[
          { icon: "⚡", title: "Fast", description: "Optimized for performance" },
          { icon: "🎨", title: "Beautiful", description: "Designed with care" },
          { icon: "♿", title: "Accessible", description: "Built for everyone" },
        ]}
      />
      <PricingCards
        title="Simple pricing"
        tiers={[
          { name: "Free", price: "$0", features: ["3 projects", "Community support"] },
          { name: "Pro", price: "$29", features: ["Unlimited projects", "Priority support"], highlighted: true },
        ]}
      />
      <CTACentered
        title="Ready to get started?"
        primaryAction={{ label: "Start Free", href: "/signup" }}
      />
      <FooterColumns brandName="MyProduct" copyright="© 2026" />
    </>
  );
}
```

---

## Components

### Primitives (38)

| Component | Component | Component | Component |
|-----------|-----------|-----------|-----------|
| Accordion | Alert | Autocomplete | Avatar |
| Badge | Breadcrumbs | Button | Calendar |
| Card | Checkbox | Chip | Code |
| Divider | Drawer | Dropdown | Form |
| Image | Input | InputOTP | Kbd |
| Link | Listbox | Modal | NumberInput |
| Pagination | Popover | Progress | RadioGroup |
| ScrollShadow | Select | Skeleton | Slider |
| Snippet | Spacer | Spinner | Switch |
| Table | Tabs | Textarea | Toast |
| Tooltip | User | CircularProgress | DatePicker |

### Sections (11)

| Component | Variants |
|-----------|----------|
| **Hero** | Centered, Split, Minimal |
| **Features** | Grid, Alternating, List |
| **Pricing** | Cards, Table |
| **Testimonials** | Grid, Featured |
| **CTA** | Banner, Centered, Split |
| **Stats** | Grid, Banner |
| **FAQ** | Accordion, Grid |
| **Navbar** | Simple, Sticky |
| **Footer** | Simple, Columns |
| **Logo Cloud** | Standard, Marquee |
| **Newsletter** | Banner, Split |

### Animation Wrappers (5)

| Component | Effect |
|-----------|--------|
| FadeIn | Opacity fade on scroll |
| SlideUp | Slide up from below |
| StaggerChildren | Sequential child animations |
| ScaleIn | Scale from smaller to full |
| BlurIn | Blur to sharp reveal |

### Layout (3)

| Component | Purpose |
|-----------|---------|
| Container | Max-width content wrapper |
| Section | Themed section with spacing |
| SectionHeader | Pill + title + subtitle |

### Hooks (5)

| Hook | Purpose |
|------|---------|
| `useMediaQuery` | Responsive breakpoint detection |
| `useDebounce` | Debounce rapidly changing values |
| `useClickOutside` | Detect clicks outside an element |
| `useLocalStorage` | Persist state to localStorage |
| `useCopyToClipboard` | Copy text with feedback |

---

## Templates

Complete landing pages built entirely with trink-ui components. Each template is a single-page React component you can clone and customize.

| Template | Use Case | Sections |
|----------|----------|----------|
| **SaaS** | Software product marketing | 11 sections — Hero, Features, Pricing, Testimonials, FAQ, CTA |
| **Agency** | Creative/digital agency | 10 sections — Portfolio, Services, Process, Team, Contact |
| **Product Launch** | Pre-launch waitlist | 12 sections — Problem, Solution, Features, Early Access, Countdown |
| **AI / ML Product** | AI tool or API showcase | 10 sections — Playground, Use Cases, Tech Specs, Security |
| **Mobile App** | App download page | 8 sections — App Preview, Features, Reviews, Download CTA |
| **Startup** | Early-stage fundraising | 9 sections — Problem, Solution, Traction, Team, Investors |
| **Portfolio** | Developer/designer showcase | 9 sections — About, Work, Experience, Blog, Contact |
| **Event** | Conference & tickets | 11 sections — Speakers, Schedule, Tickets, Venue, Sponsors |

---

## Theming

trink-ui uses CSS custom properties for all colors. Override any variable to match your brand:

```css
:root {
  --trinkui-primary: 0 111 238;     /* your brand color (RGB channels) */
  --trinkui-accent: 147 83 211;
  --trinkui-bg: 255 255 255;
  --trinkui-fg: 10 10 10;
}

.dark {
  --trinkui-primary: 51 142 247;
  --trinkui-bg: 9 9 11;
  --trinkui-fg: 250 250 250;
}
```

### Theme Presets

Built-in presets available: **Ocean**, **Emerald**, **Rose**, **Amber**, **Violet**, **Slate**.

### Per-Section Theming

```tsx
<HeroCentered theme="dark" title="Dark hero" />
<FeaturesGrid theme="light" title="Light features" />
```

---

## Project Structure

```
trinkui/
├── packages/
│   ├── react/              # @trinkui/react — component library
│   │   ├── src/
│   │   │   ├── primitives/ # 38 primitive components
│   │   │   ├── sections/   # 11 section components (25 variants)
│   │   │   ├── animation/  # 5 animation wrappers
│   │   │   ├── layout/     # Container, Section, SectionHeader
│   │   │   ├── hooks/      # 5 custom React hooks
│   │   │   ├── themes/     # Default theme + presets CSS
│   │   │   └── utils/      # cn(), variants()
│   │   └── dist/           # Built output (CJS + ESM + DTS)
│   └── shared/             # @trinkui/shared — types & constants
├── apps/
│   └── docs/               # Next.js 15 documentation site
│       ├── app/
│       │   ├── page.tsx         # Homepage (13-section landing page)
│       │   ├── docs/            # Getting started + customization guides
│       │   ├── components/      # 39 component doc pages
│       │   └── templates/       # 8 template previews
│       └── components/          # Docs UI (Sidebar, TopBar, Search, TOC)
└── [config files]
```

---

## Development

### Prerequisites

- Node.js 18+
- pnpm 9+

### Setup

```bash
# Clone the repo
git clone https://github.com/trinkui/trinkui.git
cd trinkui

# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start docs dev server
pnpm --filter docs dev
```

### Commands

| Command | Description |
|---------|-------------|
| `pnpm build` | Build all packages (Turborepo) |
| `pnpm --filter docs dev` | Start docs site at localhost:3000 |
| `pnpm --filter docs build` | Production build of docs (91 pages) |
| `pnpm --filter @trinkui/react build` | Build component library |
| `pnpm --filter @trinkui/react test` | Run 50 component tests |
| `pnpm lint` | Lint all packages |
| `pnpm typecheck` | TypeScript type checking |

### Creating a Component

```bash
# 1. Create component files
packages/react/src/primitives/my-component/
├── my-component.types.ts    # Props interface
├── my-component.styles.ts   # Variant styles
├── MyComponent.tsx           # Component implementation
├── MyComponent.test.tsx      # Tests
└── index.ts                  # Barrel export

# 2. Export from packages/react/src/index.ts
# 3. Create docs page at apps/docs/app/components/my-component/page.tsx
# 4. Build and test
pnpm build && pnpm test
```

---

## Tech Stack

| Technology | Purpose |
|-----------|---------|
| [React 18/19](https://react.dev/) | UI framework |
| [TypeScript 5.7](https://www.typescriptlang.org/) | Type safety (strict mode) |
| [Tailwind CSS v4](https://tailwindcss.com/) | Utility-first styling |
| [Motion](https://motion.dev/) | Scroll-triggered animations |
| [Next.js 15](https://nextjs.org/) | Documentation site |
| [tsup](https://tsup.egoist.dev/) | Library bundling (CJS + ESM + DTS) |
| [Turborepo](https://turbo.build/) | Monorepo build orchestration |
| [Vitest](https://vitest.dev/) | Component testing |
| [pnpm](https://pnpm.io/) | Package management |

---

## Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

1. Fork the repository
2. Create your feature branch: `git checkout -b feat/my-feature`
3. Commit your changes: `git commit -m "feat(button): add new variant"`
4. Push to the branch: `git push origin feat/my-feature`
5. Open a Pull Request

---

## License

[MIT](./LICENSE) — free and open source, forever.

---

<p align="center">
  <sub>Built with care by the trink-ui community.</sub>
</p>
