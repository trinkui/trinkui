import Link from "next/link";

function CodeBox({ title, code }: { title?: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[rgb(var(--trinkui-border))]">
      {title && (
        <div className="border-b border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-4 py-2">
          <span className="text-xs font-medium text-[rgb(var(--trinkui-muted))]">
            {title}
          </span>
        </div>
      )}
      <pre className="overflow-x-auto bg-[#0a0a0f] px-4 py-3 text-sm leading-relaxed text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function DarkModePage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
          Customization
        </p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
          Dark Mode
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          How dark mode works in trink-ui, per-section theming, system
          preference detection, and implementing a theme toggle.
        </p>
      </div>

      {/* How Dark Mode Works */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          How Dark Mode Works
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          trink-ui uses the{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            .dark
          </code>{" "}
          class strategy. When the{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            .dark
          </code>{" "}
          class is present on an element (typically{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            &lt;html&gt;
          </code>{" "}
          or a section wrapper), the dark color variables take effect for that
          element and all its descendants.
        </p>
        <CodeBox
          title="How the .dark class works"
          code={`/* Light mode — default */
:root {
  --trinkui-bg: 255 255 255;
  --trinkui-fg: 10 10 10;
  --trinkui-primary: 99 102 241;
}

/* Dark mode — activated by .dark class */
.dark {
  --trinkui-bg: 9 9 11;
  --trinkui-fg: 250 250 250;
  --trinkui-primary: 129 140 248;
}

/* To enable dark mode globally, add .dark to <html>: */
<html class="dark">
  <!-- All trink-ui components will now use dark colors -->
</html>`}
        />
      </div>

      {/* Per-Section Theming */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Per-Section Theming
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Every section component accepts a{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            theme
          </code>{" "}
          prop. This lets you mix light and dark sections on the same page without
          changing the global theme. The Section component internally applies the{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            .dark
          </code>{" "}
          class to its own wrapper, scoping the dark variables to just that section.
        </p>
        <CodeBox
          title="Mixed light/dark sections"
          code={`import { HeroCentered, FeaturesGrid, CTACentered } from "@trinkui/react";

export default function LandingPage() {
  return (
    <>
      {/* Dark hero section */}
      <HeroCentered
        theme="dark"
        title="Ship faster"
        subtitle="Production-ready landing page components."
        primaryAction={{ label: "Get Started", href: "/signup" }}
      />

      {/* Light features section */}
      <FeaturesGrid
        theme="light"
        title="Why trink-ui?"
        features={features}
      />

      {/* Dark CTA at the bottom */}
      <CTACentered
        theme="dark"
        title="Ready to start?"
        subtitle="Join thousands of developers."
        primaryAction={{ label: "Sign Up", href: "/signup" }}
      />
    </>
  );
}`}
        />
      </div>

      {/* Auto-Detection with prefers-color-scheme */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Auto-Detection with prefers-color-scheme
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Detect the user&apos;s system preference and apply dark mode
          automatically. Place this script in your{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            &lt;head&gt;
          </code>{" "}
          to prevent a flash of unstyled content (FOUC):
        </p>
        <CodeBox
          title="layout.tsx — Inline script in <head>"
          code={`<head>
  <script
    dangerouslySetInnerHTML={{
      __html: \`
        (function() {
          var theme = localStorage.getItem('theme');
          if (theme === 'dark' || (!theme && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        })();
      \`,
    }}
  />
</head>`}
        />
        <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
          This script runs synchronously before the page renders, so users never
          see a flash of the wrong theme.
        </p>
      </div>

      {/* Implementing a Toggle */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Implementing a Theme Toggle
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          A simple React hook and toggle button for switching between light and
          dark mode:
        </p>
        <CodeBox
          title="hooks/useTheme.ts"
          code={`"use client";

import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  useEffect(() => {
    // Read initial theme from <html> class
    const isDark = document.documentElement.classList.contains("dark");
    setTheme(isDark ? "dark" : "light");
  }, []);

  function toggleTheme() {
    const next = theme === "light" ? "dark" : "light";
    setTheme(next);

    if (next === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }

    localStorage.setItem("theme", next);
  }

  return { theme, toggleTheme };
}`}
        />
        <div className="mt-4">
          <CodeBox
            title="ThemeToggle component"
            code={`"use client";

import { useTheme } from "@/hooks/useTheme";

export function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={\`Switch to \${theme === "light" ? "dark" : "light"} mode\`}
      className="rounded-lg p-2 text-[rgb(var(--trinkui-muted))] hover:bg-[rgb(var(--trinkui-surface))] hover:text-[rgb(var(--trinkui-fg))]"
    >
      {theme === "light" ? (
        {/* Moon icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      ) : (
        {/* Sun icon */}
        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      )}
    </button>
  );
}`}
          />
        </div>
      </div>

      {/* Next step */}
      <div className="rounded-xl border border-[rgb(var(--trinkui-primary)/0.3)] bg-[rgb(var(--trinkui-primary)/0.05)] p-6">
        <p className="font-medium text-[rgb(var(--trinkui-fg))]">Next step</p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          Learn how to override component styles with className and cn().
        </p>
        <Link
          href="/docs/customization/override-styles"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
        >
          Override Styles
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
