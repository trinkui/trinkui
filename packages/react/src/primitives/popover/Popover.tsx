"use client";

import React, { forwardRef, useState, useRef, useEffect, useCallback } from "react";
import type { PopoverProps, PopoverPosition } from "./popover.types";
import { cn } from "../../utils/cn";

const positionClasses: Record<PopoverPosition, string> = {
  top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
  bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
  left: "right-full top-1/2 -translate-y-1/2 mr-2",
  right: "left-full top-1/2 -translate-y-1/2 ml-2",
};

const arrowClasses: Record<PopoverPosition, string> = {
  top: "top-full left-1/2 -translate-x-1/2 border-t-[rgb(var(--trinkui-surface))] border-x-transparent border-b-transparent",
  bottom: "bottom-full left-1/2 -translate-x-1/2 border-b-[rgb(var(--trinkui-surface))] border-x-transparent border-t-transparent",
  left: "left-full top-1/2 -translate-y-1/2 border-l-[rgb(var(--trinkui-surface))] border-y-transparent border-r-transparent",
  right: "right-full top-1/2 -translate-y-1/2 border-r-[rgb(var(--trinkui-surface))] border-y-transparent border-l-transparent",
};

/**
 * Popover primitive component.
 * Renders a floating content panel anchored to a trigger element.
 * Supports click or hover activation, with an arrow pointing to the trigger.
 * Click-outside or Escape key closes the popover when using click mode.
 *
 * @example
 * <Popover trigger={<Button>Open</Button>} content={<p>Hello!</p>} position="bottom" />
 * <Popover trigger={<span>Hover me</span>} content="Info" triggerOn="hover" />
 */
export const Popover = forwardRef<HTMLDivElement, PopoverProps>(
  ({ trigger, content, position = "bottom", triggerOn = "click", className }, ref) => {
    const [open, setOpen] = useState(false);
    const wrapperRef = useRef<HTMLDivElement>(null);
    const hoverTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    // Close on outside click (click mode)
    useEffect(() => {
      if (triggerOn !== "click" || !open) return;

      const handleClickOutside = (e: MouseEvent) => {
        if (wrapperRef.current && !wrapperRef.current.contains(e.target as Node)) {
          setOpen(false);
        }
      };

      const handleEscape = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          setOpen(false);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("keydown", handleEscape);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
        document.removeEventListener("keydown", handleEscape);
      };
    }, [triggerOn, open]);

    const handleClick = useCallback(() => {
      if (triggerOn === "click") {
        setOpen((prev) => !prev);
      }
    }, [triggerOn]);

    const handleMouseEnter = useCallback(() => {
      if (triggerOn === "hover") {
        if (hoverTimeoutRef.current) {
          clearTimeout(hoverTimeoutRef.current);
          hoverTimeoutRef.current = null;
        }
        setOpen(true);
      }
    }, [triggerOn]);

    const handleMouseLeave = useCallback(() => {
      if (triggerOn === "hover") {
        hoverTimeoutRef.current = setTimeout(() => setOpen(false), 150);
      }
    }, [triggerOn]);

    // Merge external ref with internal ref
    const mergedRef = useCallback(
      (node: HTMLDivElement | null) => {
        (wrapperRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
        if (typeof ref === "function") {
          ref(node);
        } else if (ref) {
          (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
        }
      },
      [ref]
    );

    return (
      <div
        ref={mergedRef}
        className={cn("relative inline-flex", className)}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        {/* Trigger */}
        <div onClick={handleClick} aria-expanded={open} aria-haspopup="true">
          {trigger}
        </div>

        {/* Panel */}
        <div
          role="dialog"
          className={cn(
            "absolute z-50",
            "rounded-[var(--trinkui-radius-lg)] p-3",
            "bg-[rgb(var(--trinkui-surface))] text-[rgb(var(--trinkui-fg))]",
            "border border-[rgb(var(--trinkui-border))]",
            "shadow-[var(--trinkui-shadow-md)]",
            "transition-all duration-150",
            open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0",
            positionClasses[position]
          )}
        >
          {content}

          {/* Arrow */}
          <span
            className={cn(
              "absolute h-0 w-0 border-[6px]",
              arrowClasses[position]
            )}
            aria-hidden="true"
          />
        </div>
      </div>
    );
  }
);

Popover.displayName = "Popover";
