"use client";

import React, { forwardRef, useState, useMemo, useCallback } from "react";
import type { PaginationProps } from "./pagination.types";
import { cn } from "../../utils/cn";

const sizeClasses: Record<string, string> = {
  sm: "h-7 min-w-7 text-xs",
  md: "h-9 min-w-9 text-sm",
  lg: "h-11 min-w-11 text-base",
};

const ELLIPSIS = "...";

/**
 * Compute the visible page range with ellipsis.
 */
function getPages(
  total: number,
  current: number,
  siblings: number,
  boundaries: number
): (number | string)[] {
  const totalPageNumbers = siblings * 2 + 1 + boundaries * 2 + 2; // +2 for ellipses

  if (total <= totalPageNumbers) {
    return Array.from({ length: total }, (_, i) => i + 1);
  }

  const leftSiblingIndex = Math.max(current - siblings, boundaries + 1);
  const rightSiblingIndex = Math.min(current + siblings, total - boundaries);

  const showLeftEllipsis = leftSiblingIndex > boundaries + 2;
  const showRightEllipsis = rightSiblingIndex < total - boundaries - 1;

  const pages: (number | string)[] = [];

  // Left boundary pages
  for (let i = 1; i <= boundaries; i++) {
    pages.push(i);
  }

  // Left ellipsis or fill
  if (showLeftEllipsis) {
    pages.push(ELLIPSIS);
  } else {
    for (let i = boundaries + 1; i < leftSiblingIndex; i++) {
      pages.push(i);
    }
  }

  // Sibling pages + current
  for (let i = leftSiblingIndex; i <= rightSiblingIndex; i++) {
    pages.push(i);
  }

  // Right ellipsis or fill
  if (showRightEllipsis) {
    pages.push(ELLIPSIS);
  } else {
    for (let i = rightSiblingIndex + 1; i <= total - boundaries; i++) {
      pages.push(i);
    }
  }

  // Right boundary pages
  for (let i = total - boundaries + 1; i <= total; i++) {
    pages.push(i);
  }

  return pages;
}

/**
 * Pagination component for navigating paged content.
 * Renders page numbers with prev/next buttons and ellipsis for gaps.
 *
 * @example
 * <Pagination total={20} defaultPage={1} onChange={(p) => console.log(p)} />
 * <Pagination total={10} page={3} variant="bordered" size="sm" />
 */
export const Pagination = forwardRef<HTMLElement, PaginationProps>(
  (
    {
      total,
      page: controlledPage,
      defaultPage = 1,
      onChange,
      siblings = 1,
      boundaries = 1,
      size = "md",
      variant = "flat",
      showControls = true,
      className,
      ...props
    },
    ref
  ) => {
    const isControlled = controlledPage !== undefined;
    const [internalPage, setInternalPage] = useState(defaultPage);
    const activePage = isControlled ? controlledPage : internalPage;

    const setPage = useCallback(
      (p: number) => {
        const clamped = Math.min(total, Math.max(1, p));
        if (!isControlled) {
          setInternalPage(clamped);
        }
        onChange?.(clamped);
      },
      [isControlled, total, onChange]
    );

    const pages = useMemo(
      () => getPages(total, activePage, siblings, boundaries),
      [total, activePage, siblings, boundaries]
    );

    if (total <= 0) return null;

    const baseButtonStyles = cn(
      "inline-flex items-center justify-center rounded-[var(--trinkui-radius-md)]",
      "font-medium transition-colors duration-150 select-none",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--trinkui-primary))] focus-visible:ring-offset-1",
      "disabled:pointer-events-none disabled:opacity-50",
      sizeClasses[size]
    );

    const activeStyles =
      "bg-[rgb(var(--trinkui-primary))] text-[rgb(var(--trinkui-primary-fg))]";

    const inactiveStyles = cn(
      "text-[rgb(var(--trinkui-fg))]",
      variant === "bordered"
        ? "border border-[rgb(var(--trinkui-border))] hover:bg-[rgb(var(--trinkui-surface))]"
        : "hover:bg-[rgb(var(--trinkui-surface))]"
    );

    return (
      <nav
        ref={ref}
        role="navigation"
        aria-label="Pagination"
        className={cn("flex items-center gap-1", className)}
        {...props}
      >
        {showControls && (
          <button
            type="button"
            disabled={activePage <= 1}
            onClick={() => setPage(activePage - 1)}
            className={cn(baseButtonStyles, inactiveStyles)}
            aria-label="Previous page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M11.78 5.22a.75.75 0 010 1.06L8.06 10l3.72 3.72a.75.75 0 11-1.06 1.06l-4.25-4.25a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}

        {pages.map((p, index) =>
          typeof p === "string" ? (
            <span
              key={`ellipsis-${index}`}
              className={cn(
                "inline-flex items-center justify-center",
                "text-[rgb(var(--trinkui-muted))]",
                sizeClasses[size]
              )}
              aria-hidden="true"
            >
              {ELLIPSIS}
            </span>
          ) : (
            <button
              key={p}
              type="button"
              onClick={() => setPage(p)}
              aria-current={p === activePage ? "page" : undefined}
              className={cn(
                baseButtonStyles,
                p === activePage ? activeStyles : inactiveStyles
              )}
            >
              {p}
            </button>
          )
        )}

        {showControls && (
          <button
            type="button"
            disabled={activePage >= total}
            onClick={() => setPage(activePage + 1)}
            className={cn(baseButtonStyles, inactiveStyles)}
            aria-label="Next page"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8.22 5.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        )}
      </nav>
    );
  }
);

Pagination.displayName = "Pagination";
