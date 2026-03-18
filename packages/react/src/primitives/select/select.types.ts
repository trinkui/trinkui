import type { HTMLAttributes } from "react";

export interface SelectOption {
  /** Display label for the option */
  label: string;
  /** Value of the option */
  value: string;
  /** Whether the option is disabled */
  disabled?: boolean;
}

export type SelectSize = "sm" | "md" | "lg";
export type SelectVariant = "default" | "filled" | "ghost";

export interface SelectProps extends Omit<HTMLAttributes<HTMLDivElement>, "onChange"> {
  /** List of options to display */
  options: SelectOption[];
  /** Controlled selected value */
  value?: string;
  /** Default selected value (uncontrolled) */
  defaultValue?: string;
  /** Callback when selection changes */
  onChange?: (value: string) => void;
  /** Placeholder text when no value is selected */
  placeholder?: string;
  /** Label text shown above the select */
  label?: string;
  /** Error message (also applies error state styling) */
  error?: string;
  /** Whether the select is disabled */
  disabled?: boolean;
  /** Size of the select trigger */
  size?: SelectSize;
  /** Visual style variant */
  variant?: SelectVariant;
  /** Additional class names */
  className?: string;
}
