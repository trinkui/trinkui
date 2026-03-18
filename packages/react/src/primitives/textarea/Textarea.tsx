"use client";

import React, { forwardRef, useId } from "react";
import type { TextareaProps } from "./textarea.types";
import { textareaWrapperStyles, textareaBaseStyles } from "./textarea.styles";
import { cn } from "../../utils/cn";

/**
 * Textarea primitive component.
 * Supports multiple variants, sizes, labels, hints, and error states.
 *
 * @example
 * <Textarea label="Message" placeholder="Write your message..." />
 * <Textarea variant="filled" size="lg" error="Required field" />
 */
export const Textarea = forwardRef<HTMLTextAreaElement, TextareaProps>(
  (
    {
      variant = "default",
      size = "md",
      label,
      hint,
      error,
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
            textareaWrapperStyles({
              variant,
              size,
              hasError: hasError ? "true" : "false",
            }),
            fullWidth ? "w-full" : "",
            className
          )}
        >
          <textarea
            ref={ref}
            id={id}
            disabled={disabled}
            className={textareaBaseStyles}
            {...props}
          />
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

Textarea.displayName = "Textarea";
