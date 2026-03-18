import { StaggerChildren } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { StaggerChildren } from "@trinkui/react";

export default function Example() {
  return (
    <StaggerChildren staggerDelay={0.1} childAnimation="slideUp" scrollTrigger={false}>
      <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4">Item one</div>
      <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4">Item two</div>
      <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4">Item three</div>
    </StaggerChildren>
  );
}`;

const fadeCode = `import { StaggerChildren } from "@trinkui/react";

export default function Example() {
  return (
    <StaggerChildren
      staggerDelay={0.15}
      initialDelay={0.2}
      childAnimation="fadeIn"
      scrollTrigger={false}
      className="grid grid-cols-3 gap-4"
    >
      <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4 text-center">A</div>
      <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4 text-center">B</div>
      <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4 text-center">C</div>
    </StaggerChildren>
  );
}`;

const props = [
  {
    name: "children",
    type: "ReactNode",
    required: true,
    description: "Direct children to stagger — each child is animated individually",
  },
  {
    name: "staggerDelay",
    type: "number",
    default: "0.1",
    description: "Time between each child's animation start (seconds)",
  },
  {
    name: "initialDelay",
    type: "number",
    default: "0",
    description: "Delay before the first child begins animating (seconds)",
  },
  {
    name: "childAnimation",
    type: '"fadeIn" | "slideUp"',
    default: '"slideUp"',
    description: "Animation style applied to each child",
  },
  {
    name: "slideDistance",
    type: "number",
    default: "24",
    description: "Distance in pixels for the slideUp animation",
  },
  {
    name: "scrollTrigger",
    type: "boolean",
    default: "true",
    description: "When true, animation fires as the container scrolls into view",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes applied to the wrapper div",
  },
];

export default function StaggerChildrenPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Animation</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">StaggerChildren</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Staggers the entrance animation of its direct children so each item appears one after another. Supports both{" "}
          <code className="rounded bg-[rgb(var(--trinkui-surface))] px-1 py-0.5 font-mono text-xs">fadeIn</code> and{" "}
          <code className="rounded bg-[rgb(var(--trinkui-surface))] px-1 py-0.5 font-mono text-xs">slideUp</code> child animations. Respects{" "}
          <code className="rounded bg-[rgb(var(--trinkui-surface))] px-1 py-0.5 font-mono text-xs">prefers-reduced-motion</code> automatically.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Slide up (default)</h2>
        <ComponentPreview code={exampleCode}>
          <div className="space-y-4 p-8">
            <StaggerChildren staggerDelay={0.1} childAnimation="slideUp" scrollTrigger={false}>
              <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4 text-[rgb(var(--trinkui-fg))]">Item one</div>
              <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4 text-[rgb(var(--trinkui-fg))]">Item two</div>
              <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4 text-[rgb(var(--trinkui-fg))]">Item three</div>
            </StaggerChildren>
          </div>
        </ComponentPreview>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Fade in grid</h2>
        <ComponentPreview code={fadeCode}>
          <div className="p-8">
            <StaggerChildren
              staggerDelay={0.15}
              initialDelay={0.2}
              childAnimation="fadeIn"
              scrollTrigger={false}
              className="grid grid-cols-3 gap-4"
            >
              <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4 text-center text-[rgb(var(--trinkui-fg))]">A</div>
              <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4 text-center text-[rgb(var(--trinkui-fg))]">B</div>
              <div className="rounded-lg border border-[rgb(var(--trinkui-border))] p-4 text-center text-[rgb(var(--trinkui-fg))]">C</div>
            </StaggerChildren>
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
