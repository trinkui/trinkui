import { StatsGrid } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { StatsGrid } from "@trinkui/react";

export default function Example() {
  return (
    <StatsGrid
      pill="By the numbers"
      title="Trusted by developers worldwide"
      stats={[
        { value: "10K+", label: "Components shipped" },
        { value: "500+", label: "GitHub stars" },
        { value: "99%", label: "Satisfaction rate" },
        { value: "24/7", label: "Community support" },
      ]}
    />
  );
}`;

const props = [
  { name: "pill", type: "string", description: "Badge label shown above the headline" },
  { name: "title", type: "string", description: "Main headline text" },
  { name: "subtitle", type: "string", description: "Supporting description below the headline" },
  { name: "stats", type: "StatItem[]", required: true, description: "Array of stat items" },
  { name: "animated", type: "boolean", default: "true", description: "Enable entrance animations" },
  { name: "theme", type: '"light" | "dark"', description: "Section color theme" },
  { name: "className", type: "string", description: "Extra CSS classes for the section element" },
];

export default function StatsGridPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Stats</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">StatsGrid</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Four-column grid of key metrics with large value, label, and optional description.
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
          <StatsGrid
            pill="By the numbers"
            title="Trusted by developers worldwide"
            stats={[
              { value: "10K+", label: "Components shipped" },
              { value: "500+", label: "GitHub stars" },
              { value: "99%", label: "Satisfaction rate" },
              { value: "24/7", label: "Community support" },
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
