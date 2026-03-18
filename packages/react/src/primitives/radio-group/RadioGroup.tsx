"use client";

import React, { forwardRef, useState, useCallback } from "react";
import type { RadioGroupProps } from "./radio-group.types";
import {
  radioOuterStyles,
  radioInnerStyles,
  radioLabelStyles,
} from "./radio-group.styles";
import { cn } from "../../utils/cn";

/**
 * RadioGroup primitive component.
 * Renders a group of custom-styled radio buttons with hidden native inputs.
 * Supports controlled and uncontrolled modes, optional descriptions, and horizontal/vertical layouts.
 *
 * @example
 * <RadioGroup
 *   label="Plan"
 *   options={[
 *     { label: "Free", value: "free" },
 *     { label: "Pro", value: "pro", description: "$9/mo" },
 *   ]}
 *   defaultValue="free"
 *   onChange={(val) => console.log(val)}
 * />
 */
export const RadioGroup = forwardRef<HTMLFieldSetElement, RadioGroupProps>(
  (
    {
      options,
      value: valueProp,
      defaultValue = "",
      onChange,
      label,
      orientation = "vertical",
      size = "md",
      disabled = false,
      className,
    },
    ref
  ) => {
    const [internalValue, setInternalValue] = useState(defaultValue);
    const isControlled = valueProp !== undefined;
    const selectedValue = isControlled ? valueProp : internalValue;

    const handleChange = useCallback(
      (newValue: string) => {
        if (!isControlled) {
          setInternalValue(newValue);
        }
        onChange?.(newValue);
      },
      [isControlled, onChange]
    );

    return (
      <fieldset
        ref={ref}
        className={cn("flex flex-col gap-2", className)}
        disabled={disabled}
      >
        {label && (
          <legend className="mb-1 text-sm font-semibold text-[rgb(var(--trinkui-fg))]">
            {label}
          </legend>
        )}
        <div
          role="radiogroup"
          className={cn(
            "flex gap-3",
            orientation === "vertical" ? "flex-col" : "flex-row flex-wrap"
          )}
        >
          {options.map((option) => {
            const isSelected = selectedValue === option.value;
            const isDisabled = disabled || option.disabled;

            return (
              <label
                key={option.value}
                className={cn(
                  "inline-flex items-start gap-2 cursor-pointer",
                  isDisabled && "cursor-not-allowed opacity-50"
                )}
              >
                <input
                  type="radio"
                  name={label ?? "trinkui-radio-group"}
                  value={option.value}
                  checked={isSelected}
                  onChange={() => handleChange(option.value)}
                  disabled={isDisabled}
                  className="peer sr-only"
                  aria-checked={isSelected}
                />
                <span
                  className={radioOuterStyles({
                    size,
                    selected: isSelected ? "true" : "false",
                  })}
                  aria-hidden="true"
                >
                  {isSelected && (
                    <span className={radioInnerStyles({ size })} />
                  )}
                </span>
                <span className="flex flex-col">
                  <span className={radioLabelStyles({ size })}>
                    {option.label}
                  </span>
                  {option.description && (
                    <span className="text-sm text-[rgb(var(--trinkui-muted))]">
                      {option.description}
                    </span>
                  )}
                </span>
              </label>
            );
          })}
        </div>
      </fieldset>
    );
  }
);

RadioGroup.displayName = "RadioGroup";
