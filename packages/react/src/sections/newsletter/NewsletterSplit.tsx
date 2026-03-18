"use client";

import React, { forwardRef, useState } from "react";
import type { NewsletterBaseProps } from "./newsletter.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { Button } from "../../primitives/button/Button";
import { Badge } from "../../primitives/badge/Badge";
import { SlideUp } from "../../animation/SlideUp";
import { FadeIn } from "../../animation/FadeIn";
import { cn } from "../../utils/cn";

export interface NewsletterSplitProps extends NewsletterBaseProps {}

/**
 * Split-layout newsletter section.
 * Left: title and description. Right: email form with privacy note.
 * Ideal for footers or mid-page placement.
 *
 * @example
 * <NewsletterSplit
 *   title="Never miss an update"
 *   subtitle="Join our newsletter for the latest news and releases."
 *   submitLabel="Subscribe"
 *   privacyNote="We respect your privacy. Unsubscribe at any time."
 *   onSubmit={(email) => subscribe(email)}
 * />
 */
export const NewsletterSplit = forwardRef<HTMLElement, NewsletterSplitProps>(
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

    const LeftWrapper = animated ? SlideUp : React.Fragment;
    const RightWrapper = animated ? FadeIn : React.Fragment;
    const leftProps = animated ? { scrollTrigger: true, delay: 0 } : {};
    const rightProps = animated ? { scrollTrigger: true, delay: 0.15 } : {};

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
        className={cn("relative", className)}
        {...props}
      >
        <Container size="xl">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left column */}
            <LeftWrapper {...(leftProps as object)}>
              <div className="flex flex-col gap-4">
                {pill && (
                  <Badge variant="primary" pill>
                    {pill}
                  </Badge>
                )}
                <h2
                  className={cn(
                    "font-heading text-3xl font-bold tracking-tight sm:text-4xl",
                    "text-[rgb(var(--trinkui-fg))]"
                  )}
                >
                  {title}
                </h2>
                {subtitle && (
                  <p className="text-lg text-[rgb(var(--trinkui-muted))]">
                    {subtitle}
                  </p>
                )}
              </div>
            </LeftWrapper>

            {/* Right column */}
            <RightWrapper {...(rightProps as object)}>
              <div className="flex flex-col gap-4">
                {success ? (
                  <div
                    className={cn(
                      "rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))]",
                      "bg-[rgb(var(--trinkui-surface))] px-6 py-5"
                    )}
                  >
                    <p className="text-base font-semibold text-[rgb(var(--trinkui-fg))]">
                      Thanks for subscribing!
                    </p>
                    <p className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]">
                      You'll hear from us soon.
                    </p>
                  </div>
                ) : (
                  <form
                    onSubmit={handleSubmit}
                    className="flex flex-col gap-3"
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
                      <p className="text-sm text-red-500" role="alert">
                        {error}
                      </p>
                    )}
                  </form>
                )}

                {privacyNote && !success && (
                  <p className="text-xs text-[rgb(var(--trinkui-muted))]">
                    {privacyNote}
                  </p>
                )}

                {children}
              </div>
            </RightWrapper>
          </div>
        </Container>
      </Section>
    );
  }
);

NewsletterSplit.displayName = "NewsletterSplit";
