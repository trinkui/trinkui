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

export default function ThemePage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
          Customization
        </p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
          Theme
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Understand how trink-ui theming works and how to customize every aspect
          of the visual design through CSS custom properties.
        </p>
      </div>

      {/* How Theming Works */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          How Theming Works
        </h2>
        <p className="text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          trink-ui uses a CSS custom property (variable) system for all visual
          tokens. Instead of hardcoding colors like{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            #6366f1
          </code>
          , every component references variables like{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            rgb(var(--trinkui-primary))
          </code>
          . This means you can change the entire look of your site by overriding
          a handful of CSS variables in your global stylesheet.
        </p>
        <div className="mt-4">
          <CodeBox
            title="How components reference theme variables"
            code={`/* Inside a trink-ui component */
className="bg-[rgb(var(--trinkui-primary))] text-[rgb(var(--trinkui-primary-fg))]"

/* Your global CSS defines the actual values */
:root {
  --trinkui-primary: 99 102 241;
  --trinkui-primary-fg: 255 255 255;
}`}
          />
        </div>
      </div>

      {/* CSS Variables Overview */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          CSS Variables Overview
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          All trink-ui variables use the{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            --trinkui-
          </code>{" "}
          prefix and are organized into four categories:
        </p>
        <div className="space-y-3">
          {[
            {
              category: "Colors",
              variables: "--trinkui-bg, --trinkui-fg, --trinkui-primary, --trinkui-accent, --trinkui-muted, --trinkui-border, --trinkui-surface",
              description: "Define the color palette. Values are RGB channels (e.g. 99 102 241) for Tailwind opacity compatibility.",
            },
            {
              category: "Typography",
              variables: "--trinkui-font-heading, --trinkui-font-body, --trinkui-font-mono",
              description: "Font family stacks for headings, body text, and code.",
            },
            {
              category: "Border Radius",
              variables: "--trinkui-radius-sm, --trinkui-radius-md, --trinkui-radius-lg, --trinkui-radius-xl, --trinkui-radius-full",
              description: "Control the roundness of interactive elements and cards.",
            },
            {
              category: "Shadows",
              variables: "--trinkui-shadow-sm, --trinkui-shadow-md, --trinkui-shadow-lg",
              description: "Elevation levels for cards, dropdowns, and modals.",
            },
          ].map((item) => (
            <div
              key={item.category}
              className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4"
            >
              <p className="font-medium text-[rgb(var(--trinkui-fg))]">
                {item.category}
              </p>
              <p className="mt-1 font-mono text-xs text-[rgb(var(--trinkui-muted))]">
                {item.variables}
              </p>
              <p className="mt-2 text-sm text-[rgb(var(--trinkui-muted))]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* The Section theme Prop */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          The Section theme Prop
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Every section component accepts a{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            theme
          </code>{" "}
          prop that toggles between{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            &quot;light&quot;
          </code>{" "}
          and{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            &quot;dark&quot;
          </code>
          . Under the hood, the{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            Section
          </code>{" "}
          layout component adds or removes the{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            .dark
          </code>{" "}
          class on its wrapper, scoping the dark color variables to just that section.
        </p>
        <CodeBox
          title="Per-section theming"
          code={`import { HeroCentered, FeaturesGrid, CTACentered } from "@trinkui/react";

export default function LandingPage() {
  return (
    <>
      {/* Dark hero on a light page */}
      <HeroCentered theme="dark" title="Welcome" ... />

      {/* Light features section */}
      <FeaturesGrid theme="light" title="Features" ... />

      {/* Dark CTA to close */}
      <CTACentered theme="dark" title="Get started" ... />
    </>
  );
}`}
        />
      </div>

      {/* Default Theme Values */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Default Theme Values
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Here is the complete default theme. Copy this into your{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            globals.css
          </code>{" "}
          as a starting point, then override the values you want to change:
        </p>
        <CodeBox
          title="globals.css — Default theme"
          code={`:root {
  --trinkui-bg: 255 255 255;
  --trinkui-fg: 10 10 10;
  --trinkui-primary: 99 102 241;
  --trinkui-primary-fg: 255 255 255;
  --trinkui-secondary: 241 245 249;
  --trinkui-secondary-fg: 15 23 42;
  --trinkui-accent: 249 115 22;
  --trinkui-muted: 100 116 139;
  --trinkui-border: 226 232 240;
  --trinkui-surface: 248 250 252;

  --trinkui-font-heading: "Inter", sans-serif;
  --trinkui-font-body: "Inter", sans-serif;
  --trinkui-font-mono: "JetBrains Mono", monospace;

  --trinkui-radius-sm: 0.375rem;
  --trinkui-radius-md: 0.75rem;
  --trinkui-radius-lg: 1rem;
  --trinkui-radius-xl: 1.5rem;
  --trinkui-radius-full: 9999px;

  --trinkui-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --trinkui-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --trinkui-shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
}

.dark {
  --trinkui-bg: 9 9 11;
  --trinkui-fg: 250 250 250;
  --trinkui-primary: 129 140 248;
  --trinkui-primary-fg: 255 255 255;
  --trinkui-secondary: 24 24 27;
  --trinkui-secondary-fg: 228 228 231;
  --trinkui-accent: 251 146 60;
  --trinkui-muted: 113 113 122;
  --trinkui-border: 39 39 42;
  --trinkui-surface: 18 18 21;
}`}
        />
      </div>

      {/* Next step */}
      <div className="rounded-xl border border-[rgb(var(--trinkui-primary)/0.3)] bg-[rgb(var(--trinkui-primary)/0.05)] p-6">
        <p className="font-medium text-[rgb(var(--trinkui-fg))]">Next step</p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          Learn how the layout system works with Container, Section, and
          SectionHeader.
        </p>
        <Link
          href="/docs/customization/layout"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
        >
          Layout
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
