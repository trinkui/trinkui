import type { AvatarProps } from "../avatar/avatar.types";

export interface UserProps {
  /** Display name */
  name: string;
  /** Short description or role beneath the name */
  description?: string;
  /** Avatar image source URL */
  avatarSrc?: string;
  /** Extra props forwarded to the internal Avatar component */
  avatarProps?: Partial<Omit<AvatarProps, "src" | "alt">>;
  /** Additional class names */
  className?: string;
}
