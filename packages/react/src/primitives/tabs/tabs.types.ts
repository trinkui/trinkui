import type { ReactNode } from "react";

export interface TabItem {
  /** Unique key identifying the tab */
  key: string;
  /** Label displayed in the tab button */
  label: string;
  /** Content rendered when the tab is active */
  content: ReactNode;
}

export type TabsVariant = "underline" | "solid" | "bordered";
export type TabsSize = "sm" | "md" | "lg";

export interface TabsProps {
  /** Array of tab items to render */
  items: TabItem[];
  /** Key of the initially active tab */
  defaultKey?: string;
  /** Visual variant of the tab bar */
  variant?: TabsVariant;
  /** Size of the tab buttons */
  size?: TabsSize;
  /** Whether tabs stretch to fill the container width */
  fullWidth?: boolean;
  /** Additional CSS classes for the root element */
  className?: string;
}
