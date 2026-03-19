"use client";

import { useState } from "react";

export default function SwitchPage() {
  const [switch1, setSwitch1] = useState(false);
  const [switch2, setSwitch2] = useState(true);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Components</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Switch</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          A toggle switch for binary on/off states. Ideal for settings and preferences that take effect immediately.
        </p>
      </div>

      {/* Live Demo */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Demo</h2>
        <div className="rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] p-6">
          <div className="space-y-6">
            {/* Toggle off */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                role="switch"
                aria-checked={switch1}
                onClick={() => setSwitch1(!switch1)}
                className={`relative inline-flex h-6 w-11 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
                  switch1 ? "bg-[rgb(var(--trinkui-primary))]" : "bg-[rgb(var(--trinkui-border))]"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-5 w-5 rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 ${
                    switch1 ? "translate-x-5" : "translate-x-0"
                  }`}
                />
              </button>
              <span className="text-sm text-[rgb(var(--trinkui-fg))]">
                Enable notifications {switch1 ? "(On)" : "(Off)"}
              </span>
            </div>

            {/* Toggle on */}
            <div className="flex items-center gap-3">
              <button
                type="button"
                role="switch"
                aria-checked={switch2}
                onClick={() => setSwitch2(!switch2)}
                className={`relative inline-flex h-7 w-12 shrink-0 cursor-pointer rounded-full border-2 border-transparent transition-colors duration-200 ${
                  switch2 ? "bg-[rgb(var(--trinkui-primary))]" : "bg-[rgb(var(--trinkui-border))]"
                }`}
              >
                <span
                  className={`pointer-events-none inline-block h-[22px] w-[22px] rounded-full bg-white shadow-sm ring-0 transition-transform duration-200 ${
                    switch2 ? "translate-x-[22px]" : "translate-x-0"
                  }`}
                />
              </button>
              <span className="text-sm text-[rgb(var(--trinkui-fg))]">
                Dark mode {switch2 ? "(On)" : "(Off)"}
              </span>
            </div>

            {/* Disabled */}
            <div className="flex items-center gap-3 opacity-50">
              <div className="relative inline-flex h-6 w-11 shrink-0 cursor-not-allowed rounded-full border-2 border-transparent bg-[rgb(var(--trinkui-border))]">
                <span className="pointer-events-none inline-block h-5 w-5 translate-x-0 rounded-full bg-white shadow-sm ring-0" />
              </div>
              <span className="text-sm text-[rgb(var(--trinkui-muted))]">Locked setting (Disabled)</span>
            </div>

            {/* Size comparison */}
            <div>
              <p className="mb-3 text-xs font-medium uppercase tracking-wider text-[rgb(var(--trinkui-muted))]">Sizes</p>
              <div className="flex items-center gap-6">
                {/* Small */}
                <div className="flex items-center gap-2">
                  <div className="relative inline-flex h-5 w-9 shrink-0 rounded-full border-2 border-transparent bg-[rgb(var(--trinkui-primary))]">
                    <span className="pointer-events-none inline-block h-4 w-4 translate-x-4 rounded-full bg-white shadow-sm" />
                  </div>
                  <span className="text-xs text-[rgb(var(--trinkui-muted))]">sm</span>
                </div>
                {/* Medium */}
                <div className="flex items-center gap-2">
                  <div className="relative inline-flex h-6 w-11 shrink-0 rounded-full border-2 border-transparent bg-[rgb(var(--trinkui-primary))]">
                    <span className="pointer-events-none inline-block h-5 w-5 translate-x-5 rounded-full bg-white shadow-sm" />
                  </div>
                  <span className="text-xs text-[rgb(var(--trinkui-muted))]">md</span>
                </div>
                {/* Large */}
                <div className="flex items-center gap-2">
                  <div className="relative inline-flex h-8 w-14 shrink-0 rounded-full border-2 border-transparent bg-[rgb(var(--trinkui-primary))]">
                    <span className="pointer-events-none inline-block h-7 w-7 translate-x-6 rounded-full bg-white shadow-sm" />
                  </div>
                  <span className="text-xs text-[rgb(var(--trinkui-muted))]">lg</span>
                </div>
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
          <code>{`import { Switch } from "@trinkui/react";`}</code>
        </pre>
      </section>

      {/* Usage */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Basic toggle switch with a label.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Switch label="Enable notifications" />

<Switch label="Dark mode" defaultChecked />`}</code>
        </pre>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sizes</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Available in three sizes: <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">sm</code>, <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">md</code>, and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">lg</code>.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Switch size="sm" label="Small" />
<Switch size="md" label="Medium" />
<Switch size="lg" label="Large" />`}</code>
        </pre>
      </section>

      {/* Controlled */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Controlled</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Use <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">checked</code> and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">onChange</code> for controlled behavior.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`const [enabled, setEnabled] = useState(false);

<Switch
  checked={enabled}
  onChange={setEnabled}
  label="Airplane mode"
/>`}</code>
        </pre>
      </section>

      {/* Disabled */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Disabled</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Use the <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">disabled</code> prop to prevent interaction.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Switch label="Locked setting" disabled />
<Switch label="Locked on" disabled defaultChecked />`}</code>
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
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Callback when the switch is toggled</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">label</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Label text displayed next to the switch</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">disabled</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Disable the switch</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">size</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"sm" | "md" | "lg"`}</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"md"`}</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Size of the switch</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-[rgb(var(--trinkui-muted))]">
          <li>Uses <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;switch&quot;</code> for proper semantic meaning.</li>
          <li>Applies <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-checked</code> to communicate the current state to assistive technologies.</li>
          <li>Toggleable via keyboard with <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">Space</code> and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">Enter</code> keys.</li>
          <li>Label is associated with the switch for click-to-toggle behavior.</li>
          <li>Visible focus ring when navigating with keyboard.</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <a href="/components/spinner" className="text-sm text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors">
          &larr; Spinner
        </a>
        <a href="/components/table" className="text-sm text-[rgb(var(--trinkui-primary))] hover:underline">
          Table &rarr;
        </a>
      </div>
    </div>
  );
}
