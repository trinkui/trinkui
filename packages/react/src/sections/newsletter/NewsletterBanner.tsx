"use client";

import React, { forwardRef, useState } from "react";
import type { NewsletterBaseProps } from "./newsletter.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { Button } from "../../primitives/button/Button";
import { Badge } from "../../primitives/badge/Badge";
import { SlideUp } from "../../animation/SlideUp";
import { cn } from "../../utils/cn";

export interface NewsletterBannerProps extends NewsletterBaseProps {}

/**
 * Centered newsletter section with inline email input and submit button.
 * Handles loading and success states. Shows a success message after submission.
 *
 * @example
 * <NewsletterBanner
 *   pill="Newsletter"
 *   title="Stay in the loop"
 *   subtitle="Get the latest updates delivered to your inbox."
 *   inputPlaceholder="you@example.com"
 *   submitLabel="Subscribe"
 *   privacyNote="No spam. Unsubscribe at any time."
 *   onSubmit={(email) => console.log(email)}
 * />
 */
export const NewsletterBanner = forwardRef<HTMLElement, NewsletterBannerProps>(
  (
    {
      pill,
      title,
      subtitle,
      inputPlaceholder = "Enter your email",
      submitLabel = "Subscribe",
      privacyNote,
      onSubmit,
      theme,
      animated = true,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const [email, setEmail] = useState("");
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState("");

    const Wrapper = animated ? SlideUp : React.Fragment;
    const wrapperProps = animated ? { scrollTrigger: true } : {};

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
      e.preventDefault();
      if (!email) {
        setError("Please enter your email address.");
        return;
      }
      setError("");
      setLoading(true);
      try {
        await onSubmit?.(email);
        setSuccess(true);
        setEmail("");
      } catch {
        setError("Something went wrong. Please try again.");
      } finally {
        setLoading(false);
      }
    }

    return (
      <Section
        ref={ref}
        theme={theme}
        spacing="lg"
        surface
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        <Container size="lg">
          <div className="flex flex-col items-center gap-8 text-center">
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
                  "font-heading max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl",
                  "text-[rgb(var(--trinkui-fg))]"
                )}
              >
                {title}
              </h2>
            </Wrapper>

            {/* Subtitle */}
            {subtitle && (
              <Wrapper {...(wrapperProps as object)} delay={0.1}>
                <p className="max-w-xl text-lg text-[rgb(var(--trinkui-muted))]">
                  {subtitle}
                </p>
              </Wrapper>
            )}

            {/* Form or success */}
            <Wrapper {...(wrapperProps as object)} delay={0.15}>
              {success ? (
                <div
                  className={cn(
                    "rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))]",
                    "bg-[rgb(var(--trinkui-bg))] px-8 py-6"
                  )}
                >
                  <p className="text-lg font-semibold text-[rgb(var(--trinkui-fg))]">
                    Thanks for subscribing!
                  </p>
                  <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
                    You'll hear from us soon.
                  </p>
                </div>
              ) : (
                <form
                  onSubmit={handleSubmit}
                  className="w-full max-w-md"
                  noValidate
                >
                  <div className="flex flex-col gap-3 sm:flex-row">
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder={inputPlaceholder}
                      aria-label="Email address"
                      className={cn(
                        "flex-1 rounded-[var(--trinkui-radius-md)]",
                        "border border-[rgb(var(--trinkui-border))]",
                        "bg-[rgb(var(--trinkui-bg))]",
                        "px-4 py-2.5 text-sm",
                        "text-[rgb(var(--trinkui-fg))]",
                        "placeholder:text-[rgb(var(--trinkui-muted))]",
                        "outline-none transition-all duration-200",
                        "focus:ring-2 focus:ring-[rgb(var(--trinkui-primary))] focus:ring-offset-1",
                        error && "border-red-500"
                      )}
                    />
                    <Button
                      type="submit"
                      variant="primary"
                      size="md"
                      loading={loading}
                    >
                      {submitLabel}
                    </Button>
                  </div>
                  {error && (
                    <p className="mt-2 text-sm text-red-500" role="alert">
                      {error}
                    </p>
                  )}
                </form>
              )}
            </Wrapper>

            {/* Privacy note */}
            {privacyNote && !success && (
              <Wrapper {...(wrapperProps as object)} delay={0.2}>
                <p className="text-xs text-[rgb(var(--trinkui-muted))]">
                  {privacyNote}
                </p>
              </Wrapper>
            )}

            {children}
          </div>
        </Container>
      </Section>
    );
  }
);

NewsletterBanner.displayName = "NewsletterBanner";
