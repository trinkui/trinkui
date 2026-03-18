import { Section, Container } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const spacingCode = `import { Section, Container } from "@trinkui/react";

export default function Example() {
  return (
    <div className="space-y-2">
      <Section spacing="sm">
        <Container>
          <p className="text-center text-sm">spacing="sm"</p>
        </Container>
      </Section>
      <Section spacing="md">
        <Container>
          <p className="text-center text-sm">spacing="md" (default)</p>
        </Container>
      </Section>
      <Section spacing="lg">
        <Container>
          <p className="text-center text-sm">spacing="lg"</p>
        </Container>
      </Section>
    </div>
  );
}`;

const themeCode = `import { Section, Container } from "@trinkui/react";

export default function Example() {
  return (
    <div>
      <Section theme="light">
        <Container>
          <p className="text-center text-sm py-4">theme="light"</p>
        </Container>
      </Section>
      <Section theme="dark">
        <Container>
          <p className="text-center text-sm py-4">theme="dark"</p>
        </Container>
      </Section>
      <Section surface>
        <Container>
          <p className="text-center text-sm py-4">surface (alternate background)</p>
        </Container>
      </Section>
    </div>
  );
}`;

const props = [
  {
    name: "spacing",
    type: '"none" | "sm" | "md" | "lg" | "xl"',
    default: '"md"',
    description: "Vertical padding applied to the section",
  },
  {
    name: "theme",
    type: '"light" | "dark"',
    description: "Color theme for the section — sets background and text colors",
  },
  {
    name: "surface",
    type: "boolean",
    default: "false",
    description: "Use the surface background color instead of the main background",
  },
  {
    name: "as",
    type: '"section" | "div" | "article" | "main"',
    default: '"section"',
    description: "HTML element to render as",
  },
  {
    name: "className",
    type: "string",
    description: "Additional CSS classes",
  },
];

export default function SectionPage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Layout</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Section</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Full-width section wrapper that handles vertical spacing, background color, and theme toggling for landing page sections.
        </p>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Spacing</h2>
        <ComponentPreview code={spacingCode}>
          <div className="space-y-2">
            <Section spacing="sm">
              <Container>
                <p className="text-center text-sm text-[rgb(var(--trinkui-muted))]">spacing=&quot;sm&quot;</p>
              </Container>
            </Section>
            <Section spacing="md" surface>
              <Container>
                <p className="text-center text-sm text-[rgb(var(--trinkui-muted))]">spacing=&quot;md&quot; (default)</p>
              </Container>
            </Section>
            <Section spacing="lg">
              <Container>
                <p className="text-center text-sm text-[rgb(var(--trinkui-muted))]">spacing=&quot;lg&quot;</p>
              </Container>
            </Section>
          </div>
        </ComponentPreview>
      </div>

      <div>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Themes</h2>
        <ComponentPreview code={themeCode}>
          <div>
            <Section theme="light" spacing="sm">
              <Container>
                <p className="py-4 text-center text-sm text-[rgb(var(--trinkui-muted))]">theme=&quot;light&quot;</p>
              </Container>
            </Section>
            <Section theme="dark" spacing="sm">
              <Container>
                <p className="py-4 text-center text-sm text-[rgb(var(--trinkui-muted))]">theme=&quot;dark&quot;</p>
              </Container>
            </Section>
            <Section surface spacing="sm">
              <Container>
                <p className="py-4 text-center text-sm text-[rgb(var(--trinkui-muted))]">surface (alternate background)</p>
              </Container>
            </Section>
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
