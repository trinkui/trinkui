# trink-ui

> Design that resonates.

An open-source React component library with 49+ production-ready components, 8 landing page templates, and full dark mode support. Built on Tailwind CSS v4 and TypeScript.

[![MIT License](https://img.shields.io/badge/license-MIT-blue.svg)](./LICENSE)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.7-blue.svg)](https://www.typescriptlang.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-v4-38bdf8.svg)](https://tailwindcss.com/)

## Quick Start

```bash
npm install @trinkui/react
```

```tsx
import { HeroCentered, FeaturesGrid, PricingCards } from "@trinkui/react";

export default function LandingPage() {
  return (
    <>
      <HeroCentered
        title="Ship faster with trink-ui"
        subtitle="Production-ready landing page components for React."
        primaryAction={{ label: "Get Started", href: "/docs" }}
      />
      <FeaturesGrid
        title="Everything you need"
        features={[
          { icon: "⚡", title: "Fast", description: "Optimized for performance" },
          { icon: "🎨", title: "Beautiful", description: "Designed with care" },
          { icon: "♿", title: "Accessible", description: "Built for everyone" },
        ]}
      />
    </>
  );
}
```

## What's Included

### 49+ Components

| Category | Components |
|----------|-----------|
| **Primitives** | Button, Input, Select, Checkbox, Switch, Modal, Tabs, Table, Toast, Tooltip, and 28 more |
| **Sections** | Hero, Features, Pricing, Testimonials, CTA, Stats, FAQ, Navbar, Footer, and more |
| **Animation** | FadeIn, SlideUp, StaggerChildren, ScaleIn, BlurIn |
| **Layout** | Container, Section, SectionHeader |

### 8 Landing Page Templates

| Template | Description |
|----------|-------------|
| SaaS | Software product marketing page |
| Agency | Creative/digital agency showcase |
| Product Launch | Pre-launch waitlist page |
| AI / ML Product | AI tool or API showcase |
| Mobile App | App download landing page |
| Startup | Early-stage startup page |
| Portfolio | Developer/designer portfolio |
| Event | Conference & event page |

## Packages

| Package | Description |
|---------|-------------|
| [`@trinkui/react`](./packages/react) | Core component library |
| [`@trinkui/shared`](./packages/shared) | Shared types and constants |

## Documentation

Visit the [documentation site](./apps/docs) for:
- Component API reference
- Live examples
- Theming & customization guides
- Template previews

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start docs dev server
pnpm --filter docs dev

# Run tests
pnpm test

# Lint
pnpm lint
```

## Contributing

We welcome contributions! Please see our [Contributing Guide](./CONTRIBUTING.md) for details.

## License

[MIT](./LICENSE) — free and open source.
