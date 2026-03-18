import React, { forwardRef } from "react";
import type { SectionSpacing, Theme } from "@trinkui/shared";
import { SECTION_SPACING } from "@trinkui/shared";
import { cn } from "../utils/cn";

export interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  /** Vertical padding size */
  spacing?: SectionSpacing;
  /** Section theme — switches light/dark background */
  theme?: Theme;
  /** Use alternate surface background instead of main background */
  surface?: boolean;
  /** HTML tag to render */
  as?: "section" | "div" | "article" | "main";
}

/**
 * Section wrapper component for landing page sections.
 * Handles vertical spacing, background color, and theme toggling.
 *
 * @example
 * <Section spacing="lg" theme="dark">
 *   <Container>...</Container>
 * </Section>
 */
export const Section = forwardRef<HTMLElement, SectionProps>(
  (
    {
      spacing = "md",
      theme,
      surface = false,
      as: Tag = "section",
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Tag
        ref={ref as React.Ref<HTMLDivElement>}
        data-theme={theme}
        className={cn(
          "w-full",
          SECTION_SPACING[spacing],
          theme === "dark" && "dark bg-[rgb(var(--trinkui-bg))] text-[rgb(var(--trinkui-fg))]",
          theme === "light" && "bg-[rgb(var(--trinkui-bg))] text-[rgb(var(--trinkui-fg))]",
          !theme && surface && "bg-[rgb(var(--trinkui-surface))]",
          !theme && !surface && "bg-[rgb(var(--trinkui-bg))]",
          className
        )}
        {...props}
      >
        {children}
      </Tag>
    );
  }
);

Section.displayName = "Section";
