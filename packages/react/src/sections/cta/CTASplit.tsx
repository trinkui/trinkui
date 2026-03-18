"use client";

import React, { forwardRef } from "react";
import type { CTABaseProps } from "./cta.types";
import type { ImageProps } from "@trinkui/shared";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { Button } from "../../primitives/button/Button";
import { Badge } from "../../primitives/badge/Badge";
import { SlideUp } from "../../animation/SlideUp";
import { FadeIn } from "../../animation/FadeIn";
import { cn } from "../../utils/cn";

export interface CTASplitProps extends CTABaseProps {
  /** Optional image on the left side */
  image?: ImageProps;
  /** Placeholder text shown in the visual input area */
  inputPlaceholder?: string;
}

/**
 * 50/50 split CTA section.
 * Left: title, subtitle, optional image. Right: action buttons + visual input area.
 *
 * @example
 * <CTASplit
 *   title="Start your free trial"
 *   subtitle="No credit card required. Cancel at any time."
 *   primaryAction={{ label: "Sign Up Free", href: "/signup" }}
 *   inputPlaceholder="Enter your work email"
 * />
 */
export const CTASplit = forwardRef<HTMLElement, CTASplitProps>(
  (
    {
      pill,
      title,
      subtitle,
      primaryAction,
      secondaryAction,
      image,
      inputPlaceholder = "Enter your email",
      theme,
      animated = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const TextWrapper = animated ? SlideUp : React.Fragment;
    const RightWrapper = animated ? FadeIn : React.Fragment;
    const textWrapperProps = animated ? { scrollTrigger: true, delay: 0 } : {};
    const rightWrapperProps = animated
      ? { scrollTrigger: true, delay: 0.15 }
      : {};

    return (
      <Section
        ref={ref}
        theme={theme}
        spacing="lg"
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        <Container size="xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left column: text + optional image */}
            <TextWrapper {...(textWrapperProps as object)}>
              <div className="flex flex-col gap-6">
                {pill && (
                  <Badge variant="primary" pill>
                    {pill}
                  </Badge>
                )}
                <h2
                  className={cn(
                    "font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
                    "text-[rgb(var(--trinkui-fg))]"
                  )}
                >
                  {title}
                </h2>
                {subtitle && (
                  <p className="text-lg text-[rgb(var(--trinkui-muted))] sm:text-xl">
                    {subtitle}
                  </p>
                )}
                {image && (
                  <div className="mt-2 overflow-hidden rounded-[var(--trinkui-radius-xl)] border border-[rgb(var(--trinkui-border))] shadow-[var(--trinkui-shadow-lg)]">
                    <img
                      src={image.src}
                      alt={image.alt}
                      width={image.width}
                      height={image.height}
                      className="w-full"
                    />
                  </div>
                )}
              </div>
            </TextWrapper>

            {/* Right column: actions + visual input */}
            <RightWrapper {...(rightWrapperProps as object)}>
              <div className="flex flex-col gap-6 rounded-[var(--trinkui-radius-xl)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))] p-8">
                {/* Visual input area */}
                <div className="flex flex-col gap-3">
                  <div
                    className={cn(
                      "w-full rounded-[var(--trinkui-radius-md)] border border-[rgb(var(--trinkui-border))]",
                      "bg-[rgb(var(--trinkui-bg))] px-4 py-2.5",
                      "text-[rgb(var(--trinkui-muted))] text-sm"
                    )}
                    aria-hidden="true"
                  >
                    {inputPlaceholder}
                  </div>
                </div>

                {/* Action buttons */}
                <div className="flex flex-col gap-3 sm:flex-row">
                  {primaryAction && (
                    <a
                      href={primaryAction.href}
                      onClick={primaryAction.onClick}
                      className="flex-1"
                    >
                      <Button variant="primary" size="lg" fullWidth>
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
                      className="flex-1"
                    >
                      <Button
                        variant={secondaryAction.variant ?? "outline"}
                        size="lg"
                        fullWidth
                      >
                        {secondaryAction.label}
                      </Button>
                    </a>
                  )}
                </div>

                {children}
              </div>
            </RightWrapper>
          </div>
        </Container>
      </Section>
    );
  }
);

CTASplit.displayName = "CTASplit";
