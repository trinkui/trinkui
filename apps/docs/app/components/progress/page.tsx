"use client";

function ProgressBar({ value, color, label, showValue }: { value: number; color: string; label?: string; showValue?: boolean }) {
  const colorMap: Record<string, string> = {
    primary: "rgb(var(--trinkui-primary))",
    success: "rgb(var(--trinkui-success))",
    warning: "rgb(var(--trinkui-warning))",
    danger: "rgb(var(--trinkui-danger))",
  };
  const fillColor = colorMap[color] || colorMap.primary;

  return (
    <div className="w-full">
      {(label || showValue) && (
        <div className="mb-1.5 flex items-center justify-between text-sm">
          {label && <span className="text-[rgb(var(--trinkui-fg))]">{label}</span>}
          {showValue && <span className="text-[rgb(var(--trinkui-muted))]">{value}%</span>}
        </div>
      )}
      <div className="h-2.5 w-full overflow-hidden rounded-full bg-[rgb(var(--trinkui-secondary))]">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{ width: `${value}%`, backgroundColor: fillColor }}
        />
      </div>
    </div>
  );
}

export default function ProgressPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Components</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Progress</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          A progress bar that visually indicates the completion status of a task or process. Supports sizes, colors, labels, and striped/animated styles.
        </p>
      </div>

      {/* Live Demo: Progress Bars */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Live Demo</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Progress bars at different values and colors.
        </p>
        <div className="rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] p-6">
          <div className="space-y-5">
            <ProgressBar value={25} color="primary" label="Upload" showValue />
            <ProgressBar value={50} color="success" label="Processing" showValue />
            <ProgressBar value={75} color="warning" label="Storage" showValue />
            <ProgressBar value={100} color="danger" label="Disk Usage" showValue />
          </div>
        </div>
      </section>

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
          <code>{`import { Progress } from "@trinkui/react";`}</code>
        </pre>
      </section>

      {/* Usage */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Set the <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">value</code> prop to a number between 0 and 100.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Progress value={45} />

<Progress value={75} label="Uploading..." showValue />`}</code>
        </pre>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sizes</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Available in three sizes: <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">sm</code>, <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">md</code>, and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">lg</code>.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Progress size="sm" value={30} />
<Progress size="md" value={50} />
<Progress size="lg" value={70} />`}</code>
        </pre>
      </section>

      {/* Colors */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Colors</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Use the <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">color</code> prop to change the fill color.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Progress color="primary" value={60} />
<Progress color="secondary" value={60} />
<Progress color="success" value={60} />
<Progress color="warning" value={60} />
<Progress color="danger" value={60} />`}</code>
        </pre>
      </section>

      {/* Striped and Animated */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Striped and Animated</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Add visual flair with striped patterns and animation.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`{/* Striped pattern */}
<Progress value={65} striped />

{/* Striped with animation */}
<Progress value={65} striped animated />`}</code>
        </pre>
      </section>

      {/* With Label and Value */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Label and Value Display</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Show a label and percentage value alongside the progress bar.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Progress value={80} label="Storage used" showValue />`}</code>
        </pre>
      </section>

      {/* Props */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Props</h2>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[rgb(var(--trinkui-border))] text-left">
                <th className="py-3 pr-4 font-medium text-[rgb(var(--trinkui-muted))]">Prop</th>
                <th className="py-3 pr-4 font-medium text-[rgb(var(--trinkui-muted))]">Type</th>
                <th className="py-3 pr-4 font-medium text-[rgb(var(--trinkui-muted))]">Default</th>
                <th className="py-3 font-medium text-[rgb(var(--trinkui-muted))]">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgb(var(--trinkui-border)/0.5)]">
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">value</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">number</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">0</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Current progress value between 0 and 100</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">size</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"sm" | "md" | "lg"`}</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"md"`}</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Height of the progress bar</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">color</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"primary" | "secondary" | "success" | "warning" | "danger"`}</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"primary"`}</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Fill color of the progress bar</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">showValue</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Display the percentage value text</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">label</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Label text displayed above the progress bar</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">striped</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Apply a striped pattern to the progress fill</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">animated</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Animate the striped pattern (requires striped=true)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-[rgb(var(--trinkui-muted))]">
          <li>Uses <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;progressbar&quot;</code> for proper semantic meaning.</li>
          <li>Applies <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-valuenow</code>, <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-valuemin</code>, and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-valuemax</code> to communicate progress to assistive technologies.</li>
          <li>When a <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">label</code> is provided, it is used as <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-label</code> for the progress bar.</li>
          <li>Respects <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">prefers-reduced-motion</code> — striped animation is paused for users who prefer reduced motion.</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <a href="/components/popover" className="text-sm text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors">
          &larr; Popover
        </a>
        <a href="/components/radio-group" className="text-sm text-[rgb(var(--trinkui-primary))] hover:underline">
          Radio Group &rarr;
        </a>
      </div>
    </div>
  );
}
