import React, { forwardRef } from "react";
import type { SpinnerProps } from "./spinner.types";
import { cn } from "../../utils/cn";

const sizeMap: Record<string, number> = {
  sm: 16,
  md: 24,
  lg: 32,
  xl: 48,
};

const colorMap: Record<string, string> = {
  primary: "text-[rgb(var(--trinkui-primary))]",
  current: "text-current",
  white: "text-white",
};

/**
 * Spinner primitive component.
 * Renders an animated SVG circle spinner for loading states.
 *
 * @example
 * <Spinner />
 * <Spinner size="lg" color="primary" label="Loading data..." />
 */
export const Spinner = forwardRef<SVGSVGElement, SpinnerProps>(
  ({ size = "md", color = "primary", label = "Loading", className }, ref) => {
    const dimension = sizeMap[size] ?? sizeMap.md;
    const colorClass = colorMap[color] ?? colorMap.primary;

    return (
      <svg
        ref={ref}
        className={cn("animate-spin", colorClass, className)}
        width={dimension}
        height={dimension}
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        role="status"
        aria-label={label}
      >
        <circle
          className="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          strokeWidth="4"
        />
        <path
          className="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
        />
      </svg>
    );
  }
);

Spinner.displayName = "Spinner";
