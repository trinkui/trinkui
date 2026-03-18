# Contributing to trink-ui

Thank you for your interest in contributing! Here's how to get started.

## Development Setup

1. Fork and clone the repo
2. Install dependencies: `pnpm install`
3. Build packages: `pnpm build`
4. Start docs dev server: `pnpm --filter docs dev`

## Project Structure

```
trinkui/
├── packages/
│   ├── react/          # @trinkui/react — component library
│   └── shared/         # @trinkui/shared — shared types
├── apps/
│   └── docs/           # Next.js documentation site
└── templates/          # Landing page templates (future)
```

## Adding a Component

1. Create folder: `packages/react/src/primitives/{name}/`
2. Add files: `{name}.types.ts`, `{name}.styles.ts`, `{Name}.tsx`, `index.ts`
3. Export from `packages/react/src/index.ts`
4. Create docs page: `apps/docs/app/components/{name}/page.tsx`
5. Run `pnpm build` to verify

## Component Conventions

- Use `forwardRef` on every component
- Set `displayName`
- Props in separate `*.types.ts` file
- Colors via CSS variables only (`rgb(var(--trinkui-*))`)
- Merge classes with `cn()` from `utils/cn`
- Add `"use client"` only when hooks are used

## Commit Messages

```
feat(button): add loading state
fix(modal): correct focus trap behavior
docs(tabs): add keyboard navigation example
```

## Pull Requests

- Branch from `main`
- One feature per PR
- Include tests for new components
- Update docs if API changes
