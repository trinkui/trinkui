import Link from "next/link";

export default function IntroductionPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
          Getting Started
        </p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
          Introduction
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          trink-ui is an open-source React component library built exclusively
          for landing pages. It provides 40+ production-ready sections,
          primitives, and animations so you can ship beautiful landing pages in
          minutes instead of days.
        </p>
      </div>

      {/* Why trink-ui */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Why trink-ui?
        </h2>
        <ul className="space-y-3">
          {[
            {
              title: "Landing-page focused",
              desc: "Every component exists to serve landing pages: hero sections, features, pricing, testimonials, FAQ, CTA, and more.",
            },
            {
              title: "Drop-in ready",
              desc: "Import a section, pass your data as props, done. No wiring, no boilerplate.",
            },
            {
              title: "Dark mode built-in",
              desc: "Light and dark themes via CSS custom properties. Switch with a single prop.",
            },
            {
              title: "Accessible",
              desc: "Semantic HTML, keyboard navigation, focus-visible rings, and ARIA attributes out of the box.",
            },
            {
              title: "Animated",
              desc: "Scroll-triggered animations powered by Motion. Respects prefers-reduced-motion automatically.",
            },
            {
              title: "Fully typed",
              desc: "Written in TypeScript with strict mode. Every prop has JSDoc documentation.",
            },
          ].map((item) => (
            <li
              key={item.title}
              className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.5)] p-4"
            >
              <p className="font-medium text-[rgb(var(--trinkui-fg))]">
                {item.title}
              </p>
              <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
                {item.desc}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Tech stack */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Tech Stack
        </h2>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { name: "React 18/19", desc: "Works with both versions" },
            { name: "TypeScript 5", desc: "Strict mode, full type safety" },
            { name: "Tailwind CSS v4", desc: "Utility-first styling" },
            { name: "Motion", desc: "Smooth scroll-triggered animations" },
            { name: "tsup", desc: "CJS + ESM + DTS build" },
            { name: "Turborepo", desc: "Monorepo build orchestration" },
          ].map((tech) => (
            <div
              key={tech.name}
              className="flex items-center gap-3 rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] px-4 py-3"
            >
              <span className="text-sm font-medium text-[rgb(var(--trinkui-primary))]">
                {tech.name}
              </span>
              <span className="text-sm text-[rgb(var(--trinkui-muted))]">
                {tech.desc}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Component hierarchy */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Component Hierarchy
        </h2>
        <p className="mb-4 text-sm text-[rgb(var(--trinkui-muted))]">
          trink-ui components follow a 3-layer architecture:
        </p>
        <div className="space-y-3">
          {[
            {
              layer: "Sections",
              desc: "Full landing page sections (Hero, Features, Pricing, CTA, etc.)",
              examples: "HeroCentered, FeaturesGrid, PricingCards",
            },
            {
              layer: "Layout",
              desc: "Structural wrappers that sections use internally",
              examples: "Section, Container, SectionHeader",
            },
            {
              layer: "Primitives",
              desc: "Atomic UI elements used by sections and available standalone",
              examples: "Button, Badge, Input, Card, Avatar",
            },
          ].map((l) => (
            <div
              key={l.layer}
              className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4"
            >
              <p className="font-medium text-[rgb(var(--trinkui-fg))]">
                {l.layer}
              </p>
              <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
                {l.desc}
              </p>
              <p className="mt-2 font-mono text-xs text-[rgb(var(--trinkui-primary)/0.8)]">
                {l.examples}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Next step */}
      <div className="rounded-xl border border-[rgb(var(--trinkui-primary)/0.3)] bg-[rgb(var(--trinkui-primary)/0.05)] p-6">
        <p className="font-medium text-[rgb(var(--trinkui-fg))]">Next step</p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          Ready to get started? Head to the installation guide.
        </p>
        <Link
          href="/docs/installation"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
        >
          Installation
          <svg
            width="14"
            height="14"
            viewBox="0 0 16 16"
            fill="none"
          >
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
