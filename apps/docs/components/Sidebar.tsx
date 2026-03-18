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
    title: "Features",
    items: [
      { label: "Grid", href: "/components/features-grid" },
      { label: "Alternating", href: "/components/features-alternating" },
      { label: "List", href: "/components/features-list" },
    ],
  },
  {
    title: "Pricing",
    items: [
      { label: "Cards", href: "/components/pricing-cards" },
      { label: "Table", href: "/components/pricing-table" },
    ],
  },
  {
    title: "Testimonials",
    items: [
      { label: "Grid", href: "/components/testimonials-grid" },
      { label: "Featured", href: "/components/testimonials-featured" },
    ],
  },
  {
    title: "CTA",
    items: [
      { label: "Banner", href: "/components/cta-banner" },
      { label: "Centered", href: "/components/cta-centered" },
      { label: "Split", href: "/components/cta-split" },
    ],
  },
  {
    title: "Stats",
    items: [
      { label: "Grid", href: "/components/stats-grid" },
      { label: "Banner", href: "/components/stats-banner" },
    ],
  },
  {
    title: "FAQ",
    items: [
      { label: "Accordion", href: "/components/faq-accordion" },
      { label: "Grid", href: "/components/faq-grid" },
    ],
  },
  {
    title: "Other Sections",
    items: [
      { label: "Logo Cloud", href: "/components/logo-cloud" },
      { label: "Newsletter Banner", href: "/components/newsletter-banner" },
      { label: "Newsletter Split", href: "/components/newsletter-split" },
      { label: "Navbar Simple", href: "/components/navbar-simple" },
      { label: "Footer Simple", href: "/components/footer-simple" },
      { label: "Footer Columns", href: "/components/footer-columns" },
    ],
  },
  {
    title: "Primitives",
    items: [
      { label: "Button", href: "/components/button" },
      { label: "Badge", href: "/components/badge" },
      { label: "Input", href: "/components/input" },
      { label: "Card", href: "/components/card" },
      { label: "Avatar", href: "/components/avatar" },
      { label: "Accordion", href: "/components/accordion" },
      { label: "Divider", href: "/components/divider" },
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
      { label: "ScaleIn", href: "/components/scale-in" },
      { label: "BlurIn", href: "/components/blur-in" },
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
                          : "text-[rgb(var(--trinkui-fg))] hover:bg-[rgb(var(--trinkui-border)/0.5)]"
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
