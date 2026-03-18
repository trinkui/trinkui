export interface AutocompleteOption {
  /** Display label for the option */
  label: string;
  /** Value of the option */
  value: string;
  /** Whether the option is disabled */
  disabled?: boolean;
}

export type AutocompleteSize = "sm" | "md" | "lg";

export interface AutocompleteProps {
  /** List of options to filter and display */
  options: AutocompleteOption[];
  /** Controlled selected value */
  value?: string;
  /** Default selected value (uncontrolled) */
  defaultValue?: string;
  /** Callback when a value is selected */
  onChange?: (value: string) => void;
  /** Callback when the input text changes */
  onInputChange?: (query: string) => void;
  /** Placeholder text for the input */
  placeholder?: string;
  /** Label text shown above the input */
  label?: string;
  /** Error message (also applies error state styling) */
  error?: string;
  /** Whether the autocomplete is disabled */
  disabled?: boolean;
  /** Size of the autocomplete input */
  size?: AutocompleteSize;
  /** Additional class names */
  className?: string;
}
