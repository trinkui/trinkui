import type { ActionProps } from "@trinkui/shared";

export interface FooterLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface FooterLinkGroup {
  /** Column title */
  title: string;
  links: FooterLink[];
}

export interface FooterBaseProps {
  /** Logo or brand name element */
  logo?: React.ReactNode;
  /** Brand name text */
  brandName?: string;
  /** Brand description */
  description?: string;
  /** Link groups (columns) */
  linkGroups?: FooterLinkGroup[];
  /** Social links */
  socialLinks?: FooterLink[];
  /** Copyright text */
  copyright?: string;
  /** Bottom legal links */
  legalLinks?: FooterLink[];
  /** Additional CSS classes */
  className?: string;
}
