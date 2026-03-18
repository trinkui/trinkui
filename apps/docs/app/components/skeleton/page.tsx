"use client";

import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Inline Demo: Skeleton                                              */
/* ------------------------------------------------------------------ */

function DemoSkeleton({
  variant = "text",
  width,
  height,
  lines = 1,
  animated = true,
  className = "",
}: {
  variant?: "text" | "circular" | "rectangular";
  width?: string | number;
  height?: string | number;
  lines?: number;
  animated?: boolean;
  className?: string;
}) {
  const baseClasses = `bg-[rgb(var(--trinkui-border)/0.4)] ${
    animated ? "animate-pulse" : ""
  }`;

  if (variant === "circular") {
    const size = width || height || 48;
    return (
      <div
        className={`${baseClasses} rounded-full shrink-0 ${className}`}
        style={{ width: size, height: size }}
        role="presentation"
        aria-hidden="true"
      />
    );
  }

  if (variant === "rectangular") {
    return (
      <div
        className={`${baseClasses} rounded-[var(--trinkui-radius-md)] ${className}`}
        style={{
          width: width || "100%",
          height: height || 120,
        }}
        role="presentation"
        aria-hidden="true"
      />
    );
  }

  // Text variant — supports multiple lines
  return (
    <div className={`flex flex-col gap-2 ${className}`} role="presentation" aria-hidden="true">
      {Array.from({ length: lines }).map((_, i) => (
        <div
          key={i}
          className={`${baseClasses} rounded-[var(--trinkui-radius-sm)]`}
          style={{
            width: i === lines - 1 && lines > 1 ? "75%" : width || "100%",
            height: height || 14,
          }}
        />
      ))}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Card Skeleton Composition                                          */
/* ------------------------------------------------------------------ */

function CardSkeleton({ animated = true }: { animated?: boolean }) {
  return (
    <div className="w-full max-w-sm rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] p-4">
      {/* Image placeholder */}
      <DemoSkeleton variant="rectangular" height={160} animated={animated} className="mb-4" />
      {/* Title */}
      <DemoSkeleton variant="text" width="70%" height={18} animated={animated} className="mb-3" />
      {/* Description lines */}
      <DemoSkeleton variant="text" lines={3} animated={animated} className="mb-4" />
      {/* Footer: avatar + text */}
      <div className="flex items-center gap-3">
        <DemoSkeleton variant="circular" width={36} height={36} animated={animated} />
        <div className="flex-1">
          <DemoSkeleton variant="text" width="50%" height={12} animated={animated} className="mb-1.5" />
          <DemoSkeleton variant="text" width="30%" height={10} animated={animated} />
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function SkeletonPage() {
  const [isAnimated, setIsAnimated] = useState(true);
  const [isLoading, setIsLoading] = useState(true);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Components</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Skeleton</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Loading placeholders that mimic the shape of content before it loads. Supports text, circular, and rectangular variants with optional animation.
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
          <code>{`import { Skeleton } from "@trinkui/react";`}</code>
        </pre>
      </section>

      {/* Text Skeleton */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Text Skeleton</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Single-line and multi-line text placeholders. The last line is automatically shorter to look more natural.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="space-y-6 p-8">
            <div>
              <p className="mb-2 text-xs font-medium text-[rgb(var(--trinkui-muted))]">Single line</p>
              <DemoSkeleton variant="text" width="60%" />
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-[rgb(var(--trinkui-muted))]">Multi-line (3 lines)</p>
              <DemoSkeleton variant="text" lines={3} />
            </div>
            <div>
              <p className="mb-2 text-xs font-medium text-[rgb(var(--trinkui-muted))]">Multi-line (5 lines)</p>
              <DemoSkeleton variant="text" lines={5} />
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<Skeleton variant="text" width="60%" />
<Skeleton variant="text" lines={3} />
<Skeleton variant="text" lines={5} />`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Circular Skeleton */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Circular Skeleton</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Perfect for avatar or icon placeholders.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="flex items-end gap-4 p-8">
            <div className="text-center">
              <DemoSkeleton variant="circular" width={32} />
              <p className="mt-2 text-xs text-[rgb(var(--trinkui-muted))]">32px</p>
            </div>
            <div className="text-center">
              <DemoSkeleton variant="circular" width={48} />
              <p className="mt-2 text-xs text-[rgb(var(--trinkui-muted))]">48px</p>
            </div>
            <div className="text-center">
              <DemoSkeleton variant="circular" width={64} />
              <p className="mt-2 text-xs text-[rgb(var(--trinkui-muted))]">64px</p>
            </div>
            <div className="text-center">
              <DemoSkeleton variant="circular" width={80} />
              <p className="mt-2 text-xs text-[rgb(var(--trinkui-muted))]">80px</p>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<Skeleton variant="circular" width={32} />
<Skeleton variant="circular" width={48} />
<Skeleton variant="circular" width={64} />
<Skeleton variant="circular" width={80} />`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Rectangular Skeleton */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Rectangular Skeleton</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Use for image or card placeholders with custom dimensions.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="space-y-4 p-8">
            <DemoSkeleton variant="rectangular" width="100%" height={80} />
            <DemoSkeleton variant="rectangular" width="100%" height={160} />
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<Skeleton variant="rectangular" width="100%" height={80} />
<Skeleton variant="rectangular" width="100%" height={160} />`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Animated vs Static — Interactive */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Animated vs Static</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Toggle animation on or off. When <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">animated=false</code>, the skeleton shows a static gray block without pulsing.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <div className="mb-6 flex gap-2">
              <button
                onClick={() => setIsAnimated(true)}
                className={`rounded-[var(--trinkui-radius-md)] border px-3 py-1.5 text-xs font-medium transition-colors ${
                  isAnimated
                    ? "border-[rgb(var(--trinkui-primary))] bg-[rgb(var(--trinkui-primary)/0.1)] text-[rgb(var(--trinkui-primary))]"
                    : "border-[rgb(var(--trinkui-border))] text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))]"
                }`}
              >
                Animated
              </button>
              <button
                onClick={() => setIsAnimated(false)}
                className={`rounded-[var(--trinkui-radius-md)] border px-3 py-1.5 text-xs font-medium transition-colors ${
                  !isAnimated
                    ? "border-[rgb(var(--trinkui-primary))] bg-[rgb(var(--trinkui-primary)/0.1)] text-[rgb(var(--trinkui-primary))]"
                    : "border-[rgb(var(--trinkui-border))] text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))]"
                }`}
              >
                Static
              </button>
            </div>
            <div className="flex items-center gap-4">
              <DemoSkeleton variant="circular" width={48} animated={isAnimated} />
              <div className="flex-1">
                <DemoSkeleton variant="text" width="60%" height={16} animated={isAnimated} className="mb-2" />
                <DemoSkeleton variant="text" width="40%" height={12} animated={isAnimated} />
              </div>
            </div>
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`{/* Animated (default) */}
<Skeleton variant="circular" width={48} />
<Skeleton variant="text" width="60%" />

{/* Static — no pulse */}
<Skeleton variant="circular" width={48} animated={false} />
<Skeleton variant="text" width="60%" animated={false} />`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Card Skeleton Composition — Interactive */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Card Skeleton Composition</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Compose multiple skeletons to create a realistic card loading state. Click the button to toggle between skeleton and content.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <button
              onClick={() => setIsLoading(!isLoading)}
              className="mb-6 rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-primary))] bg-[rgb(var(--trinkui-primary)/0.1)] px-4 py-2 text-sm font-medium text-[rgb(var(--trinkui-primary))] transition-colors hover:bg-[rgb(var(--trinkui-primary)/0.2)]"
            >
              {isLoading ? "Show Content" : "Show Skeleton"}
            </button>

            {isLoading ? (
              <CardSkeleton />
            ) : (
              <div className="w-full max-w-sm rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] overflow-hidden">
                <div className="h-40 bg-gradient-to-br from-[rgb(var(--trinkui-primary)/0.3)] to-[rgb(var(--trinkui-accent)/0.3)]" />
                <div className="p-4">
                  <h3 className="mb-2 text-base font-semibold text-[rgb(var(--trinkui-fg))]">
                    Beautiful Landscapes
                  </h3>
                  <p className="mb-4 text-sm text-[rgb(var(--trinkui-muted))]">
                    Explore stunning mountain vistas and serene valleys in this curated photo collection from around the world.
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary)/0.2)] text-xs font-bold text-[rgb(var(--trinkui-primary))]">
                      JD
                    </div>
                    <div>
                      <p className="text-sm font-medium text-[rgb(var(--trinkui-fg))]">Jane Doe</p>
                      <p className="text-xs text-[rgb(var(--trinkui-muted))]">2 days ago</p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`{isLoading ? (
  <div className="card">
    <Skeleton variant="rectangular" height={160} />
    <Skeleton variant="text" width="70%" height={18} />
    <Skeleton variant="text" lines={3} />
    <div className="flex items-center gap-3">
      <Skeleton variant="circular" width={36} />
      <div>
        <Skeleton variant="text" width="50%" height={12} />
        <Skeleton variant="text" width="30%" height={10} />
      </div>
    </div>
  </div>
) : (
  <ActualCardContent />
)}`}</code>
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
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">variant</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"text" | "circular" | "rectangular"`}</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"text"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Shape of the skeleton element</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">width</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string | number</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">{`"100%"`}</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Width of the skeleton</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">height</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">string | number</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">varies by variant</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Height of the skeleton</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">lines</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">number</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">1</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Number of text lines (text variant only)</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">animated</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">true</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Enable or disable the pulse animation</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[rgb(var(--trinkui-muted))]">
          <li>Uses <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;presentation&quot;</code> and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-hidden=&quot;true&quot;</code> so screen readers skip the placeholder shapes.</li>
          <li>Users with the <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">prefers-reduced-motion</code> OS setting can disable animation via the <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">animated</code> prop.</li>
          <li>The parent container should use <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-busy=&quot;true&quot;</code> while content is loading and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-busy=&quot;false&quot;</code> once loaded.</li>
          <li>Animation uses opacity changes only, avoiding layout shifts.</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <a href="/components/select" className="text-sm text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors">
          &larr; Select
        </a>
        <a href="/components/slider" className="text-sm text-[rgb(var(--trinkui-primary))] hover:underline">
          Slider &rarr;
        </a>
      </div>
    </div>
  );
}
