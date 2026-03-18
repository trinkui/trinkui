# TrinkUI

> Landing pages, beautifully crafted.

TrinkUI is an open-source React UI library focused on landing pages. Beautiful, accessible, and production-ready landing page sections for React.

## Packages

| Package | Description |
|---------|-------------|
| [`@trinkui/react`](./packages/react) | Core component library |
| [`@trinkui/shared`](./packages/shared) | Shared types and constants |

## Apps

| App | Description |
|-----|-------------|
| [`docs`](./apps/docs) | Documentation site (Next.js 15) |

## Getting Started

```bash
npm install @trinkui/react
```

```tsx
import { HeroCentered } from "@trinkui/react";
import "@trinkui/react/styles";

export default function Page() {
  return (
    <HeroCentered
      pill="Just launched"
      title="Build landing pages that convert"
      subtitle="Beautiful, accessible, and production-ready landing page sections for React."
      primaryAction={{ label: "Get Started", href: "/docs" }}
      secondaryAction={{ label: "GitHub", href: "https://github.com/trinkui", variant: "outline" }}
    />
  );
}
```

## Development

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Start docs site in dev mode
pnpm dev

# Run tests
pnpm test
```

## License

MIT
