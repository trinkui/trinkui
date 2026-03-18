import React, { forwardRef } from "react";
import type { BreadcrumbsProps } from "./breadcrumbs.types";
import { cn } from "../../utils/cn";

const sizeClasses: Record<string, string> = {
  sm: "text-xs",
  md: "text-sm",
  lg: "text-base",
};

/** Default chevron separator */
function ChevronSeparator() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className="h-4 w-4 shrink-0 text-[rgb(var(--trinkui-muted))]"
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M8.22 5.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

/**
 * Breadcrumbs navigation component.
 * Renders an ordered list of links with separators. The last item
 * is displayed as plain text to indicate the current page.
 *
 * @example
 * <Breadcrumbs
 *   items={[
 *     { label: "Home", href: "/" },
 *     { label: "Components", href: "/components" },
 *     { label: "Breadcrumbs" },
 *   ]}
 * />
 */
export const Breadcrumbs = forwardRef<HTMLElement, BreadcrumbsProps>(
  ({ items, separator, size = "md", className, ...props }, ref) => {
    return (
      <nav
        ref={ref}
        aria-label="Breadcrumb"
        className={cn(sizeClasses[size], className)}
        {...props}
      >
        <ol className="flex items-center gap-1.5">
          {items.map((item, index) => {
            const isLast = index === items.length - 1;

            return (
              <li key={index} className="flex items-center gap-1.5">
                {index > 0 && (
                  <span aria-hidden="true">
                    {separator ?? <ChevronSeparator />}
                  </span>
                )}
                {isLast || !item.href ? (
                  <span
                    className="font-medium text-[rgb(var(--trinkui-fg))]"
                    aria-current={isLast ? "page" : undefined}
                  >
                    {item.label}
                  </span>
                ) : (
                  <a
                    href={item.href}
                    className={cn(
                      "text-[rgb(var(--trinkui-muted))]",
                      "transition-colors duration-150",
                      "hover:text-[rgb(var(--trinkui-fg))]",
                      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--trinkui-primary))] focus-visible:rounded-sm"
                    )}
                  >
                    {item.label}
                  </a>
                )}
              </li>
            );
          })}
        </ol>
      </nav>
    );
  }
);

Breadcrumbs.displayName = "Breadcrumbs";
