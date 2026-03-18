import React, { forwardRef } from "react";
import type { ProgressProps } from "./progress.types";
import { cn } from "../../utils/cn";

const sizeClasses: Record<string, string> = {
  sm: "h-1",
  md: "h-2",
  lg: "h-3",
};

const colorClasses: Record<string, string> = {
  primary: "bg-[rgb(var(--trinkui-primary))]",
  secondary: "bg-[rgb(var(--trinkui-secondary))]",
  success: "bg-green-500",
  warning: "bg-amber-500",
  danger: "bg-red-500",
};

const trackColorClasses: Record<string, string> = {
  primary: "bg-[rgb(var(--trinkui-primary)/0.15)]",
  secondary: "bg-[rgb(var(--trinkui-secondary)/0.15)]",
  success: "bg-green-500/15",
  warning: "bg-amber-500/15",
  danger: "bg-red-500/15",
};

/**
 * Progress bar component for displaying completion or loading states.
 * Supports multiple sizes, colors, striped patterns, and animated stripes.
 *
 * @example
 * <Progress value={65} color="primary" showValue />
 * <Progress value={40} size="lg" striped animated />
 */
export const Progress = forwardRef<HTMLDivElement, ProgressProps>(
  (
    {
      value,
      size = "md",
      color = "primary",
      showValue = false,
      label,
      striped = false,
      animated = false,
      className,
      ...props
    },
    ref
  ) => {
    const clampedValue = Math.min(100, Math.max(0, value));

    return (
      <div ref={ref} className={cn("flex flex-col gap-1.5", className)} {...props}>
        {(label || showValue) && (
          <div className="flex items-center justify-between text-sm">
            {label && (
              <span className="font-medium text-[rgb(var(--trinkui-fg))]">
                {label}
              </span>
            )}
            {showValue && (
              <span className="text-[rgb(var(--trinkui-muted))]">
                {Math.round(clampedValue)}%
              </span>
            )}
          </div>
        )}
        <div
          role="progressbar"
          aria-valuenow={clampedValue}
          aria-valuemin={0}
          aria-valuemax={100}
          aria-label={label ?? `Progress: ${Math.round(clampedValue)}%`}
          className={cn(
            "w-full overflow-hidden rounded-full",
            trackColorClasses[color],
            sizeClasses[size]
          )}
        >
          <div
            className={cn(
              "h-full rounded-full transition-all duration-500 ease-out",
              colorClasses[color],
              striped &&
                "bg-[length:1rem_1rem] bg-[linear-gradient(45deg,rgba(255,255,255,0.15)_25%,transparent_25%,transparent_50%,rgba(255,255,255,0.15)_50%,rgba(255,255,255,0.15)_75%,transparent_75%,transparent)]",
              striped && animated && "animate-[progress-stripe_1s_linear_infinite]"
            )}
            style={{ width: `${clampedValue}%` }}
          />
        </div>
      </div>
    );
  }
);

Progress.displayName = "Progress";
