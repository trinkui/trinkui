"use client";

import React, { forwardRef } from "react";
import type { StatsBaseProps } from "./stats.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { SectionHeader } from "../../layout/SectionHeader";
import { SlideUp } from "../../animation/SlideUp";
import { StaggerChildren } from "../../animation/StaggerChildren";
import { cn } from "../../utils/cn";

export interface StatsGridProps extends StatsBaseProps {
  /** Show dividers between stat items on larger screens (default: true) */
  dividers?: boolean;
}

/**
 * 4-column responsive stats grid (2 cols mobile, 4 cols desktop).
 * Each stat shows a large bold number in primary color, label, and optional description.
 * Staggered entrance animation with optional dividers.
 *
 * @example
 * <StatsGrid
 *   title="Trusted by thousands"
 *   stats={[
 *     { value: "10K+", label: "Users", description: "Active monthly users" },
 *     { value: "99%", label: "Uptime", description: "Last 12 months" },
 *     { value: "$2M", label: "Revenue", description: "Generated for customers" },
 *     { value: "4.9", label: "Rating", description: "Average review score" },
 *   ]}
 * />
 */
export const StatsGrid = forwardRef<HTMLElement, StatsGridProps>(
  (
    {
      pill,
      title,
      subtitle,
      stats,
      theme,
      animated = true,
      dividers = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Wrapper = animated ? SlideUp : React.Fragment;
    const wrapperProps = animated ? { scrollTrigger: true } : {};

    return (
      <Section
        ref={ref}
        theme={theme}
        spacing="lg"
        className={cn("relative", className)}
        {...props}
      >
        <Container size="xl">
          <div className="flex flex-col gap-12">
            {/* Optional header */}
            {(pill || title || subtitle) && (
              <Wrapper {...(wrapperProps as object)} delay={0}>
                <SectionHeader
                  pill={pill}
                  title={title ?? ""}
                  subtitle={subtitle}
                  align="center"
                />
              </Wrapper>
            )}

            {/* Stats grid */}
            <StaggerChildren
              staggerDelay={0.1}
              initialDelay={0}
              scrollTrigger
              childAnimation="slideUp"
              className={cn(
                "grid grid-cols-2 lg:grid-cols-4",
                dividers &&
                  "divide-y divide-[rgb(var(--trinkui-border))] lg:divide-x lg:divide-y-0"
              )}
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className={cn(
                    "flex flex-col items-center gap-2 px-6 py-8 text-center",
                    dividers && "first:pt-8 lg:first:pl-0 lg:last:pr-0"
                  )}
                >
                  {stat.icon && (
                    <div className="mb-1 text-[rgb(var(--trinkui-primary))]">
                      {stat.icon}
                    </div>
                  )}
                  <span
                    className={cn(
                      "font-heading text-4xl font-bold tracking-tight sm:text-5xl",
                      "text-[rgb(var(--trinkui-primary))]"
                    )}
                  >
                    {stat.value}
                  </span>
                  <span className="text-base font-semibold text-[rgb(var(--trinkui-fg))]">
                    {stat.label}
                  </span>
                  {stat.description && (
                    <p className="text-sm text-[rgb(var(--trinkui-muted))]">
                      {stat.description}
                    </p>
                  )}
                </div>
              ))}
            </StaggerChildren>

            {children}
          </div>
        </Container>
      </Section>
    );
  }
);

StatsGrid.displayName = "StatsGrid";
