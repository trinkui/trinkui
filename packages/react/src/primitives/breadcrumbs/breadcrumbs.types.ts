import type { HTMLAttributes, ReactNode } from "react";

export interface BreadcrumbItem {
  /** Display text for the breadcrumb */
  label: string;
  /** URL the breadcrumb links to. If omitted, renders as plain text (current page). */
  href?: string;
}

export type BreadcrumbsSize = "sm" | "md" | "lg";

export interface BreadcrumbsProps extends HTMLAttributes<HTMLElement> {
  /** Ordered list of breadcrumb items */
  items: BreadcrumbItem[];
  /** Custom separator between items (defaults to a chevron icon) */
  separator?: ReactNode;
  /** Text size of the breadcrumbs */
  size?: BreadcrumbsSize;
  /** Additional class names */
  className?: string;
}
