"use client";

import {
  NavbarSimple,
  HeroMinimal,
  HeroCentered,
  FeaturesGrid,
  FeaturesList,
  TestimonialsGrid,
  PricingCards,
  FAQAccordion,
  CTACentered,
  FooterSimple,
} from "@trinkui/react";

export default function ProductLaunchTemplate() {
  return (
    <div className="relative min-h-screen">
      {/* ── Back to docs floating link ──────────────────────────────────── */}
      <a
        href="/"
        className="fixed left-4 top-4 z-50 inline-flex items-center gap-2 rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-3 py-1.5 text-xs font-medium text-[rgb(var(--trinkui-muted))] shadow-[var(--trinkui-shadow-sm)] backdrop-blur-sm transition-colors hover:text-[rgb(var(--trinkui-fg))]"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <line x1="19" y1="12" x2="5" y2="12" />
          <polyline points="12 19 5 12 12 5" />
        </svg>
        Back to docs
      </a>

      {/* ── 1. Navbar ────────────────────────────────────────────────────── */}
      <NavbarSimple
        brandName="Pulse"
        links={[
          { label: "Features", href: "#features" },
          { label: "FAQ", href: "#faq" },
        ]}
        primaryAction={{ label: "Join Waitlist", href: "#waitlist" }}
        sticky
      />

      {/* ── 2. Hero ──────────────────────────────────────────────────────── */}
      <HeroMinimal
        pill="Launching Soon"
        title="The future of analytics arrives March 30."
        subtitle="Meet Pulse — real-time insights that help you make smarter decisions, faster. Be the first to experience it."
        primaryAction={{ label: "Join the Waitlist", href: "#waitlist" }}
        secondaryAction={{ label: "Learn More", href: "#features" }}
        animated={false}
      />

      {/* ── 3. Problem Statement ─────────────────────────────────────────── */}
      <FeaturesGrid
        pill="The Problem"
        title="You know the struggle."
        subtitle="Every analytics tool promises clarity. None of them deliver."
        columns={3}
        features={[
          {
            icon: <span aria-hidden="true">&#x23F3;</span>,
            title: "Hours wasted on manual reports",
            description:
              "You spend more time building spreadsheets than reading them. Every Monday morning starts with the same painful data-pull ritual that eats half your day.",
          },
          {
            icon: <span aria-hidden="true">&#x1F6A8;</span>,
            title: "Analytics tools are broken",
            description:
              "Clunky interfaces, 30-second load times, dashboards that crash mid-presentation. Your current tool was built in 2015 and it shows.",
          },
          {
            icon: <span aria-hidden="true">&#x1F4E6;</span>,
            title: "Scattered data across 5+ tools",
            description:
              "Your metrics live in Google Analytics, Mixpanel, your CRM, a random spreadsheet, and someone's Notion doc. Good luck finding a single source of truth.",
          },
        ]}
        animated={false}
      />

      {/* ── 4. Solution Reveal ───────────────────────────────────────────── */}
      <HeroCentered
        pill="Introducing Pulse"
        title="Analytics that just work."
        subtitle="One dashboard for all your data. Real-time insights, zero learning curve, at a fraction of the cost."
        primaryAction={{ label: "Join Waitlist", href: "#waitlist" }}
        theme="dark"
        animated={false}
      />

      {/* ── 5. Key Features ──────────────────────────────────────────────── */}
      <div id="features">
        <FeaturesGrid
          pill="Features"
          title="Built different."
          subtitle="Pulse is engineered from the ground up to be the last analytics tool you ever need."
          columns={3}
          features={[
            {
              icon: <span aria-hidden="true">&#x1F9E0;</span>,
              title: "AI-Powered Insights",
              description:
                "Pulse surfaces anomalies, trends, and opportunities before you even know to look. Our AI engine learns your data and sends proactive alerts so you never miss a beat.",
            },
            {
              icon: <span aria-hidden="true">&#x26A1;</span>,
              title: "Real-time Streaming",
              description:
                "See every event the instant it happens. Sub-100ms latency means your dashboards are always live — no more stale data, no more refresh buttons.",
            },
            {
              icon: <span aria-hidden="true">&#x1F4CA;</span>,
              title: "One-click Dashboards",
              description:
                "Pick a template, connect a source, and you have a production-ready dashboard in under 60 seconds. No SQL required, no design skills needed.",
            },
            {
              icon: <span aria-hidden="true">&#x1F517;</span>,
              title: "50+ Integrations",
              description:
                "Stripe, Shopify, HubSpot, Segment, BigQuery, PostgreSQL — Pulse connects to your entire stack out of the box with pre-built connectors.",
            },
            {
              icon: <span aria-hidden="true">&#x1F465;</span>,
              title: "Team Collaboration",
              description:
                "Share dashboards with your team, leave comments on specific data points, set up shared alerts, and control access with granular permissions.",
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 6. How It Works ──────────────────────────────────────────────── */}
      <FeaturesList
        pill="How It Works"
        title="Up and running in 3 steps."
        subtitle="No consultants, no training sessions, no 90-day onboarding. Just results."
        features={[
          {
            icon: <span aria-hidden="true">&#x1F50C;</span>,
            title: "1. Connect your tools",
            description:
              "Link your existing data sources in one click. Pulse supports 50+ integrations including Google Analytics, Stripe, Segment, Mixpanel, and any PostgreSQL or BigQuery database. Your data stays where it is — Pulse reads it in real time.",
          },
          {
            icon: <span aria-hidden="true">&#x2699;&#xFE0F;</span>,
            title: "2. Configure with guided setup",
            description:
              "Our setup wizard walks you through choosing metrics, building your first dashboard, and setting up alerts. Pick from dozens of pre-built templates or start from scratch. The AI assistant suggests the best visualizations for your data.",
          },
          {
            icon: <span aria-hidden="true">&#x1F680;</span>,
            title: "3. Launch and see real results",
            description:
              "Within minutes, you have a live dashboard streaming real-time data. Share it with your team, embed it in Slack, or schedule automated PDF reports. From day one, you are making faster, data-driven decisions.",
          },
        ]}
        animated={false}
      />

      {/* ── 7. Early Access Perks ────────────────────────────────────────── */}
      <FeaturesGrid
        pill="Early Access"
        title="Early birds get more than the worm."
        subtitle="Join the waitlist today and lock in benefits that will never be offered again."
        columns={3}
        features={[
          {
            icon: <span aria-hidden="true">&#x1F4B0;</span>,
            title: "Founding Member Pricing",
            description:
              "Lock in 50% off any paid plan — forever. Not a trial discount, not a limited promo. Founding members keep their rate for life, no matter how much we grow.",
          },
          {
            icon: <span aria-hidden="true">&#x1F3C6;</span>,
            title: "Priority Access",
            description:
              "Be the first to try new features weeks before they go public. Founding members get early access to every major release and a direct line to our product team.",
          },
          {
            icon: <span aria-hidden="true">&#x2B50;</span>,
            title: "Lifetime Perks",
            description:
              "Exclusive founding member badge on your profile, priority customer support with a guaranteed 1-hour response time, and an invite to our private community of power users.",
          },
        ]}
        theme="dark"
        animated={false}
      />

      {/* ── 8. Testimonials ──────────────────────────────────────────────── */}
      <TestimonialsGrid
        pill="Beta Testers"
        title="What our early users are saying"
        subtitle="Pulse has been in private beta with select teams. Here is what they think."
        testimonials={[
          {
            quote:
              "I replaced three analytics tools with Pulse during the beta. The real-time streaming alone saved our team 6 hours a week on manual reporting. This is the future.",
            author: "Priya Sharma",
            role: "Head of Growth at ScaleUp Labs",
            rating: 5,
          },
          {
            quote:
              "The AI insights caught a revenue anomaly on a Sunday night that would have cost us $40K if we had not acted. Pulse paid for itself in the first week.",
            author: "David Kim",
            role: "CTO at Marketplace.co",
            rating: 5,
          },
          {
            quote:
              "I have been in analytics for 12 years. Pulse is the first tool that genuinely feels like it was designed for humans instead of data engineers. Onboarding took 8 minutes.",
            author: "Rebecca Torres",
            role: "VP of Data at Greenfield Health",
            rating: 5,
          },
        ]}
        animated={false}
      />

      {/* ── 9. Pricing Preview ───────────────────────────────────────────── */}
      <div id="pricing">
        <PricingCards
          pill="Pricing Preview"
          title="Simple pricing. No surprises."
          subtitle="Start free, upgrade when you are ready. Founding members get 50% off Pro and Scale."
          tiers={[
            {
              name: "Free",
              price: "$0",
              period: "/month",
              description: "For individuals exploring their data.",
              features: [
                { label: "1,000 events per month", included: true },
                { label: "3 dashboards", included: true },
                { label: "7-day data retention", included: true },
                { label: "Community support", included: true },
                { label: "AI-powered insights", included: false },
                { label: "Team collaboration", included: false },
              ],
              cta: { label: "Join Waitlist", href: "#waitlist" },
            },
            {
              name: "Pro",
              price: "$49",
              period: "/month",
              description: "For teams that need real-time power.",
              popular: true,
              popularLabel: "Most popular",
              features: [
                { label: "100,000 events per month", included: true },
                { label: "Unlimited dashboards", included: true },
                { label: "12-month data retention", included: true },
                { label: "Priority support", included: true },
                { label: "AI-powered insights", included: true },
                { label: "Team collaboration (up to 10)", included: true },
              ],
              cta: { label: "Join Waitlist", href: "#waitlist" },
            },
            {
              name: "Scale",
              price: "Custom",
              period: "",
              description: "For organizations with enterprise needs.",
              features: [
                { label: "Unlimited events", included: true },
                { label: "Unlimited dashboards", included: true },
                { label: "Unlimited data retention", included: true },
                { label: "Dedicated account manager", included: true },
                { label: "Advanced AI + custom models", included: true },
                { label: "Unlimited team members + SSO", included: true },
              ],
              cta: { label: "Contact Sales", href: "#" },
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 10. FAQ ──────────────────────────────────────────────────────── */}
      <div id="faq">
        <FAQAccordion
          pill="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know before joining the waitlist."
          items={[
            {
              question: "When does Pulse officially launch?",
              answer:
                "Pulse launches on March 30, 2026. Waitlist members get access 48 hours early on March 28. You will receive an email with your login credentials and a personal onboarding link.",
            },
            {
              question: "Is the founding member discount really forever?",
              answer:
                "Yes — 50% off is locked to your account permanently. As long as you maintain an active subscription, you keep the founding rate. Even if you downgrade and re-upgrade later, the discount stays.",
            },
            {
              question: "Can I import data from my existing analytics tools?",
              answer:
                "Absolutely. Pulse supports one-click imports from Google Analytics, Mixpanel, Amplitude, Segment, and 40+ more tools. You can also upload CSV files or connect directly to any PostgreSQL, MySQL, or BigQuery database.",
            },
            {
              question: "Is my data secure?",
              answer:
                "All data is encrypted at rest (AES-256) and in transit (TLS 1.3). Pulse is SOC 2 Type II certified and GDPR compliant. We never sell your data, never train AI models on it, and support full data residency controls for enterprise plans.",
            },
            {
              question: "Do I need a credit card to join the waitlist?",
              answer:
                "No. Joining the waitlist is completely free and requires only your email address. You will not be charged anything until you choose to upgrade from the Free plan after launch.",
            },
            {
              question: "What happens if I outgrow the Free plan?",
              answer:
                "You can upgrade to Pro or Scale at any time from your dashboard. The transition is seamless — no data loss, no downtime. And as a founding member, you will automatically get the 50% discount applied.",
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 11. Final CTA ────────────────────────────────────────────────── */}
      <div id="waitlist">
        <CTACentered
          title="This is your moment."
          subtitle="Pulse launches in 12 days. Secure your spot and lock in founding member pricing — 50% off forever."
          primaryAction={{ label: "Claim My Spot", href: "#" }}
          secondaryAction={{ label: "Learn More", href: "#features" }}
          theme="dark"
          backgroundPattern="dots"
          animated={false}
        />
      </div>

      {/* ── 12. Footer ───────────────────────────────────────────────────── */}
      <FooterSimple
        brandName="Pulse"
        copyright="&copy; 2026 Pulse Analytics, Inc. All rights reserved."
        legalLinks={[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
          { label: "Cookie Policy", href: "#" },
        ]}
      />
    </div>
  );
}
