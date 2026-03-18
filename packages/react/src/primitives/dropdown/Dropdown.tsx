"use client";

import React, { forwardRef, useState, useRef, useEffect, useCallback } from "react";
import type { DropdownProps, DropdownItem } from "./dropdown.types";
import { cn } from "../../utils/cn";

const alignClasses: Record<string, string> = {
  start: "left-0",
  center: "left-1/2 -translate-x-1/2",
  end: "right-0",
};

/**
 * Dropdown primitive component.
 * Renders a trigger element that toggles a floating menu.
 * Supports keyboard navigation (Escape, Enter, ArrowUp/Down) and click-outside dismiss.
 *
 * @example
 * <Dropdown
 *   trigger={<Button>Options</Button>}
 *   items={[
 *     { label: "Edit", onClick: () => {} },
 *     { label: "Delete", danger: true, onClick: () => {} },
 *   ]}
 * />
 */
export const Dropdown = forwardRef<HTMLDivElement, DropdownProps>(
  ({ trigger, items, align = "start", className }, ref) => {
    const [open, setOpen] = useState(false);
    const [focusedIndex, setFocusedIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const menuRef = useRef<HTMLDivElement>(null);

    // Get only actionable (non-divider, non-disabled) item indices
    const getActionableIndices = useCallback(() => {
      return items
        .map((item, idx) => ({ item, idx }))
        .filter(({ item }) => !item.divider && !item.disabled)
        .map(({ idx }) => idx);
    }, [items]);

    // Close on click outside
    useEffect(() => {
      if (!open) return;

      const handleClickOutside = (e: MouseEvent) => {
        if (
          containerRef.current &&
          !containerRef.current.contains(e.target as Node)
        ) {
          setOpen(false);
          setFocusedIndex(-1);
        }
      };

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [open]);

    // Keyboard navigation
    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        const actionable = getActionableIndices();
        if (actionable.length === 0) return;

        switch (e.key) {
          case "Escape":
            e.preventDefault();
            setOpen(false);
            setFocusedIndex(-1);
            break;
          case "ArrowDown":
            e.preventDefault();
            if (!open) {
              setOpen(true);
              setFocusedIndex(actionable[0] ?? -1);
            } else {
              const currentPos = actionable.indexOf(focusedIndex);
              const nextPos = currentPos < actionable.length - 1 ? currentPos + 1 : 0;
              setFocusedIndex(actionable[nextPos] ?? -1);
            }
            break;
          case "ArrowUp":
            e.preventDefault();
            if (open) {
              const currentPos = actionable.indexOf(focusedIndex);
              const prevPos = currentPos > 0 ? currentPos - 1 : actionable.length - 1;
              setFocusedIndex(actionable[prevPos] ?? -1);
            }
            break;
          case "Enter":
          case " ":
            e.preventDefault();
            if (open && focusedIndex >= 0) {
              const item = items[focusedIndex];
              if (item && !item.disabled && !item.divider) {
                item.onClick?.();
                setOpen(false);
                setFocusedIndex(-1);
              }
            } else if (!open) {
              setOpen(true);
              setFocusedIndex(actionable[0] ?? -1);
            }
            break;
        }
      },
      [open, focusedIndex, items, getActionableIndices]
    );

    const handleItemClick = (item: DropdownItem) => {
      if (item.disabled || item.divider) return;
      item.onClick?.();
      setOpen(false);
      setFocusedIndex(-1);
    };

    return (
      <div
        ref={containerRef}
        className="relative inline-block"
        onKeyDown={handleKeyDown}
      >
        {/* Trigger */}
        <div
          role="button"
          tabIndex={0}
          aria-haspopup="menu"
          aria-expanded={open}
          onClick={() => {
            setOpen((prev) => !prev);
            if (!open) {
              const actionable = getActionableIndices();
              setFocusedIndex(actionable[0] ?? -1);
            }
          }}
        >
          {trigger}
        </div>

        {/* Menu */}
        {open && (
          <div
            ref={(node) => {
              (menuRef as React.MutableRefObject<HTMLDivElement | null>).current = node;
              if (typeof ref === "function") {
                ref(node);
              } else if (ref) {
                (ref as React.MutableRefObject<HTMLDivElement | null>).current = node;
              }
            }}
            role="menu"
            className={cn(
              "absolute z-50 mt-1 min-w-[180px]",
              "rounded-[var(--trinkui-radius-md)]",
              "border border-[rgb(var(--trinkui-border))]",
              "bg-[rgb(var(--trinkui-bg))] shadow-[var(--trinkui-shadow-md)]",
              "py-1",
              alignClasses[align],
              className
            )}
          >
            {items.map((item, idx) => {
              if (item.divider) {
                return (
                  <div
                    key={`divider-${idx}`}
                    role="separator"
                    className="my-1 h-px bg-[rgb(var(--trinkui-border))]"
                  />
                );
              }

              const isFocused = idx === focusedIndex;

              return (
                <button
                  key={`${item.label}-${idx}`}
                  type="button"
                  role="menuitem"
                  tabIndex={-1}
                  disabled={item.disabled}
                  onClick={() => handleItemClick(item)}
                  onMouseEnter={() => setFocusedIndex(idx)}
                  className={cn(
                    "flex w-full items-center gap-2 px-3 py-2 text-sm",
                    "transition-colors duration-100",
                    "text-left",
                    item.danger
                      ? "text-red-500 hover:bg-red-500/10"
                      : "text-[rgb(var(--trinkui-fg))] hover:bg-[rgb(var(--trinkui-surface))]",
                    item.disabled && "cursor-not-allowed opacity-50",
                    isFocused &&
                      (item.danger
                        ? "bg-red-500/10"
                        : "bg-[rgb(var(--trinkui-surface))]"),
                    "focus-visible:outline-none"
                  )}
                >
                  {item.icon && (
                    <span className="shrink-0" aria-hidden="true">
                      {item.icon}
                    </span>
                  )}
                  {item.label}
                </button>
              );
            })}
          </div>
        )}
      </div>
    );
  }
);

Dropdown.displayName = "Dropdown";
