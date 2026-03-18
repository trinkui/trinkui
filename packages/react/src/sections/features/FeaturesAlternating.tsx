"use client";

import React, { forwardRef } from "react";
import type { FeaturesBaseProps, FeatureItem } from "./features.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { SectionHeader } from "../../layout/SectionHeader";
import { FadeIn } from "../../animation/FadeIn";
import { SlideUp } from "../../animation/SlideUp";
import { cn } from "../../utils/cn";

export interface AlternatingFeatureItem extends FeatureItem {
  /** Optional feature image */
  image?: { src: string; alt: string };
}

export interface FeaturesAlternatingProps extends Omit<FeaturesBaseProps, "features"> {
  /** Array of feature items with optional images */
  features?: AlternatingFeatureItem[];
}

/**
 * Alternating left/right feature layout for detailed feature showcases.
 * Odd-indexed features show text left / image right; even show image left / text right.
 *
 * @example
 * <FeaturesAlternating
 *   pill="How it works"
 *   title="Built for developers"
 *   features={[
 *     { title: "Simple API", description: "...", image: { src: "/img1.png", alt: "API" } },
 *     { title: "Great DX", description: "...", image: { src: "/img2.png", alt: "DX" } },
 *   ]}
 * />
 */
export const FeaturesAlternating = forwardRef<HTMLElement, FeaturesAlternatingProps>(
  (
    {
      pill,
      title,
      subtitle,
      features = [],
      theme,
      animated = true,
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
          <div className="flex flex-col gap-16">
            {/* Section header */}
            <Wrapper {...(wrapperProps as object)} delay={0}>
              <SectionHeader
                pill={pill}
                title={title}
                subtitle={subtitle}
                align="center"
              />
            </Wrapper>

            {/* Alternating feature rows */}
            {features.map((feature, index) => {
              const isEven = index % 2 === 0;
              return (
                <FadeIn
                  key={index}
                  delay={animated ? 0.1 : 0}
                  scrollTrigger={animated}
                >
                  <div
                    className={cn(
                      "flex flex-col items-center gap-8 lg:flex-row lg:gap-16",
                      !isEven && "lg:flex-row-reverse"
                    )}
                  >
                    {/* Text content */}
                    <div className="flex flex-1 flex-col gap-4">
                      {feature.icon && (
                        <div className="flex h-12 w-12 items-center justify-center rounded-[var(--trinkui-radius-md)] bg-[rgb(var(--trinkui-primary)/0.1)] text-2xl text-[rgb(var(--trinkui-primary))]">
                          {feature.icon}
                        </div>
                      )}
                      <h3 className="font-heading text-2xl font-bold tracking-tight text-[rgb(var(--trinkui-fg))] sm:text-3xl">
                        {feature.title}
                      </h3>
                      <p className="text-lg leading-relaxed text-[rgb(var(--trinkui-muted))]">
                        {feature.description}
                      </p>
                      {feature.href && (
                        <a
                          href={feature.href}
                          className="inline-flex items-center gap-1 text-sm font-medium text-[rgb(var(--trinkui-primary))] hover:underline"
                        >
                          Learn more
                          <span aria-hidden="true">&rarr;</span>
                        </a>
                      )}
                    </div>

                    {/* Image */}
                    {feature.image && (
                      <div className="flex-1 overflow-hidden rounded-[var(--trinkui-radius-xl)] border border-[rgb(var(--trinkui-border))] shadow-[var(--trinkui-shadow-lg)]">
                        <img
                          src={feature.image.src}
                          alt={feature.image.alt}
                          className="h-full w-full object-cover"
                        />
                      </div>
                    )}

                    {/* Placeholder when no image */}
                    {!feature.image && (
                      <div className="flex-1 rounded-[var(--trinkui-radius-xl)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] p-8 min-h-[240px]" />
                    )}
                  </div>
                </FadeIn>
              );
            })}

            {children}
          </div>
        </Container>
      </Section>
    );
  }
);

FeaturesAlternating.displayName = "FeaturesAlternating";
