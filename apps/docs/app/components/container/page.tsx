import { Container } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { Container } from "@trinkui/react";

export default function Example() {
  return (
    <div className="space-y-4 py-8">
      <Container size="sm">
        <div className="rounded border border-dashed border-current p-4 text-center text-sm">
          size="sm" — max-w-2xl
        </div>
      </Container>
      <Container size="md">
        <div className="rounded border border-dashed border-current p-4 text-center text-sm">
          size="md" — max-w-4xl
        </div>
      </Container>
      <Container size="lg">
        <div className="rounded border border-dashed border-current p-4 text-center text-sm">
          size="lg" — max-w-6xl
        </div>
      </Container>
      <Container size="xl">
        <div className="rounded border border-dashed border-current p-4 text-center text-sm">
          size="xl" — max-w-7xl (default)
        </div>
      </Container>
    </div>
  );
}`;

const props = [
  {
    name: "size",
    type: '"sm" | "md" | "lg" | "xl" | "full"',
    default: '"xl"',
    description: "Max-width constraint of the container",
  },
  {
    name: "padded",
    type: "boolean",
    default: "true",
    description: "Add default horizontal padding (px-4 sm:px-6 lg:px-8)",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

export default function ContainerPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Layout</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Container</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Centered max-width wrapper that constrains content to readable line lengths and consistent page widths.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Preview</h2>
        <ComponentPreview code={exampleCode}>
          <div className="space-y-4 py-8">
            <Container size="sm">
              <div className="rounded border border-dashed border-[rgb(var(--trinkui-border))] p-4 text-center text-sm text-[rgb(var(--trinkui-muted))]">
                size=&quot;sm&quot; — max-w-2xl
              </div>
            </Container>
            <Container size="md">
              <div className="rounded border border-dashed border-[rgb(var(--trinkui-border))] p-4 text-center text-sm text-[rgb(var(--trinkui-muted))]">
                size=&quot;md&quot; — max-w-4xl
              </div>
            </Container>
            <Container size="lg">
              <div className="rounded border border-dashed border-[rgb(var(--trinkui-border))] p-4 text-center text-sm text-[rgb(var(--trinkui-muted))]">
                size=&quot;lg&quot; — max-w-6xl
              </div>
            </Container>
            <Container size="xl">
              <div className="rounded border border-dashed border-[rgb(var(--trinkui-border))] p-4 text-center text-sm text-[rgb(var(--trinkui-muted))]">
                size=&quot;xl&quot; — max-w-7xl (default)
              </div>
            </Container>
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
