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

export default function CreateThemePage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
          Customization
        </p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
          Create Theme
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Step-by-step guide to creating a custom theme that matches your brand.
          Override CSS variables, build brand presets, and ship a unique look.
        </p>
      </div>

      {/* Step 1: Start with the Default */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            1
          </span>
          Start with the Default Theme
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Copy the default theme into your{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            globals.css
          </code>{" "}
          and modify only the variables you want to change. Any variable you do not
          override will keep its default value.
        </p>
        <CodeBox
          title="globals.css"
          code={`:root {
  /* Override only what you need */
  --trinkui-primary: 20 184 166;      /* your brand color */
  --trinkui-primary-fg: 255 255 255;
  --trinkui-accent: 234 179 8;        /* your accent color */
}

.dark {
  --trinkui-primary: 45 212 191;
  --trinkui-accent: 250 204 21;
}`}
        />
      </div>

      {/* Step 2: Convert Your Brand Colors */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            2
          </span>
          Convert Your Brand Colors to RGB Channels
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          trink-ui expects color values as space-separated RGB channels. Convert
          your hex or RGB values:
        </p>
        <CodeBox
          title="Color conversion"
          code={`/* Hex to RGB channels */
#6366f1  →  99 102 241
#14b8a6  →  20 184 166
#f97316  →  249 115 22

/* RGB to RGB channels */
rgb(99, 102, 241)  →  99 102 241

/* You can use any color picker tool or browser DevTools:
   1. Pick your color
   2. Get the RGB values
   3. Write them space-separated (no commas) */`}
        />
      </div>

      {/* Step 3: Choose Light & Dark Values */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          <span className="mr-2 inline-flex h-6 w-6 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary))] text-xs font-bold text-white">
            3
          </span>
          Choose Light and Dark Values
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          For good contrast, your dark mode primary should typically be a lighter
          shade of your light mode primary. The same applies to other colors:
        </p>
        <CodeBox
          code={`/* Rule of thumb:
   Light mode → use the -500 or -600 shade
   Dark mode  → use the -400 shade (lighter, better contrast on dark bg)

   Light background → white or near-white
   Dark background  → very dark gray or near-black

   Muted text → should have at least 4.5:1 contrast ratio */`}
        />
      </div>

      {/* Example: Corporate Blue */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Example: Corporate Blue Theme
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          A professional theme using blue as the primary color:
        </p>
        <CodeBox
          title="themes/corporate-blue.css"
          code={`:root {
  --trinkui-bg: 255 255 255;
  --trinkui-fg: 15 23 42;
  --trinkui-primary: 37 99 235;       /* blue-600 */
  --trinkui-primary-fg: 255 255 255;
  --trinkui-secondary: 241 245 249;   /* slate-100 */
  --trinkui-secondary-fg: 30 41 59;   /* slate-800 */
  --trinkui-accent: 234 88 12;        /* orange-600 */
  --trinkui-muted: 100 116 139;       /* slate-500 */
  --trinkui-border: 203 213 225;      /* slate-300 */
  --trinkui-surface: 248 250 252;     /* slate-50 */

  --trinkui-radius-md: 0.5rem;
  --trinkui-radius-lg: 0.75rem;
}

.dark {
  --trinkui-bg: 2 6 23;              /* slate-950 */
  --trinkui-fg: 248 250 252;
  --trinkui-primary: 96 165 250;     /* blue-400 */
  --trinkui-primary-fg: 255 255 255;
  --trinkui-secondary: 30 41 59;     /* slate-800 */
  --trinkui-secondary-fg: 226 232 240;
  --trinkui-accent: 251 146 60;      /* orange-400 */
  --trinkui-muted: 148 163 184;      /* slate-400 */
  --trinkui-border: 51 65 85;        /* slate-700 */
  --trinkui-surface: 15 23 42;       /* slate-900 */
}`}
        />
      </div>

      {/* Example: Vibrant Purple */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Example: Vibrant Purple Theme
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          A bold, creative theme with purple as the primary and pink as the accent:
        </p>
        <CodeBox
          title="themes/vibrant-purple.css"
          code={`:root {
  --trinkui-bg: 255 255 255;
  --trinkui-fg: 15 3 38;
  --trinkui-primary: 147 51 234;     /* purple-600 */
  --trinkui-primary-fg: 255 255 255;
  --trinkui-secondary: 250 245 255;  /* purple-50 */
  --trinkui-secondary-fg: 88 28 135; /* purple-800 */
  --trinkui-accent: 236 72 153;      /* pink-500 */
  --trinkui-muted: 120 113 138;
  --trinkui-border: 233 213 255;     /* purple-200 */
  --trinkui-surface: 253 251 255;

  --trinkui-radius-md: 1rem;
  --trinkui-radius-lg: 1.25rem;
  --trinkui-radius-xl: 2rem;
}

.dark {
  --trinkui-bg: 13 3 27;
  --trinkui-fg: 245 240 255;
  --trinkui-primary: 192 132 252;    /* purple-400 */
  --trinkui-primary-fg: 255 255 255;
  --trinkui-secondary: 30 15 50;
  --trinkui-secondary-fg: 233 213 255;
  --trinkui-accent: 244 114 182;     /* pink-400 */
  --trinkui-muted: 140 130 160;
  --trinkui-border: 55 30 80;
  --trinkui-surface: 22 8 40;
}`}
        />
      </div>

      {/* Example: Earthy Green */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Example: Earthy Green Theme
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          A natural, grounded theme with green tones:
        </p>
        <CodeBox
          title="themes/earthy-green.css"
          code={`:root {
  --trinkui-bg: 252 253 248;
  --trinkui-fg: 20 30 15;
  --trinkui-primary: 22 163 74;      /* green-600 */
  --trinkui-primary-fg: 255 255 255;
  --trinkui-secondary: 240 253 244;  /* green-50 */
  --trinkui-secondary-fg: 20 83 45;  /* green-800 */
  --trinkui-accent: 202 138 4;       /* yellow-600 */
  --trinkui-muted: 107 114 128;      /* gray-500 */
  --trinkui-border: 209 213 219;     /* gray-300 */
  --trinkui-surface: 247 250 244;

  --trinkui-radius-sm: 0.25rem;
  --trinkui-radius-md: 0.5rem;
  --trinkui-radius-lg: 0.75rem;
}

.dark {
  --trinkui-bg: 5 15 8;
  --trinkui-fg: 240 250 240;
  --trinkui-primary: 74 222 128;     /* green-400 */
  --trinkui-primary-fg: 5 46 22;
  --trinkui-secondary: 20 40 25;
  --trinkui-secondary-fg: 187 247 208;
  --trinkui-accent: 250 204 21;      /* yellow-400 */
  --trinkui-muted: 156 163 175;      /* gray-400 */
  --trinkui-border: 40 55 45;
  --trinkui-surface: 12 25 16;
}`}
        />
      </div>

      {/* Next step */}
      <div className="rounded-xl border border-[rgb(var(--trinkui-primary)/0.3)] bg-[rgb(var(--trinkui-primary)/0.05)] p-6">
        <p className="font-medium text-[rgb(var(--trinkui-fg))]">Next step</p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          Learn how dark mode works and how to implement a theme toggle.
        </p>
        <Link
          href="/docs/customization/dark-mode"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
        >
          Dark Mode
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
