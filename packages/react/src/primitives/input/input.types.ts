import type { InputHTMLAttributes } from "react";

export type InputVariant = "default" | "filled" | "ghost";
export type InputSize = "sm" | "md" | "lg";

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, "size"> {
  /** Visual style variant */
  variant?: InputVariant;
  /** Input size */
  size?: InputSize;
  /** Label text shown above input */
  label?: string;
  /** Helper hint shown below input */
  hint?: string;
  /** Error message (also applies error state styling) */
  error?: string;
  /** Icon or element rendered on the left inside the input */
  leftSlot?: React.ReactNode;
  /** Icon or element rendered on the right inside the input */
  rightSlot?: React.ReactNode;
  /** Stretch to full container width (default: true) */
  fullWidth?: boolean;
}
