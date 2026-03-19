"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

function DrawerDemo() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    function handleEsc(e: KeyboardEvent) {
      if (e.key === "Escape") setOpen(false);
    }
    if (open) {
      document.addEventListener("keydown", handleEsc);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEsc);
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <div className="rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] p-6">
      <p className="mb-3 text-sm font-medium text-[rgb(var(--trinkui-fg))]">Interactive Drawer</p>
      <button
        onClick={() => setOpen(true)}
        className="rounded-[var(--trinkui-radius-md)] bg-[rgb(var(--trinkui-primary))] px-4 py-2 text-sm font-medium text-[rgb(var(--trinkui-primary-fg))] transition-colors hover:opacity-90"
      >
        Open Drawer
      </button>

      {/* Backdrop + Drawer */}
      {open && (
        <div className="fixed inset-0 z-50">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/50 transition-opacity"
            onClick={() => setOpen(false)}
          />
          {/* Drawer panel */}
          <div
            role="dialog"
            aria-modal="true"
            aria-label="Demo drawer"
            className="absolute bottom-0 right-0 top-0 w-80 border-l border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] shadow-lg"
            style={{
              animation: "slideInRight 0.25s ease-out",
            }}
          >
            {/* Header */}
            <div className="flex items-center justify-between border-b border-[rgb(var(--trinkui-border))] px-5 py-4">
              <h3 className="text-base font-semibold text-[rgb(var(--trinkui-fg))]">Drawer Title</h3>
              <button
                onClick={() => setOpen(false)}
                className="flex h-8 w-8 items-center justify-center rounded-[var(--trinkui-radius-md)] text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))] hover:text-[rgb(var(--trinkui-fg))]"
                aria-label="Close drawer"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            {/* Body */}
            <div className="px-5 py-4">
              <p className="text-sm text-[rgb(var(--trinkui-muted))]">
                This is a live drawer demo. It slides in from the right side of the screen with a dark backdrop overlay.
              </p>
              <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
                Click the backdrop, press Escape, or click the close button to dismiss.
              </p>
              <div className="mt-6 rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] p-3">
                <p className="text-xs font-medium text-[rgb(var(--trinkui-fg))]">Drawer Content</p>
                <p className="mt-1 text-xs text-[rgb(var(--trinkui-muted))]">
                  Place any content here: forms, navigation, details, etc.
                </p>
              </div>
            </div>
            {/* Footer */}
            <div className="absolute bottom-0 left-0 right-0 flex gap-2 border-t border-[rgb(var(--trinkui-border))] px-5 py-4">
              <button
                onClick={() => setOpen(false)}
                className="rounded-[var(--trinkui-radius-md)] bg-[rgb(var(--trinkui-primary))] px-4 py-2 text-sm font-medium text-[rgb(var(--trinkui-primary-fg))]"
              >
                Confirm
              </button>
              <button
                onClick={() => setOpen(false)}
                className="rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] px-4 py-2 text-sm font-medium text-[rgb(var(--trinkui-fg))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))]"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      )}

      <style>{`
        @keyframes slideInRight {
          from { transform: translateX(100%); }
          to { transform: translateX(0); }
        }
      `}</style>
    </div>
  );
}

export default function DrawerPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Drawer</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Sliding panel that overlays the page from any edge. Ideal for navigation menus, filters, detail views, and form sidebars.
        </p>
      </div>

      {/* Live Demo */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Live Demo</h2>
        <DrawerDemo />
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
          <code>{`import { Drawer } from "@trinkui/react";`}</code>
        </pre>
      </div>

      {/* Usage */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            {/* Static drawer preview */}
            <div className="relative h-64 overflow-hidden rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))]">
              {/* Backdrop */}
              <div className="absolute inset-0 bg-black/40" />
              {/* Drawer panel from right */}
              <div className="absolute bottom-0 right-0 top-0 w-72 border-l border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] p-4 shadow-lg">
                <div className="flex items-center justify-between">
                  <h3 className="text-sm font-semibold text-[rgb(var(--trinkui-fg))]">Drawer Title</h3>
                  <button className="flex h-7 w-7 items-center justify-center rounded-[var(--trinkui-radius-md)] text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))]" aria-label="Close">
                    <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                  </button>
                </div>
                <p className="mt-3 text-xs text-[rgb(var(--trinkui-muted))]">Drawer content goes here. This panel slides in from the right side of the screen.</p>
                <div className="mt-6 flex gap-2">
                  <button className="rounded-[var(--trinkui-radius-md)] bg-[rgb(var(--trinkui-primary))] px-3 py-1.5 text-xs font-medium text-[rgb(var(--trinkui-primary-fg))]">Confirm</button>
                  <button className="rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] px-3 py-1.5 text-xs font-medium text-[rgb(var(--trinkui-fg))]">Cancel</button>
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`const [open, setOpen] = useState(false);

<Button onClick={() => setOpen(true)}>Open Drawer</Button>

<Drawer
  open={open}
  onClose={() => setOpen(false)}
  title="Drawer Title"
  footer={
    <>
      <Button onClick={() => setOpen(false)}>Confirm</Button>
      <Button variant="outline" onClick={() => setOpen(false)}>Cancel</Button>
    </>
  }
>
  <p>Drawer content goes here.</p>
</Drawer>`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Positions */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Positions</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="grid grid-cols-2 gap-4 p-8">
            {/* Left */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-[rgb(var(--trinkui-muted))]">Left</p>
              <div className="relative h-32 overflow-hidden rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))]">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-0 left-0 top-0 w-20 border-r border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] p-2">
                  <div className="h-2 w-12 rounded bg-[rgb(var(--trinkui-primary)/0.4)]" />
                  <div className="mt-2 h-1.5 w-10 rounded bg-[rgb(var(--trinkui-border))]" />
                  <div className="mt-1 h-1.5 w-14 rounded bg-[rgb(var(--trinkui-border))]" />
                </div>
              </div>
            </div>
            {/* Right */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-[rgb(var(--trinkui-muted))]">Right</p>
              <div className="relative h-32 overflow-hidden rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))]">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-0 right-0 top-0 w-20 border-l border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] p-2">
                  <div className="h-2 w-12 rounded bg-[rgb(var(--trinkui-primary)/0.4)]" />
                  <div className="mt-2 h-1.5 w-10 rounded bg-[rgb(var(--trinkui-border))]" />
                  <div className="mt-1 h-1.5 w-14 rounded bg-[rgb(var(--trinkui-border))]" />
                </div>
              </div>
            </div>
            {/* Top */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-[rgb(var(--trinkui-muted))]">Top</p>
              <div className="relative h-32 overflow-hidden rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))]">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute left-0 right-0 top-0 h-14 border-b border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] p-2">
                  <div className="h-2 w-16 rounded bg-[rgb(var(--trinkui-primary)/0.4)]" />
                  <div className="mt-2 h-1.5 w-24 rounded bg-[rgb(var(--trinkui-border))]" />
                </div>
              </div>
            </div>
            {/* Bottom */}
            <div className="space-y-2">
              <p className="text-xs font-medium text-[rgb(var(--trinkui-muted))]">Bottom</p>
              <div className="relative h-32 overflow-hidden rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))]">
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 h-14 border-t border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] p-2">
                  <div className="h-2 w-16 rounded bg-[rgb(var(--trinkui-primary)/0.4)]" />
                  <div className="mt-2 h-1.5 w-24 rounded bg-[rgb(var(--trinkui-border))]" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Drawer position="left" ... />
<Drawer position="right" ... />
<Drawer position="top" ... />
<Drawer position="bottom" ... />`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Sizes */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sizes</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex flex-col gap-4 p-8">
            <div className="flex items-center gap-3">
              <span className="w-12 text-xs font-medium text-[rgb(var(--trinkui-muted))]">sm</span>
              <div className="h-5 w-48 rounded bg-[rgb(var(--trinkui-primary)/0.2)] border border-[rgb(var(--trinkui-primary)/0.4)]" />
              <span className="text-xs text-[rgb(var(--trinkui-muted))]">320px</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 text-xs font-medium text-[rgb(var(--trinkui-muted))]">md</span>
              <div className="h-5 w-64 rounded bg-[rgb(var(--trinkui-primary)/0.2)] border border-[rgb(var(--trinkui-primary)/0.4)]" />
              <span className="text-xs text-[rgb(var(--trinkui-muted))]">448px</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 text-xs font-medium text-[rgb(var(--trinkui-muted))]">lg</span>
              <div className="h-5 w-80 rounded bg-[rgb(var(--trinkui-primary)/0.2)] border border-[rgb(var(--trinkui-primary)/0.4)]" />
              <span className="text-xs text-[rgb(var(--trinkui-muted))]">640px</span>
            </div>
            <div className="flex items-center gap-3">
              <span className="w-12 text-xs font-medium text-[rgb(var(--trinkui-muted))]">full</span>
              <div className="h-5 flex-1 rounded bg-[rgb(var(--trinkui-primary)/0.2)] border border-[rgb(var(--trinkui-primary)/0.4)]" />
              <span className="text-xs text-[rgb(var(--trinkui-muted))]">100%</span>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`<Drawer size="sm" ... />
<Drawer size="md" ... />
<Drawer size="lg" ... />
<Drawer size="full" ... />`}</code>
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
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">open</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Whether the drawer is visible</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">onClose</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">() =&gt; void</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Callback to close the drawer</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">position</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"left" | "right" | "top" | "bottom"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"right"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Edge from which the drawer slides in</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">size</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"sm" | "md" | "lg" | "full"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"md"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Width (left/right) or height (top/bottom) of the panel</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">title</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Title displayed in the drawer header</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">children</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">ReactNode</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Body content of the drawer</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">footer</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">ReactNode</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Footer content, typically action buttons</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">closeOnBackdrop</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">true</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Close the drawer when clicking the backdrop overlay</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Accessibility */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[rgb(var(--trinkui-muted))]">
          <li>Implements a <strong>focus trap</strong> to keep keyboard navigation within the open drawer.</li>
          <li>Pressing <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">Escape</code> closes the drawer.</li>
          <li>Uses <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;dialog&quot;</code> and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-modal=&quot;true&quot;</code>.</li>
          <li>Title is announced via <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-labelledby</code>.</li>
          <li>Focus is returned to the trigger element when the drawer closes.</li>
        </ul>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <Link
          href="/components/divider"
          className="flex items-center gap-1 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
        >
          <span aria-hidden="true">&larr;</span> Divider
        </Link>
        <Link
          href="/components/dropdown"
          className="flex items-center gap-1 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
        >
          Dropdown <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
