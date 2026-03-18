"use client";

import React, { forwardRef } from "react";
import type { FeaturesBaseProps } from "./features.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { SectionHeader } from "../../layout/SectionHeader";
import { FadeIn } from "../../animation/FadeIn";
import { SlideUp } from "../../animation/SlideUp";
import { cn } from "../../utils/cn";

export interface FeaturesListProps extends FeaturesBaseProps {
  /** Whether to show a divider between items */
  divider?: boolean;
}

/**
 * Vertical list of features with large icons and descriptions side by side.
 * Ideal for 4–6 features in a clean, readable layout.
 *
 * @example
 * <FeaturesList
 *   pill="Why TrinkUI"
 *   title="Built with purpose"
 *   features={[
 *     { icon: "⚡", title: "Blazing fast", description: "Zero runtime overhead." },
 *     { icon: "🔒", title: "Secure by default", description: "Best practices baked in." },
 *   ]}
 * />
 */
export const FeaturesList = forwardRef<HTMLElement, FeaturesListProps>(
  (
    {
      pill,
      title,
      subtitle,
      features = [],
      theme,
      animated = true,
      divider = true,
      className,
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

            {/* Feature list */}
            {features.length > 0 && (
              <ul className="flex flex-col">
                {features.map((feature, index) => (
                  <FadeIn
                    key={index}
                    delay={animated ? index * 0.08 : 0}
                    scrollTrigger={animated}
                  >
                    <li
                      className={cn(
                        "flex items-start gap-6 py-8",
                        divider && index !== features.length - 1 && "border-b border-[rgb(var(--trinkui-border))]"
                      )}
                    >
                      {/* Icon */}
                      {feature.icon && (
                        <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-[var(--trinkui-radius-lg)] bg-[rgb(var(--trinkui-primary)/0.1)] text-3xl text-[rgb(var(--trinkui-primary))]">
                          {feature.icon}
                        </div>
                      )}

                      {/* Text */}
                      <div className="flex flex-col gap-1.5">
                        <h3 className="font-heading text-xl font-semibold text-[rgb(var(--trinkui-fg))]">
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
                        <p className="text-base leading-relaxed text-[rgb(var(--trinkui-muted))]">
                          {feature.description}
                        </p>
                      </div>
                    </li>
                  </FadeIn>
                ))}
              </ul>
            )}

            {children}
          </div>
        </Container>
      </Section>
    );
  }
);

FeaturesList.displayName = "FeaturesList";
