export interface DatePickerProps {
  /** Controlled selected date */
  value?: Date;
  /** Default selected date (uncontrolled) */
  defaultValue?: Date;
  /** Callback when the selected date changes */
  onChange?: (date: Date | undefined) => void;
  /** Label text shown above the input */
  label?: string;
  /** Placeholder text when no date is selected */
  placeholder?: string;
  /** Error message (also applies error state styling) */
  error?: string;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Whether the date picker is disabled */
  disabled?: boolean;
  /** Size of the input field */
  size?: "sm" | "md" | "lg";
  /** Additional class names */
  className?: string;
}
