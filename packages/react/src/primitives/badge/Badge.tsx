import React, { forwardRef } from "react";
import { cn } from "../../utils/cn";
import { variants } from "../../utils/variants";

export type BadgeVariant = "default" | "primary" | "secondary" | "outline" | "success" | "warning" | "destructive";
export type BadgeSize = "sm" | "md";

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Visual style variant */
  variant?: BadgeVariant;
  /** Size of the badge */
  size?: BadgeSize;
  /** Render as a pill shape */
  pill?: boolean;
}

const badgeStyles = variants({
  base: "inline-flex items-center gap-1 font-medium",
  variants: {
    variant: {
      default: "bg-[rgb(var(--trinkui-surface))] text-[rgb(var(--trinkui-fg))] border border-[rgb(var(--trinkui-border))]",
      primary: "bg-[rgb(var(--trinkui-primary)/0.1)] text-[rgb(var(--trinkui-primary))] border border-[rgb(var(--trinkui-primary)/0.2)]",
      secondary: "bg-[rgb(var(--trinkui-secondary))] text-[rgb(var(--trinkui-secondary-fg))]",
      outline: "border border-[rgb(var(--trinkui-border))] text-[rgb(var(--trinkui-fg))] bg-transparent",
      success: "bg-green-50 text-green-700 border border-green-200 dark:bg-green-950 dark:text-green-400 dark:border-green-800",
      warning: "bg-amber-50 text-amber-700 border border-amber-200 dark:bg-amber-950 dark:text-amber-400 dark:border-amber-800",
      destructive: "bg-red-50 text-red-700 border border-red-200 dark:bg-red-950 dark:text-red-400 dark:border-red-800",
    },
    size: {
      sm: "px-2 py-0.5 text-xs",
      md: "px-3 py-1 text-sm",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
  },
});

/**
 * Badge component for labels, statuses, and tags.
 *
 * @example
 * <Badge variant="primary" pill>New</Badge>
 * <Badge variant="success">Active</Badge>
 */
export const Badge = forwardRef<HTMLSpanElement, BadgeProps>(
  ({ variant = "default", size = "md", pill = true, className, children, ...props }, ref) => {
    return (
      <span
        ref={ref}
        className={cn(
          badgeStyles({ variant, size }),
          pill ? "rounded-full" : "rounded-[var(--trinkui-radius-sm)]",
          className
        )}
        {...props}
      >
        {children}
      </span>
    );
  }
);

Badge.displayName = "Badge";
