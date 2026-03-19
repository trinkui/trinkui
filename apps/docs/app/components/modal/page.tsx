"use client";

import { useState, useEffect } from "react";

export default function ModalPage() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [isOpen]);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Components</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Modal</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          A dialog overlay that demands user attention. Supports multiple sizes, backdrop dismiss, and focus trapping for accessible modal interactions.
        </p>
      </div>

      {/* Live Demo */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Demo</h2>
        <div className="rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] p-6">
          <button
            onClick={() => setIsOpen(true)}
            className="rounded-lg bg-[rgb(var(--trinkui-primary))] px-4 py-2 text-sm font-medium text-[rgb(var(--trinkui-primary-fg))] transition-opacity hover:opacity-90"
          >
            Open Modal
          </button>

          {isOpen && (
            <div className="fixed inset-0 z-50 flex items-center justify-center">
              {/* Backdrop */}
              <div
                className="absolute inset-0 bg-black/50 backdrop-blur-sm"
                onClick={() => setIsOpen(false)}
              />
              {/* Modal card */}
              <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="demo-modal-title"
                className="relative z-10 mx-4 w-full max-w-md rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] shadow-xl"
              >
                {/* Header */}
                <div className="flex items-center justify-between border-b border-[rgb(var(--trinkui-border))] px-6 py-4">
                  <h3 id="demo-modal-title" className="text-lg font-semibold text-[rgb(var(--trinkui-fg))]">
                    Confirm Action
                  </h3>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded p-1 text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-border)/0.3)] hover:text-[rgb(var(--trinkui-fg))]"
                    aria-label="Close modal"
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
                      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                    </svg>
                  </button>
                </div>
                {/* Body */}
                <div className="px-6 py-4">
                  <p className="text-sm text-[rgb(var(--trinkui-muted))]">
                    Are you sure you want to proceed? This action cannot be undone. All associated data will be permanently removed.
                  </p>
                </div>
                {/* Footer */}
                <div className="flex justify-end gap-3 border-t border-[rgb(var(--trinkui-border))] px-6 py-4">
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg border border-[rgb(var(--trinkui-border))] px-4 py-2 text-sm font-medium text-[rgb(var(--trinkui-fg))] transition-colors hover:bg-[rgb(var(--trinkui-border)/0.2)]"
                  >
                    Cancel
                  </button>
                  <button
                    onClick={() => setIsOpen(false)}
                    className="rounded-lg bg-[rgb(var(--trinkui-primary))] px-4 py-2 text-sm font-medium text-[rgb(var(--trinkui-primary-fg))] transition-opacity hover:opacity-90"
                  >
                    Confirm
                  </button>
                </div>
              </div>
            </div>
          )}
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
          <code>{`import { Modal } from "@trinkui/react";`}</code>
        </pre>
      </section>

      {/* Usage */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Control the modal with the <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">open</code> and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">onClose</code> props.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`const [isOpen, setIsOpen] = useState(false);

<Button onClick={() => setIsOpen(true)}>Open Modal</Button>

<Modal
  open={isOpen}
  onClose={() => setIsOpen(false)}
  title="Confirm Action"
  description="Are you sure you want to proceed? This action cannot be undone."
  footer={
    <div className="flex gap-2 justify-end">
      <Button variant="ghost" onClick={() => setIsOpen(false)}>Cancel</Button>
      <Button onClick={() => setIsOpen(false)}>Confirm</Button>
    </div>
  }
>
  <p>Additional modal content goes here.</p>
</Modal>`}</code>
        </pre>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sizes</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Available in five sizes: <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">sm</code>, <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">md</code>, <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">lg</code>, <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">xl</code>, and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">full</code>.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Modal size="sm" title="Small Modal" open={isOpen} onClose={handleClose}>
  <p>Compact dialog content.</p>
</Modal>

<Modal size="lg" title="Large Modal" open={isOpen} onClose={handleClose}>
  <p>Spacious dialog for forms or detailed content.</p>
</Modal>

<Modal size="full" title="Fullscreen Modal" open={isOpen} onClose={handleClose}>
  <p>Takes up the entire viewport.</p>
</Modal>`}</code>
        </pre>
      </section>

      {/* Backdrop and Escape */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Dismiss Behavior</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Control how the modal can be dismissed with <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">closeOnBackdrop</code> and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">closeOnEsc</code>.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`{/* Prevent closing by clicking backdrop */}
<Modal
  open={isOpen}
  onClose={handleClose}
  closeOnBackdrop={false}
  title="Persistent Modal"
>
  <p>Must use the close button or Escape key.</p>
</Modal>

{/* Prevent closing with Escape key */}
<Modal
  open={isOpen}
  onClose={handleClose}
  closeOnEsc={false}
  title="No Escape"
>
  <p>Escape key will not close this modal.</p>
</Modal>`}</code>
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
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">open</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Whether the modal is visible</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">onClose</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">() =&gt; void</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Callback when the modal requests to close</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">title</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Heading text for the modal</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">description</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Description text shown below the title</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">size</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"sm" | "md" | "lg" | "xl" | "full"`}</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"md"`}</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Width of the modal dialog</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">closeOnBackdrop</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">true</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Close modal when clicking the backdrop overlay</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">closeOnEsc</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">true</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Close modal when pressing the Escape key</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">children</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Body content of the modal</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">footer</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Footer content, typically action buttons</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-[rgb(var(--trinkui-muted))]">
          <li>Uses <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;dialog&quot;</code> and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-modal=&quot;true&quot;</code> to communicate the modal to assistive technologies.</li>
          <li>Focus is trapped inside the modal while open — tabbing cycles through interactive elements within the dialog.</li>
          <li>Pressing <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">Escape</code> closes the modal (when <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">closeOnEsc</code> is true).</li>
          <li>Focus is returned to the trigger element when the modal closes.</li>
          <li>The modal title is referenced via <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-labelledby</code> for proper labeling.</li>
          <li>Background scroll is locked while the modal is open.</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <a href="/components/listbox" className="text-sm text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors">
          &larr; Listbox
        </a>
        <a href="/components/navbar" className="text-sm text-[rgb(var(--trinkui-primary))] hover:underline">
          Navbar &rarr;
        </a>
      </div>
    </div>
  );
}
