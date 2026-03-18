---
name: install-trinkui
description: Install and configure @trinkui/react in a React project (Next.js, Vite, Remix)
---

# Install trink-ui

## Step 1 — Install the package

```bash
npm install @trinkui/react
```

## Step 2 — Add CSS variables to your global CSS

```css
@import "tailwindcss";
@source "node_modules/@trinkui/react/src";

:root {
  --trinkui-bg: 255 255 255;
  --trinkui-fg: 10 10 10;
  --trinkui-primary: 0 111 238;
  --trinkui-primary-fg: 255 255 255;
  --trinkui-secondary: 241 245 249;
  --trinkui-secondary-fg: 15 23 42;
  --trinkui-accent: 147 83 211;
  --trinkui-muted: 100 116 139;
  --trinkui-border: 226 232 240;
  --trinkui-surface: 248 250 252;
  --trinkui-success: 23 201 100;
  --trinkui-warning: 245 165 36;
  --trinkui-danger: 243 18 96;
  --trinkui-info: 0 111 238;
}

.dark {
  --trinkui-bg: 9 9 11;
  --trinkui-fg: 250 250 250;
  --trinkui-primary: 51 142 247;
  --trinkui-primary-fg: 255 255 255;
  --trinkui-secondary: 24 24 27;
  --trinkui-secondary-fg: 228 228 231;
  --trinkui-accent: 174 126 222;
  --trinkui-muted: 113 113 122;
  --trinkui-border: 39 39 42;
  --trinkui-surface: 18 18 21;
  --trinkui-success: 69 212 131;
  --trinkui-warning: 247 183 80;
  --trinkui-danger: 245 65 128;
  --trinkui-info: 51 142 247;
}
```

## Step 3 — Framework-specific config

### Next.js (App Router)
```ts
// next.config.ts
const nextConfig = {
  transpilePackages: ["@trinkui/react", "@trinkui/shared"],
};
export default nextConfig;
```

### Vite
No extra config needed.

### Remix
```js
// remix.config.js
module.exports = {
  serverDependenciesToBundle: [/@trinkui\/.*/],
};
```

## Step 4 — Use components

```tsx
import { HeroCentered, FeaturesGrid } from "@trinkui/react";

export default function Page() {
  return (
    <>
      <HeroCentered
        title="Your headline"
        subtitle="Your description"
        primaryAction={{ label: "Get Started", href: "/signup" }}
      />
      <FeaturesGrid
        title="Features"
        features={[
          { icon: "⚡", title: "Fast", description: "Optimized" },
        ]}
      />
    </>
  );
}
```
