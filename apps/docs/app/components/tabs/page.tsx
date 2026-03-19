"use client";

import { useState } from "react";

function TabsUnderlineDemo() {
  const [activeTab, setActiveTab] = useState("overview");
  const tabs = [
    { key: "overview", label: "Overview", content: "This is the Overview panel. It provides a high-level summary of your project, including key metrics and recent activity." },
    { key: "settings", label: "Settings", content: "Configure your preferences here. Manage notifications, privacy controls, and integration settings all in one place." },
    { key: "billing", label: "Billing", content: "Review your billing history, update payment methods, and manage your subscription plan from this panel." },
  ];

  return (
    <div>
      <div className="flex border-b border-[rgb(var(--trinkui-border))]" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`relative px-4 py-2.5 text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? "text-[rgb(var(--trinkui-primary))]"
                : "text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))]"
            }`}
          >
            {tab.label}
            {activeTab === tab.key && (
              <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-[rgb(var(--trinkui-primary))]" />
            )}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="mt-4 text-sm text-[rgb(var(--trinkui-muted))]">
        {tabs.find((t) => t.key === activeTab)?.content}
      </div>
    </div>
  );
}

function TabsSolidDemo() {
  const [activeTab, setActiveTab] = useState("general");
  const tabs = [
    { key: "general", label: "General", content: "General settings for your account. Update your display name, email, and profile picture." },
    { key: "security", label: "Security", content: "Manage your security settings. Enable two-factor authentication, review login history, and set up recovery options." },
    { key: "notifications", label: "Notifications", content: "Control how and when you receive notifications. Choose between email, push, and in-app notification preferences." },
  ];

  return (
    <div>
      <div className="inline-flex gap-1 rounded-[var(--trinkui-radius-lg)] bg-[rgb(var(--trinkui-secondary))] p-1" role="tablist">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            role="tab"
            aria-selected={activeTab === tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`rounded-[var(--trinkui-radius-md)] px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab.key
                ? "bg-[rgb(var(--trinkui-primary))] text-[rgb(var(--trinkui-primary-fg))] shadow-sm"
                : "text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))]"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>
      <div role="tabpanel" className="mt-4 text-sm text-[rgb(var(--trinkui-muted))]">
        {tabs.find((t) => t.key === activeTab)?.content}
      </div>
    </div>
  );
}

export default function TabsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Components</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Tabs</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Tabbed navigation for organizing content into separate views. Supports multiple visual variants and sizes.
        </p>
      </div>

      {/* Live Demo: Underline Variant */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Underline Variant</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          The default underline indicator highlights the active tab with a colored bottom border.
        </p>
        <div className="rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] p-6">
          <TabsUnderlineDemo />
        </div>
      </section>

      {/* Live Demo: Solid Variant */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Solid Variant</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          The solid variant uses a filled background on the active tab for a bolder visual.
        </p>
        <div className="rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] p-6">
          <TabsSolidDemo />
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
          <code>{`import { Tabs } from "@trinkui/react";`}</code>
        </pre>
      </section>

      {/* Usage */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Pass an array of tab items with keys, labels, and content.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Tabs
  defaultKey="overview"
  items={[
    { key: "overview", label: "Overview", content: <p>Overview content here.</p> },
    { key: "features", label: "Features", content: <p>Features content here.</p> },
    { key: "pricing", label: "Pricing", content: <p>Pricing content here.</p> },
  ]}
/>`}</code>
        </pre>
      </section>

      {/* Variants */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Variants</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Three visual styles: <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">underline</code>, <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">solid</code>, and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">bordered</code>.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`{/* Default underline indicator */}
<Tabs variant="underline" items={items} />

{/* Solid background on active tab */}
<Tabs variant="solid" items={items} />

{/* Bordered box around active tab */}
<Tabs variant="bordered" items={items} />`}</code>
        </pre>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sizes</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Available in three sizes: <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">sm</code>, <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">md</code>, and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">lg</code>.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Tabs size="sm" items={items} />
<Tabs size="md" items={items} />
<Tabs size="lg" items={items} />`}</code>
        </pre>
      </section>

      {/* Full Width */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Full Width</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Set <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">fullWidth</code> to stretch the tabs to fill the container.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Tabs fullWidth items={items} />`}</code>
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
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">items</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">TabItem[]</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Array of tab items with key, label, and content</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">defaultKey</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Key of the initially active tab</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">variant</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"underline" | "solid" | "bordered"`}</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"underline"`}</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Visual style of the tab indicator</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">size</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"sm" | "md" | "lg"`}</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"md"`}</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Size of the tab items</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">fullWidth</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Stretch tabs to fill the full container width</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-[rgb(var(--trinkui-muted))]">
          <li>Uses <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;tablist&quot;</code> on the tab container, <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;tab&quot;</code> on each tab, and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;tabpanel&quot;</code> on the content panel.</li>
          <li>The active tab has <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-selected=&quot;true&quot;</code>; inactive tabs have <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-selected=&quot;false&quot;</code>.</li>
          <li>Arrow keys navigate between tabs; <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">Home</code> and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">End</code> jump to the first and last tab.</li>
          <li>Each tab panel is associated with its tab via <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-controls</code> and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-labelledby</code>.</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <a href="/components/table" className="text-sm text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors">
          &larr; Table
        </a>
        <a href="/components/textarea" className="text-sm text-[rgb(var(--trinkui-primary))] hover:underline">
          Textarea &rarr;
        </a>
      </div>
    </div>
  );
}
