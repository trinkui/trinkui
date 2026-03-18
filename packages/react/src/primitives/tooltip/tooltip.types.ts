import type { ReactNode } from "react";

export type TooltipPosition = "top" | "bottom" | "left" | "right";

export interface TooltipProps {
  /** Text content displayed inside the tooltip */
  content: string;
  /** Position of the tooltip relative to the trigger */
  position?: TooltipPosition;
  /** Delay in milliseconds before showing the tooltip */
  delay?: number;
  /** The trigger element to wrap */
  children: ReactNode;
  /** Additional CSS classes for the tooltip container */
  className?: string;
}
