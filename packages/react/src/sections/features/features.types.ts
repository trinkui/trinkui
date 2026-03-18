import type { BaseSectionProps, ActionProps } from "@trinkui/shared";

export interface FeatureItem {
  /** Icon element (emoji, SVG, or React component) */
  icon?: React.ReactNode;
  /** Feature title */
  title: string;
  /** Feature description */
  description: string;
  /** Optional link */
  href?: string;
}

export interface FeaturesBaseProps extends BaseSectionProps {
  /** Top badge label */
  pill?: string;
  /** Section headline */
  title: string;
  /** Supporting description */
  subtitle?: string;
  /** Array of feature items */
  features?: FeatureItem[];
  /** Primary CTA */
  primaryAction?: ActionProps;
  /** Enable entrance animations (default: true) */
  animated?: boolean;
}
