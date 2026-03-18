import Link from "next/link";

function CodeBox({ title, code }: { title?: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[rgb(var(--trinkui-border))]">
      {title && (
        <div className="border-b border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-4 py-2">
          <span className="text-xs font-medium text-[rgb(var(--trinkui-muted))]">{title}</span>
        </div>
      )}
      <pre className="overflow-x-auto bg-[#0a0a0f] px-4 py-3 text-sm leading-relaxed text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function LandingPageGuidePage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
          Guides
        </p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
          Build a Landing Page
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          A step-by-step tutorial to build a complete, production-ready landing page
          using trink-ui section components. By the end, you will have a fully styled
          page with a navbar, hero, features, pricing, testimonials, FAQ, CTA, and footer.
        </p>
      </div>

      {/* Step 1: Project setup */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            1
          </span>
          Project setup
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Start with a fresh Next.js project and install trink-ui. If you already have a
          project, skip to step 2.
        </p>
        <div className="space-y-3">
          <CodeBox
            title="Terminal"
            code={`npx create-next-app@latest my-landing --typescript --tailwind --app
cd my-landing
npm install @trinkui/react`}
          />
          <CodeBox
            title="next.config.ts"
            code={`import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@trinkui/react", "@trinkui/shared"],
};

export default nextConfig;`}
          />
        </div>
        <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Then add the CSS variables and{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            @source
          </code>{" "}
          directive to your{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            globals.css
          </code>{" "}
          as described in the{" "}
          <Link href="/docs/guides/nextjs-setup" className="text-[rgb(var(--trinkui-primary))] hover:underline">
            Next.js Setup
          </Link>{" "}
          guide.
        </p>
      </div>

      {/* Step 2: Navbar */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            2
          </span>
          Add the Navbar
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Every landing page needs navigation. Use{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            NavbarSimple
          </code>{" "}
          for a clean, responsive navbar that collapses into a hamburger menu on mobile:
        </p>
        <CodeBox
          title="app/page.tsx — Navbar"
          code={`import { NavbarSimple } from "@trinkui/react";

// Inside your page component:
<NavbarSimple
  brand={{ name: "Acme", href: "/" }}
  links={[
    { label: "Features", href: "#features" },
    { label: "Pricing", href: "#pricing" },
    { label: "FAQ", href: "#faq" },
  ]}
  actions={[
    { label: "Sign In", href: "/login", variant: "ghost" },
    { label: "Get Started", href: "/signup", variant: "primary" },
  ]}
/>`}
        />
      </div>

      {/* Step 3: Hero */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            3
          </span>
          Hero section
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          The hero is the first thing visitors see. Use{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            HeroCentered
          </code>{" "}
          for a classic centered layout with a headline, subtitle, and call-to-action buttons:
        </p>
        <CodeBox
          code={`<HeroCentered
  badge="Now in beta"
  title="Ship your landing page in minutes, not weeks"
  subtitle="trink-ui gives you production-ready sections that snap together like building blocks. Focus on your message, not your markup."
  primaryAction={{ label: "Start Building", href: "/signup" }}
  secondaryAction={{ label: "View Components", href: "/components" }}
/>`}
        />
      </div>

      {/* Step 4: Features */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            4
          </span>
          Features section
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Showcase your product&apos;s key benefits with{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            FeaturesGrid
          </code>.
          It renders a responsive 3-column grid that stacks on mobile:
        </p>
        <CodeBox
          code={`<FeaturesGrid
  id="features"
  title="Everything you need to launch"
  subtitle="Built by developers, for developers."
  features={[
    {
      icon: "lightning",
      title: "Fast by default",
      description: "Optimized rendering with zero layout shift. Tree-shakeable imports keep your bundle lean.",
    },
    {
      icon: "palette",
      title: "Fully customizable",
      description: "CSS variables for colors, fonts, and spacing. Override anything without ejecting.",
    },
    {
      icon: "shield",
      title: "Accessible",
      description: "Semantic HTML, keyboard navigation, and screen reader support out of the box.",
    },
    {
      icon: "code",
      title: "TypeScript first",
      description: "Full type safety with documented props. Autocomplete in your editor.",
    },
    {
      icon: "layers",
      title: "Composable sections",
      description: "Mix and match hero, features, pricing, and more to build any landing page.",
    },
    {
      icon: "moon",
      title: "Dark mode ready",
      description: "Every section supports light and dark themes with a single prop.",
    },
  ]}
/>`}
        />
      </div>

      {/* Step 5: Pricing */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            5
          </span>
          Pricing section
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Use{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            PricingCards
          </code>{" "}
          to display your pricing tiers. Set{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            highlighted: true
          </code>{" "}
          on the recommended plan:
        </p>
        <CodeBox
          code={`<PricingCards
  id="pricing"
  title="Simple, transparent pricing"
  subtitle="No hidden fees. Cancel anytime."
  plans={[
    {
      name: "Starter",
      price: "$0",
      period: "forever",
      description: "For side projects and experimentation.",
      features: ["3 projects", "Community support", "Basic analytics"],
      action: { label: "Get Started", href: "/signup" },
    },
    {
      name: "Pro",
      price: "$29",
      period: "/month",
      description: "For growing teams that need more.",
      features: ["Unlimited projects", "Priority support", "Advanced analytics", "Custom domain"],
      action: { label: "Start Free Trial", href: "/signup?plan=pro" },
      highlighted: true,
    },
    {
      name: "Enterprise",
      price: "Custom",
      description: "For organizations with specific needs.",
      features: ["Everything in Pro", "SSO & SAML", "Dedicated account manager", "SLA guarantee"],
      action: { label: "Contact Sales", href: "/contact" },
    },
  ]}
/>`}
        />
      </div>

      {/* Step 6: Testimonials */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            6
          </span>
          Testimonials section
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Social proof increases conversions. Use{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            TestimonialsGrid
          </code>{" "}
          to display customer quotes in a responsive grid:
        </p>
        <CodeBox
          code={`<TestimonialsGrid
  theme="dark"
  title="Loved by developers"
  testimonials={[
    {
      quote: "trink-ui cut our landing page development time from 2 weeks to 2 days.",
      author: "Sarah Chen",
      role: "CTO at LaunchPad",
      avatar: "/avatars/sarah.jpg",
    },
    {
      quote: "The components are beautifully designed and incredibly easy to customize.",
      author: "Marcus Rivera",
      role: "Frontend Lead at Nexus",
      avatar: "/avatars/marcus.jpg",
    },
    {
      quote: "Best component library for landing pages. Nothing else comes close.",
      author: "Aiko Tanaka",
      role: "Indie Hacker",
      avatar: "/avatars/aiko.jpg",
    },
  ]}
/>`}
        />
        <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Notice the{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            theme=&quot;dark&quot;
          </code>{" "}
          prop. This gives the testimonials section a dark background to create visual contrast
          with the surrounding light sections.
        </p>
      </div>

      {/* Step 7: FAQ */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            7
          </span>
          FAQ section
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Address common questions with an expandable accordion. Use{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            FAQAccordion
          </code>:
        </p>
        <CodeBox
          code={`<FAQAccordion
  id="faq"
  title="Frequently asked questions"
  items={[
    {
      question: "Do I need Tailwind CSS?",
      answer: "Yes, trink-ui uses Tailwind CSS v4 for styling. Components reference utility classes that Tailwind generates.",
    },
    {
      question: "Can I use this with plain React (no framework)?",
      answer: "Absolutely. trink-ui works with Vite, Remix, Next.js, or any React setup that supports Tailwind CSS.",
    },
    {
      question: "Is it accessible?",
      answer: "Yes. All components use semantic HTML, support keyboard navigation, and include ARIA attributes where needed.",
    },
    {
      question: "Can I customize the colors?",
      answer: "Every color is defined as a CSS variable. Override them in your global CSS to match your brand.",
    },
  ]}
/>`}
        />
      </div>

      {/* Step 8: CTA */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            8
          </span>
          Call to action
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Close with a strong call to action using{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            CTACentered
          </code>:
        </p>
        <CodeBox
          code={`<CTACentered
  theme="dark"
  title="Start building your landing page today"
  subtitle="Join 10,000+ developers who ship faster with trink-ui."
  primaryAction={{ label: "Get Started Free", href: "/signup" }}
  secondaryAction={{ label: "Read the Docs", href: "/docs" }}
/>`}
        />
      </div>

      {/* Step 9: Footer */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            9
          </span>
          Footer
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Wrap up with a structured footer using{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            FooterColumns
          </code>:
        </p>
        <CodeBox
          code={`<FooterColumns
  brand={{
    name: "Acme",
    description: "Building the future of the web, one component at a time.",
  }}
  columns={[
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Changelog", href: "/changelog" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Documentation", href: "/docs" },
        { label: "Blog", href: "/blog" },
        { label: "Support", href: "/support" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
        { label: "Contact", href: "/contact" },
      ],
    },
  ]}
  social={[
    { platform: "twitter", href: "https://twitter.com/acme" },
    { platform: "github", href: "https://github.com/acme" },
  ]}
  copyright="2025 Acme Inc. All rights reserved."
/>`}
        />
      </div>

      {/* Full code */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Complete page code
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Here is the entire landing page in a single file. Copy and customize to your needs:
        </p>
        <CodeBox
          title="app/page.tsx"
          code={`import {
  NavbarSimple,
  HeroCentered,
  FeaturesGrid,
  PricingCards,
  TestimonialsGrid,
  FAQAccordion,
  CTACentered,
  FooterColumns,
} from "@trinkui/react";

export default function LandingPage() {
  return (
    <main>
      <NavbarSimple
        brand={{ name: "Acme", href: "/" }}
        links={[
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ]}
        actions={[
          { label: "Sign In", href: "/login", variant: "ghost" },
          { label: "Get Started", href: "/signup", variant: "primary" },
        ]}
      />

      <HeroCentered
        badge="Now in beta"
        title="Ship your landing page in minutes, not weeks"
        subtitle="Production-ready sections that snap together like building blocks."
        primaryAction={{ label: "Start Building", href: "/signup" }}
        secondaryAction={{ label: "View Components", href: "/components" }}
      />

      <FeaturesGrid
        id="features"
        title="Everything you need to launch"
        subtitle="Built by developers, for developers."
        features={[
          { icon: "lightning", title: "Fast by default", description: "Optimized rendering with zero layout shift." },
          { icon: "palette", title: "Fully customizable", description: "CSS variables for colors, fonts, and spacing." },
          { icon: "shield", title: "Accessible", description: "Semantic HTML and keyboard navigation." },
          { icon: "code", title: "TypeScript first", description: "Full type safety and autocomplete." },
          { icon: "layers", title: "Composable", description: "Mix and match any sections." },
          { icon: "moon", title: "Dark mode", description: "Light and dark with a single prop." },
        ]}
      />

      <PricingCards
        id="pricing"
        title="Simple, transparent pricing"
        plans={[
          { name: "Starter", price: "$0", period: "forever", features: ["3 projects", "Community support"], action: { label: "Get Started", href: "/signup" } },
          { name: "Pro", price: "$29", period: "/month", features: ["Unlimited projects", "Priority support", "Custom domain"], action: { label: "Start Trial", href: "/signup?plan=pro" }, highlighted: true },
          { name: "Enterprise", price: "Custom", features: ["Everything in Pro", "SSO", "SLA"], action: { label: "Contact Sales", href: "/contact" } },
        ]}
      />

      <TestimonialsGrid
        theme="dark"
        title="Loved by developers"
        testimonials={[
          { quote: "Cut our dev time from 2 weeks to 2 days.", author: "Sarah Chen", role: "CTO at LaunchPad" },
          { quote: "Beautifully designed, easy to customize.", author: "Marcus Rivera", role: "Frontend Lead" },
          { quote: "Best landing page library. Period.", author: "Aiko Tanaka", role: "Indie Hacker" },
        ]}
      />

      <FAQAccordion
        id="faq"
        title="Frequently asked questions"
        items={[
          { question: "Do I need Tailwind CSS?", answer: "Yes, trink-ui uses Tailwind CSS v4." },
          { question: "Is it accessible?", answer: "Yes, all components use semantic HTML." },
          { question: "Can I customize colors?", answer: "Every color is a CSS variable." },
        ]}
      />

      <CTACentered
        theme="dark"
        title="Start building your landing page today"
        subtitle="Join 10,000+ developers who ship faster."
        primaryAction={{ label: "Get Started Free", href: "/signup" }}
      />

      <FooterColumns
        brand={{ name: "Acme", description: "Building the future of the web." }}
        columns={[
          { title: "Product", links: [{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }] },
          { title: "Resources", links: [{ label: "Docs", href: "/docs" }, { label: "Blog", href: "/blog" }] },
          { title: "Company", links: [{ label: "About", href: "/about" }, { label: "Contact", href: "/contact" }] },
        ]}
        copyright="2025 Acme Inc. All rights reserved."
      />
    </main>
  );
}`}
        />
      </div>

      {/* Tips */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Tips for a polished result
        </h2>
        <div className="space-y-3">
          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="font-medium text-[rgb(var(--trinkui-fg))]">
              Alternate light and dark sections
            </p>
            <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
              Use the{" "}
              <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
                theme
              </code>{" "}
              prop to create visual rhythm. A common pattern is light hero, light features,
              dark testimonials, light FAQ, dark CTA.
            </p>
          </div>
          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="font-medium text-[rgb(var(--trinkui-fg))]">
              Control animations
            </p>
            <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
              Every section animates on scroll by default. Use{" "}
              <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
                animated={`{false}`}
              </code>{" "}
              to disable animations for above-the-fold sections that should appear instantly.
            </p>
          </div>
          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="font-medium text-[rgb(var(--trinkui-fg))]">
              Use section IDs for anchor links
            </p>
            <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
              Pass an{" "}
              <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
                id
              </code>{" "}
              prop to sections and reference them with{" "}
              <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
                href=&quot;#features&quot;
              </code>{" "}
              in your navbar links for smooth scrolling navigation.
            </p>
          </div>
        </div>
      </div>

      {/* Next step */}
      <div className="rounded-xl border border-[rgb(var(--trinkui-primary)/0.3)] bg-[rgb(var(--trinkui-primary)/0.05)] p-6">
        <p className="font-medium text-[rgb(var(--trinkui-fg))]">Next step</p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          Add dark mode support with a toggle and per-section theming.
        </p>
        <Link
          href="/docs/guides/dark-mode"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
        >
          Dark Mode Guide
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
