import { SlideUp } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { SlideUp } from "@trinkui/react";

export default function Example() {
  return (
    <SlideUp delay={0.1} distance={32} scrollTrigger={false}>
      <h2 className="text-2xl font-bold">Slides up into view</h2>
    </SlideUp>
  );
}`;

const staggerCode = `import { SlideUp } from "@trinkui/react";

export default function Example() {
  return (
    <div className="space-y-4">
      <SlideUp delay={0} scrollTrigger={false}>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4">Card one</div>
      </SlideUp>
      <SlideUp delay={0.1} scrollTrigger={false}>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4">Card two</div>
      </SlideUp>
      <SlideUp delay={0.2} scrollTrigger={false}>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4">Card three</div>
      </SlideUp>
    </div>
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
    name: "distance",
    type: "number",
    default: "24",
    description: "Distance in pixels the element travels upward from its start position",
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

export default function SlideUpPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Animation</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">SlideUp</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Slide-up reveal animation wrapper. Elements start below their final position and slide upward while fading in. Respects{" "}
          <code className="rounded bg-[rgb(var(--trinkui-surface))] px-1 py-0.5 font-mono text-xs">prefers-reduced-motion</code> automatically.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Preview</h2>
        <ComponentPreview code={exampleCode}>
          <div className="p-8">
            <SlideUp delay={0.1} distance={32} scrollTrigger={false}>
              <h2 className="text-2xl font-bold text-[rgb(var(--trinkui-fg))]">Slides up into view</h2>
            </SlideUp>
          </div>
        </ComponentPreview>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Staggered with delay</h2>
        <ComponentPreview code={staggerCode}>
          <div className="space-y-4 p-8">
            <SlideUp delay={0} scrollTrigger={false}>
              <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4 text-[rgb(var(--trinkui-fg))]">Card one</div>
            </SlideUp>
            <SlideUp delay={0.1} scrollTrigger={false}>
              <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4 text-[rgb(var(--trinkui-fg))]">Card two</div>
            </SlideUp>
            <SlideUp delay={0.2} scrollTrigger={false}>
              <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4 text-[rgb(var(--trinkui-fg))]">Card three</div>
            </SlideUp>
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
