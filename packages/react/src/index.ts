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

export { Checkbox } from "./primitives/checkbox/Checkbox";
export type { CheckboxProps } from "./primitives/checkbox/checkbox.types";

export { Switch } from "./primitives/switch/Switch";
export type { SwitchProps } from "./primitives/switch/switch.types";

export { Textarea } from "./primitives/textarea/Textarea";
export type { TextareaProps } from "./primitives/textarea/textarea.types";

export { Spinner } from "./primitives/spinner/Spinner";
export type { SpinnerProps } from "./primitives/spinner/spinner.types";

export { Modal } from "./primitives/modal/Modal";
export type { ModalProps } from "./primitives/modal/modal.types";

export { Tooltip } from "./primitives/tooltip/Tooltip";
export type { TooltipProps } from "./primitives/tooltip/tooltip.types";

export { Tabs } from "./primitives/tabs/Tabs";
export type { TabsProps, TabItem } from "./primitives/tabs/tabs.types";

export { Skeleton } from "./primitives/skeleton/Skeleton";
export type { SkeletonProps } from "./primitives/skeleton/skeleton.types";

export { Select } from "./primitives/select/Select";
export type { SelectProps, SelectOption } from "./primitives/select/select.types";

export { Progress } from "./primitives/progress/Progress";
export type { ProgressProps } from "./primitives/progress/progress.types";

export { Breadcrumbs } from "./primitives/breadcrumbs/Breadcrumbs";
export type { BreadcrumbsProps, BreadcrumbItem } from "./primitives/breadcrumbs/breadcrumbs.types";

export { Kbd } from "./primitives/kbd/Kbd";
export type { KbdProps } from "./primitives/kbd/kbd.types";

export { Chip } from "./primitives/chip/Chip";
export type { ChipProps } from "./primitives/chip/chip.types";

export { Pagination } from "./primitives/pagination/Pagination";
export type { PaginationProps } from "./primitives/pagination/pagination.types";

export { Alert } from "./primitives/alert/Alert";
export type { AlertProps, AlertVariant } from "./primitives/alert/alert.types";

export { Drawer } from "./primitives/drawer/Drawer";
export type { DrawerProps, DrawerPosition, DrawerSize } from "./primitives/drawer/drawer.types";

export { Dropdown } from "./primitives/dropdown/Dropdown";
export type { DropdownProps, DropdownItem, DropdownAlign } from "./primitives/dropdown/dropdown.types";

export { Toast } from "./primitives/toast/Toast";
export { ToastProvider, useToast } from "./primitives/toast/ToastProvider";
export type {
  ToastProps,
  ToastOptions,
  ToastEntry,
  ToastVariant,
  ToastContextValue,
  ToastProviderProps,
} from "./primitives/toast/toast.types";

export { Table } from "./primitives/table/Table";
export type { TableProps, TableColumn } from "./primitives/table/table.types";

export { RadioGroup } from "./primitives/radio-group/RadioGroup";
export type {
  RadioGroupProps,
  RadioOption,
  RadioGroupSize,
  RadioGroupOrientation,
} from "./primitives/radio-group/radio-group.types";

export { Slider } from "./primitives/slider/Slider";
export type { SliderProps, SliderSize, SliderColor } from "./primitives/slider/slider.types";

export { Popover } from "./primitives/popover/Popover";
export type { PopoverProps, PopoverPosition, PopoverTriggerOn } from "./primitives/popover/popover.types";

export { Snippet } from "./primitives/snippet/Snippet";
export type { SnippetProps, SnippetVariant, SnippetColor } from "./primitives/snippet/snippet.types";

export { Spacer } from "./primitives/spacer/Spacer";
export type { SpacerProps } from "./primitives/spacer/spacer.types";

export { Image } from "./primitives/image/Image";
export type { ImageProps as ImageComponentProps, ImageRadius, ImageShadow } from "./primitives/image/image.types";

export { User } from "./primitives/user/User";
export type { UserProps } from "./primitives/user/user.types";

export { Autocomplete } from "./primitives/autocomplete/Autocomplete";
export type {
  AutocompleteProps,
  AutocompleteOption,
  AutocompleteSize,
} from "./primitives/autocomplete/autocomplete.types";

export { Calendar } from "./primitives/calendar/Calendar";
export type { CalendarProps } from "./primitives/calendar/calendar.types";

export { Code } from "./primitives/code/Code";
export type { CodeProps, CodeColor, CodeSize } from "./primitives/code/code.types";

export { Link } from "./primitives/link/Link";
export type { LinkProps, LinkColor, LinkSize, LinkUnderline } from "./primitives/link/link.types";

export { Listbox } from "./primitives/listbox/Listbox";
export type {
  ListboxProps,
  ListboxItem,
  ListboxSelectionMode,
  ListboxVariant,
} from "./primitives/listbox/listbox.types";

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
