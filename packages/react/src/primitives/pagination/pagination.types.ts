import type { HTMLAttributes } from "react";

export type PaginationSize = "sm" | "md" | "lg";
export type PaginationVariant = "flat" | "bordered";

export interface PaginationProps extends Omit<HTMLAttributes<HTMLElement>, "onChange"> {
  /** Total number of pages */
  total: number;
  /** Controlled active page */
  page?: number;
  /** Default active page (uncontrolled) */
  defaultPage?: number;
  /** Callback when the active page changes */
  onChange?: (page: number) => void;
  /** Number of sibling pages shown on each side of the active page */
  siblings?: number;
  /** Number of pages shown at each boundary (start/end) */
  boundaries?: number;
  /** Size of the page buttons */
  size?: PaginationSize;
  /** Visual style variant */
  variant?: PaginationVariant;
  /** Show previous/next navigation buttons */
  showControls?: boolean;
  /** Additional class names */
  className?: string;
}
