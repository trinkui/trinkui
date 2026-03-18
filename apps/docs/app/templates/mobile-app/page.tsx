"use client";

import {
  NavbarSimple,
  HeroCentered,
  FeaturesGrid,
  FeaturesList,
  StatsGrid,
  TestimonialsGrid,
  CTACentered,
  FooterSimple,
} from "@trinkui/react";

export default function MobileAppTemplatePage() {
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
        brandName="Vault"
        links={[
          { label: "Features", href: "#features" },
          { label: "Reviews", href: "#reviews" },
          { label: "Pricing", href: "#pricing" },
        ]}
        primaryAction={{ label: "Download Free", href: "#download" }}
        sticky={true}
      />

      {/* ── 2. Hero ────────────────────────────────────────────────────────── */}
      <HeroCentered
        pill="4.8★ · 100K+ Downloads"
        title="Your finances, finally under control."
        subtitle="Track spending, set budgets, and reach your savings goals — all from one beautiful app."
        primaryAction={{ label: "Download on App Store", href: "#download" }}
        secondaryAction={{
          label: "Get on Google Play",
          href: "#download",
          variant: "outline",
        }}
        theme="dark"
        animated={false}
      />

      {/* ── 3. Features ────────────────────────────────────────────────────── */}
      <div id="features">
        <FeaturesGrid
          title="Everything you need in your pocket."
          columns={3}
          features={[
            {
              icon: <span aria-hidden="true">&#x1F4CA;</span>,
              title: "Instant Overview",
              description:
                "See your entire financial picture at a glance. Vault aggregates all your accounts, cards, and investments into one clean dashboard so you always know where you stand.",
            },
            {
              icon: <span aria-hidden="true">&#x1F514;</span>,
              title: "Smart Notifications",
              description:
                "AI-powered alerts warn you before you overspend. Get nudges when bills are due, when subscriptions renew, and when you're close to hitting a budget limit.",
            },
            {
              icon: <span aria-hidden="true">&#x1F512;</span>,
              title: "Bank-Grade Security",
              description:
                "Your data is protected with 256-bit encryption, biometric authentication, and zero-knowledge architecture. We never sell your information — ever.",
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 4. How It Works ────────────────────────────────────────────────── */}
      <FeaturesList
        title="Start in under a minute."
        features={[
          {
            icon: <span aria-hidden="true">&#x1F4F2;</span>,
            title: "Download the app",
            description:
              "Vault is free on the App Store and Google Play. Download it and create your account in seconds — no credit card required.",
          },
          {
            icon: <span aria-hidden="true">&#x1F517;</span>,
            title: "Connect your accounts",
            description:
              "Securely link your bank accounts, credit cards, and investment portfolios. Vault supports 10,000+ financial institutions worldwide.",
          },
          {
            icon: <span aria-hidden="true">&#x1F4B0;</span>,
            title: "Start saving",
            description:
              "Set budgets, track goals, and watch your savings grow. Vault's AI learns your spending patterns and suggests ways to save more every month.",
          },
        ]}
        animated={false}
      />

      {/* ── 5. Stats ───────────────────────────────────────────────────────── */}
      <StatsGrid
        stats={[
          {
            value: "100K+",
            label: "Users",
            description: "People managing their money with Vault",
          },
          {
            value: "4.8★",
            label: "Rating",
            description: "Average across App Store and Google Play",
          },
          {
            value: "$2.4M",
            label: "Saved by Users",
            description: "Total savings tracked in the last year",
          },
          {
            value: "256-bit",
            label: "Encryption",
            description: "Bank-grade security on every transaction",
          },
        ]}
        animated={false}
      />

      {/* ── 6. Testimonials ────────────────────────────────────────────────── */}
      <div id="reviews">
        <TestimonialsGrid
          title="What our users are saying"
          testimonials={[
            {
              quote:
                "Vault completely changed how I think about money. I used to dread checking my bank account — now I actually look forward to it. I've saved over $3,000 in six months without feeling like I'm sacrificing anything.",
              author: "Jessica M.",
              role: "Freelance Designer",
              rating: 5,
            },
            {
              quote:
                "The smart notifications are a game-changer. Last week Vault caught a subscription I forgot about that was charging me $14.99/month. It paid for itself on day one.",
              author: "David K.",
              role: "Software Engineer",
              rating: 5,
            },
            {
              quote:
                "I've tried every budgeting app out there. Vault is the only one that stuck. The interface is gorgeous, it's incredibly fast, and the AI suggestions actually make sense for my lifestyle.",
              author: "Priya R.",
              role: "Marketing Manager",
              rating: 5,
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 7. CTA ─────────────────────────────────────────────────────────── */}
      <div id="pricing">
        <CTACentered
          title="Your wallet will thank you."
          subtitle="Free to download. No ads. Premium from $4.99/mo."
          primaryAction={{ label: "Download Free", href: "#download" }}
          secondaryAction={{
            label: "Learn More",
            href: "#features",
            variant: "outline",
          }}
          theme="dark"
          backgroundPattern="dots"
          animated={false}
        />
      </div>

      {/* ── 8. Footer ──────────────────────────────────────────────────────── */}
      <FooterSimple
        brandName="Vault"
        copyright="&copy; 2026 Vault Finance, Inc. All rights reserved."
        legalLinks={[
          { label: "Privacy", href: "#" },
          { label: "Terms", href: "#" },
        ]}
      />
    </div>
  );
}
