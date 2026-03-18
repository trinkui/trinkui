import type { HTMLAttributes, ReactNode } from "react";

export interface KbdProps extends HTMLAttributes<HTMLElement> {
  /** Modifier keys displayed before the main key (e.g., ["Ctrl", "Shift"]) */
  keys?: string[];
  /** The primary key or content to display */
  children: ReactNode;
  /** Additional class names */
  className?: string;
}
