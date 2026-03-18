import React from "react";
import { cn } from "../../utils/cn";

export interface DividerProps {
  /** Orientation */
  orientation?: "horizontal" | "vertical";
  /** Optional label text centered in the divider */
  label?: string;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Divider primitive component.
 * Renders a horizontal or vertical separator, optionally with a centered label.
 *
 * @example
 * <Divider />
 * <Divider label="or" />
 * <Divider orientation="vertical" />
 */
export const Divider = ({
  orientation = "horizontal",
  label,
  className,
}: DividerProps) => {
  if (orientation === "vertical") {
    return (
      <div
        role="separator"
        aria-orientation="vertical"
        className={cn(
          "inline-block h-full w-px bg-[rgb(var(--trinkui-border))]",
          className
        )}
      />
    );
  }

  if (label) {
    return (
      <div
        role="separator"
        aria-orientation="horizontal"
        className={cn("flex items-center gap-3", className)}
      >
        <div className="flex-1 border-t border-[rgb(var(--trinkui-border))]" />
        <span className="text-sm text-[rgb(var(--trinkui-muted))] select-none whitespace-nowrap">
          {label}
        </span>
        <div className="flex-1 border-t border-[rgb(var(--trinkui-border))]" />
      </div>
    );
  }

  return (
    <div
      role="separator"
      aria-orientation="horizontal"
      className={cn("border-t border-[rgb(var(--trinkui-border))]", className)}
    />
  );
};

Divider.displayName = "Divider";
