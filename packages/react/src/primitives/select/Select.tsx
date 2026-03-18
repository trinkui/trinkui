"use client";

import React, { forwardRef, useState, useRef, useEffect, useCallback } from "react";
import type { SelectProps } from "./select.types";
import { selectTriggerStyles, selectDropdownStyles, selectOptionStyles } from "./select.styles";
import { cn } from "../../utils/cn";

/**
 * Custom Select component with keyboard navigation and click-outside handling.
 * Renders a dropdown list triggered by a styled button.
 *
 * @example
 * <Select
 *   label="Country"
 *   placeholder="Choose a country"
 *   options={[
 *     { label: "United States", value: "us" },
 *     { label: "Canada", value: "ca" },
 *   ]}
 *   onChange={(val) => console.log(val)}
 * />
 */
export const Select = forwardRef<HTMLDivElement, SelectProps>(
  (
    {
      options,
      value: controlledValue,
      defaultValue,
      onChange,
      placeholder = "Select an option",
      label,
      error,
      disabled = false,
      size = "md",
      variant = "default",
      className,
      ...props
    },
    ref
  ) => {
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);
    const selectedValue = isControlled ? controlledValue : internalValue;

    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);
    const containerRef = useRef<HTMLDivElement>(null);
    const triggerRef = useRef<HTMLButtonElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    const selectedOption = options.find((opt) => opt.value === selectedValue);
    const hasError = Boolean(error);

    // Close on click outside
    useEffect(() => {
      if (!isOpen) return;

      function handleClickOutside(e: MouseEvent) {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen]);

    // Scroll highlighted option into view
    useEffect(() => {
      if (!isOpen || highlightedIndex < 0 || !listRef.current) return;
      const items = listRef.current.querySelectorAll("[data-option]");
      const item = items[highlightedIndex];
      if (item) {
        item.scrollIntoView({ block: "nearest" });
      }
    }, [highlightedIndex, isOpen]);

    const selectOption = useCallback(
      (val: string) => {
        if (!isControlled) {
          setInternalValue(val);
        }
        onChange?.(val);
        setIsOpen(false);
        triggerRef.current?.focus();
      },
      [isControlled, onChange]
    );

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (disabled) return;

        switch (e.key) {
          case "Enter":
          case " ": {
            e.preventDefault();
            if (!isOpen) {
              setIsOpen(true);
              setHighlightedIndex(0);
            } else if (highlightedIndex >= 0) {
              const opt = options[highlightedIndex];
              if (opt && !opt.disabled) {
                selectOption(opt.value);
              }
            }
            break;
          }
          case "Escape": {
            e.preventDefault();
            setIsOpen(false);
            triggerRef.current?.focus();
            break;
          }
          case "ArrowDown": {
            e.preventDefault();
            if (!isOpen) {
              setIsOpen(true);
              setHighlightedIndex(0);
            } else {
              setHighlightedIndex((prev) => {
                let next = prev + 1;
                while (next < options.length) {
                  const opt = options[next];
                  if (opt && !opt.disabled) break;
                  next++;
                }
                return next < options.length ? next : prev;
              });
            }
            break;
          }
          case "ArrowUp": {
            e.preventDefault();
            if (isOpen) {
              setHighlightedIndex((prev) => {
                let next = prev - 1;
                while (next >= 0) {
                  const opt = options[next];
                  if (opt && !opt.disabled) break;
                  next--;
                }
                return next >= 0 ? next : prev;
              });
            }
            break;
          }
        }
      },
      [disabled, isOpen, highlightedIndex, options, selectOption]
    );

    return (
      <div
        ref={ref}
        className={cn("relative flex flex-col gap-1.5", className)}
        {...props}
      >
        {label && (
          <label className="text-sm font-medium text-[rgb(var(--trinkui-fg))]">
            {label}
          </label>
        )}

        <div ref={containerRef} className="relative">
          <button
            ref={triggerRef}
            type="button"
            role="combobox"
            aria-expanded={isOpen}
            aria-haspopup="listbox"
            disabled={disabled}
            onClick={() => {
              if (!disabled) {
                setIsOpen((prev) => !prev);
                if (!isOpen) setHighlightedIndex(0);
              }
            }}
            onKeyDown={handleKeyDown}
            className={selectTriggerStyles({
              variant,
              size,
              hasError: hasError ? "true" : "false",
            })}
          >
            <span
              className={cn(
                "truncate",
                !selectedOption && "text-[rgb(var(--trinkui-muted))]"
              )}
            >
              {selectedOption ? selectedOption.label : placeholder}
            </span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className={cn(
                "h-4 w-4 shrink-0 text-[rgb(var(--trinkui-muted))]",
                "transition-transform duration-200",
                isOpen && "rotate-180"
              )}
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          {isOpen && (
            <ul
              ref={listRef}
              role="listbox"
              className={selectDropdownStyles}
              onKeyDown={handleKeyDown}
            >
              {options.map((option, index) => (
                <li
                  key={option.value}
                  data-option
                  role="option"
                  aria-selected={option.value === selectedValue}
                  aria-disabled={option.disabled}
                  className={selectOptionStyles({
                    size,
                    highlighted: index === highlightedIndex ? "true" : "false",
                    selected: option.value === selectedValue ? "true" : "false",
                    disabled: option.disabled ? "true" : "false",
                  })}
                  onMouseEnter={() => {
                    if (!option.disabled) setHighlightedIndex(index);
                  }}
                  onClick={() => {
                    if (!option.disabled) selectOption(option.value);
                  }}
                >
                  {option.label}
                </li>
              ))}
            </ul>
          )}
        </div>

        {error && (
          <p role="alert" className="text-sm text-red-500">
            {error}
          </p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
