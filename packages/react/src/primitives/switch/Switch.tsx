"use client";

import React, { forwardRef, useState, useCallback } from "react";
import type { SwitchProps } from "./switch.types";
import { switchTrackStyles, switchThumbStyles, switchThumbTranslate } from "./switch.styles";
import { cn } from "../../utils/cn";

/**
 * Switch (toggle) primitive component.
 * Supports controlled and uncontrolled modes, multiple sizes, and accessible markup.
 *
 * @example
 * <Switch label="Dark mode" />
 * <Switch checked={enabled} onChange={setEnabled} size="lg" />
 */
export const Switch = forwardRef<HTMLButtonElement, SwitchProps>(
  (
    {
      checked: checkedProp,
      defaultChecked = false,
      onChange,
      label,
      disabled = false,
      size = "md",
      className,
    },
    ref
  ) => {
    const [internalChecked, setInternalChecked] = useState(defaultChecked);
    const isControlled = checkedProp !== undefined;
    const isChecked = isControlled ? checkedProp : internalChecked;

    const handleClick = useCallback(() => {
      if (disabled) return;
      const newValue = !isChecked;
      if (!isControlled) {
        setInternalChecked(newValue);
      }
      onChange?.(newValue);
    }, [disabled, isChecked, isControlled, onChange]);

    const checkedStr = isChecked ? "true" : "false";

    return (
      <label
        className={cn(
          "inline-flex items-center gap-2 cursor-pointer",
          disabled && "cursor-not-allowed opacity-50",
          className
        )}
      >
        <button
          ref={ref}
          type="button"
          role="switch"
          aria-checked={isChecked}
          disabled={disabled}
          onClick={handleClick}
          className={switchTrackStyles({ size, checked: checkedStr })}
        >
          <span
            aria-hidden="true"
            className={cn(
              switchThumbStyles({ size, checked: checkedStr }),
              isChecked && switchThumbTranslate[size]
            )}
          />
        </button>
        {label && (
          <span className="text-sm font-medium text-[rgb(var(--trinkui-fg))] select-none">
            {label}
          </span>
        )}
      </label>
    );
  }
);

Switch.displayName = "Switch";
