"use client";

import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/cn";

interface SearchModalProps {
  open: boolean;
  onClose: () => void;
}

interface SearchItem {
  label: string;
  href: string;
  category: string;
}

const searchItems: SearchItem[] = [
  // Getting Started
  { label: "Introduction", href: "/docs", category: "Getting Started" },
  { label: "Installation", href: "/docs/installation", category: "Getting Started" },
  { label: "Theming", href: "/docs/theming", category: "Getting Started" },
  // Templates
  { label: "SaaS Template", href: "/templates/saas", category: "Templates" },
  { label: "Agency Template", href: "/templates/agency", category: "Templates" },
  { label: "Product Launch Template", href: "/templates/product-launch", category: "Templates" },
  // Hero
  { label: "HeroCentered", href: "/components/hero-centered", category: "Hero" },
  { label: "HeroSplit", href: "/components/hero-split", category: "Hero" },
  { label: "HeroMinimal", href: "/components/hero-minimal", category: "Hero" },
  // Features
  { label: "FeaturesGrid", href: "/components/features-grid", category: "Features" },
  { label: "FeaturesAlternating", href: "/components/features-alternating", category: "Features" },
  { label: "FeaturesList", href: "/components/features-list", category: "Features" },
  // Pricing
  { label: "PricingCards", href: "/components/pricing-cards", category: "Pricing" },
  { label: "PricingTable", href: "/components/pricing-table", category: "Pricing" },
  // Testimonials
  { label: "TestimonialsGrid", href: "/components/testimonials-grid", category: "Testimonials" },
  { label: "TestimonialsFeatured", href: "/components/testimonials-featured", category: "Testimonials" },
  // CTA
  { label: "CTABanner", href: "/components/cta-banner", category: "CTA" },
  { label: "CTACentered", href: "/components/cta-centered", category: "CTA" },
  { label: "CTASplit", href: "/components/cta-split", category: "CTA" },
  // Stats
  { label: "StatsGrid", href: "/components/stats-grid", category: "Stats" },
  { label: "StatsBanner", href: "/components/stats-banner", category: "Stats" },
  // FAQ
  { label: "FAQAccordion", href: "/components/faq-accordion", category: "FAQ" },
  { label: "FAQGrid", href: "/components/faq-grid", category: "FAQ" },
  // Other
  { label: "LogoCloud", href: "/components/logo-cloud", category: "Other" },
  { label: "NewsletterBanner", href: "/components/newsletter-banner", category: "Other" },
  { label: "NewsletterSplit", href: "/components/newsletter-split", category: "Other" },
  { label: "NavbarSimple", href: "/components/navbar-simple", category: "Other" },
  { label: "FooterSimple", href: "/components/footer-simple", category: "Other" },
  { label: "FooterColumns", href: "/components/footer-columns", category: "Other" },
  // Primitives
  { label: "Button", href: "/components/button", category: "Primitives" },
  { label: "Badge", href: "/components/badge", category: "Primitives" },
  { label: "Input", href: "/components/input", category: "Primitives" },
  { label: "Card", href: "/components/card", category: "Primitives" },
  { label: "Avatar", href: "/components/avatar", category: "Primitives" },
  { label: "Accordion", href: "/components/accordion", category: "Primitives" },
  { label: "Divider", href: "/components/divider", category: "Primitives" },
  // Layout
  { label: "Container", href: "/components/container", category: "Layout" },
  { label: "Section", href: "/components/section", category: "Layout" },
  { label: "SectionHeader", href: "/components/section-header", category: "Layout" },
  // Animation
  { label: "FadeIn", href: "/components/fade-in", category: "Animation" },
  { label: "SlideUp", href: "/components/slide-up", category: "Animation" },
  { label: "StaggerChildren", href: "/components/stagger-children", category: "Animation" },
  { label: "ScaleIn", href: "/components/scale-in", category: "Animation" },
  { label: "BlurIn", href: "/components/blur-in", category: "Animation" },
];

export function SearchModal({ open, onClose }: SearchModalProps) {
  const [query, setQuery] = useState("");
  const [activeIndex, setActiveIndex] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);
  const listRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  const filtered = query.trim()
    ? searchItems.filter(
        (item) =>
          item.label.toLowerCase().includes(query.toLowerCase()) ||
          item.category.toLowerCase().includes(query.toLowerCase())
      )
    : searchItems;

  // Group filtered items by category
  const grouped: Record<string, SearchItem[]> = {};
  for (const item of filtered) {
    const existing = grouped[item.category];
    if (existing) {
      existing.push(item);
    } else {
      grouped[item.category] = [item];
    }
  }

  // Flat list for keyboard navigation
  const flatItems = filtered;

  const navigate = useCallback(
    (item: SearchItem) => {
      router.push(item.href);
      onClose();
      setQuery("");
      setActiveIndex(0);
    },
    [router, onClose]
  );

  // Auto-focus input when opened
  useEffect(() => {
    if (open) {
      setQuery("");
      setActiveIndex(0);
      // Small delay to ensure the modal is rendered
      const timer = setTimeout(() => {
        inputRef.current?.focus();
      }, 10);
      return () => clearTimeout(timer);
    }
  }, [open]);

  // Reset active index when query changes
  useEffect(() => {
    setActiveIndex(0);
  }, [query]);

  // Scroll active item into view
  useEffect(() => {
    if (!listRef.current) return;
    const activeEl = listRef.current.querySelector("[data-active='true']");
    if (activeEl) {
      activeEl.scrollIntoView({ block: "nearest" });
    }
  }, [activeIndex]);

  // Keyboard navigation
  useEffect(() => {
    if (!open) return;

    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") {
        e.preventDefault();
        onClose();
        return;
      }
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActiveIndex((prev) => (prev + 1) % flatItems.length);
        return;
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActiveIndex((prev) => (prev - 1 + flatItems.length) % flatItems.length);
        return;
      }
      if (e.key === "Enter") {
        e.preventDefault();
        if (flatItems[activeIndex]) {
          navigate(flatItems[activeIndex]);
        }
        return;
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [open, onClose, flatItems, activeIndex, navigate]);

  if (!open) return null;

  let flatIndex = 0;

  return (
    <div
      className="fixed inset-0 z-50 flex items-start justify-center pt-[15vh]"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-[rgb(0_0_0/0.6)] backdrop-blur-sm" />

      {/* Modal */}
      <div
        className={cn(
          "relative z-10 w-full max-w-lg mx-4",
          "overflow-hidden rounded-xl",
          "border border-[rgb(var(--trinkui-border)/0.6)]",
          "bg-[rgb(var(--trinkui-surface))]",
          "shadow-2xl shadow-[rgb(0_0_0/0.4)]"
        )}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search input */}
        <div className="flex items-center gap-3 border-b border-[rgb(var(--trinkui-border)/0.5)] px-4 py-3">
          {/* Magnifier icon */}
          <svg
            className="h-4 w-4 shrink-0 text-[rgb(var(--trinkui-muted))]"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <circle cx="11" cy="11" r="8" />
            <line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            type="text"
            placeholder="Search components, docs, templates..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className={cn(
              "flex-1 bg-transparent text-sm",
              "text-[rgb(var(--trinkui-fg))]",
              "placeholder:text-[rgb(var(--trinkui-muted)/0.6)]",
              "outline-none"
            )}
          />
          <kbd
            className={cn(
              "hidden sm:inline-flex items-center rounded-md px-1.5 py-0.5 text-[11px] font-medium",
              "border border-[rgb(var(--trinkui-border)/0.5)]",
              "bg-[rgb(var(--trinkui-bg)/0.5)]",
              "text-[rgb(var(--trinkui-muted)/0.7)]"
            )}
          >
            Esc
          </kbd>
        </div>

        {/* Results */}
        <div ref={listRef} className="max-h-[50vh] overflow-y-auto py-2">
          {flatItems.length === 0 ? (
            <div className="px-4 py-8 text-center text-sm text-[rgb(var(--trinkui-muted))]">
              No results found for &ldquo;{query}&rdquo;
            </div>
          ) : (
            Object.entries(grouped).map(([category, items]) => (
              <div key={category}>
                <div className="px-4 pt-2 pb-1">
                  <span className="text-[11px] font-semibold uppercase tracking-widest text-[rgb(var(--trinkui-muted)/0.6)]">
                    {category}
                  </span>
                </div>
                {items.map((item) => {
                  const currentIndex = flatIndex;
                  const isActive = currentIndex === activeIndex;
                  flatIndex++;

                  return (
                    <button
                      key={item.href}
                      data-active={isActive}
                      onClick={() => navigate(item)}
                      onMouseEnter={() => setActiveIndex(currentIndex)}
                      className={cn(
                        "flex w-full items-center gap-3 px-4 py-2 text-left text-sm transition-colors duration-100",
                        isActive
                          ? "bg-[rgb(var(--trinkui-primary)/0.12)] text-[rgb(var(--trinkui-primary))]"
                          : "text-[rgb(var(--trinkui-secondary-fg)/0.8)] hover:bg-[rgb(var(--trinkui-border)/0.2)]"
                      )}
                    >
                      {/* Page icon */}
                      <svg
                        className="h-4 w-4 shrink-0 opacity-50"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        aria-hidden="true"
                      >
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z" />
                        <polyline points="14 2 14 8 20 8" />
                      </svg>
                      <span>{item.label}</span>
                      {isActive && (
                        <svg
                          className="ml-auto h-3 w-3 opacity-50"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          aria-hidden="true"
                        >
                          <polyline points="9 18 15 12 9 6" />
                        </svg>
                      )}
                    </button>
                  );
                })}
              </div>
            ))
          )}
        </div>

        {/* Footer hint */}
        <div
          className={cn(
            "flex items-center gap-4 border-t border-[rgb(var(--trinkui-border)/0.5)] px-4 py-2",
            "text-[11px] text-[rgb(var(--trinkui-muted)/0.6)]"
          )}
        >
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-[10px]">&uarr;</kbd>
            <kbd className="rounded border border-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-[10px]">&darr;</kbd>
            <span className="ml-0.5">Navigate</span>
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-[10px]">&crarr;</kbd>
            <span className="ml-0.5">Open</span>
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-[10px]">Esc</kbd>
            <span className="ml-0.5">Close</span>
          </span>
        </div>
      </div>
    </div>
  );
}
