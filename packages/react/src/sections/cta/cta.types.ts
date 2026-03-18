import type { BaseSectionProps, ActionProps } from "@trinkui/shared";

export interface CTABaseProps extends BaseSectionProps {
  pill?: string;
  title: string;
  subtitle?: string;
  primaryAction?: ActionProps;
  secondaryAction?: ActionProps;
  animated?: boolean;
}
