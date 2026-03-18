"use client";

import {
  NavbarSimple,
  HeroSplit,
  FeaturesGrid,
  FAQAccordion,
  StatsGrid,
  StatsBanner,
  TestimonialsFeatured,
  LogoCloud,
  CTASplit,
  FooterColumns,
} from "@trinkui/react";

export default function AgencyTemplatePage() {
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
        brandName="Nexus Studio"
        links={[
          { label: "Work", href: "#work" },
          { label: "Services", href: "#services" },
          { label: "About", href: "#about" },
          { label: "Careers", href: "#" },
          { label: "Blog", href: "#" },
        ]}
        primaryAction={{ label: "Let's Talk", href: "#contact" }}
        sticky
        blur
      />

      {/* ── 2. Hero (Split) ────────────────────────────────────────────────── */}
      <HeroSplit
        title="We don't just build websites. We build experiences people remember."
        subtitle="A full-service digital agency specializing in brand strategy, product design, and web development for ambitious companies. From startups to Fortune 500 — we craft digital experiences that move the needle."
        primaryAction={{ label: "View Our Work", href: "#work" }}
        secondaryAction={{ label: "Start a Project", href: "#contact", variant: "outline" }}
        image={{ src: "", alt: "Nexus Studio creative workspace" }}
        animated={false}
      />

      {/* ── 3. Portfolio (FeaturesGrid as project cards) ────────────────────── */}
      <div id="work">
        <FeaturesGrid
          pill="Selected Work"
          title="Projects that speak for themselves"
          subtitle="A curated selection of recent work across brand, web, and product design."
          columns={3}
          features={[
            {
              icon: <span aria-hidden="true">&#x1F3AF;</span>,
              title: "Meridian Finance — Brand Overhaul",
              description:
                "Complete rebrand and digital transformation for a leading fintech company. New visual identity, design system, and marketing site. Result: 140% increase in qualified leads within 90 days.",
            },
            {
              icon: <span aria-hidden="true">&#x1F680;</span>,
              title: "Vela Health — Product Launch",
              description:
                "End-to-end product design and development for a telehealth startup. From user research through to App Store launch in 16 weeks. Result: 50,000 downloads in the first month.",
            },
            {
              icon: <span aria-hidden="true">&#x2728;</span>,
              title: "Arcadia Hotels — Digital Experience",
              description:
                "Immersive booking experience and loyalty platform for a luxury hotel group. Custom animations, 3D room tours, and a streamlined checkout. Result: 68% increase in direct bookings.",
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 4. Services (FAQ Accordion for detailed descriptions) ───────────── */}
      <div id="services">
        <FAQAccordion
          pill="Services"
          title="What we do"
          subtitle="Every engagement is tailored to your goals. Here is our full range of capabilities."
          items={[
            {
              question: "Brand Strategy & Identity",
              answer:
                "We define your brand from the ground up — positioning, voice, visual identity, and guidelines that ensure consistency across every touchpoint. Our process includes competitive analysis, stakeholder interviews, audience research, and iterative design sprints that result in a brand system built to scale.",
            },
            {
              question: "UI/UX Design",
              answer:
                "User-centered design from discovery through delivery. We conduct user research, build information architectures, create wireframes, and develop high-fidelity prototypes — all validated through usability testing. The result: interfaces that are intuitive, accessible, and beautiful.",
            },
            {
              question: "Web Development",
              answer:
                "Performance-first websites and web applications built with modern frameworks like Next.js, React, and TypeScript. We write clean, semantic, accessible code that loads fast, ranks well on search engines, and scales with your business. Every project includes responsive design, SEO optimization, and analytics integration.",
            },
            {
              question: "Mobile App Development",
              answer:
                "Native and cross-platform mobile applications for iOS and Android. From concept to App Store submission, we handle architecture, design, development, and QA. We specialize in React Native for cross-platform efficiency without compromising on native performance or UX quality.",
            },
            {
              question: "Growth & Marketing",
              answer:
                "Data-driven growth strategy that turns visitors into customers. We offer conversion rate optimization, A/B testing, landing page design, email campaign design, and analytics setup. Our growth team works alongside your marketing department to identify high-impact opportunities and execute rapidly.",
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 5. Process (StatsGrid as numbered steps) ────────────────────────── */}
      <div id="about">
        <StatsGrid
          pill="Our Process"
          title="From brief to launch, refined over 120+ projects"
          subtitle="A proven five-phase methodology that balances creativity with predictability."
          stats={[
            {
              value: "01",
              label: "Discover",
              description: "1-2 weeks — Research, stakeholder interviews, competitive audit",
            },
            {
              value: "02",
              label: "Define",
              description: "1 week — Strategy, scope, success metrics, project roadmap",
            },
            {
              value: "03",
              label: "Design",
              description: "2-4 weeks — Wireframes, prototypes, visual design, user testing",
            },
            {
              value: "04",
              label: "Develop",
              description: "4-8 weeks — Engineering, QA, performance optimization, integrations",
            },
            {
              value: "05",
              label: "Deliver",
              description: "Ongoing — Launch, analytics review, iteration, long-term support",
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 6. Team Stats (Banner) ─────────────────────────────────────────── */}
      <StatsBanner
        stats={[
          { value: "25+", label: "Team Members" },
          { value: "8", label: "Countries" },
          { value: "120+", label: "Projects Delivered" },
          { value: "14", label: "Industry Awards" },
        ]}
        animated={false}
      />

      {/* ── 7. Testimonial (Featured) ──────────────────────────────────────── */}
      <TestimonialsFeatured
        pill="Client Stories"
        title="What our clients say"
        testimonial={{
          quote:
            "Nexus Studio transformed our entire digital presence. They didn't just redesign our website — they reimagined how our brand shows up in the world. From the initial strategy workshops through final launch, their team was collaborative, detail-oriented, and genuinely invested in our success. Revenue up 40%, bounce rate down by half, and our internal team finally has a design system they love working with. Best agency partnership we've had in fifteen years.",
          author: "Mark Thompson",
          role: "CEO, Meridian Finance",
          rating: 5,
        }}
        animated={false}
      />

      {/* ── 8. Awards (Logo Cloud) ─────────────────────────────────────────── */}
      <LogoCloud
        label="Recognized excellence"
        logos={[]}
        animated={false}
      />

      {/* ── 9. Contact CTA (Split) ─────────────────────────────────────────── */}
      <div id="contact">
        <CTASplit
          pill="Get in Touch"
          title="Have a project in mind?"
          subtitle="Tell us about it. We'll get back to you within 24 hours with an initial assessment and next steps. No pitch decks, no fluff — just a real conversation about how we can help."
          primaryAction={{ label: "hello@nexusstudio.com", href: "mailto:hello@nexusstudio.com" }}
          secondaryAction={{ label: "Schedule a Call", href: "#", variant: "outline" }}
          animated={false}
        />
      </div>

      {/* ── 10. Footer ─────────────────────────────────────────────────────── */}
      <FooterColumns
        brandName="Nexus Studio"
        description="We make digital experiences people remember. Full-service creative agency specializing in brand, design, and development."
        linkGroups={[
          {
            title: "Work",
            links: [
              { label: "Case Studies", href: "#work" },
              { label: "Industries", href: "#" },
              { label: "Open Source", href: "#" },
              { label: "Dribbble", href: "#" },
            ],
          },
          {
            title: "Services",
            links: [
              { label: "Brand Strategy", href: "#services" },
              { label: "UI/UX Design", href: "#services" },
              { label: "Web Development", href: "#services" },
              { label: "Mobile Apps", href: "#services" },
              { label: "Growth & Marketing", href: "#services" },
            ],
          },
          {
            title: "Company",
            links: [
              { label: "About", href: "#about" },
              { label: "Careers", href: "#" },
              { label: "Blog", href: "#" },
              { label: "Press Kit", href: "#" },
            ],
          },
          {
            title: "Connect",
            links: [
              { label: "Twitter / X", href: "#" },
              { label: "LinkedIn", href: "#" },
              { label: "Instagram", href: "#" },
              { label: "hello@nexusstudio.com", href: "mailto:hello@nexusstudio.com" },
            ],
          },
        ]}
        copyright="&copy; 2026 Nexus Studio. All rights reserved."
        legalLinks={[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
        ]}
      />
    </div>
  );
}
