"use client";

import {
  NavbarSimple,
  HeroCentered,
  StatsGrid,
  FeaturesGrid,
  FAQAccordion,
  PricingCards,
  CTASplit,
  LogoCloud,
  CTACentered,
  FooterColumns,
} from "@trinkui/react";

export default function EventTemplatePage() {
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
        brandName="DevSummit 2026"
        links={[
          { label: "Speakers", href: "#speakers" },
          { label: "Schedule", href: "#schedule" },
          { label: "Venue", href: "#venue" },
          { label: "Sponsors", href: "#sponsors" },
        ]}
        primaryAction={{ label: "Get Tickets", href: "#tickets" }}
        sticky
        blur
      />

      {/* ── 2. Hero ────────────────────────────────────────────────────────── */}
      <HeroCentered
        pill="Early Bird $199 \u2014 Limited Time"
        title="DevSummit 2026"
        subtitle="The world's premier developer conference. San Francisco \u00B7 June 15\u201316 \u00B7 Moscone Center. Two days of keynotes, workshops, and networking with the brightest minds in software engineering."
        primaryAction={{ label: "Get Tickets \u2014 Early Bird $199", href: "#tickets" }}
        secondaryAction={{ label: "View Schedule", href: "#schedule", variant: "outline" }}
        theme="dark"
        animated={false}
      />

      {/* ── 3. Stats ───────────────────────────────────────────────────────── */}
      <StatsGrid
        stats={[
          {
            value: "2,400+",
            label: "Attendees",
            description: "Developers, designers, and engineering leaders",
          },
          {
            value: "48",
            label: "Speakers",
            description: "World-class experts from leading tech companies",
          },
          {
            value: "12",
            label: "Countries",
            description: "A truly global community of builders",
          },
          {
            value: "2",
            label: "Days",
            description: "Packed with keynotes, panels, and workshops",
          },
        ]}
        animated={false}
      />

      {/* ── 4. Speakers ────────────────────────────────────────────────────── */}
      <div id="speakers">
        <FeaturesGrid
          pill="Speakers"
          title="World-class speakers."
          subtitle="Learn from engineers and leaders who are shaping the future of software development."
          columns={3}
          features={[
            {
              icon: <span aria-hidden="true">&#x1F3A4;</span>,
              title: "Sarah Chen",
              description:
                "VP of Engineering, Vercel. Talk: \"The Next Era of Web Performance\" \u2014 Exploring how edge computing and streaming architectures are redefining what fast means on the modern web.",
            },
            {
              icon: <span aria-hidden="true">&#x1F3A4;</span>,
              title: "Marcus Williams",
              description:
                "Staff Engineer, Stripe. Talk: \"Designing APIs That Last a Decade\" \u2014 Lessons from building and evolving payment APIs that serve millions of businesses without breaking changes.",
            },
            {
              icon: <span aria-hidden="true">&#x1F3A4;</span>,
              title: "Aisha Patel",
              description:
                "Head of AI Platform, OpenAI. Talk: \"LLMs in Production: Beyond the Demo\" \u2014 Real-world patterns for deploying, monitoring, and scaling large language models in enterprise applications.",
            },
            {
              icon: <span aria-hidden="true">&#x1F3A4;</span>,
              title: "Tomasz Kowalski",
              description:
                "Principal Engineer, Cloudflare. Talk: \"Zero-Latency at the Edge\" \u2014 How Cloudflare Workers and distributed databases are enabling a new generation of globally performant applications.",
            },
            {
              icon: <span aria-hidden="true">&#x1F3A4;</span>,
              title: "Elena Rodriguez",
              description:
                "Design Systems Lead, Figma. Talk: \"Bridging Design and Code\" \u2014 How design tokens, component APIs, and automated workflows can eliminate the gap between designers and developers.",
            },
            {
              icon: <span aria-hidden="true">&#x1F3A4;</span>,
              title: "James Okonkwo",
              description:
                "Co-founder & CTO, Railway. Talk: \"The Future of Developer Infrastructure\" \u2014 Why deployment should be invisible and how modern platforms are making infrastructure a solved problem.",
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 5. Schedule ────────────────────────────────────────────────────── */}
      <div id="schedule">
        <FAQAccordion
          pill="Schedule"
          title="Two days of inspiration."
          subtitle="A carefully curated program designed to maximize learning, networking, and hands-on experience."
          items={[
            {
              question: "Day 1 \u2014 9:00 AM: Registration & Welcome Coffee",
              answer:
                "Check in at the Moscone Center lobby, pick up your badge and swag bag, and enjoy locally roasted coffee and pastries. Meet fellow attendees and get settled before the opening keynote.",
            },
            {
              question: "Day 1 \u2014 10:00 AM: Opening Keynote \u2014 Sarah Chen",
              answer:
                "\"The Next Era of Web Performance\" \u2014 Sarah Chen, VP of Engineering at Vercel, kicks off DevSummit 2026 with a deep dive into how edge computing, streaming SSR, and partial prerendering are transforming the web. Includes live demos and exclusive announcements.",
            },
            {
              question: "Day 1 \u2014 11:30 AM: Panel \u2014 The State of Frontend in 2026",
              answer:
                "A lively discussion between Sarah Chen, Elena Rodriguez, and Marcus Williams on the evolving frontend landscape. Topics include React Server Components in production, the rise of edge-first frameworks, and whether CSS has finally won. Audience Q&A included.",
            },
            {
              question: "Day 1 \u2014 12:30 PM: Lunch & Networking",
              answer:
                "Enjoy a catered lunch in the exhibition hall. Visit sponsor booths, attend lightning talks in the demo area, or join themed roundtable discussions on topics like AI tooling, open source sustainability, and career growth.",
            },
            {
              question: "Day 1 \u2014 2:00 PM: Afternoon Workshops (Choose Your Track)",
              answer:
                "Track A: \"Building Production AI Agents\" with Aisha Patel. Track B: \"Design Systems from Zero to Scale\" with Elena Rodriguez. Track C: \"Edge-First Architecture\" with Tomasz Kowalski. Each workshop is 2.5 hours with hands-on coding exercises and take-home projects.",
            },
            {
              question: "Day 2 \u2014 9:30 AM: Morning Sessions",
              answer:
                "Three parallel talks: James Okonkwo on \"The Future of Developer Infrastructure,\" Marcus Williams on \"Designing APIs That Last a Decade,\" and a community talk selected from our open CFP. All sessions recorded and available to ticket holders after the event.",
            },
            {
              question: "Day 2 \u2014 1:00 PM: Unconference & Open Spaces",
              answer:
                "Attendee-driven sessions in an open-space format. Propose a topic on the board in the morning, gather a group, and dive deep. Past unconference favorites include \"Monorepo vs. Polyrepo,\" \"Hiring Senior Engineers,\" and \"The Economics of Open Source.\"",
            },
            {
              question: "Day 2 \u2014 4:00 PM: Closing Keynote & After-Party",
              answer:
                "Tomasz Kowalski delivers the closing keynote on \"Zero-Latency at the Edge,\" followed by award announcements and a look ahead to DevSummit 2027. Then join us on the rooftop terrace for live music, craft cocktails, and the best sunset views in San Francisco.",
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 6. Tickets ─────────────────────────────────────────────────────── */}
      <div id="tickets">
        <PricingCards
          pill="Tickets"
          title="Secure your seat."
          subtitle="Early bird pricing ends May 1. All tickets include access to both days, workshops, lunch, and the after-party."
          tiers={[
            {
              name: "General",
              price: "$299",
              period: "per person",
              description: "Full access to all keynotes, panels, and the exhibition hall.",
              features: [
                { label: "All keynotes & panels", included: true },
                { label: "Exhibition hall access", included: true },
                { label: "Lunch both days", included: true },
                { label: "After-party", included: true },
                { label: "Workshop access", included: false },
                { label: "VIP networking lounge", included: false },
                { label: "Speaker meet & greet", included: false },
              ],
              cta: { label: "Get General Ticket", href: "#" },
            },
            {
              name: "VIP",
              price: "$599",
              period: "per person",
              description: "Everything in General, plus workshops, VIP lounge, and speaker access.",
              popular: true,
              popularLabel: "Limited",
              features: [
                { label: "All keynotes & panels", included: true },
                { label: "Exhibition hall access", included: true },
                { label: "Lunch both days", included: true },
                { label: "After-party", included: true },
                { label: "All workshops included", included: true },
                { label: "VIP networking lounge", included: true },
                { label: "Speaker meet & greet", included: true },
              ],
              cta: { label: "Get VIP Ticket", href: "#" },
            },
            {
              name: "Group",
              price: "$249",
              period: "per person (5+ tickets)",
              description: "Bring your team. Same General access at a discounted rate.",
              features: [
                { label: "All keynotes & panels", included: true },
                { label: "Exhibition hall access", included: true },
                { label: "Lunch both days", included: true },
                { label: "After-party", included: true },
                { label: "Dedicated group seating", included: true },
                { label: "Workshop access", included: false },
                { label: "VIP networking lounge", included: false },
              ],
              cta: { label: "Get Group Tickets", href: "#" },
            },
          ]}
          animated={false}
        />
      </div>

      {/* ── 7. Venue ───────────────────────────────────────────────────────── */}
      <div id="venue">
        <CTASplit
          title="Moscone Center, San Francisco"
          subtitle="The iconic venue in the heart of downtown SF. Walking distance from BART, hotels, and restaurants. With 87,000 sq ft of event space, state-of-the-art A/V, and panoramic city views, it's the perfect home for DevSummit."
          primaryAction={{ label: "Get Directions", href: "#" }}
          secondaryAction={{ label: "Nearby Hotels", href: "#", variant: "outline" }}
          animated={false}
        />
      </div>

      {/* ── 8. Sponsors ────────────────────────────────────────────────────── */}
      <div id="sponsors">
        <LogoCloud
          label="Our sponsors"
          logos={[]}
          animated={false}
        />
      </div>

      {/* ── 9. FAQ ─────────────────────────────────────────────────────────── */}
      <FAQAccordion
        pill="FAQ"
        title="Frequently asked questions"
        subtitle="Everything you need to know about attending DevSummit 2026."
        items={[
          {
            question: "Is there a virtual attendance option?",
            answer:
              "Yes! All keynotes and panel sessions will be live-streamed for virtual ticket holders ($79). Virtual attendees get access to the live stream, recorded sessions for 30 days after the event, and a dedicated Slack channel for networking and Q&A with speakers.",
          },
          {
            question: "What is the refund policy?",
            answer:
              "Full refunds are available up to 30 days before the event (May 15, 2026). Between May 15 and June 1, we offer a 50% refund or a full transfer to another attendee. After June 1, tickets are non-refundable but fully transferable to anyone you choose.",
          },
          {
            question: "Do you have a code of conduct?",
            answer:
              "Absolutely. DevSummit is dedicated to providing a harassment-free, inclusive experience for everyone regardless of gender, gender identity, sexual orientation, disability, physical appearance, race, ethnicity, age, or religion. Our full code of conduct is available on our website, and we have a dedicated safety team on-site throughout the event.",
          },
          {
            question: "Will talks be recorded and shared?",
            answer:
              "Yes. All keynotes, panels, and main-stage talks will be professionally recorded and made available to all ticket holders (in-person and virtual) within two weeks of the event. Workshop content is exclusive to live attendees.",
          },
          {
            question: "Are there networking events?",
            answer:
              "Plenty! Beyond the main conference, we host a welcome reception on the evening of June 14, themed lunch roundtables both days, an unconference afternoon on Day 2, and the legendary DevSummit after-party on the rooftop terrace. VIP ticket holders also get access to an exclusive speaker dinner on Day 1.",
          },
        ]}
        animated={false}
      />

      {/* ── 10. Newsletter CTA ─────────────────────────────────────────────── */}
      <CTACentered
        title="Don't miss a thing."
        subtitle="Subscribe for speaker announcements, schedule updates, and early bird deals. We send one email per week, max. No spam, ever."
        primaryAction={{ label: "Subscribe for Updates", href: "#" }}
        secondaryAction={{ label: "Get Tickets", href: "#tickets", variant: "outline" }}
        theme="dark"
        backgroundPattern="dots"
        animated={false}
      />

      {/* ── 11. Footer ─────────────────────────────────────────────────────── */}
      <FooterColumns
        brandName="DevSummit 2026"
        description="The world's premier developer conference. San Francisco, June 15\u201316, 2026."
        linkGroups={[
          {
            title: "Event",
            links: [
              { label: "Schedule", href: "#schedule" },
              { label: "Tickets", href: "#tickets" },
              { label: "Venue", href: "#venue" },
              { label: "After-Party", href: "#" },
              { label: "Code of Conduct", href: "#" },
            ],
          },
          {
            title: "Speakers",
            links: [
              { label: "All Speakers", href: "#speakers" },
              { label: "Apply to Speak", href: "#" },
              { label: "Past Speakers", href: "#" },
              { label: "Speaker Guidelines", href: "#" },
            ],
          },
          {
            title: "Sponsors",
            links: [
              { label: "Our Sponsors", href: "#sponsors" },
              { label: "Become a Sponsor", href: "#" },
              { label: "Sponsorship Tiers", href: "#" },
              { label: "Media Kit", href: "#" },
            ],
          },
          {
            title: "Info",
            links: [
              { label: "FAQ", href: "#" },
              { label: "Travel & Hotels", href: "#" },
              { label: "Accessibility", href: "#" },
              { label: "Contact Us", href: "#" },
              { label: "Past Events", href: "#" },
            ],
          },
        ]}
        copyright="&copy; 2026 DevSummit. All rights reserved."
        legalLinks={[
          { label: "Privacy Policy", href: "#" },
          { label: "Terms of Service", href: "#" },
          { label: "Code of Conduct", href: "#" },
        ]}
      />
    </div>
  );
}
