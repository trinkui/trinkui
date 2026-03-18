import React, { forwardRef } from "react";
import type { SkeletonProps } from "./skeleton.types";
import { cn } from "../../utils/cn";

function toCssValue(value: string | number | undefined): string | undefined {
  if (value === undefined) return undefined;
  return typeof value === "number" ? `${value}px` : value;
}

/**
 * Skeleton primitive component.
 * Renders a placeholder with a shimmer animation for loading states.
 * Supports text (single or multi-line), circular, and rectangular shapes.
 *
 * @example
 * <Skeleton variant="text" lines={3} />
 * <Skeleton variant="circular" width={48} height={48} />
 * <Skeleton variant="rectangular" width="100%" height={200} />
 */
export const Skeleton = forwardRef<HTMLDivElement, SkeletonProps>(
  (
    {
      variant = "text",
      width,
      height,
      lines = 1,
      animated = true,
      className,
    },
    ref
  ) => {
    const baseClasses = cn(
      "bg-[rgb(var(--trinkui-border))]",
      animated && "animate-pulse",
      className
    );

    // Circular variant
    if (variant === "circular") {
      return (
        <div
          ref={ref}
          className={cn(baseClasses, "rounded-full")}
          style={{
            width: toCssValue(width) ?? "40px",
            height: toCssValue(height) ?? toCssValue(width) ?? "40px",
          }}
          aria-hidden="true"
        />
      );
    }

    // Rectangular variant
    if (variant === "rectangular") {
      return (
        <div
          ref={ref}
          className={cn(baseClasses, "rounded-[var(--trinkui-radius-lg)]")}
          style={{
            width: toCssValue(width) ?? "100%",
            height: toCssValue(height) ?? "100px",
          }}
          aria-hidden="true"
        />
      );
    }

    // Text variant (single or multi-line)
    if (lines <= 1) {
      return (
        <div
          ref={ref}
          className={cn(baseClasses, "rounded-[var(--trinkui-radius-sm)]")}
          style={{
            width: toCssValue(width) ?? "100%",
            height: toCssValue(height) ?? "16px",
          }}
          aria-hidden="true"
        />
      );
    }

    // Multi-line text
    return (
      <div ref={ref} className="flex flex-col gap-2" aria-hidden="true">
        {Array.from({ length: lines }, (_, i) => (
          <div
            key={i}
            className={cn(baseClasses, "rounded-[var(--trinkui-radius-sm)]")}
            style={{
              width:
                i === lines - 1
                  ? "75%"
                  : toCssValue(width) ?? "100%",
              height: toCssValue(height) ?? "16px",
            }}
          />
        ))}
      </div>
    );
  }
);

Skeleton.displayName = "Skeleton";
