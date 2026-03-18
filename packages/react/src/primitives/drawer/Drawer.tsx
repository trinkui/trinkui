"use client";

import React, { forwardRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { DrawerProps, DrawerPosition, DrawerSize } from "./drawer.types";
import { cn } from "../../utils/cn";

const sizeMap: Record<DrawerPosition, Record<DrawerSize, string>> = {
  left: { sm: "w-[320px]", md: "w-[400px]", lg: "w-[560px]", full: "w-full" },
  right: { sm: "w-[320px]", md: "w-[400px]", lg: "w-[560px]", full: "w-full" },
  top: { sm: "h-[320px]", md: "h-[400px]", lg: "h-[560px]", full: "h-full" },
  bottom: { sm: "h-[320px]", md: "h-[400px]", lg: "h-[560px]", full: "h-full" },
};

const positionClasses: Record<DrawerPosition, string> = {
  left: "inset-y-0 left-0",
  right: "inset-y-0 right-0",
  top: "inset-x-0 top-0",
  bottom: "inset-x-0 bottom-0",
};

const slideVariants: Record<DrawerPosition, { initial: Record<string, number>; animate: Record<string, number> }> = {
  left: { initial: { x: -100 }, animate: { x: 0 } },
  right: { initial: { x: 100 }, animate: { x: 0 } },
  top: { initial: { y: -100 }, animate: { y: 0 } },
  bottom: { initial: { y: 100 }, animate: { y: 0 } },
};

/**
 * Drawer primitive component.
 * Renders a sliding panel overlay from any edge of the viewport.
 * Supports title, body, and footer slots.
 *
 * @example
 * <Drawer open={isOpen} onClose={() => setIsOpen(false)} title="Menu" position="left">
 *   <nav>...</nav>
 * </Drawer>
 */
export const Drawer = forwardRef<HTMLDivElement, DrawerProps>(
  (
    {
      open,
      onClose,
      position = "right",
      size = "md",
      title,
      children,
      footer,
      closeOnBackdrop = true,
      className,
    },
    ref
  ) => {
    // Handle Escape key
    useEffect(() => {
      if (!open) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, onClose]);

    // Prevent body scroll when drawer is open
    useEffect(() => {
      if (open) {
        document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "";
      }
      return () => {
        document.body.style.overflow = "";
      };
    }, [open]);

    const slide = slideVariants[position];
    const isHorizontal = position === "left" || position === "right";

    return (
      <AnimatePresence>
        {open && (
          <div
            className="fixed inset-0 z-50"
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "trinkui-drawer-title" : undefined}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              onClick={closeOnBackdrop ? onClose : undefined}
              aria-hidden="true"
            />

            {/* Panel */}
            <motion.div
              ref={ref}
              className={cn(
                "absolute z-10 flex flex-col",
                positionClasses[position],
                sizeMap[position][size],
                isHorizontal ? "max-w-full" : "max-h-full",
                "bg-[rgb(var(--trinkui-bg))] shadow-[var(--trinkui-shadow-lg)]",
                "border-[rgb(var(--trinkui-border))]",
                position === "left" && "border-r",
                position === "right" && "border-l",
                position === "top" && "border-b",
                position === "bottom" && "border-t",
                className
              )}
              initial={{ opacity: 0, ...slide.initial }}
              animate={{ opacity: 1, ...slide.animate }}
              exit={{ opacity: 0, ...slide.initial }}
              transition={{ duration: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
              style={
                isHorizontal
                  ? { x: `${slide.initial.x ?? slide.initial.y ?? 0}%` }
                  : { y: `${slide.initial.y ?? slide.initial.x ?? 0}%` }
              }
            >
              {/* Header */}
              <div className="flex items-center justify-between border-b border-[rgb(var(--trinkui-border))] px-6 py-4">
                {title ? (
                  <h2
                    id="trinkui-drawer-title"
                    className="text-lg font-semibold text-[rgb(var(--trinkui-fg))]"
                  >
                    {title}
                  </h2>
                ) : (
                  <span />
                )}
                <button
                  type="button"
                  onClick={onClose}
                  className={cn(
                    "inline-flex h-8 w-8 items-center justify-center",
                    "rounded-[var(--trinkui-radius-sm)]",
                    "text-[rgb(var(--trinkui-muted))]",
                    "transition-colors duration-150",
                    "hover:bg-[rgb(var(--trinkui-surface))] hover:text-[rgb(var(--trinkui-fg))]",
                    "focus-visible:outline-none focus-visible:ring-2",
                    "focus-visible:ring-[rgb(var(--trinkui-primary))]"
                  )}
                  aria-label="Close drawer"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="h-5 w-5"
                    aria-hidden="true"
                  >
                    <path d="M6.28 5.22a.75.75 0 00-1.06 1.06L8.94 10l-3.72 3.72a.75.75 0 101.06 1.06L10 11.06l3.72 3.72a.75.75 0 101.06-1.06L11.06 10l3.72-3.72a.75.75 0 00-1.06-1.06L10 8.94 6.28 5.22z" />
                  </svg>
                </button>
              </div>

              {/* Body */}
              <div className="flex-1 overflow-y-auto px-6 py-4 text-[rgb(var(--trinkui-fg))]">
                {children}
              </div>

              {/* Footer */}
              {footer && (
                <div className="border-t border-[rgb(var(--trinkui-border))] px-6 py-4">
                  {footer}
                </div>
              )}
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }
);

Drawer.displayName = "Drawer";
