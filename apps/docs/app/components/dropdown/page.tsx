import Link from "next/link";

export default function DropdownPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Dropdown</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Contextual menu triggered by a button or other element. Displays a list of actions, links, or options in a floating panel.
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
          <code>{`import { Dropdown, DropdownItem } from "@trinkui/react";`}</code>
        </pre>
      </div>

      {/* Usage */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <div className="inline-flex flex-col items-start">
              {/* Trigger */}
              <button className="inline-flex items-center gap-2 rounded-[var(--trinkui-radius-md)] bg-[rgb(var(--trinkui-primary))] px-4 py-2 text-sm font-medium text-[rgb(var(--trinkui-primary-fg))]">
                Options
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" /></svg>
              </button>
              {/* Menu (shown statically for preview) */}
              <div className="mt-2 w-48 rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] py-1 shadow-[var(--trinkui-shadow-lg)]">
                <button className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-[rgb(var(--trinkui-fg))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))]">
                  <svg className="h-4 w-4 text-[rgb(var(--trinkui-muted))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>
                  Edit
                </button>
                <button className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-[rgb(var(--trinkui-fg))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))]">
                  <svg className="h-4 w-4 text-[rgb(var(--trinkui-muted))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M8 16H6a2 2 0 01-2-2V6a2 2 0 012-2h8a2 2 0 012 2v2m-6 12h8a2 2 0 002-2v-8a2 2 0 00-2-2h-8a2 2 0 00-2 2v8a2 2 0 002 2z" /></svg>
                  Duplicate
                </button>
                <div className="my-1 border-t border-[rgb(var(--trinkui-border))]" />
                <button className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-[rgb(var(--trinkui-muted))] opacity-50 cursor-not-allowed">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4" /></svg>
                  Archive
                </button>
                <div className="my-1 border-t border-[rgb(var(--trinkui-border))]" />
                <button className="flex w-full items-center gap-2 px-3 py-2 text-left text-sm text-red-500 transition-colors hover:bg-red-500/10">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" /></svg>
                  Delete
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Dropdown
  trigger={<Button>Options</Button>}
  items={[
    { label: "Edit", icon: <EditIcon />, onClick: handleEdit },
    { label: "Duplicate", icon: <CopyIcon />, onClick: handleDuplicate },
    { divider: true },
    { label: "Archive", icon: <ArchiveIcon />, disabled: true },
    { divider: true },
    { label: "Delete", icon: <TrashIcon />, danger: true, onClick: handleDelete },
  ]}
/>`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Alignment */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Alignment</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex items-start justify-around p-8">
            <div className="space-y-2 text-center">
              <p className="text-xs font-medium text-[rgb(var(--trinkui-muted))]">align=&quot;start&quot;</p>
              <div className="inline-flex flex-col items-start">
                <div className="h-8 w-20 rounded-[var(--trinkui-radius-md)] bg-[rgb(var(--trinkui-primary)/0.3)] border border-[rgb(var(--trinkui-primary)/0.5)]" />
                <div className="mt-1 h-16 w-36 rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]" />
              </div>
            </div>
            <div className="space-y-2 text-center">
              <p className="text-xs font-medium text-[rgb(var(--trinkui-muted))]">align=&quot;center&quot;</p>
              <div className="inline-flex flex-col items-center">
                <div className="h-8 w-20 rounded-[var(--trinkui-radius-md)] bg-[rgb(var(--trinkui-primary)/0.3)] border border-[rgb(var(--trinkui-primary)/0.5)]" />
                <div className="mt-1 h-16 w-36 rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]" />
              </div>
            </div>
            <div className="space-y-2 text-center">
              <p className="text-xs font-medium text-[rgb(var(--trinkui-muted))]">align=&quot;end&quot;</p>
              <div className="inline-flex flex-col items-end">
                <div className="h-8 w-20 rounded-[var(--trinkui-radius-md)] bg-[rgb(var(--trinkui-primary)/0.3)] border border-[rgb(var(--trinkui-primary)/0.5)]" />
                <div className="mt-1 h-16 w-36 rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]" />
              </div>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Dropdown align="start" ... />
<Dropdown align="center" ... />
<Dropdown align="end" ... />`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Dropdown Props */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Dropdown Props</h2>
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
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">trigger</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">ReactNode</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Element that toggles the dropdown menu</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">items</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">DropdownItem[]</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Array of menu item objects</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">align</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"start" | "center" | "end"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"start"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Horizontal alignment of the menu relative to the trigger</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* DropdownItem Props */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">DropdownItem Props</h2>
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
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Text label for the menu item</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">icon</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">ReactNode</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Icon displayed before the label</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">onClick</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">() =&gt; void</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Click handler for the item</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">disabled</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Disable the item interaction</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">danger</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Apply destructive/danger styling (red text)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">divider</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Render a visual separator instead of an item</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Accessibility */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[rgb(var(--trinkui-muted))]">
          <li>Trigger element has <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-expanded</code> and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-haspopup=&quot;menu&quot;</code>.</li>
          <li>Menu uses <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;menu&quot;</code> with items as <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;menuitem&quot;</code>.</li>
          <li>Arrow keys navigate between items; <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">Enter</code> / <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">Space</code> activate the focused item.</li>
          <li><code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">Escape</code> closes the menu and returns focus to the trigger.</li>
          <li>Disabled items are skipped during keyboard navigation.</li>
        </ul>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <Link
          href="/components/drawer"
          className="flex items-center gap-1 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
        >
          <span aria-hidden="true">&larr;</span> Drawer
        </Link>
        <Link
          href="/components/image"
          className="flex items-center gap-1 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
        >
          Image <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
