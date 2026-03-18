import { LogoCloud } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { LogoCloud } from "@trinkui/react";
export default function Example() {
  return (
    <LogoCloud
      label="Trusted by teams at"
      logos={[
        { src: "/logos/acme.svg", name: "Acme Corp" },
        { src: "/logos/globex.svg", name: "Globex" },
        { src: "/logos/initech.svg", name: "Initech" },
        { src: "/logos/umbrella.svg", name: "Umbrella" },
      ]}
      animated={false}
    />
  );
}`;

const props = [
  {
    name: "label",
    type: "string",
    required: false,
    default: "-",
    description: "Text shown above the logo row",
  },
  {
    name: "logos",
    type: "LogoItem[]",
    required: true,
    default: "-",
    description: "Array of logo objects { src, name, href? }",
  },
  {
    name: "marquee",
    type: "boolean",
    required: false,
    default: "false",
    description: "Enable infinite horizontal scroll animation",
  },
  {
    name: "animated",
    type: "boolean",
    required: false,
    default: "true",
    description: "Enable entrance fade-in animation",
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

export default function LogoCloudPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Other Sections</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">LogoCloud</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">Displays partner or customer logos in a horizontal row or infinite marquee. Logos are grayscale by default.</p>
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
          <LogoCloud
            label="Trusted by teams at"
            logos={[
              { src: "/logos/acme.svg", name: "Acme Corp" },
              { src: "/logos/globex.svg", name: "Globex" },
              { src: "/logos/initech.svg", name: "Initech" },
              { src: "/logos/umbrella.svg", name: "Umbrella" },
            ]}
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
