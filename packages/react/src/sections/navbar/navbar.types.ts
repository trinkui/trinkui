import type { ActionProps } from "@trinkui/shared";

export interface NavLink {
  /** Link label */
  label: string;
  /** Link href */
  href: string;
  /** Whether this link is currently active */
  active?: boolean;
  /** Sub-navigation links */
  children?: NavLink[];
}

export interface NavbarBaseProps {
  /** Logo element (image, text, or component) */
  logo?: React.ReactNode;
  /** Brand name text (shown if no logo) */
  brandName?: string;
  /** Navigation links */
  links?: NavLink[];
  /** Primary CTA button */
  primaryAction?: ActionProps;
  /** Secondary CTA */
  secondaryAction?: ActionProps;
  /** Whether navbar has a border at the bottom */
  bordered?: boolean;
  /** Whether navbar has a background blur effect */
  blur?: boolean;
  /** Make navbar sticky */
  sticky?: boolean;
  /** Additional CSS classes */
  className?: string;
}
