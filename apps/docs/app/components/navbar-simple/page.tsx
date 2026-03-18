import { NavbarSimple } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { NavbarSimple } from "@trinkui/react";
export default function Example() {
  return (
    <NavbarSimple
      brandName="TrinkUI"
      links={[
        { label: "Features", href: "#features" },
        { label: "Pricing", href: "#pricing" },
        { label: "Docs", href: "/docs" },
      ]}
      primaryAction={{ label: "Get Started", href: "#" }}
      secondaryAction={{ label: "Sign In", href: "#" }}
    />
  );
}`;

const props = [
  {
    name: "logo",
    type: "ReactNode",
    required: false,
    default: "-",
    description: "Custom logo element (overrides brandName)",
  },
  {
    name: "brandName",
    type: "string",
    required: false,
    default: "-",
    description: "Brand text shown when no logo prop",
  },
  {
    name: "links",
    type: "NavLink[]",
    required: false,
    default: "[]",
    description: "Navigation links { label, href, active? }",
  },
  {
    name: "primaryAction",
    type: "ActionProps",
    required: false,
    default: "-",
    description: "Primary CTA button",
  },
  {
    name: "secondaryAction",
    type: "ActionProps",
    required: false,
    default: "-",
    description: "Secondary CTA button",
  },
  {
    name: "bordered",
    type: "boolean",
    required: false,
    default: "true",
    description: "Show bottom border",
  },
  {
    name: "blur",
    type: "boolean",
    required: false,
    default: "false",
    description: "Apply backdrop blur effect",
  },
  {
    name: "sticky",
    type: "boolean",
    required: false,
    default: "false",
    description: "Stick to top of viewport on scroll",
  },
  {
    name: "className",
    type: "string",
    required: false,
    default: "-",
    description: "Additional CSS classes",
  },
];

export default function NavbarSimplePage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Other Sections</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">NavbarSimple</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">Horizontal navigation bar with brand/logo, nav links, and CTA buttons. Collapses to hamburger on mobile.</p>
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
          <NavbarSimple
            brandName="TrinkUI"
            links={[
              { label: "Features", href: "#features" },
              { label: "Pricing", href: "#pricing" },
              { label: "Docs", href: "/docs" },
            ]}
            primaryAction={{ label: "Get Started", href: "#" }}
            secondaryAction={{ label: "Sign In", href: "#" }}
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
