import { Button } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const variantsCode = `import { Button } from "@trinkui/react";

export default function Example() {
  return (
    <div className="flex flex-wrap gap-3 p-8">
      <Button variant="primary">Primary</Button>
      <Button variant="secondary">Secondary</Button>
      <Button variant="outline">Outline</Button>
      <Button variant="ghost">Ghost</Button>
      <Button variant="destructive">Destructive</Button>
    </div>
  );
}`;

const sizesCode = `import { Button } from "@trinkui/react";

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-3 p-8">
      <Button size="sm">Small</Button>
      <Button size="md">Medium</Button>
      <Button size="lg">Large</Button>
      <Button size="xl">Extra Large</Button>
    </div>
  );
}`;

const props = [
  {
    name: "variant",
    type: '"primary" | "secondary" | "outline" | "ghost" | "destructive"',
    default: '"primary"',
    description: "Visual style variant of the button",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg" | "xl"',
    default: '"md"',
    description: "Size of the button",
  },
  {
    name: "fullWidth",
    type: "boolean",
    default: "false",
    description: "Stretch button to fill its container width",
  },
  {
    name: "loading",
    type: "boolean",
    default: "false",
    description: "Show a loading spinner and disable interaction",
  },
  {
    name: "leftIcon",
    type: "ReactNode",
    description: "Icon element rendered before the button label",
  },
  {
    name: "rightIcon",
    type: "ReactNode",
    description: "Icon element rendered after the button label",
  },
  {
    name: "disabled",
    type: "boolean",
    default: "false",
    description: "Disable the button",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

export default function ButtonPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Button</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Versatile button component with multiple variants, sizes, loading state, and icon slots.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Variants</h2>
        <ComponentPreview code={variantsCode}>
          <div className="flex flex-wrap gap-3 p-8">
            <Button variant="primary">Primary</Button>
            <Button variant="secondary">Secondary</Button>
            <Button variant="outline">Outline</Button>
            <Button variant="ghost">Ghost</Button>
            <Button variant="destructive">Destructive</Button>
          </div>
        </ComponentPreview>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sizes</h2>
        <ComponentPreview code={sizesCode}>
          <div className="flex flex-wrap items-center gap-3 p-8">
            <Button size="sm">Small</Button>
            <Button size="md">Medium</Button>
            <Button size="lg">Large</Button>
            <Button size="xl">Extra Large</Button>
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
