"use client";

import React, { forwardRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { NavbarBaseProps } from "./navbar.types";
import { Container } from "../../layout/Container";
import { Button } from "../../primitives/button/Button";
import { cn } from "../../utils/cn";

/**
 * Simple horizontal navbar with mobile menu support.
 * Logo/brand on the left, nav links in the center, CTA buttons on the right.
 * Collapses to a hamburger menu on mobile with animated slide-down panel.
 *
 * @example
 * <NavbarSimple
 *   brandName="Acme"
 *   links={[{ label: "Features", href: "#features" }, { label: "Pricing", href: "#pricing" }]}
 *   primaryAction={{ label: "Get Started", href: "/signup" }}
 * />
 */
export const NavbarSimple = forwardRef<HTMLElement, NavbarBaseProps>(
  (
    {
      logo,
      brandName,
      links = [],
      primaryAction,
      secondaryAction,
      bordered = true,
      blur = false,
      sticky = false,
      className,
      ...props
    },
    ref
  ) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
      <header
        ref={ref}
        className={cn(
          "w-full",
          sticky ? "sticky top-0 z-50" : "relative",
          blur
            ? "backdrop-blur-md bg-[rgb(var(--trinkui-bg)/0.8)]"
            : "bg-[rgb(var(--trinkui-bg))]",
          bordered && "border-b border-[rgb(var(--trinkui-border))]",
          className
        )}
        {...props}
      >
        <Container size="xl">
          <div className="flex h-16 items-center justify-between">
            {/* Logo / Brand */}
            <div className="flex shrink-0 items-center">
              {logo ? (
                logo
              ) : brandName ? (
                <span className="text-lg font-bold text-[rgb(var(--trinkui-fg))]">
                  {brandName}
                </span>
              ) : null}
            </div>

            {/* Desktop nav links */}
            {links.length > 0 && (
              <nav
                aria-label="Main navigation"
                className="hidden md:flex items-center gap-6"
              >
                {links.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    className={cn(
                      "text-sm font-medium transition-colors hover:text-[rgb(var(--trinkui-primary))]",
                      link.active
                        ? "text-[rgb(var(--trinkui-primary))]"
                        : "text-[rgb(var(--trinkui-muted))]"
                    )}
                  >
                    {link.label}
                  </a>
                ))}
              </nav>
            )}

            {/* Desktop CTA buttons */}
            <div className="hidden md:flex items-center gap-3">
              {secondaryAction && (
                <a
                  href={secondaryAction.href}
                  onClick={secondaryAction.onClick}
                  target={secondaryAction.target}
                  rel={
                    secondaryAction.target === "_blank"
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <Button variant={secondaryAction.variant ?? "ghost"} size="sm">
                    {secondaryAction.label}
                  </Button>
                </a>
              )}
              {primaryAction && (
                <a
                  href={primaryAction.href}
                  onClick={primaryAction.onClick}
                  target={primaryAction.target}
                  rel={
                    primaryAction.target === "_blank"
                      ? "noopener noreferrer"
                      : undefined
                  }
                >
                  <Button variant={primaryAction.variant ?? "primary"} size="sm">
                    {primaryAction.label}
                  </Button>
                </a>
              )}
            </div>

            {/* Mobile hamburger button */}
            <button
              type="button"
              aria-label={isOpen ? "Close menu" : "Open menu"}
              aria-expanded={isOpen}
              aria-controls="navbar-mobile-menu"
              onClick={() => setIsOpen((prev) => !prev)}
              className="md:hidden flex items-center justify-center rounded-md p-2 text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] hover:bg-[rgb(var(--trinkui-surface))] transition-colors"
            >
              {isOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </svg>
              )}
            </button>
          </div>
        </Container>

        {/* Mobile menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              id="navbar-mobile-menu"
              key="mobile-menu"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.2, ease: "easeInOut" }}
              className="overflow-hidden md:hidden border-t border-[rgb(var(--trinkui-border))]"
            >
              <Container size="xl">
                <div className="flex flex-col gap-1 py-4">
                  {links.map((link) => (
                    <a
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        "rounded-md px-3 py-2 text-sm font-medium transition-colors hover:bg-[rgb(var(--trinkui-surface))] hover:text-[rgb(var(--trinkui-fg))]",
                        link.active
                          ? "text-[rgb(var(--trinkui-primary))] bg-[rgb(var(--trinkui-surface))]"
                          : "text-[rgb(var(--trinkui-muted))]"
                      )}
                    >
                      {link.label}
                    </a>
                  ))}

                  {(secondaryAction || primaryAction) && (
                    <div className="mt-3 flex flex-col gap-2 border-t border-[rgb(var(--trinkui-border))] pt-3">
                      {secondaryAction && (
                        <a
                          href={secondaryAction.href}
                          onClick={secondaryAction.onClick}
                          target={secondaryAction.target}
                          rel={
                            secondaryAction.target === "_blank"
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          <Button
                            variant={secondaryAction.variant ?? "ghost"}
                            size="sm"
                            fullWidth
                          >
                            {secondaryAction.label}
                          </Button>
                        </a>
                      )}
                      {primaryAction && (
                        <a
                          href={primaryAction.href}
                          onClick={primaryAction.onClick}
                          target={primaryAction.target}
                          rel={
                            primaryAction.target === "_blank"
                              ? "noopener noreferrer"
                              : undefined
                          }
                        >
                          <Button
                            variant={primaryAction.variant ?? "primary"}
                            size="sm"
                            fullWidth
                          >
                            {primaryAction.label}
                          </Button>
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </Container>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    );
  }
);

NavbarSimple.displayName = "NavbarSimple";
