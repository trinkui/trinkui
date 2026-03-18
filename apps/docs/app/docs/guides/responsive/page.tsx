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

export default function ResponsiveGuidePage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
          Guides
        </p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
          Responsive Design
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          trink-ui is mobile-first by default. Every section, layout component, and primitive
          adapts to different screen sizes without any extra work. Learn how it works and
          how to customize responsive behavior.
        </p>
      </div>

      {/* Mobile-first approach */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Mobile-first approach
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          All trink-ui components are designed mobile-first. Base styles target small screens,
          and responsive modifiers add layout changes at larger breakpoints. This follows
          Tailwind CSS conventions:
        </p>
        <div className="space-y-2">
          {[
            { bp: "Default", width: "0px+", desc: "Mobile phones in portrait mode" },
            { bp: "sm:", width: "640px+", desc: "Large phones in landscape" },
            { bp: "md:", width: "768px+", desc: "Tablets" },
            { bp: "lg:", width: "1024px+", desc: "Laptops and small desktops" },
            { bp: "xl:", width: "1280px+", desc: "Desktops" },
            { bp: "2xl:", width: "1536px+", desc: "Large desktops" },
          ].map((item) => (
            <div
              key={item.bp}
              className="flex items-center gap-4 rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] px-4 py-3"
            >
              <code className="w-16 shrink-0 rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1.5 py-0.5 text-center text-xs font-medium text-[rgb(var(--trinkui-primary))]">
                {item.bp}
              </code>
              <div>
                <p className="text-sm font-medium text-[rgb(var(--trinkui-fg))]">{item.width}</p>
                <p className="text-xs text-[rgb(var(--trinkui-muted))]">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Container sizes */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Container sizes
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          The{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            Container
          </code>{" "}
          layout component constrains content width and centers it horizontally. Choose from
          multiple sizes depending on how wide your content should be:
        </p>
        <CodeBox
          code={`import { Container } from "@trinkui/react";

// Narrow content (forms, text articles)
<Container size="sm">  {/* max-width: 640px  */}
  <p>Narrow content</p>
</Container>

// Default content width
<Container size="md">  {/* max-width: 768px  */}
  <p>Medium content</p>
</Container>

// Wide content (most sections use this)
<Container size="lg">  {/* max-width: 1024px */}
  <p>Wide content</p>
</Container>

// Extra wide (feature grids, pricing)
<Container size="xl">  {/* max-width: 1280px */}
  <p>Extra wide content</p>
</Container>

// Full width with max constraint
<Container size="2xl"> {/* max-width: 1536px */}
  <p>Very wide content</p>
</Container>`}
        />
      </div>

      {/* Section spacing */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Section spacing adapts automatically
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          The{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            Section
          </code>{" "}
          layout component provides responsive vertical padding. On mobile, padding is compact;
          on larger screens, it increases for a more spacious feel:
        </p>
        <CodeBox
          code={`// Section spacing prop
<Section spacing="sm">  {/* py-8  md:py-12 */}
<Section spacing="md">  {/* py-12 md:py-16 */}
<Section spacing="lg">  {/* py-16 md:py-24 */}
<Section spacing="xl">  {/* py-20 md:py-32 */}`}
        />
        <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
          All trink-ui section components (Hero, Features, Pricing, etc.) use{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            Section
          </code>{" "}
          internally with sensible defaults, so spacing is already responsive.
        </p>
      </div>

      {/* Grid layouts */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Grid layouts stack on mobile
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Components like{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            FeaturesGrid
          </code>,{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            PricingCards
          </code>,{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            TestimonialsGrid
          </code>, and{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            StatsGrid
          </code>{" "}
          use CSS Grid that automatically adapts:
        </p>
        <div className="space-y-3">
          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="font-medium text-[rgb(var(--trinkui-fg))]">Mobile (default)</p>
            <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
              Single column stack. All grid items appear vertically.
            </p>
          </div>
          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="font-medium text-[rgb(var(--trinkui-fg))]">Tablet (md:)</p>
            <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
              Two-column grid for most sections. Pricing shows 2 cards side by side.
            </p>
          </div>
          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="font-medium text-[rgb(var(--trinkui-fg))]">Desktop (lg:)</p>
            <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
              Three-column grid. FeaturesGrid shows 3 features per row. PricingCards shows all 3 plans.
            </p>
          </div>
        </div>
      </div>

      {/* Navbar behavior */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Navbar collapses on mobile
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          The{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            NavbarSimple
          </code>{" "}
          component automatically converts to a hamburger menu on screens below the{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            md
          </code>{" "}
          breakpoint. On desktop, links display horizontally. On mobile, tapping the menu icon
          reveals a slide-down panel with all navigation links and action buttons stacked vertically.
        </p>
        <CodeBox
          code={`<NavbarSimple
  brand={{ name: "Acme", href: "/" }}
  links={[
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ]}
  actions={[
    { label: "Sign In", href: "/login", variant: "ghost" },
    { label: "Get Started", href: "/signup", variant: "primary" },
  ]}
/>
{/* Desktop: horizontal links + buttons */}
{/* Mobile: hamburger icon → slide-down menu */}`}
        />
      </div>

      {/* Testing responsive */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Testing responsive layouts
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Use your browser&apos;s developer tools to test at various screen sizes:
        </p>
        <ul className="space-y-2 text-sm text-[rgb(var(--trinkui-muted))]">
          {[
            "Chrome/Edge: Press F12, then Ctrl+Shift+M to toggle device mode",
            "Firefox: Press F12, then click the responsive design mode icon",
            "Safari: Enable Developer menu in Preferences, then use Responsive Design Mode",
            "Test at 375px (iPhone SE), 768px (iPad), 1024px (laptop), 1440px (desktop)",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="mt-0.5 shrink-0 text-[rgb(var(--trinkui-primary))]"
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

      {/* Custom responsive overrides */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Custom responsive overrides
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Every trink-ui component accepts a{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            className
          </code>{" "}
          prop. Use Tailwind responsive modifiers to add custom behavior at specific breakpoints:
        </p>
        <CodeBox
          code={`// Hide a section on mobile, show on desktop
<FeaturesGrid
  className="hidden lg:block"
  title="Desktop features"
  features={...}
/>

// Adjust padding at different breakpoints
<HeroCentered
  className="px-4 sm:px-8 lg:px-16"
  title="Custom spacing"
  ...
/>

// Change text alignment based on screen size
<CTACentered
  className="text-left md:text-center"
  title="Responsive alignment"
  ...
/>`}
        />
      </div>

      {/* Next step */}
      <div className="rounded-xl border border-[rgb(var(--trinkui-primary)/0.3)] bg-[rgb(var(--trinkui-primary)/0.05)] p-6">
        <p className="font-medium text-[rgb(var(--trinkui-fg))]">Next step</p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          Optimize your landing page for search engines with semantic HTML and metadata.
        </p>
        <Link
          href="/docs/guides/seo"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
        >
          SEO Best Practices
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
