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

export default function SEOGuidePage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
          Guides
        </p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
          SEO Best Practices
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          trink-ui is designed with SEO in mind. Semantic HTML, proper heading hierarchy,
          and server-side rendering ensure your landing pages rank well and look great
          in search results.
        </p>
      </div>

      {/* Semantic HTML */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Semantic HTML out of the box
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          trink-ui components use semantic HTML elements that search engines understand.
          This provides meaning and structure beyond visual presentation:
        </p>
        <div className="space-y-2">
          {[
            { element: "<section>", usage: "All section components (Hero, Features, Pricing, etc.)" },
            { element: "<nav>", usage: "NavbarSimple and footer navigation" },
            { element: "<header>", usage: "SectionHeader with title and subtitle" },
            { element: "<footer>", usage: "FooterColumns and FooterSimple" },
            { element: "<article>", usage: "Testimonial cards and blog-style content" },
            { element: "<h2>", usage: "Section headings (page reserves h1 for the main title)" },
          ].map((item) => (
            <div
              key={item.element}
              className="flex items-start gap-3 rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] px-4 py-3"
            >
              <code className="shrink-0 rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1.5 py-0.5 text-xs font-medium text-[rgb(var(--trinkui-primary))]">
                {item.element}
              </code>
              <p className="text-sm text-[rgb(var(--trinkui-muted))]">{item.usage}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Heading hierarchy */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Heading hierarchy
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Search engines use heading hierarchy to understand page structure. trink-ui enforces
          a clean hierarchy: section components render their titles as{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            &lt;h2&gt;
          </code>{" "}
          elements, leaving{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            &lt;h1&gt;
          </code>{" "}
          for the page&apos;s main heading (typically in the Hero section):
        </p>
        <CodeBox
          code={`{/* Correct heading hierarchy */}
<HeroCentered
  title="Ship Faster with Acme"    {/* renders as <h1> */}
  subtitle="The modern platform..."
/>
<FeaturesGrid
  title="Why Choose Us"             {/* renders as <h2> */}
  features={...}
/>
<PricingCards
  title="Simple Pricing"            {/* renders as <h2> */}
  plans={...}
/>
<FAQAccordion
  title="FAQ"                       {/* renders as <h2> */}
  items={...}
/>`}
        />
        <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
          This creates a clear document outline that search engines and screen readers can navigate.
        </p>
      </div>

      {/* Image alt text */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Image alt text
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Always provide descriptive alt text for images. Components that accept image props
          require or strongly encourage alt text. Good alt text improves both accessibility
          and image search ranking:
        </p>
        <CodeBox
          code={`// Good: descriptive alt text
<HeroCentered
  title="Build faster"
  image={{
    src: "/hero-dashboard.png",
    alt: "Acme dashboard showing real-time analytics with charts and metrics",
  }}
/>

// Good: avatar with person's name
<TestimonialsGrid
  testimonials={[
    {
      quote: "Amazing product!",
      author: "Sarah Chen",
      avatar: "/avatars/sarah.jpg",
      // Avatar alt text is auto-generated from author name
    },
  ]}
/>

// Bad: empty or generic alt text
// alt="" or alt="image" or alt="screenshot"`}
        />
      </div>

      {/* Next.js metadata */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Next.js Metadata API
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Use Next.js&apos;s built-in Metadata API to set page title, description, and Open Graph
          tags. This works alongside trink-ui components:
        </p>
        <CodeBox
          title="app/page.tsx"
          code={`import type { Metadata } from "next";
import { HeroCentered, FeaturesGrid } from "@trinkui/react";

export const metadata: Metadata = {
  title: "Acme - Ship Faster with Modern Tools",
  description:
    "Acme helps developers build and launch products 10x faster with production-ready components and templates.",
  keywords: ["landing page", "react components", "ui library"],
};

export default function HomePage() {
  return (
    <main>
      <HeroCentered title="Ship Faster with Acme" ... />
      <FeaturesGrid title="Why Choose Us" ... />
    </main>
  );
}`}
        />
      </div>

      {/* Open Graph tags */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Open Graph and social sharing
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          When someone shares your landing page on social media, Open Graph tags control what
          preview appears. Add these to your metadata:
        </p>
        <CodeBox
          title="app/layout.tsx"
          code={`import type { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Acme - Ship Faster",
    template: "%s | Acme",
  },
  description: "Production-ready landing page components for React.",
  openGraph: {
    title: "Acme - Ship Faster with Modern Tools",
    description: "Build beautiful landing pages in minutes.",
    url: "https://acme.com",
    siteName: "Acme",
    images: [
      {
        url: "https://acme.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Acme landing page builder preview",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Acme - Ship Faster",
    description: "Build beautiful landing pages in minutes.",
    images: ["https://acme.com/og-image.png"],
  },
  robots: {
    index: true,
    follow: true,
  },
};`}
        />
      </div>

      {/* Structured data */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Structured data (JSON-LD)
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Add JSON-LD structured data to help search engines understand your page content.
          This can generate rich snippets in search results:
        </p>
        <CodeBox
          title="app/page.tsx"
          code={`export default function HomePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "Acme",
    description: "Production-ready landing page components for React.",
    applicationCategory: "DeveloperApplication",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: "4.9",
      ratingCount: "1250",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main>
        <HeroCentered title="Ship Faster with Acme" ... />
        {/* ... rest of sections */}
      </main>
    </>
  );
}`}
        />
        <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
          For pricing pages, use the{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            Product
          </code>{" "}
          schema with{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            Offer
          </code>{" "}
          items. For FAQ sections, use the{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            FAQPage
          </code>{" "}
          schema to potentially show FAQ rich snippets.
        </p>
      </div>

      {/* Performance */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Performance and Core Web Vitals
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Google uses Core Web Vitals as a ranking signal. trink-ui is designed to score well:
        </p>
        <ul className="space-y-2 text-sm text-[rgb(var(--trinkui-muted))]">
          {[
            "Tree-shakeable exports — only the components you use are included in your bundle",
            "No runtime CSS — all styles are Tailwind utility classes processed at build time",
            "Animations use only opacity and transform — no layout thrashing (good CLS score)",
            "Server-side rendering support — content is visible before JavaScript loads (good LCP)",
            "No external font loading by default — fonts are configurable via CSS variables",
            "Minimal JavaScript — section components with animated={false} send zero client JS",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="mt-0.5 shrink-0 text-[rgb(var(--trinkui-primary))]"
              >
                <path
                  d="M3 8.5l3 3 7-7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Next step */}
      <div className="rounded-xl border border-[rgb(var(--trinkui-primary)/0.3)] bg-[rgb(var(--trinkui-primary)/0.05)] p-6">
        <p className="font-medium text-[rgb(var(--trinkui-fg))]">Next step</p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          Deploy your optimized landing page to production.
        </p>
        <Link
          href="/docs/guides/deployment"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
        >
          Deployment Guide
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
