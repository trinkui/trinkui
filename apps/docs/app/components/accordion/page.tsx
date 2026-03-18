import { Accordion } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { Accordion } from "@trinkui/react";

export default function Example() {
  return (
    <Accordion
      items={[
        { id: "1", trigger: "What is TrinkUI?", content: "A React UI library for landing pages." },
        { id: "2", trigger: "Is it free?", content: "Yes, MIT licensed and completely free." },
        { id: "3", trigger: "Does it support TypeScript?", content: "Yes, full TypeScript support." },
      ]}
    />
  );
}`;

const borderedCode = `import { Accordion } from "@trinkui/react";

export default function Example() {
  return (
    <Accordion
      variant="bordered"
      items={[
        { id: "1", trigger: "What is TrinkUI?", content: "A React UI library for landing pages." },
        { id: "2", trigger: "Is it free?", content: "Yes, MIT licensed and completely free." },
        { id: "3", trigger: "Does it support TypeScript?", content: "Yes, full TypeScript support." },
      ]}
    />
  );
}`;

const accordionItems = [
  { id: "1", trigger: "What is TrinkUI?", content: "A React UI library for landing pages." },
  { id: "2", trigger: "Is it free?", content: "Yes, MIT licensed and completely free." },
  { id: "3", trigger: "Does it support TypeScript?", content: "Yes, full TypeScript support." },
];

const props = [
  {
    name: "items",
    type: "AccordionItem[]",
    required: true,
    description: "Accordion items { id, trigger, content }",
  },
  {
    name: "allowMultiple",
    type: "boolean",
    default: "false",
    description: "Allow multiple items open at once",
  },
  {
    name: "variant",
    type: '"default" | "bordered" | "separated"',
    default: '"default"',
    description: "Visual style variant of the accordion",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

export default function AccordionPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Accordion</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Animated accordion component for collapsible FAQ-style content. Supports single or multiple open items.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Installation</h2>
        <pre className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[#0d1117] px-4 py-3 text-sm text-slate-200">
          <code>npm install @trinkui/react</code>
        </pre>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Preview</h2>
        <ComponentPreview code={exampleCode}>
          <div className="p-8">
            <Accordion items={accordionItems} />
          </div>
        </ComponentPreview>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Variants</h2>
        <ComponentPreview code={borderedCode}>
          <div className="p-8">
            <Accordion variant="bordered" items={accordionItems} />
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
