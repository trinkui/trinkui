"use client";

import React, { forwardRef } from "react";
import type { FooterBaseProps } from "./footer.types";
import { Container } from "../../layout/Container";
import { cn } from "../../utils/cn";

/**
 * Minimal single-row footer with brand on the left, links in the center,
 * and copyright/social on the right. Stacks vertically on mobile.
 *
 * @example
 * <FooterSimple
 *   brandName="Acme"
 *   legalLinks={[{ label: "Privacy", href: "/privacy" }, { label: "Terms", href: "/terms" }]}
 *   copyright="© 2024 Acme Inc. All rights reserved."
 * />
 */
export const FooterSimple = forwardRef<HTMLElement, FooterBaseProps>(
  (
    {
      logo,
      brandName,
      legalLinks = [],
      socialLinks = [],
      copyright,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <footer
        ref={ref}
        className={cn(
          "w-full border-t border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))]",
          className
        )}
        {...props}
      >
        <Container size="xl">
          <div className="flex flex-col gap-6 py-8 sm:flex-row sm:items-center sm:justify-between">
            {/* Brand */}
            <div className="flex shrink-0 items-center">
              {logo ? (
                logo
              ) : brandName ? (
                <span className="text-base font-bold text-[rgb(var(--trinkui-fg))]">
                  {brandName}
                </span>
              ) : null}
            </div>

            {/* Legal links */}
            {legalLinks.length > 0 && (
              <nav aria-label="Legal links" className="flex flex-wrap gap-4">
                {legalLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    target={link.external ? "_blank" : undefined}
                    rel={link.external ? "noopener noreferrer" : undefined}
                    className="text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            )}

            {/* Copyright + social */}
            <div className="flex flex-wrap items-center gap-4">
              {socialLinks.length > 0 && (
                <nav aria-label="Social links" className="flex items-center gap-3">
                  {socialLinks.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      target={link.external !== false ? "_blank" : undefined}
                      rel={
                        link.external !== false ? "noopener noreferrer" : undefined
                      }
                      className="text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
                    >
                      {link.label}
                    </a>
                  ))}
                </nav>
              )}
              {copyright && (
                <p className="text-sm text-[rgb(var(--trinkui-muted))]">
                  {copyright}
                </p>
              )}
            </div>
          </div>
        </Container>
      </footer>
    );
  }
);

FooterSimple.displayName = "FooterSimple";
