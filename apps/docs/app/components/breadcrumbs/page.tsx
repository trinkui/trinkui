"use client";

function BreadcrumbDemo() {
  const items = [
    { label: "Home", href: "#" },
    { label: "Products", href: "#" },
    { label: "Electronics", href: "#" },
    { label: "Phones" },
  ];

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-1.5 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-1.5">
              {index > 0 && (
                <svg
                  className="h-3.5 w-3.5 text-[rgb(var(--trinkui-muted))]"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                  aria-hidden="true"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              )}
              {isLast ? (
                <span
                  className="font-semibold text-[rgb(var(--trinkui-fg))]"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-primary))]"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

function BreadcrumbSlashDemo() {
  const items = [
    { label: "Dashboard", href: "#" },
    { label: "Settings", href: "#" },
    { label: "Profile" },
  ];

  return (
    <nav aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-sm">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && (
                <span className="text-[rgb(var(--trinkui-muted))]" aria-hidden="true">/</span>
              )}
              {isLast ? (
                <span
                  className="font-semibold text-[rgb(var(--trinkui-fg))]"
                  aria-current="page"
                >
                  {item.label}
                </span>
              ) : (
                <a
                  href={item.href}
                  className="text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-primary))]"
                >
                  {item.label}
                </a>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}

export default function BreadcrumbsPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Components</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Breadcrumbs</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          A navigational aid that shows the user their current location within a page hierarchy. Supports custom separators and multiple sizes.
        </p>
      </div>

      {/* Live Demo: Chevron Separator */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Live Demo</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Breadcrumb trail with chevron separators. The last item is highlighted as the current page.
        </p>
        <div className="rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] p-6">
          <div className="space-y-6">
            <div>
              <p className="mb-2 text-xs font-medium text-[rgb(var(--trinkui-muted))]">Chevron separator</p>
              <BreadcrumbDemo />
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-[rgb(var(--trinkui-muted))]">Slash separator</p>
              <BreadcrumbSlashDemo />
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
          <code>{`import { Breadcrumbs } from "@trinkui/react";`}</code>
        </pre>
      </section>

      {/* Usage */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Pass an array of breadcrumb items. The last item is treated as the current page.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Breadcrumbs
  items={[
    { label: "Home", href: "/" },
    { label: "Components", href: "/components" },
    { label: "Breadcrumbs" },
  ]}
/>`}</code>
        </pre>
      </section>

      {/* Custom Separator */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Custom Separator</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Use the <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">separator</code> prop to change the divider between items.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`{/* Default separator: "/" */}
<Breadcrumbs items={items} />

{/* Arrow separator */}
<Breadcrumbs separator=">" items={items} />

{/* Dot separator */}
<Breadcrumbs separator="·" items={items} />

{/* Custom React element */}
<Breadcrumbs separator={<ChevronRightIcon />} items={items} />`}</code>
        </pre>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sizes</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Available in three sizes: <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">sm</code>, <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">md</code>, and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">lg</code>.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Breadcrumbs size="sm" items={items} />
<Breadcrumbs size="md" items={items} />
<Breadcrumbs size="lg" items={items} />`}</code>
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
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">BreadcrumbItem[]</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Array of breadcrumb items with label and optional href</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">separator</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"/"`}</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Separator element or string between breadcrumb items</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">size</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"sm" | "md" | "lg"`}</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"md"`}</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Size of the breadcrumb text and spacing</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-[rgb(var(--trinkui-muted))]">
          <li>Wrapped in a <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">&lt;nav&gt;</code> element with <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-label=&quot;Breadcrumb&quot;</code> for landmark navigation.</li>
          <li>The current page (last item) has <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-current=&quot;page&quot;</code> to indicate it is the active page.</li>
          <li>Separator characters are hidden from screen readers using <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-hidden=&quot;true&quot;</code>.</li>
          <li>Uses an ordered list (<code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">&lt;ol&gt;</code>) to convey the hierarchical sequence to assistive technologies.</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <a href="/components/badge" className="text-sm text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors">
          &larr; Badge
        </a>
        <a href="/components/button" className="text-sm text-[rgb(var(--trinkui-primary))] hover:underline">
          Button &rarr;
        </a>
      </div>
    </div>
  );
}
