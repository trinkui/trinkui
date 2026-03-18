"use client";

import React, { forwardRef, useState, useCallback } from "react";
import type { SnippetProps } from "./snippet.types";
import { snippetStyles } from "./snippet.styles";
import { cn } from "../../utils/cn";

/**
 * Snippet primitive component.
 * Displays an inline code/command block with a symbol prefix and optional copy-to-clipboard button.
 * After copying, shows a checkmark icon briefly before reverting to the copy icon.
 *
 * @example
 * <Snippet code="npm install @trinkui/react" />
 * <Snippet code="pnpm add @trinkui/react" symbol=">" variant="bordered" color="primary" />
 */
export const Snippet = forwardRef<HTMLDivElement, SnippetProps>(
  (
    {
      code,
      symbol = "$",
      variant = "flat",
      color = "default",
      copyable = true,
      className,
    },
    ref
  ) => {
    const [copied, setCopied] = useState(false);

    const handleCopy = useCallback(async () => {
      try {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // Clipboard API may be unavailable
      }
    }, [code]);

    return (
      <div
        ref={ref}
        className={cn(snippetStyles({ variant, color }), className)}
      >
        <code className="flex items-center gap-2">
          {symbol && (
            <span className="opacity-50 select-none" aria-hidden="true">
              {symbol}
            </span>
          )}
          <span>{code}</span>
        </code>

        {copyable && (
          <button
            type="button"
            onClick={handleCopy}
            aria-label={copied ? "Copied" : "Copy to clipboard"}
            className={cn(
              "ml-auto shrink-0 p-1 rounded-[var(--trinkui-radius-sm)]",
              "transition-colors duration-150",
              "hover:bg-[rgb(var(--trinkui-border)/0.5)]",
              "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--trinkui-primary))]"
            )}
          >
            {copied ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 text-green-500"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
                  clipRule="evenodd"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-4 w-4 opacity-60"
                aria-hidden="true"
              >
                <path
                  fillRule="evenodd"
                  d="M15.988 3.012A2.25 2.25 0 0118 5.25v6.5A2.25 2.25 0 0115.75 14H13.5v-3.25a3.25 3.25 0 00-3.25-3.25H7V5.25A2.25 2.25 0 019.25 3h4.488c.596 0 1.168.236 1.59.659l.66.353zM3 10.25A2.25 2.25 0 015.25 8h5.5A2.25 2.25 0 0113 10.25v4.5A2.25 2.25 0 0110.75 17h-5.5A2.25 2.25 0 013 14.75v-4.5z"
                  clipRule="evenodd"
                />
              </svg>
            )}
          </button>
        )}
      </div>
    );
  }
);

Snippet.displayName = "Snippet";
