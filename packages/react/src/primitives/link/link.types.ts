import type { AnchorHTMLAttributes } from "react";

export type LinkColor = "primary" | "secondary" | "foreground";
export type LinkSize = "sm" | "md" | "lg";
export type LinkUnderline = "none" | "hover" | "always" | "active";

export interface LinkProps extends AnchorHTMLAttributes<HTMLAnchorElement> {
  /** Color variant of the link */
  color?: LinkColor;
  /** Size of the link text */
  size?: LinkSize;
  /** Underline behavior */
  underline?: LinkUnderline;
  /** Whether the link opens in a new tab with noopener noreferrer */
  isExternal?: boolean;
  /** Show an external link arrow icon */
  showAnchorIcon?: boolean;
  /** Additional class names */
  className?: string;
}
