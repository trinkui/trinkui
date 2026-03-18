<p align="center">
  <img src="https://raw.githubusercontent.com/trinkui/trinkui/main/apps/docs/public/logo-dark.svg" alt="trink-ui" height="40" />
</p>

<h3 align="center">Design that resonates.</h3>

<p align="center">
  49+ production-ready React components for landing pages.<br/>
  Built on <strong>Tailwind CSS v4</strong>, <strong>TypeScript</strong>, and <strong>Motion</strong>.
</p>

<p align="center">
  <a href="https://github.com/trinkui/trinkui/blob/main/LICENSE"><img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="MIT License" /></a>
  <a href="https://www.npmjs.com/package/@trinkui/react"><img src="https://img.shields.io/npm/v/@trinkui/react.svg" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/@trinkui/react"><img src="https://img.shields.io/npm/dm/@trinkui/react.svg" alt="npm downloads" /></a>
  <a href="https://github.com/trinkui/trinkui"><img src="https://img.shields.io/github/stars/trinkui/trinkui.svg?style=social" alt="GitHub stars" /></a>
</p>

---

## Install

```bash
npm install @trinkui/react
```

## Quick Example

```tsx
import {
  NavbarSimple,
  HeroCentered,
  FeaturesGrid,
  PricingCards,
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
        subtitle="Production-ready components for React landing pages."
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
          { name: "Pro", price: "$29", features: ["Unlimited", "Priority support"], highlighted: true },
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

## Components

### Primitives (38)

Accordion, Alert, Autocomplete, Avatar, Badge, Breadcrumbs, Button, Calendar, Card, Checkbox, Chip, CircularProgress, Code, DatePicker, Divider, Drawer, Dropdown, Form, Image, Input, InputOTP, Kbd, Link, Listbox, Modal, NumberInput, Pagination, Popover, Progress, RadioGroup, ScrollShadow, Select, Skeleton, Slider, Snippet, Spacer, Spinner, Switch, Table, Tabs, Textarea, Toast, Tooltip, User

### Sections (11 components, 25 variants)

| Section | Variants |
|---------|----------|
| Hero | Centered, Split, Minimal |
| Features | Grid, Alternating, List |
| Pricing | Cards, Table |
| Testimonials | Grid, Featured |
| CTA | Banner, Centered, Split |
| Stats | Grid, Banner |
| FAQ | Accordion, Grid |
| Navbar | Simple, Sticky |
| Footer | Simple, Columns |
| Logo Cloud | Standard, Marquee |
| Newsletter | Banner, Split |

### Animation Wrappers

FadeIn, SlideUp, StaggerChildren, ScaleIn, BlurIn

### Layout

Container, Section, SectionHeader

### Hooks

`useMediaQuery`, `useDebounce`, `useClickOutside`, `useLocalStorage`, `useCopyToClipboard`

## Theming

All colors use CSS custom properties. Override to match your brand:

```css
:root {
  --trinkui-primary: 0 111 238;
  --trinkui-bg: 255 255 255;
  --trinkui-fg: 10 10 10;
}

.dark {
  --trinkui-primary: 51 142 247;
  --trinkui-bg: 9 9 11;
  --trinkui-fg: 250 250 250;
}
```

### Per-Section Theming

```tsx
<HeroCentered theme="dark" title="Dark section" />
<FeaturesGrid theme="light" title="Light section" />
```

### Built-in Presets

Ocean, Emerald, Rose, Amber, Violet, Slate

## 8 Landing Page Templates

Ready-to-use full-page templates: **SaaS**, **Agency**, **Product Launch**, **AI/ML**, **Mobile App**, **Startup**, **Portfolio**, **Event**

## Requirements

- React 18 or 19
- Tailwind CSS v4

## Links

- [GitHub](https://github.com/trinkui/trinkui)
- [Documentation](https://github.com/trinkui/trinkui/tree/main/apps/docs)
- [Contributing](https://github.com/trinkui/trinkui/blob/main/CONTRIBUTING.md)
- [Changelog](https://github.com/trinkui/trinkui/blob/main/CHANGELOG.md)

## License

[MIT](https://github.com/trinkui/trinkui/blob/main/LICENSE)
