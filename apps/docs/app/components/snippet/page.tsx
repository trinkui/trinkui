"use client";

import { useState } from "react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Inline Snippet demo (pure JSX + Tailwind, no @trinkui/react)       */
/* ------------------------------------------------------------------ */

const variantStyles: Record<string, string> = {
  flat: "border-transparent bg-[rgb(var(--trinkui-surface))]",
  bordered: "border-[rgb(var(--trinkui-border))] bg-transparent",
  shadow: "border-transparent bg-[rgb(var(--trinkui-surface))] shadow-[var(--trinkui-shadow-md)]",
};

const colorTextMap: Record<string, string> = {
  default: "text-[rgb(var(--trinkui-fg))]",
  primary: "text-[rgb(var(--trinkui-primary))]",
  secondary: "text-[rgb(var(--trinkui-secondary-fg))]",
  success: "text-emerald-400",
  warning: "text-amber-400",
  danger: "text-rose-400",
};

function DemoSnippet({
  code,
  symbol = "$",
  variant = "flat",
  color = "default",
  copyable = true,
}: {
  code: string;
  symbol?: string;
  variant?: "flat" | "bordered" | "shadow";
  color?: string;
  copyable?: boolean;
}) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    await navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      className={`flex items-center gap-3 rounded-[var(--trinkui-radius-lg)] border px-4 py-2.5 font-mono text-sm ${variantStyles[variant]} ${colorTextMap[color]}`}
    >
      <span className="select-none text-[rgb(var(--trinkui-muted))]">{symbol}</span>
      <span className="flex-1">{code}</span>
      {copyable && (
        <button
          onClick={handleCopy}
          aria-label="Copy to clipboard"
          className="shrink-0 text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--trinkui-primary))] rounded"
        >
          {copied ? (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          ) : (
            <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <rect x="9" y="9" width="13" height="13" rx="2" ry="2" strokeLinecap="round" strokeLinejoin="round" />
              <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          )}
        </button>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Code strings                                                       */
/* ------------------------------------------------------------------ */

const variantsCode = `import { Snippet } from "@trinkui/react";

export default function Example() {
  return (
    <div className="flex flex-col gap-4 p-8 max-w-md">
      <Snippet variant="flat" code="npm install @trinkui/react" />
      <Snippet variant="bordered" code="npm install @trinkui/react" />
      <Snippet variant="shadow" code="npm install @trinkui/react" />
    </div>
  );
}`;

const colorsCode = `import { Snippet } from "@trinkui/react";

export default function Example() {
  return (
    <div className="flex flex-col gap-4 p-8 max-w-md">
      <Snippet color="default" code="npx create-next-app" />
      <Snippet color="primary" code="npx create-next-app" />
      <Snippet color="success" code="npx create-next-app" />
      <Snippet color="warning" code="npx create-next-app" />
      <Snippet color="danger" code="npx create-next-app" />
    </div>
  );
}`;

const noCopyCode = `import { Snippet } from "@trinkui/react";

export default function Example() {
  return (
    <div className="p-8 max-w-md">
      <Snippet code="npm install @trinkui/react" copyable={false} />
    </div>
  );
}`;

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

const props = [
  { name: "code", type: "string", required: true, description: "The code/command text to display" },
  { name: "symbol", type: "string", default: '"$"', description: "Prefix symbol shown before the code" },
  { name: "variant", type: '"flat" | "bordered" | "shadow"', default: '"flat"', description: "Visual style variant" },
  { name: "color", type: '"default" | "primary" | "secondary" | "success" | "warning" | "danger"', default: '"default"', description: "Text color theme" },
  { name: "copyable", type: "boolean", default: "true", description: "Show a copy-to-clipboard button" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SnippetPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Snippet</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Copyable code snippet for displaying shell commands or short code strings. Includes an inline copy button.
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
          <code>{`import { Snippet } from "@trinkui/react";`}</code>
        </pre>
      </div>

      {/* Variants */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Variants</h2>
        <ComponentPreview code={variantsCode}>
          <div className="flex flex-col gap-4 p-8 max-w-md">
            <DemoSnippet variant="flat" code="npm install @trinkui/react" />
            <DemoSnippet variant="bordered" code="npm install @trinkui/react" />
            <DemoSnippet variant="shadow" code="npm install @trinkui/react" />
          </div>
        </ComponentPreview>
      </div>

      {/* Colors */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Colors</h2>
        <ComponentPreview code={colorsCode}>
          <div className="flex flex-col gap-4 p-8 max-w-md">
            <DemoSnippet color="default" code="npx create-next-app" />
            <DemoSnippet color="primary" code="npx create-next-app" />
            <DemoSnippet color="success" code="npx create-next-app" />
            <DemoSnippet color="warning" code="npx create-next-app" />
            <DemoSnippet color="danger" code="npx create-next-app" />
          </div>
        </ComponentPreview>
      </div>

      {/* Non-copyable */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Without Copy Button</h2>
        <ComponentPreview code={noCopyCode}>
          <div className="p-8 max-w-md">
            <DemoSnippet code="npm install @trinkui/react" copyable={false} />
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
          <li>Copy button has <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-label=&quot;Copy to clipboard&quot;</code>.</li>
          <li>Copy button is keyboard-focusable with a visible <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">focus-visible</code> ring.</li>
          <li>Visual feedback (checkmark icon) confirms a successful copy.</li>
        </ul>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between border-t border-[rgb(var(--trinkui-border)/0.4)] pt-6">
        <Link
          href="/components/slider"
          className="text-sm font-medium text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-primary))]"
        >
          &larr; Slider
        </Link>
        <Link
          href="/components/spacer"
          className="text-sm font-medium text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-primary))]"
        >
          Spacer &rarr;
        </Link>
      </div>
    </div>
  );
}
