import Link from "next/link";

const templates = [
  {
    name: "SaaS",
    href: "/templates/saas",
    description: "Full SaaS landing page with hero, features, pricing, and CTA sections.",
  },
  {
    name: "Agency",
    href: "/templates/agency",
    description: "Bold agency page with project showcase, team section, and contact form.",
  },
  {
    name: "Product Launch",
    href: "/templates/product-launch",
    description: "Launch page with countdown, waitlist signup, and feature highlights.",
  },
];

const categories = [
  {
    name: "Hero",
    count: 3,
    href: "/components/hero-centered",
    components: ["Centered", "Split", "Minimal"],
    description: "Page header sections with headlines, CTAs, and optional images.",
  },
  {
    name: "Features",
    count: 3,
    href: "/components/features-grid",
    components: ["Grid", "Alternating", "List"],
    description: "Showcase product features and capabilities.",
  },
  {
    name: "Pricing",
    count: 2,
    href: "/components/pricing-cards",
    components: ["Cards", "Table"],
    description: "Pricing plans and comparison layouts.",
  },
  {
    name: "Testimonials",
    count: 2,
    href: "/components/testimonials-grid",
    components: ["Grid", "Featured"],
    description: "Social proof and customer testimonials.",
  },
  {
    name: "CTA",
    count: 3,
    href: "/components/cta-banner",
    components: ["Banner", "Centered", "Split"],
    description: "Call-to-action sections to drive conversions.",
  },
  {
    name: "Stats",
    count: 2,
    href: "/components/stats-grid",
    components: ["Grid", "Banner"],
    description: "Key metrics and statistics displays.",
  },
  {
    name: "FAQ",
    count: 2,
    href: "/components/faq-accordion",
    components: ["Accordion", "Grid"],
    description: "Frequently asked questions layouts.",
  },
  {
    name: "Other Sections",
    count: 6,
    href: "/components/logo-cloud",
    components: [
      "Logo Cloud",
      "Newsletter Banner",
      "Newsletter Split",
      "Navbar Simple",
      "Footer Simple",
      "Footer Columns",
    ],
    description: "Navigation, footers, newsletters, and logo displays.",
  },
  {
    name: "Primitives",
    count: 7,
    href: "/components/button",
    components: ["Button", "Badge", "Input", "Card", "Avatar", "Accordion", "Divider"],
    description: "Atomic UI building blocks for composition.",
  },
  {
    name: "Layout",
    count: 3,
    href: "/components/container",
    components: ["Container", "Section", "SectionHeader"],
    description: "Structural wrappers for page composition.",
  },
  {
    name: "Animation",
    count: 5,
    href: "/components/fade-in",
    components: ["FadeIn", "SlideUp", "StaggerChildren", "ScaleIn", "BlurIn"],
    description: "Motion wrappers for scroll-triggered animations.",
  },
];

export default function ComponentsIndexPage() {
  return (
    <div className="space-y-16">
      {/* ── Header ────────────────────────────────────────────────── */}
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-[rgb(var(--trinkui-fg))] sm:text-4xl">
          Components
        </h1>
        <p className="mt-3 max-w-2xl text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          All TrinkUI components organized by category. Each component is designed for landing
          pages with full TypeScript support and dark mode built in.
        </p>
      </div>

      {/* ── Templates ─────────────────────────────────────────────── */}
      <section>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[rgb(var(--trinkui-fg))]">Templates</h2>
          <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
            Complete landing page templates built with TrinkUI components.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {templates.map((template) => (
            <Link
              key={template.name}
              href={template.href}
              className="group relative overflow-hidden rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.5)] p-5 transition-all duration-300 hover:border-[rgb(var(--trinkui-primary)/0.4)] hover:bg-[rgb(var(--trinkui-surface))]"
            >
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgb(var(--trinkui-primary)/0.05)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="relative">
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold text-[rgb(var(--trinkui-fg))] transition-colors group-hover:text-[rgb(var(--trinkui-primary))]">
                    {template.name}
                  </h3>
                  <span className="rounded-full border border-[rgb(var(--trinkui-accent)/0.3)] bg-[rgb(var(--trinkui-accent)/0.1)] px-2.5 py-0.5 text-xs font-medium text-[rgb(var(--trinkui-accent))]">
                    Template
                  </span>
                </div>
                <p className="text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
                  {template.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Divider ───────────────────────────────────────────────── */}
      <div className="border-t border-[rgb(var(--trinkui-border)/0.5)]" />

      {/* ── Component Categories ──────────────────────────────────── */}
      <section>
        <div className="mb-6">
          <h2 className="text-xl font-semibold text-[rgb(var(--trinkui-fg))]">All Components</h2>
          <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
            Browse 38 components across 11 categories.
          </p>
        </div>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.map((category) => (
            <Link
              key={category.name}
              href={category.href}
              className="group relative overflow-hidden rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.5)] p-5 transition-all duration-300 hover:border-[rgb(var(--trinkui-primary)/0.4)] hover:bg-[rgb(var(--trinkui-surface))]"
            >
              {/* Hover glow */}
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-br from-[rgb(var(--trinkui-primary)/0.05)] to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative">
                {/* Header row */}
                <div className="mb-3 flex items-center justify-between">
                  <h3 className="font-semibold text-[rgb(var(--trinkui-fg))] transition-colors group-hover:text-[rgb(var(--trinkui-primary))]">
                    {category.name}
                  </h3>
                  <span className="rounded-full border border-[rgb(var(--trinkui-primary)/0.2)] bg-[rgb(var(--trinkui-primary)/0.1)] px-2.5 py-0.5 text-xs font-medium text-[rgb(var(--trinkui-primary))]">
                    {category.count}
                  </span>
                </div>

                {/* Description */}
                <p className="mb-4 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
                  {category.description}
                </p>

                {/* Component list */}
                <div className="flex flex-wrap gap-1.5">
                  {category.components.map((component) => (
                    <span
                      key={component}
                      className="rounded-md bg-[rgb(var(--trinkui-secondary))] px-2 py-0.5 text-xs text-[rgb(var(--trinkui-muted))] transition-colors group-hover:text-[rgb(var(--trinkui-fg)/0.7)]"
                    >
                      {component}
                    </span>
                  ))}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
