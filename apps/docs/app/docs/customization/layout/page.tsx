import Link from "next/link";

function CodeBox({ title, code }: { title?: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[rgb(var(--trinkui-border))]">
      {title && (
        <div className="border-b border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-4 py-2">
          <span className="text-xs font-medium text-[rgb(var(--trinkui-muted))]">
            {title}
          </span>
        </div>
      )}
      <pre className="overflow-x-auto bg-[#0a0a0f] px-4 py-3 text-sm leading-relaxed text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function LayoutPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
          Customization
        </p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
          Layout
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          How Container, Section, and SectionHeader work together to provide a
          consistent layout system for every landing page section.
        </p>
      </div>

      {/* Container */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Container
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          The{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            Container
          </code>{" "}
          component centers content and constrains its max-width. It accepts a{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            size
          </code>{" "}
          prop to control the width:
        </p>
        <div className="mb-4 space-y-2">
          {[
            { size: "sm", width: "640px", use: "Narrow content, text-heavy sections" },
            { size: "md", width: "768px", use: "Blog posts, documentation" },
            { size: "lg", width: "1024px", use: "Standard sections" },
            { size: "xl", width: "1280px", use: "Default. Most landing page sections" },
            { size: "2xl", width: "1536px", use: "Full-width feature grids, hero sections" },
          ].map((item) => (
            <div
              key={item.size}
              className="flex items-center gap-4 rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] px-4 py-3"
            >
              <code className="shrink-0 rounded bg-[rgb(var(--trinkui-primary)/0.1)] px-2 py-0.5 text-xs font-medium text-[rgb(var(--trinkui-primary))]">
                {item.size}
              </code>
              <span className="shrink-0 font-mono text-xs text-[rgb(var(--trinkui-muted))]">
                {item.width}
              </span>
              <span className="text-sm text-[rgb(var(--trinkui-muted))]">
                {item.use}
              </span>
            </div>
          ))}
        </div>
        <CodeBox
          title="Container usage"
          code={`import { Container } from "@trinkui/react";

<Container size="xl">
  <h2>My Section Title</h2>
  <p>Content is centered with max-width: 1280px</p>
</Container>

<Container size="sm">
  <p>Narrow container for focused content</p>
</Container>`}
        />
      </div>

      {/* Section */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Section
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          The{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            Section
          </code>{" "}
          component is the outermost wrapper for every landing page block. It
          handles vertical spacing, theme switching, and semantic HTML.
        </p>
        <CodeBox
          title="Section props"
          code={`<Section
  theme="dark"        // "light" | "dark" — toggles .dark class
  spacing="lg"        // "none" | "sm" | "md" | "lg" | "xl"
  className="relative" // merged with cn()
>
  <Container size="xl">
    {/* section content */}
  </Container>
</Section>`}
        />
        <div className="mt-4 space-y-2">
          <p className="text-sm font-medium text-[rgb(var(--trinkui-fg))]">
            Spacing values:
          </p>
          {[
            { spacing: "none", padding: "0" },
            { spacing: "sm", padding: "py-8 sm:py-12" },
            { spacing: "md", padding: "py-12 sm:py-16" },
            { spacing: "lg", padding: "py-16 sm:py-24" },
            { spacing: "xl", padding: "py-24 sm:py-32" },
          ].map((item) => (
            <div
              key={item.spacing}
              className="flex items-center gap-4 rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] px-4 py-2"
            >
              <code className="shrink-0 rounded bg-[rgb(var(--trinkui-primary)/0.1)] px-2 py-0.5 text-xs font-medium text-[rgb(var(--trinkui-primary))]">
                {item.spacing}
              </code>
              <span className="font-mono text-xs text-[rgb(var(--trinkui-muted))]">
                {item.padding}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* SectionHeader */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          SectionHeader
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          The{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            SectionHeader
          </code>{" "}
          component renders the consistent title + subtitle + optional badge
          pattern used across all section components. It handles text alignment and
          responsive sizing automatically.
        </p>
        <CodeBox
          title="SectionHeader usage"
          code={`import { SectionHeader } from "@trinkui/react";

<SectionHeader
  badge="New"
  title="Build landing pages faster"
  subtitle="Production-ready components that look great out of the box."
  align="center"   // "left" | "center" | "right"
/>`}
        />
      </div>

      {/* Composing Layout */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Composing Layout Components
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          All three layout components are used together inside every section
          component. Here is the standard composition pattern:
        </p>
        <CodeBox
          title="Standard section composition"
          code={`import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { SectionHeader } from "../../layout/SectionHeader";

export const MySection = forwardRef<HTMLElement, MySectionProps>(
  ({ title, subtitle, badge, theme, className, children, ...props }, ref) => {
    return (
      <Section ref={ref} theme={theme} spacing="lg" className={className} {...props}>
        <Container size="xl">
          <SectionHeader badge={badge} title={title} subtitle={subtitle} align="center" />
          <div className="mt-12">
            {children}
          </div>
        </Container>
      </Section>
    );
  }
);`}
        />
      </div>

      {/* Responsive Breakpoints */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Responsive Breakpoints
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          trink-ui follows Tailwind CSS v4 default breakpoints with a mobile-first
          approach:
        </p>
        <div className="space-y-2">
          {[
            { bp: "Default", width: "0px+", description: "Mobile phones (portrait)" },
            { bp: "sm:", width: "640px+", description: "Mobile phones (landscape)" },
            { bp: "md:", width: "768px+", description: "Tablets" },
            { bp: "lg:", width: "1024px+", description: "Laptops and small desktops" },
            { bp: "xl:", width: "1280px+", description: "Desktops" },
            { bp: "2xl:", width: "1536px+", description: "Large desktops" },
          ].map((item) => (
            <div
              key={item.bp}
              className="flex items-center gap-4 rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] px-4 py-2"
            >
              <code className="w-12 shrink-0 rounded bg-[rgb(var(--trinkui-primary)/0.1)] px-2 py-0.5 text-center text-xs font-medium text-[rgb(var(--trinkui-primary))]">
                {item.bp}
              </code>
              <span className="w-16 shrink-0 font-mono text-xs text-[rgb(var(--trinkui-muted))]">
                {item.width}
              </span>
              <span className="text-sm text-[rgb(var(--trinkui-muted))]">
                {item.description}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Next step */}
      <div className="rounded-xl border border-[rgb(var(--trinkui-primary)/0.3)] bg-[rgb(var(--trinkui-primary)/0.05)] p-6">
        <p className="font-medium text-[rgb(var(--trinkui-fg))]">Next step</p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          Explore all available color variables and their semantic meanings.
        </p>
        <Link
          href="/docs/customization/colors"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
        >
          Colors
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
