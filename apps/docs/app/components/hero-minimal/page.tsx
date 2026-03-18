import { HeroMinimal } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { HeroMinimal } from "@trinkui/react";

export default function Example() {
  return (
    <HeroMinimal
      pill="Open source"
      title="Start building today"
      subtitle="Open source landing page components for React developers."
      primaryAction={{ label: "Browse Components", href: "/components" }}
      secondaryAction={{ label: "Learn More", href: "/docs" }}
      align="center"
    />
  );
}`;

const props = [
  { name: "title", type: "string", required: true, description: "Main headline text" },
  { name: "subtitle", type: "string", description: "Supporting description" },
  { name: "pill", type: "string", description: "Badge label shown above the headline" },
  { name: "primaryAction", type: "ActionProps", description: "Primary CTA button" },
  { name: "secondaryAction", type: "ActionProps", description: "Secondary CTA button" },
  { name: "align", type: '"left" | "center"', default: '"center"', description: "Text alignment" },
  { name: "animated", type: "boolean", default: "true", description: "Enable entrance animations" },
  { name: "theme", type: '"light" | "dark"', description: "Section color theme" },
  { name: "className", type: "string", description: "Extra CSS classes" },
];

export default function HeroMinimalPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Hero</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">HeroMinimal</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Compact hero section — just headline and CTA, no image. Tight spacing, clean typography.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Preview</h2>
        <ComponentPreview code={exampleCode}>
          <HeroMinimal
            pill="Open source"
            title="Start building today"
            subtitle="Open source landing page components for React developers."
            primaryAction={{ label: "Browse Components", href: "#" }}
            secondaryAction={{ label: "Learn More", href: "#" }}
            align="center"
            animated={false}
          />
        </ComponentPreview>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Props</h2>
        <PropsTable props={props} />
      </div>
    </div>
  );
}
