import type { BaseSectionProps, ActionProps } from "@trinkui/shared";

export interface PricingFeature {
  /** Feature label */
  label: string;
  /** Whether this tier includes the feature */
  included: boolean;
  /** Optional note about the feature */
  note?: string;
}

export interface PricingTier {
  /** Tier name (Free, Pro, Enterprise) */
  name: string;
  /** Price display string ("$29", "Free", "Custom") */
  price: string;
  /** Billing period ("per month", "per year", "") */
  period?: string;
  /** Short description */
  description?: string;
  /** List of features */
  features: PricingFeature[];
  /** CTA button */
  cta: ActionProps;
  /** Whether this tier is highlighted as recommended */
  popular?: boolean;
  /** Badge text when popular=true (default: "Most popular") */
  popularLabel?: string;
}

export interface PricingBaseProps extends BaseSectionProps {
  /** Top badge/pill label */
  pill?: string;
  /** Main heading text */
  title: string;
  /** Supporting subtitle text */
  subtitle?: string;
  /** Array of pricing tiers */
  tiers?: PricingTier[];
  /** Enable entrance animations (default: true) */
  animated?: boolean;
}
