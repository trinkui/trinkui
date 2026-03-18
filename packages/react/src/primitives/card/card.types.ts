import type { HTMLAttributes } from "react";

export type CardVariant = "default" | "outlined" | "elevated" | "ghost";

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  /** Visual style variant */
  variant?: CardVariant;
  /** Whether card is interactive (adds hover effect) */
  interactive?: boolean;
  /** Make card take full height of its container */
  fullHeight?: boolean;
}

export interface CardHeaderProps extends HTMLAttributes<HTMLDivElement> {}
export interface CardBodyProps extends HTMLAttributes<HTMLDivElement> {}
export interface CardFooterProps extends HTMLAttributes<HTMLDivElement> {}

export interface CardImageProps {
  /** Image source URL */
  src: string;
  /** Image alt text */
  alt: string;
  /** Image aspect ratio */
  aspectRatio?: "video" | "square" | "auto";
  /** Additional CSS classes */
  className?: string;
}
