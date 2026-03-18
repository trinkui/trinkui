"use client";

import React, { forwardRef, useState } from "react";
import type { ChipProps } from "./chip.types";
import { chipStyles, dotColorClasses } from "./chip.styles";
import { cn } from "../../utils/cn";

/**
 * Chip component for tags, filters, and status indicators.
 * Supports multiple variants, colors, avatar/icon slots, and an optional dismiss button.
 *
 * @example
 * <Chip color="primary">React</Chip>
 * <Chip variant="bordered" color="success" onDismiss={() => {}}>Active</Chip>
 * <Chip variant="dot" color="danger">Offline</Chip>
 */
export const Chip = forwardRef<HTMLDivElement, ChipProps>(
  (
    {
      variant = "solid",
      color = "default",
      size = "md",
      onDismiss,
      avatar,
      startContent,
      endContent,
      children,
      className,
      ...props
    },
    ref
  ) => {
    const [dismissed, setDismissed] = useState(false);

    if (dismissed) return null;

    const handleDismiss = () => {
      if (onDismiss) {
        onDismiss();
      } else {
        setDismissed(true);
      }
    };

    return (
      <div
        ref={ref}
        className={cn(chipStyles({ variant, color, size }), className)}
        {...props}
      >
        {variant === "dot" && (
          <span
            className={cn(
              "h-2 w-2 shrink-0 rounded-full",
              dotColorClasses[color]
            )}
            aria-hidden="true"
          />
        )}
        {avatar && (
          <span className="shrink-0 -ml-0.5">{avatar}</span>
        )}
        {startContent && (
          <span className="shrink-0">{startContent}</span>
        )}
        <span className="truncate">{children}</span>
        {endContent && (
          <span className="shrink-0">{endContent}</span>
        )}
        {onDismiss !== undefined && (
          <button
            type="button"
            onClick={handleDismiss}
            className={cn(
              "shrink-0 rounded-full p-0.5 -mr-0.5",
              "transition-colors duration-150",
              "hover:bg-black/10 dark:hover:bg-white/10",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--trinkui-primary))]"
            )}
            aria-label="Dismiss"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-3.5 w-3.5"
              aria-hidden="true"
            >
              <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
            </svg>
          </button>
        )}
      </div>
    );
  }
);

Chip.displayName = "Chip";
