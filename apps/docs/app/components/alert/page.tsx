"use client";

import { useState } from "react";

function InfoIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
      <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z" clipRule="evenodd" />
    </svg>
  );
}

function CheckCircleIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
    </svg>
  );
}

function WarningIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
      <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
    </svg>
  );
}

function DangerIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-5 w-5">
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.28 7.22a.75.75 0 00-1.06 1.06L8.94 10l-1.72 1.72a.75.75 0 101.06 1.06L10 11.06l1.72 1.72a.75.75 0 101.06-1.06L11.06 10l1.72-1.72a.75.75 0 00-1.06-1.06L10 8.94 8.28 7.22z" clipRule="evenodd" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="h-4 w-4">
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  );
}

export default function AlertPage() {
  const [showDismissible, setShowDismissible] = useState(true);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Components</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Alert</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Contextual feedback messages for user actions. Supports info, success, warning, and danger variants with optional dismiss functionality.
        </p>
      </div>

      {/* Live Demo */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Demo</h2>
        <div className="rounded-xl border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] p-6">
          <div className="space-y-4">
            {/* Info Alert */}
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-[rgb(var(--trinkui-info))] bg-[rgb(var(--trinkui-info)/0.08)] px-4 py-3">
              <span className="mt-0.5 shrink-0 text-[rgb(var(--trinkui-info))]"><InfoIcon /></span>
              <div>
                <p className="font-semibold text-[rgb(var(--trinkui-fg))]">Update available</p>
                <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">A new version is available. Please update to get the latest features.</p>
              </div>
            </div>

            {/* Success Alert */}
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-[rgb(var(--trinkui-success))] bg-[rgb(var(--trinkui-success)/0.08)] px-4 py-3">
              <span className="mt-0.5 shrink-0 text-[rgb(var(--trinkui-success))]"><CheckCircleIcon /></span>
              <div>
                <p className="font-semibold text-[rgb(var(--trinkui-fg))]">Success</p>
                <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">Your changes have been saved successfully.</p>
              </div>
            </div>

            {/* Warning Alert */}
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-[rgb(var(--trinkui-warning))] bg-[rgb(var(--trinkui-warning)/0.08)] px-4 py-3">
              <span className="mt-0.5 shrink-0 text-[rgb(var(--trinkui-warning))]"><WarningIcon /></span>
              <div>
                <p className="font-semibold text-[rgb(var(--trinkui-fg))]">Warning</p>
                <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">Your session will expire in 5 minutes.</p>
              </div>
            </div>

            {/* Danger Alert */}
            <div className="flex items-start gap-3 rounded-lg border-l-4 border-[rgb(var(--trinkui-danger))] bg-[rgb(var(--trinkui-danger)/0.08)] px-4 py-3">
              <span className="mt-0.5 shrink-0 text-[rgb(var(--trinkui-danger))]"><DangerIcon /></span>
              <div>
                <p className="font-semibold text-[rgb(var(--trinkui-fg))]">Error</p>
                <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">Failed to save changes. Please try again.</p>
              </div>
            </div>

            {/* Dismissible Alert */}
            {showDismissible ? (
              <div className="flex items-start gap-3 rounded-lg border-l-4 border-[rgb(var(--trinkui-success))] bg-[rgb(var(--trinkui-success)/0.08)] px-4 py-3">
                <span className="mt-0.5 shrink-0 text-[rgb(var(--trinkui-success))]"><CheckCircleIcon /></span>
                <div className="flex-1">
                  <p className="font-semibold text-[rgb(var(--trinkui-fg))]">Dismissible</p>
                  <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">Click the X button to dismiss this alert.</p>
                </div>
                <button
                  onClick={() => setShowDismissible(false)}
                  className="shrink-0 rounded p-1 text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-border)/0.3)] hover:text-[rgb(var(--trinkui-fg))]"
                  aria-label="Dismiss alert"
                >
                  <CloseIcon />
                </button>
              </div>
            ) : (
              <button
                onClick={() => setShowDismissible(true)}
                className="rounded-lg border border-dashed border-[rgb(var(--trinkui-border))] px-4 py-3 text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:border-[rgb(var(--trinkui-primary))] hover:text-[rgb(var(--trinkui-primary))]"
              >
                Show dismissible alert again
              </button>
            )}
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
          <code>{`import { Alert } from "@trinkui/react";`}</code>
        </pre>
      </section>

      {/* Usage */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Use the Alert component to display contextual messages with different severity levels.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Alert
  variant="info"
  title="Update available"
  description="A new version is available. Please update to get the latest features."
/>`}</code>
        </pre>
      </section>

      {/* Variants */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Variants</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Alerts come in four variants to communicate different levels of importance.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`{/* Info — general information */}
<Alert variant="info" title="Info" description="This is an informational message." />

{/* Success — positive confirmation */}
<Alert variant="success" title="Success" description="Your changes have been saved." />

{/* Warning — caution required */}
<Alert variant="warning" title="Warning" description="Your session will expire in 5 minutes." />

{/* Danger — error or destructive action */}
<Alert variant="danger" title="Error" description="Failed to save changes. Please try again." />`}</code>
        </pre>
      </section>

      {/* Dismissible */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Dismissible</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Set <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">dismissible</code> to allow users to close the alert.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Alert
  variant="success"
  title="Saved!"
  description="Your profile has been updated."
  dismissible
  onDismiss={() => console.log("dismissed")}
/>`}</code>
        </pre>
      </section>

      {/* With Icon */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">With Custom Icon</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Pass a custom icon element via the <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">icon</code> prop.
        </p>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`<Alert
  variant="warning"
  icon={<ExclamationIcon />}
  title="Disk space low"
  description="You have less than 5% disk space remaining."
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
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">variant</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"info" | "success" | "warning" | "danger"`}</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"info"`}</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">The visual style and color scheme of the alert</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">title</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Bold heading text for the alert</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">description</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Descriptive body text shown below the title</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">icon</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">ReactNode</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Custom icon element displayed before the title</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">dismissible</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Show a close button to dismiss the alert</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">onDismiss</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">() =&gt; void</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Callback fired when the dismiss button is clicked</td>
              </tr>
              <tr>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-primary))]">className</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="py-3 pr-4 font-mono text-xs text-[rgb(var(--trinkui-muted))]">-</td>
                <td className="py-3 text-[rgb(var(--trinkui-muted))]">Additional CSS classes to apply</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-[rgb(var(--trinkui-muted))]">
          <li>Uses <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;alert&quot;</code> to announce the message to assistive technologies.</li>
          <li>Applies <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-live=&quot;assertive&quot;</code> for danger and warning variants, <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-live=&quot;polite&quot;</code> for info and success.</li>
          <li>Dismiss button includes an accessible label for screen readers.</li>
          <li>Color is not the sole indicator of variant meaning — icons reinforce the message type.</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <a href="/components/accordion" className="text-sm text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors">
          &larr; Accordion
        </a>
        <a href="/components/autocomplete" className="text-sm text-[rgb(var(--trinkui-primary))] hover:underline">
          Autocomplete &rarr;
        </a>
      </div>
    </div>
  );
}
