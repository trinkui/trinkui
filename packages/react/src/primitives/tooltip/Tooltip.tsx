"use client";

import React, { forwardRef, useState, useRef, useCallback } from "react";
import type { TooltipProps, TooltipPosition } from "./tooltip.types";
import { cn } from "../../utils/cn";

const positionClasses: Record<TooltipPosition, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const arrowClasses: Record<TooltipPosition, string> = {
  top: "top-full left-1/2 -translate-x-1/2 border-t-[rgb(var(--trinkui-fg))] border-x-transparent border-b-transparent",
  bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-[rgb(var(--trinkui-fg))] border-x-transparent border-t-transparent",
  left: "left-full top-1/2 -translate-y-1/2 border-l-[rgb(var(--trinkui-fg))] border-y-transparent border-r-transparent",
  right: "right-full top-1/2 -translate-y-1/2 border-r-[rgb(var(--trinkui-fg))] border-y-transparent border-l-transparent",
};

/**
 * Tooltip primitive component.
 * Displays a small text label on hover/focus with configurable position and delay.
 * Uses CSS transitions for smooth enter/exit animation.
 *
 * @example
 * <Tooltip content="Delete item" position="top">
 *   <button>🗑</button>
 * </Tooltip>
 */
export const Tooltip = forwardRef<HTMLSpanElement, TooltipProps>(
  ({ content, position = "top", delay = 200, children, className }, ref) => {
    const [visible, setVisible] = useState(false);
    const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const show = useCallback(() => {
      timeoutRef.current = setTimeout(() => setVisible(true), delay);
    }, [delay]);

    const hide = useCallback(() => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
        timeoutRef.current = null;
      }
      setVisible(false);
    }, []);

    return (
      <span
        ref={ref}
        className={cn("relative inline-flex", className)}
        onMouseEnter={show}
        onMouseLeave={hide}
        onFocus={show}
        onBlur={hide}
      >
        {children}

        {/* Tooltip bubble */}
        <span
          role="tooltip"
          className={cn(
            "pointer-events-none absolute z-50",
            "whitespace-nowrap rounded-[var(--trinkui-radius-sm)] px-2.5 py-1.5",
            "bg-[rgb(var(--trinkui-fg))] text-xs font-medium text-[rgb(var(--trinkui-bg))]",
            "shadow-[var(--trinkui-shadow-sm)]",
            "transition-all duration-150",
            visible
              ? "scale-100 opacity-100"
              : "scale-95 opacity-0",
            positionClasses[position]
          )}
        >
          {content}

          {/* Arrow */}
          <span
            className={cn(
              "absolute h-0 w-0 border-[4px]",
              arrowClasses[position]
            )}
            aria-hidden="true"
          />
        </span>
      </span>
    );
  }
);

Tooltip.displayName = "Tooltip";
