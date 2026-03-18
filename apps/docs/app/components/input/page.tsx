import { Input } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const variantsCode = `import { Input } from "@trinkui/react";

export default function Example() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <Input variant="default" placeholder="Default variant" />
      <Input variant="filled" placeholder="Filled variant" />
      <Input variant="ghost" placeholder="Ghost variant" />
    </div>
  );
}`;

const statesCode = `import { Input } from "@trinkui/react";

export default function Example() {
  return (
    <div className="flex flex-col gap-4 p-8">
      <Input label="Email address" placeholder="you@example.com" hint="We'll never share your email." />
      <Input label="Password" placeholder="Enter password" error="Password must be at least 8 characters." />
    </div>
  );
}`;

const props = [
  {
    name: "variant",
    type: '"default" | "filled" | "ghost"',
    default: '"default"',
    description: "Visual style variant of the input",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    default: '"md"',
    description: "Size of the input",
  },
  {
    name: "label",
    type: "string",
    description: "Label text shown above the input",
  },
  {
    name: "hint",
    type: "string",
    description: "Helper text shown below the input",
  },
  {
    name: "error",
    type: "string",
    description: "Error message shown below the input; also applies error styling",
  },
  {
    name: "leftSlot",
    type: "ReactNode",
    description: "Icon or element rendered on the left side of the input",
  },
  {
    name: "rightSlot",
    type: "ReactNode",
    description: "Icon or element rendered on the right side of the input",
  },
  {
    name: "fullWidth",
    type: "boolean",
    default: "true",
    description: "Stretch input to fill its container width",
  },
  {
    name: "disabled",
    type: "boolean",
    description: "Disable the input",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

export default function InputPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Input</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Text input field with label, hint, error state, and left/right slots for icons.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Installation</h2>
        <pre className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[#0d1117] px-4 py-3 text-sm text-slate-200">
          <code>npm install @trinkui/react</code>
        </pre>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Variants</h2>
        <ComponentPreview code={variantsCode}>
          <div className="flex flex-col gap-4 p-8">
            <Input variant="default" placeholder="Default variant" />
            <Input variant="filled" placeholder="Filled variant" />
            <Input variant="ghost" placeholder="Ghost variant" />
          </div>
        </ComponentPreview>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">States</h2>
        <ComponentPreview code={statesCode}>
          <div className="flex flex-col gap-4 p-8">
            <Input label="Email address" placeholder="you@example.com" hint="We'll never share your email." />
            <Input label="Password" placeholder="Enter password" error="Password must be at least 8 characters." />
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
