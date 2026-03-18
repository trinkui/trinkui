"use client";

import React, { forwardRef, useState } from "react";
import type { AlertProps } from "./alert.types";
import { alertStyles, alertIconColorMap } from "./alert.styles";
import { cn } from "../../utils/cn";

/**
 * Alert primitive component.
 * Displays a colored alert box with optional icon, title, description, and dismiss button.
 *
 * @example
 * <Alert variant="success" title="Saved" description="Your changes have been saved." />
 * <Alert variant="danger" dismissible onDismiss={() => {}}>Something went wrong.</Alert>
 */
export const Alert = forwardRef<HTMLDivElement, AlertProps>(
  (
    {
      variant = "info",
      title,
      description,
      icon,
      dismissible = false,
      onDismiss,
      className,
      children,
    },
    ref
  ) => {
    const [dismissed, setDismissed] = useState(false);

    if (dismissed) return null;

    const handleDismiss = () => {
      setDismissed(true);
      onDismiss?.();
    };

    return (
      <div
        ref={ref}
        role="alert"
        className={cn(alertStyles({ variant }), className)}
      >
        {icon && (
          <span
            className={cn("shrink-0 mt-0.5", alertIconColorMap[variant])}
            aria-hidden="true"
          >
            {icon}
          </span>
        )}
        <div className="flex-1 min-w-0">
          {title && (
            <p className="font-semibold text-[rgb(var(--trinkui-fg))]">
              {title}
            </p>
          )}
          {description && (
            <p className="mt-0.5 text-sm text-[rgb(var(--trinkui-muted))]">
              {description}
            </p>
          )}
          {children && (
            <div className="mt-1 text-sm text-[rgb(var(--trinkui-fg))]">
              {children}
            </div>
          )}
        </div>
        {dismissible && (
          <button
            type="button"
            onClick={handleDismiss}
            className={cn(
              "shrink-0 inline-flex h-6 w-6 items-center justify-center",
              "rounded-[var(--trinkui-radius-sm)]",
              "text-[rgb(var(--trinkui-muted))]",
              "transition-colors duration-150",
              "hover:bg-[rgb(var(--trinkui-surface))] hover:text-[rgb(var(--trinkui-fg))]",
              "focus-visible:outline-none focus-visible:ring-2",
              "focus-visible:ring-[rgb(var(--trinkui-primary))]"
            )}
            aria-label="Dismiss alert"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
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

Alert.displayName = "Alert";
