import { SectionHeader } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const centerCode = `import { SectionHeader } from "@trinkui/react";

export default function Example() {
  return (
    <SectionHeader
      pill="Features"
      title="Everything you need"
      subtitle="TrinkUI provides all the building blocks for a great landing page."
      align="center"
    />
  );
}`;

const leftCode = `import { SectionHeader } from "@trinkui/react";

export default function Example() {
  return (
    <SectionHeader
      pill="Why TrinkUI"
      title="Built for developers"
      subtitle="Drop-in sections that look great out of the box, fully customizable."
      align="left"
    />
  );
}`;

const props = [
  {
    name: "title",
    type: "string",
    required: true,
    description: "Main heading text",
  },
  {
    name: "subtitle",
    type: "string",
    description: "Supporting description below the heading",
  },
  {
    name: "pill",
    type: "string",
    description: "Small badge label displayed above the heading",
  },
  {
    name: "align",
    type: '"left" | "center" | "right"',
    default: '"center"',
    description: "Text alignment of the header content",
  },
  {
    name: "as",
    type: '"h1" | "h2" | "h3"',
    default: '"h2"',
    description: "HTML heading element to render",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

export default function SectionHeaderPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Layout</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">SectionHeader</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Reusable section header with an optional pill badge, title, and subtitle. Used as the introductory block within landing page sections.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Center aligned</h2>
        <ComponentPreview code={centerCode}>
          <div className="p-8">
            <SectionHeader
              pill="Features"
              title="Everything you need"
              subtitle="TrinkUI provides all the building blocks for a great landing page."
              align="center"
            />
          </div>
        </ComponentPreview>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Left aligned</h2>
        <ComponentPreview code={leftCode}>
          <div className="p-8">
            <SectionHeader
              pill="Why TrinkUI"
              title="Built for developers"
              subtitle="Drop-in sections that look great out of the box, fully customizable."
              align="left"
            />
          </div>
        </ComponentPreview>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Props</h2>
        <PropsTable props={props} />
      </div>
    </div>
  );
}
