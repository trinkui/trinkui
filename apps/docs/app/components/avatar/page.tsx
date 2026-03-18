import { Avatar, AvatarGroup } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const sizesCode = `import { Avatar } from "@trinkui/react";

export default function Example() {
  return (
    <div className="flex items-center gap-4 p-8">
      <Avatar alt="XS" size="xs" />
      <Avatar alt="SM" size="sm" />
      <Avatar alt="MD" size="md" />
      <Avatar alt="LG" size="lg" />
      <Avatar alt="XL" size="xl" />
    </div>
  );
}`;

const groupCode = `import { AvatarGroup } from "@trinkui/react";

export default function Example() {
  return (
    <div className="p-8">
      <AvatarGroup
        avatars={[
          { alt: "Alice" },
          { alt: "Bob" },
          { alt: "Charlie" },
          { alt: "Diana" },
          { alt: "Eve" },
          { alt: "Frank" },
        ]}
        max={4}
      />
    </div>
  );
}`;

const avatarProps = [
  {
    name: "src",
    type: "string",
    description: "Image URL for the avatar",
  },
  {
    name: "alt",
    type: "string",
    required: true,
    description: "Alt text; also used to generate initials fallback",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "md" | "lg" | "xl"',
    default: '"md"',
    description: "Size of the avatar",
  },
  {
    name: "ring",
    type: "boolean",
    default: "false",
    description: "Show a ring border around the avatar",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

const groupProps = [
  {
    name: "avatars",
    type: "AvatarProps[]",
    required: true,
    description: "Array of avatar props to render",
  },
  {
    name: "max",
    type: "number",
    default: "5",
    description: "Maximum number of avatars to show before displaying an overflow count",
  },
  {
    name: "size",
    type: '"xs" | "sm" | "md" | "lg" | "xl"',
    default: '"md"',
    description: "Size applied to all avatars in the group",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

export default function AvatarPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Avatar</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Circular avatar with image support and automatic fallback to initials. Includes AvatarGroup for stacked avatars.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Installation</h2>
        <pre className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[#0d1117] px-4 py-3 text-sm text-slate-200">
          <code>npm install @trinkui/react</code>
        </pre>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sizes</h2>
        <ComponentPreview code={sizesCode}>
          <div className="flex items-center gap-4 p-8">
            <Avatar alt="XS" size="xs" />
            <Avatar alt="SM" size="sm" />
            <Avatar alt="MD" size="md" />
            <Avatar alt="LG" size="lg" />
            <Avatar alt="XL" size="xl" />
          </div>
        </ComponentPreview>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">AvatarGroup</h2>
        <ComponentPreview code={groupCode}>
          <div className="p-8">
            <AvatarGroup
              avatars={[
                { alt: "Alice" },
                { alt: "Bob" },
                { alt: "Charlie" },
                { alt: "Diana" },
                { alt: "Eve" },
                { alt: "Frank" },
              ]}
              max={4}
            />
          </div>
        </ComponentPreview>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Avatar Props</h2>
        <PropsTable props={avatarProps} />
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">AvatarGroup Props</h2>
        <PropsTable props={groupProps} />
      </div>
    </div>
  );
}
