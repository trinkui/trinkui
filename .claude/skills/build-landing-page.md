---
name: build-landing-page
description: Build a complete landing page using @trinkui/react section components
---

# Build a Landing Page with trink-ui

## Available Section Components

| Component | Variants | Use Case |
|-----------|----------|----------|
| `NavbarSimple` | sticky, blur, bordered | Top navigation |
| `HeroCentered` | — | Centered hero with CTA |
| `HeroSplit` | — | Two-column hero |
| `HeroMinimal` | — | Minimal hero |
| `FeaturesGrid` | — | 3-column feature cards |
| `FeaturesAlternating` | — | Left-right alternating |
| `FeaturesList` | — | Vertical feature list |
| `PricingCards` | — | Pricing tier cards |
| `PricingTable` | — | Feature comparison table |
| `TestimonialsGrid` | — | Multiple testimonials |
| `TestimonialsFeatured` | — | Single large testimonial |
| `CTABanner` | — | Full-width CTA |
| `CTACentered` | — | Centered CTA |
| `CTASplit` | — | Two-column CTA |
| `StatsGrid` | — | Metric numbers |
| `StatsBanner` | — | Inline stats bar |
| `FAQAccordion` | — | Expandable FAQ |
| `FAQGrid` | — | Grid layout FAQ |
| `LogoCloud` | marquee | Company logos |
| `NewsletterBanner` | — | Email signup |
| `NewsletterSplit` | — | Two-column signup |
| `FooterSimple` | — | Minimal footer |
| `FooterColumns` | — | Multi-column footer |

## Complete Landing Page Template

```tsx
"use client";

import {
  NavbarSimple,
  HeroCentered,
  LogoCloud,
  FeaturesGrid,
  StatsGrid,
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
        brandName="ProductName"
        links={[
          { label: "Features", href: "#features" },
          { label: "Pricing", href: "#pricing" },
          { label: "FAQ", href: "#faq" },
        ]}
        primaryAction={{ label: "Get Started", href: "/signup" }}
        secondaryAction={{ label: "Log In", href: "/login" }}
        sticky
        blur
      />

      <HeroCentered
        pill="Just Launched"
        title="Your compelling headline here"
        subtitle="A clear description of your product's value proposition."
        primaryAction={{ label: "Start Free Trial", href: "/signup" }}
        secondaryAction={{ label: "Watch Demo", href: "#demo" }}
        theme="dark"
      />

      <LogoCloud label="Trusted by leading companies" logos={[]} />

      <FeaturesGrid
        pill="Features"
        title="Everything you need"
        subtitle="Built for modern teams."
        features={[
          { icon: "⚡", title: "Feature 1", description: "Description" },
          { icon: "🔒", title: "Feature 2", description: "Description" },
          { icon: "📊", title: "Feature 3", description: "Description" },
        ]}
      />

      <StatsGrid
        stats={[
          { value: "10K+", label: "Users" },
          { value: "99.9%", label: "Uptime" },
          { value: "4.9/5", label: "Rating" },
          { value: "<1s", label: "Load Time" },
        ]}
      />

      <PricingCards
        title="Simple pricing"
        subtitle="No hidden fees."
        tiers={[
          {
            name: "Free",
            price: "$0",
            description: "For individuals",
            features: ["3 projects", "Basic support"],
          },
          {
            name: "Pro",
            price: "$29",
            description: "For teams",
            features: ["Unlimited projects", "Priority support", "Analytics"],
            highlighted: true,
          },
          {
            name: "Enterprise",
            price: "Custom",
            description: "For organizations",
            features: ["Everything in Pro", "SSO", "Dedicated manager"],
          },
        ]}
      />

      <TestimonialsGrid
        title="What people say"
        testimonials={[
          { quote: "Amazing product!", author: "Jane D.", role: "CEO" },
          { quote: "Saved us weeks.", author: "John S.", role: "CTO" },
          { quote: "Best in class.", author: "Sarah K.", role: "VP Eng" },
        ]}
      />

      <FAQAccordion
        title="Frequently asked questions"
        items={[
          { question: "Is there a free plan?", answer: "Yes, our free plan includes..." },
          { question: "Can I cancel anytime?", answer: "Absolutely. No lock-in..." },
        ]}
      />

      <CTACentered
        title="Ready to get started?"
        subtitle="Join thousands of teams."
        primaryAction={{ label: "Start Free", href: "/signup" }}
        secondaryAction={{ label: "Contact Sales", href: "/contact" }}
        theme="dark"
      />

      <FooterColumns
        brandName="ProductName"
        description="Your product tagline."
        linkGroups={[
          { title: "Product", links: [{ label: "Features", href: "#" }] },
          { title: "Company", links: [{ label: "About", href: "#" }] },
          { title: "Legal", links: [{ label: "Privacy", href: "#" }] },
        ]}
        copyright="© 2026 ProductName"
      />
    </main>
  );
}
```

## Tips

- Use `theme="dark"` on Hero and CTA sections for contrast
- Use `animated={false}` to disable scroll animations
- Use `pill` prop for small badges above headings
- Sections stack vertically — order them logically
- Wrap in `"use client"` when using animated sections
