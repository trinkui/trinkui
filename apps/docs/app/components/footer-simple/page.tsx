import { FooterSimple } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { FooterSimple } from "@trinkui/react";
export default function Example() {
  return (
    <FooterSimple
      brandName="TrinkUI"
      legalLinks={[
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ]}
      socialLinks={[
        { label: "GitHub", href: "https://github.com/trinkui/trinkui" },
        { label: "Twitter", href: "https://twitter.com/trinkui" },
      ]}
      copyright="© 2024 TrinkUI. All rights reserved."
    />
  );
}`;

const props = [
  {
    name: "logo",
    type: "ReactNode",
    required: false,
    default: "-",
    description: "Custom logo element",
  },
  {
    name: "brandName",
    type: "string",
    required: false,
    default: "-",
    description: "Brand text when no logo prop",
  },
  {
    name: "legalLinks",
    type: "FooterLink[]",
    required: false,
    default: "[]",
    description: "Legal/nav links { label, href, external? }",
  },
  {
    name: "socialLinks",
    type: "FooterLink[]",
    required: false,
    default: "[]",
    description: "Social media links { label, href }",
  },
  {
    name: "copyright",
    type: "string",
    required: false,
    default: "-",
    description: "Copyright notice text",
  },
  {
    name: "className",
    type: "string",
    required: false,
    default: "-",
    description: "Additional CSS classes",
  },
];

export default function FooterSimplePage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Other Sections</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">FooterSimple</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">Minimal single-row footer with brand, legal links, social links, and copyright text.</p>
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
          <FooterSimple
            brandName="TrinkUI"
            legalLinks={[
              { label: "Privacy", href: "/privacy" },
              { label: "Terms", href: "/terms" },
            ]}
            socialLinks={[
              { label: "GitHub", href: "https://github.com/trinkui/trinkui" },
              { label: "Twitter", href: "https://twitter.com/trinkui" },
            ]}
            copyright="© 2024 TrinkUI. All rights reserved."
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
