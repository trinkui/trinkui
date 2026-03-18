export type RadioGroupSize = "sm" | "md" | "lg";
export type RadioGroupOrientation = "vertical" | "horizontal";

export interface RadioOption {
  /** Display label for the radio option */
  label: string;
  /** Value associated with this option */
  value: string;
  /** Optional description text displayed below the label */
  description?: string;
  /** Whether this specific option is disabled */
  disabled?: boolean;
}

export interface RadioGroupProps {
  /** Array of radio options to render */
  options: RadioOption[];
  /** Currently selected value (controlled) */
  value?: string;
  /** Default selected value (uncontrolled) */
  defaultValue?: string;
  /** Callback fired when the selected value changes */
  onChange?: (value: string) => void;
  /** Optional group label displayed above the radio options */
  label?: string;
  /** Layout direction of the radio options */
  orientation?: RadioGroupOrientation;
  /** Size of the radio buttons */
  size?: RadioGroupSize;
  /** Whether the entire group is disabled */
  disabled?: boolean;
  /** Additional CSS classes for the root element */
  className?: string;
}
