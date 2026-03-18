import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ComponentSlugPage({ params }: Props) {
  const { slug } = await params;

  // These slugs have dedicated pages — redirect handled by Next.js routing
  // This catch-all handles future/unknown slugs gracefully
  const knownSlugs = [
    "hero-centered", "hero-split", "hero-minimal",
    "features-grid", "features-alternating", "features-list",
    "pricing-cards", "pricing-table",
    "testimonials-grid", "testimonials-featured",
    "cta-banner", "cta-centered", "cta-split",
    "stats-grid", "stats-banner",
    "faq-accordion", "faq-grid",
    "logo-cloud", "newsletter-banner", "newsletter-split",
    "navbar-simple", "footer-simple", "footer-columns",
    "button", "badge", "input", "card", "avatar", "accordion", "divider",
    "kbd", "chip", "pagination", "select", "textarea", "drawer", "dropdown", "table", "toast",
    "slider", "popover", "snippet", "spacer", "image", "user", "radio-group", "navbar",
    "container", "section", "section-header",
    "fade-in", "slide-up", "stagger-children", "scale-in", "blur-in",
  ];

  if (!knownSlugs.includes(slug)) {
    notFound();
  }

  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
        {slug
          .split("-")
          .map((w) => w.charAt(0).toUpperCase() + w.slice(1))
          .join("")}
      </h1>
      <p className="text-[rgb(var(--trinkui-muted))]">Documentation coming soon.</p>
    </div>
  );
}

export function generateStaticParams() {
  return [
    "hero-centered", "hero-split", "hero-minimal",
    "features-grid", "features-alternating", "features-list",
    "pricing-cards", "pricing-table",
    "testimonials-grid", "testimonials-featured",
    "cta-banner", "cta-centered", "cta-split",
    "stats-grid", "stats-banner",
    "faq-accordion", "faq-grid",
    "logo-cloud", "newsletter-banner", "newsletter-split",
    "navbar-simple", "footer-simple", "footer-columns",
    "button", "badge", "input", "card", "avatar", "accordion", "divider",
    "kbd", "chip", "pagination", "select", "textarea", "drawer", "dropdown", "table", "toast",
    "slider", "popover", "snippet", "spacer", "image", "user", "radio-group", "navbar",
    "container", "section", "section-header",
    "fade-in", "slide-up", "stagger-children", "scale-in", "blur-in",
  ].map((slug) => ({ slug }));
}
