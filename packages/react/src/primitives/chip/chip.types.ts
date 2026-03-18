import type { HTMLAttributes, ReactNode } from "react";

export type ChipVariant = "solid" | "bordered" | "flat" | "dot";
export type ChipColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
export type ChipSize = "sm" | "md" | "lg";

export interface ChipProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: ChipVariant;
  /** Color scheme */
  color?: ChipColor;
  /** Size of the chip */
  size?: ChipSize;
  /** Callback when the dismiss button is clicked. Shows a close icon when provided. */
  onDismiss?: () => void;
  /** Avatar or icon rendered at the start */
  avatar?: ReactNode;
  /** Content rendered before the label */
  startContent?: ReactNode;
  /** Content rendered after the label */
  endContent?: ReactNode;
  /** The chip label */
  children: ReactNode;
  /** Additional class names */
  className?: string;
}
