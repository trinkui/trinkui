import { NewsletterBanner } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { NewsletterBanner } from "@trinkui/react";
export default function Example() {
  return (
    <NewsletterBanner
      title="Stay in the loop"
      subtitle="Get notified about new components and updates."
      inputPlaceholder="Enter your email"
      submitLabel="Subscribe"
      privacyNote="No spam, unsubscribe at any time."
      animated={false}
    />
  );
}`;

const props = [
  {
    name: "pill",
    type: "string",
    required: false,
    default: "-",
    description: "Top badge label",
  },
  {
    name: "title",
    type: "string",
    required: true,
    default: "-",
    description: "Section headline",
  },
  {
    name: "subtitle",
    type: "string",
    required: false,
    default: "-",
    description: "Supporting description",
  },
  {
    name: "inputPlaceholder",
    type: "string",
    required: false,
    default: '"Enter your email"',
    description: "Email input placeholder text",
  },
  {
    name: "submitLabel",
    type: "string",
    required: false,
    default: '"Subscribe"',
    description: "Submit button label",
  },
  {
    name: "privacyNote",
    type: "string",
    required: false,
    default: "-",
    description: "Privacy disclaimer shown below the form",
  },
  {
    name: "onSubmit",
    type: "(email: string) => void",
    required: false,
    default: "-",
    description: "Called when form is submitted with email value",
  },
  {
    name: "animated",
    type: "boolean",
    required: false,
    default: "true",
    description: "Enable entrance animations",
  },
  {
    name: "theme",
    type: '"light" | "dark"',
    required: false,
    default: "-",
    description: "Section color theme",
  },
  {
    name: "className",
    type: "string",
    required: false,
    default: "-",
    description: "Additional CSS classes",
  },
];

export default function NewsletterBannerPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Other Sections</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">NewsletterBanner</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">Full-width newsletter signup banner with email input and submit button.</p>
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
          <NewsletterBanner
            title="Stay in the loop"
            subtitle="Get notified about new components and updates."
            inputPlaceholder="Enter your email"
            submitLabel="Subscribe"
            privacyNote="No spam, unsubscribe at any time."
            animated={false}
          />
        </ComponentPreview>
      </div>
      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Props</h2>
        <PropsTable props={props} />
      </div>
    </div>
  );
}
