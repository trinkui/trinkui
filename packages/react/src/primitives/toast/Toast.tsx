"use client";

import React, { useEffect } from "react";
import { motion } from "motion/react";
import type { ToastProps, ToastVariant } from "./toast.types";
import { cn } from "../../utils/cn";

const variantClasses: Record<ToastVariant, string> = {
  default: "border-[rgb(var(--trinkui-border))]",
  success: "border-l-4 border-l-green-500 border-[rgb(var(--trinkui-border))]",
  warning: "border-l-4 border-l-amber-500 border-[rgb(var(--trinkui-border))]",
  danger: "border-l-4 border-l-red-500 border-[rgb(var(--trinkui-border))]",
};

/**
 * Individual Toast notification component.
 * Renders an animated toast with auto-dismiss and manual close.
 */
export const Toast: React.FC<ToastProps> = ({ entry, onRemove }) => {
  const { id, title, description, variant = "default", duration = 5000 } = entry;

  useEffect(() => {
    const timer = setTimeout(() => {
      onRemove(id);
    }, duration);

    return () => clearTimeout(timer);
  }, [id, duration, onRemove]);

  return (
    <motion.div
      layout
      initial={{ opacity: 0, x: 50, scale: 0.95 }}
      animate={{ opacity: 1, x: 0, scale: 1 }}
      exit={{ opacity: 0, x: 50, scale: 0.95 }}
      transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      role="status"
      aria-live="polite"
      className={cn(
        "pointer-events-auto w-[360px] max-w-full",
        "rounded-[var(--trinkui-radius-md)]",
        "border bg-[rgb(var(--trinkui-bg))] shadow-[var(--trinkui-shadow-lg)]",
        "px-4 py-3",
        variantClasses[variant]
      )}
    >
      <div className="flex items-start gap-3">
        <div className="flex-1 min-w-0">
          <p className="text-sm font-semibold text-[rgb(var(--trinkui-fg))]">
            {title}
          </p>
          {description && (
            <p className="mt-0.5 text-sm text-[rgb(var(--trinkui-muted))]">
              {description}
            </p>
          )}
        </div>
        <button
          type="button"
          onClick={() => onRemove(id)}
          className={cn(
            "shrink-0 inline-flex h-6 w-6 items-center justify-center",
            "rounded-[var(--trinkui-radius-sm)]",
            "text-[rgb(var(--trinkui-muted))]",
            "transition-colors duration-150",
            "hover:bg-[rgb(var(--trinkui-surface))] hover:text-[rgb(var(--trinkui-fg))]",
            "focus-visible:outline-none focus-visible:ring-2",
            "focus-visible:ring-[rgb(var(--trinkui-primary))]"
          )}
          aria-label="Dismiss toast"
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
      </div>
    </motion.div>
  );
};

Toast.displayName = "Toast";
