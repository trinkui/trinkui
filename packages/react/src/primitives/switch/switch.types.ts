export type SwitchSize = "sm" | "md" | "lg";

export interface SwitchProps {
  /** Whether the switch is on (controlled) */
  checked?: boolean;
  /** Default checked state (uncontrolled) */
  defaultChecked?: boolean;
  /** Called when the switch state changes */
  onChange?: (checked: boolean) => void;
  /** Label text displayed next to the switch */
  label?: string;
  /** Whether the switch is disabled */
  disabled?: boolean;
  /** Size of the switch */
  size?: SwitchSize;
  /** Additional class name */
  className?: string;
}
