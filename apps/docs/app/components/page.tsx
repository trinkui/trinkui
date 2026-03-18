import Link from "next/link";

const componentGroups = [
  {
    category: "Hero",
    description: "Page header sections with headlines, CTAs, and optional images.",
    components: [
      { name: "Hero Centered", slug: "hero-centered", description: "Centered layout with image below" },
      { name: "Hero Split", slug: "hero-split", description: "Text left, image right (50/50)" },
      { name: "Hero Minimal", slug: "hero-minimal", description: "Compact headline + CTA, no image" },
    ],
  },
  {
    category: "Primitives",
    description: "Low-level UI building blocks.",
    components: [
      { name: "Button", slug: "button", description: "Multi-variant interactive button" },
      { name: "Badge", slug: "badge", description: "Labels, statuses, and tags" },
    ],
  },
  {
    category: "Layout",
    description: "Structural components for page composition.",
    components: [
      { name: "Container", slug: "container", description: "Max-width content wrapper" },
      { name: "Section", slug: "section", description: "Section wrapper with spacing and theme" },
      { name: "SectionHeader", slug: "section-header", description: "Pill + title + subtitle header" },
    ],
  },
  {
    category: "Animation",
    description: "Motion wrappers for scroll-triggered animations.",
    components: [
      { name: "FadeIn", slug: "fade-in", description: "Fade in on scroll" },
      { name: "SlideUp", slug: "slide-up", description: "Slide up from below" },
      { name: "StaggerChildren", slug: "stagger-children", description: "Sequential child animations" },
    ],
  },
];

export default function ComponentsIndexPage() {
  return (
    <div className="space-y-12">
      <div>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Components</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          All available TrinkUI components, organized by category.
        </p>
      </div>

      {componentGroups.map((group) => (
        <section key={group.category}>
          <h2 className="mb-1 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
            {group.category}
          </h2>
          <p className="mb-4 text-sm text-[rgb(var(--trinkui-muted))]">{group.description}</p>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {group.components.map((component) => (
              <Link
                key={component.slug}
                href={`/components/${component.slug}`}
                className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] p-4 transition-all hover:border-[rgb(var(--trinkui-primary))] hover:shadow-sm"
              >
                <p className="font-medium text-[rgb(var(--trinkui-fg))]">{component.name}</p>
                <p className="mt-0.5 text-sm text-[rgb(var(--trinkui-muted))]">
                  {component.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
