"use client";

import {
  NavbarSimple,
  HeroCentered,
  StatsGrid,
  FeaturesGrid,
  PricingTable,
  PricingCards,
  TestimonialsGrid,
  CTACentered,
  FooterColumns,
} from "@trinkui/react";

export default function AIProductTemplate() {
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
        brandName="NeuralAPI"
        links={[
          { label: "Product", href: "#product" },
          { label: "API Docs", href: "#" },
          { label: "Pricing", href: "#pricing" },
          { label: "Research", href: "#" },
          { label: "Blog", href: "#" },
        ]}
        primaryAction={{ label: "Get API Key", href: "#" }}
        secondaryAction={{ label: "Sign In", href: "#", variant: "ghost" }}
        sticky
        blur
      />

      {/* ── 2. Hero ──────────────────────────────────────────────────────── */}
      <HeroCentered
        pill="New: GPT-5 Support"
        title="Intelligence you can ship today."
        subtitle="The most powerful AI API on the market. One endpoint, unlimited possibilities. From text generation to image analysis — build smarter products in minutes."
        primaryAction={{ label: "Get Free API Key", href: "#" }}
        secondaryAction={{
          label: "Try in Playground",
          href: "#",
          variant: "outline",
        }}
        theme="dark"
        animated={false}
      />

      {/* ── 3. Stats ─────────────────────────────────────────────────────── */}
      <StatsGrid
        title="Trusted by developers worldwide"
        stats={[
          {
            value: "500ms",
            label: "Avg Latency",
            description: "Median response time across all models",
          },
          {
            value: "99.99%",
            label: "Uptime",
            description: "Guaranteed SLA for all paid plans",
          },
          {
            value: "10B+",
            label: "Requests Served",
            description: "And counting — every single day",
          },
        ]}
        animated={false}
      />

      {/* ── 4. Use Cases ─────────────────────────────────────────────────── */}
      <div id="product">
        <FeaturesGrid
          pill="Use Cases"
          title="One API. Endless use cases."
          subtitle="Whether you are building a chatbot, analyzing documents, or generating images — NeuralAPI has a model for that."
          columns={3}
          features={[
            {
              icon: <span aria-hidden="true">&#x270D;&#xFE0F;</span>,
              title: "Content Generation",
              description:
                "Generate blog posts, marketing copy, product descriptions, and social media content at scale. Fine-tune tone, style, and length with simple parameters.",
            },
            {
              icon: <span aria-hidden="true">&#x1F4BB;</span>,
              title: "Code Assistant",
              description:
                "Autocomplete, refactor, explain, and debug code across 40+ programming languages. Integrate directly into your IDE or CI/CD pipeline.",
            },
            {
              icon: <span aria-hidden="true">&#x1F4CA;</span>,
              title: "Data Analysis",
              description:
                "Extract insights from structured and unstructured data. Summarize reports, classify documents, and detect anomalies with a single API call.",
            },
            {
              icon: <span aria-hidden="true">&#x1F441;&#xFE0F;</span>,
              title: "Image Understanding",
              description:
                "Analyze, describe, and extract information from images. OCR, object detection, visual Q&A, and content moderation — all through one endpoint.",
            },
            {
              icon: <span aria-hidden="true">&#x1F4AC;</span>,
              title: "Customer Support",
              description:
                "Build intelligent chatbots that understand context, resolve tickets autonomously, and escalate to humans when needed. Reduce support costs by 60%.",
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 5. Technical Specs (Model Comparison) ────────────────────────── */}
      <PricingTable
        pill="Models"
        title="Choose the right model for your workload"
        subtitle="Three tiers of intelligence. All accessible through a single, unified API endpoint."
        tiers={[
          {
            name: "Standard",
            price: "$0.002",
            period: "/ 1K tokens",
            description: "32K context window. Fast and cost-effective.",
            features: [
              { label: "32K context window", included: true },
              { label: "Fast inference (200ms avg)", included: true },
              { label: "Text generation", included: true },
              { label: "Code completion", included: true },
              { label: "Extended context (128K)", included: false },
              { label: "Image understanding", included: false },
              { label: "Fine-tuning support", included: false },
            ],
            cta: { label: "Get Started", href: "#" },
          },
          {
            name: "Advanced",
            price: "$0.008",
            period: "/ 1K tokens",
            description: "128K context window. Maximum reasoning.",
            popular: true,
            popularLabel: "Most popular",
            features: [
              { label: "128K context window", included: true },
              { label: "Fast inference (350ms avg)", included: true },
              { label: "Text generation", included: true },
              { label: "Code completion", included: true },
              { label: "Extended context (128K)", included: true },
              { label: "Image understanding", included: false },
              { label: "Fine-tuning support", included: true },
            ],
            cta: { label: "Get Started", href: "#" },
          },
          {
            name: "Vision",
            price: "$0.010",
            period: "/ 1K tokens",
            description: "32K text + image input. Multimodal.",
            features: [
              { label: "32K context window + images", included: true },
              { label: "Fast inference (500ms avg)", included: true },
              { label: "Text generation", included: true },
              { label: "Code completion", included: true },
              { label: "Extended context (128K)", included: false },
              { label: "Image understanding", included: true },
              { label: "Fine-tuning support", included: true },
            ],
            cta: { label: "Get Started", href: "#" },
          },
        ]}
        animated={false}
      />

      {/* ── 6. Security ──────────────────────────────────────────────────── */}
      <FeaturesGrid
        pill="Security"
        title="Enterprise-grade security."
        subtitle="We take security as seriously as you do. NeuralAPI is built to meet the most demanding compliance requirements."
        columns={3}
        features={[
          {
            icon: <span aria-hidden="true">&#x1F6E1;&#xFE0F;</span>,
            title: "SOC 2 Type II",
            description:
              "Independently audited and certified. Our infrastructure, processes, and controls meet the highest industry standards for security and availability.",
          },
          {
            icon: <span aria-hidden="true">&#x1F310;</span>,
            title: "GDPR Compliant",
            description:
              "Full compliance with EU data protection regulations. Data processing agreements, right to erasure, and data portability included for all plans.",
          },
          {
            icon: <span aria-hidden="true">&#x1F512;</span>,
            title: "End-to-end Encryption",
            description:
              "All data encrypted at rest (AES-256) and in transit (TLS 1.3). API keys are hashed and never stored in plaintext. Zero-knowledge architecture.",
          },
          {
            icon: <span aria-hidden="true">&#x1F3E2;</span>,
            title: "Data Residency",
            description:
              "Choose where your data is processed and stored. Available regions include US, EU, APAC, and custom deployments for enterprise customers.",
          },
          {
            icon: <span aria-hidden="true">&#x1F6AB;</span>,
            title: "No Training on Your Data",
            description:
              "Your API inputs and outputs are never used to train our models. Period. Your data is yours — we process it and forget it.",
          },
          {
            icon: <span aria-hidden="true">&#x2705;</span>,
            title: "99.99% Uptime SLA",
            description:
              "Guaranteed uptime backed by financial credits. Redundant infrastructure across multiple regions with automatic failover and zero-downtime deployments.",
          },
        ]}
        theme="dark"
        animated={false}
      />

      {/* ── 7. Pricing ───────────────────────────────────────────────────── */}
      <div id="pricing">
        <PricingCards
          pill="Pricing"
          title="Start free. Scale without limits."
          subtitle="No credit card required. Upgrade when you need more power."
          tiers={[
            {
              name: "Free",
              price: "$0",
              period: "/month",
              description: "For developers exploring the API.",
              features: [
                { label: "1,000 requests per month", included: true },
                { label: "Standard model access", included: true },
                { label: "Community support", included: true },
                { label: "Playground access", included: true },
                { label: "Advanced + Vision models", included: false },
                { label: "Fine-tuning", included: false },
              ],
              cta: { label: "Get Free API Key", href: "#" },
            },
            {
              name: "Pro",
              price: "$49",
              period: "/month",
              description: "For teams shipping AI-powered products.",
              popular: true,
              popularLabel: "Most popular",
              features: [
                { label: "100,000 requests per month", included: true },
                { label: "All models (Standard, Advanced, Vision)", included: true },
                { label: "Priority support", included: true },
                { label: "Fine-tuning (5 models)", included: true },
                { label: "Webhook integrations", included: true },
                { label: "Usage analytics dashboard", included: true },
              ],
              cta: { label: "Start Free Trial", href: "#" },
            },
            {
              name: "Scale",
              price: "Custom",
              period: "",
              description: "For enterprises with mission-critical AI.",
              features: [
                { label: "10,000,000+ requests per month", included: true },
                { label: "All models + custom fine-tuning", included: true },
                { label: "Dedicated account manager", included: true },
                { label: "Custom SLA (99.99%+)", included: true },
                { label: "Data residency + on-premise", included: true },
                { label: "SSO / SAML + audit logs", included: true },
              ],
              cta: { label: "Contact Sales", href: "#" },
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 8. Testimonials ──────────────────────────────────────────────── */}
      <TestimonialsGrid
        pill="Developers Love Us"
        title="Trusted by builders shipping real products"
        subtitle="From solo hackers to Fortune 500 engineering teams — hear why they chose NeuralAPI."
        testimonials={[
          {
            quote:
              "We migrated from OpenAI to NeuralAPI in a single afternoon. The unified endpoint simplified our codebase, and latency dropped by 40%. Our AI features went from flaky to rock-solid overnight.",
            author: "James Park",
            role: "Lead Engineer at Synthex",
            rating: 5,
          },
          {
            quote:
              "The fine-tuning workflow is absurdly good. We uploaded our support transcripts, ran a training job, and had a custom model that resolved 73% of tickets autonomously within a week.",
            author: "Amara Osei",
            role: "CTO at HelpFlow",
            rating: 5,
          },
          {
            quote:
              "I built a full content generation SaaS on NeuralAPI in 3 weeks. The documentation is clear, the models are fast, and the free tier was generous enough to validate my idea before spending a dollar.",
            author: "Luca Bianchi",
            role: "Indie Developer & Founder of WriteKit",
            rating: 5,
          },
        ]}
        animated={false}
      />

      {/* ── 9. CTA ───────────────────────────────────────────────────────── */}
      <CTACentered
        title="Start building with AI in 30 seconds."
        subtitle="1,000 free requests per month. No credit card required. Ship today."
        primaryAction={{ label: "Get Free API Key", href: "#" }}
        secondaryAction={{ label: "Read the Docs", href: "#", variant: "outline" }}
        theme="dark"
        backgroundPattern="dots"
        animated={false}
      />

      {/* ── 10. Footer ───────────────────────────────────────────────────── */}
      <FooterColumns
        brandName="NeuralAPI"
        description="The most powerful AI API on the market. One endpoint, unlimited possibilities. Build smarter products in minutes."
        linkGroups={[
          {
            title: "Product",
            links: [
              { label: "Models", href: "#" },
              { label: "Pricing", href: "#pricing" },
              { label: "Playground", href: "#" },
              { label: "Changelog", href: "#" },
              { label: "Status", href: "#" },
            ],
          },
          {
            title: "Developers",
            links: [
              { label: "Documentation", href: "#" },
              { label: "API Reference", href: "#" },
              { label: "SDKs & Libraries", href: "#" },
              { label: "Examples", href: "#" },
              { label: "Community", href: "#" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About", href: "#" },
              { label: "Research", href: "#" },
              { label: "Blog", href: "#" },
              { label: "Careers", href: "#" },
              { label: "Contact", href: "#" },
            ],
          },
          {
            title: "Legal",
            links: [
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
              { label: "Acceptable Use", href: "#" },
              { label: "DPA", href: "#" },
              { label: "Cookie Policy", href: "#" },
            ],
          },
        ]}
        copyright="&copy; 2026 NeuralAPI, Inc. All rights reserved."
        legalLinks={[
          { label: "Privacy", href: "#" },
          { label: "Terms", href: "#" },
          { label: "Security", href: "#" },
        ]}
      />
    </div>
  );
}
