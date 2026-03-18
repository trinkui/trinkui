import React, { forwardRef } from "react";
import type { Alignment } from "@trinkui/shared";
import { cn } from "../utils/cn";

export interface SectionHeaderProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Top badge/pill label */
  pill?: string;
  /** Main heading text */
  title: string;
  /** Supporting subtitle text */
  subtitle?: string;
  /** Text alignment */
  align?: Alignment;
  /** Heading level */
  as?: "h1" | "h2" | "h3";
}

const alignClasses: Record<Alignment, string> = {
  left: "items-start text-left",
  center: "items-center text-center",
  right: "items-end text-right",
};

/**
 * Reusable section header with pill badge, title, and subtitle.
 * Used within feature sections, pricing, FAQ, etc.
 *
 * @example
 * <SectionHeader
 *   pill="Features"
 *   title="Everything you need"
 *   subtitle="TrinkUI provides all the building blocks for a great landing page."
 *   align="center"
 * />
 */
export const SectionHeader = forwardRef<HTMLDivElement, SectionHeaderProps>(
  ({ pill, title, subtitle, align = "center", as: Heading = "h2", className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn("flex flex-col gap-4", alignClasses[align], className)}
        {...props}
      >
        {pill && (
          <span
            className={cn(
              "inline-flex items-center rounded-full border border-[rgb(var(--trinkui-border))]",
              "bg-[rgb(var(--trinkui-surface))] px-3 py-1 text-sm font-medium",
              "text-[rgb(var(--trinkui-muted))]"
            )}
          >
            {pill}
          </span>
        )}
        <Heading
          className={cn(
            "font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
            "text-[rgb(var(--trinkui-fg))]"
          )}
        >
          {title}
        </Heading>
        {subtitle && (
          <p
            className={cn(
              "max-w-2xl text-lg text-[rgb(var(--trinkui-muted))] sm:text-xl",
              align === "center" && "mx-auto"
            )}
          >
            {subtitle}
          </p>
        )}
      </div>
    );
  }
);

SectionHeader.displayName = "SectionHeader";
