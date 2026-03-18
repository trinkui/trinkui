import { FeaturesList } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { FeaturesList } from "@trinkui/react";

export default function Example() {
  return (
    <FeaturesList
      title="Why TrinkUI?"
      features={[
        { icon: "✅", title: "Open source", description: "MIT licensed and free forever." },
        { icon: "✅", title: "TypeScript first", description: "Full type safety out of the box." },
        { icon: "✅", title: "Tailwind CSS v4", description: "Latest utility-first CSS framework." },
      ]}
    />
  );
}`;

const props = [
  { name: "pill", type: "string", description: "Badge label shown above the headline" },
  { name: "title", type: "string", required: true, description: "Main headline text" },
  { name: "subtitle", type: "string", description: "Supporting description below the headline" },
  { name: "features", type: "FeatureItem[]", description: "Array of feature items — { icon?, title, description, href? }" },
  { name: "primaryAction", type: "ActionProps", description: "Primary CTA button — { label, href, onClick?, variant?, target? }" },
  { name: "animated", type: "boolean", default: "true", description: "Enable entrance animations" },
  { name: "theme", type: '"light" | "dark"', description: "Section color theme" },
  { name: "className", type: "string", description: "Extra CSS classes for the section element" },
];

export default function FeaturesListPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Features</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">FeaturesList</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Compact vertical list of features with icon and text, ideal for sidebar or comparison sections.
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
          <FeaturesList
            title="Why TrinkUI?"
            features={[
              { icon: "✅", title: "Open source", description: "MIT licensed and free forever." },
              { icon: "✅", title: "TypeScript first", description: "Full type safety out of the box." },
              { icon: "✅", title: "Tailwind CSS v4", description: "Latest utility-first CSS framework." },
            ]}
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
