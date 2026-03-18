"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@trinkui/react";

interface NavItem {
  label: string;
  href: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
}

const navigation: NavSection[] = [
  {
    title: "Getting Started",
    items: [
      { label: "Introduction", href: "/docs" },
      { label: "Installation", href: "/docs/installation" },
      { label: "Theming", href: "/docs/theming" },
    ],
  },
  {
    title: "Hero",
    items: [
      { label: "Centered", href: "/components/hero-centered" },
      { label: "Split", href: "/components/hero-split" },
      { label: "Minimal", href: "/components/hero-minimal" },
    ],
  },
  {
    title: "Primitives",
    items: [
      { label: "Button", href: "/components/button" },
      { label: "Badge", href: "/components/badge" },
    ],
  },
  {
    title: "Layout",
    items: [
      { label: "Container", href: "/components/container" },
      { label: "Section", href: "/components/section" },
      { label: "SectionHeader", href: "/components/section-header" },
    ],
  },
  {
    title: "Animation",
    items: [
      { label: "FadeIn", href: "/components/fade-in" },
      { label: "SlideUp", href: "/components/slide-up" },
      { label: "StaggerChildren", href: "/components/stagger-children" },
    ],
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="sticky top-0 h-screen w-64 shrink-0 overflow-y-auto border-r border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] py-8">
      {/* Logo */}
      <div className="px-6 pb-6">
        <Link
          href="/"
          className="flex items-center gap-2 font-bold text-[rgb(var(--trinkui-fg))]"
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-md bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            T
          </span>
          TrinkUI
        </Link>
      </div>

      {/* Nav sections */}
      <nav className="space-y-6 px-4">
        {navigation.map((section) => (
          <div key={section.title}>
            <p className="mb-2 px-2 text-xs font-semibold uppercase tracking-wider text-[rgb(var(--trinkui-muted))]">
              {section.title}
            </p>
            <ul className="space-y-0.5">
              {section.items.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "block rounded-md px-2 py-1.5 text-sm transition-colors",
                        isActive
                          ? "bg-[rgb(var(--trinkui-primary)/0.1)] font-medium text-[rgb(var(--trinkui-primary))]"
                          : "text-[rgb(var(--trinkui-fg))] hover:bg-[rgb(var(--trinkui-border)/0.5)] hover:text-[rgb(var(--trinkui-fg))]"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        ))}
      </nav>
    </aside>
  );
}
