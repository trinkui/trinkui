"use client";

import { useState, useEffect, useCallback } from "react";
import Link from "next/link";

interface ToastData {
  id: number;
  title: string;
  description: string;
  variant: "default" | "success" | "warning" | "danger";
}

function ToastDemo() {
  const [toasts, setToasts] = useState<ToastData[]>([]);
  const [nextId, setNextId] = useState(0);

  const removeToast = useCallback((id: number) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  }, []);

  const addToast = (variant: ToastData["variant"]) => {
    const messages: Record<ToastData["variant"], { title: string; description: string }> = {
      default: { title: "Notification", description: "This is a default notification message." },
      success: { title: "Success", description: "Operation completed successfully." },
      warning: { title: "Warning", description: "Please review before continuing." },
      danger: { title: "Error", description: "Something went wrong. Please try again." },
    };

    const id = nextId;
    setNextId((n) => n + 1);
    setToasts((prev) => [...prev, { id, ...messages[variant], variant }]);
  };

  useEffect(() => {
    if (toasts.length === 0) return;
    const latest = toasts[toasts.length - 1] as ToastData;
    const timer = setTimeout(() => removeToast(latest.id), 3000);
    return () => clearTimeout(timer);
  }, [toasts, removeToast]);

  const variantStyles: Record<ToastData["variant"], { border: string; bg: string; title: string; desc: string; icon: React.ReactNode }> = {
    default: {
      border: "border-[rgb(var(--trinkui-border))]",
      bg: "bg-[rgb(var(--trinkui-surface))]",
      title: "text-[rgb(var(--trinkui-fg))]",
      desc: "text-[rgb(var(--trinkui-muted))]",
      icon: null,
    },
    success: {
      border: "border-[rgb(var(--trinkui-success)/0.3)]",
      bg: "bg-[rgb(var(--trinkui-success)/0.1)]",
      title: "text-[rgb(var(--trinkui-success))]",
      desc: "text-[rgb(var(--trinkui-success)/0.8)]",
      icon: (
        <svg className="mt-0.5 h-5 w-5 shrink-0 text-[rgb(var(--trinkui-success))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    warning: {
      border: "border-[rgb(var(--trinkui-warning)/0.3)]",
      bg: "bg-[rgb(var(--trinkui-warning)/0.1)]",
      title: "text-[rgb(var(--trinkui-warning))]",
      desc: "text-[rgb(var(--trinkui-warning)/0.8)]",
      icon: (
        <svg className="mt-0.5 h-5 w-5 shrink-0 text-[rgb(var(--trinkui-warning))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
        </svg>
      ),
    },
    danger: {
      border: "border-[rgb(var(--trinkui-danger)/0.3)]",
      bg: "bg-[rgb(var(--trinkui-danger)/0.1)]",
      title: "text-[rgb(var(--trinkui-danger))]",
      desc: "text-[rgb(var(--trinkui-danger)/0.8)]",
      icon: (
        <svg className="mt-0.5 h-5 w-5 shrink-0 text-[rgb(var(--trinkui-danger))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
  };

  return (
    <div className="rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] p-6">
      <p className="mb-3 text-sm font-medium text-[rgb(var(--trinkui-fg))]">Interactive Toasts (auto-dismiss after 3s)</p>
      <div className="flex flex-wrap gap-2">
        <button
          onClick={() => addToast("default")}
          className="rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] px-4 py-2 text-sm font-medium text-[rgb(var(--trinkui-fg))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))]"
        >
          Default Toast
        </button>
        <button
          onClick={() => addToast("success")}
          className="rounded-[var(--trinkui-radius-md)] px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
          style={{ backgroundColor: "#17C964" }}
        >
          Success
        </button>
        <button
          onClick={() => addToast("warning")}
          className="rounded-[var(--trinkui-radius-md)] px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
          style={{ backgroundColor: "#F5A524" }}
        >
          Warning
        </button>
        <button
          onClick={() => addToast("danger")}
          className="rounded-[var(--trinkui-radius-md)] px-4 py-2 text-sm font-medium text-white transition-colors hover:opacity-90"
          style={{ backgroundColor: "#F31260" }}
        >
          Error
        </button>
      </div>

      {/* Toast container - fixed bottom-right */}
      <div className="fixed bottom-4 right-4 z-50 flex flex-col gap-2" role="status" aria-live="polite">
        {toasts.map((toast) => {
          const styles = variantStyles[toast.variant];
          return (
            <div
              key={toast.id}
              className={`flex w-80 items-start gap-3 rounded-[var(--trinkui-radius-lg)] border p-4 shadow-[var(--trinkui-shadow-lg)] ${styles.border} ${styles.bg}`}
              style={{ animation: "slideInToast 0.2s ease-out" }}
            >
              {styles.icon}
              <div className="flex-1">
                <p className={`text-sm font-medium ${styles.title}`}>{toast.title}</p>
                <p className={`mt-0.5 text-xs ${styles.desc}`}>{toast.description}</p>
              </div>
              <button
                onClick={() => removeToast(toast.id)}
                className="text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))]"
                aria-label="Dismiss"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          );
        })}
      </div>

      <style>{`
        @keyframes slideInToast {
          from { transform: translateX(100%); opacity: 0; }
          to { transform: translateX(0); opacity: 1; }
        }
      `}</style>
    </div>
  );
}

export default function ToastPage() {
  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Toast</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Non-intrusive notification system for displaying brief messages. Supports multiple variants, auto-dismiss, and a hook-based API via ToastProvider.
        </p>
      </div>

      {/* Live Demo */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Live Demo</h2>
        <ToastDemo />
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
          <code>{`import { ToastProvider, useToast } from "@trinkui/react";`}</code>
        </pre>
      </div>

      {/* Setup */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Setup</h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Wrap your app with <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">ToastProvider</code> to enable toasts globally.
        </p>
        <pre className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[#0d1117] px-4 py-3 text-sm text-slate-200">
          <code>{`// app/layout.tsx
import { ToastProvider } from "@trinkui/react";

export default function RootLayout({ children }) {
  return (
    <html>
      <body>
        <ToastProvider>
          {children}
        </ToastProvider>
      </body>
    </html>
  );
}`}</code>
        </pre>
      </div>

      {/* Usage */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <button className="rounded-[var(--trinkui-radius-md)] bg-[rgb(var(--trinkui-primary))] px-4 py-2 text-sm font-medium text-[rgb(var(--trinkui-primary-fg))] transition-colors hover:opacity-90">
              Show Toast
            </button>
            {/* Static toast preview */}
            <div className="mt-6 flex flex-col gap-3">
              <div className="flex w-full max-w-sm items-start gap-3 rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] p-4 shadow-[var(--trinkui-shadow-lg)]">
                <div className="flex-1">
                  <p className="text-sm font-medium text-[rgb(var(--trinkui-fg))]">Changes saved</p>
                  <p className="mt-0.5 text-xs text-[rgb(var(--trinkui-muted))]">Your profile has been updated successfully.</p>
                </div>
                <button className="text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))]" aria-label="Dismiss">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                </button>
              </div>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`function MyComponent() {
  const { toast } = useToast();

  return (
    <Button onClick={() => toast({
      title: "Changes saved",
      description: "Your profile has been updated successfully.",
    })}>
      Show Toast
    </Button>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Variants */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Variants</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex flex-col gap-3 p-8">
            {/* Default */}
            <div className="flex w-full max-w-sm items-start gap-3 rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] p-4 shadow-[var(--trinkui-shadow-md)]">
              <div className="flex-1">
                <p className="text-sm font-medium text-[rgb(var(--trinkui-fg))]">Default</p>
                <p className="mt-0.5 text-xs text-[rgb(var(--trinkui-muted))]">This is a default notification.</p>
              </div>
            </div>
            {/* Success */}
            <div className="flex w-full max-w-sm items-start gap-3 rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-success)/0.3)] bg-[rgb(var(--trinkui-success)/0.1)] p-4 shadow-[var(--trinkui-shadow-md)]">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-[rgb(var(--trinkui-success))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div className="flex-1">
                <p className="text-sm font-medium text-[rgb(var(--trinkui-success))]">Success</p>
                <p className="mt-0.5 text-xs text-[rgb(var(--trinkui-success)/0.8)]">Operation completed successfully.</p>
              </div>
            </div>
            {/* Warning */}
            <div className="flex w-full max-w-sm items-start gap-3 rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-warning)/0.3)] bg-[rgb(var(--trinkui-warning)/0.1)] p-4 shadow-[var(--trinkui-shadow-md)]">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-[rgb(var(--trinkui-warning))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>
              <div className="flex-1">
                <p className="text-sm font-medium text-[rgb(var(--trinkui-warning))]">Warning</p>
                <p className="mt-0.5 text-xs text-[rgb(var(--trinkui-warning)/0.8)]">Please review before continuing.</p>
              </div>
            </div>
            {/* Danger */}
            <div className="flex w-full max-w-sm items-start gap-3 rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-danger)/0.3)] bg-[rgb(var(--trinkui-danger)/0.1)] p-4 shadow-[var(--trinkui-shadow-md)]">
              <svg className="mt-0.5 h-5 w-5 shrink-0 text-[rgb(var(--trinkui-danger))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
              <div className="flex-1">
                <p className="text-sm font-medium text-[rgb(var(--trinkui-danger))]">Danger</p>
                <p className="mt-0.5 text-xs text-[rgb(var(--trinkui-danger)/0.8)]">Something went wrong. Please try again.</p>
              </div>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-b-[var(--trinkui-radius-lg)]">
              <code>{`toast({ title: "Default", description: "..." });
toast({ title: "Success", description: "...", variant: "success" });
toast({ title: "Warning", description: "...", variant: "warning" });
toast({ title: "Danger", description: "...", variant: "danger" });`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Duration */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Duration</h2>
        <div className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="border-t-0">
            <pre className="overflow-x-auto px-4 py-3 text-sm text-slate-200 bg-[#0d1117] rounded-[var(--trinkui-radius-lg)]">
              <code>{`// Auto-dismiss after 3 seconds (default: 5000ms)
toast({ title: "Quick!", duration: 3000 });

// Persist until manually dismissed
toast({ title: "Sticky", duration: Infinity });`}</code>
            </pre>
          </div>
        </div>
      </div>

      {/* Props */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Toast Options</h2>
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
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">title</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Main heading text for the toast</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">description</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Secondary description text below the title</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">variant</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"default" | "success" | "warning" | "danger"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"default"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Visual style and icon of the toast</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">duration</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">number</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">5000</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Auto-dismiss duration in milliseconds; use Infinity to persist</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* ToastProvider Props */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">ToastProvider Props</h2>
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
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">children</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">ReactNode</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Application content</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">position</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"top-right" | "top-left" | "bottom-right" | "bottom-left"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"bottom-right"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Screen position for the toast stack</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">maxToasts</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">number</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">5</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Maximum number of visible toasts at once</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      {/* Accessibility */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[rgb(var(--trinkui-muted))]">
          <li>Toast container uses <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;status&quot;</code> and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-live=&quot;polite&quot;</code> for screen reader announcements.</li>
          <li>Danger toasts use <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-live=&quot;assertive&quot;</code> for immediate announcement.</li>
          <li>Dismiss button includes an accessible <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-label</code>.</li>
          <li>Toasts respect <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">prefers-reduced-motion</code> for enter/exit animations.</li>
        </ul>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <Link
          href="/components/textarea"
          className="flex items-center gap-1 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
        >
          <span aria-hidden="true">&larr;</span> Textarea
        </Link>
        <Link
          href="/components/tooltip"
          className="flex items-center gap-1 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
        >
          Tooltip <span aria-hidden="true">&rarr;</span>
        </Link>
      </div>
    </div>
  );
}
