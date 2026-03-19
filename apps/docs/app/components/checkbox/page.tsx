"use client";

import { useState } from "react";

function CheckIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-3.5 w-3.5">
      <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
    </svg>
  );
}

export default function CheckboxPage() {
  const [checked1, setChecked1] = useState(false);
  const [checked2, setChecked2] = useState(true);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Components</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Checkbox</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          A checkbox input for toggling boolean values. Supports multiple sizes, colors, labels, and descriptions.
        </p>
      </div>

      {/* Live Demo */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Demo</h2>
        <div className="rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] p-6">
          <div className="space-y-5">
            {/* Unchecked checkbox */}
            <label className="flex cursor-pointer items-center gap-3">
              <button
                type="button"
                role="checkbox"
                aria-checked={checked1}
                onClick={() => setChecked1(!checked1)}
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${
                  checked1
                    ? "border-[rgb(var(--trinkui-primary))] bg-[rgb(var(--trinkui-primary))] text-white"
                    : "border-[rgb(var(--trinkui-border))] bg-transparent"
                }`}
              >
                {checked1 && <CheckIcon />}
              </button>
              <span className="text-sm text-[rgb(var(--trinkui-fg))]">Accept terms and conditions</span>
            </label>

            {/* Checked checkbox */}
            <label className="flex cursor-pointer items-center gap-3">
              <button
                type="button"
                role="checkbox"
                aria-checked={checked2}
                onClick={() => setChecked2(!checked2)}
                className={`flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 transition-colors ${
                  checked2
                    ? "border-[rgb(var(--trinkui-primary))] bg-[rgb(var(--trinkui-primary))] text-white"
                    : "border-[rgb(var(--trinkui-border))] bg-transparent"
                }`}
              >
                {checked2 && <CheckIcon />}
              </button>
              <div>
                <span className="text-sm text-[rgb(var(--trinkui-fg))]">Subscribe to newsletter</span>
                <p className="text-xs text-[rgb(var(--trinkui-muted))]">Get weekly updates about new features.</p>
              </div>
            </label>

            {/* Disabled checkbox */}
            <label className="flex cursor-not-allowed items-center gap-3 opacity-50">
              <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded border-2 border-[rgb(var(--trinkui-border))] bg-transparent">
              </div>
              <span className="text-sm text-[rgb(var(--trinkui-muted))]">Disabled option</span>
            </label>
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
          <code>{`import { Checkbox } from "@trinkui/react";`}</code>
        </pre>
      </section>

      {/* Usage */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Basic checkbox with a label.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Checkbox label="Accept terms and conditions" />

<Checkbox
  label="Subscribe to newsletter"
  description="Get weekly updates about new features."
/>`}</code>
        </pre>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sizes</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Available in three sizes: <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">sm</code>, <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">md</code>, and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">lg</code>.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Checkbox size="sm" label="Small checkbox" />
<Checkbox size="md" label="Medium checkbox" />
<Checkbox size="lg" label="Large checkbox" />`}</code>
        </pre>
      </section>

      {/* Colors */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Colors</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Use the <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">color</code> prop to change the checked state color.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Checkbox color="primary" label="Primary" defaultChecked />
<Checkbox color="secondary" label="Secondary" defaultChecked />
<Checkbox color="success" label="Success" defaultChecked />
<Checkbox color="warning" label="Warning" defaultChecked />
<Checkbox color="danger" label="Danger" defaultChecked />`}</code>
        </pre>
      </section>

      {/* Controlled */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Controlled</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Use <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">checked</code> and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">onChange</code> for controlled behavior.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`const [checked, setChecked] = useState(false);

<Checkbox
  checked={checked}
  onChange={setChecked}
  label="Controlled checkbox"
/>`}</code>
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
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">checked</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Controlled checked state</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">defaultChecked</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Initial checked state for uncontrolled usage</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">onChange</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">(checked: boolean) =&gt; void</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Callback when the checked state changes</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">label</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Label text displayed next to the checkbox</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">description</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Helper text displayed below the label</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">disabled</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Disable the checkbox</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">size</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"sm" | "md" | "lg"`}</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"md"`}</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Size of the checkbox</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">color</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"primary" | "secondary" | "success" | "warning" | "danger"`}</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"primary"`}</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Color of the checkbox when checked</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-[rgb(var(--trinkui-muted))]">
          <li>Uses a visually hidden native <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">&lt;input type=&quot;checkbox&quot;&gt;</code> for full screen reader and form compatibility.</li>
          <li>Supports keyboard toggle with <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">Space</code> key.</li>
          <li>Label is associated with the input via <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">htmlFor</code>, so clicking the label toggles the checkbox.</li>
          <li>Focus ring is visible when navigating with keyboard.</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <a href="/components/card" className="text-sm text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors">
          &larr; Card
        </a>
        <a href="/components/chip" className="text-sm text-[rgb(var(--trinkui-primary))] hover:underline">
          Chip &rarr;
        </a>
      </div>
    </div>
  );
}
