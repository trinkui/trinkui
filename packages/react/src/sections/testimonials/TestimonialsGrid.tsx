"use client";

import React, { forwardRef } from "react";
import type { TestimonialsBaseProps } from "./testimonials.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { SectionHeader } from "../../layout/SectionHeader";
import { StaggerChildren } from "../../animation/StaggerChildren";
import { SlideUp } from "../../animation/SlideUp";
import { cn } from "../../utils/cn";

export interface TestimonialsGridProps extends TestimonialsBaseProps {
  /** Number of columns at large breakpoint (default: 3) */
  columns?: 2 | 3;
}

/** Renders filled star icons for a given rating */
function StarRating({ rating }: { rating: number }) {
  const clamped = Math.min(5, Math.max(1, Math.round(rating)));
  return (
    <div className="flex items-center gap-0.5" aria-label={`${clamped} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={cn(
            "h-4 w-4",
            i < clamped
              ? "text-[rgb(var(--trinkui-primary))]"
              : "text-[rgb(var(--trinkui-border))]"
          )}
          aria-hidden="true"
        >
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

/**
 * Responsive grid of testimonial cards with quote, star rating, and author info.
 * Supports 2 or 3 columns with staggered entrance animations.
 *
 * @example
 * <TestimonialsGrid
 *   pill="Testimonials"
 *   title="Loved by developers"
 *   testimonials={[
 *     {
 *       quote: "TrinkUI saved us weeks of work.",
 *       author: "Jane Doe",
 *       role: "CTO at Acme",
 *       rating: 5,
 *     },
 *   ]}
 * />
 */
export const TestimonialsGrid = forwardRef<HTMLElement, TestimonialsGridProps>(
  (
    {
      pill,
      title,
      subtitle,
      testimonials = [],
      theme,
      animated = true,
      className,
      columns = 3,
      children,
      ...props
    },
    ref
  ) => {
    const Wrapper = animated ? SlideUp : React.Fragment;
    const wrapperProps = animated ? { scrollTrigger: false } : {};

    const gridCols = columns === 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 lg:grid-cols-3";

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

            {/* Testimonial cards */}
            {testimonials.length > 0 && (
              <StaggerChildren
                className={cn("grid gap-6", gridCols)}
                staggerDelay={0.08}
                childAnimation="slideUp"
                scrollTrigger={animated}
              >
                {testimonials.map((testimonial, index) => (
                  <div
                    key={index}
                    className={cn(
                      "flex flex-col gap-4 rounded-[var(--trinkui-radius-lg)] p-6",
                      "border border-[rgb(var(--trinkui-border))]",
                      "bg-[rgb(var(--trinkui-surface))]",
                      "shadow-[var(--trinkui-shadow-sm)]"
                    )}
                  >
                    {/* Star rating */}
                    {typeof testimonial.rating === "number" && (
                      <StarRating rating={testimonial.rating} />
                    )}

                    {/* Quote */}
                    <p className="flex-1 text-base italic leading-relaxed text-[rgb(var(--trinkui-fg))]">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      {testimonial.avatar && (
                        <img
                          src={testimonial.avatar.src}
                          alt={testimonial.avatar.alt}
                          className="h-10 w-10 rounded-full object-cover"
                        />
                      )}
                      {!testimonial.avatar && (
                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary)/0.15)] text-sm font-bold text-[rgb(var(--trinkui-primary))]">
                          {testimonial.author.charAt(0).toUpperCase()}
                        </div>
                      )}
                      <div className="flex flex-col">
                        <span className="text-sm font-semibold text-[rgb(var(--trinkui-fg))]">
                          {testimonial.author}
                        </span>
                        {testimonial.role && (
                          <span className="text-xs text-[rgb(var(--trinkui-muted))]">
                            {testimonial.role}
                          </span>
                        )}
                      </div>
                    </div>
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

TestimonialsGrid.displayName = "TestimonialsGrid";
