import { CTABanner } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { CTABanner } from "@trinkui/react";

export default function Example() {
  return (
    <CTABanner
      title="Ready to get started?"
      subtitle="Join thousands of developers building with TrinkUI."
      primaryAction={{ label: "Get started free", href: "#" }}
      secondaryAction={{ label: "View on GitHub", href: "#", variant: "outline" }}
    />
  );
}`;

const props = [
  { name: "pill", type: "string", description: "Badge label shown above the headline" },
  { name: "title", type: "string", required: true, description: "Main headline text" },
  { name: "subtitle", type: "string", description: "Supporting description below the headline" },
  { name: "primaryAction", type: "ActionProps", description: "Primary CTA button — { label, href, onClick?, variant?, target? }" },
  { name: "secondaryAction", type: "ActionProps", description: "Secondary CTA button — { label, href, onClick?, variant?, target? }" },
  { name: "animated", type: "boolean", default: "true", description: "Enable entrance animations" },
  { name: "theme", type: '"light" | "dark"', description: "Section color theme" },
  { name: "className", type: "string", description: "Extra CSS classes for the section element" },
];

export default function CTABannerPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">CTA</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">CTABanner</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Full-width call-to-action banner with headline, subtitle, and primary/secondary buttons.
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
          <CTABanner
            title="Ready to get started?"
            subtitle="Join thousands of developers building with TrinkUI."
            primaryAction={{ label: "Get started free", href: "#" }}
            secondaryAction={{ label: "View on GitHub", href: "#", variant: "outline" }}
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
