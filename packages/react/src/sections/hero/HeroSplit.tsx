"use client";

import React, { forwardRef } from "react";
import type { HeroBaseProps } from "./hero.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { Button } from "../../primitives/button/Button";
import { Badge } from "../../primitives/badge/Badge";
import { SlideUp } from "../../animation/SlideUp";
import { FadeIn } from "../../animation/FadeIn";
import { cn } from "../../utils/cn";

export interface HeroSplitProps extends HeroBaseProps {
  /** Flip image to left side, text to right */
  reversed?: boolean;
}

/**
 * Split hero section with text on one side and image on the other (50/50).
 * Default: text left, image right.
 *
 * @example
 * <HeroSplit
 *   pill="New release"
 *   title="The modern way to build landing pages"
 *   subtitle="Ship faster with production-ready components."
 *   primaryAction={{ label: "Get Started", href: "/docs" }}
 *   image={{ src: "/product.png", alt: "Product screenshot" }}
 * />
 */
export const HeroSplit = forwardRef<HTMLElement, HeroSplitProps>(
  (
    {
      pill,
      title,
      subtitle,
      primaryAction,
      secondaryAction,
      image,
      theme,
      reversed = false,
      animated = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const TextWrapper = animated ? SlideUp : React.Fragment;
    const ImageWrapper = animated ? FadeIn : React.Fragment;
    const textWrapperProps = animated ? { scrollTrigger: false, delay: 0 } : {};
    const imageWrapperProps = animated ? { scrollTrigger: false, delay: 0.2 } : {};

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
              "grid items-center gap-12 lg:grid-cols-2",
              reversed && "lg:grid-flow-col-dense"
            )}
          >
            {/* Text column */}
            <TextWrapper {...(textWrapperProps as object)}>
              <div
                className={cn(
                  "flex flex-col gap-6",
                  reversed && "lg:col-start-2"
                )}
              >
                {pill && (
                  <Badge variant="primary" pill>
                    {pill}
                  </Badge>
                )}
                <h1
                  className={cn(
                    "font-heading text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl",
                    "text-[rgb(var(--trinkui-fg))]"
                  )}
                >
                  {title}
                </h1>
                {subtitle && (
                  <p className="text-lg text-[rgb(var(--trinkui-muted))] sm:text-xl">
                    {subtitle}
                  </p>
                )}
                {(primaryAction || secondaryAction) && (
                  <div className="flex flex-wrap gap-3">
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
                        rel={secondaryAction.target === "_blank" ? "noopener noreferrer" : undefined}
                      >
                        <Button variant={secondaryAction.variant ?? "outline"} size="lg">
                          {secondaryAction.label}
                        </Button>
                      </a>
                    )}
                  </div>
                )}
                {children}
              </div>
            </TextWrapper>

            {/* Image column */}
            {image && (
              <ImageWrapper {...(imageWrapperProps as object)}>
                <div
                  className={cn(
                    "overflow-hidden rounded-[var(--trinkui-radius-xl)] border border-[rgb(var(--trinkui-border))] shadow-[var(--trinkui-shadow-lg)]",
                    reversed && "lg:col-start-1"
                  )}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    width={image.width}
                    height={image.height}
                    className="w-full"
                  />
                </div>
              </ImageWrapper>
            )}
          </div>
        </Container>
      </Section>
    );
  }
);

HeroSplit.displayName = "HeroSplit";
