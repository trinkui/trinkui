import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Inline Image demo (pure JSX + Tailwind, no @trinkui/react)         */
/* ------------------------------------------------------------------ */

const radiusMap: Record<string, string> = {
  none: "rounded-none",
  sm: "rounded-[var(--trinkui-radius-sm)]",
  md: "rounded-[var(--trinkui-radius-md)]",
  lg: "rounded-[var(--trinkui-radius-lg)]",
  full: "rounded-full",
};

const shadowMap: Record<string, string> = {
  none: "",
  sm: "shadow-[var(--trinkui-shadow-sm)]",
  md: "shadow-[var(--trinkui-shadow-md)]",
  lg: "shadow-[var(--trinkui-shadow-lg)]",
};

function DemoImage({
  src,
  alt,
  radius = "md",
  shadow = "none",
  isZoomed = false,
  width = 200,
  height = 150,
}: {
  src: string;
  alt: string;
  radius?: "none" | "sm" | "md" | "lg" | "full";
  shadow?: "none" | "sm" | "md" | "lg";
  isZoomed?: boolean;
  width?: number;
  height?: number;
}) {
  return (
    <div className={`overflow-hidden ${radiusMap[radius]} ${shadowMap[shadow]} inline-block`}>
      <img
        src={src}
        alt={alt}
        width={width}
        height={height}
        className={`block object-cover ${radiusMap[radius]} transition-transform duration-300 ${isZoomed ? "hover:scale-110" : ""}`}
      />
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Code strings                                                       */
/* ------------------------------------------------------------------ */

const radiusCode = `import { Image } from "@trinkui/react";

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-4 p-8">
      <Image src="/demo.jpg" alt="None" radius="none" />
      <Image src="/demo.jpg" alt="Small" radius="sm" />
      <Image src="/demo.jpg" alt="Medium" radius="md" />
      <Image src="/demo.jpg" alt="Large" radius="lg" />
      <Image src="/demo.jpg" alt="Full" radius="full" />
    </div>
  );
}`;

const shadowCode = `import { Image } from "@trinkui/react";

export default function Example() {
  return (
    <div className="flex flex-wrap items-center gap-6 p-8">
      <Image src="/demo.jpg" alt="No shadow" shadow="none" />
      <Image src="/demo.jpg" alt="Small shadow" shadow="sm" />
      <Image src="/demo.jpg" alt="Medium shadow" shadow="md" />
      <Image src="/demo.jpg" alt="Large shadow" shadow="lg" />
    </div>
  );
}`;

const zoomCode = `import { Image } from "@trinkui/react";

export default function Example() {
  return (
    <div className="p-8">
      <Image src="/demo.jpg" alt="Zoomable" isZoomed radius="lg" />
    </div>
  );
}`;

const placeholderSrc = "https://placehold.co/200x150/1e1e2e/a78bfa?text=Image";

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

const props = [
  { name: "src", type: "string", required: true, description: "Image source URL" },
  { name: "alt", type: "string", required: true, description: "Alt text for accessibility" },
  { name: "radius", type: '"none" | "sm" | "md" | "lg" | "full"', default: '"md"', description: "Border radius of the image" },
  { name: "shadow", type: '"none" | "sm" | "md" | "lg"', default: '"none"', description: "Box shadow depth" },
  { name: "fallbackSrc", type: "string", description: "Fallback image URL if the primary src fails to load" },
  { name: "isZoomed", type: "boolean", default: "false", description: "Apply a hover zoom-in effect" },
  { name: "width", type: "number | string", description: "Image width" },
  { name: "height", type: "number | string", description: "Image height" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function ImagePage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Image</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Enhanced image component with configurable border radius, shadow, fallback support, and optional zoom effect on hover.
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
          <code>{`import { Image } from "@trinkui/react";`}</code>
        </pre>
      </div>

      {/* Radius */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Radius</h2>
        <ComponentPreview code={radiusCode}>
          <div className="flex flex-wrap items-center gap-4 p-8">
            <DemoImage src={placeholderSrc} alt="None" radius="none" />
            <DemoImage src={placeholderSrc} alt="Small" radius="sm" />
            <DemoImage src={placeholderSrc} alt="Medium" radius="md" />
            <DemoImage src={placeholderSrc} alt="Large" radius="lg" />
            <DemoImage src={placeholderSrc} alt="Full" radius="full" width={150} height={150} />
          </div>
        </ComponentPreview>
      </div>

      {/* Shadow */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Shadow</h2>
        <ComponentPreview code={shadowCode}>
          <div className="flex flex-wrap items-center gap-6 p-8">
            <DemoImage src={placeholderSrc} alt="No shadow" shadow="none" />
            <DemoImage src={placeholderSrc} alt="Small shadow" shadow="sm" />
            <DemoImage src={placeholderSrc} alt="Medium shadow" shadow="md" />
            <DemoImage src={placeholderSrc} alt="Large shadow" shadow="lg" />
          </div>
        </ComponentPreview>
      </div>

      {/* Zoom */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Zoom on Hover</h2>
        <ComponentPreview code={zoomCode}>
          <div className="p-8">
            <DemoImage src={placeholderSrc} alt="Zoomable" isZoomed radius="lg" />
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
          <li>The <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">alt</code> prop is required and rendered as the native <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">alt</code> attribute.</li>
          <li>If <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">fallbackSrc</code> is provided, it is swapped in automatically on load error so the layout is never broken.</li>
          <li>Decorative images should use <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">alt=&quot;&quot;</code> and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;presentation&quot;</code>.</li>
        </ul>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between border-t border-[rgb(var(--trinkui-border)/0.4)] pt-6">
        <Link
          href="/components/dropdown"
          className="text-sm font-medium text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-primary))]"
        >
          &larr; Dropdown
        </Link>
        <Link
          href="/components/input"
          className="text-sm font-medium text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-primary))]"
        >
          Input &rarr;
        </Link>
      </div>
    </div>
  );
}
