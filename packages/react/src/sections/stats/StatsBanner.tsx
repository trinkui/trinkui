"use client";

import React, { forwardRef } from "react";
import type { StatsBaseProps } from "./stats.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { StaggerChildren } from "../../animation/StaggerChildren";
import { cn } from "../../utils/cn";

export interface StatsBannerProps extends StatsBaseProps {}

/**
 * Full-width dark stats banner — ideal as a proof section between Hero and Features.
 * Stats are laid out horizontally with staggered entrance animation.
 *
 * @example
 * <StatsBanner
 *   stats={[
 *     { value: "10K+", label: "Developers" },
 *     { value: "99.9%", label: "Uptime" },
 *     { value: "50ms", label: "Avg response" },
 *     { value: "4.9★", label: "Rating" },
 *   ]}
 * />
 */
export const StatsBanner = forwardRef<HTMLElement, StatsBannerProps>(
  (
    {
      pill,
      title,
      subtitle,
      stats,
      animated = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Section
        ref={ref}
        theme="dark"
        spacing="md"
        className={cn("relative", className)}
        {...props}
      >
        <Container size="xl">
          <div className="flex flex-col gap-8">
            {/* Optional title/subtitle */}
            {(title || subtitle) && (
              <div className="text-center">
                {pill && (
                  <span
                    className={cn(
                      "mb-4 inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
                      "border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]",
                      "text-[rgb(var(--trinkui-muted))]"
                    )}
                  >
                    {pill}
                  </span>
                )}
                {title && (
                  <h2
                    className={cn(
                      "font-heading text-3xl font-bold tracking-tight sm:text-4xl",
                      "text-[rgb(var(--trinkui-fg))]"
                    )}
                  >
                    {title}
                  </h2>
                )}
                {subtitle && (
                  <p className="mt-4 text-lg text-[rgb(var(--trinkui-muted))]">
                    {subtitle}
                  </p>
                )}
              </div>
            )}

            {/* Stats row */}
            <StaggerChildren
              staggerDelay={0.1}
              initialDelay={0}
              scrollTrigger
              childAnimation="fadeIn"
              className="grid grid-cols-2 gap-8 sm:grid-cols-4"
            >
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="flex flex-col items-center gap-1 text-center"
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
                  <span className="text-sm font-medium text-[rgb(var(--trinkui-muted))] uppercase tracking-wide">
                    {stat.label}
                  </span>
                  {stat.description && (
                    <p className="mt-1 text-xs text-[rgb(var(--trinkui-muted))]">
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

StatsBanner.displayName = "StatsBanner";
