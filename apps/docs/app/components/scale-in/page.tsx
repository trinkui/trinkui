import { ScaleIn } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { ScaleIn } from "@trinkui/react";

export default function Example() {
  return (
    <ScaleIn scrollTrigger={false}>
      <div className="mx-auto w-48 rounded-xl bg-[rgb(var(--trinkui-primary)/0.1)] p-8 text-center">
        Scaled content
      </div>
    </ScaleIn>
  );
}`;

const props = [
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "Content to animate",
  },
  {
    name: "delay",
    type: "number",
    default: "0",
    description: "Delay before animation starts (seconds)",
  },
  {
    name: "duration",
    type: "number",
    default: "0.5",
    description: "Animation duration (seconds)",
  },
  {
    name: "from",
    type: "number",
    default: "0.9",
    description: "Starting scale value 0–1",
  },
  {
    name: "scrollTrigger",
    type: "boolean",
    default: "true",
    description: "When true, animation fires as the element scrolls into view",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes applied to the wrapper div",
  },
];

export default function ScaleInPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Animation</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">ScaleIn</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Scales children from a smaller size to full size on entrance. Ideal for cards and images.
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
          <div className="p-8">
            <ScaleIn scrollTrigger={false}>
              <div className="mx-auto w-48 rounded-xl bg-[rgb(var(--trinkui-primary)/0.1)] p-8 text-center text-[rgb(var(--trinkui-fg))]">
                Scaled content
              </div>
            </ScaleIn>
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
