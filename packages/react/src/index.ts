// ─── Utils ───────────────────────────────────────────────────────────────────
export { cn } from "./utils/cn";
export { variants } from "./utils/variants";

// ─── Layout ──────────────────────────────────────────────────────────────────
export { Container } from "./layout/Container";
export type { ContainerProps } from "./layout/Container";

export { Section } from "./layout/Section";
export type { SectionProps } from "./layout/Section";

export { SectionHeader } from "./layout/SectionHeader";
export type { SectionHeaderProps } from "./layout/SectionHeader";

// ─── Animation ───────────────────────────────────────────────────────────────
export { FadeIn } from "./animation/FadeIn";
export type { FadeInProps } from "./animation/FadeIn";

export { SlideUp } from "./animation/SlideUp";
export type { SlideUpProps } from "./animation/SlideUp";

export { StaggerChildren } from "./animation/StaggerChildren";
export type { StaggerChildrenProps } from "./animation/StaggerChildren";

export { ScaleIn } from "./animation/ScaleIn";
export type { ScaleInProps } from "./animation/ScaleIn";

export { BlurIn } from "./animation/BlurIn";
export type { BlurInProps } from "./animation/BlurIn";

// ─── Primitives ───────────────────────────────────────────────────────────────
export { Button } from "./primitives/button/Button";
export type { ButtonProps, ButtonVariant, ButtonSize } from "./primitives/button/button.types";

export { Badge } from "./primitives/badge/Badge";
export type { BadgeProps, BadgeVariant, BadgeSize } from "./primitives/badge/Badge";

export { Input } from "./primitives/input/Input";
export type { InputProps, InputVariant, InputSize } from "./primitives/input/input.types";

export { Card, CardHeader, CardBody, CardFooter, CardImage } from "./primitives/card/Card";
export type {
  CardProps,
  CardVariant,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
  CardImageProps,
} from "./primitives/card/card.types";

export { Avatar, AvatarGroup } from "./primitives/avatar/Avatar";
export type { AvatarProps, AvatarGroupProps, AvatarSize } from "./primitives/avatar/avatar.types";

export { Accordion } from "./primitives/accordion/Accordion";
export type { AccordionProps, AccordionItem } from "./primitives/accordion/accordion.types";

export { Divider } from "./primitives/divider/Divider";
export type { DividerProps } from "./primitives/divider/Divider";

// ─── Sections — Hero ──────────────────────────────────────────────────────────
export { HeroCentered, HeroSplit, HeroMinimal } from "./sections/hero";
export type {
  HeroCenteredProps,
  HeroSplitProps,
  HeroMinimalProps,
  HeroBaseProps,
} from "./sections/hero";

// ─── Sections — Features ─────────────────────────────────────────────────────
export { FeaturesGrid, FeaturesAlternating, FeaturesList } from "./sections/features";
export type {
  FeaturesGridProps,
  FeaturesBaseProps,
  FeatureItem,
} from "./sections/features";

// ─── Sections — Pricing ──────────────────────────────────────────────────────
export { PricingCards, PricingTable } from "./sections/pricing";
export type {
  PricingCardsProps,
  PricingBaseProps,
  PricingTier,
  PricingFeature,
} from "./sections/pricing";

// ─── Sections — Testimonials ─────────────────────────────────────────────────
export { TestimonialsGrid, TestimonialsFeatured } from "./sections/testimonials";
export type {
  TestimonialsGridProps,
  TestimonialsFeaturedProps,
  TestimonialsBaseProps,
  Testimonial,
} from "./sections/testimonials";

// ─── Sections — CTA ──────────────────────────────────────────────────────────
export { CTABanner, CTACentered, CTASplit } from "./sections/cta";
export type { CTABannerProps, CTACenteredProps, CTASplitProps, CTABaseProps } from "./sections/cta";

// ─── Sections — Stats ────────────────────────────────────────────────────────
export { StatsGrid, StatsBanner } from "./sections/stats";
export type { StatsGridProps, StatsBannerProps, StatsBaseProps, StatItem } from "./sections/stats";

// ─── Sections — Logo Cloud ───────────────────────────────────────────────────
export { LogoCloud } from "./sections/logo-cloud";
export type { LogoCloudProps, LogoCloudBaseProps, LogoItem } from "./sections/logo-cloud";

// ─── Sections — FAQ ──────────────────────────────────────────────────────────
export { FAQAccordion, FAQGrid } from "./sections/faq";
export type { FAQAccordionProps, FAQBaseProps, FAQItem } from "./sections/faq";

// ─── Sections — Newsletter ───────────────────────────────────────────────────
export { NewsletterBanner, NewsletterSplit } from "./sections/newsletter";
export type {
  NewsletterBannerProps,
  NewsletterSplitProps,
  NewsletterBaseProps,
} from "./sections/newsletter";

// ─── Sections — Navbar ───────────────────────────────────────────────────────
export { NavbarSimple, NavbarSticky } from "./sections/navbar";
export type { NavbarBaseProps, NavLink } from "./sections/navbar";

// ─── Sections — Footer ───────────────────────────────────────────────────────
export { FooterSimple, FooterColumns } from "./sections/footer";
export type { FooterBaseProps, FooterLinkGroup, FooterLink } from "./sections/footer";

// ─── Shared types re-export ───────────────────────────────────────────────────
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
