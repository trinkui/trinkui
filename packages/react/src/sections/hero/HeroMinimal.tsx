"use client";

import React, { forwardRef } from "react";
import type { HeroBaseProps } from "./hero.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { Button } from "../../primitives/button/Button";
import { Badge } from "../../primitives/badge/Badge";
import { SlideUp } from "../../animation/SlideUp";
import { cn } from "../../utils/cn";

export interface HeroMinimalProps extends HeroBaseProps {
  /** Text alignment */
  align?: "left" | "center";
}

/**
 * Minimal hero section — just headline and CTA, no image.
 * Tight spacing, clean typography.
 *
 * @example
 * <HeroMinimal
 *   title="Start building today"
 *   subtitle="Open source landing page components."
 *   primaryAction={{ label: "Browse Components", href: "/components" }}
 *   align="center"
 * />
 */
export const HeroMinimal = forwardRef<HTMLElement, HeroMinimalProps>(
  (
    {
      pill,
      title,
      subtitle,
      primaryAction,
      secondaryAction,
      theme,
      align = "center",
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
        spacing="md"
        className={cn("relative", className)}
        {...props}
      >
        <Container size="lg">
          <div
            className={cn(
              "flex flex-col gap-6",
              align === "center" ? "items-center text-center" : "items-start text-left"
            )}
          >
            {pill && (
              <Wrapper {...(wrapperProps as object)} delay={0}>
                <Badge variant="primary" pill>
                  {pill}
                </Badge>
              </Wrapper>
            )}

            <Wrapper {...(wrapperProps as object)} delay={0.05}>
              <h1
                className={cn(
                  "font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
                  "text-[rgb(var(--trinkui-fg))]",
                  align === "center" && "max-w-3xl"
                )}
              >
                {title}
              </h1>
            </Wrapper>

            {subtitle && (
              <Wrapper {...(wrapperProps as object)} delay={0.1}>
                <p
                  className={cn(
                    "text-lg text-[rgb(var(--trinkui-muted))]",
                    align === "center" && "max-w-xl"
                  )}
                >
                  {subtitle}
                </p>
              </Wrapper>
            )}

            {(primaryAction || secondaryAction) && (
              <Wrapper {...(wrapperProps as object)} delay={0.15}>
                <div
                  className={cn(
                    "flex flex-wrap gap-3",
                    align === "center" && "justify-center"
                  )}
                >
                  {primaryAction && (
                    <a href={primaryAction.href} onClick={primaryAction.onClick}>
                      <Button variant="primary" size="md">
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
                      <Button variant={secondaryAction.variant ?? "ghost"} size="md">
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

HeroMinimal.displayName = "HeroMinimal";
