"use client";

import React, { forwardRef, useState, useCallback } from "react";
import type { ListboxProps } from "./listbox.types";
import { listboxContainerStyles, listboxOptionStyles } from "./listbox.styles";
import { cn } from "../../utils/cn";

/**
 * Listbox primitive component.
 * A scrollable list with single or multiple selection support.
 * Uses `role="listbox"` and `role="option"` with `aria-selected` for accessibility.
 *
 * @example
 * <Listbox
 *   items={[
 *     { key: "1", label: "Option 1" },
 *     { key: "2", label: "Option 2", description: "A description" },
 *   ]}
 *   selectionMode="single"
 *   onSelectionChange={(keys) => console.log(keys)}
 * />
 */
export const Listbox = forwardRef<HTMLUListElement, ListboxProps>(
  (
    {
      items,
      selectedKeys: controlledKeys,
      defaultSelectedKeys,
      onSelectionChange,
      selectionMode = "single",
      variant = "flat",
      className,
      ...props
    },
    ref
  ) => {
    const isControlled = controlledKeys !== undefined;
    const [internalKeys, setInternalKeys] = useState<string[]>(defaultSelectedKeys ?? []);
    const selected = isControlled ? controlledKeys : internalKeys;

    const handleSelect = useCallback(
      (key: string) => {
        let newKeys: string[];

        if (selectionMode === "single") {
          newKeys = selected.includes(key) ? [] : [key];
        } else {
          newKeys = selected.includes(key)
            ? selected.filter((k) => k !== key)
            : [...selected, key];
        }

        if (!isControlled) {
          setInternalKeys(newKeys);
        }
        onSelectionChange?.(newKeys);
      },
      [selected, selectionMode, isControlled, onSelectionChange]
    );

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent<HTMLUListElement>) => {
        const target = e.target as HTMLElement;
        const items = Array.from(
          (e.currentTarget as HTMLUListElement).querySelectorAll("[role='option']:not([aria-disabled='true'])")
        ) as HTMLElement[];

        const currentIndex = items.indexOf(target);

        switch (e.key) {
          case "ArrowDown": {
            e.preventDefault();
            const next = items[currentIndex + 1];
            if (next) next.focus();
            break;
          }
          case "ArrowUp": {
            e.preventDefault();
            const prev = items[currentIndex - 1];
            if (prev) prev.focus();
            break;
          }
          case "Enter":
          case " ": {
            e.preventDefault();
            const key = target.getAttribute("data-key");
            if (key) handleSelect(key);
            break;
          }
          case "Home": {
            e.preventDefault();
            const first = items[0];
            if (first) first.focus();
            break;
          }
          case "End": {
            e.preventDefault();
            const last = items[items.length - 1];
            if (last) last.focus();
            break;
          }
        }
      },
      [handleSelect]
    );

    return (
      <ul
        ref={ref}
        role="listbox"
        aria-multiselectable={selectionMode === "multiple"}
        onKeyDown={handleKeyDown}
        className={cn(listboxContainerStyles({ variant }), className)}
        {...props}
      >
        {items.map((item) => {
          const isSelected = selected.includes(item.key);
          const isDisabled = Boolean(item.disabled);

          return (
            <li
              key={item.key}
              role="option"
              data-key={item.key}
              tabIndex={isDisabled ? -1 : 0}
              aria-selected={isSelected}
              aria-disabled={isDisabled}
              onClick={() => {
                if (!isDisabled) handleSelect(item.key);
              }}
              className={listboxOptionStyles({
                selected: isSelected ? "true" : "false",
                disabled: isDisabled ? "true" : "false",
              })}
            >
              {/* Icon */}
              {item.icon && (
                <span className="shrink-0 text-current" aria-hidden="true">
                  {item.icon}
                </span>
              )}

              {/* Content */}
              <div className="flex flex-col min-w-0">
                <span className="truncate font-medium">{item.label}</span>
                {item.description && (
                  <span className="truncate text-xs text-[rgb(var(--trinkui-muted))]">
                    {item.description}
                  </span>
                )}
              </div>

              {/* Selection indicator */}
              {isSelected && (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="ml-auto h-4 w-4 shrink-0"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                    clipRule="evenodd"
                  />
                </svg>
              )}
            </li>
          );
        })}
      </ul>
    );
  }
);

Listbox.displayName = "Listbox";
