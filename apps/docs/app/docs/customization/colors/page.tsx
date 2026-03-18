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
  usage,
}: {
  name: string;
  variable: string;
  light: string;
  dark: string;
  usage: string;
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
        <p className="mt-1 text-xs text-[rgb(var(--trinkui-muted))]">
          {usage}
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

export default function ColorsPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
          Customization
        </p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
          Colors
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          A complete reference of all color variables, their light and dark
          values, and how to use them in your custom components.
        </p>
      </div>

      {/* All Color Variables */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          All Color Variables
        </h2>
        <div className="space-y-2">
          <ColorSwatch
            name="Background"
            variable="--trinkui-bg"
            light="255 255 255"
            dark="9 9 11"
            usage="Page and section backgrounds"
          />
          <ColorSwatch
            name="Foreground"
            variable="--trinkui-fg"
            light="10 10 10"
            dark="250 250 250"
            usage="Primary text, headings"
          />
          <ColorSwatch
            name="Primary"
            variable="--trinkui-primary"
            light="99 102 241"
            dark="129 140 248"
            usage="Brand color, buttons, links, focus rings"
          />
          <ColorSwatch
            name="Primary Foreground"
            variable="--trinkui-primary-fg"
            light="255 255 255"
            dark="255 255 255"
            usage="Text on primary-colored backgrounds"
          />
          <ColorSwatch
            name="Secondary"
            variable="--trinkui-secondary"
            light="241 245 249"
            dark="24 24 27"
            usage="Secondary backgrounds, hover states"
          />
          <ColorSwatch
            name="Secondary Foreground"
            variable="--trinkui-secondary-fg"
            light="15 23 42"
            dark="228 228 231"
            usage="Text on secondary backgrounds"
          />
          <ColorSwatch
            name="Accent"
            variable="--trinkui-accent"
            light="249 115 22"
            dark="251 146 60"
            usage="Highlights, badges, attention-grabbing elements"
          />
          <ColorSwatch
            name="Muted"
            variable="--trinkui-muted"
            light="100 116 139"
            dark="113 113 122"
            usage="Secondary text, descriptions, placeholders"
          />
          <ColorSwatch
            name="Border"
            variable="--trinkui-border"
            light="226 232 240"
            dark="39 39 42"
            usage="Borders, dividers, separators"
          />
          <ColorSwatch
            name="Surface"
            variable="--trinkui-surface"
            light="248 250 252"
            dark="18 18 21"
            usage="Cards, elevated surfaces, sidebars"
          />
        </div>
      </div>

      {/* RGB Channel Format */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          RGB Channel Format
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Color values are defined as space-separated RGB channels (e.g.{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            99 102 241
          </code>
          ) rather than{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            rgb(99, 102, 241)
          </code>
          . This format enables opacity modifiers in Tailwind:
        </p>
        <CodeBox
          title="Using colors with opacity"
          code={`/* Full opacity */
className="bg-[rgb(var(--trinkui-primary))]"

/* With opacity (50%) */
className="bg-[rgb(var(--trinkui-primary)/0.5)]"

/* Border with 30% opacity */
className="border-[rgb(var(--trinkui-border)/0.3)]"

/* Text with muted opacity */
className="text-[rgb(var(--trinkui-muted)/0.8)]"`}
        />
      </div>

      {/* Semantic Color Mapping */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Semantic Color Mapping
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Colors are semantic, not literal. Instead of{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            --trinkui-indigo
          </code>
          , we use{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            --trinkui-primary
          </code>
          . This lets you swap your brand color without changing any component code:
        </p>
        <div className="space-y-3">
          {[
            {
              role: "Primary / Primary FG",
              description: "Your brand color. Used for buttons, links, active states, and focus rings. Primary FG is the text color on top of primary backgrounds.",
            },
            {
              role: "Secondary / Secondary FG",
              description: "Subtle backgrounds for secondary buttons and hover states. Less prominent than primary.",
            },
            {
              role: "Accent",
              description: "An attention color distinct from primary. Used for badges, highlights, and promotional elements.",
            },
            {
              role: "Muted",
              description: "Subdued text for descriptions, captions, and less important content.",
            },
            {
              role: "Surface",
              description: "Elevated backgrounds for cards, dropdowns, and sidebars. Slightly different from the page background.",
            },
          ].map((item) => (
            <div
              key={item.role}
              className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4"
            >
              <p className="text-sm font-medium text-[rgb(var(--trinkui-fg))]">
                {item.role}
              </p>
              <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Using Colors in Custom Components */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Using Colors in Custom Components
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          When building your own components alongside trink-ui, reference the same
          CSS variables to stay consistent:
        </p>
        <CodeBox
          title="Custom component using theme colors"
          code={`function CustomCard({ title, description }: { title: string; description: string }) {
  return (
    <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] p-6">
      <h3 className="text-lg font-semibold text-[rgb(var(--trinkui-fg))]">
        {title}
      </h3>
      <p className="mt-2 text-sm text-[rgb(var(--trinkui-muted))]">
        {description}
      </p>
      <button className="mt-4 rounded-lg bg-[rgb(var(--trinkui-primary))] px-4 py-2 text-sm font-medium text-[rgb(var(--trinkui-primary-fg))]">
        Learn more
      </button>
    </div>
  );
}`}
        />
      </div>

      {/* Next step */}
      <div className="rounded-xl border border-[rgb(var(--trinkui-primary)/0.3)] bg-[rgb(var(--trinkui-primary)/0.05)] p-6">
        <p className="font-medium text-[rgb(var(--trinkui-fg))]">Next step</p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          Learn how to create a fully custom theme from scratch.
        </p>
        <Link
          href="/docs/customization/create-theme"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
        >
          Create Theme
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path
              d="M6 3l5 5-5 5"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </div>
    </div>
  );
}
