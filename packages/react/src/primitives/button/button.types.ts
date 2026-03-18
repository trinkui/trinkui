import type { ButtonHTMLAttributes, ReactNode } from "react";

export type ButtonVariant = "primary" | "secondary" | "outline" | "ghost" | "destructive";
export type ButtonSize = "sm" | "md" | "lg" | "xl";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style variant */
  variant?: ButtonVariant;
  /** Size of the button */
  size?: ButtonSize;
  /** Stretch to full container width */
  fullWidth?: boolean;
  /** Show loading state */
  loading?: boolean;
  /** Icon before label */
  leftIcon?: ReactNode;
  /** Icon after label */
  rightIcon?: ReactNode;
  /** Render as child element (asChild pattern) */
  asChild?: boolean;
}
