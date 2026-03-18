"use client";

import { useState } from "react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Inline Popover demo (pure JSX + Tailwind, no @trinkui/react)       */
/* ------------------------------------------------------------------ */

const positionStyles: Record<string, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

function DemoPopover({
  label,
  content,
  position = "bottom",
}: {
  label: string;
  content: React.ReactNode;
  position?: "top" | "bottom" | "left" | "right";
}) {
  const [open, setOpen] = useState(false);

  return (
    <div className="relative inline-block">
      <button
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        aria-haspopup="dialog"
        className="rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-4 py-2 text-sm font-medium text-[rgb(var(--trinkui-fg))] transition-colors hover:bg-[rgb(var(--trinkui-border)/0.3)] focus-visible:ring-2 focus-visible:ring-[rgb(var(--trinkui-primary))] focus-visible:outline-none"
      >
        {label}
      </button>
      {open && (
        <>
          {/* Backdrop to close */}
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div
            role="dialog"
            className={`absolute z-50 w-56 rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] p-4 text-sm text-[rgb(var(--trinkui-fg))] shadow-[var(--trinkui-shadow-lg)] ${positionStyles[position]}`}
          >
            {content}
          </div>
        </>
      )}
    </div>
  );
}

function DemoHoverPopover({
  label,
  content,
}: {
  label: string;
  content: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setOpen(true)}
      onMouseLeave={() => setOpen(false)}
    >
      <button
        aria-expanded={open}
        aria-haspopup="dialog"
        className="rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-4 py-2 text-sm font-medium text-[rgb(var(--trinkui-fg))] transition-colors hover:bg-[rgb(var(--trinkui-border)/0.3)] focus-visible:ring-2 focus-visible:ring-[rgb(var(--trinkui-primary))] focus-visible:outline-none"
      >
        {label}
      </button>
      {open && (
        <div
          role="dialog"
          className="absolute top-full left-1/2 z-50 mt-2 w-56 -translate-x-1/2 rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] p-4 text-sm text-[rgb(var(--trinkui-fg))] shadow-[var(--trinkui-shadow-lg)]"
        >
          {content}
        </div>
      )}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Code strings                                                       */
/* ------------------------------------------------------------------ */

const positionsCode = `import { Popover } from "@trinkui/react";

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-4 p-8">
      <Popover position="top" trigger={<button>Top</button>} content={<p>Popover on top</p>} />
      <Popover position="bottom" trigger={<button>Bottom</button>} content={<p>Popover on bottom</p>} />
      <Popover position="left" trigger={<button>Left</button>} content={<p>Popover on left</p>} />
      <Popover position="right" trigger={<button>Right</button>} content={<p>Popover on right</p>} />
    </div>
  );
}`;

const hoverCode = `import { Popover } from "@trinkui/react";

export default function Example() {
  return (
    <div className="p-8">
      <Popover
        triggerOn="hover"
        trigger={<button>Hover me</button>}
        content={<p>This popover opens on hover.</p>}
      />
    </div>
  );
}`;

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

const props = [
  { name: "trigger", type: "ReactNode", required: true, description: "Element that triggers the popover" },
  { name: "content", type: "ReactNode", required: true, description: "Content rendered inside the floating panel" },
  { name: "position", type: '"top" | "bottom" | "left" | "right"', default: '"bottom"', description: "Preferred position relative to the trigger" },
  { name: "triggerOn", type: '"click" | "hover"', default: '"click"', description: "Interaction mode that opens the popover" },
  { name: "className", type: "string", description: "Additional CSS classes for the panel" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function PopoverPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Popover</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Floating content panel anchored to a trigger element. Supports four positions and both click and hover trigger modes.
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
          <code>{`import { Popover } from "@trinkui/react";`}</code>
        </pre>
      </div>

      {/* Positions */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Positions</h2>
        <ComponentPreview code={positionsCode}>
          <div className="flex flex-wrap items-center justify-center gap-6 p-12">
            <DemoPopover label="Top" position="top" content={<p>Popover on top</p>} />
            <DemoPopover label="Bottom" position="bottom" content={<p>Popover on bottom</p>} />
            <DemoPopover label="Left" position="left" content={<p>Popover on left</p>} />
            <DemoPopover label="Right" position="right" content={<p>Popover on right</p>} />
          </div>
        </ComponentPreview>
      </div>

      {/* Hover trigger */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Hover Trigger</h2>
        <ComponentPreview code={hoverCode}>
          <div className="flex items-center justify-center p-12">
            <DemoHoverPopover label="Hover me" content={<p>This popover opens on hover.</p>} />
          </div>
        </ComponentPreview>
      </div>

      {/* Props */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Props</h2>
        <PropsTable props={props} />
      </div>

      {/* Accessibility */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[rgb(var(--trinkui-muted))]">
          <li>Trigger has <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-expanded</code> and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-haspopup=&quot;dialog&quot;</code>.</li>
          <li>Panel uses <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;dialog&quot;</code>.</li>
          <li>Pressing <kbd className="rounded border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-1.5 py-0.5 text-xs font-medium">Escape</kbd> closes the popover and returns focus to the trigger.</li>
          <li>Clicking outside the panel dismisses it.</li>
        </ul>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between border-t border-[rgb(var(--trinkui-border)/0.4)] pt-6">
        <Link
          href="/components/pagination"
          className="text-sm font-medium text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-primary))]"
        >
          &larr; Pagination
        </Link>
        <Link
          href="/components/progress"
          className="text-sm font-medium text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-primary))]"
        >
          Progress &rarr;
        </Link>
      </div>
    </div>
  );
}
