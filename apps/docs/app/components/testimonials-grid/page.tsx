import { TestimonialsGrid } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { TestimonialsGrid } from "@trinkui/react";

export default function Example() {
  return (
    <TestimonialsGrid
      title="What our customers say"
      subtitle="Trusted by engineers and teams worldwide."
      testimonials={[
        { quote: "TrinkUI saved us weeks of design work.", author: "Sarah K.", role: "CTO at Acme", rating: 5 },
        { quote: "The components are polished and accessible.", author: "James L.", role: "Lead Engineer", rating: 5 },
        { quote: "Best React UI library I've used.", author: "Maria P.", role: "Frontend Developer", rating: 5 },
      ]}
    />
  );
}`;

const props = [
  { name: "pill", type: "string", description: "Badge label shown above the headline" },
  { name: "title", type: "string", required: true, description: "Main headline text" },
  { name: "subtitle", type: "string", description: "Supporting description below the headline" },
  { name: "testimonials", type: "Testimonial[]", default: "[]", description: "Array of testimonial objects" },
  { name: "animated", type: "boolean", default: "true", description: "Enable entrance animations" },
  { name: "theme", type: '"light" | "dark"', description: "Section color theme" },
  { name: "className", type: "string", description: "Extra CSS classes for the section element" },
];

export default function TestimonialsGridPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Testimonials</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">TestimonialsGrid</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Responsive masonry-style grid of testimonial cards with quote, author, role, and optional rating.
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
          <TestimonialsGrid
            title="What our customers say"
            subtitle="Trusted by engineers and teams worldwide."
            testimonials={[
              { quote: "TrinkUI saved us weeks of design work.", author: "Sarah K.", role: "CTO at Acme", rating: 5 },
              { quote: "The components are polished and accessible.", author: "James L.", role: "Lead Engineer", rating: 5 },
              { quote: "Best React UI library I've used.", author: "Maria P.", role: "Frontend Developer", rating: 5 },
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
