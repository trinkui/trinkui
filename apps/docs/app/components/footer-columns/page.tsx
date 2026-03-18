import { FooterColumns } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { FooterColumns } from "@trinkui/react";
export default function Example() {
  return (
    <FooterColumns
      brandName="TrinkUI"
      description="Open-source landing page components for React."
      linkGroups={[
        {
          title: "Product",
          links: [{ label: "Features", href: "#" }, { label: "Pricing", href: "#" }],
        },
        {
          title: "Resources",
          links: [{ label: "Docs", href: "/docs" }, { label: "GitHub", href: "#" }],
        },
        {
          title: "Company",
          links: [{ label: "About", href: "#" }, { label: "Blog", href: "#" }],
        },
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
    description: "Brand text when no logo",
  },
  {
    name: "description",
    type: "string",
    required: false,
    default: "-",
    description: "Brand description shown below logo",
  },
  {
    name: "linkGroups",
    type: "FooterLinkGroup[]",
    required: false,
    default: "[]",
    description: "Link column groups { title, links[] }",
  },
  {
    name: "socialLinks",
    type: "FooterLink[]",
    required: false,
    default: "[]",
    description: "Social media links",
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

export default function FooterColumnsPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Other Sections</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">FooterColumns</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">Multi-column footer with brand/description on the left and grouped link columns on the right.</p>
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
          <FooterColumns
            brandName="TrinkUI"
            description="Open-source landing page components for React."
            linkGroups={[
              {
                title: "Product",
                links: [{ label: "Features", href: "#" }, { label: "Pricing", href: "#" }],
              },
              {
                title: "Resources",
                links: [{ label: "Docs", href: "/docs" }, { label: "GitHub", href: "#" }],
              },
              {
                title: "Company",
                links: [{ label: "About", href: "#" }, { label: "Blog", href: "#" }],
              },
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
