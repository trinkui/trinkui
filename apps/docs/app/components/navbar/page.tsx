"use client";

import { useState } from "react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Inline Navbar demo (pure JSX + Tailwind, no @trinkui/react)        */
/* ------------------------------------------------------------------ */

interface NavLink {
  label: string;
  href: string;
  active?: boolean;
}

function DemoNavbar({
  logo,
  brandName = "TrinkUI",
  links = [],
  primaryAction,
  secondaryAction,
  bordered = true,
  blur = false,
  sticky = false,
}: {
  logo?: React.ReactNode;
  brandName?: string;
  links?: NavLink[];
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
  bordered?: boolean;
  blur?: boolean;
  sticky?: boolean;
}) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <nav
      aria-label="Main navigation"
      className={`w-full px-6 py-3 ${bordered ? "border-b border-[rgb(var(--trinkui-border))]" : ""} ${blur ? "bg-[rgb(var(--trinkui-bg)/0.8)] backdrop-blur-md" : "bg-[rgb(var(--trinkui-bg))]"} ${sticky ? "sticky top-0 z-50" : "relative"}`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        {/* Brand */}
        <div className="flex items-center gap-2">
          {logo ?? (
            <span className="text-lg font-bold text-[rgb(var(--trinkui-fg))]">{brandName}</span>
          )}
        </div>

        {/* Desktop links */}
        <div className="hidden items-center gap-6 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors ${
                link.active
                  ? "text-[rgb(var(--trinkui-primary))]"
                  : "text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))]"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop actions */}
        <div className="hidden items-center gap-3 md:flex">
          {secondaryAction && (
            <a
              href={secondaryAction.href}
              className="rounded-[var(--trinkui-radius-md)] px-4 py-2 text-sm font-medium text-[rgb(var(--trinkui-fg))] transition-colors hover:bg-[rgb(var(--trinkui-border)/0.3)]"
            >
              {secondaryAction.label}
            </a>
          )}
          {primaryAction && (
            <a
              href={primaryAction.href}
              className="rounded-[var(--trinkui-radius-md)] bg-[rgb(var(--trinkui-primary))] px-4 py-2 text-sm font-medium text-[rgb(var(--trinkui-primary-fg))] transition-colors hover:opacity-90"
            >
              {primaryAction.label}
            </a>
          )}
        </div>

        {/* Mobile hamburger */}
        <button
          className="flex items-center justify-center rounded-[var(--trinkui-radius-md)] p-2 text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-border)/0.3)] md:hidden focus-visible:ring-2 focus-visible:ring-[rgb(var(--trinkui-primary))] focus-visible:outline-none"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-expanded={mobileOpen}
          aria-label="Toggle navigation menu"
        >
          {mobileOpen ? (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="mt-3 flex flex-col gap-2 border-t border-[rgb(var(--trinkui-border)/0.4)] pt-3 md:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className={`rounded-[var(--trinkui-radius-md)] px-3 py-2 text-sm font-medium transition-colors ${
                link.active
                  ? "bg-[rgb(var(--trinkui-primary)/0.1)] text-[rgb(var(--trinkui-primary))]"
                  : "text-[rgb(var(--trinkui-muted))] hover:bg-[rgb(var(--trinkui-border)/0.3)] hover:text-[rgb(var(--trinkui-fg))]"
              }`}
            >
              {link.label}
            </a>
          ))}
          {secondaryAction && (
            <a
              href={secondaryAction.href}
              className="rounded-[var(--trinkui-radius-md)] px-3 py-2 text-sm font-medium text-[rgb(var(--trinkui-fg))] transition-colors hover:bg-[rgb(var(--trinkui-border)/0.3)]"
            >
              {secondaryAction.label}
            </a>
          )}
          {primaryAction && (
            <a
              href={primaryAction.href}
              className="rounded-[var(--trinkui-radius-md)] bg-[rgb(var(--trinkui-primary))] px-3 py-2 text-center text-sm font-medium text-[rgb(var(--trinkui-primary-fg))] transition-colors hover:opacity-90"
            >
              {primaryAction.label}
            </a>
          )}
        </div>
      )}
    </nav>
  );
}

/* ------------------------------------------------------------------ */
/*  Code strings                                                       */
/* ------------------------------------------------------------------ */

const usageCode = `import { Navbar } from "@trinkui/react";

export default function Example() {
  return (
    <Navbar
      brandName="TrinkUI"
      links={[
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing", active: true },
        { label: "Docs", href: "/docs" },
      ]}
      primaryAction={{ label: "Get Started", href: "#" }}
      secondaryAction={{ label: "Sign In", href: "#" }}
    />
  );
}`;

const stickyBlurCode = `import { Navbar } from "@trinkui/react";

export default function Example() {
  return (
    <Navbar
      brandName="TrinkUI"
      links={[
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
      ]}
      primaryAction={{ label: "Get Started", href: "#" }}
      sticky
      blur
    />
  );
}`;

const noBorderCode = `import { Navbar } from "@trinkui/react";

export default function Example() {
  return (
    <Navbar
      brandName="TrinkUI"
      links={[
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
      ]}
      bordered={false}
    />
  );
}`;

const demoLinks: NavLink[] = [
  { label: "Features", href: "#features" },
  { label: "Pricing", href: "#pricing", active: true },
  { label: "Docs", href: "#" },
];

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

const navbarProps = [
  { name: "logo", type: "ReactNode", description: "Custom logo element; overrides brandName" },
  { name: "brandName", type: "string", description: "Brand text when no logo is provided" },
  { name: "links", type: "NavLink[]", default: "[]", description: "Navigation links { label, href, active? }" },
  { name: "primaryAction", type: "{ label: string; href: string }", description: "Primary CTA button" },
  { name: "secondaryAction", type: "{ label: string; href: string }", description: "Secondary CTA button" },
  { name: "bordered", type: "boolean", default: "true", description: "Show a bottom border" },
  { name: "blur", type: "boolean", default: "false", description: "Apply backdrop-blur effect (pairs well with sticky)" },
  { name: "sticky", type: "boolean", default: "false", description: "Stick to the top of the viewport on scroll" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const navLinkProps = [
  { name: "label", type: "string", required: true, description: "Link text" },
  { name: "href", type: "string", required: true, description: "Link URL" },
  { name: "active", type: "boolean", default: "false", description: "Highlight as the current page" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function NavbarPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Navbar</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Responsive navigation bar with brand, nav links, and CTA buttons. Collapses to a hamburger menu on mobile.
        </p>
      </div>

      {/* Installation */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Installation</h2>
        <pre className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[#0d1117] px-4 py-3 text-sm text-slate-200">
          <code>npm install @trinkui/react</code>
        </pre>
      </div>

      {/* Import */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Import</h2>
        <pre className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[#0d1117] px-4 py-3 text-sm text-slate-200">
          <code>{`import { Navbar } from "@trinkui/react";`}</code>
        </pre>
      </div>

      {/* Usage */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <ComponentPreview code={usageCode}>
          <DemoNavbar
            brandName="TrinkUI"
            links={demoLinks}
            primaryAction={{ label: "Get Started", href: "#" }}
            secondaryAction={{ label: "Sign In", href: "#" }}
          />
        </ComponentPreview>
      </div>

      {/* Sticky + Blur */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sticky with Blur</h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Combine <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">sticky</code> and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">blur</code> for a frosted-glass navbar that stays at the top of the viewport.
        </p>
        <ComponentPreview code={stickyBlurCode}>
          <DemoNavbar
            brandName="TrinkUI"
            links={[
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" },
            ]}
            primaryAction={{ label: "Get Started", href: "#" }}
            blur
          />
        </ComponentPreview>
      </div>

      {/* Without border */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Without Border</h2>
        <ComponentPreview code={noBorderCode}>
          <DemoNavbar
            brandName="TrinkUI"
            links={[
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" },
            ]}
            bordered={false}
          />
        </ComponentPreview>
      </div>

      {/* Navbar Props */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Navbar Props</h2>
        <PropsTable props={navbarProps} />
      </div>

      {/* NavLink Props */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">NavLink Props</h2>
        <PropsTable props={navLinkProps} />
      </div>

      {/* Accessibility */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[rgb(var(--trinkui-muted))]">
          <li>Uses a <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">&lt;nav&gt;</code> element with <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-label=&quot;Main navigation&quot;</code>.</li>
          <li>The mobile hamburger button has <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-expanded</code> to communicate open/closed state.</li>
          <li>The hamburger button includes <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-label=&quot;Toggle navigation menu&quot;</code>.</li>
          <li>All interactive elements have visible <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">focus-visible</code> styles.</li>
        </ul>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between border-t border-[rgb(var(--trinkui-border)/0.4)] pt-6">
        <Link
          href="/components/modal"
          className="text-sm font-medium text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-primary))]"
        >
          &larr; Modal
        </Link>
        <Link
          href="/components/pagination"
          className="text-sm font-medium text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-primary))]"
        >
          Pagination &rarr;
        </Link>
      </div>
    </div>
  );
}
