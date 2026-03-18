import type { TextareaHTMLAttributes } from "react";

export type TextareaVariant = "default" | "filled" | "ghost";
export type TextareaSize = "sm" | "md" | "lg";

export interface TextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, "size"> {
  /** Visual style variant */
  variant?: TextareaVariant;
  /** Textarea size */
  size?: TextareaSize;
  /** Label text shown above textarea */
  label?: string;
  /** Helper hint shown below textarea */
  hint?: string;
  /** Error message (also applies error state styling) */
  error?: string;
  /** Stretch to full container width (default: true) */
  fullWidth?: boolean;
}
