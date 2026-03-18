export interface InputOTPProps {
  /** Number of OTP digits (default: 6) */
  length?: number;
  /** Controlled OTP value */
  value?: string;
  /** Callback when the OTP value changes */
  onChange?: (value: string) => void;
  /** Callback when all digits are filled */
  onComplete?: (value: string) => void;
  /** Whether the input is disabled */
  disabled?: boolean;
  /** Error message (also applies error state styling) */
  error?: string;
  /** Auto-focus the first input on mount */
  autoFocus?: boolean;
  /** Additional class names */
  className?: string;
}
