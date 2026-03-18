import { cn } from "@trinkui/react";

interface PropRow {
  name: string;
  type: string;
  default?: string;
  required?: boolean;
  description: string;
}

interface PropsTableProps {
  props: PropRow[];
  className?: string;
}

export function PropsTable({ props, className }: PropsTableProps) {
  return (
    <div
      className={cn(
        "overflow-hidden rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))]",
        className
      )}
    >
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
            {["Prop", "Type", "Default", "Description"].map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left text-xs font-semibold uppercase tracking-wider text-[rgb(var(--trinkui-muted))]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[rgb(var(--trinkui-border))]">
          {props.map((row) => (
            <tr key={row.name} className="bg-[rgb(var(--trinkui-bg))]">
              <td className="px-4 py-3">
                <span className="font-mono text-[rgb(var(--trinkui-primary))]">{row.name}</span>
                {row.required && (
                  <span className="ml-1.5 text-xs text-red-500" title="Required">
                    *
                  </span>
                )}
              </td>
              <td className="px-4 py-3">
                <span className="rounded bg-[rgb(var(--trinkui-surface))] px-1.5 py-0.5 font-mono text-xs text-[rgb(var(--trinkui-muted))]">
                  {row.type}
                </span>
              </td>
              <td className="px-4 py-3">
                {row.default ? (
                  <span className="font-mono text-xs text-[rgb(var(--trinkui-muted))]">
                    {row.default}
                  </span>
                ) : (
                  <span className="text-[rgb(var(--trinkui-muted)/0.4)]">—</span>
                )}
              </td>
              <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">{row.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
