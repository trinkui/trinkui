// Utils
export { cn } from "./utils/cn";
export { variants } from "./utils/variants";

// Layout
export { Container } from "./layout/Container";
export type { ContainerProps } from "./layout/Container";

export { Section } from "./layout/Section";
export type { SectionProps } from "./layout/Section";

export { SectionHeader } from "./layout/SectionHeader";
export type { SectionHeaderProps } from "./layout/SectionHeader";

// Animation
export { FadeIn } from "./animation/FadeIn";
export type { FadeInProps } from "./animation/FadeIn";

export { SlideUp } from "./animation/SlideUp";
export type { SlideUpProps } from "./animation/SlideUp";

export { StaggerChildren } from "./animation/StaggerChildren";
export type { StaggerChildrenProps } from "./animation/StaggerChildren";

// Primitives
export { Button } from "./primitives/button/Button";
export type { ButtonProps, ButtonVariant, ButtonSize } from "./primitives/button/button.types";

export { Badge } from "./primitives/badge/Badge";
export type { BadgeProps, BadgeVariant, BadgeSize } from "./primitives/badge/Badge";

// Sections — Hero
export { HeroCentered, HeroSplit, HeroMinimal } from "./sections/hero";
export type { HeroCenteredProps, HeroSplitProps, HeroMinimalProps, HeroBaseProps } from "./sections/hero";

// Re-export shared types
export type {
  ActionProps,
  ImageProps,
  Theme,
  Size,
  ContainerSize,
  SectionSpacing,
  Alignment,
  BaseSectionProps,
} from "@trinkui/shared";
