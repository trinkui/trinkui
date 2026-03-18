import type { ReactNode } from "react";

export interface ListboxItem {
  /** Unique key for the item */
  key: string;
  /** Display label for the item */
  label: string;
  /** Optional description shown below the label */
  description?: string;
  /** Optional icon rendered before the label */
  icon?: ReactNode;
  /** Whether the item is disabled */
  disabled?: boolean;
}

export type ListboxSelectionMode = "single" | "multiple";
export type ListboxVariant = "flat" | "bordered";

export interface ListboxProps {
  /** List of items to display */
  items: ListboxItem[];
  /** Controlled selected keys */
  selectedKeys?: string[];
  /** Default selected keys (uncontrolled) */
  defaultSelectedKeys?: string[];
  /** Callback when selection changes */
  onSelectionChange?: (keys: string[]) => void;
  /** Selection mode: single or multiple */
  selectionMode?: ListboxSelectionMode;
  /** Visual variant */
  variant?: ListboxVariant;
  /** Additional class names */
  className?: string;
}
