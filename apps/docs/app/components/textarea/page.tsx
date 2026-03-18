import Link from "next/link";

export default function TextareaPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Textarea</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Multiline text input for longer form content. Supports labels, hints, error states, and multiple visual variants.
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
          <code>{`import { Textarea } from "@trinkui/react";`}</code>
        </pre>
      </div>

      {/* Usage */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex flex-col gap-4 p-8">
            <div className="max-w-md">
              <label className="mb-1.5 block text-sm font-medium text-[rgb(var(--trinkui-fg))]">Message</label>
              <textarea
                rows={4}
                placeholder="Type your message here..."
                className="w-full resize-y rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] px-3 py-2 text-sm text-[rgb(var(--trinkui-fg))] placeholder:text-[rgb(var(--trinkui-muted))] outline-none transition-colors focus:border-[rgb(var(--trinkui-primary))] focus:ring-2 focus:ring-[rgb(var(--trinkui-primary)/0.3)]"
              />
              <p className="mt-1.5 text-xs text-[rgb(var(--trinkui-muted))]">Maximum 500 characters.</p>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Textarea
  label="Message"
  placeholder="Type your message here..."
  hint="Maximum 500 characters."
  rows={4}
/>`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Variants */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Variants</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex flex-col gap-5 p-8">
            <div className="max-w-md">
              <label className="mb-1.5 block text-xs font-medium text-[rgb(var(--trinkui-muted))]">Default</label>
              <textarea
                rows={2}
                placeholder="Default variant"
                className="w-full resize-y rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] px-3 py-2 text-sm text-[rgb(var(--trinkui-fg))] placeholder:text-[rgb(var(--trinkui-muted))] outline-none"
              />
            </div>
            <div className="max-w-md">
              <label className="mb-1.5 block text-xs font-medium text-[rgb(var(--trinkui-muted))]">Filled</label>
              <textarea
                rows={2}
                placeholder="Filled variant"
                className="w-full resize-y rounded-[var(--trinkui-radius-md)] border border-transparent bg-[rgb(var(--trinkui-secondary))] px-3 py-2 text-sm text-[rgb(var(--trinkui-fg))] placeholder:text-[rgb(var(--trinkui-muted))] outline-none"
              />
            </div>
            <div className="max-w-md">
              <label className="mb-1.5 block text-xs font-medium text-[rgb(var(--trinkui-muted))]">Ghost</label>
              <textarea
                rows={2}
                placeholder="Ghost variant"
                className="w-full resize-y rounded-[var(--trinkui-radius-md)] border border-transparent bg-transparent px-3 py-2 text-sm text-[rgb(var(--trinkui-fg))] placeholder:text-[rgb(var(--trinkui-muted))] outline-none hover:bg-[rgb(var(--trinkui-secondary))]"
              />
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Textarea variant="default" placeholder="Default variant" />
<Textarea variant="filled" placeholder="Filled variant" />
<Textarea variant="ghost" placeholder="Ghost variant" />`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sizes</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex flex-col gap-5 p-8">
            <div className="max-w-md">
              <textarea
                rows={2}
                placeholder="Small"
                className="w-full resize-y rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] px-2.5 py-1.5 text-xs text-[rgb(var(--trinkui-fg))] placeholder:text-[rgb(var(--trinkui-muted))] outline-none"
              />
            </div>
            <div className="max-w-md">
              <textarea
                rows={2}
                placeholder="Medium"
                className="w-full resize-y rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] px-3 py-2 text-sm text-[rgb(var(--trinkui-fg))] placeholder:text-[rgb(var(--trinkui-muted))] outline-none"
              />
            </div>
            <div className="max-w-md">
              <textarea
                rows={2}
                placeholder="Large"
                className="w-full resize-y rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] px-3.5 py-2.5 text-base text-[rgb(var(--trinkui-fg))] placeholder:text-[rgb(var(--trinkui-muted))] outline-none"
              />
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Textarea size="sm" placeholder="Small" />
<Textarea size="md" placeholder="Medium" />
<Textarea size="lg" placeholder="Large" />`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Error State */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Error State</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex flex-col gap-4 p-8">
            <div className="max-w-md">
              <label className="mb-1.5 block text-sm font-medium text-[rgb(var(--trinkui-fg))]">Bio</label>
              <textarea
                rows={3}
                placeholder="Tell us about yourself..."
                className="w-full resize-y rounded-[var(--trinkui-radius-md)] border border-red-500 bg-[rgb(var(--trinkui-bg))] px-3 py-2 text-sm text-[rgb(var(--trinkui-fg))] placeholder:text-[rgb(var(--trinkui-muted))] outline-none focus:ring-2 focus:ring-red-500/30"
              />
              <p className="mt-1.5 text-xs text-red-500">Bio must be at least 20 characters.</p>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Textarea
  label="Bio"
  placeholder="Tell us about yourself..."
  error="Bio must be at least 20 characters."
/>`}</code>
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
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">label</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Label text shown above the textarea</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">hint</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Helper text displayed below the textarea</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">error</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Error message; applies error border styling when set</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">size</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"sm" | "md" | "lg"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"md"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Size of the textarea</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">variant</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"default" | "filled" | "ghost"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"default"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Visual style variant</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">rows</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">number</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">3</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Number of visible text rows</td>
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
          <li>Uses a native <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">&lt;textarea&gt;</code> element for built-in keyboard support.</li>
          <li>Label is linked via <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">htmlFor</code> / <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">id</code> pairing.</li>
          <li>Error and hint text are linked with <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-describedby</code>.</li>
          <li>Focus-visible ring provides clear keyboard focus indication.</li>
        </ul>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <Link
          href="/components/tabs"
          className="flex items-center gap-1 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
        >
          <span aria-hidden="true">&larr;</span> Tabs
        </Link>
        <Link
          href="/components/toast"
          className="flex items-center gap-1 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
        >
          Toast <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
