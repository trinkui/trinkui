"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { cn } from "@/lib/cn";

interface NavItem {
  label: string;
  href: string;
}

interface NavSection {
  title: string;
  items: NavItem[];
  defaultOpen?: boolean;
}

const gettingStarted: NavSection = {
  title: "Getting Started",
  defaultOpen: true,
  items: [
    { label: "Introduction", href: "/docs" },
    { label: "Installation", href: "/docs/installation" },
    { label: "Theming", href: "/docs/theming" },
  ],
};

const customization: NavSection = {
  title: "Customization",
  defaultOpen: false,
  items: [
    { label: "Theme", href: "/docs/customization/theme" },
    { label: "Layout", href: "/docs/customization/layout" },
    { label: "Colors", href: "/docs/customization/colors" },
    { label: "Create Theme", href: "/docs/customization/create-theme" },
    { label: "Dark Mode", href: "/docs/customization/dark-mode" },
    { label: "Override Styles", href: "/docs/customization/override-styles" },
    { label: "Custom Variants", href: "/docs/customization/custom-variants" },
  ],
};

const templates: NavSection = {
  title: "Templates",
  defaultOpen: false,
  items: [
    { label: "SaaS", href: "/templates/saas" },
    { label: "Agency", href: "/templates/agency" },
    { label: "Product Launch", href: "/templates/product-launch" },
    { label: "AI / ML Product", href: "/templates/ai" },
    { label: "Mobile App", href: "/templates/mobile-app" },
    { label: "Startup", href: "/templates/startup" },
    { label: "Portfolio", href: "/templates/portfolio" },
    { label: "Event", href: "/templates/event" },
  ],
};

const guides: NavSection = {
  title: "Guides",
  defaultOpen: false,
  items: [
    { label: "Next.js Setup", href: "/docs/guides/nextjs-setup" },
    { label: "Vite Setup", href: "/docs/guides/vite-setup" },
    { label: "Remix Setup", href: "/docs/guides/remix-setup" },
    { label: "Build a Landing Page", href: "/docs/guides/landing-page" },
    { label: "Dark Mode", href: "/docs/guides/dark-mode" },
    { label: "Forms & Validation", href: "/docs/guides/forms" },
    { label: "Animations", href: "/docs/guides/animations" },
    { label: "Responsive Design", href: "/docs/guides/responsive" },
    { label: "SEO Best Practices", href: "/docs/guides/seo" },
    { label: "Deployment", href: "/docs/guides/deployment" },
  ],
};

const components: NavSection = {
  title: "Components",
  defaultOpen: true,
  items: [
    { label: "Accordion", href: "/components/accordion" },
    { label: "Alert", href: "/components/alert" },
    { label: "Autocomplete", href: "/components/autocomplete" },
    { label: "Avatar", href: "/components/avatar" },
    { label: "Badge", href: "/components/badge" },
    { label: "Breadcrumbs", href: "/components/breadcrumbs" },
    { label: "Button", href: "/components/button" },
    { label: "Calendar", href: "/components/calendar" },
    { label: "Card", href: "/components/card" },
    { label: "Checkbox", href: "/components/checkbox" },
    { label: "Chip", href: "/components/chip" },
    { label: "Code", href: "/components/code" },
    { label: "Divider", href: "/components/divider" },
    { label: "Drawer", href: "/components/drawer" },
    { label: "Dropdown", href: "/components/dropdown" },
    { label: "Image", href: "/components/image" },
    { label: "Input", href: "/components/input" },
    { label: "Kbd", href: "/components/kbd" },
    { label: "Link", href: "/components/link" },
    { label: "Listbox", href: "/components/listbox" },
    { label: "Modal", href: "/components/modal" },
    { label: "Navbar", href: "/components/navbar" },
    { label: "Pagination", href: "/components/pagination" },
    { label: "Popover", href: "/components/popover" },
    { label: "Progress", href: "/components/progress" },
    { label: "Radio Group", href: "/components/radio-group" },
    { label: "Select", href: "/components/select" },
    { label: "Skeleton", href: "/components/skeleton" },
    { label: "Slider", href: "/components/slider" },
    { label: "Snippet", href: "/components/snippet" },
    { label: "Spacer", href: "/components/spacer" },
    { label: "Spinner", href: "/components/spinner" },
    { label: "Switch", href: "/components/switch" },
    { label: "Table", href: "/components/table" },
    { label: "Tabs", href: "/components/tabs" },
    { label: "Textarea", href: "/components/textarea" },
    { label: "Toast", href: "/components/toast" },
    { label: "Tooltip", href: "/components/tooltip" },
    { label: "User", href: "/components/user" },
  ],
};

const allSections = [gettingStarted, customization, templates, components, guides];

interface SidebarProps {
  onSearchClick?: () => void;
}

export function Sidebar({ onSearchClick }: SidebarProps) {
  const pathname = usePathname();

  // Auto-open section if current page is in it
  const getInitialState = (): Record<string, boolean> => {
    const state: Record<string, boolean> = {};
    for (const section of allSections) {
      const hasActivePage = section.items.some((item) => pathname === item.href);
      state[section.title] = hasActivePage || (section.defaultOpen ?? false);
    }
    return state;
  };

  const [openSections, setOpenSections] = useState<Record<string, boolean>>(getInitialState);

  // Update open state when route changes
  useEffect(() => {
    setOpenSections((prev) => {
      const next = { ...prev };
      for (const section of allSections) {
        if (section.items.some((item) => pathname === item.href)) {
          next[section.title] = true;
        }
      }
      return next;
    });
  }, [pathname]);

  const toggleSection = (title: string) => {
    setOpenSections((prev) => ({ ...prev, [title]: !prev[title] }));
  };

  function renderSection(section: NavSection, isFirst?: boolean) {
    const isOpen = openSections[section.title] ?? false;
    const hasActivePage = section.items.some((item) => pathname === item.href);

    return (
      <div key={section.title} className={isFirst ? "" : "mt-4"}>
        <button
          onClick={() => toggleSection(section.title)}
          className={cn(
            "flex w-full items-center justify-between py-1.5 text-left",
            "text-[11px] font-semibold uppercase tracking-wider",
            "transition-colors duration-150",
            hasActivePage
              ? "text-[rgb(var(--trinkui-fg)/0.8)]"
              : "text-[rgb(var(--trinkui-muted)/0.6)] hover:text-[rgb(var(--trinkui-muted))]"
          )}
        >
          <span>{section.title}</span>
          <svg
            className={cn(
              "h-3.5 w-3.5 shrink-0 transition-transform duration-200",
              isOpen ? "rotate-0" : "-rotate-90"
            )}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </button>

        <div
          className={cn(
            "overflow-hidden transition-all duration-200 ease-in-out",
            isOpen ? "max-h-[2000px] opacity-100" : "max-h-0 opacity-0"
          )}
        >
          <ul className="mt-1 space-y-0">
            {section.items.map((item) => {
              const isActive = pathname === item.href;
              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className={cn(
                      "block py-1 px-3 text-[13px] transition-colors duration-150",
                      isActive
                        ? "text-[rgb(var(--trinkui-primary))] font-medium"
                        : "text-[rgb(var(--trinkui-muted)/0.8)] hover:text-[rgb(var(--trinkui-fg))]"
                    )}
                  >
                    {item.label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    );
  }

  return (
    <aside
      className={cn(
        "sticky top-14 h-[calc(100vh-3.5rem)] w-[220px] shrink-0 overflow-y-auto",
        "border-r border-[rgb(var(--trinkui-border)/0.3)]"
      )}
    >
      <nav className="px-4 pt-6 pb-8">
        {renderSection(gettingStarted, true)}
        {renderSection(customization)}
        {renderSection(templates)}

        {onSearchClick && (
          <div className="mt-4">
            <button
              onClick={onSearchClick}
              className={cn(
                "flex w-full items-center gap-2.5 rounded-lg px-3 py-2 text-[13px]",
                "border border-[rgb(var(--trinkui-border)/0.5)]",
                "text-[rgb(var(--trinkui-muted))]",
                "hover:border-[rgb(var(--trinkui-border))] hover:bg-[rgb(var(--trinkui-surface))]",
                "transition-all duration-150"
              )}
            >
              <svg
                className="h-4 w-4 shrink-0"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="11" cy="11" r="8" />
                <path d="m21 21-4.35-4.35" />
              </svg>
              <span className="flex-1 text-left">Search...</span>
              <kbd
                className={cn(
                  "hidden sm:inline-flex items-center gap-0.5 rounded px-1.5 py-0.5",
                  "border border-[rgb(var(--trinkui-border)/0.5)]",
                  "bg-[rgb(var(--trinkui-surface))]",
                  "text-[10px] font-medium text-[rgb(var(--trinkui-muted))]"
                )}
              >
                Ctrl K
              </kbd>
            </button>
          </div>
        )}

        {renderSection(components)}
        {renderSection(guides)}
      </nav>
    </aside>
  );
}
