"use client";

import React, { useState, useCallback } from "react";
import type { TableProps, TableColumn } from "./table.types";
import { cn } from "../../utils/cn";

type SortDirection = "asc" | "desc" | null;

interface SortState {
  key: string;
  direction: SortDirection;
}

/**
 * Table primitive component.
 * Renders a semantic HTML table with optional sorting, striped rows, hover highlighting, and borders.
 *
 * @example
 * <Table
 *   columns={[
 *     { key: "name", label: "Name", sortable: true },
 *     { key: "email", label: "Email" },
 *   ]}
 *   data={[{ name: "Alice", email: "alice@example.com" }]}
 *   striped
 *   hoverable
 * />
 */
function TableInner<T extends Record<string, unknown>>(
  {
    columns,
    data,
    striped = false,
    hoverable = false,
    bordered = false,
    compact = false,
    className,
  }: TableProps<T>,
  ref: React.ForwardedRef<HTMLTableElement>
) {
  const [sort, setSort] = useState<SortState>({ key: "", direction: null });

  const handleSort = useCallback(
    (column: TableColumn<T>) => {
      if (!column.sortable) return;

      setSort((prev) => {
        if (prev.key !== column.key) {
          return { key: column.key, direction: "asc" };
        }
        if (prev.direction === "asc") {
          return { key: column.key, direction: "desc" };
        }
        return { key: "", direction: null };
      });
    },
    []
  );

  const sortedData = React.useMemo(() => {
    if (!sort.key || !sort.direction) return data;

    return [...data].sort((a, b) => {
      const aVal = a[sort.key];
      const bVal = b[sort.key];

      if (aVal == null && bVal == null) return 0;
      if (aVal == null) return 1;
      if (bVal == null) return -1;

      const aStr = String(aVal);
      const bStr = String(bVal);
      const comparison = aStr.localeCompare(bStr, undefined, { numeric: true });

      return sort.direction === "asc" ? comparison : -comparison;
    });
  }, [data, sort]);

  const cellPadding = compact ? "px-3 py-1.5" : "px-4 py-3";

  return (
    <div
      className={cn(
        "w-full overflow-x-auto",
        "rounded-[var(--trinkui-radius-md)]",
        bordered && "border border-[rgb(var(--trinkui-border))]",
        className
      )}
    >
      <table
        ref={ref}
        className="w-full border-collapse text-sm text-[rgb(var(--trinkui-fg))]"
      >
        <thead>
          <tr className="border-b border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
            {columns.map((column) => (
              <th
                key={column.key}
                scope="col"
                style={column.width ? { width: column.width } : undefined}
                className={cn(
                  cellPadding,
                  "text-left font-semibold text-[rgb(var(--trinkui-fg))]",
                  bordered && "border border-[rgb(var(--trinkui-border))]",
                  column.sortable &&
                    "cursor-pointer select-none hover:bg-[rgb(var(--trinkui-bg))]"
                )}
                onClick={() => handleSort(column)}
                aria-sort={
                  sort.key === column.key && sort.direction
                    ? sort.direction === "asc"
                      ? "ascending"
                      : "descending"
                    : undefined
                }
              >
                <span className="inline-flex items-center gap-1">
                  {column.label}
                  {column.sortable && (
                    <span
                      className="inline-flex flex-col text-[rgb(var(--trinkui-muted))]"
                      aria-hidden="true"
                    >
                      <svg
                        className={cn(
                          "h-3 w-3 -mb-0.5",
                          sort.key === column.key &&
                            sort.direction === "asc" &&
                            "text-[rgb(var(--trinkui-primary))]"
                        )}
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M8 4l4 5H4l4-5z" />
                      </svg>
                      <svg
                        className={cn(
                          "h-3 w-3 -mt-0.5",
                          sort.key === column.key &&
                            sort.direction === "desc" &&
                            "text-[rgb(var(--trinkui-primary))]"
                        )}
                        viewBox="0 0 16 16"
                        fill="currentColor"
                      >
                        <path d="M8 12l4-5H4l4 5z" />
                      </svg>
                    </span>
                  )}
                </span>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sortedData.map((row, rowIdx) => (
            <tr
              key={rowIdx}
              className={cn(
                "border-b border-[rgb(var(--trinkui-border))] last:border-b-0",
                striped &&
                  rowIdx % 2 === 1 &&
                  "bg-[rgb(var(--trinkui-surface))]",
                hoverable &&
                  "transition-colors hover:bg-[rgb(var(--trinkui-surface))]"
              )}
            >
              {columns.map((column) => (
                <td
                  key={column.key}
                  className={cn(
                    cellPadding,
                    bordered && "border border-[rgb(var(--trinkui-border))]"
                  )}
                >
                  {column.render
                    ? column.render(row)
                    : (row[column.key] as React.ReactNode)}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

/**
 * Generic Table component with forwardRef support.
 */
export const Table = React.forwardRef(TableInner) as <
  T extends Record<string, unknown>
>(
  props: TableProps<T> & { ref?: React.Ref<HTMLTableElement> }
) => React.ReactElement | null;

(Table as { displayName?: string }).displayName = "Table";
