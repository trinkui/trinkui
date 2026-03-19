"use client";

export default function TooltipPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Components</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Tooltip</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          A lightweight popup that displays additional information when hovering or focusing on an element.
        </p>
      </div>

      {/* Live Demo */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Demo</h2>
        <div className="rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] p-6">
          <p className="mb-4 text-xs font-medium uppercase tracking-wider text-[rgb(var(--trinkui-muted))]">Hover over the buttons to see tooltips</p>
          <div className="flex flex-wrap items-center gap-6 pt-4 pb-2">
            {/* Tooltip Top */}
            <div className="group relative inline-block">
              <button className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-4 py-2 text-sm font-medium text-[rgb(var(--trinkui-fg))] transition-colors hover:bg-[rgb(var(--trinkui-border)/0.2)]">
                Top
              </button>
              <div className="pointer-events-none absolute bottom-full left-1/2 z-10 mb-2 -translate-x-1/2 rounded-md bg-[rgb(var(--trinkui-fg))] px-3 py-1.5 text-xs font-medium text-[rgb(var(--trinkui-bg))] opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                Tooltip on top
                <div className="absolute left-1/2 top-full -translate-x-1/2 border-4 border-transparent border-t-[rgb(var(--trinkui-fg))]" />
              </div>
            </div>

            {/* Tooltip Right */}
            <div className="group relative inline-block">
              <button className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-4 py-2 text-sm font-medium text-[rgb(var(--trinkui-fg))] transition-colors hover:bg-[rgb(var(--trinkui-border)/0.2)]">
                Right
              </button>
              <div className="pointer-events-none absolute left-full top-1/2 z-10 ml-2 -translate-y-1/2 rounded-md bg-[rgb(var(--trinkui-fg))] px-3 py-1.5 text-xs font-medium text-[rgb(var(--trinkui-bg))] opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                Tooltip on right
                <div className="absolute right-full top-1/2 -translate-y-1/2 border-4 border-transparent border-r-[rgb(var(--trinkui-fg))]" />
              </div>
            </div>

            {/* Tooltip Bottom */}
            <div className="group relative inline-block">
              <button className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-4 py-2 text-sm font-medium text-[rgb(var(--trinkui-fg))] transition-colors hover:bg-[rgb(var(--trinkui-border)/0.2)]">
                Bottom
              </button>
              <div className="pointer-events-none absolute left-1/2 top-full z-10 mt-2 -translate-x-1/2 rounded-md bg-[rgb(var(--trinkui-fg))] px-3 py-1.5 text-xs font-medium text-[rgb(var(--trinkui-bg))] opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
                Tooltip on bottom
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 border-4 border-transparent border-b-[rgb(var(--trinkui-fg))]" />
              </div>
            </div>
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
          <code>{`import { Tooltip } from "@trinkui/react";`}</code>
        </pre>
      </section>

      {/* Usage */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Wrap any element with the Tooltip component and provide the tooltip text via the <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">content</code> prop.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Tooltip content="Save your changes">
  <Button>Save</Button>
</Tooltip>`}</code>
        </pre>
      </section>

      {/* Positions */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Positions</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Control where the tooltip appears relative to its trigger element.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Tooltip content="Appears above" position="top">
  <Button>Top</Button>
</Tooltip>

<Tooltip content="Appears below" position="bottom">
  <Button>Bottom</Button>
</Tooltip>

<Tooltip content="Appears to the left" position="left">
  <Button>Left</Button>
</Tooltip>

<Tooltip content="Appears to the right" position="right">
  <Button>Right</Button>
</Tooltip>`}</code>
        </pre>
      </section>

      {/* Delay */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Custom Delay</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Use the <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">delay</code> prop to control how long (in milliseconds) before the tooltip appears.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`{/* No delay — appears instantly */}
<Tooltip content="Instant" delay={0}>
  <Button>Hover me</Button>
</Tooltip>

{/* 500ms delay */}
<Tooltip content="Delayed tooltip" delay={500}>
  <Button>Hover me</Button>
</Tooltip>`}</code>
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
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">content</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Text content displayed inside the tooltip</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">position</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"top" | "bottom" | "left" | "right"`}</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"top"`}</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Preferred position of the tooltip relative to the trigger</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">delay</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">number</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">200</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Delay in milliseconds before the tooltip appears</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">children</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">The trigger element that the tooltip is attached to</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-[rgb(var(--trinkui-muted))]">
          <li>Uses <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;tooltip&quot;</code> on the tooltip content element.</li>
          <li>The trigger element has <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-describedby</code> pointing to the tooltip, providing the supplementary description to screen readers.</li>
          <li>Tooltip appears on both hover and keyboard focus, ensuring accessibility for keyboard-only users.</li>
          <li>Tooltip dismisses on <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">Escape</code> key press.</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <a href="/components/toast" className="text-sm text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors">
          &larr; Toast
        </a>
        <a href="/components/user" className="text-sm text-[rgb(var(--trinkui-primary))] hover:underline">
          User &rarr;
        </a>
      </div>
    </div>
  );
}
