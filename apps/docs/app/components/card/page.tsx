import { Card, CardHeader, CardBody, CardFooter, Button } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { Card, CardHeader, CardBody, CardFooter, Button } from "@trinkui/react";

export default function Example() {
  return (
    <div className="flex flex-wrap gap-4 p-8">
      <Card variant="default" className="w-64">
        <CardHeader><h3 className="font-semibold">Card Title</h3></CardHeader>
        <CardBody><p className="text-sm text-[rgb(var(--trinkui-muted))]">Card content goes here.</p></CardBody>
        <CardFooter><Button size="sm" variant="outline">Action</Button></CardFooter>
      </Card>
      <Card variant="outlined" className="w-64">
        <CardHeader><h3 className="font-semibold">Bordered</h3></CardHeader>
        <CardBody><p className="text-sm text-[rgb(var(--trinkui-muted))]">Bordered card variant.</p></CardBody>
      </Card>
    </div>
  );
}`;

const props = [
  {
    name: "variant",
    type: '"default" | "outlined" | "elevated" | "ghost"',
    default: '"default"',
    description: "Visual style variant",
  },
  {
    name: "interactive",
    type: "boolean",
    default: "false",
    description: "Apply hover and focus ring styles",
  },
  {
    name: "fullHeight",
    type: "boolean",
    default: "false",
    description: "Stretch card to full container height",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
  {
    name: "children",
    type: "ReactNode",
    description: "Card content",
  },
];

export default function CardPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Primitives</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Card</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Flexible card container with optional image, header, body, and footer sub-components.
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
          <div className="flex flex-wrap gap-4 p-8">
            <Card variant="default" className="w-64">
              <CardHeader><h3 className="font-semibold">Card Title</h3></CardHeader>
              <CardBody><p className="text-sm text-[rgb(var(--trinkui-muted))]">Card content goes here.</p></CardBody>
              <CardFooter><Button size="sm" variant="outline">Action</Button></CardFooter>
            </Card>
            <Card variant="outlined" className="w-64">
              <CardHeader><h3 className="font-semibold">Bordered</h3></CardHeader>
              <CardBody><p className="text-sm text-[rgb(var(--trinkui-muted))]">Bordered card variant.</p></CardBody>
            </Card>
          </div>
        </ComponentPreview>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Props</h2>
        <PropsTable props={props} />
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Sub-components</h2>
        <p className="text-sm text-[rgb(var(--trinkui-muted))]">
          Card exports sub-components for structured layouts:{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">CardHeader</code>,{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">CardBody</code>,{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">CardFooter</code>, and{" "}
          <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">CardImage</code>.
        </p>
      </div>
    </div>
  );
}
