import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Inline Spacer demo (pure JSX + Tailwind, no @trinkui/react)        */
/* ------------------------------------------------------------------ */

function DemoSpacer({ x, y }: { x?: number; y?: number }) {
  return (
    <div
      aria-hidden="true"
      style={{
        width: x ? `${x * 4}px` : undefined,
        height: y ? `${y * 4}px` : undefined,
      }}
    />
  );
}

function DemoBox({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-center justify-center rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-4 py-2 text-sm text-[rgb(var(--trinkui-fg))]">
      {children}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Code strings                                                       */
/* ------------------------------------------------------------------ */

const verticalCode = `import { Spacer } from "@trinkui/react";

export default function Example() {
  return (
    <div className="p-8">
      <div className="rounded bg-surface px-4 py-2">Block A</div>
      <Spacer y={4} />   {/* 16px */}
      <div className="rounded bg-surface px-4 py-2">Block B</div>
      <Spacer y={8} />   {/* 32px */}
      <div className="rounded bg-surface px-4 py-2">Block C</div>
      <Spacer y={16} />  {/* 64px */}
      <div className="rounded bg-surface px-4 py-2">Block D</div>
    </div>
  );
}`;

const horizontalCode = `import { Spacer } from "@trinkui/react";

export default function Example() {
  return (
    <div className="flex items-center p-8">
      <div className="rounded bg-surface px-4 py-2">Left</div>
      <Spacer x={4} />   {/* 16px */}
      <div className="rounded bg-surface px-4 py-2">Middle</div>
      <Spacer x={8} />   {/* 32px */}
      <div className="rounded bg-surface px-4 py-2">Right</div>
    </div>
  );
}`;

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

const props = [
  { name: "x", type: "number", description: "Horizontal space in multiples of 4px (e.g. x={4} = 16px)" },
  { name: "y", type: "number", description: "Vertical space in multiples of 4px (e.g. y={4} = 16px)" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SpacerPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Spacer</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Spacing utility component that adds consistent vertical or horizontal whitespace. Values are multiples of 4px.
        </p>
      </div>

      {/* Installation */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Installation</h2>
        <pre className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[#0d1117] px-4 py-3 text-sm text-slate-200">
          <code>npm install @trinkui/react</code>
        </pre>
      </div>

      {/* Import */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Import</h2>
        <pre className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[#0d1117] px-4 py-3 text-sm text-slate-200">
          <code>{`import { Spacer } from "@trinkui/react";`}</code>
        </pre>
      </div>

      {/* Vertical spacing */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Vertical Spacing</h2>
        <ComponentPreview code={verticalCode}>
          <div className="p-8">
            <DemoBox>Block A</DemoBox>
            <DemoSpacer y={4} />
            <DemoBox>Block B (y=4, 16px gap)</DemoBox>
            <DemoSpacer y={8} />
            <DemoBox>Block C (y=8, 32px gap)</DemoBox>
            <DemoSpacer y={16} />
            <DemoBox>Block D (y=16, 64px gap)</DemoBox>
          </div>
        </ComponentPreview>
      </div>

      {/* Horizontal spacing */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Horizontal Spacing</h2>
        <ComponentPreview code={horizontalCode}>
          <div className="flex items-center p-8">
            <DemoBox>Left</DemoBox>
            <DemoSpacer x={4} />
            <DemoBox>Middle (x=4)</DemoBox>
            <DemoSpacer x={8} />
            <DemoBox>Right (x=8)</DemoBox>
          </div>
        </ComponentPreview>
      </div>

      {/* Props */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Props</h2>
        <PropsTable props={props} />
      </div>

      {/* Accessibility */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[rgb(var(--trinkui-muted))]">
          <li>Renders with <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-hidden=&quot;true&quot;</code> since it is purely decorative.</li>
          <li>Does not affect the accessibility tree or screen reader output.</li>
        </ul>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between border-t border-[rgb(var(--trinkui-border)/0.4)] pt-6">
        <Link
          href="/components/snippet"
          className="text-sm font-medium text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-primary))]"
        >
          &larr; Snippet
        </Link>
        <Link
          href="/components/spinner"
          className="text-sm font-medium text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-primary))]"
        >
          Spinner &rarr;
        </Link>
      </div>
    </div>
  );
}
