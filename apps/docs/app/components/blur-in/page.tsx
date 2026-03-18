import { BlurIn } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { BlurIn } from "@trinkui/react";

export default function Example() {
  return (
    <BlurIn scrollTrigger={false}>
      <div className="mx-auto w-48 rounded-xl bg-[rgb(var(--trinkui-primary)/0.1)] p-8 text-center">
        Blurred in content
      </div>
    </BlurIn>
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
    default: "0.6",
    description: "Animation duration (seconds)",
  },
  {
    name: "blur",
    type: "number",
    default: "8",
    description: "Blur amount in pixels",
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

export default function BlurInPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Animation</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">BlurIn</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Fades and unblurs children on entrance. Creates a sharp, modern reveal effect.
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
            <BlurIn scrollTrigger={false}>
              <div className="mx-auto w-48 rounded-xl bg-[rgb(var(--trinkui-primary)/0.1)] p-8 text-center text-[rgb(var(--trinkui-fg))]">
                Blurred in content
              </div>
            </BlurIn>
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
