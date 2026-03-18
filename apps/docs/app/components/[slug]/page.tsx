import { notFound } from "next/navigation";

interface Props {
  params: Promise<{ slug: string }>;
}

export default async function ComponentSlugPage({ params }: Props) {
  const { slug } = await params;

  // These slugs have dedicated pages — redirect handled by Next.js routing
  // This catch-all handles future/unknown slugs gracefully
  const knownSlugs = [
    "hero-centered",
    "hero-split",
    "hero-minimal",
    "button",
    "badge",
    "container",
    "section",
    "section-header",
    "fade-in",
    "slide-up",
    "stagger-children",
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
    { slug: "button" },
    { slug: "badge" },
    { slug: "container" },
    { slug: "section" },
    { slug: "section-header" },
    { slug: "fade-in" },
    { slug: "slide-up" },
    { slug: "stagger-children" },
  ];
}
