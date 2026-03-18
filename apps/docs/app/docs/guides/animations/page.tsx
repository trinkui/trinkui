import Link from "next/link";

function CodeBox({ title, code }: { title?: string; code: string }) {
  return (
    <div className="overflow-hidden rounded-lg border border-[rgb(var(--trinkui-border))]">
      {title && (
        <div className="border-b border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] px-4 py-2">
          <span className="text-xs font-medium text-[rgb(var(--trinkui-muted))]">{title}</span>
        </div>
      )}
      <pre className="overflow-x-auto bg-[#0a0a0f] px-4 py-3 text-sm leading-relaxed text-slate-200">
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default function AnimationsGuidePage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
          Guides
        </p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
          Animations
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          trink-ui includes a set of animation wrappers that add smooth entrance effects to
          your sections. Learn how to use FadeIn, SlideUp, StaggerChildren, ScaleIn, and
          BlurIn effectively.
        </p>
      </div>

      {/* Available wrappers */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Available animation wrappers
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Each wrapper is a React component that animates its children when they enter the viewport:
        </p>
        <div className="space-y-2">
          {[
            { name: "FadeIn", desc: "Fades content from transparent to opaque" },
            { name: "SlideUp", desc: "Slides content upward while fading in" },
            { name: "ScaleIn", desc: "Scales content from slightly smaller to full size" },
            { name: "BlurIn", desc: "Transitions from blurred to sharp while fading in" },
            { name: "StaggerChildren", desc: "Animates a list of children with sequential delay" },
          ].map((item) => (
            <div
              key={item.name}
              className="flex items-start gap-3 rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] px-4 py-3"
            >
              <code className="shrink-0 rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1.5 py-0.5 text-xs font-medium text-[rgb(var(--trinkui-primary))]">
                {item.name}
              </code>
              <p className="text-sm text-[rgb(var(--trinkui-muted))]">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Basic usage */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Basic usage
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Wrap any content with an animation component. By default, animations trigger when
          the element scrolls into view:
        </p>
        <CodeBox
          code={`import { FadeIn, SlideUp, ScaleIn, BlurIn } from "@trinkui/react";

// Simple fade in on scroll
<FadeIn>
  <h2>This heading fades in</h2>
</FadeIn>

// Slide up with fade
<SlideUp>
  <p>This paragraph slides up into view</p>
</SlideUp>

// Scale from small to full size
<ScaleIn>
  <img src="/hero.png" alt="Hero image" />
</ScaleIn>

// Blur to sharp transition
<BlurIn>
  <div className="card">Content appears from blur</div>
</BlurIn>`}
        />
      </div>

      {/* Scroll trigger */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Scroll trigger behavior
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          By default, animations use{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            scrollTrigger={`{true}`}
          </code>{" "}
          to animate when the element enters the viewport, and{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            once={`{true}`}
          </code>{" "}
          so the animation only plays once. You can change this behavior:
        </p>
        <CodeBox
          code={`// Animate immediately (no scroll trigger)
<FadeIn scrollTrigger={false}>
  <h1>Above-the-fold content</h1>
</FadeIn>

// Re-animate every time the element enters the viewport
<SlideUp once={false}>
  <div>Animates every scroll pass</div>
</SlideUp>`}
        />
      </div>

      {/* Delay and duration */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Controlling delay and duration
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Fine-tune timing with the{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            delay
          </code>{" "}
          and{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            duration
          </code>{" "}
          props (in seconds):
        </p>
        <CodeBox
          code={`// Fast animation with no delay
<FadeIn duration={0.3} delay={0}>
  <p>Quick fade</p>
</FadeIn>

// Slow, dramatic entrance
<SlideUp duration={1.2} delay={0.5}>
  <h2>Dramatic headline</h2>
</SlideUp>

// Sequenced elements with manual delays
<FadeIn delay={0}>
  <h2>Title appears first</h2>
</FadeIn>
<FadeIn delay={0.2}>
  <p>Subtitle appears second</p>
</FadeIn>
<FadeIn delay={0.4}>
  <button>Button appears third</button>
</FadeIn>`}
        />
      </div>

      {/* StaggerChildren */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Stagger pattern for lists and grids
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Use{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            StaggerChildren
          </code>{" "}
          to animate a list of items with sequential delay. Each direct child is animated
          one after another:
        </p>
        <CodeBox
          code={`import { StaggerChildren } from "@trinkui/react";

<StaggerChildren staggerDelay={0.1}>
  {features.map((feature) => (
    <div key={feature.title} className="rounded-lg border p-6">
      <h3>{feature.title}</h3>
      <p>{feature.description}</p>
    </div>
  ))}
</StaggerChildren>`}
        />
        <p className="mt-3 text-sm text-[rgb(var(--trinkui-muted))]">
          The{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            staggerDelay
          </code>{" "}
          prop controls the time between each child&apos;s animation start. The default is{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            0.1
          </code>{" "}
          seconds.
        </p>
      </div>

      {/* Disabling animations */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Disabling animations
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          There are three ways to disable animations:
        </p>
        <div className="space-y-4">
          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="font-medium text-[rgb(var(--trinkui-fg))]">
              1. Per-section with the animated prop
            </p>
            <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
              Every section component accepts{" "}
              <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
                animated={`{false}`}
              </code>{" "}
              to render without any animation wrappers.
            </p>
          </div>
          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="font-medium text-[rgb(var(--trinkui-fg))]">
              2. Automatic reduced motion detection
            </p>
            <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
              All animation wrappers call{" "}
              <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
                useReducedMotion()
              </code>{" "}
              internally. If the user has enabled &quot;Reduce motion&quot; in their OS settings,
              animations are automatically replaced with a plain{" "}
              <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
                &lt;div&gt;
              </code>.
            </p>
          </div>
          <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface)/0.3)] p-4">
            <p className="font-medium text-[rgb(var(--trinkui-fg))]">
              3. CSS media query fallback
            </p>
            <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
              As an additional safety net, you can add a CSS rule to instantly show all animated
              elements when reduced motion is preferred.
            </p>
          </div>
        </div>
        <div className="mt-3">
          <CodeBox
            code={`// Section with no animations
<HeroCentered animated={false} title="Instant render" ... />

// Animation wrapper that auto-detects reduced motion
<FadeIn>
  {/* Renders as plain <div> when user prefers reduced motion */}
  <p>Content here</p>
</FadeIn>`}
          />
        </div>
      </div>

      {/* Performance */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Performance considerations
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          trink-ui animations are designed for performance:
        </p>
        <ul className="space-y-2 text-sm text-[rgb(var(--trinkui-muted))]">
          {[
            "Only opacity and transform are animated — these are GPU-composited properties that do not trigger layout recalculation",
            "Intersection Observer is used for scroll triggers instead of scroll event listeners",
            "Animations run once by default, so no ongoing computation after the initial render",
            "The useReducedMotion hook prevents unnecessary animation setup for users who prefer reduced motion",
          ].map((item) => (
            <li key={item} className="flex items-start gap-2">
              <svg
                width="16"
                height="16"
                viewBox="0 0 16 16"
                fill="none"
                className="mt-0.5 shrink-0 text-[rgb(var(--trinkui-primary))]"
              >
                <path
                  d="M3 8.5l3 3 7-7"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Combining animations */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Combining multiple animation types
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Use different animation types for different elements in the same section to create
          visual hierarchy:
        </p>
        <CodeBox
          title="Custom animated section"
          code={`import { FadeIn, SlideUp, ScaleIn, StaggerChildren } from "@trinkui/react";

function CustomSection() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-6xl px-4">
        {/* Headline slides up first */}
        <SlideUp delay={0}>
          <h2 className="text-4xl font-bold text-center">Our Features</h2>
        </SlideUp>

        {/* Subtitle fades in after */}
        <FadeIn delay={0.2}>
          <p className="mt-4 text-center text-lg text-gray-600">
            Everything you need to succeed.
          </p>
        </FadeIn>

        {/* Feature cards stagger in */}
        <StaggerChildren staggerDelay={0.15} className="mt-12 grid gap-6 md:grid-cols-3">
          <div className="rounded-xl border p-6">
            <ScaleIn>
              <div className="text-4xl">⚡</div>
            </ScaleIn>
            <h3 className="mt-4 font-semibold">Fast</h3>
            <p className="mt-2 text-sm text-gray-500">Lightning quick performance.</p>
          </div>
          <div className="rounded-xl border p-6">
            <ScaleIn>
              <div className="text-4xl">🎨</div>
            </ScaleIn>
            <h3 className="mt-4 font-semibold">Beautiful</h3>
            <p className="mt-2 text-sm text-gray-500">Polished design system.</p>
          </div>
          <div className="rounded-xl border p-6">
            <ScaleIn>
              <div className="text-4xl">🔒</div>
            </ScaleIn>
            <h3 className="mt-4 font-semibold">Secure</h3>
            <p className="mt-2 text-sm text-gray-500">Enterprise-grade security.</p>
          </div>
        </StaggerChildren>
      </div>
    </section>
  );
}`}
        />
      </div>

      {/* Next step */}
      <div className="rounded-xl border border-[rgb(var(--trinkui-primary)/0.3)] bg-[rgb(var(--trinkui-primary)/0.05)] p-6">
        <p className="font-medium text-[rgb(var(--trinkui-fg))]">Next step</p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          Learn how trink-ui handles responsive design across all screen sizes.
        </p>
        <Link
          href="/docs/guides/responsive"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
        >
          Responsive Design Guide
          <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
            <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </Link>
      </div>
    </div>
  );
}
