import type { ReactNode } from "react";

export type AlertVariant = "info" | "success" | "warning" | "danger";

export interface AlertProps {
  /** Visual style variant indicating the alert type */
  variant?: AlertVariant;
  /** Optional title displayed prominently at the top of the alert */
  title?: string;
  /** Optional description text displayed below the title */
  description?: string;
  /** Optional icon displayed on the left side of the alert */
  icon?: ReactNode;
  /** Whether the alert can be dismissed with a close button */
  dismissible?: boolean;
  /** Callback fired when the dismiss button is clicked */
  onDismiss?: () => void;
  /** Additional CSS classes for the alert container */
  className?: string;
  /** Optional child content rendered inside the alert body */
  children?: ReactNode;
}
