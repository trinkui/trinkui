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

export default function ViteSetupPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
          Guides
        </p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
          Vite Setup
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Get trink-ui working with Vite and React. No extra bundler configuration required.
        </p>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Prerequisites
        </h2>
        <ul className="space-y-2 text-sm text-[rgb(var(--trinkui-muted))]">
          {[
            "Vite 5 or 6 with the React plugin",
            "React 18 or 19",
            "Tailwind CSS v4",
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
        <div className="space-y-3">
          <CodeBox title="pnpm" code="pnpm add @trinkui/react" />
          <CodeBox title="npm" code="npm install @trinkui/react" />
          <CodeBox title="yarn" code="yarn add @trinkui/react" />
        </div>
      </div>

      {/* Vite config */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            2
          </span>
          Vite configuration
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          No special Vite configuration is needed. trink-ui ships as standard ESM and CJS,
          and Vite handles it out of the box. A typical{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            vite.config.ts
          </code>{" "}
          looks like this:
        </p>
        <CodeBox
          title="vite.config.ts"
          code={`import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
});`}
        />
      </div>

      {/* CSS Variables */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            3
          </span>
          Add CSS variables
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Add the trink-ui CSS variables and Tailwind source scanning directive to your main CSS file:
        </p>
        <CodeBox
          title="src/index.css"
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

      {/* Usage example */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            4
          </span>
          Use components in App.tsx
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Import trink-ui components and use them directly:
        </p>
        <CodeBox
          title="src/App.tsx"
          code={`import {
  HeroCentered,
  FeaturesGrid,
  CTACentered,
  FooterSimple,
} from "@trinkui/react";

function App() {
  return (
    <div>
      <HeroCentered
        title="Build beautiful landing pages"
        subtitle="Production-ready components for React and Vite."
        primaryAction={{ label: "Get Started", href: "#features" }}
      />
      <FeaturesGrid
        title="Why choose us"
        features={[
          { icon: "zap", title: "Blazing Fast", description: "Vite HMR + optimized components" },
          { icon: "palette", title: "Customizable", description: "CSS variables for full control" },
          { icon: "code", title: "Developer-First", description: "TypeScript and great DX" },
        ]}
      />
      <CTACentered
        theme="dark"
        title="Start building today"
        primaryAction={{ label: "Install Now", href: "#install" }}
      />
      <FooterSimple
        brand={{ name: "My App" }}
        links={[
          { label: "Privacy", href: "/privacy" },
          { label: "Terms", href: "/terms" },
        ]}
      />
    </div>
  );
}

export default App;`}
        />
      </div>

      {/* React Router integration */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          React Router integration
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          If your Vite project uses React Router, trink-ui components work on any route.
          Pass route-aware links using the{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            href
          </code>{" "}
          prop on action buttons:
        </p>
        <CodeBox
          title="src/pages/Home.tsx"
          code={`import { HeroCentered, PricingCards } from "@trinkui/react";

export function HomePage() {
  return (
    <>
      <HeroCentered
        title="Welcome"
        subtitle="The fastest way to launch."
        primaryAction={{ label: "View Pricing", href: "/pricing" }}
        secondaryAction={{ label: "Learn More", href: "/about" }}
      />
      <PricingCards
        title="Plans"
        plans={[
          { name: "Free", price: "$0", features: ["1 project", "Community support"] },
          { name: "Pro", price: "$19/mo", features: ["Unlimited projects", "Priority support"], highlighted: true },
        ]}
      />
    </>
  );
}`}
        />
        <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
          For SPA navigation with React Router, you can wrap trink-ui button actions
          with your own click handlers or use the href values to integrate with{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            useNavigate
          </code>.
        </p>
      </div>

      {/* Next step */}
      <div className="rounded-xl border border-[rgb(var(--trinkui-primary)/0.3)] bg-[rgb(var(--trinkui-primary)/0.05)] p-6">
        <p className="font-medium text-[rgb(var(--trinkui-fg))]">Next step</p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          Follow our step-by-step tutorial to build a complete landing page.
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
