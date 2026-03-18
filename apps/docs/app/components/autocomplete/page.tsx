"use client";

import { useState, useRef, useEffect } from "react";

/* ------------------------------------------------------------------ */
/*  Inline Demo: Autocomplete                                         */
/* ------------------------------------------------------------------ */

interface AutocompleteOption {
  value: string;
  label: string;
}

function DemoAutocomplete({
  options,
  placeholder = "Search...",
  label,
  error,
  disabled = false,
  size = "md",
  value: controlledValue,
  onChange,
  onInputChange,
}: {
  options: AutocompleteOption[];
  placeholder?: string;
  label?: string;
  error?: string;
  disabled?: boolean;
  size?: "sm" | "md" | "lg";
  value?: string;
  onChange?: (value: string) => void;
  onInputChange?: (input: string) => void;
}) {
  const [inputValue, setInputValue] = useState(controlledValue ?? "");
  const [isOpen, setIsOpen] = useState(false);
  const [highlightedIndex, setHighlightedIndex] = useState(-1);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const filtered = options.filter((o) =>
    o.label.toLowerCase().includes(inputValue.toLowerCase())
  );

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const sizeClasses = {
    sm: "px-2.5 py-1.5 text-xs",
    md: "px-3 py-2 text-sm",
    lg: "px-3.5 py-2.5 text-base",
  };

  function handleSelect(option: AutocompleteOption) {
    setInputValue(option.label);
    onChange?.(option.value);
    setIsOpen(false);
    setHighlightedIndex(-1);
  }

  function handleKeyDown(e: React.KeyboardEvent) {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setIsOpen(true);
      setHighlightedIndex((i) => Math.min(i + 1, filtered.length - 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHighlightedIndex((i) => Math.max(i - 1, 0));
    } else if (e.key === "Enter" && highlightedIndex >= 0 && filtered[highlightedIndex]) {
      e.preventDefault();
      handleSelect(filtered[highlightedIndex]);
    } else if (e.key === "Escape") {
      setIsOpen(false);
    }
  }

  return (
    <div ref={wrapperRef} className="relative w-full max-w-xs">
      {label && (
        <label className="mb-1.5 block text-sm font-medium text-[rgb(var(--trinkui-fg))]">
          {label}
        </label>
      )}
      <input
        type="text"
        value={inputValue}
        disabled={disabled}
        placeholder={placeholder}
        className={`w-full rounded-[var(--trinkui-radius-md)] border ${
          error
            ? "border-red-500 focus:ring-red-500/30"
            : "border-[rgb(var(--trinkui-border))] focus:border-[rgb(var(--trinkui-primary))] focus:ring-[rgb(var(--trinkui-primary)/0.3)]"
        } bg-[rgb(var(--trinkui-bg))] ${sizeClasses[size]} text-[rgb(var(--trinkui-fg))] outline-none transition-colors focus:ring-2 disabled:cursor-not-allowed disabled:opacity-50`}
        onChange={(e) => {
          setInputValue(e.target.value);
          onInputChange?.(e.target.value);
          setIsOpen(true);
          setHighlightedIndex(-1);
        }}
        onFocus={() => !disabled && setIsOpen(true)}
        onKeyDown={handleKeyDown}
        role="combobox"
        aria-expanded={isOpen}
        aria-autocomplete="list"
        aria-haspopup="listbox"
      />
      {isOpen && filtered.length > 0 && !disabled && (
        <ul
          role="listbox"
          className="absolute z-50 mt-1 w-full overflow-auto rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] py-1 shadow-lg"
          style={{ maxHeight: 200 }}
        >
          {filtered.map((option, idx) => (
            <li
              key={option.value}
              role="option"
              aria-selected={highlightedIndex === idx}
              className={`cursor-pointer px-3 py-2 text-sm transition-colors ${
                highlightedIndex === idx
                  ? "bg-[rgb(var(--trinkui-primary)/0.15)] text-[rgb(var(--trinkui-primary))]"
                  : "text-[rgb(var(--trinkui-fg))] hover:bg-[rgb(var(--trinkui-primary)/0.08)]"
              }`}
              onMouseEnter={() => setHighlightedIndex(idx)}
              onMouseDown={() => handleSelect(option)}
            >
              {option.label}
            </li>
          ))}
        </ul>
      )}
      {isOpen && filtered.length === 0 && inputValue.length > 0 && !disabled && (
        <div className="absolute z-50 mt-1 w-full rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-3 py-4 text-center text-sm text-[rgb(var(--trinkui-muted))]">
          No results found.
        </div>
      )}
      {error && <p className="mt-1.5 text-xs text-red-500">{error}</p>}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

const fruits: AutocompleteOption[] = [
  { value: "apple", label: "Apple" },
  { value: "banana", label: "Banana" },
  { value: "cherry", label: "Cherry" },
  { value: "grape", label: "Grape" },
  { value: "lemon", label: "Lemon" },
  { value: "mango", label: "Mango" },
  { value: "orange", label: "Orange" },
  { value: "peach", label: "Peach" },
  { value: "pineapple", label: "Pineapple" },
  { value: "strawberry", label: "Strawberry" },
];

export default function AutocompletePage() {
  const [selected, setSelected] = useState("");
  const [labelSelected, setLabelSelected] = useState("");

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Components</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Autocomplete</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          A text input that filters a list of options as the user types. Supports keyboard navigation, labels, error states, sizes, and disabled mode.
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
          <code>{`import { Autocomplete } from "@trinkui/react";`}</code>
        </pre>
      </section>

      {/* Usage — Basic */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Start typing to filter the list. Use arrow keys to navigate and Enter to select.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <DemoAutocomplete
              options={fruits}
              placeholder="Search fruits..."
              onChange={(v) => setSelected(v)}
            />
            {selected && (
              <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
                Selected: <span className="font-medium text-[rgb(var(--trinkui-fg))]">{selected}</span>
              </p>
            )}
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<Autocomplete
  options={[
    { value: "apple", label: "Apple" },
    { value: "banana", label: "Banana" },
    { value: "cherry", label: "Cherry" },
    // ...more
  ]}
  placeholder="Search fruits..."
  onChange={(value) => setSelected(value)}
/>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* With Label and Placeholder */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">With Label</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Add a label above the input for form contexts.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <DemoAutocomplete
              options={fruits}
              label="Favorite fruit"
              placeholder="Type to search..."
              onChange={(v) => setLabelSelected(v)}
            />
            {labelSelected && (
              <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
                Selected: <span className="font-medium text-[rgb(var(--trinkui-fg))]">{labelSelected}</span>
              </p>
            )}
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<Autocomplete
  label="Favorite fruit"
  placeholder="Type to search..."
  options={fruits}
  onChange={(value) => console.log(value)}
/>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Disabled */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Disabled</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          The input cannot be interacted with when disabled.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <DemoAutocomplete
              options={fruits}
              label="Fruit (disabled)"
              placeholder="Cannot type here"
              disabled
            />
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<Autocomplete
  label="Fruit (disabled)"
  placeholder="Cannot type here"
  options={fruits}
  disabled
/>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sizes</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Available in three sizes: <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">sm</code>, <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">md</code>, and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">lg</code>.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex flex-col gap-4 p-8">
            <DemoAutocomplete options={fruits} placeholder="Small" size="sm" />
            <DemoAutocomplete options={fruits} placeholder="Medium (default)" size="md" />
            <DemoAutocomplete options={fruits} placeholder="Large" size="lg" />
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<Autocomplete size="sm" options={fruits} placeholder="Small" />
<Autocomplete size="md" options={fruits} placeholder="Medium" />
<Autocomplete size="lg" options={fruits} placeholder="Large" />`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Error State */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Error State</h2>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <DemoAutocomplete
              options={fruits}
              label="Required field"
              placeholder="Select a fruit"
              error="Please select a fruit."
            />
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<Autocomplete
  label="Required field"
  placeholder="Select a fruit"
  error="Please select a fruit."
  options={fruits}
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
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">options</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`{ value: string; label: string }[]`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Array of selectable options</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">value</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Controlled selected value</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">onChange</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">(value: string) =&gt; void</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Callback when an option is selected</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">onInputChange</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">(input: string) =&gt; void</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Callback when the input text changes</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">placeholder</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Placeholder text in the input</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">label</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Label text displayed above the input</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">error</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Error message; applies error styling when set</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">disabled</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Disable the input</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">size</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"sm" | "md" | "lg"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"md"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Size of the input</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[rgb(var(--trinkui-muted))]">
          <li>Uses <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;combobox&quot;</code> on the input with <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-expanded</code> and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-autocomplete=&quot;list&quot;</code>.</li>
          <li>The dropdown uses <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;listbox&quot;</code> with <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;option&quot;</code> items and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-selected</code>.</li>
          <li>Arrow keys navigate options, Enter selects, Escape closes the dropdown.</li>
          <li>Focus ring is visible when navigating with keyboard.</li>
          <li>Label is associated with the input for screen reader announcement.</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <a href="/components/alert" className="text-sm text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors">
          &larr; Alert
        </a>
        <a href="/components/avatar" className="text-sm text-[rgb(var(--trinkui-primary))] hover:underline">
          Avatar &rarr;
        </a>
      </div>
    </div>
  );
}
