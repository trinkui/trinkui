import React, { forwardRef } from "react";
import type { SpacerProps } from "./spacer.types";
import { cn } from "../../utils/cn";

/**
 * Spacer primitive component.
 * Renders an empty element with configurable width and height for layout spacing.
 * Values are multiples of 4px (e.g. y=4 produces 16px of vertical space).
 *
 * @example
 * <Spacer y={4} />       // 16px vertical space
 * <Spacer y={8} />       // 32px vertical space
 * <Spacer x={2} y={0} /> // 8px horizontal space, no vertical
 */
export const Spacer = forwardRef<HTMLDivElement, SpacerProps>(
  ({ x, y = 4, className }, ref) => {
    return (
      <div
        ref={ref}
        aria-hidden="true"
        className={cn("shrink-0", className)}
        style={{
          width: x !== undefined ? `${x * 4}px` : undefined,
          height: y !== undefined ? `${y * 4}px` : undefined,
        }}
      />
    );
  }
);

Spacer.displayName = "Spacer";
