"use client";

import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Inline Demo: Listbox                                               */
/* ------------------------------------------------------------------ */

interface ListboxItem {
  key: string;
  label: string;
  description?: string;
  icon?: React.ReactNode;
}

function DemoListbox({
  items,
  selectedKeys,
  onSelectionChange,
  selectionMode = "single",
  variant = "default",
  label,
}: {
  items: ListboxItem[];
  selectedKeys: Set<string>;
  onSelectionChange: (keys: Set<string>) => void;
  selectionMode?: "single" | "multiple";
  variant?: "default" | "bordered";
  label?: string;
}) {
  function handleItemClick(key: string) {
    if (selectionMode === "single") {
      onSelectionChange(new Set([key]));
    } else {
      const next = new Set(selectedKeys);
      if (next.has(key)) {
        next.delete(key);
      } else {
        next.add(key);
      }
      onSelectionChange(next);
    }
  }

  return (
    <div className="w-full max-w-xs">
      {label && (
        <p className="mb-1.5 text-sm font-medium text-[rgb(var(--trinkui-fg))]">{label}</p>
      )}
      <ul
        role="listbox"
        aria-label={label || "Listbox"}
        aria-multiselectable={selectionMode === "multiple"}
        className={`rounded-[var(--trinkui-radius-lg)] bg-[rgb(var(--trinkui-bg))] py-1 ${
          variant === "bordered"
            ? "border border-[rgb(var(--trinkui-border))]"
            : "shadow-[var(--trinkui-shadow-md)]"
        }`}
      >
        {items.map((item) => {
          const isSelected = selectedKeys.has(item.key);
          return (
            <li
              key={item.key}
              role="option"
              aria-selected={isSelected}
              tabIndex={0}
              onClick={() => handleItemClick(item.key)}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.preventDefault();
                  handleItemClick(item.key);
                }
              }}
              className={`mx-1 flex cursor-pointer items-center gap-3 rounded-[var(--trinkui-radius-md)] px-3 py-2 text-sm outline-none transition-colors focus-visible:ring-2 focus-visible:ring-[rgb(var(--trinkui-primary)/0.5)] ${
                isSelected
                  ? "bg-[rgb(var(--trinkui-primary)/0.12)] text-[rgb(var(--trinkui-primary))]"
                  : "text-[rgb(var(--trinkui-fg))] hover:bg-[rgb(var(--trinkui-secondary))]"
              }`}
            >
              {/* Checkbox indicator for multi-select */}
              {selectionMode === "multiple" && (
                <span
                  className={`flex h-4 w-4 shrink-0 items-center justify-center rounded border transition-colors ${
                    isSelected
                      ? "border-[rgb(var(--trinkui-primary))] bg-[rgb(var(--trinkui-primary))]"
                      : "border-[rgb(var(--trinkui-border))]"
                  }`}
                >
                  {isSelected && (
                    <svg className="h-3 w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                    </svg>
                  )}
                </span>
              )}
              {/* Icon */}
              {item.icon && <span className="shrink-0">{item.icon}</span>}
              {/* Content */}
              <div className="min-w-0 flex-1">
                <p className={`font-medium ${isSelected && selectionMode === "single" ? "text-[rgb(var(--trinkui-primary))]" : ""}`}>
                  {item.label}
                </p>
                {item.description && (
                  <p className="mt-0.5 text-xs text-[rgb(var(--trinkui-muted))]">{item.description}</p>
                )}
              </div>
              {/* Selected indicator for single */}
              {selectionMode === "single" && isSelected && (
                <svg className="h-4 w-4 shrink-0 text-[rgb(var(--trinkui-primary))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  SVG icon helpers                                                    */
/* ------------------------------------------------------------------ */

function FileIcon() {
  return (
    <svg className="h-4 w-4 text-[rgb(var(--trinkui-muted))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
    </svg>
  );
}

function FolderIcon() {
  return (
    <svg className="h-4 w-4 text-[rgb(var(--trinkui-muted))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
    </svg>
  );
}

function ImageIcon() {
  return (
    <svg className="h-4 w-4 text-[rgb(var(--trinkui-muted))]" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3H3.75A2.25 2.25 0 001.5 5.25v13.5A2.25 2.25 0 003.75 21z" />
    </svg>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const simpleItems: ListboxItem[] = [
  { key: "react", label: "React" },
  { key: "vue", label: "Vue" },
  { key: "angular", label: "Angular" },
  { key: "svelte", label: "Svelte" },
  { key: "solid", label: "Solid" },
];

const richItems: ListboxItem[] = [
  { key: "docs", label: "Documents", description: "Word, PDF, and text files", icon: <FileIcon /> },
  { key: "projects", label: "Projects", description: "Source code and repos", icon: <FolderIcon /> },
  { key: "media", label: "Media", description: "Images, videos, and audio", icon: <ImageIcon /> },
  { key: "archive", label: "Archive", description: "Compressed and backup files", icon: <FolderIcon /> },
];

export default function ListboxPage() {
  const [singleSelected, setSingleSelected] = useState<Set<string>>(new Set(["react"]));
  const [multiSelected, setMultiSelected] = useState<Set<string>>(new Set(["docs", "media"]));
  const [richSelected, setRichSelected] = useState<Set<string>>(new Set(["projects"]));
  const [borderedSelected, setBorderedSelected] = useState<Set<string>>(new Set());

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Components</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Listbox</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          A selectable list of options with support for single or multiple selection. Items can include icons and descriptions.
        </p>
      </div>

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
          <code>{`import { Listbox } from "@trinkui/react";`}</code>
        </pre>
      </section>

      {/* Single Selection */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Single Selection</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Click an item to select it. Only one item can be active at a time.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <DemoListbox
              items={simpleItems}
              selectedKeys={singleSelected}
              onSelectionChange={setSingleSelected}
              selectionMode="single"
              label="Framework"
            />
            <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
              Selected: <span className="font-medium text-[rgb(var(--trinkui-fg))]">{Array.from(singleSelected).join(", ") || "none"}</span>
            </p>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`const [selected, setSelected] = useState(new Set(["react"]));

<Listbox
  items={[
    { key: "react", label: "React" },
    { key: "vue", label: "Vue" },
    { key: "angular", label: "Angular" },
    { key: "svelte", label: "Svelte" },
    { key: "solid", label: "Solid" },
  ]}
  selectedKeys={selected}
  onSelectionChange={setSelected}
  selectionMode="single"
/>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Multiple Selection */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Multiple Selection</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Click items to toggle them. Multiple items can be selected simultaneously.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <DemoListbox
              items={simpleItems}
              selectedKeys={multiSelected}
              onSelectionChange={setMultiSelected}
              selectionMode="multiple"
              label="Frameworks (multi-select)"
            />
            <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
              Selected: <span className="font-medium text-[rgb(var(--trinkui-fg))]">{Array.from(multiSelected).join(", ") || "none"}</span>
            </p>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<Listbox
  items={items}
  selectedKeys={selected}
  onSelectionChange={setSelected}
  selectionMode="multiple"
/>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* With Icons and Descriptions */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">With Icons and Descriptions</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Items can include an icon and description text for richer content.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <DemoListbox
              items={richItems}
              selectedKeys={richSelected}
              onSelectionChange={setRichSelected}
              selectionMode="single"
              label="File browser"
            />
            <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
              Selected: <span className="font-medium text-[rgb(var(--trinkui-fg))]">{Array.from(richSelected).join(", ") || "none"}</span>
            </p>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<Listbox
  items={[
    { key: "docs", label: "Documents", description: "Word, PDF, and text files", icon: <FileIcon /> },
    { key: "projects", label: "Projects", description: "Source code and repos", icon: <FolderIcon /> },
    { key: "media", label: "Media", description: "Images, videos, and audio", icon: <ImageIcon /> },
  ]}
  selectedKeys={selected}
  onSelectionChange={setSelected}
/>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Bordered Variant */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Bordered Variant</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Use <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">variant=&quot;bordered&quot;</code> for a bordered container instead of a shadow.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <DemoListbox
              items={simpleItems}
              selectedKeys={borderedSelected}
              onSelectionChange={setBorderedSelected}
              selectionMode="single"
              variant="bordered"
              label="Pick a framework"
            />
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<Listbox
  variant="bordered"
  items={items}
  selectedKeys={selected}
  onSelectionChange={setSelected}
/>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Props */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Props</h2>
        <div className="overflow-x-auto rounded-lg border border-[rgb(var(--trinkui-border))]">
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
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">items</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">ListboxItem[]</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Array of items with key, label, optional description and icon</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">selectedKeys</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`Set<string>`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Set of currently selected item keys</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">onSelectionChange</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`(keys: Set<string>) => void`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Callback when the selection changes</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">selectionMode</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"single" | "multiple"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"single"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Whether to allow one or many selected items</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">variant</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"default" | "bordered"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"default"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Visual variant: shadow (default) or bordered</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[rgb(var(--trinkui-muted))]">
          <li>Uses <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;listbox&quot;</code> on the container with <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;option&quot;</code> on each item.</li>
          <li>Multi-select listboxes have <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-multiselectable=&quot;true&quot;</code>.</li>
          <li>Each option uses <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-selected</code> to communicate state.</li>
          <li>Items are focusable and support Enter and Space key to toggle selection.</li>
          <li>Focus ring is visible when navigating with keyboard.</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <a href="/components/link" className="text-sm text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors">
          &larr; Link
        </a>
        <a href="/components/modal" className="text-sm text-[rgb(var(--trinkui-primary))] hover:underline">
          Modal &rarr;
        </a>
      </div>
    </div>
  );
}
