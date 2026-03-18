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

export default function CustomVariantsPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">
          Customization
        </p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">
          Custom Variants
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Use the variants() utility to create type-safe, variant-driven
          component styles. Build custom button variants, extend existing styles,
          and compose compound variants.
        </p>
      </div>

      {/* The variants() Utility */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          The variants() Utility
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            variants()
          </code>{" "}
          is a lightweight alternative to CVA (class-variance-authority). It takes
          a config object with base classes, variant definitions, and optional
          defaults, then returns a function that produces the right class string
          for any combination of props.
        </p>
        <CodeBox
          title="Basic variants() usage"
          code={`import { variants } from "@trinkui/react";

const badge = variants({
  base: "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
  variants: {
    variant: {
      default: "bg-[rgb(var(--trinkui-secondary))] text-[rgb(var(--trinkui-secondary-fg))]",
      primary: "bg-[rgb(var(--trinkui-primary))] text-[rgb(var(--trinkui-primary-fg))]",
      success: "bg-emerald-100 text-emerald-800",
      warning: "bg-amber-100 text-amber-800",
      danger: "bg-red-100 text-red-800",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

// Usage:
badge()                    // → base + default variant
badge({ variant: "primary" })  // → base + primary variant
badge({ variant: "danger" })   // → base + danger variant`}
        />
      </div>

      {/* Creating Custom Button Variants */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Creating Custom Button Variants
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          Define a complete button style system with multiple variant axes:
        </p>
        <CodeBox
          title="button.styles.ts"
          code={`import { variants } from "@trinkui/react";

export const buttonStyles = variants({
  base: [
    "inline-flex items-center justify-center font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--trinkui-primary))] focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),

  variants: {
    variant: {
      primary: "bg-[rgb(var(--trinkui-primary))] text-[rgb(var(--trinkui-primary-fg))] hover:opacity-90",
      secondary: "bg-[rgb(var(--trinkui-secondary))] text-[rgb(var(--trinkui-secondary-fg))] hover:opacity-80",
      outline: "border border-[rgb(var(--trinkui-border))] bg-transparent text-[rgb(var(--trinkui-fg))] hover:bg-[rgb(var(--trinkui-surface))]",
      ghost: "bg-transparent text-[rgb(var(--trinkui-fg))] hover:bg-[rgb(var(--trinkui-surface))]",
      danger: "bg-red-600 text-white hover:bg-red-700",
      gradient: "bg-gradient-to-r from-[rgb(var(--trinkui-primary))] to-[rgb(var(--trinkui-accent))] text-white hover:opacity-90",
    },
    size: {
      sm: "h-8 rounded-md px-3 text-xs",
      md: "h-10 rounded-lg px-4 text-sm",
      lg: "h-12 rounded-lg px-6 text-base",
      xl: "h-14 rounded-xl px-8 text-lg",
    },
  },

  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});

// Usage in a component:
// className={buttonStyles({ variant: "outline", size: "lg" })}`}
        />
      </div>

      {/* Compound Variants */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Compound Variants
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Compound variants apply additional classes when multiple variant
          conditions are met simultaneously. This is useful for special
          combinations that need unique styling:
        </p>
        <CodeBox
          title="Compound variant example"
          code={`import { variants } from "@trinkui/react";

const alert = variants({
  base: "rounded-lg border p-4",
  variants: {
    variant: {
      info: "border-blue-200 bg-blue-50 text-blue-800",
      success: "border-emerald-200 bg-emerald-50 text-emerald-800",
      warning: "border-amber-200 bg-amber-50 text-amber-800",
      error: "border-red-200 bg-red-50 text-red-800",
    },
    size: {
      sm: "p-3 text-sm",
      md: "p-4 text-base",
      lg: "p-6 text-lg",
    },
  },
  compoundVariants: [
    // When variant is "error" AND size is "lg", add extra emphasis
    {
      variant: "error",
      size: "lg",
      class: "border-2 font-semibold shadow-lg shadow-red-100",
    },
    // When variant is "success" AND size is "sm", use compact styling
    {
      variant: "success",
      size: "sm",
      class: "rounded-md",
    },
  ],
  defaultVariants: {
    variant: "info",
    size: "md",
  },
});

alert({ variant: "error", size: "lg" })
// → base + error variant + lg size + compound (border-2 font-semibold shadow-lg)`}
        />
      </div>

      {/* Extending Existing Styles */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Extending Existing Styles
        </h2>
        <p className="mb-3 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
          Since{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            variants()
          </code>{" "}
          returns a function that produces class strings, you can compose variant
          functions with{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs text-[rgb(var(--trinkui-primary))]">
            cn()
          </code>{" "}
          to extend or override existing styles:
        </p>
        <CodeBox
          title="Extending styles with cn()"
          code={`import { cn, variants } from "@trinkui/react";

// Base card styles
const cardStyles = variants({
  base: "rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] p-6",
  variants: {
    elevation: {
      flat: "",
      raised: "shadow-[var(--trinkui-shadow-md)]",
      floating: "shadow-[var(--trinkui-shadow-lg)]",
    },
  },
  defaultVariants: { elevation: "flat" },
});

// Extend with extra classes using cn()
function PricingCard({ featured, ...props }: { featured?: boolean }) {
  return (
    <div
      className={cn(
        cardStyles({ elevation: featured ? "floating" : "flat" }),
        featured && "border-[rgb(var(--trinkui-primary))] ring-1 ring-[rgb(var(--trinkui-primary)/0.3)]",
        "transition-transform hover:scale-[1.02]"
      )}
    >
      {/* card content */}
    </div>
  );
}`}
        />
      </div>

      {/* Full Example */}
      <div>
        <h2 className="mb-3 text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
          Full Example: Custom Tag Component
        </h2>
        <p className="mb-3 text-sm text-[rgb(var(--trinkui-muted))]">
          A complete example of a custom component built with variants():
        </p>
        <CodeBox
          title="Tag.tsx"
          code={`import React, { forwardRef } from "react";
import { cn, variants } from "@trinkui/react";

const tagStyles = variants({
  base: "inline-flex items-center gap-1 font-medium transition-colors",
  variants: {
    variant: {
      solid: "bg-[rgb(var(--trinkui-primary))] text-[rgb(var(--trinkui-primary-fg))]",
      soft: "bg-[rgb(var(--trinkui-primary)/0.1)] text-[rgb(var(--trinkui-primary))]",
      outline: "border border-[rgb(var(--trinkui-border))] text-[rgb(var(--trinkui-fg))]",
    },
    size: {
      sm: "rounded px-1.5 py-0.5 text-[10px]",
      md: "rounded-md px-2 py-0.5 text-xs",
      lg: "rounded-md px-2.5 py-1 text-sm",
    },
    removable: {
      true: "pr-1",
      false: "",
    },
  },
  compoundVariants: [
    { variant: "outline", size: "sm", class: "border-[0.5px]" },
  ],
  defaultVariants: { variant: "soft", size: "md", removable: "false" },
});

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: "solid" | "soft" | "outline";
  size?: "sm" | "md" | "lg";
  removable?: boolean;
  onRemove?: () => void;
}

export const Tag = forwardRef<HTMLSpanElement, TagProps>(
  ({ variant, size, removable, onRemove, className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(tagStyles({ variant, size, removable: removable ? "true" : "false" }), className)}
        {...props}
      >
        {children}
        {removable && (
          <button onClick={onRemove} className="ml-0.5 rounded hover:bg-black/10" aria-label="Remove">
            x
          </button>
        )}
      </span>
    );
  }
);

Tag.displayName = "Tag";`}
        />
      </div>

      {/* Next step */}
      <div className="rounded-xl border border-[rgb(var(--trinkui-primary)/0.3)] bg-[rgb(var(--trinkui-primary)/0.05)] p-6">
        <p className="font-medium text-[rgb(var(--trinkui-fg))]">
          Explore more
        </p>
        <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
          Now that you understand customization, explore the component library.
        </p>
        <Link
          href="/components/button"
          className="mt-3 inline-flex items-center gap-1.5 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
        >
          Browse Components
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
