---
name: use-animations
description: Add scroll-triggered animations using trink-ui animation wrappers
---

# Use Animations

## Available Animation Wrappers

```tsx
import { FadeIn, SlideUp, StaggerChildren, ScaleIn, BlurIn } from "@trinkui/react";
```

| Wrapper | Effect | Best For |
|---------|--------|----------|
| `FadeIn` | Opacity 0→1 | General content reveal |
| `SlideUp` | Translate Y + fade | Cards, text blocks |
| `StaggerChildren` | Sequential child animation | Lists, grids |
| `ScaleIn` | Scale from smaller | Images, cards |
| `BlurIn` | Blur to sharp | Hero text, images |

## Basic Usage

```tsx
<FadeIn>
  <h2>This fades in on scroll</h2>
</FadeIn>

<SlideUp distance={30}>
  <Card>Slides up 30px</Card>
</SlideUp>

<ScaleIn from={0.8}>
  <img src="/hero.png" alt="Hero" />
</ScaleIn>

<BlurIn blur={10}>
  <h1>Blurs in from 10px</h1>
</BlurIn>
```

## Stagger Children

Animate grid items one by one:

```tsx
<StaggerChildren staggerDelay={0.1}>
  {features.map((f) => (
    <Card key={f.title}>
      <h3>{f.title}</h3>
      <p>{f.description}</p>
    </Card>
  ))}
</StaggerChildren>
```

## Props

All wrappers share these props:

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `delay` | `number` | `0` | Delay before animation (seconds) |
| `duration` | `number` | `0.5-0.6` | Animation duration (seconds) |
| `scrollTrigger` | `boolean` | `true` | Animate when scrolled into view |
| `className` | `string` | — | Additional CSS classes |
| `children` | `ReactNode` | — | Content to animate |

## Section Components

All section components (Hero, Features, etc.) have a built-in `animated` prop:

```tsx
// Animated (default)
<FeaturesGrid animated title="Features" features={[...]} />

// No animation
<FeaturesGrid animated={false} title="Features" features={[...]} />
```

## Reduced Motion

All animation wrappers automatically respect `prefers-reduced-motion`. When enabled, content renders immediately without animation. No extra code needed.

## "use client" Requirement

Animation wrappers use React hooks internally. If you use them directly, the parent component needs `"use client"`:

```tsx
"use client";

import { FadeIn } from "@trinkui/react";

export function MyComponent() {
  return (
    <FadeIn>
      <p>Animated content</p>
    </FadeIn>
  );
}
```

Section components already include `"use client"` internally.
