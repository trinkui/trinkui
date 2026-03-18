import type { BaseSectionProps } from "@trinkui/shared";

export interface StatItem {
  /** The numeric value or string ("10K+", "$2M", "99%") */
  value: string;
  /** Stat label */
  label: string;
  /** Optional description */
  description?: string;
  /** Optional icon */
  icon?: React.ReactNode;
}

export interface StatsBaseProps extends BaseSectionProps {
  pill?: string;
  title?: string;
  subtitle?: string;
  stats: StatItem[];
  animated?: boolean;
}
