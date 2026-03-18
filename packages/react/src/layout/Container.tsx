import React, { forwardRef } from "react";
import type { ContainerSize } from "@trinkui/shared";
import { CONTAINER_SIZES } from "@trinkui/shared";
import { cn } from "../utils/cn";

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Max-width variant of the container */
  size?: ContainerSize;
  /** Whether to add default horizontal padding */
  padded?: boolean;
}

/**
 * Container component that controls content width.
 * Wraps content with a centered max-width container.
 *
 * @example
 * <Container size="lg" className="my-8">
 *   <p>Content here</p>
 * </Container>
 */
export const Container = forwardRef<HTMLDivElement, ContainerProps>(
  ({ size = "xl", padded = true, className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "mx-auto w-full",
          CONTAINER_SIZES[size],
          padded && "px-4 sm:px-6 lg:px-8",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Container.displayName = "Container";
