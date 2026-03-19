"use client";

import React, { forwardRef } from "react";
import type { HeroBaseProps } from "./hero.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { Button } from "../../primitives/button/Button";
import { Badge } from "../../primitives/badge/Badge";
import { SlideUp } from "../../animation/SlideUp";
import { StaggerChildren } from "../../animation/StaggerChildren";
import { cn } from "../../utils/cn";

export interface HeroCenteredProps extends HeroBaseProps {
  /** Additional class for inner content wrapper */
  contentClassName?: string;
}

/**
 * Centered hero section with pill badge, headline, subtitle, CTA buttons, and optional image.
 * All content is centered horizontally. Image appears below the text.
 *
 * @example
 * <HeroCentered
 *   pill="Just launched"
 *   title="Build landing pages that convert"
 *   subtitle="Beautiful, accessible sections for React."
 *   primaryAction={{ label: "Get Started", href: "/docs" }}
 *   secondaryAction={{ label: "GitHub", href: "https://github.com/trinkui/trinkui", variant: "outline" }}
 *   image={{ src: "/hero.png", alt: "Preview" }}
 * />
 */
export const HeroCentered = forwardRef<HTMLElement, HeroCenteredProps>(
  (
    {
      pill,
      title,
      subtitle,
      primaryAction,
      secondaryAction,
      image,
      theme,
      animated = true,
      className,
      contentClassName,
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
          <div
            className={cn(
              "flex flex-col items-center gap-8 text-center",
              contentClassName
            )}
          >
            {/* Pill */}
            {pill && (
              <Wrapper {...(wrapperProps as object)} delay={0}>
                <Badge variant="primary" pill>
                  {pill}
                </Badge>
              </Wrapper>
            )}

            {/* Heading */}
            <Wrapper {...(wrapperProps as object)} delay={0.05}>
              <h1
                className={cn(
                  "font-heading max-w-4xl text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl xl:text-7xl",
                  "text-[rgb(var(--trinkui-fg))]"
                )}
              >
                {title}
              </h1>
            </Wrapper>

            {/* Subtitle */}
            {subtitle && (
              <Wrapper {...(wrapperProps as object)} delay={0.1}>
                <p
                  className={cn(
                    "max-w-2xl text-lg text-[rgb(var(--trinkui-muted))] sm:text-xl"
                  )}
                >
                  {subtitle}
                </p>
              </Wrapper>
            )}

            {/* Actions */}
            {(primaryAction || secondaryAction) && (
              <Wrapper {...(wrapperProps as object)} delay={0.15}>
                <div className="flex flex-wrap items-center justify-center gap-3">
                  {primaryAction && (
                    <a href={primaryAction.href} onClick={primaryAction.onClick}>
                      <Button
                        variant="primary"
                        size="lg"
                      >
                        {primaryAction.label}
                      </Button>
                    </a>
                  )}
                  {secondaryAction && (
                    <a
                      href={secondaryAction.href}
                      onClick={secondaryAction.onClick}
                      target={secondaryAction.target}
                      rel={secondaryAction.target === "_blank" ? "noopener noreferrer" : undefined}
                    >
                      <Button
                        variant={secondaryAction.variant ?? "outline"}
                        size="lg"
                      >
                        {secondaryAction.label}
                      </Button>
                    </a>
                  )}
                </div>
              </Wrapper>
            )}

            {/* Custom children */}
            {children}

            {/* Image */}
            {image && (
              <Wrapper {...(wrapperProps as object)} delay={0.25}>
                <div className="mt-4 w-full overflow-hidden rounded-[var(--trinkui-radius-xl)] border border-[rgb(var(--trinkui-border))] shadow-[var(--trinkui-shadow-lg)]">
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full"
                  />
                </div>
              </Wrapper>
            )}
          </div>
        </Container>
      </Section>
    );
  }
);

HeroCentered.displayName = "HeroCentered";
