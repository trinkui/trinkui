"use client";

import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Inline Slider primitives (pure JSX + Tailwind, no @trinkui/react) */
/* ------------------------------------------------------------------ */

const sizeMap = {
  sm: { track: "h-1", thumb: "h-3 w-3" },
  md: { track: "h-2", thumb: "h-4 w-4" },
  lg: { track: "h-3", thumb: "h-5 w-5" },
};

const colorMap: Record<string, string> = {
  primary: "bg-[rgb(var(--trinkui-primary))]",
  secondary: "bg-[rgb(var(--trinkui-secondary))]",
  success: "bg-emerald-500",
  warning: "bg-amber-500",
  danger: "bg-rose-500",
};

function DemoSlider({
  value = 40,
  min = 0,
  max = 100,
  label,
  showValue = false,
  size = "md" as "sm" | "md" | "lg",
  color = "primary" as string,
  disabled = false,
}: {
  value?: number;
  min?: number;
  max?: number;
  label?: string;
  showValue?: boolean;
  size?: "sm" | "md" | "lg";
  color?: string;
  disabled?: boolean;
}) {
  const pct = ((value - min) / (max - min)) * 100;
  const s = sizeMap[size];
  const fill = colorMap[color] ?? colorMap.primary;

  return (
    <div className={disabled ? "opacity-50 pointer-events-none" : ""}>
      {(label || showValue) && (
        <div className="mb-1.5 flex items-center justify-between text-sm">
          {label && <span className="text-[rgb(var(--trinkui-fg))]">{label}</span>}
          {showValue && <span className="text-[rgb(var(--trinkui-muted))]">{value}</span>}
        </div>
      )}
      <div
        role="slider"
        aria-valuenow={value}
        aria-valuemin={min}
        aria-valuemax={max}
        aria-label={label ?? "Slider"}
        tabIndex={disabled ? -1 : 0}
        className={`relative w-full rounded-full bg-[rgb(var(--trinkui-border)/0.4)] ${s.track}`}
      >
        <div
          className={`absolute inset-y-0 left-0 rounded-full ${fill}`}
          style={{ width: `${pct}%` }}
        />
        <div
          className={`absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full ${fill} ring-2 ring-[rgb(var(--trinkui-bg))] ${s.thumb} focus-visible:ring-2 focus-visible:ring-[rgb(var(--trinkui-primary))]`}
          style={{ left: `${pct}%` }}
        />
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Code strings                                                       */
/* ------------------------------------------------------------------ */

const sizesCode = `import { Slider } from "@trinkui/react";

export default function Example() {
  return (
    <div className="flex flex-col gap-6 p-8 w-72">
      <Slider size="sm" value={30} label="Small" showValue />
      <Slider size="md" value={50} label="Medium" showValue />
      <Slider size="lg" value={70} label="Large" showValue />
    </div>
  );
}`;

const colorsCode = `import { Slider } from "@trinkui/react";

export default function Example() {
  return (
    <div className="flex flex-col gap-6 p-8 w-72">
      <Slider color="primary" value={40} label="Primary" />
      <Slider color="secondary" value={50} label="Secondary" />
      <Slider color="success" value={60} label="Success" />
      <Slider color="warning" value={70} label="Warning" />
      <Slider color="danger" value={80} label="Danger" />
    </div>
  );
}`;

const disabledCode = `import { Slider } from "@trinkui/react";

export default function Example() {
  return (
    <div className="p-8 w-72">
      <Slider value={50} label="Disabled" disabled />
    </div>
  );
}`;

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

const props = [
  { name: "value", type: "number", description: "Controlled value of the slider" },
  { name: "defaultValue", type: "number", default: "0", description: "Initial uncontrolled value" },
  { name: "onChange", type: "(value: number) => void", description: "Callback when value changes" },
  { name: "min", type: "number", default: "0", description: "Minimum value" },
  { name: "max", type: "number", default: "100", description: "Maximum value" },
  { name: "step", type: "number", default: "1", description: "Step increment" },
  { name: "label", type: "string", description: "Label text above the slider" },
  { name: "showValue", type: "boolean", default: "false", description: "Display current value alongside the label" },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Track and thumb size" },
  { name: "color", type: '"primary" | "secondary" | "success" | "warning" | "danger"', default: '"primary"', description: "Color theme of the filled track and thumb" },
  { name: "disabled", type: "boolean", default: "false", description: "Disable interaction" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SliderPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Slider</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Range slider for selecting a numeric value within a min/max range. Supports multiple sizes, colors, and keyboard interaction.
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
          <code>{`import { Slider } from "@trinkui/react";`}</code>
        </pre>
      </div>

      {/* Sizes */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sizes</h2>
        <ComponentPreview code={sizesCode}>
          <div className="flex flex-col gap-6 p-8 w-72">
            <DemoSlider size="sm" value={30} label="Small" showValue />
            <DemoSlider size="md" value={50} label="Medium" showValue />
            <DemoSlider size="lg" value={70} label="Large" showValue />
          </div>
        </ComponentPreview>
      </div>

      {/* Colors */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Colors</h2>
        <ComponentPreview code={colorsCode}>
          <div className="flex flex-col gap-6 p-8 w-72">
            <DemoSlider color="primary" value={40} label="Primary" />
            <DemoSlider color="secondary" value={50} label="Secondary" />
            <DemoSlider color="success" value={60} label="Success" />
            <DemoSlider color="warning" value={70} label="Warning" />
            <DemoSlider color="danger" value={80} label="Danger" />
          </div>
        </ComponentPreview>
      </div>

      {/* Disabled */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Disabled</h2>
        <ComponentPreview code={disabledCode}>
          <div className="p-8 w-72">
            <DemoSlider value={50} label="Disabled" disabled />
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
          <li>Uses <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;slider&quot;</code> on the track element.</li>
          <li>Exposes <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-valuenow</code>, <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-valuemin</code>, and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-valuemax</code>.</li>
          <li>Arrow keys (left/right and up/down) adjust the value by one step.</li>
          <li>Home/End keys jump to the min/max value.</li>
          <li>Thumb is focusable with a visible <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">focus-visible</code> ring.</li>
        </ul>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between border-t border-[rgb(var(--trinkui-border)/0.4)] pt-6">
        <Link
          href="/components/skeleton"
          className="text-sm font-medium text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-primary))]"
        >
          &larr; Skeleton
        </Link>
        <Link
          href="/components/snippet"
          className="text-sm font-medium text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-primary))]"
        >
          Snippet &rarr;
        </Link>
      </div>
    </div>
  );
}
