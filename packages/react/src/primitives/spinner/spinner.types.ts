export type SpinnerSize = "sm" | "md" | "lg" | "xl";
export type SpinnerColor = "primary" | "current" | "white";

export interface SpinnerProps {
  /** Size of the spinner */
  size?: SpinnerSize;
  /** Color of the spinner */
  color?: SpinnerColor;
  /** Accessible label for screen readers */
  label?: string;
  /** Additional class name */
  className?: string;
}
