import type { FormHTMLAttributes, ReactNode } from "react";

export type FormValidationMode = "onSubmit" | "onChange";

export interface FormProps extends FormHTMLAttributes<HTMLFormElement> {
  /** Callback fired with form data when the form passes native HTML5 validation */
  onValidSubmit?: (data: Record<string, FormDataEntryValue>) => void;
  /** When to validate the form. Default: "onSubmit" */
  validationMode?: FormValidationMode;
  /** Additional CSS class names */
  className?: string;
  /** Form content (inputs, buttons, etc.) */
  children: ReactNode;
}

export interface FormFieldProps {
  /** Label text displayed above the field */
  label?: string;
  /** Error message displayed below the field */
  error?: string;
  /** Hint text displayed below the field (hidden when error is present) */
  hint?: string;
  /** Show a required indicator next to the label */
  required?: boolean;
  /** The form control to wrap */
  children: ReactNode;
  /** Additional CSS class names */
  className?: string;
}
