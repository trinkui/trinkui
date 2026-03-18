"use client";

import React, { forwardRef } from "react";
import type { CTABaseProps } from "./cta.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { Button } from "../../primitives/button/Button";
import { Badge } from "../../primitives/badge/Badge";
import { SlideUp } from "../../animation/SlideUp";
import { cn } from "../../utils/cn";

export interface CTACenteredProps extends CTABaseProps {
  /** Show decorative background pattern (dots or grid via CSS gradients) */
  backgroundPattern?: "dots" | "grid" | "none";
}

/**
 * Centered mid-page CTA section with optional decorative background pattern.
 * Uses medium spacing — ideal for breaking up page content.
 *
 * @example
 * <CTACentered
 *   pill="Open source"
 *   title="Ready to get started?"
 *   subtitle="Install in minutes and ship your landing page today."
 *   primaryAction={{ label: "Get Started", href: "/docs" }}
 *   backgroundPattern="dots"
 * />
 */
export const CTACentered = forwardRef<HTMLElement, CTACenteredProps>(
  (
    {
      pill,
      title,
      subtitle,
      primaryAction,
      secondaryAction,
      theme,
      animated = true,
      backgroundPattern = "none",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const Wrapper = animated ? SlideUp : React.Fragment;
    const wrapperProps = animated ? { scrollTrigger: true } : {};

    const patternStyle: React.CSSProperties =
      backgroundPattern === "dots"
        ? {
            backgroundImage:
              "radial-gradient(rgb(var(--trinkui-border)) 1px, transparent 1px)",
            backgroundSize: "20px 20px",
          }
        : backgroundPattern === "grid"
        ? {
            backgroundImage:
              "linear-gradient(rgb(var(--trinkui-border)) 1px, transparent 1px), linear-gradient(to right, rgb(var(--trinkui-border)) 1px, transparent 1px)",
            backgroundSize: "32px 32px",
          }
        : {};

    return (
      <Section
        ref={ref}
        theme={theme}
        spacing="md"
        surface
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        {backgroundPattern !== "none" && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 opacity-40"
            style={patternStyle}
          />
        )}

        <Container size="lg">
          <div className="relative flex flex-col items-center gap-8 text-center">
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
              <h2
                className={cn(
                  "font-heading max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
                  "text-[rgb(var(--trinkui-fg))]"
                )}
              >
                {title}
              </h2>
            </Wrapper>

            {/* Subtitle */}
            {subtitle && (
              <Wrapper {...(wrapperProps as object)} delay={0.1}>
                <p className="max-w-xl text-lg text-[rgb(var(--trinkui-muted))] sm:text-xl">
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
                      <Button variant="primary" size="lg">
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

CTACentered.displayName = "CTACentered";
