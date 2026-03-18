---
name: customize-theme
description: Customize trink-ui colors, fonts, radius, and create brand themes
---

# Customize Theme

## CSS Variable Reference

All trink-ui components read these variables. Override any to match your brand.

### Colors (RGB channel format)

| Variable | Light | Dark | Purpose |
|----------|-------|------|---------|
| `--trinkui-bg` | `255 255 255` | `9 9 11` | Page background |
| `--trinkui-fg` | `10 10 10` | `250 250 250` | Primary text |
| `--trinkui-primary` | `0 111 238` | `51 142 247` | Brand color |
| `--trinkui-primary-fg` | `255 255 255` | `255 255 255` | Text on primary |
| `--trinkui-secondary` | `241 245 249` | `24 24 27` | Secondary surfaces |
| `--trinkui-accent` | `147 83 211` | `174 126 222` | Accent/highlight |
| `--trinkui-muted` | `100 116 139` | `113 113 122` | Muted text |
| `--trinkui-border` | `226 232 240` | `39 39 42` | Borders |
| `--trinkui-surface` | `248 250 252` | `18 18 21` | Cards, sidebars |
| `--trinkui-success` | `23 201 100` | `69 212 131` | Success states |
| `--trinkui-warning` | `245 165 36` | `247 183 80` | Warning states |
| `--trinkui-danger` | `243 18 96` | `245 65 128` | Error/danger |
| `--trinkui-info` | `0 111 238` | `51 142 247` | Informational |

### Typography

```css
--trinkui-font-heading: "Inter", sans-serif;
--trinkui-font-body: "Inter", sans-serif;
--trinkui-font-mono: "JetBrains Mono", monospace;
```

### Border Radius

```css
--trinkui-radius-sm: 0.375rem;
--trinkui-radius-md: 0.75rem;
--trinkui-radius-lg: 1rem;
--trinkui-radius-xl: 1.5rem;
--trinkui-radius-full: 9999px;
```

## Custom Brand Example

Change primary to teal:

```css
:root {
  --trinkui-primary: 20 184 166;
  --trinkui-accent: 56 189 248;
}

.dark {
  --trinkui-primary: 45 212 191;
  --trinkui-accent: 125 211 252;
}
```

## Built-in Presets

Apply with `data-theme` attribute on `<html>`:

```html
<html data-theme="ocean" class="dark">
```

Available: `ocean`, `emerald`, `rose`, `amber`, `violet`, `slate`

## Usage in Components

Colors are used as: `rgb(var(--trinkui-primary))` with optional opacity: `rgb(var(--trinkui-primary) / 0.1)`

```tsx
<div className="bg-[rgb(var(--trinkui-primary))] text-[rgb(var(--trinkui-primary-fg))]">
  Branded element
</div>
```
