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

export default function RemixSetupPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
          Guides
        </p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
          Remix Setup
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Integrate trink-ui into your Remix application with server-side rendering support.
        </p>
      </div>

      {/* Prerequisites */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Prerequisites
        </h2>
        <ul className="space-y-2 text-sm text-[rgb(var(--trinkui-muted))]">
          {[
            "Remix v2 or React Router v7 (Remix successor)",
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
        </div>
      </div>

      {/* Remix config */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            2
          </span>
          Configure Remix
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Add{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            @trinkui/react
          </code>{" "}
          to{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            serverDependenciesToBundle
          </code>{" "}
          so Remix can process the ESM package on the server:
        </p>
        <CodeBox
          title="remix.config.js (Remix v2)"
          code={`/** @type {import("@remix-run/dev").AppConfig} */
export default {
  serverDependenciesToBundle: [
    "@trinkui/react",
    "@trinkui/shared",
  ],
};`}
        />
        <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
          If you are using React Router v7 (the Remix successor), no special config is needed
          since it uses Vite under the hood and handles ESM natively.
        </p>
      </div>

      {/* CSS setup */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            3
          </span>
          CSS setup in root.tsx
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Import your global CSS file containing the trink-ui variables in your root route.
          The CSS file should include the Tailwind source directive and all theme variables:
        </p>
        <CodeBox
          title="app/root.tsx"
          code={`import type { LinksFunction } from "@remix-run/node";
import {
  Links,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import styles from "./styles/globals.css?url";

export const links: LinksFunction = () => [
  { rel: "stylesheet", href: styles },
];

export default function App() {
  return (
    <html lang="en">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <Meta />
        <Links />
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
      </body>
    </html>
  );
}`}
        />
        <div className="mt-3">
          <CodeBox
            title="app/styles/globals.css"
            code={`@import "tailwindcss";

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
      </div>

      {/* Route example */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            4
          </span>
          Use components in a route
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Import trink-ui sections directly in your Remix routes. Remix renders on the server
          first, and animations hydrate on the client:
        </p>
        <CodeBox
          title="app/routes/_index.tsx"
          code={`import {
  HeroCentered,
  FeaturesGrid,
  FAQAccordion,
  CTACentered,
  FooterColumns,
} from "@trinkui/react";

export default function Index() {
  return (
    <main>
      <HeroCentered
        title="Welcome to our platform"
        subtitle="The modern way to build and ship."
        primaryAction={{ label: "Sign Up Free", href: "/signup" }}
        secondaryAction={{ label: "Documentation", href: "/docs" }}
      />
      <FeaturesGrid
        title="Built for developers"
        features={[
          { icon: "server", title: "Edge-Ready", description: "Deploy anywhere" },
          { icon: "lock", title: "Secure", description: "Enterprise-grade security" },
          { icon: "refresh", title: "Real-Time", description: "Instant updates" },
        ]}
      />
      <FAQAccordion
        title="Frequently asked questions"
        items={[
          { question: "Is it free?", answer: "Yes, the starter plan is free forever." },
          { question: "Can I self-host?", answer: "Absolutely. Full Docker support included." },
        ]}
      />
      <CTACentered
        theme="dark"
        title="Ready to ship?"
        primaryAction={{ label: "Get Started", href: "/signup" }}
      />
      <FooterColumns
        brand={{ name: "Remix App", description: "Built with trink-ui" }}
        columns={[
          { title: "Product", links: [{ label: "Features", href: "/features" }] },
          { title: "Legal", links: [{ label: "Privacy", href: "/privacy" }] },
        ]}
      />
    </main>
  );
}`}
        />
      </div>

      {/* SSR considerations */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Server-side rendering notes
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          trink-ui components render static HTML on the server and hydrate animations on the client.
          The animation wrappers use{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            useReducedMotion
          </code>{" "}
          to respect user preferences. If you want to skip client-side hydration entirely for a section,
          pass{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            animated={`{false}`}
          </code>:
        </p>
        <CodeBox
          code={`<HeroCentered
  animated={false}
  title="No client JS needed"
  subtitle="Fully server-rendered."
  primaryAction={{ label: "Learn More", href: "/docs" }}
/>`}
        />
      </div>

      {/* Next step */}
      <div className="rounded-xl border border-[rgb(var(--trinkui-primary)/0.3)] bg-[rgb(var(--trinkui-primary)/0.05)] p-6">
        <p className="font-medium text-[rgb(var(--trinkui-fg))]">Next step</p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          Learn how to implement dark mode with a toggle and per-section theming.
        </p>
        <Link
          href="/docs/guides/dark-mode"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
        >
          Dark Mode Guide
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
