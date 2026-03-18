import Link from "next/link";

function CodeBox({ title, code }: { title?: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[rgb(var(--trinkui-border))]">
      {title && (
        <div className="border-b border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-4 py-2">
          <span className="text-xs font-medium text-[rgb(var(--trinkui-muted))]">{title}</span>
        </div>
      )}
      <pre className="overflow-x-auto bg-[#0a0a0f] px-4 py-3 text-sm leading-relaxed text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function DarkModeGuidePage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
          Guides
        </p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
          Dark Mode
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Learn how trink-ui handles dark mode through CSS variables and the{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            .dark
          </code>{" "}
          class strategy. Implement a toggle, detect system preferences, and use per-section theming.
        </p>
      </div>

      {/* How it works */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          How CSS variable theming works
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          trink-ui defines two sets of CSS variables: one under{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            :root
          </code>{" "}
          for light mode and one under{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            .dark
          </code>{" "}
          for dark mode. When the{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            dark
          </code>{" "}
          class is present on the{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            &lt;html&gt;
          </code>{" "}
          element, all CSS variables switch to their dark values, and every component automatically updates.
        </p>
        <CodeBox
          title="globals.css"
          code={`:root {
  --trinkui-bg: 255 255 255;        /* white */
  --trinkui-fg: 10 10 10;           /* near-black */
  --trinkui-primary: 99 102 241;    /* indigo-500 */
  --trinkui-surface: 248 250 252;   /* light gray */
}

.dark {
  --trinkui-bg: 9 9 11;             /* near-black */
  --trinkui-fg: 250 250 250;        /* near-white */
  --trinkui-primary: 129 140 248;   /* indigo-400 */
  --trinkui-surface: 18 18 21;      /* dark gray */
}`}
        />
      </div>

      {/* Adding dark class */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Adding the dark class
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          The simplest way to enable dark mode is to add the{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            dark
          </code>{" "}
          class to your HTML element. In Next.js App Router:
        </p>
        <CodeBox
          title="app/layout.tsx"
          code={`export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}`}
        />
        <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
          For a toggle-based approach, you will add and remove this class dynamically with JavaScript.
        </p>
      </div>

      {/* Toggle implementation */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Toggle implementation with localStorage
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Here is a complete dark mode toggle component that persists the user&apos;s preference
          in{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            localStorage
          </code>:
        </p>
        <CodeBox
          title="components/ThemeToggle.tsx"
          code={`"use client";

import { useEffect, useState } from "react";

export function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    // Check localStorage on mount
    const stored = localStorage.getItem("theme");
    if (stored === "dark") {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    } else if (stored === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    }
  }, []);

  function toggle() {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }

  return (
    <button
      onClick={toggle}
      aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
      className="rounded-lg border border-[rgb(var(--trinkui-border))] p-2 text-[rgb(var(--trinkui-muted))] hover:bg-[rgb(var(--trinkui-surface))] hover:text-[rgb(var(--trinkui-fg))] transition-colors"
    >
      {isDark ? (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      ) : (
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )}
    </button>
  );
}`}
        />
      </div>

      {/* System preference detection */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Detecting system preference
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          To respect the user&apos;s operating system preference as a default, check{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            prefers-color-scheme
          </code>{" "}
          when no stored preference exists:
        </p>
        <CodeBox
          title="components/ThemeProvider.tsx"
          code={`"use client";

import { useEffect } from "react";

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const stored = localStorage.getItem("theme");

    if (stored === "dark") {
      document.documentElement.classList.add("dark");
    } else if (stored === "light") {
      document.documentElement.classList.remove("dark");
    } else {
      // No stored preference — use system preference
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      if (prefersDark) {
        document.documentElement.classList.add("dark");
      }
    }

    // Listen for system preference changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    function handleChange(e: MediaQueryListEvent) {
      if (!localStorage.getItem("theme")) {
        if (e.matches) {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    }

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  return <>{children}</>;
}`}
        />
        <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Wrap your root layout with this provider to automatically apply the correct theme on page load.
        </p>
      </div>

      {/* Per-section theming */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Per-section theming
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          trink-ui section components accept a{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            theme
          </code>{" "}
          prop that overrides the page-level theme for that section only. This lets you create
          visual contrast by alternating light and dark sections on the same page:
        </p>
        <CodeBox
          code={`{/* Light page with dark accent sections */}
<HeroCentered theme="light" title="Light hero" ... />
<FeaturesGrid theme="light" title="Light features" ... />
<TestimonialsGrid theme="dark" title="Dark testimonials" ... />
<FAQAccordion theme="light" title="Light FAQ" ... />
<CTACentered theme="dark" title="Dark CTA" ... />
<FooterColumns theme="dark" ... />`}
        />
        <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
          The{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            theme
          </code>{" "}
          prop works independently of the page-level dark class. A section with{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            theme=&quot;dark&quot;
          </code>{" "}
          will always render with dark colors, even on a light-mode page.
        </p>
      </div>

      {/* Custom dark colors */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Custom dark mode colors
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Override any dark mode variable to create a custom dark palette:
        </p>
        <CodeBox
          title="globals.css — Custom dark theme"
          code={`.dark {
  /* Deep navy background instead of near-black */
  --trinkui-bg: 15 23 42;
  --trinkui-fg: 241 245 249;
  --trinkui-surface: 30 41 59;
  --trinkui-border: 51 65 85;
  --trinkui-muted: 148 163 184;

  /* Teal primary instead of indigo */
  --trinkui-primary: 45 212 191;
  --trinkui-primary-fg: 15 23 42;
}`}
        />
      </div>

      {/* Preventing flash of unstyled content */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Preventing flash of wrong theme
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          To avoid a flash of the wrong theme on page load, add an inline script to the{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            &lt;head&gt;
          </code>{" "}
          that runs before React hydrates:
        </p>
        <CodeBox
          title="app/layout.tsx"
          code={`export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: \`
              (function() {
                var theme = localStorage.getItem('theme');
                if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                  document.documentElement.classList.add('dark');
                }
              })();
            \`,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}`}
        />
      </div>

      {/* Next step */}
      <div className="rounded-xl border border-[rgb(var(--trinkui-primary)/0.3)] bg-[rgb(var(--trinkui-primary)/0.05)] p-6">
        <p className="font-medium text-[rgb(var(--trinkui-fg))]">Next step</p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          Learn how to master animations with FadeIn, SlideUp, and StaggerChildren.
        </p>
        <Link
          href="/docs/guides/animations"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
        >
          Animations Guide
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
