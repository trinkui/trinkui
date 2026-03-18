"use client";

import React, { forwardRef, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import type { ModalProps, ModalSize } from "./modal.types";
import { cn } from "../../utils/cn";

const sizeClasses: Record<ModalSize, string> = {
  sm: "max-w-[400px]",
  md: "max-w-[500px]",
  lg: "max-w-[640px]",
  xl: "max-w-[800px]",
  full: "max-w-[100vw] mx-4",
};

/**
 * Modal primitive component.
 * Renders a backdrop overlay with a centered animated panel.
 * Supports title, description, body, and footer slots.
 *
 * @example
 * <Modal open={isOpen} onClose={() => setIsOpen(false)} title="Confirm">
 *   <p>Are you sure?</p>
 * </Modal>
 */
export const Modal = forwardRef<HTMLDivElement, ModalProps>(
  (
    {
      open,
      onClose,
      title,
      description,
      size = "md",
      closeOnBackdrop = true,
      closeOnEsc = true,
      children,
      footer,
      className,
    },
    ref
  ) => {
    // Handle Escape key
    useEffect(() => {
      if (!open || !closeOnEsc) return;

      const handleKeyDown = (e: KeyboardEvent) => {
        if (e.key === "Escape") {
          onClose();
        }
      };

      document.addEventListener("keydown", handleKeyDown);
      return () => document.removeEventListener("keydown", handleKeyDown);
    }, [open, closeOnEsc, onClose]);

    // Prevent body scroll when modal is open
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

    return (
      <AnimatePresence>
        {open && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center"
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "trinkui-modal-title" : undefined}
            aria-describedby={description ? "trinkui-modal-desc" : undefined}
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
                "relative z-10 w-full",
                sizeClasses[size],
                "mx-4 rounded-[var(--trinkui-radius-lg)]",
                "bg-[rgb(var(--trinkui-bg))] shadow-[var(--trinkui-shadow-lg)]",
                "border border-[rgb(var(--trinkui-border))]",
                className
              )}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {/* Header */}
              {(title || description) && (
                <div className="border-b border-[rgb(var(--trinkui-border))] px-6 py-4">
                  {title && (
                    <h2
                      id="trinkui-modal-title"
                      className="text-lg font-semibold text-[rgb(var(--trinkui-fg))]"
                    >
                      {title}
                    </h2>
                  )}
                  {description && (
                    <p
                      id="trinkui-modal-desc"
                      className="mt-1 text-sm text-[rgb(var(--trinkui-muted))]"
                    >
                      {description}
                    </p>
                  )}
                </div>
              )}

              {/* Body */}
              <div className="px-6 py-4 text-[rgb(var(--trinkui-fg))]">
                {children}
              </div>

              {/* Footer */}
              {footer && (
                <div className="border-t border-[rgb(var(--trinkui-border))] px-6 py-4">
                  {footer}
                </div>
              )}

              {/* Close button */}
              <button
                type="button"
                onClick={onClose}
                className={cn(
                  "absolute right-3 top-3",
                  "inline-flex h-8 w-8 items-center justify-center",
                  "rounded-[var(--trinkui-radius-sm)]",
                  "text-[rgb(var(--trinkui-muted))]",
                  "transition-colors duration-150",
                  "hover:bg-[rgb(var(--trinkui-surface))] hover:text-[rgb(var(--trinkui-fg))]",
                  "focus-visible:outline-none focus-visible:ring-2",
                  "focus-visible:ring-[rgb(var(--trinkui-primary))]"
                )}
                aria-label="Close modal"
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
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    );
  }
);

Modal.displayName = "Modal";
