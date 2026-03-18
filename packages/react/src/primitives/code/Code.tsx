import React, { forwardRef } from "react";
import type { CodeProps } from "./code.types";
import { codeStyles } from "./code.styles";
import { cn } from "../../utils/cn";

/**
 * Inline Code primitive component.
 * Renders a styled `<code>` element with colored background for inline code highlights.
 *
 * @example
 * <Code color="primary">npm install</Code>
 * <Code size="lg" color="danger">rm -rf</Code>
 */
export const Code = forwardRef<HTMLElement, CodeProps>(
  ({ color = "default", size = "md", className, children, ...props }, ref) => {
    return (
      <code
        ref={ref}
        className={cn(codeStyles({ color, size }), className)}
        {...props}
      >
        {children}
      </code>
    );
  }
);

Code.displayName = "Code";
