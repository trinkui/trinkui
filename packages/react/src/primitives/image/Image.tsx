"use client";

import React, { forwardRef, useState } from "react";
import type { ImageProps } from "./image.types";
import { imageStyles, imageWrapperStyles } from "./image.styles";
import { cn } from "../../utils/cn";

/**
 * Image primitive component.
 * Enhanced `<img>` wrapper with skeleton loading state, error fallback,
 * configurable border radius and shadow, and optional hover-zoom effect.
 *
 * @example
 * <Image src="/photo.jpg" alt="Photo" radius="lg" shadow="md" />
 * <Image src="/hero.jpg" alt="Hero" isZoomed fallbackSrc="/placeholder.jpg" />
 */
export const Image = forwardRef<HTMLImageElement, ImageProps>(
  (
    {
      src,
      alt,
      radius = "none",
      shadow = "none",
      fallbackSrc,
      isZoomed = false,
      className,
      ...props
    },
    ref
  ) => {
    const [loaded, setLoaded] = useState(false);
    const [errored, setErrored] = useState(false);

    const displaySrc = errored && fallbackSrc ? fallbackSrc : src;

    // When using zoom, wrap in a container for overflow:hidden
    if (isZoomed) {
      return (
        <span
          className={cn(
            imageWrapperStyles({ radius, shadow }),
            className
          )}
        >
          {/* Skeleton placeholder */}
          {!loaded && (
            <span
              className="absolute inset-0 animate-pulse bg-[rgb(var(--trinkui-border))]"
              aria-hidden="true"
            />
          )}
          <img
            ref={ref}
            src={displaySrc}
            alt={alt ?? ""}
            className={cn(
              "block w-full h-full object-cover transition-transform duration-300 ease-out",
              isZoomed && "hover:scale-110",
              !loaded && "invisible"
            )}
            onLoad={() => setLoaded(true)}
            onError={() => {
              if (!errored) {
                setErrored(true);
              }
            }}
            {...props}
          />
        </span>
      );
    }

    return (
      <span className={cn("relative inline-block", className)}>
        {/* Skeleton placeholder */}
        {!loaded && (
          <span
            className={cn(
              "absolute inset-0 animate-pulse bg-[rgb(var(--trinkui-border))]",
              radius === "full" ? "rounded-full" : `rounded-[var(--trinkui-radius-${radius === "none" ? "sm" : radius})]`
            )}
            aria-hidden="true"
          />
        )}
        <img
          ref={ref}
          src={displaySrc}
          alt={alt ?? ""}
          className={cn(
            imageStyles({ radius, shadow }),
            !loaded && "invisible"
          )}
          onLoad={() => setLoaded(true)}
          onError={() => {
            if (!errored) {
              setErrored(true);
            }
          }}
          {...props}
        />
      </span>
    );
  }
);

Image.displayName = "Image";
