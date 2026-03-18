import { Badge } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const variantsCode = `import { Badge } from "@trinkui/react";

export default function Example() {
  return (
    <div className="flex flex-wrap gap-3 p-8">
      <Badge variant="default">Default</Badge>
      <Badge variant="primary">Primary</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="destructive">Destructive</Badge>
    </div>
  );
}`;

const sizesCode = `import { Badge } from "@trinkui/react";

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-3 p-8">
      <Badge size="sm" variant="primary">Small</Badge>
      <Badge size="md" variant="primary">Medium</Badge>
    </div>
  );
}`;

const props = [
  {
    name: "variant",
    type: '"default" | "primary" | "secondary" | "outline" | "success" | "warning" | "destructive"',
    default: '"default"',
    description: "Visual style variant of the badge",
  },
  {
    name: "size",
    type: '"sm" | "md"',
    default: '"md"',
    description: "Size of the badge",
  },
  {
    name: "pill",
    type: "boolean",
    default: "true",
    description: "Render with fully rounded pill shape",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

export default function BadgePage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Badge</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Compact label component for statuses, tags, and categorization.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Variants</h2>
        <ComponentPreview code={variantsCode}>
          <div className="flex flex-wrap gap-3 p-8">
            <Badge variant="default">Default</Badge>
            <Badge variant="primary">Primary</Badge>
            <Badge variant="secondary">Secondary</Badge>
            <Badge variant="outline">Outline</Badge>
            <Badge variant="success">Success</Badge>
            <Badge variant="warning">Warning</Badge>
            <Badge variant="destructive">Destructive</Badge>
          </div>
        </ComponentPreview>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sizes</h2>
        <ComponentPreview code={sizesCode}>
          <div className="flex flex-wrap items-center gap-3 p-8">
            <Badge size="sm" variant="primary">Small</Badge>
            <Badge size="md" variant="primary">Medium</Badge>
          </div>
        </ComponentPreview>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Props</h2>
        <PropsTable props={props} />
      </div>
    </div>
  );
}
