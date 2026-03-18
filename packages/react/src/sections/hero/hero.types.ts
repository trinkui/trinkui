import type { BaseSectionProps, ActionProps, ImageProps } from "@trinkui/shared";

export interface HeroBaseProps extends BaseSectionProps {
  /** Top badge/pill label */
  pill?: string;
  /** Main headline */
  title: string;
  /** Supporting description */
  subtitle?: string;
  /** Primary call-to-action */
  primaryAction?: ActionProps;
  /** Secondary call-to-action */
  secondaryAction?: ActionProps;
  /** Hero image */
  image?: ImageProps;
  /** Whether to disable entrance animations */
  animated?: boolean;
}
