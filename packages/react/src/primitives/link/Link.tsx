import React, { forwardRef } from "react";
import type { LinkProps } from "./link.types";
import { linkStyles } from "./link.styles";
import { cn } from "../../utils/cn";

/**
 * Link primitive component.
 * Renders a styled anchor element with color, size, and underline variants.
 * External links automatically get `target="_blank"` and `rel="noopener noreferrer"`.
 *
 * @example
 * <Link href="/about" color="primary">About Us</Link>
 * <Link href="https://github.com" isExternal showAnchorIcon>GitHub</Link>
 */
export const Link = forwardRef<HTMLAnchorElement, LinkProps>(
  (
    {
      color = "primary",
      size = "md",
      underline = "hover",
      isExternal = false,
      showAnchorIcon = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    const externalProps = isExternal
      ? { target: "_blank" as const, rel: "noopener noreferrer" }
      : {};

    return (
      <a
        ref={ref}
        className={cn(linkStyles({ color, size, underline }), className)}
        {...externalProps}
        {...props}
      >
        {children}
        {showAnchorIcon && (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-3.5 w-3.5 shrink-0"
            aria-hidden="true"
          >
            <path
              fillRule="evenodd"
              d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
              clipRule="evenodd"
            />
          </svg>
        )}
      </a>
    );
  }
);

Link.displayName = "Link";
