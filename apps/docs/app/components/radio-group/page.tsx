"use client";

import { useState } from "react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Inline RadioGroup demo (pure JSX + Tailwind, no @trinkui/react)    */
/* ------------------------------------------------------------------ */

interface RadioOption {
  label: string;
  value: string;
  description?: string;
  disabled?: boolean;
}

const sizeMap = {
  sm: { ring: "h-3.5 w-3.5", dot: "h-1.5 w-1.5", text: "text-sm", desc: "text-xs" },
  md: { ring: "h-4 w-4", dot: "h-2 w-2", text: "text-sm", desc: "text-xs" },
  lg: { ring: "h-5 w-5", dot: "h-2.5 w-2.5", text: "text-base", desc: "text-sm" },
};

function DemoRadioGroup({
  options,
  defaultValue,
  label,
  orientation = "vertical",
  size = "md",
  disabled = false,
}: {
  options: RadioOption[];
  defaultValue?: string;
  label?: string;
  orientation?: "vertical" | "horizontal";
  size?: "sm" | "md" | "lg";
  disabled?: boolean;
}) {
  const [selected, setSelected] = useState(defaultValue ?? "");
  const s = sizeMap[size];

  return (
    <fieldset className={disabled ? "opacity-50" : ""} disabled={disabled}>
      {label && (
        <legend className="mb-2 text-sm font-medium text-[rgb(var(--trinkui-fg))]">{label}</legend>
      )}
      <div className={`flex gap-3 ${orientation === "horizontal" ? "flex-row flex-wrap" : "flex-col"}`}>
        {options.map((opt) => {
          const isSelected = selected === opt.value;
          const isDisabled = disabled || opt.disabled;

          return (
            <label
              key={opt.value}
              className={`flex cursor-pointer items-start gap-2.5 ${isDisabled ? "cursor-not-allowed opacity-50" : ""}`}
            >
              <span className="relative mt-0.5 flex items-center justify-center">
                <input
                  type="radio"
                  name={label ?? "radio-group"}
                  value={opt.value}
                  checked={isSelected}
                  disabled={isDisabled}
                  onChange={() => setSelected(opt.value)}
                  className="sr-only"
                />
                <span
                  className={`flex items-center justify-center rounded-full border-2 transition-colors ${s.ring} ${
                    isSelected
                      ? "border-[rgb(var(--trinkui-primary))] bg-[rgb(var(--trinkui-primary))]"
                      : "border-[rgb(var(--trinkui-border))] bg-transparent"
                  } focus-visible:ring-2 focus-visible:ring-[rgb(var(--trinkui-primary))]`}
                >
                  {isSelected && <span className={`rounded-full bg-white ${s.dot}`} />}
                </span>
              </span>
              <span>
                <span className={`block font-medium text-[rgb(var(--trinkui-fg))] ${s.text}`}>{opt.label}</span>
                {opt.description && (
                  <span className={`block text-[rgb(var(--trinkui-muted))] ${s.desc}`}>{opt.description}</span>
                )}
              </span>
            </label>
          );
        })}
      </div>
    </fieldset>
  );
}

/* ------------------------------------------------------------------ */
/*  Code strings                                                       */
/* ------------------------------------------------------------------ */

const usageCode = `import { RadioGroup } from "@trinkui/react";

export default function Example() {
  return (
    <div className="p-8">
      <RadioGroup
        label="Select a plan"
        options={[
          { label: "Free", value: "free", description: "Up to 5 projects" },
          { label: "Pro", value: "pro", description: "Unlimited projects" },
          { label: "Enterprise", value: "enterprise", description: "Custom limits" },
        ]}
        defaultValue="pro"
      />
    </div>
  );
}`;

const sizesCode = `import { RadioGroup } from "@trinkui/react";

const options = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
];

export default function Example() {
  return (
    <div className="flex flex-col gap-8 p-8">
      <RadioGroup label="Small" size="sm" options={options} defaultValue="a" />
      <RadioGroup label="Medium" size="md" options={options} defaultValue="a" />
      <RadioGroup label="Large" size="lg" options={options} defaultValue="a" />
    </div>
  );
}`;

const horizontalCode = `import { RadioGroup } from "@trinkui/react";

export default function Example() {
  return (
    <div className="p-8">
      <RadioGroup
        label="Orientation"
        orientation="horizontal"
        options={[
          { label: "Left", value: "left" },
          { label: "Center", value: "center" },
          { label: "Right", value: "right" },
        ]}
        defaultValue="center"
      />
    </div>
  );
}`;

const disabledCode = `import { RadioGroup } from "@trinkui/react";

export default function Example() {
  return (
    <div className="p-8">
      <RadioGroup
        label="Disabled group"
        disabled
        options={[
          { label: "Option A", value: "a" },
          { label: "Option B", value: "b" },
        ]}
        defaultValue="a"
      />
    </div>
  );
}`;

const simpleOptions = [
  { label: "Option A", value: "a" },
  { label: "Option B", value: "b" },
];

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

const groupProps = [
  { name: "options", type: "RadioOption[]", required: true, description: "Array of radio options to render" },
  { name: "value", type: "string", description: "Controlled selected value" },
  { name: "defaultValue", type: "string", description: "Initial uncontrolled value" },
  { name: "onChange", type: "(value: string) => void", description: "Callback when selection changes" },
  { name: "label", type: "string", description: "Group label rendered as a fieldset legend" },
  { name: "orientation", type: '"vertical" | "horizontal"', default: '"vertical"', description: "Layout direction of the radio items" },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of the radio indicators and text" },
  { name: "disabled", type: "boolean", default: "false", description: "Disable all radio options" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

const optionProps = [
  { name: "label", type: "string", required: true, description: "Display label for the option" },
  { name: "value", type: "string", required: true, description: "Unique value for the option" },
  { name: "description", type: "string", description: "Secondary description text" },
  { name: "disabled", type: "boolean", default: "false", description: "Disable this individual option" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function RadioGroupPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Radio Group</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Radio button group for selecting a single option from a list. Supports descriptions, multiple sizes, and horizontal/vertical orientation.
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
          <code>{`import { RadioGroup } from "@trinkui/react";`}</code>
        </pre>
      </div>

      {/* Usage */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <ComponentPreview code={usageCode}>
          <div className="p-8">
            <DemoRadioGroup
              label="Select a plan"
              options={[
                { label: "Free", value: "free", description: "Up to 5 projects" },
                { label: "Pro", value: "pro", description: "Unlimited projects" },
                { label: "Enterprise", value: "enterprise", description: "Custom limits" },
              ]}
              defaultValue="pro"
            />
          </div>
        </ComponentPreview>
      </div>

      {/* Sizes */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sizes</h2>
        <ComponentPreview code={sizesCode}>
          <div className="flex flex-col gap-8 p-8">
            <DemoRadioGroup label="Small" size="sm" options={simpleOptions} defaultValue="a" />
            <DemoRadioGroup label="Medium" size="md" options={simpleOptions} defaultValue="a" />
            <DemoRadioGroup label="Large" size="lg" options={simpleOptions} defaultValue="a" />
          </div>
        </ComponentPreview>
      </div>

      {/* Horizontal */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Horizontal Orientation</h2>
        <ComponentPreview code={horizontalCode}>
          <div className="p-8">
            <DemoRadioGroup
              label="Orientation"
              orientation="horizontal"
              options={[
                { label: "Left", value: "left" },
                { label: "Center", value: "center" },
                { label: "Right", value: "right" },
              ]}
              defaultValue="center"
            />
          </div>
        </ComponentPreview>
      </div>

      {/* Disabled */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Disabled</h2>
        <ComponentPreview code={disabledCode}>
          <div className="p-8">
            <DemoRadioGroup
              label="Disabled group"
              disabled
              options={simpleOptions}
              defaultValue="a"
            />
          </div>
        </ComponentPreview>
      </div>

      {/* RadioGroup Props */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">RadioGroup Props</h2>
        <PropsTable props={groupProps} />
      </div>

      {/* RadioOption Props */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">RadioOption Props</h2>
        <PropsTable props={optionProps} />
      </div>

      {/* Accessibility */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[rgb(var(--trinkui-muted))]">
          <li>Wraps options in a <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">&lt;fieldset&gt;</code> with a <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">&lt;legend&gt;</code> for the group label.</li>
          <li>Uses native <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">&lt;input type=&quot;radio&quot;&gt;</code> elements for full keyboard and screen reader support.</li>
          <li>Arrow keys navigate between options within the group.</li>
          <li>The checked state is conveyed via the native <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">checked</code> attribute.</li>
          <li>Disabled options are excluded from the tab order.</li>
        </ul>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between border-t border-[rgb(var(--trinkui-border)/0.4)] pt-6">
        <Link
          href="/components/progress"
          className="text-sm font-medium text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-primary))]"
        >
          &larr; Progress
        </Link>
        <Link
          href="/components/select"
          className="text-sm font-medium text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-primary))]"
        >
          Select &rarr;
        </Link>
      </div>
    </div>
  );
}
