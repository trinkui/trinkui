import { cn } from "@/lib/cn";

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
        "overflow-hidden rounded-xl border border-[rgb(var(--trinkui-border)/0.6)]",
        "bg-[rgb(var(--trinkui-surface)/0.3)]",
        className
      )}
    >
      <table className="w-full text-sm">
        <thead>
          <tr className="border-b border-[rgb(var(--trinkui-border)/0.5)] bg-[rgb(var(--trinkui-surface)/0.5)]">
            {["Prop", "Type", "Default", "Description"].map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left text-[11px] font-semibold uppercase tracking-widest text-[rgb(var(--trinkui-muted)/0.7)]"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-[rgb(var(--trinkui-border)/0.3)]">
          {props.map((row) => (
            <tr
              key={row.name}
              className="bg-transparent transition-colors duration-150 hover:bg-[rgb(var(--trinkui-border)/0.15)]"
            >
              <td className="px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="font-mono text-[13px] text-[rgb(var(--trinkui-primary))]">
                    {row.name}
                  </span>
                  {row.required && (
                    <span
                      className={cn(
                        "inline-flex items-center rounded-full px-1.5 py-0.5",
                        "text-[10px] font-medium leading-none",
                        "bg-[rgba(251,146,60,0.12)] text-[rgb(var(--trinkui-accent))]",
                        "border border-[rgba(251,146,60,0.2)]"
                      )}
                    >
                      required
                    </span>
                  )}
                </div>
              </td>
              <td className="px-4 py-3">
                <span
                  className={cn(
                    "inline-block rounded-md px-2 py-0.5 font-mono text-xs",
                    "bg-[rgb(var(--trinkui-border)/0.3)] text-[rgb(var(--trinkui-accent)/0.9)]",
                    "border border-[rgb(var(--trinkui-border)/0.3)]"
                  )}
                >
                  {row.type}
                </span>
              </td>
              <td className="px-4 py-3">
                {row.default ? (
                  <span className="font-mono text-xs text-[rgb(var(--trinkui-secondary-fg)/0.6)]">
                    {row.default}
                  </span>
                ) : (
                  <span className="text-[rgb(var(--trinkui-muted)/0.3)]">&mdash;</span>
                )}
              </td>
              <td className="px-4 py-3 text-[13px] text-[rgb(var(--trinkui-secondary-fg)/0.7)]">
                {row.description}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
