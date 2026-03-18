import type { BaseSectionProps } from "@trinkui/shared";

export interface Testimonial {
  /** Quote text */
  quote: string;
  /** Author name */
  author: string;
  /** Author title / company */
  role?: string;
  /** Author avatar image */
  avatar?: { src: string; alt: string };
  /** Rating (1-5) */
  rating?: number;
  /** Company logo */
  companyLogo?: { src: string; alt: string };
}

export interface TestimonialsBaseProps extends BaseSectionProps {
  /** Top badge label */
  pill?: string;
  /** Section headline */
  title: string;
  /** Supporting description */
  subtitle?: string;
  /** Array of testimonials */
  testimonials?: Testimonial[];
  /** Enable entrance animations (default: true) */
  animated?: boolean;
}
