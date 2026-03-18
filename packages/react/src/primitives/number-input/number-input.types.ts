export interface NumberInputProps {
  /** Controlled numeric value */
  value?: number;
  /** Default value (uncontrolled) */
  defaultValue?: number;
  /** Callback when the value changes */
  onChange?: (value: number) => void;
  /** Minimum allowed value */
  min?: number;
  /** Maximum allowed value */
  max?: number;
  /** Increment/decrement step */
  step?: number;
  /** Label text shown above the input */
  label?: string;
  /** Error message (also applies error state styling) */
  error?: string;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Size of the input field */
  size?: "sm" | "md" | "lg";
  /** Hide the increment/decrement buttons */
  hideControls?: boolean;
  /** Additional class names */
  className?: string;
}
