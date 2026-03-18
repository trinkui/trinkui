import { FadeIn } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { FadeIn } from "@trinkui/react";

export default function Example() {
  return (
    <FadeIn delay={0.2} scrollTrigger={false}>
      <p className="text-lg font-medium">This content fades in on scroll.</p>
    </FadeIn>
  );
}`;

const staggerCode = `import { FadeIn } from "@trinkui/react";

export default function Example() {
  return (
    <div className="space-y-4">
      <FadeIn delay={0} scrollTrigger={false}>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4">First item</div>
      </FadeIn>
      <FadeIn delay={0.1} scrollTrigger={false}>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4">Second item</div>
      </FadeIn>
      <FadeIn delay={0.2} scrollTrigger={false}>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4">Third item</div>
      </FadeIn>
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
    default: "0.5",
    description: "Animation duration (seconds)",
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

export default function FadeInPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Animation</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">FadeIn</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Scroll-triggered fade-in animation wrapper. Wraps any content and animates it from transparent to fully visible as it enters the viewport. Respects{" "}
          <code className="rounded bg-[rgb(var(--trinkui-surface))] px-1 py-0.5 font-mono text-xs">prefers-reduced-motion</code> automatically.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Preview</h2>
        <ComponentPreview code={exampleCode}>
          <div className="p-8">
            <FadeIn delay={0.2} scrollTrigger={false}>
              <p className="text-lg font-medium text-[rgb(var(--trinkui-fg))]">This content fades in on scroll.</p>
            </FadeIn>
          </div>
        </ComponentPreview>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Staggered with delay</h2>
        <ComponentPreview code={staggerCode}>
          <div className="space-y-4 p-8">
            <FadeIn delay={0} scrollTrigger={false}>
              <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4 text-[rgb(var(--trinkui-fg))]">First item</div>
            </FadeIn>
            <FadeIn delay={0.1} scrollTrigger={false}>
              <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4 text-[rgb(var(--trinkui-fg))]">Second item</div>
            </FadeIn>
            <FadeIn delay={0.2} scrollTrigger={false}>
              <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4 text-[rgb(var(--trinkui-fg))]">Third item</div>
            </FadeIn>
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
