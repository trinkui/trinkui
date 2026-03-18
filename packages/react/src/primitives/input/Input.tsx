"use client";

import React, { forwardRef, useId } from "react";
import type { InputProps } from "./input.types";
import { inputWrapperStyles, inputBaseStyles } from "./input.styles";
import { cn } from "../../utils/cn";

/**
 * Input primitive component.
 * Supports multiple variants, sizes, labels, hints, error states, and icon slots.
 *
 * @example
 * <Input label="Email" placeholder="you@example.com" />
 * <Input variant="filled" size="lg" error="Required field" />
 * <Input leftSlot={<SearchIcon />} placeholder="Search..." />
 */
export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      variant = "default",
      size = "md",
      label,
      hint,
      error,
      leftSlot,
      rightSlot,
      fullWidth = true,
      id: idProp,
      className,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = useId();
    const id = idProp ?? generatedId;
    const hasError = Boolean(error);

    return (
      <div className={cn("flex flex-col gap-1.5", fullWidth ? "w-full" : "w-fit")}>
        {label && (
          <label
            htmlFor={id}
            className="text-sm font-medium text-[rgb(var(--trinkui-fg))]"
          >
            {label}
          </label>
        )}
        <div
          className={cn(
            inputWrapperStyles({
              variant,
              size,
              hasError: hasError ? "true" : "false",
            }),
            fullWidth ? "w-full" : "",
            className
          )}
        >
          {leftSlot && (
            <span className="shrink-0 text-[rgb(var(--trinkui-muted))]">
              {leftSlot}
            </span>
          )}
          <input
            ref={ref}
            id={id}
            disabled={disabled}
            className={inputBaseStyles}
            {...props}
          />
          {rightSlot && (
            <span className="shrink-0 text-[rgb(var(--trinkui-muted))]">
              {rightSlot}
            </span>
          )}
        </div>
        {error && (
          <p role="alert" className="text-sm text-[rgb(var(--trinkui-danger))]">
            {error}
          </p>
        )}
        {!error && hint && (
          <p className="text-sm text-[rgb(var(--trinkui-muted))]">{hint}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
