import { Divider } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { Divider } from "@trinkui/react";

export default function Example() {
  return (
    <div className="p-8 space-y-6">
      <Divider />
      <Divider label="OR" />
    </div>
  );
}`;

const props = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    default: '"horizontal"',
    description: "Direction of the divider line",
  },
  {
    name: "label",
    type: "string",
    description: "Center label text",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

export default function DividerPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Divider</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Horizontal or vertical separator line with optional centered label text.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Installation</h2>
        <pre className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[#0d1117] px-4 py-3 text-sm text-slate-200">
          <code>npm install @trinkui/react</code>
        </pre>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Preview</h2>
        <ComponentPreview code={exampleCode}>
          <div className="space-y-6 p-8">
            <Divider />
            <Divider label="OR" />
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
