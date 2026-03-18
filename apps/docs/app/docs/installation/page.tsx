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

export default function InstallationPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
          Getting Started
        </p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
          Installation
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Get trink-ui up and running in your React project in under 2 minutes.
        </p>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Prerequisites
        </h2>
        <ul className="space-y-2 text-sm text-[rgb(var(--trinkui-muted))]">
          {[
            "React 18 or 19",
            "Tailwind CSS v4 (configured in your project)",
            "Node.js 18+",
          ].map((item) => (
            <li key={item} className="flex items-center gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="shrink-0 text-[rgb(var(--trinkui-primary))]"
              >
                <path
                  d="M3 8.5l3 3 7-7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Step 1 */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            1
          </span>
          Install the package
        </h2>
        <div className="space-y-3">
          <CodeBox title="pnpm" code="pnpm add @trinkui/react" />
          <CodeBox title="npm" code="npm install @trinkui/react" />
          <CodeBox title="yarn" code="yarn add @trinkui/react" />
        </div>
      </div>

      {/* Step 2 */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            2
          </span>
          Configure Tailwind CSS
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Add the trink-ui source to your Tailwind CSS configuration so it scans
          the component classes. In your main CSS file:
        </p>
        <CodeBox
          title="globals.css"
          code={`@import "tailwindcss";

/* Scan trink-ui components for Tailwind classes */
@source "node_modules/@trinkui/react/src";`}
        />
      </div>

      {/* Step 3 */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            3
          </span>
          Add CSS variables
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          trink-ui uses CSS custom properties for theming. Add these to your
          global CSS (or copy from our default theme):
        </p>
        <CodeBox
          title="globals.css"
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
}

/* Dark mode */
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

      {/* Step 4 */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            4
          </span>
          Use a component
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Import any component and drop it into your page:
        </p>
        <CodeBox
          title="page.tsx"
          code={`import { HeroCentered, FeaturesGrid, PricingCards } from "@trinkui/react";

export default function LandingPage() {
  return (
    <>
      <HeroCentered
        title="Ship faster with trink-ui"
        subtitle="Production-ready landing page components."
        primaryAction={{ label: "Get Started", href: "/signup" }}
      />
      <FeaturesGrid
        title="Everything you need"
        features={[
          { icon: "⚡", title: "Fast", description: "Optimized for performance" },
          { icon: "🎨", title: "Beautiful", description: "Designed with care" },
          { icon: "♿", title: "Accessible", description: "Built for everyone" },
        ]}
      />
    </>
  );
}`}
        />
      </div>

      {/* Framework guides */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Framework Setup
        </h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="font-medium text-[rgb(var(--trinkui-fg))]">
              Next.js (App Router)
            </p>
            <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
              Add <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">@trinkui/react</code> to{" "}
              <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">transpilePackages</code> in your{" "}
              <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">next.config.ts</code>:
            </p>
            <CodeBox
              code={`// next.config.ts
const nextConfig = {
  transpilePackages: ["@trinkui/react"],
};`}
            />
          </div>

          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="font-medium text-[rgb(var(--trinkui-fg))]">Vite</p>
            <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
              No extra configuration needed. trink-ui works out of the box with
              Vite and React.
            </p>
          </div>
        </div>
      </div>

      {/* Next step */}
      <div className="rounded-xl border border-[rgb(var(--trinkui-primary)/0.3)] bg-[rgb(var(--trinkui-primary)/0.05)] p-6">
        <p className="font-medium text-[rgb(var(--trinkui-fg))]">Next step</p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          Learn how to customize colors, fonts, and spacing with CSS variables.
        </p>
        <Link
          href="/docs/theming"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
        >
          Theming
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
