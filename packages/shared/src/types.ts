import type { ReactNode } from "react";

/** Common action/link prop used across section components */
export interface ActionProps {
  label: string;
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "secondary" | "outline" | "ghost";
  target?: "_blank" | "_self";
}

/** Image prop for section components */
export interface ImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
}

/** Section theme */
export type Theme = "light" | "dark";

/** Component size variants */
export type Size = "sm" | "md" | "lg" | "xl";

/** Container max-width variants */
export type ContainerSize = "sm" | "md" | "lg" | "xl" | "2xl" | "full";

/** Section vertical spacing */
export type SectionSpacing = "none" | "sm" | "md" | "lg" | "xl";

/** Text alignment */
export type Alignment = "left" | "center" | "right";

/** Base props shared by all section components */
export interface BaseSectionProps {
  /** Section theme override */
  theme?: Theme;
  /** Additional CSS classes */
  className?: string;
  /** Custom children content */
  children?: ReactNode;
}

/** Base props for section header elements */
export interface SectionHeaderProps {
  /** Top badge/label */
  pill?: string;
  /** Main heading */
  title: string;
  /** Supporting description */
  subtitle?: string;
  /** Text alignment */
  align?: Alignment;
  /** Additional CSS classes */
  className?: string;
}
