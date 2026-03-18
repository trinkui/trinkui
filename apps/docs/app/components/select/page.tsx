import Link from "next/link";

export default function SelectPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Select</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Dropdown select input for choosing a single value from a list of options. Supports label, placeholder, error state, and multiple visual variants.
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
          <code>{`import { Select } from "@trinkui/react";`}</code>
        </pre>
      </div>

      {/* Usage */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex flex-col gap-4 p-8">
            <div className="max-w-xs">
              <label className="mb-1.5 block text-sm font-medium text-[rgb(var(--trinkui-fg))]">Framework</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] px-3 py-2 pr-8 text-sm text-[rgb(var(--trinkui-fg))] outline-none transition-colors focus:border-[rgb(var(--trinkui-primary))] focus:ring-2 focus:ring-[rgb(var(--trinkui-primary)/0.3)]">
                  <option value="" disabled>Select a framework</option>
                  <option>React</option>
                  <option>Vue</option>
                  <option>Angular</option>
                  <option>Svelte</option>
                </select>
                <svg className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgb(var(--trinkui-muted))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Select
  label="Framework"
  placeholder="Select a framework"
  options={[
    { value: "react", label: "React" },
    { value: "vue", label: "Vue" },
    { value: "angular", label: "Angular" },
    { value: "svelte", label: "Svelte" },
  ]}
/>`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Variants */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Variants</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex flex-col gap-4 p-8">
            <div className="max-w-xs">
              <label className="mb-1.5 block text-xs font-medium text-[rgb(var(--trinkui-muted))]">Default</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] px-3 py-2 pr-8 text-sm text-[rgb(var(--trinkui-fg))] outline-none">
                  <option>React</option>
                </select>
                <svg className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgb(var(--trinkui-muted))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
            <div className="max-w-xs">
              <label className="mb-1.5 block text-xs font-medium text-[rgb(var(--trinkui-muted))]">Filled</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-[var(--trinkui-radius-md)] border border-transparent bg-[rgb(var(--trinkui-secondary))] px-3 py-2 pr-8 text-sm text-[rgb(var(--trinkui-fg))] outline-none">
                  <option>Vue</option>
                </select>
                <svg className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgb(var(--trinkui-muted))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
            <div className="max-w-xs">
              <label className="mb-1.5 block text-xs font-medium text-[rgb(var(--trinkui-muted))]">Ghost</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-[var(--trinkui-radius-md)] border border-transparent bg-transparent px-3 py-2 pr-8 text-sm text-[rgb(var(--trinkui-fg))] outline-none hover:bg-[rgb(var(--trinkui-secondary))]">
                  <option>Angular</option>
                </select>
                <svg className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgb(var(--trinkui-muted))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Select variant="default" label="Default" options={options} />
<Select variant="filled" label="Filled" options={options} />
<Select variant="ghost" label="Ghost" options={options} />`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sizes</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex flex-col gap-4 p-8">
            <div className="max-w-xs">
              <div className="relative">
                <select className="w-full appearance-none rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] px-2.5 py-1.5 pr-7 text-xs text-[rgb(var(--trinkui-fg))] outline-none">
                  <option>Small</option>
                </select>
                <svg className="pointer-events-none absolute right-2 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-[rgb(var(--trinkui-muted))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
            <div className="max-w-xs">
              <div className="relative">
                <select className="w-full appearance-none rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] px-3 py-2 pr-8 text-sm text-[rgb(var(--trinkui-fg))] outline-none">
                  <option>Medium</option>
                </select>
                <svg className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgb(var(--trinkui-muted))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
            <div className="max-w-xs">
              <div className="relative">
                <select className="w-full appearance-none rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] px-3.5 py-2.5 pr-9 text-base text-[rgb(var(--trinkui-fg))] outline-none">
                  <option>Large</option>
                </select>
                <svg className="pointer-events-none absolute right-2.5 top-1/2 h-5 w-5 -translate-y-1/2 text-[rgb(var(--trinkui-muted))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </div>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Select size="sm" options={options} />
<Select size="md" options={options} />
<Select size="lg" options={options} />`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Error State */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Error State</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex flex-col gap-4 p-8">
            <div className="max-w-xs">
              <label className="mb-1.5 block text-sm font-medium text-[rgb(var(--trinkui-fg))]">Country</label>
              <div className="relative">
                <select className="w-full appearance-none rounded-[var(--trinkui-radius-md)] border border-red-500 bg-[rgb(var(--trinkui-bg))] px-3 py-2 pr-8 text-sm text-[rgb(var(--trinkui-fg))] outline-none focus:ring-2 focus:ring-red-500/30">
                  <option value="" disabled selected>Select a country</option>
                </select>
                <svg className="pointer-events-none absolute right-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-[rgb(var(--trinkui-muted))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </div>
              <p className="mt-1.5 text-xs text-red-500">Please select a country.</p>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Select
  label="Country"
  placeholder="Select a country"
  error="Please select a country."
  options={countries}
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
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">options</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`{ value: string; label: string }[]`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Array of selectable options</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">value</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Controlled selected value</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">defaultValue</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Initial value (uncontrolled)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">onChange</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">(value: string) =&gt; void</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Callback when the selection changes</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">placeholder</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Placeholder text when no option is selected</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">label</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Label text displayed above the select</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">error</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Error message; applies error border styling when set</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">disabled</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Disable the select</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">variant</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"default" | "filled" | "ghost"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"default"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Visual style variant</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">size</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"sm" | "md" | "lg"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"md"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Size of the select element</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Accessibility */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[rgb(var(--trinkui-muted))]">
          <li>Uses a native <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">&lt;select&gt;</code> element for full keyboard and screen reader support.</li>
          <li>Label is associated with the select via <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">htmlFor</code> / <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">id</code> pairing.</li>
          <li>Error messages are linked with <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-describedby</code>.</li>
          <li>Arrow keys, Enter, and Space work natively for option navigation.</li>
        </ul>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <Link
          href="/components/radio-group"
          className="flex items-center gap-1 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
        >
          <span aria-hidden="true">&larr;</span> Radio Group
        </Link>
        <Link
          href="/components/skeleton"
          className="flex items-center gap-1 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
        >
          Skeleton <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
