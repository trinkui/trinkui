"use client";

import {
  NavbarSimple,
  HeroSplit,
  FeaturesGrid,
  HeroCentered,
  StatsGrid,
  LogoCloud,
  CTACentered,
  FooterColumns,
} from "@trinkui/react";

export default function StartupTemplatePage() {
  return (
    <div className="min-h-screen">
      {/* Back to Docs floating link */}
      <a
        href="/"
        className="fixed top-4 left-4 z-50 rounded-full bg-[rgb(var(--trinkui-surface))] px-4 py-2 text-xs font-medium text-[rgb(var(--trinkui-muted))] border border-[rgb(var(--trinkui-border))] hover:text-[rgb(var(--trinkui-fg))] transition-colors"
      >
        Back to Docs
      </a>

      {/* ── 1. Navbar ──────────────────────────────────────────────────────── */}
      <NavbarSimple
        brandName="Quantum"
        links={[
          { label: "Mission", href: "#mission" },
          { label: "Product", href: "#product" },
          { label: "Team", href: "#team" },
          { label: "Investors", href: "#investors" },
          { label: "Blog", href: "#blog" },
        ]}
        primaryAction={{ label: "Request Access", href: "#cta" }}
        sticky={true}
        blur={true}
      />

      {/* ── 2. Hero ────────────────────────────────────────────────────────── */}
      <HeroSplit
        pill="Backed by Y Combinator"
        title="We're reimagining how healthcare logistics works."
        subtitle="The healthcare supply chain is broken. $4.2 trillion is lost annually to inefficiency. Quantum fixes this with AI-powered logistics that cut costs by 40% and delivery times by 60%."
        primaryAction={{ label: "Request Early Access", href: "#cta" }}
        secondaryAction={{
          label: "Read Our Story",
          href: "#mission",
          variant: "outline",
        }}
        image={{ src: "", alt: "" }}
        animated={false}
      />

      {/* ── 3. Problem ─────────────────────────────────────────────────────── */}
      <div id="mission">
        <FeaturesGrid
          title="Healthcare logistics is stuck in the past."
          columns={3}
          features={[
            {
              icon: <span aria-hidden="true">&#x1F4B8;</span>,
              title: "$4.2T Lost Annually",
              description:
                "The global healthcare supply chain hemorrhages trillions every year through waste, misrouting, and expired inventory. Most systems still rely on spreadsheets and phone calls.",
            },
            {
              icon: <span aria-hidden="true">&#x1F3E5;</span>,
              title: "87% Report Supply Issues",
              description:
                "Nearly nine out of ten hospitals report critical supply shortages at least once per quarter. When supplies don't arrive on time, patient outcomes suffer.",
            },
            {
              icon: <span aria-hidden="true">&#x23F3;</span>,
              title: "20 Years Without Innovation",
              description:
                "The last meaningful innovation in healthcare logistics was two decades ago. While every other industry has modernized, healthcare supply chains remain stuck in the past.",
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 4. Solution ────────────────────────────────────────────────────── */}
      <div id="product">
        <HeroCentered
          title="There's a better way."
          subtitle="Quantum's AI platform optimizes the entire healthcare supply chain — from manufacturer to patient bedside."
          primaryAction={{ label: "See How It Works", href: "#cta" }}
          animated={false}
        />
      </div>

      {/* ── 5. Traction ────────────────────────────────────────────────────── */}
      <StatsGrid
        title="Traction that speaks for itself"
        stats={[
          {
            value: "$1.2M",
            label: "ARR",
            description: "Annual recurring revenue and growing fast",
          },
          {
            value: "340",
            label: "Customers",
            description: "Hospitals and clinics on the platform",
          },
          {
            value: "94%",
            label: "Retention",
            description: "Net revenue retention rate",
          },
          {
            value: "12x",
            label: "YoY Growth",
            description: "Year-over-year revenue growth",
          },
        ]}
        animated={false}
      />

      {/* ── 6. Team ────────────────────────────────────────────────────────── */}
      <div id="team">
        <FeaturesGrid
          title="Built by people who've been there."
          columns={4}
          features={[
            {
              icon: <span aria-hidden="true">&#x1F468;&#x200D;&#x1F4BC;</span>,
              title: "Alex Rivera, CEO",
              description:
                "Ex-Google. Led healthcare initiatives at Google Health. 10+ years building enterprise platforms that scale to millions of users.",
            },
            {
              icon: <span aria-hidden="true">&#x1F469;&#x200D;&#x1F4BB;</span>,
              title: "Maria Chen, CTO",
              description:
                "Ex-Stripe. Architected payment infrastructure processing $50B+ annually. Expert in building reliable, high-throughput distributed systems.",
            },
            {
              icon: <span aria-hidden="true">&#x1F9D1;&#x200D;&#x1F3A8;</span>,
              title: "James Okafor, VP Product",
              description:
                "Ex-Amazon. Led product for Amazon Pharmacy's logistics platform. Deep expertise in supply chain optimization and last-mile delivery.",
            },
            {
              icon: <span aria-hidden="true">&#x1F9E0;</span>,
              title: "Dr. Sarah Kim, Head of AI",
              description:
                "Ex-DeepMind. Published researcher in reinforcement learning for logistics optimization. PhD in Computer Science from Stanford.",
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 7. Investors ───────────────────────────────────────────────────── */}
      <div id="investors">
        <LogoCloud
          label="Backed by the best"
          logos={[]}
          animated={false}
        />
      </div>

      {/* ── 8. CTA ─────────────────────────────────────────────────────────── */}
      <div id="cta">
        <CTACentered
          title="The future of healthcare logistics is being built right now."
          subtitle="Join 340 hospitals already transforming their supply chain."
          primaryAction={{ label: "Request Early Access", href: "#cta" }}
          secondaryAction={{
            label: "Investor Deck",
            href: "#",
            variant: "outline",
          }}
          theme="dark"
          backgroundPattern="dots"
          animated={false}
        />
      </div>

      {/* ── 9. Footer ──────────────────────────────────────────────────────── */}
      <FooterColumns
        brandName="Quantum"
        description="AI-powered healthcare logistics. Cutting costs by 40% and delivery times by 60% for hospitals worldwide."
        linkGroups={[
          {
            title: "Product",
            links: [
              { label: "Platform", href: "#product" },
              { label: "Integrations", href: "#" },
              { label: "Security", href: "#" },
              { label: "Changelog", href: "#" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About", href: "#mission" },
              { label: "Team", href: "#team" },
              { label: "Blog", href: "#blog" },
              { label: "Press", href: "#" },
            ],
          },
          {
            title: "Careers",
            links: [
              { label: "Open Roles", href: "#" },
              { label: "Engineering", href: "#" },
              { label: "Product", href: "#" },
              { label: "Culture", href: "#" },
            ],
          },
          {
            title: "Legal",
            links: [
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
              { label: "HIPAA Compliance", href: "#" },
              { label: "Security", href: "#" },
            ],
          },
        ]}
        copyright="&copy; 2026 Quantum Health, Inc. All rights reserved."
        legalLinks={[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
          { label: "HIPAA", href: "#" },
        ]}
      />
    </div>
  );
}
