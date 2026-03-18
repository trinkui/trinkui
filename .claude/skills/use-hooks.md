---
name: use-hooks
description: Use trink-ui custom React hooks (useMediaQuery, useDebounce, useClickOutside, etc.)
---

# Use trink-ui Hooks

```tsx
import {
  useMediaQuery,
  useDebounce,
  useClickOutside,
  useLocalStorage,
  useCopyToClipboard,
} from "@trinkui/react";
```

## useMediaQuery

Detect responsive breakpoints:

```tsx
const isMobile = useMediaQuery("(max-width: 768px)");
const isTablet = useMediaQuery("(min-width: 769px) and (max-width: 1024px)");
const prefersDark = useMediaQuery("(prefers-color-scheme: dark)");

return isMobile ? <MobileNav /> : <DesktopNav />;
```

## useDebounce

Debounce rapidly changing values (search input, resize, etc.):

```tsx
const [query, setQuery] = useState("");
const debouncedQuery = useDebounce(query, 300);

useEffect(() => {
  if (debouncedQuery) {
    fetchResults(debouncedQuery);
  }
}, [debouncedQuery]);

return <Input value={query} onChange={(e) => setQuery(e.target.value)} />;
```

## useClickOutside

Detect clicks outside an element (dropdowns, modals, popovers):

```tsx
const [open, setOpen] = useState(false);
const ref = useClickOutside<HTMLDivElement>(() => setOpen(false));

return (
  <div ref={ref}>
    <Button onClick={() => setOpen(true)}>Open Menu</Button>
    {open && <div>Menu content</div>}
  </div>
);
```

## useLocalStorage

Persist state across sessions:

```tsx
const [theme, setTheme] = useLocalStorage("theme", "dark");
const [favorites, setFavorites] = useLocalStorage<string[]>("favorites", []);

// Works like useState but syncs to localStorage
setTheme("light");
setFavorites((prev) => [...prev, "new-item"]);
```

## useCopyToClipboard

Copy text with visual feedback:

```tsx
const { copied, copy } = useCopyToClipboard();

return (
  <Button onClick={() => copy("npm install @trinkui/react")}>
    {copied ? "Copied!" : "Copy command"}
  </Button>
);
```

## All hooks require "use client"

These hooks use browser APIs. The parent component must have `"use client"` directive.
