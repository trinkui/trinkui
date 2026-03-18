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

export default function OverrideStylesPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
          Customization
        </p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
          Override Styles
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Every trink-ui component accepts a className prop for targeted
          overrides. Learn how to use it effectively with the cn() utility and
          Tailwind classes.
        </p>
      </div>

      {/* Using className */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Using the className Prop
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          All trink-ui components accept a{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            className
          </code>{" "}
          prop. Your classes are merged with the component&apos;s default classes
          using{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            cn()
          </code>
          , which handles Tailwind class conflicts automatically (last class wins).
        </p>
        <CodeBox
          title="Basic className override"
          code={`import { Button, Card } from "@trinkui/react";

{/* Add extra margin */}
<Button className="mt-8">Get Started</Button>

{/* Override padding and add a shadow */}
<Card className="p-8 shadow-xl">
  <p>Custom padded card</p>
</Card>

{/* Override background color */}
<HeroCentered
  className="bg-gradient-to-br from-indigo-50 to-purple-50"
  title="Custom background"
  ...
/>`}
        />
      </div>

      {/* The cn() Utility */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          The cn() Utility
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            cn()
          </code>{" "}
          is a thin wrapper around{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            clsx
          </code>{" "}
          +{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            tailwind-merge
          </code>
          . It deduplicates conflicting Tailwind classes so the last value wins.
          You can import it for your own components too:
        </p>
        <CodeBox
          title="How cn() works"
          code={`import { cn } from "@trinkui/react";

// tailwind-merge resolves conflicts — "p-8" overrides "p-6"
cn("p-6 bg-white", "p-8")
// → "bg-white p-8"

// Conditional classes with clsx syntax
cn("base-class", isActive && "text-blue-500", !isActive && "text-gray-500")
// → "base-class text-blue-500" (if isActive is true)

// Array syntax
cn(["rounded-lg", "border", condition && "shadow-md"])
// → "rounded-lg border shadow-md" (if condition is true)`}
        />
      </div>

      {/* Tailwind Class Overrides */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Common Tailwind Overrides
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Practical examples of common style overrides:
        </p>
        <CodeBox
          title="Common overrides"
          code={`import { Button, HeroCentered, FeaturesGrid } from "@trinkui/react";

{/* Full-width button */}
<Button className="w-full">Full Width</Button>

{/* Custom border radius */}
<Button className="rounded-full">Pill Button</Button>

{/* Custom font size on a section */}
<HeroCentered
  className="[&_h1]:text-5xl [&_h1]:sm:text-7xl"
  title="Massive headline"
  ...
/>

{/* Custom grid gap */}
<FeaturesGrid
  className="[&_.grid]:gap-8"
  title="Wider spacing"
  features={features}
/>

{/* Responsive overrides */}
<Card className="p-4 sm:p-6 lg:p-10">
  <p>Responsive padding</p>
</Card>`}
        />
      </div>

      {/* CSS Variables vs className */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          When to Use CSS Variables vs className
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Choose the right approach for your use case:
        </p>
        <div className="space-y-3">
          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="text-sm font-medium text-[rgb(var(--trinkui-fg))]">
              Use CSS variables when...
            </p>
            <ul className="mt-2 space-y-1 text-sm text-[rgb(var(--trinkui-muted))]">
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--trinkui-primary))]" />
                Changing brand colors globally (affects all components)
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--trinkui-primary))]" />
                Adjusting border radius or shadow scale for all components
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--trinkui-primary))]" />
                Switching fonts site-wide
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--trinkui-primary))]" />
                Creating consistent dark mode colors
              </li>
            </ul>
          </div>
          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="text-sm font-medium text-[rgb(var(--trinkui-fg))]">
              Use className when...
            </p>
            <ul className="mt-2 space-y-1 text-sm text-[rgb(var(--trinkui-muted))]">
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--trinkui-accent))]" />
                Overriding a specific component instance
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--trinkui-accent))]" />
                Adding margins, padding, or layout-specific spacing
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--trinkui-accent))]" />
                Applying custom backgrounds or gradients to one section
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 block h-1.5 w-1.5 shrink-0 rounded-full bg-[rgb(var(--trinkui-accent))]" />
                Targeting inner elements with arbitrary selectors
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Next step */}
      <div className="rounded-xl border border-[rgb(var(--trinkui-primary)/0.3)] bg-[rgb(var(--trinkui-primary)/0.05)] p-6">
        <p className="font-medium text-[rgb(var(--trinkui-fg))]">Next step</p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          Learn how to create custom component variants using the variants()
          utility.
        </p>
        <Link
          href="/docs/customization/custom-variants"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
        >
          Custom Variants
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
