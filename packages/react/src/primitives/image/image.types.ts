import type { ImgHTMLAttributes } from "react";

export type ImageRadius = "none" | "sm" | "md" | "lg" | "full";
export type ImageShadow = "none" | "sm" | "md" | "lg";

export interface ImageProps extends ImgHTMLAttributes<HTMLImageElement> {
  /** Border radius preset */
  radius?: ImageRadius;
  /** Box shadow preset */
  shadow?: ImageShadow;
  /** Fallback image source shown on load error */
  fallbackSrc?: string;
  /** Enable zoom-on-hover effect */
  isZoomed?: boolean;
  /** Additional class names */
  className?: string;
}
