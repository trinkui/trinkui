import type { ReactNode } from "react";

export type DrawerPosition = "left" | "right" | "top" | "bottom";
export type DrawerSize = "sm" | "md" | "lg" | "full";

export interface DrawerProps {
  /** Whether the drawer is visible */
  open: boolean;
  /** Callback fired when the drawer should close */
  onClose: () => void;
  /** Side from which the drawer slides in */
  position?: DrawerPosition;
  /** Width (or height for top/bottom) preset of the drawer panel */
  size?: DrawerSize;
  /** Optional title displayed in the drawer header */
  title?: string;
  /** Drawer body content */
  children: ReactNode;
  /** Optional footer content (e.g. action buttons) */
  footer?: ReactNode;
  /** Whether clicking the backdrop closes the drawer */
  closeOnBackdrop?: boolean;
  /** Additional CSS classes for the drawer panel */
  className?: string;
}
