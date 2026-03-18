export type CheckboxSize = "sm" | "md" | "lg";
export type CheckboxColor = "primary" | "secondary" | "success" | "warning" | "danger";

export interface CheckboxProps {
  /** Whether the checkbox is checked (controlled) */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Called when the checked state changes */
  onChange?: (checked: boolean) => void;
  /** Label text displayed next to the checkbox */
  label?: string;
  /** Description text displayed below the label */
  description?: string;
  /** Whether the checkbox is disabled */
  disabled?: boolean;
  /** Size of the checkbox */
  size?: CheckboxSize;
  /** Color scheme of the checkbox */
  color?: CheckboxColor;
  /** Additional class name */
  className?: string;
}
