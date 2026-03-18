import React, { forwardRef } from "react";
import type { KbdProps } from "./kbd.types";
import { cn } from "../../utils/cn";

const kbdBaseStyles = [
  "inline-flex items-center justify-center",
  "min-w-[1.5rem] px-1.5 py-0.5",
  "text-xs font-mono font-medium leading-none",
  "text-[rgb(var(--trinkui-fg))]",
  "bg-[rgb(var(--trinkui-surface))]",
  "border border-[rgb(var(--trinkui-border))]",
  "rounded-[var(--trinkui-radius-sm)]",
  "shadow-[0_1px_0_1px_rgb(var(--trinkui-border))]",
].join(" ");

/**
 * Kbd component for displaying keyboard shortcut badges.
 * Renders styled `<kbd>` elements with an optional list of modifier keys.
 *
 * @example
 * <Kbd keys={["Ctrl"]}>K</Kbd>
 * <Kbd keys={["Ctrl", "Shift"]}>P</Kbd>
 * <Kbd>Enter</Kbd>
 */
export const Kbd = forwardRef<HTMLElement, KbdProps>(
  ({ keys, children, className, ...props }, ref) => {
    return (
      <span className="inline-flex items-center gap-0.5" ref={ref} {...props}>
        {keys?.map((key, index) => (
          <React.Fragment key={index}>
            <kbd className={cn(kbdBaseStyles, className)}>{key}</kbd>
            <span
              className="text-xs text-[rgb(var(--trinkui-muted))]"
              aria-hidden="true"
            >
              +
            </span>
          </React.Fragment>
        ))}
        <kbd className={cn(kbdBaseStyles, className)}>{children}</kbd>
      </span>
    );
  }
);

Kbd.displayName = "Kbd";
