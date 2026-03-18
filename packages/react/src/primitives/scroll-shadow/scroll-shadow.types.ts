import type { ReactNode } from "react";

export type ScrollShadowOrientation = "vertical" | "horizontal" | "both";

export interface ScrollShadowProps {
  /** Scroll direction to apply shadows. Default: "vertical" */
  orientation?: ScrollShadowOrientation;
  /** Shadow gradient size in pixels. Default: 40 */
  size?: number;
  /** Hide the native scrollbar. Default: false */
  hideScrollbar?: boolean;
  /** Content to render inside the scrollable area */
  children: ReactNode;
  /** Additional CSS class names for the outer wrapper */
  className?: string;
}
