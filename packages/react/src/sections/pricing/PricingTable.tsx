"use client";

import React, { forwardRef } from "react";
import type { PricingBaseProps } from "./pricing.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { SectionHeader } from "../../layout/SectionHeader";
import { Button } from "../../primitives/button/Button";
import { SlideUp } from "../../animation/SlideUp";
import { cn } from "../../utils/cn";

/** SVG checkmark icon for included features */
function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn("h-5 w-5", className)}
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
      className={cn("h-5 w-5", className)}
      aria-hidden="true"
    >
      <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
    </svg>
  );
}

/**
 * Comparison table layout for pricing tiers.
 * Rows represent features; columns represent tiers.
 * Popular tier column is highlighted.
 *
 * @example
 * <PricingTable
 *   pill="Compare plans"
 *   title="Feature comparison"
 *   tiers={[
 *     {
 *       name: "Free",
 *       price: "$0",
 *       features: [{ label: "5 projects", included: true }],
 *       cta: { label: "Get started", href: "/signup" },
 *     },
 *   ]}
 * />
 */
export const PricingTable = forwardRef<HTMLElement, PricingBaseProps>(
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

    // Collect all unique feature labels in order (from first tier)
    const allFeatureLabels: string[] = [];
    if (tiers.length > 0 && tiers[0]) {
      tiers[0].features.forEach((f) => {
        if (!allFeatureLabels.includes(f.label)) {
          allFeatureLabels.push(f.label);
        }
      });
      // Also collect from other tiers in case they have extras
      tiers.slice(1).forEach((tier) => {
        tier.features.forEach((f) => {
          if (!allFeatureLabels.includes(f.label)) {
            allFeatureLabels.push(f.label);
          }
        });
      });
    }

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

            {/* Comparison table */}
            {tiers.length > 0 && (
              <Wrapper {...(wrapperProps as object)} delay={0.1}>
                <div className="w-full overflow-x-auto">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr>
                        {/* Empty first column header */}
                        <th className="w-1/4 py-4 pr-6 text-left text-sm font-medium text-[rgb(var(--trinkui-muted))]">
                          Features
                        </th>
                        {tiers.map((tier, index) => (
                          <th
                            key={index}
                            className={cn(
                              "px-6 py-4 text-center",
                              tier.popular &&
                                "rounded-t-[var(--trinkui-radius-lg)] bg-[rgb(var(--trinkui-primary)/0.06)]"
                            )}
                          >
                            <div className="flex flex-col items-center gap-1">
                              {tier.popular && (
                                <span
                                  className={cn(
                                    "mb-1 inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-semibold",
                                    "bg-[rgb(var(--trinkui-primary))] text-[rgb(var(--trinkui-primary-fg))]"
                                  )}
                                >
                                  {tier.popularLabel ?? "Most popular"}
                                </span>
                              )}
                              <span className="font-heading text-base font-semibold text-[rgb(var(--trinkui-fg))]">
                                {tier.name}
                              </span>
                              <div className="flex items-baseline gap-1">
                                <span className="font-heading text-2xl font-bold text-[rgb(var(--trinkui-fg))]">
                                  {tier.price}
                                </span>
                                {tier.period && (
                                  <span className="text-xs text-[rgb(var(--trinkui-muted))]">
                                    {tier.period}
                                  </span>
                                )}
                              </div>
                              {tier.description && (
                                <p className="text-xs text-[rgb(var(--trinkui-muted))]">
                                  {tier.description}
                                </p>
                              )}
                            </div>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody>
                      {allFeatureLabels.map((label, rowIndex) => (
                        <tr
                          key={rowIndex}
                          className="border-t border-[rgb(var(--trinkui-border))]"
                        >
                          <td className="py-4 pr-6 text-sm text-[rgb(var(--trinkui-fg))]">
                            {label}
                          </td>
                          {tiers.map((tier, colIndex) => {
                            const feature = tier.features.find(
                              (f) => f.label === label
                            );
                            const included = feature?.included ?? false;
                            return (
                              <td
                                key={colIndex}
                                className={cn(
                                  "px-6 py-4 text-center",
                                  tier.popular &&
                                    "bg-[rgb(var(--trinkui-primary)/0.06)]"
                                )}
                              >
                                <div className="flex justify-center">
                                  {included ? (
                                    <CheckIcon className="text-[rgb(var(--trinkui-primary))]" />
                                  ) : (
                                    <XIcon className="text-[rgb(var(--trinkui-muted))]" />
                                  )}
                                </div>
                                {feature?.note && (
                                  <p className="mt-1 text-xs text-[rgb(var(--trinkui-muted))]">
                                    {feature.note}
                                  </p>
                                )}
                              </td>
                            );
                          })}
                        </tr>
                      ))}

                      {/* CTA row */}
                      <tr className="border-t border-[rgb(var(--trinkui-border))]">
                        <td className="py-6 pr-6" />
                        {tiers.map((tier, index) => (
                          <td
                            key={index}
                            className={cn(
                              "px-6 py-6 text-center",
                              tier.popular &&
                                "rounded-b-[var(--trinkui-radius-lg)] bg-[rgb(var(--trinkui-primary)/0.06)]"
                            )}
                          >
                            <a
                              href={tier.cta.href}
                              onClick={tier.cta.onClick}
                              target={tier.cta.target}
                              rel={
                                tier.cta.target === "_blank"
                                  ? "noopener noreferrer"
                                  : undefined
                              }
                              className="block"
                            >
                              <Button
                                variant={tier.popular ? "primary" : "outline"}
                                size="md"
                                fullWidth
                              >
                                {tier.cta.label}
                              </Button>
                            </a>
                          </td>
                        ))}
                      </tr>
                    </tbody>
                  </table>
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

PricingTable.displayName = "PricingTable";
