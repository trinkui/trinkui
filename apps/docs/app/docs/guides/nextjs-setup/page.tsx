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

export default function NextjsSetupPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
          Guides
        </p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
          Next.js Setup
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          A complete guide to integrating trink-ui with Next.js 14 or 15, covering both App Router and Pages Router.
        </p>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Prerequisites
        </h2>
        <ul className="space-y-2 text-sm text-[rgb(var(--trinkui-muted))]">
          {[
            "Next.js 14 or 15",
            "React 18 or 19",
            "Tailwind CSS v4 configured in your project",
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

      {/* Installation */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            1
          </span>
          Install the package
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Install trink-ui and its peer dependencies using your preferred package manager:
        </p>
        <div className="space-y-3">
          <CodeBox title="pnpm" code="pnpm add @trinkui/react" />
          <CodeBox title="npm" code="npm install @trinkui/react" />
          <CodeBox title="yarn" code="yarn add @trinkui/react" />
        </div>
      </div>

      {/* Configure next.config.ts */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            2
          </span>
          Configure next.config.ts
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Add{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            @trinkui/react
          </code>{" "}
          and{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            @trinkui/shared
          </code>{" "}
          to the transpile list so Next.js can bundle them correctly:
        </p>
        <CodeBox
          title="next.config.ts"
          code={`import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@trinkui/react", "@trinkui/shared"],
};

export default nextConfig;`}
        />
      </div>

      {/* CSS Variables */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            3
          </span>
          Add CSS variables and Tailwind source scanning
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          trink-ui uses CSS custom properties for theming. Add these to your{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            globals.css
          </code>{" "}
          along with the Tailwind source directive so component classes are scanned:
        </p>
        <CodeBox
          title="app/globals.css"
          code={`@import "tailwindcss";

/* Scan trink-ui components for Tailwind classes */
@source "node_modules/@trinkui/react/src";

:root {
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

  --trinkui-radius-sm: 0.375rem;
  --trinkui-radius-md: 0.75rem;
  --trinkui-radius-lg: 1rem;
  --trinkui-radius-xl: 1.5rem;
  --trinkui-radius-full: 9999px;

  --trinkui-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --trinkui-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --trinkui-shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);

  --trinkui-font-heading: "Inter", sans-serif;
  --trinkui-font-body: "Inter", sans-serif;
  --trinkui-font-mono: "JetBrains Mono", monospace;
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

      {/* App Router example */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            4
          </span>
          App Router usage
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          With the App Router, import trink-ui components directly into your page files.
          Section components that use animations are client components internally, so they
          work seamlessly in server component pages:
        </p>
        <CodeBox
          title="app/page.tsx"
          code={`import {
  HeroCentered,
  FeaturesGrid,
  PricingCards,
  CTACentered,
  FooterColumns,
} from "@trinkui/react";

export default function HomePage() {
  return (
    <main>
      <HeroCentered
        title="Ship your landing page faster"
        subtitle="Beautiful, accessible components built for conversion."
        primaryAction={{ label: "Get Started", href: "/signup" }}
        secondaryAction={{ label: "View Demo", href: "/demo" }}
      />
      <FeaturesGrid
        title="Why teams choose us"
        features={[
          { icon: "lightning", title: "Fast", description: "Optimized for performance" },
          { icon: "palette", title: "Beautiful", description: "Designed with care" },
          { icon: "shield", title: "Secure", description: "Built with best practices" },
        ]}
      />
      <PricingCards
        title="Simple pricing"
        plans={[
          { name: "Starter", price: "$9/mo", features: ["5 projects", "Basic support"] },
          { name: "Pro", price: "$29/mo", features: ["Unlimited projects", "Priority support"], highlighted: true },
        ]}
      />
      <CTACentered
        title="Ready to get started?"
        subtitle="Join thousands of teams shipping faster."
        primaryAction={{ label: "Start Free Trial", href: "/signup" }}
      />
      <FooterColumns
        brand={{ name: "Acme", description: "Building the future." }}
        columns={[
          { title: "Product", links: [{ label: "Features", href: "/features" }] },
          { title: "Company", links: [{ label: "About", href: "/about" }] },
        ]}
      />
    </main>
  );
}`}
        />
      </div>

      {/* Pages Router example */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Pages Router usage
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          If you are using the older Pages Router, the same imports work. Make sure your{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            _app.tsx
          </code>{" "}
          imports the global CSS file:
        </p>
        <CodeBox
          title="pages/_app.tsx"
          code={`import type { AppProps } from "next/app";
import "../styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />;
}`}
        />
        <div className="mt-3">
          <CodeBox
            title="pages/index.tsx"
            code={`import { HeroCentered, FeaturesGrid } from "@trinkui/react";

export default function HomePage() {
  return (
    <>
      <HeroCentered
        title="Welcome to our product"
        subtitle="The best way to build landing pages."
        primaryAction={{ label: "Get Started", href: "/signup" }}
      />
      <FeaturesGrid
        title="Features"
        features={[
          { icon: "zap", title: "Fast", description: "Lightning quick" },
          { icon: "heart", title: "Loved", description: "By developers" },
        ]}
      />
    </>
  );
}`}
          />
        </div>
      </div>

      {/* Server Components note */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Server Components note
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          trink-ui section components use{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            &quot;use client&quot;
          </code>{" "}
          internally because they rely on animation hooks. You can import them directly in
          Server Components without any wrapper. If you want to avoid client-side JavaScript
          entirely, pass{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            animated={`{false}`}
          </code>{" "}
          to disable animations and keep the component fully static:
        </p>
        <CodeBox
          code={`// Fully static — no client JS
<HeroCentered
  animated={false}
  title="Static hero"
  subtitle="No animations, no client bundle."
  primaryAction={{ label: "Learn More", href: "/docs" }}
/>`}
        />
      </div>

      {/* Common issues */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Common issues
        </h2>
        <div className="space-y-4">
          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="font-medium text-[rgb(var(--trinkui-fg))]">
              &quot;use client&quot; directive errors
            </p>
            <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
              If you see errors about client components in server components, make sure{" "}
              <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
                @trinkui/react
              </code>{" "}
              is listed in{" "}
              <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
                transpilePackages
              </code>{" "}
              in your{" "}
              <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
                next.config.ts
              </code>.
            </p>
          </div>

          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="font-medium text-[rgb(var(--trinkui-fg))]">
              Missing or unstyled components
            </p>
            <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
              Verify that the CSS variables are defined in your{" "}
              <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
                globals.css
              </code>{" "}
              and that the{" "}
              <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
                @source
              </code>{" "}
              directive points to the correct node_modules path.
            </p>
          </div>

          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="font-medium text-[rgb(var(--trinkui-fg))]">
              Turbopack compatibility
            </p>
            <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
              trink-ui is fully compatible with Turbopack. If you run{" "}
              <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
                next dev --turbopack
              </code>
              , no extra configuration is required. The{" "}
              <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
                transpilePackages
              </code>{" "}
              setting works identically.
            </p>
          </div>
        </div>
      </div>

      {/* Next step */}
      <div className="rounded-xl border border-[rgb(var(--trinkui-primary)/0.3)] bg-[rgb(var(--trinkui-primary)/0.05)] p-6">
        <p className="font-medium text-[rgb(var(--trinkui-fg))]">Next step</p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          Build a complete landing page from scratch using trink-ui sections.
        </p>
        <Link
          href="/docs/guides/landing-page"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
        >
          Build a Landing Page
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
