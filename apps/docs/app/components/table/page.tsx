import Link from "next/link";

export default function TablePage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Table</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Data table component for displaying structured information in rows and columns. Supports striped rows, hover highlighting, sortable columns, and compact mode.
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
          <code>{`import { Table } from "@trinkui/react";`}</code>
        </pre>
      </div>

      {/* Usage */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <div className="overflow-x-auto rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))]">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-secondary))]">
                    <th className="px-4 py-3 font-medium text-[rgb(var(--trinkui-fg))]">Name</th>
                    <th className="px-4 py-3 font-medium text-[rgb(var(--trinkui-fg))]">Role</th>
                    <th className="px-4 py-3 font-medium text-[rgb(var(--trinkui-fg))]">Status</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[rgb(var(--trinkui-border))]">
                  <tr>
                    <td className="px-4 py-3 text-[rgb(var(--trinkui-fg))]">Alice Johnson</td>
                    <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Developer</td>
                    <td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-500">Active</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[rgb(var(--trinkui-fg))]">Bob Smith</td>
                    <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Designer</td>
                    <td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-medium text-emerald-500">Active</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[rgb(var(--trinkui-fg))]">Carol Williams</td>
                    <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Manager</td>
                    <td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-amber-500/15 px-2 py-0.5 text-xs font-medium text-amber-500">Away</span></td>
                  </tr>
                  <tr>
                    <td className="px-4 py-3 text-[rgb(var(--trinkui-fg))]">Dave Brown</td>
                    <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Developer</td>
                    <td className="px-4 py-3"><span className="inline-flex items-center rounded-full bg-[rgb(var(--trinkui-muted)/0.15)] px-2 py-0.5 text-xs font-medium text-[rgb(var(--trinkui-muted))]">Offline</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Table
  columns={[
    { key: "name", label: "Name" },
    { key: "role", label: "Role" },
    { key: "status", label: "Status", render: (val) => <Badge>{val}</Badge> },
  ]}
  data={[
    { name: "Alice Johnson", role: "Developer", status: "Active" },
    { name: "Bob Smith", role: "Designer", status: "Active" },
    { name: "Carol Williams", role: "Manager", status: "Away" },
    { name: "Dave Brown", role: "Developer", status: "Offline" },
  ]}
/>`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Striped */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Striped</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <div className="overflow-x-auto rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))]">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-secondary))]">
                    <th className="px-4 py-3 font-medium text-[rgb(var(--trinkui-fg))]">Name</th>
                    <th className="px-4 py-3 font-medium text-[rgb(var(--trinkui-fg))]">Role</th>
                    <th className="px-4 py-3 font-medium text-[rgb(var(--trinkui-fg))]">Email</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-[rgb(var(--trinkui-border))]">
                    <td className="px-4 py-3 text-[rgb(var(--trinkui-fg))]">Alice</td>
                    <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Developer</td>
                    <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">alice@example.com</td>
                  </tr>
                  <tr className="border-b border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-secondary)/0.5)]">
                    <td className="px-4 py-3 text-[rgb(var(--trinkui-fg))]">Bob</td>
                    <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Designer</td>
                    <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">bob@example.com</td>
                  </tr>
                  <tr className="border-b border-[rgb(var(--trinkui-border))]">
                    <td className="px-4 py-3 text-[rgb(var(--trinkui-fg))]">Carol</td>
                    <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Manager</td>
                    <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">carol@example.com</td>
                  </tr>
                  <tr className="bg-[rgb(var(--trinkui-secondary)/0.5)]">
                    <td className="px-4 py-3 text-[rgb(var(--trinkui-fg))]">Dave</td>
                    <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Developer</td>
                    <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">dave@example.com</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Table striped columns={columns} data={data} />`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Compact & Bordered */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Compact & Bordered</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <div className="overflow-x-auto rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))]">
              <table className="w-full text-left text-sm">
                <thead>
                  <tr className="border-b border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-secondary))]">
                    <th className="border-r border-[rgb(var(--trinkui-border))] px-3 py-2 font-medium text-[rgb(var(--trinkui-fg))]">ID</th>
                    <th className="border-r border-[rgb(var(--trinkui-border))] px-3 py-2 font-medium text-[rgb(var(--trinkui-fg))]">Name</th>
                    <th className="px-3 py-2 font-medium text-[rgb(var(--trinkui-fg))]">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[rgb(var(--trinkui-border))]">
                  <tr>
                    <td className="border-r border-[rgb(var(--trinkui-border))] px-3 py-1.5 font-mono text-xs text-[rgb(var(--trinkui-muted))]">001</td>
                    <td className="border-r border-[rgb(var(--trinkui-border))] px-3 py-1.5 text-[rgb(var(--trinkui-fg))]">Alpha</td>
                    <td className="px-3 py-1.5 text-[rgb(var(--trinkui-muted))]">$1,200</td>
                  </tr>
                  <tr>
                    <td className="border-r border-[rgb(var(--trinkui-border))] px-3 py-1.5 font-mono text-xs text-[rgb(var(--trinkui-muted))]">002</td>
                    <td className="border-r border-[rgb(var(--trinkui-border))] px-3 py-1.5 text-[rgb(var(--trinkui-fg))]">Beta</td>
                    <td className="px-3 py-1.5 text-[rgb(var(--trinkui-muted))]">$3,450</td>
                  </tr>
                  <tr>
                    <td className="border-r border-[rgb(var(--trinkui-border))] px-3 py-1.5 font-mono text-xs text-[rgb(var(--trinkui-muted))]">003</td>
                    <td className="border-r border-[rgb(var(--trinkui-border))] px-3 py-1.5 text-[rgb(var(--trinkui-fg))]">Gamma</td>
                    <td className="px-3 py-1.5 text-[rgb(var(--trinkui-muted))]">$780</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Table compact bordered columns={columns} data={data} />`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Table Props */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Table Props</h2>
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
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">columns</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">TableColumn[]</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Column definitions array</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">data</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`Record<string, unknown>[]`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Row data array keyed by column key</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">striped</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Apply alternating row background colors</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">hoverable</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Highlight rows on hover</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">bordered</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Show borders between columns</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">compact</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Reduce cell padding for denser layouts</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* TableColumn Props */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">TableColumn Props</h2>
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
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">key</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Key that maps to the data field</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">label</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Column header text</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">render</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">(value, row) =&gt; ReactNode</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Custom cell renderer function</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">sortable</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Enable sorting for this column</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">width</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string | number</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Fixed column width (e.g. &quot;120px&quot; or &quot;20%&quot;)</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Accessibility */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[rgb(var(--trinkui-muted))]">
          <li>Uses semantic <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">&lt;table&gt;</code>, <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">&lt;thead&gt;</code>, <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">&lt;tbody&gt;</code>, <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">&lt;th&gt;</code>, and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">&lt;td&gt;</code> elements.</li>
          <li>Sortable column headers include <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-sort</code> to indicate current sort direction.</li>
          <li>Column headers use <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">scope=&quot;col&quot;</code> for proper cell-to-header association.</li>
          <li>Tables include a <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">caption</code> element when a title is provided.</li>
        </ul>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <Link
          href="/components/switch"
          className="flex items-center gap-1 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
        >
          <span aria-hidden="true">&larr;</span> Switch
        </Link>
        <Link
          href="/components/tabs"
          className="flex items-center gap-1 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
        >
          Tabs <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
