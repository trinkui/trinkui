import type { ReactNode } from "react";

export interface TableColumn<T> {
  /** Unique key identifying the column, used to access row data */
  key: string;
  /** Header label displayed in the column header */
  label: string;
  /** Custom render function for cell content */
  render?: (row: T) => ReactNode;
  /** Whether this column supports sorting */
  sortable?: boolean;
  /** Optional fixed width for the column */
  width?: string;
}

export interface TableProps<T> {
  /** Column definitions */
  columns: TableColumn<T>[];
  /** Array of data rows to display */
  data: T[];
  /** Whether to apply alternating row background colors */
  striped?: boolean;
  /** Whether rows highlight on hover */
  hoverable?: boolean;
  /** Whether to show cell borders */
  bordered?: boolean;
  /** Whether to use compact row padding */
  compact?: boolean;
  /** Additional CSS classes for the table wrapper */
  className?: string;
}
