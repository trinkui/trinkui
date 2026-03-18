"use client";

import React, { forwardRef, useState, useRef, useEffect, useCallback, useId } from "react";
import type { AutocompleteProps } from "./autocomplete.types";
import {
  autocompleteInputStyles,
  autocompleteInputBaseStyles,
  autocompleteDropdownStyles,
  autocompleteOptionStyles,
} from "./autocomplete.styles";
import { cn } from "../../utils/cn";

/**
 * Autocomplete primitive component.
 * An input field with a filterable dropdown of options.
 * Supports keyboard navigation (ArrowUp/Down, Enter, Escape) and click-outside closing.
 *
 * @example
 * <Autocomplete
 *   label="Country"
 *   placeholder="Search countries..."
 *   options={[
 *     { label: "United States", value: "us" },
 *     { label: "Canada", value: "ca" },
 *   ]}
 *   onChange={(val) => console.log(val)}
 * />
 */
export const Autocomplete = forwardRef<HTMLDivElement, AutocompleteProps>(
  (
    {
      options,
      value: controlledValue,
      defaultValue,
      onChange,
      onInputChange,
      placeholder = "Search...",
      label,
      error,
      disabled = false,
      size = "md",
      className,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const listboxId = `${generatedId}-listbox`;

    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState<string | undefined>(defaultValue);
    const selectedValue = isControlled ? controlledValue : internalValue;

    const selectedOption = options.find((opt) => opt.value === selectedValue);
    const [query, setQuery] = useState(selectedOption?.label ?? "");
    const [isOpen, setIsOpen] = useState(false);
    const [highlightedIndex, setHighlightedIndex] = useState(-1);

    const containerRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);
    const listRef = useRef<HTMLUListElement>(null);

    const hasError = Boolean(error);

    // Filter options based on query
    const filteredOptions = options.filter((opt) =>
      opt.label.toLowerCase().includes(query.toLowerCase())
    );

    // Close on click outside
    useEffect(() => {
      if (!isOpen) return;

      function handleClickOutside(e: MouseEvent) {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false);
          // Restore selected label if user didn't pick
          if (selectedOption) {
            setQuery(selectedOption.label);
          }
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => document.removeEventListener("mousedown", handleClickOutside);
    }, [isOpen, selectedOption]);

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
        const opt = options.find((o) => o.value === val);
        if (!opt) return;

        if (!isControlled) {
          setInternalValue(val);
        }
        setQuery(opt.label);
        onChange?.(val);
        setIsOpen(false);
        inputRef.current?.focus();
      },
      [isControlled, onChange, options]
    );

    const handleInputChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newQuery = e.target.value;
        setQuery(newQuery);
        onInputChange?.(newQuery);
        setIsOpen(true);
        setHighlightedIndex(0);
      },
      [onInputChange]
    );

    const handleKeyDown = useCallback(
      (e: React.KeyboardEvent) => {
        if (disabled) return;

        switch (e.key) {
          case "Enter": {
            e.preventDefault();
            if (isOpen && highlightedIndex >= 0 && highlightedIndex < filteredOptions.length) {
              const opt = filteredOptions[highlightedIndex];
              if (opt && !opt.disabled) {
                selectOption(opt.value);
              }
            }
            break;
          }
          case "Escape": {
            e.preventDefault();
            setIsOpen(false);
            if (selectedOption) {
              setQuery(selectedOption.label);
            }
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
                while (next < filteredOptions.length) {
                  const opt = filteredOptions[next];
                  if (opt && !opt.disabled) break;
                  next++;
                }
                return next < filteredOptions.length ? next : prev;
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
                  const opt = filteredOptions[next];
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
      [disabled, isOpen, highlightedIndex, filteredOptions, selectOption, selectedOption]
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
          <div
            className={autocompleteInputStyles({
              size,
              hasError: hasError ? "true" : "false",
            })}
          >
            <input
              ref={inputRef}
              type="text"
              role="combobox"
              aria-expanded={isOpen}
              aria-haspopup="listbox"
              aria-controls={isOpen ? listboxId : undefined}
              aria-autocomplete="list"
              disabled={disabled}
              placeholder={placeholder}
              value={query}
              onChange={handleInputChange}
              onFocus={() => {
                if (!disabled) {
                  setIsOpen(true);
                  setHighlightedIndex(0);
                }
              }}
              onKeyDown={handleKeyDown}
              className={autocompleteInputBaseStyles}
            />
            {/* Clear button */}
            {query && !disabled && (
              <button
                type="button"
                tabIndex={-1}
                aria-label="Clear selection"
                onClick={() => {
                  setQuery("");
                  if (!isControlled) {
                    setInternalValue(undefined);
                  }
                  onChange?.("");
                  onInputChange?.("");
                  setIsOpen(true);
                  inputRef.current?.focus();
                }}
                className="shrink-0 text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors"
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

          {isOpen && filteredOptions.length > 0 && (
            <ul
              ref={listRef}
              id={listboxId}
              role="listbox"
              className={autocompleteDropdownStyles}
            >
              {filteredOptions.map((option, index) => (
                <li
                  key={option.value}
                  data-option
                  role="option"
                  aria-selected={option.value === selectedValue}
                  aria-disabled={option.disabled}
                  className={autocompleteOptionStyles({
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

Autocomplete.displayName = "Autocomplete";
