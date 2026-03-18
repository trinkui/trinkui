import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";
import Link from "next/link";

/* ------------------------------------------------------------------ */
/*  Inline User demo (pure JSX + Tailwind, no @trinkui/react)          */
/* ------------------------------------------------------------------ */

function DemoAvatar({
  src,
  alt,
  size = "md",
}: {
  src?: string;
  alt: string;
  size?: "sm" | "md" | "lg";
}) {
  const sizeMap = { sm: "h-8 w-8 text-xs", md: "h-10 w-10 text-sm", lg: "h-12 w-12 text-base" };
  const initials = alt
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  if (src) {
    return (
      <img
        src={src}
        alt={alt}
        className={`shrink-0 rounded-full object-cover ${sizeMap[size]}`}
      />
    );
  }

  return (
    <div
      className={`flex shrink-0 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary)/0.15)] font-medium text-[rgb(var(--trinkui-primary))] ${sizeMap[size]}`}
      aria-label={alt}
    >
      {initials}
    </div>
  );
}

function DemoUser({
  name,
  description,
  avatarSrc,
  size = "md",
}: {
  name: string;
  description?: string;
  avatarSrc?: string;
  size?: "sm" | "md" | "lg";
}) {
  const nameSizes = { sm: "text-sm", md: "text-sm", lg: "text-base" };
  const descSizes = { sm: "text-xs", md: "text-xs", lg: "text-sm" };

  return (
    <div className="flex items-center gap-3">
      <DemoAvatar src={avatarSrc} alt={name} size={size} />
      <div className="min-w-0">
        <p className={`font-medium text-[rgb(var(--trinkui-fg))] ${nameSizes[size]}`}>{name}</p>
        {description && (
          <p className={`text-[rgb(var(--trinkui-muted))] ${descSizes[size]}`}>{description}</p>
        )}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Code strings                                                       */
/* ------------------------------------------------------------------ */

const usageCode = `import { User } from "@trinkui/react";

export default function Example() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <User name="Jane Cooper" description="Software Engineer" />
      <User
        name="Alex Johnson"
        description="Product Designer"
        avatarSrc="https://i.pravatar.cc/150?u=alex"
      />
    </div>
  );
}`;

const sizesCode = `import { User } from "@trinkui/react";

export default function Example() {
  return (
    <div className="flex flex-col gap-6 p-8">
      <User name="Small User" description="sm size" size="sm" />
      <User name="Medium User" description="md size" size="md" />
      <User name="Large User" description="lg size" size="lg" />
    </div>
  );
}`;

const withoutDescCode = `import { User } from "@trinkui/react";

export default function Example() {
  return (
    <div className="p-8">
      <User name="Jane Cooper" avatarSrc="https://i.pravatar.cc/150?u=jane" />
    </div>
  );
}`;

/* ------------------------------------------------------------------ */
/*  Props                                                              */
/* ------------------------------------------------------------------ */

const userProps = [
  { name: "name", type: "string", required: true, description: "User display name" },
  { name: "description", type: "string", description: "Secondary text (role, email, etc.)" },
  { name: "avatarSrc", type: "string", description: "Image URL for the avatar; falls back to initials if omitted" },
  { name: "avatarProps", type: "AvatarProps", description: "Additional props forwarded to the inner Avatar component" },
  { name: "size", type: '"sm" | "md" | "lg"', default: '"md"', description: "Size of the avatar and text" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function UserPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">User</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Composite component that combines an Avatar with a name and optional description. Ideal for user cards, comments, and author bylines.
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
          <code>{`import { User } from "@trinkui/react";`}</code>
        </pre>
      </div>

      {/* Usage */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <ComponentPreview code={usageCode}>
          <div className="flex flex-col gap-6 p-8">
            <DemoUser name="Jane Cooper" description="Software Engineer" />
            <DemoUser
              name="Alex Johnson"
              description="Product Designer"
              avatarSrc="https://i.pravatar.cc/150?u=alex"
            />
          </div>
        </ComponentPreview>
      </div>

      {/* Sizes */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sizes</h2>
        <ComponentPreview code={sizesCode}>
          <div className="flex flex-col gap-6 p-8">
            <DemoUser name="Small User" description="sm size" size="sm" />
            <DemoUser name="Medium User" description="md size" size="md" />
            <DemoUser name="Large User" description="lg size" size="lg" />
          </div>
        </ComponentPreview>
      </div>

      {/* Without description */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Without Description</h2>
        <ComponentPreview code={withoutDescCode}>
          <div className="p-8">
            <DemoUser name="Jane Cooper" avatarSrc="https://i.pravatar.cc/150?u=jane" />
          </div>
        </ComponentPreview>
      </div>

      {/* Props */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Props</h2>
        <PropsTable props={userProps} />
      </div>

      {/* Accessibility */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[rgb(var(--trinkui-muted))]">
          <li>The avatar image receives the user&apos;s <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">name</code> as alt text.</li>
          <li>When no image is provided, the initials fallback includes an <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-label</code> with the full name.</li>
          <li>Text truncation is handled with CSS to avoid layout overflow while keeping content readable.</li>
        </ul>
      </div>

      {/* Prev / Next */}
      <div className="flex items-center justify-between border-t border-[rgb(var(--trinkui-border)/0.4)] pt-6">
        <Link
          href="/components/tooltip"
          className="text-sm font-medium text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-primary))]"
        >
          &larr; Tooltip
        </Link>
        <span />
      </div>
    </div>
  );
}
