"use client";

export default function SpinnerPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Components</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Spinner</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          An animated loading indicator to communicate that content is being fetched or processed.
        </p>
      </div>

      {/* Live Demo — Sizes */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sizes</h2>
        <div className="rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] p-8">
          <div className="flex items-end gap-10">
            {[
              { size: "h-4 w-4", border: "border-2", label: "sm" },
              { size: "h-6 w-6", border: "border-2", label: "md" },
              { size: "h-8 w-8", border: "border-[3px]", label: "lg" },
              { size: "h-12 w-12", border: "border-4", label: "xl" },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center gap-3">
                <div
                  className={`${s.size} ${s.border} animate-spin rounded-full`}
                  style={{
                    borderColor: "rgb(var(--trinkui-border))",
                    borderTopColor: "rgb(0 111 238)",
                  }}
                  role="status"
                  aria-label="Loading"
                />
                <span className="text-xs text-[rgb(var(--trinkui-muted))]">{s.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo — Colors */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Colors</h2>
        <div className="rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] p-8">
          <div className="flex items-center gap-10">
            {[
              { color: "#006FEE", label: "Primary" },
              { color: "#17C964", label: "Success" },
              { color: "#F5A524", label: "Warning" },
              { color: "#F31260", label: "Danger" },
              { color: "#9353D3", label: "Secondary" },
            ].map((c) => (
              <div key={c.label} className="flex flex-col items-center gap-3">
                <div
                  className="h-8 w-8 animate-spin rounded-full border-[3px]"
                  style={{
                    borderColor: "rgb(var(--trinkui-border))",
                    borderTopColor: c.color,
                  }}
                  role="status"
                  aria-label="Loading"
                />
                <span className="text-xs text-[rgb(var(--trinkui-muted))]">{c.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Live Demo — With Label */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">With Label</h2>
        <div className="rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] p-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div
                className="h-5 w-5 animate-spin rounded-full border-2"
                style={{
                  borderColor: "rgb(var(--trinkui-border))",
                  borderTopColor: "#006FEE",
                }}
                role="status"
              />
              <span className="text-sm text-[rgb(var(--trinkui-fg))]">Loading data...</span>
            </div>
            <div className="flex items-center gap-3">
              <div
                className="h-5 w-5 animate-spin rounded-full border-2"
                style={{
                  borderColor: "rgb(var(--trinkui-border))",
                  borderTopColor: "#17C964",
                }}
                role="status"
              />
              <span className="text-sm text-[rgb(var(--trinkui-fg))]">Saving changes...</span>
            </div>
          </div>
        </div>
      </section>

      {/* Installation */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Installation</h2>
        <div className="overflow-hidden rounded-lg border border-[rgb(var(--trinkui-border))]">
          <pre className="bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
            <code>npm install @trinkui/react</code>
          </pre>
        </div>
      </section>

      {/* Import */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Import</h2>
        <div className="overflow-hidden rounded-lg border border-[rgb(var(--trinkui-border))]">
          <pre className="bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
            <code>{`import { Spinner } from "@trinkui/react";`}</code>
          </pre>
        </div>
      </section>

      {/* Usage */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <div className="overflow-hidden rounded-lg border border-[rgb(var(--trinkui-border))]">
          <pre className="bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
            <code>{`<Spinner size="md" color="primary" />
<Spinner size="lg" color="success" />
<Spinner size="sm" color="danger" label="Loading..." />`}</code>
          </pre>
        </div>
      </section>

      {/* Props */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Props</h2>
        <div className="overflow-hidden rounded-xl border border-[rgb(var(--trinkui-border))]">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
                {["Prop", "Type", "Default", "Description"].map((h) => (
                  <th key={h} className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[rgb(var(--trinkui-muted))]">{h}</th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgb(var(--trinkui-border))]">
              {[
                { name: "size", type: '"sm" | "md" | "lg" | "xl"', def: '"md"', desc: "Size of the spinner" },
                { name: "color", type: '"primary" | "secondary" | "success" | "warning" | "danger"', def: '"primary"', desc: "Color of the spinner" },
                { name: "label", type: "string", def: "—", desc: "Text shown next to the spinner" },
                { name: "className", type: "string", def: "—", desc: "Additional CSS classes" },
              ].map((p) => (
                <tr key={p.name}>
                  <td className="px-4 py-3 font-mono text-[13px] text-[rgb(var(--trinkui-primary))]">{p.name}</td>
                  <td className="px-4 py-3"><span className="rounded-md bg-[rgb(var(--trinkui-border)/0.3)] px-2 py-0.5 font-mono text-xs text-[rgb(var(--trinkui-accent))]">{p.type}</span></td>
                  <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{p.def}</td>
                  <td className="px-4 py-3 text-[13px] text-[rgb(var(--trinkui-muted))]">{p.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="space-y-2 text-sm text-[rgb(var(--trinkui-muted))]">
          <li className="flex items-start gap-2">
            <span className="mt-1 text-[rgb(var(--trinkui-primary))]">&#x2022;</span>
            Uses <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;status&quot;</code> for screen reader announcement
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-[rgb(var(--trinkui-primary))]">&#x2022;</span>
            <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-label</code> describes the loading state
          </li>
          <li className="flex items-start gap-2">
            <span className="mt-1 text-[rgb(var(--trinkui-primary))]">&#x2022;</span>
            Animation respects <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">prefers-reduced-motion</code>
          </li>
        </ul>
      </section>

      {/* Prev/Next */}
      <div className="flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <a href="/components/spacer" className="text-sm text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors">&larr; Spacer</a>
        <a href="/components/switch" className="text-sm text-[rgb(var(--trinkui-primary))] hover:underline">Switch &rarr;</a>
      </div>
    </div>
  );
}
