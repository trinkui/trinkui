export type AvatarSize = "xs" | "sm" | "md" | "lg" | "xl";

export interface AvatarProps {
  /** Image source URL */
  src?: string;
  /** Image alt text / name (also used for fallback initials) */
  alt: string;
  /** Size variant */
  size?: AvatarSize;
  /** Show a ring/border around the avatar */
  ring?: boolean;
  /** Additional CSS classes */
  className?: string;
}

export interface AvatarGroupProps {
  /** Array of avatar props */
  avatars: AvatarProps[];
  /** Max avatars to show before "+N" overflow */
  max?: number;
  /** Size for all avatars in the group */
  size?: AvatarSize;
  /** Additional CSS classes */
  className?: string;
}
