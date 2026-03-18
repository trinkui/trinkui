import type { HTMLAttributes } from "react";

export type SliderSize = "sm" | "md" | "lg";
export type SliderColor = "primary" | "secondary" | "success" | "warning" | "danger";

export interface SliderProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** Current controlled value */
  value?: number;
  /** Initial uncontrolled value */
  defaultValue?: number;
  /** Called when the value changes */
  onChange?: (value: number) => void;
  /** Minimum value */
  min?: number;
  /** Maximum value */
  max?: number;
  /** Step increment */
  step?: number;
  /** Accessible label for the slider */
  label?: string;
  /** Display the current value next to the slider */
  showValue?: boolean;
  /** Size of the track and thumb */
  size?: SliderSize;
  /** Color of the filled track and thumb */
  color?: SliderColor;
  /** Disable interaction */
  disabled?: boolean;
  /** Additional class names */
  className?: string;
}
