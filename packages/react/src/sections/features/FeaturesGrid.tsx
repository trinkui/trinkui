"use client";

import React, { forwardRef } from "react";
import type { FeaturesBaseProps } from "./features.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { SectionHeader } from "../../layout/SectionHeader";
import { StaggerChildren } from "../../animation/StaggerChildren";
import { SlideUp } from "../../animation/SlideUp";
import { Button } from "../../primitives/button/Button";
import { featureCardStyles } from "./features.styles";
import { cn } from "../../utils/cn";

export interface FeaturesGridProps extends FeaturesBaseProps {
  /** Number of columns (default: 3) */
  columns?: 2 | 3 | 4;
  /** Card visual style */
  cardVariant?: "default" | "ghost";
}

const columnClasses: Record<2 | 3 | 4, string> = {
  2: "grid-cols-1 sm:grid-cols-2",
  3: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3",
  4: "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4",
};

/**
 * Responsive grid of feature cards with icon, title, and description.
 * Supports 2, 3, or 4 columns and staggered entrance animations.
 *
 * @example
 * <FeaturesGrid
 *   pill="Features"
 *   title="Everything you need"
 *   subtitle="TrinkUI provides all the building blocks."
 *   columns={3}
 *   features={[
 *     { icon: "⚡", title: "Fast", description: "Optimized for performance." },
 *     { icon: "🎨", title: "Beautiful", description: "Crafted with care." },
 *     { icon: "♿", title: "Accessible", description: "Built for everyone." },
 *   ]}
 * />
 */
export const FeaturesGrid = forwardRef<HTMLElement, FeaturesGridProps>(
  (
    {
      pill,
      title,
      subtitle,
      features = [],
      primaryAction,
      theme,
      animated = true,
      className,
      columns = 3,
      cardVariant = "default",
      children,
      ...props
    },
    ref
  ) => {
    const Wrapper = animated ? SlideUp : React.Fragment;
    const wrapperProps = animated ? { scrollTrigger: false } : {};

    return (
      <Section
        ref={ref}
        theme={theme}
        spacing="lg"
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        <Container size="xl">
          <div className="flex flex-col gap-12">
            {/* Section header */}
            <Wrapper {...(wrapperProps as object)} delay={0}>
              <SectionHeader
                pill={pill}
                title={title}
                subtitle={subtitle}
                align="center"
              />
            </Wrapper>

            {/* Feature cards grid */}
            {features.length > 0 && (
              <StaggerChildren
                className={cn("grid gap-6", columnClasses[columns])}
                staggerDelay={0.08}
                childAnimation="slideUp"
                scrollTrigger={animated}
              >
                {features.map((feature, index) => (
                  <div
                    key={index}
                    className={featureCardStyles({ variant: cardVariant })}
                  >
                    {feature.icon && (
                      <div className="flex h-12 w-12 items-center justify-center rounded-[var(--trinkui-radius-md)] bg-[rgb(var(--trinkui-primary)/0.1)] text-2xl text-[rgb(var(--trinkui-primary))]">
                        {feature.icon}
                      </div>
                    )}
                    <div className="flex flex-col gap-2">
                      <h3 className="font-heading text-lg font-semibold text-[rgb(var(--trinkui-fg))]">
                        {feature.href ? (
                          <a
                            href={feature.href}
                            className="hover:text-[rgb(var(--trinkui-primary))] transition-colors duration-150"
                          >
                            {feature.title}
                          </a>
                        ) : (
                          feature.title
                        )}
                      </h3>
                      <p className="text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                ))}
              </StaggerChildren>
            )}

            {/* Primary CTA */}
            {primaryAction && (
              <Wrapper {...(wrapperProps as object)} delay={0.2}>
                <div className="flex justify-center">
                  <a href={primaryAction.href} onClick={primaryAction.onClick}>
                    <Button variant="primary" size="lg">
                      {primaryAction.label}
                    </Button>
                  </a>
                </div>
              </Wrapper>
            )}

            {children}
          </div>
        </Container>
      </Section>
    );
  }
);

FeaturesGrid.displayName = "FeaturesGrid";
