import Link from "next/link";

export default function KbdPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Kbd</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Displays keyboard shortcut indicators with styled key caps. Useful for showing hotkeys, shortcuts, and key combinations.
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
          <code>{`import { Kbd } from "@trinkui/react";`}</code>
        </pre>
      </div>

      {/* Usage */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex flex-wrap items-center gap-6 p-8">
            <div className="flex items-center gap-1">
              <kbd className="inline-flex h-7 min-w-7 items-center justify-center rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-2 text-xs font-medium text-[rgb(var(--trinkui-fg))] shadow-[0_1px_0_1px_rgb(var(--trinkui-border))]">Ctrl</kbd>
              <span className="text-xs text-[rgb(var(--trinkui-muted))]">+</span>
              <kbd className="inline-flex h-7 min-w-7 items-center justify-center rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-2 text-xs font-medium text-[rgb(var(--trinkui-fg))] shadow-[0_1px_0_1px_rgb(var(--trinkui-border))]">K</kbd>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="inline-flex h-7 min-w-7 items-center justify-center rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-2 text-xs font-medium text-[rgb(var(--trinkui-fg))] shadow-[0_1px_0_1px_rgb(var(--trinkui-border))]">Shift</kbd>
              <span className="text-xs text-[rgb(var(--trinkui-muted))]">+</span>
              <kbd className="inline-flex h-7 min-w-7 items-center justify-center rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-2 text-xs font-medium text-[rgb(var(--trinkui-fg))] shadow-[0_1px_0_1px_rgb(var(--trinkui-border))]">Enter</kbd>
            </div>
            <div className="flex items-center gap-1">
              <kbd className="inline-flex h-7 min-w-7 items-center justify-center rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-2 text-xs font-medium text-[rgb(var(--trinkui-fg))] shadow-[0_1px_0_1px_rgb(var(--trinkui-border))]">⌘</kbd>
              <span className="text-xs text-[rgb(var(--trinkui-muted))]">+</span>
              <kbd className="inline-flex h-7 min-w-7 items-center justify-center rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-2 text-xs font-medium text-[rgb(var(--trinkui-fg))] shadow-[0_1px_0_1px_rgb(var(--trinkui-border))]">S</kbd>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Kbd keys={["Ctrl", "K"]} />
<Kbd keys={["Shift", "Enter"]} />
<Kbd keys={["⌘", "S"]} />`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Single Key */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Single Key</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex flex-wrap items-center gap-4 p-8">
            <kbd className="inline-flex h-7 min-w-7 items-center justify-center rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-2 text-xs font-medium text-[rgb(var(--trinkui-fg))] shadow-[0_1px_0_1px_rgb(var(--trinkui-border))]">Esc</kbd>
            <kbd className="inline-flex h-7 min-w-7 items-center justify-center rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-2 text-xs font-medium text-[rgb(var(--trinkui-fg))] shadow-[0_1px_0_1px_rgb(var(--trinkui-border))]">Tab</kbd>
            <kbd className="inline-flex h-7 min-w-7 items-center justify-center rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-2 text-xs font-medium text-[rgb(var(--trinkui-fg))] shadow-[0_1px_0_1px_rgb(var(--trinkui-border))]">Space</kbd>
            <kbd className="inline-flex h-7 min-w-7 items-center justify-center rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-2 text-xs font-medium text-[rgb(var(--trinkui-fg))] shadow-[0_1px_0_1px_rgb(var(--trinkui-border))]">F1</kbd>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Kbd keys={["Esc"]} />
<Kbd keys={["Tab"]} />
<Kbd keys={["Space"]} />
<Kbd keys={["F1"]} />`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* With Label */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">With Label</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex flex-wrap items-center gap-6 p-8">
            <span className="flex items-center gap-2 text-sm text-[rgb(var(--trinkui-muted))]">
              Search
              <span className="flex items-center gap-1">
                <kbd className="inline-flex h-7 min-w-7 items-center justify-center rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-2 text-xs font-medium text-[rgb(var(--trinkui-fg))] shadow-[0_1px_0_1px_rgb(var(--trinkui-border))]">⌘</kbd>
                <span className="text-xs text-[rgb(var(--trinkui-muted))]">+</span>
                <kbd className="inline-flex h-7 min-w-7 items-center justify-center rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-2 text-xs font-medium text-[rgb(var(--trinkui-fg))] shadow-[0_1px_0_1px_rgb(var(--trinkui-border))]">K</kbd>
              </span>
            </span>
            <span className="flex items-center gap-2 text-sm text-[rgb(var(--trinkui-muted))]">
              Save
              <span className="flex items-center gap-1">
                <kbd className="inline-flex h-7 min-w-7 items-center justify-center rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-2 text-xs font-medium text-[rgb(var(--trinkui-fg))] shadow-[0_1px_0_1px_rgb(var(--trinkui-border))]">Ctrl</kbd>
                <span className="text-xs text-[rgb(var(--trinkui-muted))]">+</span>
                <kbd className="inline-flex h-7 min-w-7 items-center justify-center rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-2 text-xs font-medium text-[rgb(var(--trinkui-fg))] shadow-[0_1px_0_1px_rgb(var(--trinkui-border))]">S</kbd>
              </span>
            </span>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Kbd keys={["⌘", "K"]}>Search</Kbd>
<Kbd keys={["Ctrl", "S"]}>Save</Kbd>`}</code>
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
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">keys</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string[]</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Array of key labels to display as key caps</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">children</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">ReactNode</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Optional label shown alongside the keyboard shortcut</td>
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
          <li>Uses semantic <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">&lt;kbd&gt;</code> elements for each key.</li>
          <li>Key separator characters are decorative and do not interfere with screen readers.</li>
          <li>Font size and contrast meet WCAG AA requirements.</li>
        </ul>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <Link
          href="/components/input"
          className="flex items-center gap-1 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
        >
          <span aria-hidden="true">&larr;</span> Input
        </Link>
        <Link
          href="/components/link"
          className="flex items-center gap-1 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
        >
          Link <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
