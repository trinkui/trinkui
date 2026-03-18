"use client";

import {
  NavbarSimple,
  HeroCentered,
  LogoCloud,
  FeaturesGrid,
  FeaturesAlternating,
  StatsGrid,
  TestimonialsGrid,
  PricingCards,
  FAQAccordion,
  CTACentered,
  FooterColumns,
} from "@trinkui/react";

export default function SaaSTemplatePage() {
  return (
    <div className="relative min-h-screen">
      {/* ── Back to docs floating button ───────────────────────────────────── */}
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
        Back to Docs
      </a>

      {/* ── 1. Navbar ──────────────────────────────────────────────────────── */}
      <NavbarSimple
        brandName="FlowSync"
        links={[
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "Docs", href: "#" },
          { label: "Blog", href: "#" },
          { label: "Changelog", href: "#" },
        ]}
        primaryAction={{ label: "Start Free Trial", href: "#pricing" }}
        secondaryAction={{ label: "Log In", href: "#", variant: "ghost" }}
        sticky
        blur
      />

      {/* ── 2. Hero ────────────────────────────────────────────────────────── */}
      <HeroCentered
        pill="New: AI-powered insights"
        title="Stop juggling tools. Start shipping products."
        subtitle="The all-in-one platform that replaces your project management, communication, and analytics stack. Trusted by 5,000+ teams worldwide."
        primaryAction={{ label: "Start Free — No Credit Card", href: "#pricing" }}
        secondaryAction={{ label: "Watch Demo (2 min)", href: "#", variant: "outline" }}
        theme="dark"
        animated={false}
      />

      {/* ── 3. Logo Cloud ──────────────────────────────────────────────────── */}
      <LogoCloud
        label="Trusted by industry leaders"
        logos={[]}
        animated={false}
      />

      {/* ── 4. Feature Highlights (Grid) ───────────────────────────────────── */}
      <div id="features">
        <FeaturesGrid
          pill="Features"
          title="Everything you need. Nothing you don't."
          subtitle="Replace your scattered toolset with one unified platform that your whole team will love."
          columns={3}
          features={[
            {
              icon: <span aria-hidden="true">&#x26A1;</span>,
              title: "Lightning-fast workflows",
              description:
                "Automate repetitive tasks with custom workflow rules. From ticket creation to deployment, FlowSync handles the busywork so your team can focus on building great products.",
            },
            {
              icon: <span aria-hidden="true">&#x1F4CA;</span>,
              title: "Real-time analytics",
              description:
                "Track velocity, burndown, cycle time, and custom metrics with beautiful dashboards. Export reports or schedule automated email digests to keep stakeholders informed.",
            },
            {
              icon: <span aria-hidden="true">&#x1F4AC;</span>,
              title: "Seamless collaboration",
              description:
                "Threaded comments, @mentions, real-time document editing, and video huddles — all without leaving your project board. Keep your entire team aligned, everywhere.",
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 5. Feature Deep Dive (Alternating) ─────────────────────────────── */}
      <FeaturesAlternating
        pill="How it works"
        title="Powerful features, explained"
        subtitle="Dive deeper into the capabilities that make FlowSync the platform of choice for high-performing teams."
        features={[
          {
            icon: <span aria-hidden="true">&#x1F504;</span>,
            title: "Workflows that adapt to you",
            description:
              "Build custom automation pipelines with our visual workflow editor. Set triggers, conditions, and actions — move tickets automatically, notify the right people, and eliminate manual status updates. Supports branching logic, scheduled triggers, and webhooks for full flexibility.",
          },
          {
            icon: <span aria-hidden="true">&#x1F4C8;</span>,
            title: "Analytics that drive decisions",
            description:
              "Go beyond vanity metrics. FlowSync tracks cycle time, lead time, throughput, and deployment frequency out of the box. Build custom dashboards, set alerts for anomalies, and generate executive-ready reports in one click. Our AI highlights bottlenecks before they slow you down.",
          },
          {
            icon: <span aria-hidden="true">&#x1F91D;</span>,
            title: "Collaboration without context switching",
            description:
              "Every task is a living document. Attach designs from Figma, link PRs from GitHub, embed Loom recordings, and discuss in-line — all in one place. Real-time presence indicators show who is working on what, and smart notifications ensure you never miss what matters.",
          },
        ]}
        animated={false}
      />

      {/* ── 6. Stats Grid ──────────────────────────────────────────────────── */}
      <StatsGrid
        title="Trusted by high-performing teams worldwide"
        stats={[
          {
            value: "5,000+",
            label: "Teams",
            description: "Active teams across 80+ countries",
          },
          {
            value: "99.9%",
            label: "Uptime",
            description: "Guaranteed SLA for all paid plans",
          },
          {
            value: "12hrs",
            label: "Saved / week",
            description: "Average time saved per team member",
          },
          {
            value: "4.9/5",
            label: "G2 Rating",
            description: "Based on 1,200+ verified reviews",
          },
        ]}
        animated={false}
      />

      {/* ── 7. Testimonials Grid ───────────────────────────────────────────── */}
      <div id="testimonials">
        <TestimonialsGrid
          pill="Testimonials"
          title="Loved by teams everywhere"
          subtitle="See what engineering leaders and product managers have to say about FlowSync."
          testimonials={[
            {
              quote:
                "FlowSync replaced three separate tools for us. Our sprint velocity increased by 35% in the first quarter, and the AI estimates are scarily accurate. It's like having an extra engineering manager on the team.",
              author: "Sarah Chen",
              role: "VP of Engineering, Acme Corp",
              rating: 5,
            },
            {
              quote:
                "The integrations are phenomenal. We connected GitHub, Slack, and Figma in minutes. Now our designers and developers are finally on the same page — literally. Context switching dropped by half.",
              author: "Marcus Johnson",
              role: "Product Manager, Nextera",
              rating: 5,
            },
            {
              quote:
                "We evaluated six project management tools before choosing FlowSync. The automation engine alone saves our team 10+ hours per week. Worth every penny of the Pro plan.",
              author: "Emily Rodriguez",
              role: "CTO, Launchpad Studios",
              rating: 5,
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 8. Pricing Cards ───────────────────────────────────────────────── */}
      <div id="pricing">
        <PricingCards
          pill="Pricing"
          title="Simple, transparent pricing"
          subtitle="Start free and scale as you grow. No hidden fees, no surprises."
          tiers={[
            {
              name: "Free",
              price: "$0",
              period: "per month",
              description: "For individuals and small side projects getting started.",
              features: [
                { label: "Up to 3 projects", included: true },
                { label: "Basic analytics dashboard", included: true },
                { label: "Community support", included: true },
                { label: "5 automation rules", included: true },
                { label: "Custom fields", included: false },
                { label: "Advanced integrations", included: false },
                { label: "Priority support", included: false },
              ],
              cta: { label: "Get started free", href: "#" },
            },
            {
              name: "Pro",
              price: "$29",
              period: "per user / month",
              description: "For growing teams that need more power and flexibility.",
              popular: true,
              popularLabel: "Most popular",
              features: [
                { label: "Unlimited projects", included: true },
                { label: "Advanced analytics & reports", included: true },
                { label: "Priority email support", included: true },
                { label: "Unlimited automations", included: true },
                { label: "Custom fields & views", included: true },
                { label: "150+ integrations", included: true },
                { label: "AI-powered insights", included: true },
              ],
              cta: { label: "Start free trial", href: "#" },
            },
            {
              name: "Enterprise",
              price: "Custom",
              period: "",
              description: "For organizations with advanced security and compliance needs.",
              features: [
                { label: "Everything in Pro", included: true },
                { label: "SSO / SAML authentication", included: true },
                { label: "Dedicated account manager", included: true },
                { label: "Custom SLA (99.99%)", included: true },
                { label: "Audit logs & compliance", included: true },
                { label: "On-premise deployment option", included: true },
                { label: "Custom onboarding & training", included: true },
              ],
              cta: { label: "Contact sales", href: "#" },
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 9. FAQ Accordion ───────────────────────────────────────────────── */}
      <div id="faq">
        <FAQAccordion
          pill="FAQ"
          title="Frequently asked questions"
          subtitle="Everything you need to know about FlowSync. Can't find what you're looking for? Reach out to our support team."
          items={[
            {
              question: "What's included in the free plan?",
              answer:
                "The free plan includes up to 3 projects, basic analytics, 5 automation rules, and community support. It's perfect for individuals or small teams exploring FlowSync. No credit card required to sign up.",
            },
            {
              question: "Can I switch plans at any time?",
              answer:
                "Absolutely. You can upgrade or downgrade your plan at any time from your account settings. When upgrading, you'll be charged a prorated amount for the remainder of your billing cycle. Downgrades take effect at the start of your next billing period.",
            },
            {
              question: "What is your refund policy?",
              answer:
                "We offer a full refund within the first 30 days of any paid plan — no questions asked. After 30 days, you can cancel at any time and your access continues until the end of your current billing period.",
            },
            {
              question: "How do you handle data security?",
              answer:
                "Security is our top priority. FlowSync is SOC 2 Type II certified, uses AES-256 encryption at rest and TLS 1.3 in transit, and undergoes regular third-party penetration testing. All data is stored in ISO 27001-certified data centers with automatic backups.",
            },
            {
              question: "Do you support SSO and SAML?",
              answer:
                "Yes. SSO via SAML 2.0 and OpenID Connect is available on the Enterprise plan. We support all major identity providers including Okta, Azure AD, Google Workspace, and OneLogin. Setup takes less than 15 minutes.",
            },
            {
              question: "What integrations are available?",
              answer:
                "FlowSync integrates with 150+ tools including GitHub, GitLab, Bitbucket, Slack, Microsoft Teams, Figma, Jira (for migration), Linear, Zapier, and many more. We also offer a full REST API and webhooks for custom integrations.",
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 10. Final CTA ──────────────────────────────────────────────────── */}
      <CTACentered
        title="Ready to transform how your team works?"
        subtitle="Join 5,000+ teams already shipping faster with FlowSync. Start free today — no credit card, no commitment."
        primaryAction={{ label: "Start Free Trial", href: "#pricing" }}
        secondaryAction={{ label: "Schedule Demo", href: "#", variant: "outline" }}
        theme="dark"
        backgroundPattern="dots"
        animated={false}
      />

      {/* ── 11. Footer ─────────────────────────────────────────────────────── */}
      <FooterColumns
        brandName="FlowSync"
        description="The all-in-one platform that replaces your project management, communication, and analytics stack. Built for teams that ship."
        linkGroups={[
          {
            title: "Product",
            links: [
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" },
              { label: "Integrations", href: "#" },
              { label: "Changelog", href: "#" },
              { label: "Roadmap", href: "#" },
            ],
          },
          {
            title: "Resources",
            links: [
              { label: "Documentation", href: "#" },
              { label: "API Reference", href: "#" },
              { label: "Blog", href: "#" },
              { label: "Community", href: "#" },
              { label: "Status", href: "#" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Press", href: "#" },
              { label: "Contact", href: "#" },
              { label: "Partners", href: "#" },
            ],
          },
          {
            title: "Legal",
            links: [
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
              { label: "Cookie Policy", href: "#" },
              { label: "GDPR", href: "#" },
              { label: "Security", href: "#" },
            ],
          },
        ]}
        copyright="&copy; 2026 FlowSync, Inc. All rights reserved."
        legalLinks={[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
          { label: "Cookie Policy", href: "#" },
        ]}
      />
    </div>
  );
}
