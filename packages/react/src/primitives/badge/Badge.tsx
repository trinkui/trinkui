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
      success: "bg-[rgb(var(--trinkui-success)/0.1)] text-[rgb(var(--trinkui-success))] border border-[rgb(var(--trinkui-success)/0.2)]",
      warning: "bg-[rgb(var(--trinkui-warning)/0.1)] text-[rgb(var(--trinkui-warning))] border border-[rgb(var(--trinkui-warning)/0.2)]",
      destructive: "bg-[rgb(var(--trinkui-danger)/0.1)] text-[rgb(var(--trinkui-danger))] border border-[rgb(var(--trinkui-danger)/0.2)]",
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
