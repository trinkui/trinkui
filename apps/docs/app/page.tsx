import Link from "next/link";
import { HeroCentered } from "@trinkui/react";

export default function HomePage() {
  return (
    <main>
      <HeroCentered
        pill="Open Source · MIT License"
        title="Landing pages, beautifully crafted."
        subtitle="Production-ready React components for landing pages. Built with Tailwind CSS v4, Motion animations, and TypeScript."
        primaryAction={{ label: "Browse Components", href: "/components" }}
        secondaryAction={{
          label: "GitHub",
          href: "https://github.com/trinkui",
          variant: "outline",
          target: "_blank",
        }}
        animated={false}
      />

      {/* Quick stats */}
      <section className="border-y border-[rgb(var(--trinkui-border))] py-12">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 gap-8 text-center md:grid-cols-4">
            {[
              { label: "Components", value: "50+" },
              { label: "Templates", value: "10+" },
              { label: "TypeScript", value: "100%" },
              { label: "License", value: "MIT" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-[rgb(var(--trinkui-primary))]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Navigation cards */}
      <section className="py-16">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Link
              href="/components"
              className="group rounded-[var(--trinkui-radius-xl)] border border-[rgb(var(--trinkui-border))] p-6 transition-all hover:border-[rgb(var(--trinkui-primary))] hover:shadow-[var(--trinkui-shadow-md)]"
            >
              <div className="mb-3 text-2xl">🧩</div>
              <h2 className="mb-2 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">
                Components
              </h2>
              <p className="text-sm text-[rgb(var(--trinkui-muted))]">
                Browse all available landing page components with live previews and code.
              </p>
            </Link>
            <Link
              href="/components/hero-centered"
              className="group rounded-[var(--trinkui-radius-xl)] border border-[rgb(var(--trinkui-border))] p-6 transition-all hover:border-[rgb(var(--trinkui-primary))] hover:shadow-[var(--trinkui-shadow-md)]"
            >
              <div className="mb-3 text-2xl">🦸</div>
              <h2 className="mb-2 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">
                Hero Sections
              </h2>
              <p className="text-sm text-[rgb(var(--trinkui-muted))]">
                Centered, Split, and Minimal hero variants for your landing page.
              </p>
            </Link>
            <a
              href="https://github.com/trinkui"
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-[var(--trinkui-radius-xl)] border border-[rgb(var(--trinkui-border))] p-6 transition-all hover:border-[rgb(var(--trinkui-primary))] hover:shadow-[var(--trinkui-shadow-md)]"
            >
              <div className="mb-3 text-2xl">⭐</div>
              <h2 className="mb-2 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">
                GitHub
              </h2>
              <p className="text-sm text-[rgb(var(--trinkui-muted))]">
                Star the repo, open issues, and contribute to the project.
              </p>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
