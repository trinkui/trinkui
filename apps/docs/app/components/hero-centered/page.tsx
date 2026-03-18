import { HeroCentered } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { HeroCentered } from "@trinkui/react";

export default function Example() {
  return (
    <HeroCentered
      pill="Just launched 🚀"
      title="Build landing pages that convert"
      subtitle="Beautiful, accessible, and production-ready landing page sections for React."
      primaryAction={{ label: "Get Started", href: "/docs" }}
      secondaryAction={{
        label: "GitHub",
        href: "https://github.com/trinkui",
        variant: "outline",
        target: "_blank",
      }}
    />
  );
}`;

const props = [
  { name: "title", type: "string", required: true, description: "Main headline text" },
  { name: "subtitle", type: "string", description: "Supporting description below the headline" },
  { name: "pill", type: "string", description: "Badge label shown above the headline" },
  { name: "primaryAction", type: "ActionProps", description: "Primary CTA button — { label, href, onClick? }" },
  { name: "secondaryAction", type: "ActionProps", description: "Secondary CTA button — { label, href, onClick?, variant? }" },
  { name: "image", type: "ImageProps", description: "Hero image shown below CTAs — { src, alt, width?, height? }" },
  { name: "animated", type: "boolean", default: "true", description: "Enable entrance animations" },
  { name: "theme", type: '"light" | "dark"', description: "Section color theme" },
  { name: "className", type: "string", description: "Extra CSS classes for the section element" },
];

export default function HeroCenteredPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Hero</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">HeroCentered</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Centered hero section with pill badge, headline, subtitle, CTA buttons, and optional image.
        </p>
      </div>

      {/* Installation */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Installation</h2>
        <pre className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[#0d1117] px-4 py-3 text-sm text-slate-200">
          <code>npm install @trinkui/react</code>
        </pre>
      </div>

      {/* Preview */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Preview</h2>
        <ComponentPreview code={exampleCode}>
          <HeroCentered
            pill="Just launched 🚀"
            title="Build landing pages that convert"
            subtitle="Beautiful, accessible, and production-ready landing page sections for React."
            primaryAction={{ label: "Get Started", href: "#" }}
            secondaryAction={{ label: "GitHub", href: "#", variant: "outline" }}
            animated={false}
          />
        </ComponentPreview>
      </div>

      {/* Props */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Props</h2>
        <PropsTable props={props} />
      </div>
    </div>
  );
}
