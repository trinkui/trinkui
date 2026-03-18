"use client";

import React, { forwardRef } from "react";
import type { PricingBaseProps } from "./pricing.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { SectionHeader } from "../../layout/SectionHeader";
import { Button } from "../../primitives/button/Button";
import { SlideUp } from "../../animation/SlideUp";
import { StaggerChildren } from "../../animation/StaggerChildren";
import { pricingCardStyles } from "./pricing.styles";
import { cn } from "../../utils/cn";

export interface PricingCardsProps extends PricingBaseProps {
  /**
   * Reserved for future billing period toggle (monthly/annual).
   * Currently unused.
   */
  billingToggle?: boolean;
}

/** SVG checkmark icon for included features */
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/** SVG X icon for excluded features */
function XIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn("h-5 w-5 shrink-0", className)}
      aria-hidden="true"
    >
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  );
}

/**
 * Three-column responsive pricing cards with feature lists.
 * Popular tier gets a highlighted border, larger shadow, and primary CTA.
 *
 * @example
 * <PricingCards
 *   pill="Pricing"
 *   title="Simple, transparent pricing"
 *   subtitle="Choose the plan that works for you."
 *   tiers={[
 *     {
 *       name: "Free",
 *       price: "$0",
 *       period: "per month",
 *       features: [{ label: "5 projects", included: true }],
 *       cta: { label: "Get started", href: "/signup" },
 *     },
 *   ]}
 * />
 */
export const PricingCards = forwardRef<HTMLElement, PricingCardsProps>(
  (
    {
      pill,
      title,
      subtitle,
      tiers = [],
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

            {/* Pricing cards */}
            {tiers.length > 0 && (
              <StaggerChildren
                className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
                staggerDelay={0.08}
                childAnimation="slideUp"
                scrollTrigger={animated}
              >
                {tiers.map((tier, index) => (
                  <div
                    key={index}
                    className={cn(
                      pricingCardStyles({ popular: tier.popular ? "true" : "false" }),
                      tier.popular && "relative scale-[1.02]",
                      "bg-[rgb(var(--trinkui-surface))]"
                    )}
                  >
                    {/* Popular badge */}
                    {tier.popular && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                        <span
                          className={cn(
                            "inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold",
                            "bg-[rgb(var(--trinkui-primary))] text-[rgb(var(--trinkui-primary-fg))]"
                          )}
                        >
                          {tier.popularLabel ?? "Most popular"}
                        </span>
                      </div>
                    )}

                    {/* Tier header */}
                    <div className="flex flex-col gap-2">
                      <h3 className="font-heading text-lg font-semibold text-[rgb(var(--trinkui-fg))]">
                        {tier.name}
                      </h3>
                      <div className="flex items-baseline gap-1">
                        <span className="font-heading text-4xl font-bold text-[rgb(var(--trinkui-fg))]">
                          {tier.price}
                        </span>
                        {tier.period && (
                          <span className="text-sm text-[rgb(var(--trinkui-muted))]">
                            {tier.period}
                          </span>
                        )}
                      </div>
                      {tier.description && (
                        <p className="text-sm text-[rgb(var(--trinkui-muted))]">
                          {tier.description}
                        </p>
                      )}
                    </div>

                    {/* CTA button */}
                    <a
                      href={tier.cta.href}
                      onClick={tier.cta.onClick}
                      target={tier.cta.target}
                      rel={tier.cta.target === "_blank" ? "noopener noreferrer" : undefined}
                      className="block"
                    >
                      <Button
                        variant={tier.popular ? "primary" : "outline"}
                        size="lg"
                        fullWidth
                      >
                        {tier.cta.label}
                      </Button>
                    </a>

                    {/* Feature list */}
                    {tier.features.length > 0 && (
                      <ul className="flex flex-col gap-3" role="list">
                        {tier.features.map((feature, fIndex) => (
                          <li key={fIndex} className="flex items-start gap-3">
                            {feature.included ? (
                              <CheckIcon className="text-[rgb(var(--trinkui-primary))]" />
                            ) : (
                              <XIcon className="text-[rgb(var(--trinkui-muted))]" />
                            )}
                            <span
                              className={cn(
                                "text-sm",
                                feature.included
                                  ? "text-[rgb(var(--trinkui-fg))]"
                                  : "text-[rgb(var(--trinkui-muted))]"
                              )}
                            >
                              {feature.label}
                              {feature.note && (
                                <span className="ml-1 text-xs text-[rgb(var(--trinkui-muted))]">
                                  ({feature.note})
                                </span>
                              )}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                ))}
              </StaggerChildren>
            )}

            {children}
          </div>
        </Container>
      </Section>
    );
  }
);

PricingCards.displayName = "PricingCards";
