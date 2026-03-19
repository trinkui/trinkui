"use client";

import Link from "next/link";
import { TrinkLogo } from "@/components/TrinkLogo";
import { useEffect, useState, useRef } from "react";

/* ─────────────────────────────────────────────────────────────────────────────
   Reveal — fade + slide-up on scroll via IntersectionObserver
   ───────────────────────────────────────────────────────────────────────────── */
function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        if (entries[0]?.isIntersecting) {
          setTimeout(() => setVisible(true), delay);
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [delay]);

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? "translateY(0)" : "translateY(24px)",
        transition:
          "opacity 0.7s cubic-bezier(0.16,1,0.3,1), transform 0.7s cubic-bezier(0.16,1,0.3,1)",
      }}
    >
      {children}
    </div>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   SVG Icon Components
   ───────────────────────────────────────────────────────────────────────────── */
const icons = {
  search: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="11" cy="11" r="8" />
      <path d="M21 21l-4.35-4.35" />
    </svg>
  ),
  github: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
    </svg>
  ),
  sun: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  ),
  arrowRight: (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  chevronRight: (
    <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
      <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  ),
  lightning: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  shield: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
  ),
  feather: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M20.24 12.24a6 6 0 00-8.49-8.49L5 10.5V19h8.5z" />
      <line x1="16" y1="8" x2="2" y2="22" />
      <line x1="17.5" y1="15" x2="9" y2="15" />
    </svg>
  ),
  accessibility: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="4" r="1.5" />
      <path d="M7 8h10" />
      <path d="M12 8v4" />
      <path d="M9 20l3-8 3 8" />
      <path d="M8 16h8" />
    </svg>
  ),
  moon: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  ),
  palette: (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="13.5" cy="6.5" r="0.5" fill="currentColor" />
      <circle cx="17.5" cy="10.5" r="0.5" fill="currentColor" />
      <circle cx="8.5" cy="7.5" r="0.5" fill="currentColor" />
      <circle cx="6.5" cy="12.5" r="0.5" fill="currentColor" />
      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 011.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z" />
    </svg>
  ),
  // Feature grid icons
  server: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="8" rx="2" ry="2" /><rect x="2" y="14" width="20" height="8" rx="2" ry="2" />
      <line x1="6" y1="6" x2="6.01" y2="6" /><line x1="6" y1="18" x2="6.01" y2="18" />
    </svg>
  ),
  a11y: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" /><path d="M12 8v4l2 2" />
    </svg>
  ),
  treeShake: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z" /><path d="M2 17l10 5 10-5" /><path d="M2 12l10 5 10-5" />
    </svg>
  ),
  typescript: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6" /><polyline points="8 6 2 12 8 18" />
    </svg>
  ),
  polymorphic: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M7 7h10v10" /><path d="M7 17L17 7" />
    </svg>
  ),
  zeroRuntime: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  ),
  darkMode: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z" />
    </svg>
  ),
  variants: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="3" y="3" width="7" height="7" /><rect x="14" y="3" width="7" height="7" />
      <rect x="3" y="14" width="7" height="7" /><rect x="14" y="14" width="7" height="7" />
    </svg>
  ),
  focusRing: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="3" /><circle cx="12" cy="12" r="8" />
    </svg>
  ),
  modular: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
    </svg>
  ),
  responsive: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="5" y="2" width="14" height="20" rx="2" ry="2" /><line x1="12" y1="18" x2="12.01" y2="18" />
    </svg>
  ),
  figma: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M5 5.5A3.5 3.5 0 018.5 2H12v7H8.5A3.5 3.5 0 015 5.5z" />
      <path d="M12 2h3.5a3.5 3.5 0 010 7H12V2z" />
      <path d="M12 12.5a3.5 3.5 0 117 0 3.5 3.5 0 01-7 0z" />
      <path d="M5 19.5A3.5 3.5 0 018.5 16H12v3.5a3.5 3.5 0 01-7 0z" />
      <path d="M5 12.5A3.5 3.5 0 018.5 9H12v7H8.5A3.5 3.5 0 015 12.5z" />
    </svg>
  ),
  // Community icons
  discord: (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
      <path d="M20.317 4.37a19.791 19.791 0 00-4.885-1.515.074.074 0 00-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 00-5.487 0 12.64 12.64 0 00-.617-1.25.077.077 0 00-.079-.037A19.736 19.736 0 003.677 4.37a.07.07 0 00-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 00.031.057 19.9 19.9 0 005.993 3.03.078.078 0 00.084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 00-.041-.106 13.107 13.107 0 01-1.872-.892.077.077 0 01-.008-.128 10.2 10.2 0 00.372-.292.074.074 0 01.077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 01.078.01c.12.098.246.198.373.292a.077.077 0 01-.006.127 12.299 12.299 0 01-1.873.892.077.077 0 00-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 00.084.028 19.839 19.839 0 006.002-3.03.077.077 0 00.032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 00-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.095 2.157 2.42 0 1.333-.946 2.418-2.157 2.418z" />
    </svg>
  ),
  twitter: (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
    </svg>
  ),
  copy: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2" /><path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
    </svg>
  ),
  check: (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  ),
  terminal: (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="4 17 10 11 4 5" /><line x1="12" y1="19" x2="20" y2="19" />
    </svg>
  ),
};

/* ─────────────────────────────────────────────────────────────────────────────
   CopyButton — small clipboard button for install commands
   ───────────────────────────────────────────────────────────────────────────── */
function CopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <button
      onClick={handleCopy}
      className="text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors"
      aria-label="Copy to clipboard"
    >
      {copied ? icons.check : icons.copy}
    </button>
  );
}

/* ─────────────────────────────────────────────────────────────────────────────
   CodeWindow — reusable code block with window chrome
   ───────────────────────────────────────────────────────────────────────────── */
function CodeWindow({
  filename,
  children,
  className = "",
}: {
  filename: string;
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div className={`relative rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 border-b border-[rgb(var(--trinkui-border))] px-4 py-3">
        <div className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <div className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <div className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-2 text-xs text-[rgb(var(--trinkui-muted))]">{filename}</span>
      </div>
      <div className="p-5 overflow-x-auto">
        <pre className="text-[13px] leading-relaxed">
          <code>{children}</code>
        </pre>
      </div>
    </div>
  );
}

/* ═══════════════════════════════════════════════════════════════════════════════
   DATA
   ═══════════════════════════════════════════════════════════════════════════════ */

const COMPONENT_CATEGORIES = [
  {
    name: "Form & Input",
    description: "Collecting user data has never looked this good. Validation, error messages, and accessibility come built-in.",
    components: ["Input", "Select", "Checkbox", "Radio", "DatePicker", "Switch", "Textarea"],
  },
  {
    name: "Data Display",
    description: "Present your data with elegance. Sorting, filtering, and pagination ready out of the box.",
    components: ["Table", "Card", "Avatar", "Badge", "Chip", "Skeleton", "Accordion"],
  },
  {
    name: "Navigation",
    description: "Your users will never get lost. Responsive and keyboard-friendly navigation components.",
    components: ["Navbar", "Breadcrumbs", "Tabs", "Pagination", "Link", "Kbd"],
  },
  {
    name: "Feedback & Overlay",
    description: "Deliver the right message at the right time. Notifications, confirmations, and loading states managed from one place.",
    components: ["Modal", "Drawer", "Tooltip", "Toast", "Alert", "Spinner", "Progress"],
  },
  {
    name: "Layout & Visual",
    description: "Pixel-precise layout tools. Every detail under your control.",
    components: ["Button", "Divider", "Spacer", "Image", "Calendar", "Snippet"],
  },
];

const VALUE_PROPS = [
  {
    icon: icons.lightning,
    title: "Zero Configuration",
    before: "Tailwind setup, theme config, color tokens... hours of boilerplate.",
    after: "One command. Everything is ready.",
  },
  {
    icon: icons.shield,
    title: "Type Safety",
    before: "Constantly opening docs just to remember a prop name.",
    after: "Every prop is fully typed. Your IDE is your documentation.",
  },
  {
    icon: icons.feather,
    title: "Featherweight",
    before: "200 unused components sitting in your bundle.",
    after: "Tree-shakeable. Average component size <4KB gzip.",
  },
  {
    icon: icons.accessibility,
    title: "Accessibility by Default",
    before: "Manually adding ARIA labels, testing keyboard navigation...",
    after: "WAI-ARIA, keyboard support, and screen reader compatibility out of the box.",
  },
  {
    icon: icons.moon,
    title: "Day and Night, Effortlessly",
    before: "Writing separate classNames for dark mode in every component.",
    after: "Add 'dark' to your HTML. That's it.",
  },
  {
    icon: icons.palette,
    title: "Instant Theming",
    before: "Changing your brand color = find-and-replace across 47 files.",
    after: "One config file. All components adapt instantly.",
  },
];

const FEATURES = [
  { icon: icons.server, title: "React Server Components", desc: "Includes the \"use client\" directive. Works seamlessly in RSC projects." },
  { icon: icons.a11y, title: "WAI-ARIA Compliant", desc: "Keyboard, focus, and screen reader support included." },
  { icon: icons.treeShake, title: "Tree-Shakeable", desc: "Only the components you use end up in your bundle." },
  { icon: icons.typescript, title: "TypeScript Native", desc: "Fully typed API. Autocomplete and compile-time error catching." },
  { icon: icons.polymorphic, title: "Polymorphic \"as\" Prop", desc: "Change the HTML tag of any component." },
  { icon: icons.zeroRuntime, title: "Zero Runtime Styles", desc: "Built on Tailwind CSS. No runtime performance overhead." },
  { icon: icons.darkMode, title: "Automatic Dark Mode", desc: "Add \"dark\" to your HTML and all components adapt automatically." },
  { icon: icons.variants, title: "Tailwind Variants", desc: "Slot-based customization. No class conflicts." },
  { icon: icons.focusRing, title: "Smart Focus Ring", desc: "Focus ring only appears during keyboard navigation." },
  { icon: icons.modular, title: "Modular Packages", desc: "Each component can be imported separately. Take only what you need." },
  { icon: icons.responsive, title: "Fully Responsive", desc: "All components adapt to mobile, tablet, and desktop." },
  { icon: icons.figma, title: "Figma Kit", desc: "Seamless design-to-code handoff.", comingSoon: true },
];

const TESTIMONIALS = [
  {
    quote: "We shipped our new product's frontend in 4 days instead of 3 weeks thanks to trink-ui.",
    name: "Ahmet Y.",
    role: "Senior Frontend Developer",
  },
  {
    quote: "I've never seen another library that thinks this deeply about accessibility.",
    name: "Elena K.",
    role: "UX Engineer",
  },
  {
    quote: "The TypeScript support is outstanding. You can do everything without leaving your IDE.",
    name: "Marcus L.",
    role: "Full Stack Developer",
  },
];

const FRAMEWORKS = ["Next.js", "Vite", "Remix", "Astro", "Laravel"];

/* ═══════════════════════════════════════════════════════════════════════════════
   HOMEPAGE
   ═══════════════════════════════════════════════════════════════════════════════ */

export default function HomePage() {
  const [activeCategory, setActiveCategory] = useState(0);
  const [copied, setCopied] = useState(false);
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    // Check localStorage on mount
    const stored = localStorage.getItem("trinkui-theme");
    if (stored === "light") {
      setIsDark(false);
      document.documentElement.classList.remove("dark");
    } else {
      setIsDark(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const next = !isDark;
    setIsDark(next);
    if (next) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("trinkui-theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("trinkui-theme", "light");
    }
  };

  const handleCopyInstall = () => {
    navigator.clipboard.writeText("npm install @trinkui/react").then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <main className="min-h-screen bg-[rgb(var(--trinkui-bg))] overflow-x-hidden">

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 2 — NAVBAR
          ══════════════════════════════════════════════════════════════════════ */}
      <header className="fixed top-0 z-50 w-full border-b border-[rgb(var(--trinkui-border)/0.5)] bg-[rgb(var(--trinkui-bg)/0.8)] backdrop-blur-xl">
        <div className="mx-auto flex max-w-screen-xl items-center justify-between px-6 py-3">
          {/* Left — Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <TrinkLogo variant="icon" height={22} />
            <span className="text-sm font-semibold">
              <span className="text-[rgb(var(--trinkui-fg))]">trink</span>
              <span className="text-[#338EF7]">-ui</span>
            </span>
          </Link>

          {/* Center-right — Nav links */}
          <nav className="hidden items-center gap-1 md:flex">
            <Link
              href="/docs/installation"
              className="rounded-lg px-3 py-2 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))] hover:bg-[rgb(var(--trinkui-surface))]"
            >
              Docs
            </Link>
            <Link
              href="/components"
              className="rounded-lg px-3 py-2 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))] hover:bg-[rgb(var(--trinkui-surface))]"
            >
              Components
            </Link>
            <Link
              href="/templates/saas"
              className="rounded-lg px-3 py-2 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))] hover:bg-[rgb(var(--trinkui-surface))]"
            >
              Templates
            </Link>
          </nav>

          {/* Far right — Search, GitHub, Theme */}
          <div className="flex items-center gap-2">
            {/* GitHub */}
            <a
              href="https://github.com/trinkui/trinkui"
              target="_blank"
              rel="noopener noreferrer"
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))] hover:bg-[rgb(var(--trinkui-surface))]"
              aria-label="GitHub"
            >
              {icons.github}
            </a>

            {/* Theme toggle */}
            <button
              onClick={toggleTheme}
              className="flex h-9 w-9 items-center justify-center rounded-lg text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))] hover:bg-[rgb(var(--trinkui-surface))]"
              aria-label="Toggle theme"
            >
              {isDark ? icons.sun : icons.moon}
            </button>
          </div>
        </div>
      </header>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 3 — HERO
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="hero" className="relative overflow-hidden pt-32 pb-20 lg:pt-44 lg:pb-28">
        {/* Background: grid + radial glow */}
        <div className="bg-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,rgb(var(--trinkui-bg))_70%)]" />

        {/* Primary glow — top center */}
        <div className="pointer-events-none absolute top-0 left-1/2 h-[600px] w-[900px] -translate-x-1/2 -translate-y-1/3 rounded-full bg-[rgb(var(--trinkui-primary)/0.08)] blur-[100px]" />
        {/* Accent glow — offset right */}
        <div className="pointer-events-none absolute top-20 right-1/4 h-[400px] w-[400px] rounded-full bg-[rgb(var(--trinkui-accent)/0.05)] blur-[100px]" />

        <div className="relative mx-auto max-w-screen-xl px-6">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge */}
            <Reveal>
              <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-4 py-1.5 text-sm text-[rgb(var(--trinkui-muted))]">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[rgb(var(--trinkui-primary))] opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-[rgb(var(--trinkui-primary))]" />
                </span>
                Open Source &mdash; MIT License
              </div>
            </Reveal>

            {/* Headline */}
            <Reveal delay={100}>
              <h1 className="text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl" style={{ fontFamily: "var(--font-dynapuff), var(--font-inter), sans-serif" }}>
                <span className="text-gradient">Bridge the gap</span>
                <br />
                <span className="text-[rgb(var(--trinkui-fg))]">between design and development.</span>
              </h1>
            </Reveal>

            {/* Subtitle */}
            <Reveal delay={200}>
              <p className="mx-auto mt-6 max-w-2xl text-base leading-relaxed text-[rgb(var(--trinkui-muted))] sm:text-lg">
                TrinkUI delivers accessible, fast, and stunning components for your React projects.
                Built on Tailwind CSS, written in TypeScript, production-ready in minutes.
              </p>
            </Reveal>

            {/* CTAs */}
            <Reveal delay={300}>
              <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <Link
                  href="/docs/installation"
                  className="glow-primary inline-flex items-center gap-2 rounded-xl bg-[rgb(var(--trinkui-primary))] px-7 py-3.5 text-sm font-medium text-white transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
                >
                  Get Started &mdash; Free
                  {icons.arrowRight}
                </Link>
                <Link
                  href="/components"
                  className="inline-flex items-center gap-2 rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-7 py-3.5 text-sm font-medium text-[rgb(var(--trinkui-fg))] transition-all hover:border-[rgb(var(--trinkui-muted)/0.5)] hover:bg-[rgb(var(--trinkui-secondary))] hover:scale-[1.02] active:scale-[0.98]"
                >
                  Live Playground
                  {icons.arrowRight}
                </Link>
              </div>
            </Reveal>

            {/* Install command box */}
            <Reveal delay={400}>
              <div className="mx-auto mt-8 max-w-md">
                <div className="flex items-center justify-between gap-3 rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-5 py-3 font-mono text-sm">
                  <div className="flex items-center gap-3 text-[rgb(var(--trinkui-muted))]">
                    {icons.terminal}
                    <span>
                      <span className="text-[rgb(var(--trinkui-muted))]">$ </span>
                      <span className="text-[rgb(var(--trinkui-fg))]">npm install @trinkui/react</span>
                    </span>
                  </div>
                  <button
                    onClick={handleCopyInstall}
                    className="text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors shrink-0"
                    aria-label="Copy install command"
                  >
                    {copied ? icons.check : icons.copy}
                  </button>
                </div>
              </div>
            </Reveal>
          </div>

          {/* Floating code preview */}
          <Reveal delay={500}>
            <div className="relative mx-auto mt-16 max-w-2xl">
              <div className="absolute -inset-px rounded-xl bg-gradient-to-b from-[rgb(var(--trinkui-primary)/0.2)] to-transparent" />
              <CodeWindow filename="App.tsx" className="relative">
                <span className="text-[rgb(var(--trinkui-primary))]">import</span>{" "}
                <span className="text-[rgb(var(--trinkui-fg))]">{"{ HeroCentered, FeaturesGrid, PricingCards }"}</span>{" "}
                <span className="text-[rgb(var(--trinkui-primary))]">from</span>{" "}
                <span className="text-[rgb(var(--trinkui-accent))]">&quot;@trinkui/react&quot;</span>
                {"\n\n"}
                <span className="text-[rgb(var(--trinkui-primary))]">export default function</span>{" "}
                <span className="text-[rgb(var(--trinkui-fg))]">LandingPage</span>
                <span className="text-[rgb(var(--trinkui-muted))]">() {"{"}</span>
                {"\n  "}
                <span className="text-[rgb(var(--trinkui-primary))]">return</span>{" "}
                <span className="text-[rgb(var(--trinkui-muted))]">(</span>
                {"\n    "}
                <span className="text-[rgb(var(--trinkui-muted))]">{"<>"}</span>
                {"\n      "}
                <span className="text-[rgb(var(--trinkui-accent))]">{"<HeroCentered"}</span>{" "}
                <span className="text-[rgb(var(--trinkui-fg))]">title</span>
                <span className="text-[rgb(var(--trinkui-muted))]">=</span>
                <span className="text-[rgb(var(--trinkui-accent))]">&quot;Ship faster&quot;</span>{" "}
                <span className="text-[rgb(var(--trinkui-accent))]">{"/>"}</span>
                {"\n      "}
                <span className="text-[rgb(var(--trinkui-accent))]">{"<FeaturesGrid"}</span>{" "}
                <span className="text-[rgb(var(--trinkui-fg))]">features</span>
                <span className="text-[rgb(var(--trinkui-muted))]">=</span>
                <span className="text-[rgb(var(--trinkui-muted))]">{"{features}"}</span>{" "}
                <span className="text-[rgb(var(--trinkui-accent))]">{"/>"}</span>
                {"\n      "}
                <span className="text-[rgb(var(--trinkui-accent))]">{"<PricingCards"}</span>{" "}
                <span className="text-[rgb(var(--trinkui-fg))]">plans</span>
                <span className="text-[rgb(var(--trinkui-muted))]">=</span>
                <span className="text-[rgb(var(--trinkui-muted))]">{"{plans}"}</span>{" "}
                <span className="text-[rgb(var(--trinkui-accent))]">{"/>"}</span>
                {"\n    "}
                <span className="text-[rgb(var(--trinkui-muted))]">{"</>"}</span>
                {"\n  "}
                <span className="text-[rgb(var(--trinkui-muted))]">)</span>
                {"\n"}
                <span className="text-[rgb(var(--trinkui-muted))]">{"}"}</span>
              </CodeWindow>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 4 — SOCIAL PROOF / STATS BAR
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="stats" className="relative border-t border-b border-[rgb(var(--trinkui-border)/0.5)] py-12">
        <div className="mx-auto max-w-screen-xl px-6">
          <Reveal>
            <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
              {[
                { value: "2.4K+", label: "GitHub Stars" },
                { value: "50+", label: "Components" },
                { value: "98%", label: "A11y Score" },
                { value: "<4KB", label: "Avg. Gzipped" },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <div className="text-3xl font-bold text-gradient sm:text-4xl">{stat.value}</div>
                  <div className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">{stat.label}</div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 5 — COMPONENT SHOWCASE (Tabbed)
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="components" className="relative py-24 lg:py-32">
        <div className="mx-auto max-w-screen-xl px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[rgb(var(--trinkui-primary))]">
                Components
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                A component for every need.
              </h2>
              <p className="mt-4 text-[rgb(var(--trinkui-muted))] text-base sm:text-lg">
                From form elements to data tables, navigation to feedback widgets &mdash; it&apos;s all here.
              </p>
            </div>
          </Reveal>

          {/* Tabs */}
          <Reveal delay={150}>
            <div className="mt-12">
              {/* Tab buttons */}
              <div className="flex flex-wrap justify-center gap-2">
                {COMPONENT_CATEGORIES.map((cat, i) => (
                  <button
                    key={cat.name}
                    onClick={() => setActiveCategory(i)}
                    className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                      activeCategory === i
                        ? "bg-[rgb(var(--trinkui-primary))] text-white shadow-lg shadow-[rgb(var(--trinkui-primary)/0.2)]"
                        : "text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] hover:bg-[rgb(var(--trinkui-surface))]"
                    }`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>

              {/* Tab content */}
              <div className="mx-auto mt-8 max-w-2xl">
                {(() => {
                  const cat = COMPONENT_CATEGORIES[activeCategory];
                  if (!cat) return null;
                  return (
                    <div className="rounded-2xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.5)] p-8">
                      <h3 className="text-lg font-semibold text-[rgb(var(--trinkui-fg))]">
                        {cat.name}
                      </h3>
                      <p className="mt-2 text-sm text-[rgb(var(--trinkui-muted))]">
                        {cat.description}
                      </p>
                      <div className="mt-6 flex flex-wrap gap-2">
                        {cat.components.map((comp) => (
                          <span
                            key={comp}
                            className="inline-flex rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] px-3 py-1.5 text-xs font-medium text-[rgb(var(--trinkui-fg))] transition-colors hover:border-[rgb(var(--trinkui-primary)/0.4)] hover:text-[rgb(var(--trinkui-primary))]"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  );
                })()}
              </div>

              {/* Link */}
              <div className="mt-8 text-center">
                <Link
                  href="/components"
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
                >
                  Explore all components
                  {icons.chevronRight}
                </Link>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 6 — WHY TRINK-UI (Value Props)
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="why" className="relative border-t border-[rgb(var(--trinkui-border)/0.5)] py-24 lg:py-32">
        <div className="bg-dot-grid pointer-events-none absolute inset-0" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_50%,rgb(var(--trinkui-bg))_100%)]" />

        <div className="relative mx-auto max-w-screen-xl px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[rgb(var(--trinkui-primary))]">
                Why trink-ui?
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Redefine your development experience.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VALUE_PROPS.map((prop, i) => (
              <Reveal key={prop.title} delay={i * 80}>
                <div className="group relative h-full rounded-2xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.5)] p-7 transition-all duration-300 hover:border-[rgb(var(--trinkui-primary)/0.3)] hover:bg-[rgb(var(--trinkui-surface))]">
                  {/* Icon */}
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[rgb(var(--trinkui-primary)/0.1)] text-[rgb(var(--trinkui-primary))] transition-colors group-hover:bg-[rgb(var(--trinkui-primary)/0.15)]">
                    {prop.icon}
                  </div>
                  <h3 className="mb-4 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">
                    {prop.title}
                  </h3>
                  {/* Before */}
                  <div className="mb-3">
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-red-500/10 text-red-400">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M3 3l6 6M9 3l-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
                      </span>
                      <span className="text-xs font-medium uppercase tracking-wider text-[rgb(var(--trinkui-muted))]">Before</span>
                    </div>
                    <p className="text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">{prop.before}</p>
                  </div>
                  {/* After */}
                  <div>
                    <div className="mb-1.5 flex items-center gap-2">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-green-500/10 text-green-400">
                        <svg width="10" height="10" viewBox="0 0 12 12" fill="none"><path d="M2.5 6.5l2.5 2.5 5-5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                      </span>
                      <span className="text-xs font-medium uppercase tracking-wider text-[rgb(var(--trinkui-primary))]">After</span>
                    </div>
                    <p className="text-sm font-medium leading-relaxed text-[rgb(var(--trinkui-fg))]">{prop.after}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 7 — CODE COMPARISON
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="comparison" className="relative border-t border-[rgb(var(--trinkui-border)/0.5)] py-24 lg:py-32">
        <div className="mx-auto max-w-screen-xl px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[rgb(var(--trinkui-primary))]">
                Comparison
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Less code. More product.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mx-auto mt-14 grid max-w-5xl gap-6 lg:grid-cols-2">
              {/* Left — Vanilla */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-red-400/60" />
                  <span className="text-sm font-medium text-[rgb(var(--trinkui-muted))]">Plain Tailwind + React</span>
                  <span className="ml-auto rounded-md bg-red-500/10 px-2 py-0.5 text-xs text-red-400">47 lines</span>
                </div>
                <CodeWindow filename="Modal.tsx">
                  <span className="text-[rgb(var(--trinkui-muted))]">{"<"}</span>
                  <span className="text-[rgb(var(--trinkui-accent))]">div</span>{" "}
                  <span className="text-[rgb(var(--trinkui-fg))]">className</span>
                  <span className="text-[rgb(var(--trinkui-muted))]">=</span>
                  <span className="text-[rgb(var(--trinkui-accent))]">&quot;fixed inset-0 bg-black/50 z-50</span>
                  {"\n  "}
                  <span className="text-[rgb(var(--trinkui-accent))]">flex items-center justify-center&quot;</span>
                  <span className="text-[rgb(var(--trinkui-muted))]">{">"}</span>
                  {"\n  "}
                  <span className="text-[rgb(var(--trinkui-muted))]">{"<"}</span>
                  <span className="text-[rgb(var(--trinkui-accent))]">div</span>{" "}
                  <span className="text-[rgb(var(--trinkui-fg))]">className</span>
                  <span className="text-[rgb(var(--trinkui-muted))]">=</span>
                  <span className="text-[rgb(var(--trinkui-accent))]">&quot;bg-white rounded-lg shadow-xl</span>
                  {"\n    "}
                  <span className="text-[rgb(var(--trinkui-accent))]">max-w-md w-full p-6 relative&quot;</span>
                  <span className="text-[rgb(var(--trinkui-muted))]">{">"}</span>
                  {"\n    "}
                  <span className="text-[rgb(var(--trinkui-muted))]">{"<"}</span>
                  <span className="text-[rgb(var(--trinkui-accent))]">button</span>{" "}
                  <span className="text-[rgb(var(--trinkui-fg))]">className</span>
                  <span className="text-[rgb(var(--trinkui-muted))]">=</span>
                  <span className="text-[rgb(var(--trinkui-accent))]">&quot;absolute top-4 right-4</span>
                  {"\n      "}
                  <span className="text-[rgb(var(--trinkui-accent))]">text-gray-400 hover:text-gray-600&quot;</span>
                  {"\n      "}
                  <span className="text-[rgb(var(--trinkui-fg))]">onClick</span>
                  <span className="text-[rgb(var(--trinkui-muted))]">=</span>
                  <span className="text-[rgb(var(--trinkui-muted))]">{"{onClose}"}</span>
                  <span className="text-[rgb(var(--trinkui-muted))]">{">"}</span>
                  <span className="text-[rgb(var(--trinkui-fg))]">X</span>
                  <span className="text-[rgb(var(--trinkui-muted))]">{"</"}</span>
                  <span className="text-[rgb(var(--trinkui-accent))]">button</span>
                  <span className="text-[rgb(var(--trinkui-muted))]">{">"}</span>
                  {"\n    "}
                  <span className="text-[rgb(var(--trinkui-muted))]">{"<"}</span>
                  <span className="text-[rgb(var(--trinkui-accent))]">h2</span>{" "}
                  <span className="text-[rgb(var(--trinkui-fg))]">className</span>
                  <span className="text-[rgb(var(--trinkui-muted))]">=</span>
                  <span className="text-[rgb(var(--trinkui-accent))]">&quot;text-lg font-semibold mb-4&quot;</span>
                  <span className="text-[rgb(var(--trinkui-muted))]">{">"}</span>
                  {"\n      "}
                  <span className="text-[rgb(var(--trinkui-fg))]">Title</span>
                  <span className="text-[rgb(var(--trinkui-muted))]">{"</h2>"}</span>
                  {"\n    "}
                  <span className="text-[rgb(var(--trinkui-muted))]">{"<"}</span>
                  <span className="text-[rgb(var(--trinkui-accent))]">p</span>{" "}
                  <span className="text-[rgb(var(--trinkui-fg))]">className</span>
                  <span className="text-[rgb(var(--trinkui-muted))]">=</span>
                  <span className="text-[rgb(var(--trinkui-accent))]">&quot;text-gray-600 mb-6&quot;</span>
                  <span className="text-[rgb(var(--trinkui-muted))]">{">"}</span>
                  <span className="text-[rgb(var(--trinkui-fg))]">Content</span>
                  <span className="text-[rgb(var(--trinkui-muted))]">{"</p>"}</span>
                  {"\n    "}
                  <span className="text-[rgb(var(--trinkui-muted))]">{"..."}</span>
                  {"\n  "}
                  <span className="text-[rgb(var(--trinkui-muted))]">{"</div>"}</span>
                  {"\n"}
                  <span className="text-[rgb(var(--trinkui-muted))]">{"</div>"}</span>
                </CodeWindow>
              </div>

              {/* Right — trink-ui */}
              <div>
                <div className="mb-3 flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-green-400/60" />
                  <span className="text-sm font-medium text-[rgb(var(--trinkui-fg))]">trink-ui</span>
                  <span className="ml-auto rounded-md bg-green-500/10 px-2 py-0.5 text-xs text-green-400">6 lines</span>
                </div>
                <div className="relative">
                  <div className="absolute -inset-px rounded-xl bg-gradient-to-br from-[rgb(var(--trinkui-primary)/0.2)] to-[rgb(var(--trinkui-accent)/0.1)]" />
                  <CodeWindow filename="Modal.tsx" className="relative">
                    <span className="text-[rgb(var(--trinkui-muted))]">{"<"}</span>
                    <span className="text-[rgb(var(--trinkui-accent))]">Modal</span>{" "}
                    <span className="text-[rgb(var(--trinkui-fg))]">isOpen</span>
                    <span className="text-[rgb(var(--trinkui-muted))]">=</span>
                    <span className="text-[rgb(var(--trinkui-muted))]">{"{isOpen}"}</span>{" "}
                    <span className="text-[rgb(var(--trinkui-fg))]">onClose</span>
                    <span className="text-[rgb(var(--trinkui-muted))]">=</span>
                    <span className="text-[rgb(var(--trinkui-muted))]">{"{onClose}"}</span>
                    <span className="text-[rgb(var(--trinkui-muted))]">{">"}</span>
                    {"\n  "}
                    <span className="text-[rgb(var(--trinkui-muted))]">{"<"}</span>
                    <span className="text-[rgb(var(--trinkui-accent))]">ModalHeader</span>
                    <span className="text-[rgb(var(--trinkui-muted))]">{">"}</span>
                    <span className="text-[rgb(var(--trinkui-fg))]">Title</span>
                    <span className="text-[rgb(var(--trinkui-muted))]">{"</ModalHeader>"}</span>
                    {"\n  "}
                    <span className="text-[rgb(var(--trinkui-muted))]">{"<"}</span>
                    <span className="text-[rgb(var(--trinkui-accent))]">ModalBody</span>
                    <span className="text-[rgb(var(--trinkui-muted))]">{">"}</span>
                    <span className="text-[rgb(var(--trinkui-fg))]">Content</span>
                    <span className="text-[rgb(var(--trinkui-muted))]">{"</ModalBody>"}</span>
                    {"\n  "}
                    <span className="text-[rgb(var(--trinkui-muted))]">{"<"}</span>
                    <span className="text-[rgb(var(--trinkui-accent))]">ModalFooter</span>
                    <span className="text-[rgb(var(--trinkui-muted))]">{">"}</span>
                    {"\n    "}
                    <span className="text-[rgb(var(--trinkui-muted))]">{"<"}</span>
                    <span className="text-[rgb(var(--trinkui-accent))]">Button</span>{" "}
                    <span className="text-[rgb(var(--trinkui-fg))]">onPress</span>
                    <span className="text-[rgb(var(--trinkui-muted))]">=</span>
                    <span className="text-[rgb(var(--trinkui-muted))]">{"{onClose}"}</span>
                    <span className="text-[rgb(var(--trinkui-muted))]">{">"}</span>
                    <span className="text-[rgb(var(--trinkui-fg))]">Close</span>
                    <span className="text-[rgb(var(--trinkui-muted))]">{"</Button>"}</span>
                    {"\n  "}
                    <span className="text-[rgb(var(--trinkui-muted))]">{"</ModalFooter>"}</span>
                    {"\n"}
                    <span className="text-[rgb(var(--trinkui-muted))]">{"</Modal>"}</span>
                  </CodeWindow>
                </div>
              </div>
            </div>
          </Reveal>

          {/* Summary line */}
          <Reveal delay={250}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-[rgb(var(--trinkui-muted))]">
              <span className="font-semibold text-[rgb(var(--trinkui-fg))]">47 lines</span> &rarr;{" "}
              <span className="font-semibold text-[rgb(var(--trinkui-primary))]">6 lines</span>.{" "}
              Same result. Plus accessibility, animation, and keyboard support for free.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 8 — FEATURE GRID (3x4)
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="features" className="relative border-t border-[rgb(var(--trinkui-border)/0.5)] py-24 lg:py-32">
        <div className="mx-auto max-w-screen-xl px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[rgb(var(--trinkui-primary))]">
                Features
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                What&apos;s in the box?
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {FEATURES.map((feature, i) => (
              <Reveal key={feature.title} delay={i * 60}>
                <div className="group relative h-full rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-6 transition-all duration-300 hover:border-[rgb(var(--trinkui-primary)/0.3)] hover:bg-[rgb(var(--trinkui-surface)/0.7)]">
                  <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-[rgb(var(--trinkui-primary)/0.1)] text-[rgb(var(--trinkui-primary))] transition-colors group-hover:bg-[rgb(var(--trinkui-primary)/0.15)]">
                    {feature.icon}
                  </div>
                  <div className="flex items-center gap-2">
                    <h3 className="text-sm font-semibold text-[rgb(var(--trinkui-fg))]">
                      {feature.title}
                    </h3>
                    {feature.comingSoon && (
                      <span className="rounded-full bg-[rgb(var(--trinkui-accent)/0.15)] px-2 py-0.5 text-[10px] font-medium text-[rgb(var(--trinkui-accent))]">
                        Coming Soon
                      </span>
                    )}
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-[rgb(var(--trinkui-muted))]">
                    {feature.desc}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 9 — QUICK START (3 Steps)
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="quickstart" className="relative border-t border-[rgb(var(--trinkui-border)/0.5)] py-24 lg:py-32">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_bottom,rgb(var(--trinkui-primary)/0.04),transparent_60%)]" />

        <div className="relative mx-auto max-w-screen-xl px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[rgb(var(--trinkui-primary))]">
                Quick Start
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Get started in 3 steps.
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto mt-14 max-w-3xl space-y-8">
            {[
              {
                step: "01",
                title: "Install",
                code: "$ npm install @trinkui/react",
                desc: "The CLI configures everything for you.",
              },
              {
                step: "02",
                title: "Import",
                code: 'import { Button } from "@trinkui/react";',
                desc: "Single package or per-component import.",
              },
              {
                step: "03",
                title: "Use",
                code: '<Button color="primary">Hello</Button>',
                desc: "That's it. You're production-ready.",
              },
            ].map((item, i) => (
              <Reveal key={item.step} delay={i * 120}>
                <div className="flex gap-6">
                  {/* Step number */}
                  <div className="flex shrink-0 flex-col items-center">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary)/0.1)] text-sm font-bold text-[rgb(var(--trinkui-primary))]">
                      {item.step}
                    </div>
                    {i < 2 && (
                      <div className="mt-2 h-full w-px bg-[rgb(var(--trinkui-border))]" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-4">
                    <h3 className="text-lg font-semibold text-[rgb(var(--trinkui-fg))]">{item.title}</h3>
                    <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">{item.desc}</p>
                    <div className="mt-3 flex items-center gap-3 rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-4 py-3 font-mono text-sm">
                      <span className="text-[rgb(var(--trinkui-fg))]">{item.code}</span>
                      <CopyButton text={item.code.replace("$ ", "")} />
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          {/* CTAs */}
          <Reveal delay={400}>
            <div className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/docs/installation"
                className="glow-primary inline-flex items-center gap-2 rounded-xl bg-[rgb(var(--trinkui-primary))] px-6 py-3 text-sm font-medium text-white transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
              >
                Go to Documentation
                {icons.arrowRight}
              </Link>
              <Link
                href="/components"
                className="inline-flex items-center gap-2 rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-6 py-3 text-sm font-medium text-[rgb(var(--trinkui-fg))] transition-all hover:border-[rgb(var(--trinkui-muted)/0.5)] hover:scale-[1.02] active:scale-[0.98]"
              >
                Browse Examples
                {icons.arrowRight}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 10 — TESTIMONIALS
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="testimonials" className="relative border-t border-[rgb(var(--trinkui-border)/0.5)] py-24 lg:py-32">
        <div className="mx-auto max-w-screen-xl px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[rgb(var(--trinkui-primary))]">
                Testimonials
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                What developers are saying.
              </h2>
            </div>
          </Reveal>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <Reveal key={t.name} delay={i * 100}>
                <div className="relative h-full rounded-2xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.5)] p-7">
                  {/* Quote mark */}
                  <svg width="32" height="32" viewBox="0 0 24 24" fill="none" className="mb-4 text-[rgb(var(--trinkui-primary)/0.3)]">
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor" />
                  </svg>
                  <blockquote className="text-sm leading-relaxed text-[rgb(var(--trinkui-fg))]">
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>
                  <div className="mt-5 flex items-center gap-3">
                    {/* Avatar placeholder */}
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary)/0.15)] text-xs font-semibold text-[rgb(var(--trinkui-primary))]">
                      {t.name.split(" ").map(n => n[0]).join("")}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-[rgb(var(--trinkui-fg))]">{t.name}</div>
                      <div className="text-xs text-[rgb(var(--trinkui-muted))]">{t.role}</div>
                    </div>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 11 — FRAMEWORK COMPAT
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="frameworks" className="relative border-t border-[rgb(var(--trinkui-border)/0.5)] py-24 lg:py-32">
        <div className="mx-auto max-w-screen-xl px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[rgb(var(--trinkui-primary))]">
                Compatibility
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                In harmony with your favorite framework.
              </h2>
            </div>
          </Reveal>

          <Reveal delay={150}>
            <div className="mx-auto mt-12 flex max-w-3xl flex-wrap items-center justify-center gap-4">
              {FRAMEWORKS.map((fw) => (
                <div
                  key={fw}
                  className="flex items-center gap-2 rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.5)] px-6 py-3 text-sm font-medium text-[rgb(var(--trinkui-fg))] transition-all hover:border-[rgb(var(--trinkui-primary)/0.3)] hover:bg-[rgb(var(--trinkui-surface))]"
                >
                  {fw}
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={250}>
            <p className="mx-auto mt-8 max-w-2xl text-center text-sm text-[rgb(var(--trinkui-muted))]">
              App Router, Pages Router, SSR, SSG, SPA &mdash; whatever architecture you use, trink-ui works seamlessly.
            </p>
          </Reveal>

          <Reveal delay={350}>
            <div className="mt-6 text-center">
              <Link
                href="/docs/installation"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
              >
                View Setup Guides
                {icons.chevronRight}
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 12 — COMMUNITY
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="community" className="relative border-t border-[rgb(var(--trinkui-border)/0.5)] py-24 lg:py-32">
        <div className="mx-auto max-w-screen-xl px-6">
          <Reveal>
            <div className="mx-auto max-w-2xl text-center">
              <p className="mb-3 text-sm font-medium uppercase tracking-widest text-[rgb(var(--trinkui-primary))]">
                Community
              </p>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Join the community.
              </h2>
            </div>
          </Reveal>

          <div className="mx-auto mt-12 grid max-w-3xl gap-6 md:grid-cols-3">
            {[
              {
                icon: icons.github,
                title: "GitHub",
                desc: "Report bugs, submit PRs, explore the source.",
                href: "https://github.com/trinkui/trinkui",
                linkText: "Repository",
              },
              {
                icon: icons.discord,
                title: "Discord",
                desc: "Real-time help, discussions, and community.",
                href: "#",
                linkText: "Join",
              },
              {
                icon: icons.twitter,
                title: "X / Twitter",
                desc: "Updates, tips, and roadmap discussions.",
                href: "#",
                linkText: "Follow",
              },
            ].map((item, i) => (
              <Reveal key={item.title} delay={i * 100}>
                <a
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex h-full flex-col rounded-2xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.5)] p-7 transition-all duration-300 hover:border-[rgb(var(--trinkui-primary)/0.3)] hover:bg-[rgb(var(--trinkui-surface))]"
                >
                  <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[rgb(var(--trinkui-primary)/0.1)] text-[rgb(var(--trinkui-primary))] transition-colors group-hover:bg-[rgb(var(--trinkui-primary)/0.15)]">
                    {item.icon}
                  </div>
                  <h3 className="text-lg font-semibold text-[rgb(var(--trinkui-fg))]">{item.title}</h3>
                  <p className="mt-2 flex-1 text-sm text-[rgb(var(--trinkui-muted))]">{item.desc}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
                    {item.linkText}
                    {icons.chevronRight}
                  </span>
                </a>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 13 — FINAL CTA
          ══════════════════════════════════════════════════════════════════════ */}
      <section id="cta" className="relative border-t border-[rgb(var(--trinkui-border)/0.5)] py-24 lg:py-32">
        {/* Stronger glow background */}
        <div className="pointer-events-none absolute inset-0 overflow-hidden">
          <div className="absolute top-1/2 left-1/2 h-[600px] w-[800px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[rgb(var(--trinkui-primary)/0.06)] blur-[120px]" />
          <div className="absolute top-1/3 left-1/3 h-[300px] w-[400px] rounded-full bg-[rgb(var(--trinkui-accent)/0.04)] blur-[100px]" />
        </div>

        <div className="relative mx-auto max-w-screen-xl px-6 text-center">
          <Reveal>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl" style={{ fontFamily: "var(--font-dynapuff), var(--font-inter), sans-serif" }}>
              Every great product{" "}
              <span className="text-gradient">starts with a single line of code.</span>
            </h2>
            <p className="mx-auto mt-5 max-w-xl text-base text-[rgb(var(--trinkui-muted))] sm:text-lg">
              Build your first component with trink-ui today. Free, open source, forever.
            </p>
          </Reveal>

          <Reveal delay={150}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link
                href="/docs/installation"
                className="glow-primary-lg inline-flex items-center gap-2 rounded-xl bg-[rgb(var(--trinkui-primary))] px-8 py-4 text-sm font-medium text-white transition-all hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
              >
                Get Started
                {icons.arrowRight}
              </Link>
              <a
                href="https://github.com/trinkui/trinkui"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-8 py-4 text-sm font-medium text-[rgb(var(--trinkui-fg))] transition-all hover:border-[rgb(var(--trinkui-muted)/0.5)] hover:scale-[1.02] active:scale-[0.98]"
              >
                {icons.github}
                View on GitHub
              </a>
            </div>
          </Reveal>

          {/* Install */}
          <Reveal delay={250}>
            <div className="mx-auto mt-8 max-w-md">
              <div className="flex items-center justify-between gap-3 rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-5 py-3 font-mono text-sm">
                <div className="flex items-center gap-3 text-[rgb(var(--trinkui-muted))]">
                  {icons.terminal}
                  <span>
                    <span className="text-[rgb(var(--trinkui-muted))]">$ </span>
                    <span className="text-[rgb(var(--trinkui-fg))]">npm install @trinkui/react</span>
                  </span>
                </div>
                <CopyButton text="npm install @trinkui/react" />
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ══════════════════════════════════════════════════════════════════════
          SECTION 14 — FOOTER
          ══════════════════════════════════════════════════════════════════════ */}
      <footer id="footer" className="border-t border-[rgb(var(--trinkui-border)/0.5)] py-16">
        <div className="mx-auto max-w-screen-xl px-6">
          <div className="grid gap-12 md:grid-cols-6">
            {/* Brand column */}
            <div className="md:col-span-2">
              <Link href="/" className="inline-flex items-center gap-2 font-semibold">
                <TrinkLogo variant="icon" height={20} />
                <span className="text-sm font-semibold">
                  <span className="text-[rgb(var(--trinkui-fg))]">trink</span>
                  <span className="text-[#338EF7]">-ui</span>
                </span>
              </Link>
              <p className="mt-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
                Design that resonates.
              </p>
              <p className="mt-4 text-xs text-[rgb(var(--trinkui-muted)/0.6)]">
                &copy; 2026 trink-ui. MIT License.
              </p>
            </div>

            {/* Product */}
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[rgb(var(--trinkui-muted))]">
                Product
              </h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Components", href: "/components" },
                  { label: "Templates", href: "/templates/saas" },
                  { label: "Figma Kit", href: "#" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[rgb(var(--trinkui-muted))]">
                Resources
              </h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Documentation", href: "/docs/installation" },
                  { label: "Blog", href: "#" },
                  { label: "Changelog", href: "#" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Community */}
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[rgb(var(--trinkui-muted))]">
                Community
              </h4>
              <ul className="space-y-2.5">
                {[
                  { label: "GitHub", href: "https://github.com/trinkui/trinkui" },
                  { label: "Discord", href: "#" },
                  { label: "X", href: "#" },
                ].map((link) => (
                  <li key={link.label}>
                    <a href={link.href} target="_blank" rel="noopener noreferrer" className="text-sm text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors">
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Legal */}
            <div>
              <h4 className="mb-4 text-xs font-semibold uppercase tracking-widest text-[rgb(var(--trinkui-muted))]">
                Legal
              </h4>
              <ul className="space-y-2.5">
                {[
                  { label: "Privacy", href: "#" },
                  { label: "Terms of Service", href: "#" },
                  { label: "MIT License", href: "#" },
                ].map((link) => (
                  <li key={link.label}>
                    <Link href={link.href} className="text-sm text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
