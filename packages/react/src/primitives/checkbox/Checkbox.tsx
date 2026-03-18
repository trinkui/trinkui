"use client";

import React, { forwardRef, useState, useCallback } from "react";
import type { CheckboxProps } from "./checkbox.types";
import { checkboxBoxStyles, checkboxLabelStyles, checkboxIconSizes } from "./checkbox.styles";
import { cn } from "../../utils/cn";

/**
 * Checkbox primitive component.
 * Supports controlled and uncontrolled modes, multiple sizes and color schemes.
 *
 * @example
 * <Checkbox label="Accept terms" />
 * <Checkbox checked={true} onChange={(v) => setChecked(v)} color="success" />
 */
export const Checkbox = forwardRef<HTMLLabelElement, CheckboxProps>(
  (
    {
      checked: checkedProp,
      defaultChecked = false,
      onChange,
      label,
      description,
      disabled = false,
      size = "md",
      color = "primary",
      className,
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isControlled = checkedProp !== undefined;
    const isChecked = isControlled ? checkedProp : internalChecked;

    const handleChange = useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.checked;
        if (!isControlled) {
          setInternalChecked(newValue);
        }
        onChange?.(newValue);
      },
      [isControlled, onChange]
    );

    const iconSize = checkboxIconSizes[size];

    return (
      <label
        ref={ref}
        className={cn(
          "inline-flex items-start gap-2 cursor-pointer",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
      >
        <input
          type="checkbox"
          checked={isChecked}
          onChange={handleChange}
          disabled={disabled}
          className="peer sr-only"
          aria-checked={isChecked}
        />
        <span
          className={checkboxBoxStyles({ size, color })}
          aria-hidden="true"
        >
          {isChecked && (
            <svg
              width={iconSize.width}
              height={iconSize.height}
              viewBox="0 0 12 12"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path
                d="M2 6L5 9L10 3"
                stroke="white"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          )}
        </span>
        {(label || description) && (
          <span className="flex flex-col">
            {label && (
              <span className={checkboxLabelStyles({ size })}>{label}</span>
            )}
            {description && (
              <span className="text-sm text-[rgb(var(--trinkui-muted))]">
                {description}
              </span>
            )}
          </span>
        )}
      </label>
    );
  }
);

Checkbox.displayName = "Checkbox";
