import React, { forwardRef } from "react";
import type {
  CardProps,
  CardHeaderProps,
  CardBodyProps,
  CardFooterProps,
  CardImageProps,
} from "./card.types";
import { cardStyles } from "./card.styles";
import { cn } from "../../utils/cn";

/**
 * Card primitive component.
 * Supports multiple variants, interactive states, and composable sub-components.
 *
 * @example
 * <Card variant="elevated" interactive>
 *   <CardImage src="/hero.jpg" alt="Hero" aspectRatio="video" />
 *   <CardBody>Content here</CardBody>
 *   <CardFooter>Footer actions</CardFooter>
 * </Card>
 */
export const Card = forwardRef<HTMLDivElement, CardProps>(
  (
    {
      variant = "default",
      interactive = false,
      fullHeight = false,
      className,
      children,
      ...props
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={cn(
          cardStyles({
            variant,
            interactive: interactive ? "true" : "false",
            fullHeight: fullHeight ? "true" : "false",
          }),
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

Card.displayName = "Card";

/**
 * Card header sub-component. Provides consistent top padding for card titles.
 *
 * @example
 * <CardHeader>
 *   <h3>Card Title</h3>
 * </CardHeader>
 */
export const CardHeader = forwardRef<HTMLDivElement, CardHeaderProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("p-6 pb-0", className)} {...props}>
        {children}
      </div>
    );
  }
);

CardHeader.displayName = "CardHeader";

/**
 * Card body sub-component. Main content area with consistent padding.
 *
 * @example
 * <CardBody>
 *   <p>Card description or content.</p>
 * </CardBody>
 */
export const CardBody = forwardRef<HTMLDivElement, CardBodyProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div ref={ref} className={cn("p-6", className)} {...props}>
        {children}
      </div>
    );
  }
);

CardBody.displayName = "CardBody";

/**
 * Card footer sub-component. Bottom section with a top border and consistent padding.
 *
 * @example
 * <CardFooter>
 *   <Button>Action</Button>
 * </CardFooter>
 */
export const CardFooter = forwardRef<HTMLDivElement, CardFooterProps>(
  ({ className, children, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(
          "p-6 pt-0 border-t border-[rgb(var(--trinkui-border))]",
          className
        )}
        {...props}
      >
        {children}
      </div>
    );
  }
);

CardFooter.displayName = "CardFooter";

/**
 * Card image sub-component. Renders a full-width image with optional aspect ratio.
 *
 * @example
 * <CardImage src="/cover.jpg" alt="Cover" aspectRatio="video" />
 */
export const CardImage = ({
  src,
  alt,
  aspectRatio = "auto",
  className,
}: CardImageProps) => {
  const aspectClass =
    aspectRatio === "video"
      ? "aspect-video"
      : aspectRatio === "square"
      ? "aspect-square"
      : "";

  return (
    <div className={cn("overflow-hidden", aspectClass)}>
      <img
        src={src}
        alt={alt}
        className={cn("w-full h-full object-cover", className)}
      />
    </div>
  );
};

CardImage.displayName = "CardImage";
