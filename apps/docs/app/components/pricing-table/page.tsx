import { PricingTable } from "@trinkui/react";
import { ComponentPreview } from "@/components/ComponentPreview";
import { PropsTable } from "@/components/PropsTable";

const exampleCode = `import { PricingTable } from "@trinkui/react";

export default function Example() {
  return (
    <PricingTable
      pill="Feature comparison"
      title="Compare plans"
      subtitle="Choose the plan that works best for you."
      tiers={[
        {
          name: "Free",
          price: "$0",
          period: "/month",
          description: "Perfect for side projects",
          features: [
            { label: "5 projects", included: true },
            { label: "10GB storage", included: true },
            { label: "Community support", included: true },
            { label: "Custom domain", included: false },
          ],
          cta: { label: "Get started free", href: "#" },
        },
        {
          name: "Pro",
          price: "$29",
          period: "/month",
          description: "For growing teams",
          popular: true,
          features: [
            { label: "Unlimited projects", included: true },
            { label: "100GB storage", included: true },
            { label: "Priority support", included: true },
            { label: "Custom domain", included: true },
          ],
          cta: { label: "Start free trial", href: "#" },
        },
      ]}
    />
  );
}`;

const props = [
  { name: "pill", type: "string", description: "Top badge label" },
  { name: "title", type: "string", required: true, description: "Section headline" },
  { name: "subtitle", type: "string", description: "Supporting description" },
  { name: "tiers", type: "PricingTier[]", default: "[]", description: "Array of pricing tier objects" },
  { name: "animated", type: "boolean", default: "true", description: "Enable entrance animations" },
  { name: "theme", type: '"light" | "dark"', description: "Section color theme" },
  { name: "className", type: "string", description: "Additional CSS classes" },
];

export default function PricingTablePage() {
  return (
    <div className="space-y-8">
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Pricing</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">PricingTable</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          Comparison table layout for pricing tiers. Rows represent features; columns represent tiers. Popular tier is highlighted.
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
          <PricingTable
            pill="Feature comparison"
            title="Compare plans"
            subtitle="Choose the plan that works best for you."
            tiers={[
              {
                name: "Free",
                price: "$0",
                period: "/month",
                description: "Perfect for side projects",
                features: [
                  { label: "5 projects", included: true },
                  { label: "10GB storage", included: true },
                  { label: "Community support", included: true },
                  { label: "Custom domain", included: false },
                ],
                cta: { label: "Get started free", href: "#" },
              },
              {
                name: "Pro",
                price: "$29",
                period: "/month",
                description: "For growing teams",
                popular: true,
                features: [
                  { label: "Unlimited projects", included: true },
                  { label: "100GB storage", included: true },
                  { label: "Priority support", included: true },
                  { label: "Custom domain", included: true },
                ],
                cta: { label: "Start free trial", href: "#" },
              },
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
