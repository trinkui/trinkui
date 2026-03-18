import type { BaseSectionProps } from "@trinkui/shared";

export interface FAQItem {
  /** Question text */
  question: string;
  /** Answer text or ReactNode */
  answer: string;
}

export interface FAQBaseProps extends BaseSectionProps {
  /** Top badge/pill label */
  pill?: string;
  /** Main heading text */
  title: string;
  /** Supporting subtitle text */
  subtitle?: string;
  /** Array of FAQ items */
  items?: FAQItem[];
  /** Enable entrance animations (default: true) */
  animated?: boolean;
}
