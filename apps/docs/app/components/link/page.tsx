"use client";

import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Inline Demo: Link                                                  */
/* ------------------------------------------------------------------ */

function DemoLink({
  children,
  href = "#",
  color = "primary",
  size = "md",
  underline = "none",
  isExternal = false,
  showAnchorIcon = false,
  onClick,
}: {
  children: React.ReactNode;
  href?: string;
  color?: "primary" | "secondary" | "foreground";
  size?: "sm" | "md" | "lg";
  underline?: "none" | "hover" | "always";
  isExternal?: boolean;
  showAnchorIcon?: boolean;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const colorMap: Record<string, string> = {
    primary: "text-[rgb(var(--trinkui-primary))]",
    secondary: "text-[rgb(var(--trinkui-muted))]",
    foreground: "text-[rgb(var(--trinkui-fg))]",
  };

  const sizeMap: Record<string, string> = {
    sm: "text-xs",
    md: "text-sm",
    lg: "text-base",
  };

  const underlineMap: Record<string, string> = {
    none: "no-underline",
    hover: "no-underline hover:underline",
    always: "underline underline-offset-2",
  };

  return (
    <a
      href={href}
      target={isExternal ? "_blank" : undefined}
      rel={isExternal ? "noopener noreferrer" : undefined}
      onClick={(e) => {
        e.preventDefault();
        onClick?.(e);
      }}
      className={`inline-flex items-center gap-1 font-medium transition-colors hover:opacity-80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--trinkui-primary)/0.5)] rounded-sm ${colorMap[color]} ${sizeMap[size]} ${underlineMap[underline]}`}
    >
      {children}
      {showAnchorIcon && (
        <svg
          className="h-3.5 w-3.5 shrink-0"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={2}
        >
          <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
        </svg>
      )}
    </a>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function LinkPage() {
  const [activeColor, setActiveColor] = useState<"primary" | "secondary" | "foreground">("primary");
  const [activeUnderline, setActiveUnderline] = useState<"none" | "hover" | "always">("none");
  const [activeSize, setActiveSize] = useState<"sm" | "md" | "lg">("md");
  const [clickCount, setClickCount] = useState(0);

  const colorsArr = ["primary", "secondary", "foreground"] as const;
  const underlinesArr = ["none", "hover", "always"] as const;
  const sizesArr = ["sm", "md", "lg"] as const;

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Components</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Link</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          A styled anchor element for navigation. Supports multiple colors, underline modes, sizes, and an external link indicator with an arrow icon.
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
          <code>{`import { Link } from "@trinkui/react";`}</code>
        </pre>
      </section>

      {/* Basic Usage */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          A basic link with primary color. Click the link to see the counter increment.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <p className="text-sm text-[rgb(var(--trinkui-fg))]">
              Read the{" "}
              <DemoLink onClick={() => setClickCount((c) => c + 1)}>documentation</DemoLink>{" "}
              to learn more about TrinkUI components.
            </p>
            {clickCount > 0 && (
              <p className="mt-2 text-xs text-[rgb(var(--trinkui-muted))]">
                Link clicked {clickCount} time{clickCount !== 1 ? "s" : ""}.
              </p>
            )}
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<p>
  Read the <Link href="/docs">documentation</Link> to learn more.
</p>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Colors — Interactive */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Colors</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Toggle between color variants to see how the link appearance changes.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <div className="mb-6 flex gap-2">
              {colorsArr.map((c) => (
                <button
                  key={c}
                  onClick={() => setActiveColor(c)}
                  className={`rounded-[var(--trinkui-radius-md)] border px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeColor === c
                      ? "border-[rgb(var(--trinkui-primary))] bg-[rgb(var(--trinkui-primary)/0.1)] text-[rgb(var(--trinkui-primary))]"
                      : "border-[rgb(var(--trinkui-border))] text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))]"
                  }`}
                >
                  {c}
                </button>
              ))}
            </div>
            <div className="flex items-center gap-6">
              <DemoLink color={activeColor}>Visit our website</DemoLink>
              <DemoLink color={activeColor}>Contact support</DemoLink>
              <DemoLink color={activeColor}>View pricing</DemoLink>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<Link color="primary" href="/website">Visit our website</Link>
<Link color="secondary" href="/support">Contact support</Link>
<Link color="foreground" href="/pricing">View pricing</Link>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Underline Modes — Interactive */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Underline Modes</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Control the underline behavior: never, on hover, or always visible.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <div className="mb-6 flex gap-2">
              {underlinesArr.map((u) => (
                <button
                  key={u}
                  onClick={() => setActiveUnderline(u)}
                  className={`rounded-[var(--trinkui-radius-md)] border px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeUnderline === u
                      ? "border-[rgb(var(--trinkui-primary))] bg-[rgb(var(--trinkui-primary)/0.1)] text-[rgb(var(--trinkui-primary))]"
                      : "border-[rgb(var(--trinkui-border))] text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))]"
                  }`}
                >
                  {u}
                </button>
              ))}
            </div>
            <p className="text-sm text-[rgb(var(--trinkui-fg))]">
              Check our{" "}
              <DemoLink underline={activeUnderline}>terms of service</DemoLink>
              {" "}and{" "}
              <DemoLink underline={activeUnderline}>privacy policy</DemoLink>
              {" "}before proceeding.
            </p>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<Link underline="none">No underline</Link>
<Link underline="hover">Underline on hover</Link>
<Link underline="always">Always underlined</Link>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* External Link */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">External Link</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Set <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">isExternal</code> and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">showAnchorIcon</code> to indicate links that open in a new tab.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <div className="flex flex-col gap-3">
              <DemoLink isExternal showAnchorIcon href="https://github.com">
                GitHub
              </DemoLink>
              <DemoLink isExternal showAnchorIcon href="https://react.dev" color="secondary">
                React Documentation
              </DemoLink>
              <DemoLink isExternal showAnchorIcon href="https://tailwindcss.com" color="foreground" underline="always">
                Tailwind CSS
              </DemoLink>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<Link href="https://github.com" isExternal showAnchorIcon>
  GitHub
</Link>
<Link href="https://react.dev" isExternal showAnchorIcon color="secondary">
  React Documentation
</Link>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Sizes — Interactive */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sizes</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Available in three sizes.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <div className="mb-6 flex gap-2">
              {sizesArr.map((s) => (
                <button
                  key={s}
                  onClick={() => setActiveSize(s)}
                  className={`rounded-[var(--trinkui-radius-md)] border px-3 py-1.5 text-xs font-medium transition-colors ${
                    activeSize === s
                      ? "border-[rgb(var(--trinkui-primary))] bg-[rgb(var(--trinkui-primary)/0.1)] text-[rgb(var(--trinkui-primary))]"
                      : "border-[rgb(var(--trinkui-border))] text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))]"
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>
            <div className="flex items-baseline gap-4">
              <DemoLink size={activeSize}>Small link</DemoLink>
              <DemoLink size={activeSize} isExternal showAnchorIcon>
                External link
              </DemoLink>
              <DemoLink size={activeSize} underline="always">
                Underlined link
              </DemoLink>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<Link size="sm">Small link</Link>
<Link size="md">Medium link</Link>
<Link size="lg">Large link</Link>`}</code>
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
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">href</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">URL to navigate to</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">color</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"primary" | "secondary" | "foreground"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"primary"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Color of the link text</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">size</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"sm" | "md" | "lg"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"md"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Size of the link text</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">underline</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"none" | "hover" | "always"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"none"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">When to show the underline</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">isExternal</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Opens link in a new tab with noopener noreferrer</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">showAnchorIcon</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Show an external link arrow icon after the text</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[rgb(var(--trinkui-muted))]">
          <li>Uses the semantic <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">&lt;a&gt;</code> element for proper keyboard and screen reader support.</li>
          <li>External links include <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">rel=&quot;noopener noreferrer&quot;</code> for security and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">target=&quot;_blank&quot;</code>.</li>
          <li>Focus ring is visible when navigating with keyboard via <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">focus-visible:ring-2</code>.</li>
          <li>The anchor icon provides a visual cue that the link opens in a new window.</li>
          <li>Underline modes ensure links are identifiable even without color perception.</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <a href="/components/kbd" className="text-sm text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors">
          &larr; Kbd
        </a>
        <a href="/components/listbox" className="text-sm text-[rgb(var(--trinkui-primary))] hover:underline">
          Listbox &rarr;
        </a>
      </div>
    </div>
  );
}
