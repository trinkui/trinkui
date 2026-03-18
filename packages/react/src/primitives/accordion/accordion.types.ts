import type { ReactNode } from "react";

export interface AccordionItem {
  /** Unique identifier */
  id: string;
  /** Trigger/header content */
  trigger: ReactNode;
  /** Panel/body content */
  content: ReactNode;
  /** Whether this item starts open */
  defaultOpen?: boolean;
  /** Whether this item is disabled */
  disabled?: boolean;
}

export interface AccordionProps {
  /** Array of accordion items */
  items: AccordionItem[];
  /** Allow multiple items open at once */
  allowMultiple?: boolean;
  /** Visual variant */
  variant?: "default" | "bordered" | "separated";
  /** Additional CSS classes */
  className?: string;
}
