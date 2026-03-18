export type CircularProgressSize = "sm" | "md" | "lg" | "xl";
export type CircularProgressColor = "primary" | "secondary" | "success" | "warning" | "danger";

export interface CircularProgressProps {
  /** Progress value from 0 to 100. When undefined, renders an indeterminate spinner. */
  value?: number;
  /** Diameter of the circular progress indicator */
  size?: CircularProgressSize;
  /** Color of the progress arc */
  color?: CircularProgressColor;
  /** Show percentage text in the center */
  showValue?: boolean;
  /** SVG stroke width for the circle. Default: 3 */
  strokeWidth?: number;
  /** Accessible label for the progress indicator */
  label?: string;
  /** Additional CSS class names */
  className?: string;
}
