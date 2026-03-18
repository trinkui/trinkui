"use client";

import React, { forwardRef, useState } from "react";
import type { TabsProps } from "./tabs.types";
import { tabListStyles, tabButtonStyles } from "./tabs.styles";
import { cn } from "../../utils/cn";

/**
 * Tabs primitive component.
 * Renders a tab bar with content panels, supporting multiple visual variants.
 * Fully accessible with `role="tablist"`, `role="tab"`, and `role="tabpanel"`.
 *
 * @example
 * <Tabs
 *   variant="underline"
 *   items={[
 *     { key: "overview", label: "Overview", content: <p>Overview content</p> },
 *     { key: "features", label: "Features", content: <p>Features content</p> },
 *   ]}
 * />
 */
export const Tabs = forwardRef<HTMLDivElement, TabsProps>(
  (
    {
      items,
      defaultKey,
      variant = "underline",
      size = "md",
      fullWidth = false,
      className,
    },
    ref
  ) => {
    const [activeKey, setActiveKey] = useState<string>(
      defaultKey ?? items[0]?.key ?? ""
    );

    const activeItem = items.find((item) => item.key === activeKey);

    return (
      <div ref={ref} className={cn("flex flex-col", className)}>
        {/* Tab list */}
        <div
          role="tablist"
          aria-orientation="horizontal"
          className={tabListStyles({
            variant,
            fullWidth: fullWidth ? "true" : "false",
          })}
        >
          {items.map((item) => {
            const isActive = item.key === activeKey;
            return (
              <button
                key={item.key}
                role="tab"
                type="button"
                id={`tab-${item.key}`}
                aria-selected={isActive}
                aria-controls={`tabpanel-${item.key}`}
                tabIndex={isActive ? 0 : -1}
                onClick={() => setActiveKey(item.key)}
                className={tabButtonStyles({
                  variant,
                  size,
                  active: isActive ? "true" : "false",
                  fullWidth: fullWidth ? "true" : "false",
                })}
              >
                {item.label}
              </button>
            );
          })}
        </div>

        {/* Tab panel */}
        {activeItem && (
          <div
            role="tabpanel"
            id={`tabpanel-${activeItem.key}`}
            aria-labelledby={`tab-${activeItem.key}`}
            tabIndex={0}
            className="pt-4 text-[rgb(var(--trinkui-fg))]"
          >
            {activeItem.content}
          </div>
        )}
      </div>
    );
  }
);

Tabs.displayName = "Tabs";
