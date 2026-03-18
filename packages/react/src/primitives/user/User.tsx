import React, { forwardRef } from "react";
import type { UserProps } from "./user.types";
import { Avatar } from "../avatar/Avatar";
import { cn } from "../../utils/cn";

/**
 * User primitive component.
 * Composite element showing an avatar alongside a name and optional description.
 * Uses the existing Avatar component internally.
 *
 * @example
 * <User name="Jane Doe" description="Software Engineer" avatarSrc="/jane.jpg" />
 * <User name="John Smith" avatarProps={{ size: "lg", ring: true }} />
 */
export const User = forwardRef<HTMLDivElement, UserProps>(
  ({ name, description, avatarSrc, avatarProps, className }, ref) => {
    return (
      <div ref={ref} className={cn("inline-flex items-center gap-3", className)}>
        <Avatar
          src={avatarSrc}
          alt={name}
          size="sm"
          {...avatarProps}
        />
        <div className="flex flex-col">
          <span className="text-sm font-medium text-[rgb(var(--trinkui-fg))]">
            {name}
          </span>
          {description && (
            <span className="text-xs text-[rgb(var(--trinkui-muted))]">
              {description}
            </span>
          )}
        </div>
      </div>
    );
  }
);

User.displayName = "User";
