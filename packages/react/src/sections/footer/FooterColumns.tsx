"use client";

import React, { forwardRef } from "react";
import type { FooterBaseProps } from "./footer.types";
import { Container } from "../../layout/Container";
import { cn } from "../../utils/cn";

/**
 * Multi-column footer with brand + description on the left and link columns on the right.
 * Bottom row contains copyright and legal links separated by a divider.
 * Responsive: brand is full-width on mobile, link groups display in 2-column grid on mobile,
 * expanding to full columns on desktop.
 *
 * @example
 * <FooterColumns
 *   brandName="Acme"
 *   description="Building great products for everyone."
 *   linkGroups={[
 *     { title: "Product", links: [{ label: "Features", href: "#features" }] },
 *     { title: "Company", links: [{ label: "About", href: "/about" }] },
 *   ]}
 *   copyright="© 2024 Acme Inc."
 *   legalLinks={[{ label: "Privacy", href: "/privacy" }]}
 * />
 */
export const FooterColumns = forwardRef<HTMLElement, FooterBaseProps>(
  (
    {
      logo,
      brandName,
      description,
      linkGroups = [],
      socialLinks = [],
      copyright,
      legalLinks = [],
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
          {/* Top section: brand + link columns */}
          <div className="py-12 lg:py-16">
            <div className="grid grid-cols-1 gap-10 lg:grid-cols-4">
              {/* Brand + description (1/3 width on lg) */}
              <div className="lg:col-span-1">
                <div className="flex items-center">
                  {logo ? (
                    logo
                  ) : brandName ? (
                    <span className="text-lg font-bold text-[rgb(var(--trinkui-fg))]">
                      {brandName}
                    </span>
                  ) : null}
                </div>
                {description && (
                  <p className="mt-4 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]">
                    {description}
                  </p>
                )}
                {/* Social links under brand */}
                {socialLinks.length > 0 && (
                  <nav
                    aria-label="Social links"
                    className="mt-6 flex flex-wrap gap-3"
                  >
                    {socialLinks.map((link) => (
                      <a
                        key={link.href}
                        href={link.href}
                        target={link.external !== false ? "_blank" : undefined}
                        rel={
                          link.external !== false
                            ? "noopener noreferrer"
                            : undefined
                        }
                        className="text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
                      >
                        {link.label}
                      </a>
                    ))}
                  </nav>
                )}
              </div>

              {/* Link groups (2/3 width on lg, 3-4 columns) */}
              {linkGroups.length > 0 && (
                <div
                  className={cn(
                    "grid grid-cols-2 gap-8 lg:col-span-3",
                    linkGroups.length <= 2
                      ? "sm:grid-cols-2"
                      : linkGroups.length === 3
                      ? "sm:grid-cols-3"
                      : "sm:grid-cols-4"
                  )}
                >
                  {linkGroups.map((group) => (
                    <div key={group.title}>
                      <h3 className="text-sm font-semibold uppercase tracking-wider text-[rgb(var(--trinkui-fg))]">
                        {group.title}
                      </h3>
                      <ul className="mt-4 space-y-3">
                        {group.links.map((link) => (
                          <li key={link.href}>
                            <a
                              href={link.href}
                              target={link.external ? "_blank" : undefined}
                              rel={
                                link.external ? "noopener noreferrer" : undefined
                              }
                              className="text-sm text-[rgb(var(--trinkui-muted))] transition-colors hover:text-[rgb(var(--trinkui-fg))]"
                            >
                              {link.label}
                            </a>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Bottom section: divider + copyright + legal links */}
          <div className="border-t border-[rgb(var(--trinkui-border))] py-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              {copyright && (
                <p className="text-sm text-[rgb(var(--trinkui-muted))]">
                  {copyright}
                </p>
              )}
              {legalLinks.length > 0 && (
                <nav
                  aria-label="Legal links"
                  className="flex flex-wrap gap-4"
                >
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
            </div>
          </div>
        </Container>
      </footer>
    );
  }
);

FooterColumns.displayName = "FooterColumns";
