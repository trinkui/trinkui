"use client";

import React, { forwardRef } from "react";
import type { TestimonialsBaseProps, Testimonial } from "./testimonials.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { FadeIn } from "../../animation/FadeIn";
import { cn } from "../../utils/cn";

export interface TestimonialsFeaturedProps extends Omit<TestimonialsBaseProps, "pill" | "title" | "subtitle"> {
  /** The single featured testimonial to display */
  testimonial: Testimonial;
  /** Optional heading above the quote */
  title?: string;
  /** Optional pill label */
  pill?: string;
}

/** Renders filled star icons for a given rating */
function StarRating({ rating }: { rating: number }) {
  const clamped = Math.min(5, Math.max(1, Math.round(rating)));
  return (
    <div className="flex items-center justify-center gap-1" aria-label={`${clamped} out of 5 stars`}>
      {Array.from({ length: 5 }, (_, i) => (
        <svg
          key={i}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
          className={cn(
            "h-5 w-5",
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
 * Single large featured testimonial displayed centered on the page.
 * Renders an extra-large quote, optional star rating, big avatar, author name and role,
 * and an optional company logo. Best used for a high-impact social-proof moment.
 *
 * @example
 * <TestimonialsFeatured
 *   pill="Customer story"
 *   testimonial={{
 *     quote: "TrinkUI transformed how we build landing pages. It's simply the best.",
 *     author: "Sarah Connor",
 *     role: "Head of Design at Skynet",
 *     rating: 5,
 *     avatar: { src: "/avatars/sarah.jpg", alt: "Sarah Connor" },
 *     companyLogo: { src: "/logos/skynet.svg", alt: "Skynet" },
 *   }}
 * />
 */
export const TestimonialsFeatured = forwardRef<HTMLElement, TestimonialsFeaturedProps>(
  (
    {
      pill,
      title,
      testimonial,
      theme,
      animated = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <Section
        ref={ref}
        theme={theme}
        spacing="lg"
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        <Container size="xl">
          <FadeIn delay={0} scrollTrigger={animated}>
            <div className="flex flex-col items-center gap-8 text-center">
              {/* Pill */}
              {pill && (
                <span
                  className={cn(
                    "inline-flex items-center rounded-full border border-[rgb(var(--trinkui-border))]",
                    "bg-[rgb(var(--trinkui-surface))] px-3 py-1 text-sm font-medium",
                    "text-[rgb(var(--trinkui-muted))]"
                  )}
                >
                  {pill}
                </span>
              )}

              {/* Optional heading */}
              {title && (
                <h2
                  className={cn(
                    "font-heading text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl",
                    "text-[rgb(var(--trinkui-fg))]"
                  )}
                >
                  {title}
                </h2>
              )}

              {/* Star rating */}
              {typeof testimonial.rating === "number" && (
                <StarRating rating={testimonial.rating} />
              )}

              {/* Large quote mark */}
              <blockquote className="max-w-3xl">
                <p
                  className={cn(
                    "text-xl italic leading-relaxed text-[rgb(var(--trinkui-fg))]",
                    "sm:text-2xl lg:text-3xl"
                  )}
                >
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
              </blockquote>

              {/* Avatar + author info */}
              <div className="flex flex-col items-center gap-3">
                {testimonial.avatar ? (
                  <img
                    src={testimonial.avatar.src}
                    alt={testimonial.avatar.alt}
                    className="h-16 w-16 rounded-full object-cover ring-2 ring-[rgb(var(--trinkui-border))]"
                  />
                ) : (
                  <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[rgb(var(--trinkui-primary)/0.15)] text-xl font-bold text-[rgb(var(--trinkui-primary))]">
                    {testimonial.author.charAt(0).toUpperCase()}
                  </div>
                )}
                <div className="flex flex-col gap-0.5">
                  <span className="text-base font-semibold text-[rgb(var(--trinkui-fg))]">
                    {testimonial.author}
                  </span>
                  {testimonial.role && (
                    <span className="text-sm text-[rgb(var(--trinkui-muted))]">
                      {testimonial.role}
                    </span>
                  )}
                </div>
              </div>

              {/* Company logo */}
              {testimonial.companyLogo && (
                <img
                  src={testimonial.companyLogo.src}
                  alt={testimonial.companyLogo.alt}
                  className="h-8 opacity-60 grayscale"
                />
              )}
            </div>
          </FadeIn>

          {children}
        </Container>
      </Section>
    );
  }
);

TestimonialsFeatured.displayName = "TestimonialsFeatured";
