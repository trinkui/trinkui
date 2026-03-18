---
name: add-dark-mode
description: Implement dark/light mode toggle with @trinkui/react components
---

# Add Dark Mode

## How it works

trink-ui components read CSS custom properties (`--trinkui-*`). Define light values in `:root` and dark values in `.dark`. Toggle the `dark` class on `<html>`.

## Step 1 — CSS variables (already done if installed)

Both `:root` (light) and `.dark` (dark) blocks should be in your global CSS.

## Step 2 — Default to dark

```tsx
// app/layout.tsx (Next.js) or index.html
<html lang="en" className="dark">
```

## Step 3 — Create a toggle component

```tsx
"use client";

import { useState, useEffect } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("theme");
    if (stored === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const toggle = () => {
    const next = !isDark;
    setIsDark(next);
    document.documentElement.classList.toggle("dark", next);
    localStorage.setItem("theme", next ? "dark" : "light");
  };

  return (
    <button onClick={toggle} aria-label="Toggle theme">
      {isDark ? "☀️" : "🌙"}
    </button>
  );
}
```

## Step 4 — Auto-detect system preference

```tsx
useEffect(() => {
  const stored = localStorage.getItem("theme");
  if (stored) {
    document.documentElement.classList.toggle("dark", stored === "dark");
    setIsDark(stored === "dark");
  } else {
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    document.documentElement.classList.toggle("dark", prefersDark);
    setIsDark(prefersDark);
  }
}, []);
```

## Step 5 — Per-section theming

Mix light and dark sections on the same page:

```tsx
<HeroCentered theme="dark" title="Dark hero" />
<FeaturesGrid theme="light" title="Light features" />
<CTACentered theme="dark" title="Dark CTA" />
```

## Prevent flash of wrong theme

Add this script to `<head>` before CSS loads:

```html
<script>
  if (localStorage.theme === "dark" || (!localStorage.theme && window.matchMedia("(prefers-color-scheme: dark)").matches)) {
    document.documentElement.classList.add("dark");
  }
</script>
```
