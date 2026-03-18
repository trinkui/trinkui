"use client";

import React, { useState } from "react";
import type { AvatarProps, AvatarGroupProps } from "./avatar.types";
import { avatarStyles } from "./avatar.styles";
import { cn } from "../../utils/cn";

/**
 * Avatar component.
 * Displays an image or fallback initials when the image is unavailable.
 *
 * @example
 * <Avatar src="/profile.jpg" alt="Jane Doe" size="lg" />
 * <Avatar alt="John Smith" size="md" />
 */
export const Avatar = ({
  src,
  alt,
  size = "md",
  ring = false,
  className,
}: AvatarProps) => {
  const [imgError, setImgError] = useState(false);

  const initials = alt
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((word) => word[0])
    .join("")
    .toUpperCase();

  const showImage = src && !imgError;

  return (
    <span
      className={cn(
        avatarStyles({ size, ring: ring ? "true" : "false" }),
        className
      )}
      aria-label={alt}
      title={alt}
    >
      {showImage ? (
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
          onError={() => setImgError(true)}
        />
      ) : (
        <span aria-hidden="true">{initials}</span>
      )}
    </span>
  );
};

Avatar.displayName = "Avatar";

/**
 * AvatarGroup component.
 * Displays a stacked list of avatars with an overflow indicator.
 *
 * @example
 * <AvatarGroup
 *   avatars={[{ src: "/a.jpg", alt: "Alice" }, { alt: "Bob" }]}
 *   max={3}
 *   size="sm"
 * />
 */
export const AvatarGroup = ({
  avatars,
  max = 5,
  size = "md",
  className,
}: AvatarGroupProps) => {
  const visible = avatars.slice(0, max);
  const overflow = avatars.length - visible.length;

  const overflowSizeClass =
    size === "xs"
      ? "h-6 w-6 text-xs"
      : size === "sm"
      ? "h-8 w-8 text-sm"
      : size === "md"
      ? "h-10 w-10 text-sm"
      : size === "lg"
      ? "h-12 w-12 text-base"
      : "h-16 w-16 text-xl";

  return (
    <div className={cn("flex items-center", className)}>
      {visible.map((avatar, index) => (
        <span
          key={index}
          className={index !== 0 ? "-ml-2" : ""}
          style={{ zIndex: visible.length - index }}
        >
          <Avatar {...avatar} size={size} ring />
        </span>
      ))}
      {overflow > 0 && (
        <span
          className={cn(
            "inline-flex items-center justify-center rounded-full shrink-0 -ml-2",
            "bg-[rgb(var(--trinkui-surface))] border border-[rgb(var(--trinkui-border))]",
            "text-[rgb(var(--trinkui-fg))] font-medium ring-2 ring-[rgb(var(--trinkui-bg))]",
            overflowSizeClass
          )}
          aria-label={`${overflow} more`}
        >
          <span aria-hidden="true">+{overflow}</span>
        </span>
      )}
    </div>
  );
};

AvatarGroup.displayName = "AvatarGroup";
