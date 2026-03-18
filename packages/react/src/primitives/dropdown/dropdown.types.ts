import type { ReactNode } from "react";

export type DropdownAlign = "start" | "center" | "end";

export interface DropdownItem {
  /** Text label for the menu item */
  label: string;
  /** Optional icon displayed before the label */
  icon?: ReactNode;
  /** Callback fired when the item is clicked */
  onClick?: () => void;
  /** Whether the item is disabled */
  disabled?: boolean;
  /** Whether the item is styled as a destructive/danger action */
  danger?: boolean;
  /** Whether to render a divider line instead of a clickable item */
  divider?: boolean;
}

export interface DropdownProps {
  /** The element that triggers the dropdown menu on click */
  trigger: ReactNode;
  /** Array of menu items to display */
  items: DropdownItem[];
  /** Horizontal alignment of the dropdown relative to the trigger */
  align?: DropdownAlign;
  /** Additional CSS classes for the dropdown menu container */
  className?: string;
}
