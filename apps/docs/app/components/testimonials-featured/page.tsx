import { TestimonialsFeatured } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { TestimonialsFeatured } from "@trinkui/react";

export default function Example() {
  return (
    <TestimonialsFeatured
      title="Loved by developers"
      pill="Testimonials"
      testimonial={{
        quote: "TrinkUI saved us weeks of design work. The components are polished and production-ready.",
        author: "Sarah K.",
        role: "CTO at Acme",
        rating: 5,
      }}
    />
  );
}`;

const props = [
  { name: "testimonial", type: "Testimonial", required: true, description: "The single featured testimonial to display" },
  { name: "title", type: "string", description: "Optional heading shown above the quote" },
  { name: "pill", type: "string", description: "Optional pill badge label" },
  { name: "animated", type: "boolean", default: "true", description: "Enable entrance animations" },
  { name: "theme", type: '"light" | "dark"', description: "Section color theme" },
  { name: "className", type: "string", description: "Extra CSS classes for the section element" },
];

export default function TestimonialsFeaturedPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Testimonials</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">TestimonialsFeatured</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Large centered featured testimonial with quote, author details, and optional star rating.
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
          <TestimonialsFeatured
            title="Loved by developers"
            pill="Testimonials"
            testimonial={{
              quote: "TrinkUI saved us weeks of design work. The components are polished and production-ready.",
              author: "Sarah K.",
              role: "CTO at Acme",
              rating: 5,
            }}
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
