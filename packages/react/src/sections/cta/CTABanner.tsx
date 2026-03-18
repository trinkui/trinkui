"use client";

import React, { forwardRef } from "react";
import type { CTABaseProps } from "./cta.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { Button } from "../../primitives/button/Button";
import { Badge } from "../../primitives/badge/Badge";
import { SlideUp } from "../../animation/SlideUp";
import { cn } from "../../utils/cn";

export interface CTABannerProps extends CTABaseProps {
  /** Show gradient background using primary color (default: true) */
  backgroundGradient?: boolean;
}

/**
 * Full-width colorful banner CTA section.
 * Gradient or surface background, centered title and subtitle, two action buttons.
 * Ideal for bottom-of-page calls to action.
 *
 * @example
 * <CTABanner
 *   pill="Limited time"
 *   title="Start building today"
 *   subtitle="Join thousands of developers shipping faster."
 *   primaryAction={{ label: "Get Started", href: "/signup" }}
 *   secondaryAction={{ label: "View Docs", href: "/docs", variant: "outline" }}
 * />
 */
export const CTABanner = forwardRef<HTMLElement, CTABannerProps>(
  (
    {
      pill,
      title,
      subtitle,
      primaryAction,
      secondaryAction,
      theme,
      animated = true,
      backgroundGradient = true,
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
        className={cn(
          "relative overflow-hidden",
          backgroundGradient
            ? "bg-gradient-to-br from-[rgb(var(--trinkui-primary))] to-[rgb(var(--trinkui-primary)/0.7)]"
            : "bg-[rgb(var(--trinkui-surface))]",
          className
        )}
        {...props}
      >
        <Container size="xl">
          <div className="flex flex-col items-center gap-8 text-center">
            {/* Pill */}
            {pill && (
              <Wrapper {...(wrapperProps as object)} delay={0}>
                {backgroundGradient ? (
                  <span
                    className={cn(
                      "inline-flex items-center rounded-full px-3 py-1 text-sm font-medium",
                      "bg-white/20 text-white border border-white/30"
                    )}
                  >
                    {pill}
                  </span>
                ) : (
                  <Badge variant="primary" pill>
                    {pill}
                  </Badge>
                )}
              </Wrapper>
            )}

            {/* Heading */}
            <Wrapper {...(wrapperProps as object)} delay={0.05}>
              <h2
                className={cn(
                  "font-heading max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
                  backgroundGradient
                    ? "text-white"
                    : "text-[rgb(var(--trinkui-fg))]"
                )}
              >
                {title}
              </h2>
            </Wrapper>

            {/* Subtitle */}
            {subtitle && (
              <Wrapper {...(wrapperProps as object)} delay={0.1}>
                <p
                  className={cn(
                    "max-w-2xl text-lg sm:text-xl",
                    backgroundGradient
                      ? "text-white/80"
                      : "text-[rgb(var(--trinkui-muted))]"
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
                        variant={backgroundGradient ? "secondary" : "primary"}
                        size="lg"
                        className={
                          backgroundGradient
                            ? "bg-white text-[rgb(var(--trinkui-primary))] hover:bg-white/90"
                            : undefined
                        }
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
                      rel={
                        secondaryAction.target === "_blank"
                          ? "noopener noreferrer"
                          : undefined
                      }
                    >
                      <Button
                        variant={secondaryAction.variant ?? "outline"}
                        size="lg"
                        className={
                          backgroundGradient
                            ? "border-white/50 text-white hover:bg-white/10"
                            : undefined
                        }
                      >
                        {secondaryAction.label}
                      </Button>
                    </a>
                  )}
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

CTABanner.displayName = "CTABanner";
