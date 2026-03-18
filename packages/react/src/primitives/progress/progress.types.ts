import type { HTMLAttributes } from "react";

export type ProgressSize = "sm" | "md" | "lg";
export type ProgressColor = "primary" | "secondary" | "success" | "warning" | "danger";

export interface ProgressProps extends HTMLAttributes<HTMLDivElement> {
  /** Current progress value (0–100) */
  value: number;
  /** Height of the progress bar */
  size?: ProgressSize;
  /** Color of the progress fill */
  color?: ProgressColor;
  /** Show the numeric value as text */
  showValue?: boolean;
  /** Label text displayed above the bar */
  label?: string;
  /** Render diagonal stripes on the fill */
  striped?: boolean;
  /** Animate the stripes (requires striped to be true) */
  animated?: boolean;
  /** Additional class names */
  className?: string;
}
