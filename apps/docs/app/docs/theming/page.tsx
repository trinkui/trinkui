import Link from "next/link";

function CodeBox({ title, code }: { title?: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[rgb(var(--trinkui-border))]">
      {title && (
        <div className="border-b border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-4 py-2">
          <span className="text-xs font-medium text-[rgb(var(--trinkui-muted))]">
            {title}
          </span>
        </div>
      )}
      <pre className="overflow-x-auto bg-[#0a0a0f] px-4 py-3 text-sm leading-relaxed text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}

function ColorSwatch({
  name,
  variable,
  light,
  dark,
}: {
  name: string;
  variable: string;
  light: string;
  dark: string;
}) {
  return (
    <div className="flex items-center gap-4 rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-3">
      <div
        className="h-10 w-10 shrink-0 rounded-lg border border-[rgb(var(--trinkui-border))]"
        style={{ backgroundColor: `rgb(var(${variable}))` }}
      />
      <div className="min-w-0 flex-1">
        <p className="text-sm font-medium text-[rgb(var(--trinkui-fg))]">
          {name}
        </p>
        <p className="mt-0.5 font-mono text-xs text-[rgb(var(--trinkui-muted))]">
          {variable}
        </p>
      </div>
      <div className="hidden text-right sm:block">
        <p className="font-mono text-xs text-[rgb(var(--trinkui-muted))]">
          L: {light}
        </p>
        <p className="font-mono text-xs text-[rgb(var(--trinkui-muted))]">
          D: {dark}
        </p>
      </div>
    </div>
  );
}

export default function ThemingPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
          Getting Started
        </p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
          Theming
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          trink-ui uses CSS custom properties for all colors, spacing, and
          typography. Override any variable to match your brand.
        </p>
      </div>

      {/* How it works */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          How it works
        </h2>
        <p className="text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Every trink-ui component references CSS variables like{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            rgb(var(--trinkui-primary))
          </code>{" "}
          instead of hardcoded colors. You define these variables in your global
          CSS, and all components automatically pick them up. The values use the
          RGB channel format (e.g.{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            99 102 241
          </code>
          ) so they work with Tailwind&apos;s opacity utilities.
        </p>
      </div>

      {/* Color palette */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Color Variables
        </h2>
        <div className="space-y-2">
          <ColorSwatch
            name="Background"
            variable="--trinkui-bg"
            light="255 255 255"
            dark="9 9 11"

          />
          <ColorSwatch
            name="Foreground"
            variable="--trinkui-fg"
            light="10 10 10"
            dark="250 250 250"

          />
          <ColorSwatch
            name="Primary"
            variable="--trinkui-primary"
            light="99 102 241"
            dark="129 140 248"

          />
          <ColorSwatch
            name="Primary Foreground"
            variable="--trinkui-primary-fg"
            light="255 255 255"
            dark="255 255 255"

          />
          <ColorSwatch
            name="Secondary"
            variable="--trinkui-secondary"
            light="241 245 249"
            dark="24 24 27"

          />
          <ColorSwatch
            name="Accent"
            variable="--trinkui-accent"
            light="249 115 22"
            dark="251 146 60"

          />
          <ColorSwatch
            name="Muted"
            variable="--trinkui-muted"
            light="100 116 139"
            dark="113 113 122"

          />
          <ColorSwatch
            name="Border"
            variable="--trinkui-border"
            light="226 232 240"
            dark="39 39 42"

          />
          <ColorSwatch
            name="Surface"
            variable="--trinkui-surface"
            light="248 250 252"
            dark="18 18 21"

          />
        </div>
      </div>

      {/* Custom brand example */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Custom Brand Colors
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Override the primary color to match your brand. All components will
          automatically update:
        </p>
        <CodeBox
          title="globals.css — Custom teal brand"
          code={`:root {
  /* Override just the primary color */
  --trinkui-primary: 20 184 166;    /* teal-500 */
  --trinkui-primary-fg: 255 255 255;
}

.dark {
  --trinkui-primary: 45 212 191;    /* teal-400 */
}`}
        />
      </div>

      {/* Typography */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Typography
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Customize heading, body, and monospace fonts:
        </p>
        <CodeBox
          code={`:root {
  --trinkui-font-heading: "Cal Sans", "Inter", sans-serif;
  --trinkui-font-body: "Inter", sans-serif;
  --trinkui-font-mono: "JetBrains Mono", monospace;
}`}
        />
      </div>

      {/* Border radius */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Border Radius
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Control the roundness of all components:
        </p>
        <div className="grid gap-3 sm:grid-cols-2">
          {[
            { name: "--trinkui-radius-sm", value: "0.375rem", visual: "6px" },
            { name: "--trinkui-radius-md", value: "0.75rem", visual: "12px" },
            { name: "--trinkui-radius-lg", value: "1rem", visual: "16px" },
            { name: "--trinkui-radius-xl", value: "1.5rem", visual: "24px" },
            { name: "--trinkui-radius-full", value: "9999px", visual: "pill" },
          ].map((r) => (
            <div
              key={r.name}
              className="flex items-center gap-3 rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] px-4 py-3"
            >
              <div
                className="h-8 w-8 shrink-0 border border-[rgb(var(--trinkui-primary))] bg-[rgb(var(--trinkui-primary)/0.1)]"
                style={{ borderRadius: r.value }}
              />
              <div>
                <p className="font-mono text-xs text-[rgb(var(--trinkui-fg))]">
                  {r.name}
                </p>
                <p className="font-mono text-xs text-[rgb(var(--trinkui-muted))]">
                  {r.visual}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Shadows */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Shadows
        </h2>
        <CodeBox
          code={`:root {
  --trinkui-shadow-sm: 0 1px 2px rgba(0, 0, 0, 0.05);
  --trinkui-shadow-md: 0 4px 6px rgba(0, 0, 0, 0.07);
  --trinkui-shadow-lg: 0 10px 25px rgba(0, 0, 0, 0.1);
}`}
        />
      </div>

      {/* Per-section theming */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Per-Section Theming
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Every section component accepts a{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            theme
          </code>{" "}
          prop to switch between light and dark within the same page:
        </p>
        <CodeBox
          title="Mixed theme page"
          code={`<HeroCentered theme="dark" title="Dark hero" ... />
<FeaturesGrid theme="light" title="Light features" ... />
<CTACentered theme="dark" title="Dark CTA" ... />`}
        />
      </div>

      {/* Next step */}
      <div className="rounded-xl border border-[rgb(var(--trinkui-primary)/0.3)] bg-[rgb(var(--trinkui-primary)/0.05)] p-6">
        <p className="font-medium text-[rgb(var(--trinkui-fg))]">
          Start building
        </p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          Theme is set up? Browse all available components.
        </p>
        <Link
          href="/components"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
        >
          Browse Components
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
