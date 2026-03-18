import type { BaseSectionProps } from "@trinkui/shared";

export interface LogoItem {
  /** Logo image src */
  src: string;
  /** Company name (used as alt text) */
  name: string;
  /** Optional link */
  href?: string;
}

export interface LogoCloudBaseProps extends BaseSectionProps {
  /** Label above logos ("Trusted by" or "Used by teams at") */
  label?: string;
  logos: LogoItem[];
  animated?: boolean;
  /** Show logos in a marquee/scroll animation */
  marquee?: boolean;
}
