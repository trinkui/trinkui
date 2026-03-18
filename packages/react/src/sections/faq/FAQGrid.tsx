"use client";

import React, { forwardRef } from "react";
import type { FAQBaseProps } from "./faq.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { SectionHeader } from "../../layout/SectionHeader";
import { SlideUp } from "../../animation/SlideUp";
import { StaggerChildren } from "../../animation/StaggerChildren";
import { cn } from "../../utils/cn";

/**
 * Two-column grid of FAQ items — all expanded, no accordion behaviour.
 * Best suited for 6–8 short questions/answers.
 *
 * @example
 * <FAQGrid
 *   pill="FAQ"
 *   title="Common questions"
 *   items={[
 *     { question: "Is it free?", answer: "Yes, there is a free tier." },
 *   ]}
 * />
 */
export const FAQGrid = forwardRef<HTMLElement, FAQBaseProps>(
  (
    {
      pill,
      title,
      subtitle,
      items = [],
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

            {/* FAQ grid — all items shown expanded */}
            {items.length > 0 && (
              <StaggerChildren
                className="grid grid-cols-1 gap-8 sm:grid-cols-2"
                staggerDelay={0.07}
                childAnimation="slideUp"
                scrollTrigger={animated}
              >
                {items.map((item, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex flex-col gap-3 rounded-[var(--trinkui-radius-lg)] p-6",
                      "border border-[rgb(var(--trinkui-border))]",
                      "bg-[rgb(var(--trinkui-surface))]"
                    )}
                  >
                    <h3 className="font-heading text-base font-semibold text-[rgb(var(--trinkui-fg))]">
                      {item.question}
                    </h3>
                    <p className="text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
                      {item.answer}
                    </p>
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

FAQGrid.displayName = "FAQGrid";
