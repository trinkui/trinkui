"use client";

import {
  NavbarSimple,
  HeroSplit,
  Section,
  Container,
  FeaturesGrid,
  FeaturesList,
  TestimonialsGrid,
  CTACentered,
  FooterSimple,
} from "@trinkui/react";

export default function PortfolioTemplatePage() {
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
        Back to docs
      </a>

      {/* ── 1. Navbar ──────────────────────────────────────────────────────── */}
      <NavbarSimple
        brandName="Alex Rivera"
        links={[
          { label: "About", href: "#about" },
          { label: "Work", href: "#work" },
          { label: "Blog", href: "#blog" },
          { label: "Contact", href: "#contact" },
        ]}
        secondaryAction={{ label: "Resume \u2193", href: "#", variant: "outline" }}
        sticky
        blur
      />

      {/* ── 2. Hero ────────────────────────────────────────────────────────── */}
      <HeroSplit
        title="Hi, I'm Alex. I build things for the web."
        subtitle="Senior Frontend Engineer based in San Francisco. Currently at Vercel. Previously Stripe, Google. I'm passionate about design systems, developer tooling, and creating interfaces that feel effortless."
        primaryAction={{ label: "View My Work", href: "#work" }}
        secondaryAction={{ label: "Get In Touch", href: "#contact", variant: "outline" }}
        image={{ src: "", alt: "Alex Rivera portrait" }}
        animated={false}
      />

      {/* ── 3. About ───────────────────────────────────────────────────────── */}
      <div id="about">
        <Section spacing="lg">
          <Container size="xl">
            <div className="mx-auto max-w-3xl">
              <h2 className="font-heading text-3xl font-bold tracking-tight text-[rgb(var(--trinkui-fg))] sm:text-4xl">
                About me.
              </h2>
              <div className="mt-6 flex flex-col gap-5 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
                <p>
                  I fell in love with programming at 14 when I built my first website
                  for a local skate shop. What started as a hobby quickly became a
                  career obsession. Today, with over six years of professional
                  experience, I specialize in building performant, accessible web
                  applications that serve millions of users.
                </p>
                <p>
                  At Vercel, I work on the Next.js framework team, focusing on
                  developer experience and performance optimization. Before that, I
                  spent two years at Stripe designing and shipping the merchant
                  dashboard used by hundreds of thousands of businesses worldwide.
                  My time at Google taught me how to build at scale and gave me a
                  deep appreciation for design systems and component architecture.
                </p>
                <p>
                  Outside of work, I contribute to open-source projects, write about
                  frontend architecture on my blog, and mentor early-career engineers.
                  I believe the best code is the code that empowers other people to
                  build great things.
                </p>
              </div>
            </div>
          </Container>
        </Section>

        {/* Tech Stack */}
        <FeaturesGrid
          title="Tech stack."
          subtitle="The tools and technologies I reach for every day."
          columns={3}
          features={[
            {
              icon: <span aria-hidden="true">&#x269B;</span>,
              title: "React",
              description:
                "My framework of choice for over five years. Deep expertise in hooks, concurrent features, server components, and custom rendering patterns.",
            },
            {
              icon: <span aria-hidden="true">&#x1F4DD;</span>,
              title: "TypeScript",
              description:
                "Full type-safety advocate. I use TypeScript on every project — from strict utility types to generics-heavy library code and branded types.",
            },
            {
              icon: <span aria-hidden="true">&#x25B2;</span>,
              title: "Next.js",
              description:
                "Building with Next.js daily at Vercel. Expert in App Router, server actions, ISR, middleware, and edge-runtime deployment strategies.",
            },
            {
              icon: <span aria-hidden="true">&#x1F3A8;</span>,
              title: "Tailwind CSS",
              description:
                "Utility-first CSS for rapid prototyping and production builds. Experienced with custom design tokens, plugin authoring, and v4 migration.",
            },
            {
              icon: <span aria-hidden="true">&#x1F5A5;</span>,
              title: "Node.js",
              description:
                "Server-side JavaScript for APIs, CLIs, and build tools. Proficient with Express, Fastify, tRPC, and serverless function architectures.",
            },
            {
              icon: <span aria-hidden="true">&#x1F5C3;</span>,
              title: "PostgreSQL",
              description:
                "Relational database design, query optimization, and migrations. Experience with Prisma, Drizzle ORM, and raw SQL for complex analytics queries.",
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 4. Selected Work ───────────────────────────────────────────────── */}
      <div id="work">
        <FeaturesGrid
          title="Selected work."
          subtitle="A few projects I'm especially proud of. Each one pushed me to solve hard problems in new ways."
          columns={3}
          features={[
            {
              icon: <span aria-hidden="true">&#x1F6D2;</span>,
              title: "E-commerce Platform",
              description:
                "Led the frontend rebuild of a major e-commerce platform serving 2M+ monthly visitors. Implemented a headless architecture with Next.js, Shopify Storefront API, and a custom design system. Result: +180% conversion rate, 40% faster page loads, and a 95+ Lighthouse score across all pages. Tech: React, Next.js, TypeScript, Tailwind CSS, Shopify.",
            },
            {
              icon: <span aria-hidden="true">&#x1F4CA;</span>,
              title: "Developer Tools Dashboard",
              description:
                "Designed and built an internal analytics dashboard used by 50,000 developers daily. Features real-time data visualization, customizable widgets, and keyboard-driven navigation. Reduced mean time to debug by 60%. Recognized internally with an engineering excellence award. Tech: React, D3.js, TypeScript, GraphQL, PostgreSQL.",
            },
            {
              icon: <span aria-hidden="true">&#x1F916;</span>,
              title: "AI Writing Assistant",
              description:
                "Co-founded and built the frontend for an AI writing tool that reached #1 on Product Hunt with 3,200+ upvotes. Implemented real-time collaborative editing, streaming AI responses, and a rich text editor with Markdown support. Grew to 25K monthly active users within three months of launch. Tech: React, Next.js, Tiptap, OpenAI API, Supabase.",
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 5. Experience ──────────────────────────────────────────────────── */}
      <FeaturesList
        title="Experience."
        subtitle="My professional journey in engineering, from startup energy to big-tech scale."
        features={[
          {
            icon: <span aria-hidden="true">&#x25B2;</span>,
            title: "Senior Frontend Engineer — Vercel (2024 \u2013 Present)",
            description:
              "Core contributor to the Next.js framework team. Leading the redesign of the Vercel dashboard component library. Shipped server components integration, improved build performance by 35%, and authored three RFCs adopted by the framework. Mentoring two junior engineers and driving frontend architecture decisions across the org.",
          },
          {
            icon: <span aria-hidden="true">&#x1F4B3;</span>,
            title: "Frontend Engineer — Stripe (2022 \u2013 2024)",
            description:
              "Built and maintained the merchant-facing dashboard serving 500K+ businesses. Owned the payments analytics module, reducing bundle size by 42% through code splitting and lazy loading. Collaborated with design to ship a fully accessible component library used by 12 product teams. Led the migration from Flow to TypeScript across 200+ components.",
          },
          {
            icon: <span aria-hidden="true">&#x1F50D;</span>,
            title: "Junior Software Engineer — Google (2020 \u2013 2022)",
            description:
              "Started on the Google Cloud Console team building monitoring dashboards for enterprise customers. Progressed to owning the alerting configuration UI used by 100K+ projects. Gained expertise in large-scale design systems, accessibility standards (WCAG 2.1 AA), and performance budgets. Promoted ahead of schedule after shipping a critical cost-analysis feature.",
          },
        ]}
        animated={false}
      />

      {/* ── 6. Testimonials ────────────────────────────────────────────────── */}
      <TestimonialsGrid
        title="What people say."
        subtitle="Kind words from colleagues and managers I've had the pleasure of working with."
        testimonials={[
          {
            quote:
              "Alex is one of those rare engineers who combines deep technical skill with genuine design sensibility. Every component he builds is performant, accessible, and a joy to use. He elevated our entire frontend architecture at Stripe and mentored half the team in the process.",
            author: "Priya Patel",
            role: "Engineering Manager, Stripe",
            rating: 5,
          },
          {
            quote:
              "Working with Alex on the AI Writing Assistant was a game-changer. He turned vague product ideas into polished, production-ready interfaces faster than anyone I've seen. His instinct for UX and his ability to ship under pressure is truly exceptional.",
            author: "Jordan Kim",
            role: "Co-founder & CEO, WriteMind AI",
            rating: 5,
          },
          {
            quote:
              "Alex joined my team as a junior and left as one of our strongest contributors. His growth was extraordinary — within a year he was owning critical features and confidently leading architecture reviews. Any team would be lucky to have him.",
            author: "David Nakamura",
            role: "Staff Engineer, Google Cloud",
            rating: 5,
          },
        ]}
        animated={false}
      />

      {/* ── 7. Blog Preview ────────────────────────────────────────────────── */}
      <div id="blog">
        <FeaturesGrid
          title="Latest writing."
          subtitle="Thoughts on frontend engineering, design systems, and the ever-evolving web platform."
          columns={3}
          features={[
            {
              icon: <span aria-hidden="true">&#x1F3D7;</span>,
              title: "Building a Design System at Scale",
              description:
                "Lessons learned from creating and maintaining a component library used by 12 product teams at Stripe. Covers token architecture, versioning strategy, and cross-team adoption. A deep dive into what works, what doesn't, and why governance matters more than code. 8 min read.",
            },
            {
              icon: <span aria-hidden="true">&#x2699;</span>,
              title: "The Future of React Server Components",
              description:
                "An exploration of how RSC changes the way we think about data fetching, bundle size, and component boundaries. Includes practical migration patterns and performance benchmarks from real production apps at Vercel. 5 min read.",
            },
            {
              icon: <span aria-hidden="true">&#x1F4A1;</span>,
              title: "Why TypeScript Changed My Career",
              description:
                "From skeptic to evangelist: how adopting TypeScript transformed the way I design APIs, catch bugs before they ship, and collaborate with teams. Plus, advanced patterns like branded types and template literal types that I use daily. 6 min read.",
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 8. Contact CTA ─────────────────────────────────────────────────── */}
      <div id="contact">
        <CTACentered
          title="Let's work together."
          subtitle="I'm always open to new opportunities and interesting projects. Whether you need a senior frontend engineer, a technical advisor, or just want to chat about React — I'd love to hear from you."
          primaryAction={{ label: "hello@alexrivera.dev", href: "mailto:hello@alexrivera.dev" }}
          secondaryAction={{ label: "LinkedIn", href: "#", variant: "outline" }}
          theme="dark"
          backgroundPattern="dots"
          animated={false}
        />
      </div>

      {/* ── 9. Footer ──────────────────────────────────────────────────────── */}
      <FooterSimple
        brandName="Alex Rivera"
        copyright="Built with trink-ui &middot; &copy; 2026"
        legalLinks={[]}
      />
    </div>
  );
}
