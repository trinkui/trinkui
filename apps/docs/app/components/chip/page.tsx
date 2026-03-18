import Link from "next/link";

export default function ChipPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Chip</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Compact element for displaying tags, filters, or status indicators. Supports multiple variants, colors, and optional dismiss action.
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
          <code>{`import { Chip } from "@trinkui/react";`}</code>
        </pre>
      </div>

      {/* Usage */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex flex-wrap items-center gap-3 p-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgb(var(--trinkui-primary))] px-3 py-1 text-xs font-medium text-[rgb(var(--trinkui-primary-fg))]">React</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgb(var(--trinkui-primary))] px-3 py-1 text-xs font-medium text-[rgb(var(--trinkui-primary-fg))]">TypeScript</span>
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgb(var(--trinkui-primary))] px-3 py-1 text-xs font-medium text-[rgb(var(--trinkui-primary-fg))]">Tailwind</span>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Chip color="primary">React</Chip>
<Chip color="primary">TypeScript</Chip>
<Chip color="primary">Tailwind</Chip>`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Variants */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Variants</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex flex-wrap items-center gap-3 p-8">
            {/* solid */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgb(var(--trinkui-primary))] px-3 py-1 text-xs font-medium text-[rgb(var(--trinkui-primary-fg))]">Solid</span>
            {/* bordered */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgb(var(--trinkui-primary))] px-3 py-1 text-xs font-medium text-[rgb(var(--trinkui-primary))]">Bordered</span>
            {/* flat */}
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgb(var(--trinkui-primary)/0.15)] px-3 py-1 text-xs font-medium text-[rgb(var(--trinkui-primary))]">Flat</span>
            {/* dot */}
            <span className="inline-flex items-center gap-1.5 rounded-full border border-[rgb(var(--trinkui-border))] px-3 py-1 text-xs font-medium text-[rgb(var(--trinkui-fg))]">
              <span className="h-2 w-2 rounded-full bg-[rgb(var(--trinkui-primary))]" />
              Dot
            </span>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Chip variant="solid" color="primary">Solid</Chip>
<Chip variant="bordered" color="primary">Bordered</Chip>
<Chip variant="flat" color="primary">Flat</Chip>
<Chip variant="dot" color="primary">Dot</Chip>`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Colors */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Colors</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex flex-wrap items-center gap-3 p-8">
            <span className="inline-flex items-center rounded-full bg-[rgb(var(--trinkui-secondary))] px-3 py-1 text-xs font-medium text-[rgb(var(--trinkui-secondary-fg))]">Default</span>
            <span className="inline-flex items-center rounded-full bg-[rgb(var(--trinkui-primary))] px-3 py-1 text-xs font-medium text-[rgb(var(--trinkui-primary-fg))]">Primary</span>
            <span className="inline-flex items-center rounded-full bg-[rgb(var(--trinkui-secondary))] px-3 py-1 text-xs font-medium text-[rgb(var(--trinkui-secondary-fg))]">Secondary</span>
            <span className="inline-flex items-center rounded-full bg-emerald-500 px-3 py-1 text-xs font-medium text-white">Success</span>
            <span className="inline-flex items-center rounded-full bg-amber-500 px-3 py-1 text-xs font-medium text-white">Warning</span>
            <span className="inline-flex items-center rounded-full bg-red-500 px-3 py-1 text-xs font-medium text-white">Danger</span>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Chip color="default">Default</Chip>
<Chip color="primary">Primary</Chip>
<Chip color="secondary">Secondary</Chip>
<Chip color="success">Success</Chip>
<Chip color="warning">Warning</Chip>
<Chip color="danger">Danger</Chip>`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Dismissible */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Dismissible</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex flex-wrap items-center gap-3 p-8">
            <span className="inline-flex items-center gap-1.5 rounded-full bg-[rgb(var(--trinkui-primary))] px-3 py-1 text-xs font-medium text-[rgb(var(--trinkui-primary-fg))]">
              Removable
              <button className="ml-0.5 rounded-full p-0.5 hover:bg-white/20" aria-label="Dismiss">
                <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
              </button>
            </span>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Chip color="primary" onDismiss={() => console.log("dismissed")}>
  Removable
</Chip>`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Props */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Props</h2>
        <div className="overflow-x-auto rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))]">
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
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">variant</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"solid" | "bordered" | "flat" | "dot"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"solid"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Visual style of the chip</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">color</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"default" | "primary" | "secondary" | "success" | "warning" | "danger"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"default"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Color scheme of the chip</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">size</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"sm" | "md" | "lg"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"md"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Size of the chip</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">onDismiss</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">() =&gt; void</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Callback when dismiss button is clicked; shows close icon when set</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">avatar</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">ReactNode</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Avatar element displayed at the start of the chip</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">startContent</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">ReactNode</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Content rendered before the chip label</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">endContent</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">ReactNode</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Content rendered after the chip label</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">className</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Additional CSS classes</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Accessibility */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[rgb(var(--trinkui-muted))]">
          <li>Dismiss button includes an <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-label</code> for screen readers.</li>
          <li>Color is never the sole indicator of meaning; text labels always accompany status colors.</li>
          <li>Chips are non-interactive by default unless <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">onDismiss</code> is provided.</li>
        </ul>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <Link
          href="/components/checkbox"
          className="flex items-center gap-1 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
        >
          <span aria-hidden="true">&larr;</span> Checkbox
        </Link>
        <Link
          href="/components/code"
          className="flex items-center gap-1 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
        >
          Code <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
