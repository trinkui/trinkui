import { FAQAccordion } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { FAQAccordion } from "@trinkui/react";

export default function Example() {
  return (
    <FAQAccordion
      pill="FAQ"
      title="Frequently asked questions"
      subtitle="Everything you need to know about TrinkUI."
      items={[
        { question: "Is TrinkUI free to use?", answer: "Yes, TrinkUI is MIT licensed and completely free." },
        { question: "Does it work with Next.js?", answer: "Yes, it supports Next.js App Router with full 'use client' support." },
        { question: "Can I customize the theme?", answer: "Absolutely. All colors use CSS custom properties you can override." },
      ]}
    />
  );
}`;

const props = [
  { name: "pill", type: "string", description: "Badge label shown above the headline" },
  { name: "title", type: "string", required: true, description: "Main headline text" },
  { name: "subtitle", type: "string", description: "Supporting description below the headline" },
  { name: "items", type: "FAQItem[]", default: "[]", description: "Array of FAQ items" },
  { name: "animated", type: "boolean", default: "true", description: "Enable entrance animations" },
  { name: "theme", type: '"light" | "dark"', description: "Section color theme" },
  { name: "className", type: "string", description: "Extra CSS classes for the section element" },
];

export default function FAQAccordionPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">FAQ</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">FAQAccordion</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          FAQ section with animated accordion items — click to expand each answer.
        </p>
      </div>

      {/* Installation */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Installation</h2>
        <pre className="rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[#0d1117] px-4 py-3 text-sm text-slate-200">
          <code>npm install @trinkui/react</code>
        </pre>
      </div>

      {/* Preview */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Preview</h2>
        <ComponentPreview code={exampleCode}>
          <FAQAccordion
            pill="FAQ"
            title="Frequently asked questions"
            subtitle="Everything you need to know about TrinkUI."
            items={[
              { question: "Is TrinkUI free to use?", answer: "Yes, TrinkUI is MIT licensed and completely free." },
              { question: "Does it work with Next.js?", answer: "Yes, it supports Next.js App Router with full 'use client' support." },
              { question: "Can I customize the theme?", answer: "Absolutely. All colors use CSS custom properties you can override." },
            ]}
            animated={false}
          />
        </ComponentPreview>
      </div>

      {/* Props */}
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Props</h2>
        <PropsTable props={props} />
      </div>
    </div>
  );
}
