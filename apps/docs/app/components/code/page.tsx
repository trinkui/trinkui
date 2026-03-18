"use client";

import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Inline Demo: Code                                                  */
/* ------------------------------------------------------------------ */

function DemoCode({
  children,
  color = "default",
  size = "md",
}: {
  children: React.ReactNode;
  color?: "default" | "primary" | "secondary" | "success" | "warning" | "danger";
  size?: "sm" | "md" | "lg";
}) {
  const colorMap: Record<string, string> = {
    default: "bg-[rgb(var(--trinkui-border)/0.3)] text-[rgb(var(--trinkui-fg))]",
    primary: "bg-[rgb(var(--trinkui-primary)/0.15)] text-[rgb(var(--trinkui-primary))]",
    secondary: "bg-[rgb(var(--trinkui-secondary))] text-[rgb(var(--trinkui-secondary-fg))]",
    success: "bg-emerald-500/15 text-emerald-400",
    warning: "bg-amber-500/15 text-amber-400",
    danger: "bg-red-500/15 text-red-400",
  };

  const sizeMap: Record<string, string> = {
    sm: "px-1 py-0.5 text-xs",
    md: "px-1.5 py-0.5 text-sm",
    lg: "px-2 py-1 text-base",
  };

  return (
    <code
      className={`rounded-[var(--trinkui-radius-sm)] font-mono ${colorMap[color]} ${sizeMap[size]}`}
    >
      {children}
    </code>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function CodePage() {
  const [activeColor, setActiveColor] = useState<string>("primary");
  const [activeSize, setActiveSize] = useState<string>("md");

  const colors = ["default", "primary", "secondary", "success", "warning", "danger"] as const;
  const sizes = ["sm", "md", "lg"] as const;

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Components</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Code</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Inline code highlight for displaying code snippets, variable names, or keyboard commands within text. Supports multiple colors and sizes.
        </p>
      </div>

      {/* Installation */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Installation</h2>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>npm install @trinkui/react</code>
        </pre>
      </section>

      {/* Import */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Import</h2>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`import { Code } from "@trinkui/react";`}</code>
        </pre>
      </section>

      {/* Usage — Default */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Wrap inline code text to give it a styled background and monospace font.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <p className="text-sm text-[rgb(var(--trinkui-fg))]">
              Install dependencies with <DemoCode>npm install</DemoCode> and start the dev server using <DemoCode>npm run dev</DemoCode>.
            </p>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<p>
  Install dependencies with <Code>npm install</Code> and
  start the dev server using <Code>npm run dev</Code>.
</p>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Colors — Interactive */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Colors</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Click a color below to preview it. Six color variants are available.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            {/* Color selector */}
            <div className="mb-6 flex flex-wrap gap-2">
              {colors.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveColor(c)}
                  className={`rounded-[var(--trinkui-radius-md)] border px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeColor === c
                      ? "border-[rgb(var(--trinkui-primary))] bg-[rgb(var(--trinkui-primary)/0.1)] text-[rgb(var(--trinkui-primary))]"
                      : "border-[rgb(var(--trinkui-border))] text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            {/* Preview */}
            <p className="text-sm text-[rgb(var(--trinkui-fg))]">
              The function <DemoCode color={activeColor as typeof colors[number]}>console.log()</DemoCode> outputs data to the browser console.
            </p>

            {/* All colors at once */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {colors.map((c) => (
                <DemoCode key={c} color={c}>
                  {c}
                </DemoCode>
              ))}
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<Code color="default">default</Code>
<Code color="primary">primary</Code>
<Code color="secondary">secondary</Code>
<Code color="success">success</Code>
<Code color="warning">warning</Code>
<Code color="danger">danger</Code>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Sizes — Interactive */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sizes</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Toggle between sizes to see how the code element scales.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            {/* Size selector */}
            <div className="mb-6 flex gap-2">
              {sizes.map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveSize(s)}
                  className={`rounded-[var(--trinkui-radius-md)] border px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeSize === s
                      ? "border-[rgb(var(--trinkui-primary))] bg-[rgb(var(--trinkui-primary)/0.1)] text-[rgb(var(--trinkui-primary))]"
                      : "border-[rgb(var(--trinkui-border))] text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            {/* Preview */}
            <div className="flex items-baseline gap-4">
              <DemoCode size={activeSize as typeof sizes[number]} color="primary">
                useState()
              </DemoCode>
              <DemoCode size={activeSize as typeof sizes[number]} color="success">
                return value;
              </DemoCode>
              <DemoCode size={activeSize as typeof sizes[number]} color="warning">
                deprecated
              </DemoCode>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<Code size="sm">useState()</Code>
<Code size="md">useState()</Code>
<Code size="lg">useState()</Code>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Combined Example */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">In Context</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Code can be used inline within paragraphs to highlight technical terms.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="space-y-3 p-8 text-sm text-[rgb(var(--trinkui-fg))]">
            <p>
              Use <DemoCode color="primary">forwardRef</DemoCode> to pass a ref through a component to one of its children.
            </p>
            <p>
              The <DemoCode color="warning">any</DemoCode> type should be avoided in strict TypeScript projects.
            </p>
            <p>
              Successfully deployed to <DemoCode color="success">production</DemoCode> at <DemoCode>v2.4.1</DemoCode>.
            </p>
            <p>
              Error: <DemoCode color="danger">TypeError: Cannot read properties of undefined</DemoCode>
            </p>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<p>Use <Code color="primary">forwardRef</Code> to pass a ref...</p>
<p>The <Code color="warning">any</Code> type should be avoided...</p>
<p>Deployed to <Code color="success">production</Code> at <Code>v2.4.1</Code>.</p>
<p>Error: <Code color="danger">TypeError: Cannot read...</Code></p>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Props */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Props</h2>
        <div className="overflow-x-auto rounded-lg border border-[rgb(var(--trinkui-border))]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
                <th className="px-4 py-3 font-medium text-[rgb(var(--trinkui-fg))]">Prop</th>
                <th className="px-4 py-3 font-medium text-[rgb(var(--trinkui-fg))]">Type</th>
                <th className="px-4 py-3 font-medium text-[rgb(var(--trinkui-fg))]">Default</th>
                <th className="px-4 py-3 font-medium text-[rgb(var(--trinkui-fg))]">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgb(var(--trinkui-border))]">
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">children</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">ReactNode</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">The code text to display</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">color</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"default" | "primary" | "secondary" | "success" | "warning" | "danger"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"default"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Color theme of the code highlight</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">size</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"sm" | "md" | "lg"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"md"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Size of the code element</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[rgb(var(--trinkui-muted))]">
          <li>Uses the semantic <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">&lt;code&gt;</code> HTML element, which screen readers recognize as code content.</li>
          <li>Monospace font provides a visual distinction from surrounding text.</li>
          <li>Color is not the sole indicator of meaning — the monospace font and background provide additional differentiation.</li>
          <li>Sufficient color contrast ratios are maintained across all color variants.</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <a href="/components/chip" className="text-sm text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors">
          &larr; Chip
        </a>
        <a href="/components/divider" className="text-sm text-[rgb(var(--trinkui-primary))] hover:underline">
          Divider &rarr;
        </a>
      </div>
    </div>
  );
}
