import { HeroSplit } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { HeroSplit } from "@trinkui/react";

export default function Example() {
  return (
    <HeroSplit
      pill="New release"
      title="The modern way to build landing pages"
      subtitle="Ship faster with production-ready components built for React."
      primaryAction={{ label: "Get Started", href: "/docs" }}
      secondaryAction={{ label: "View on GitHub", href: "https://github.com/trinkui/trinkui", variant: "outline" }}
      image={{ src: "/product.png", alt: "Product screenshot" }}
    />
  );
}`;

const props = [
  { name: "title", type: "string", required: true, description: "Main headline text" },
  { name: "subtitle", type: "string", description: "Supporting description" },
  { name: "pill", type: "string", description: "Badge label shown above the headline" },
  { name: "primaryAction", type: "ActionProps", description: "Primary CTA button" },
  { name: "secondaryAction", type: "ActionProps", description: "Secondary CTA button" },
  { name: "image", type: "ImageProps", description: "Image shown on the right side" },
  { name: "reversed", type: "boolean", default: "false", description: "Flip layout — image left, text right" },
  { name: "animated", type: "boolean", default: "true", description: "Enable entrance animations" },
  { name: "theme", type: '"light" | "dark"', description: "Section color theme" },
  { name: "className", type: "string", description: "Extra CSS classes" },
];

export default function HeroSplitPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Hero</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">HeroSplit</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Split hero section with text on one side and image on the other (50/50 grid layout).
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Preview</h2>
        <ComponentPreview code={exampleCode}>
          <HeroSplit
            pill="New release"
            title="The modern way to build landing pages"
            subtitle="Ship faster with production-ready components built for React."
            primaryAction={{ label: "Get Started", href: "#" }}
            secondaryAction={{ label: "View on GitHub", href: "#", variant: "outline" }}
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
