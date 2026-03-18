import type { ReactNode } from "react";

export type PopoverPosition = "top" | "bottom" | "left" | "right";
export type PopoverTriggerOn = "click" | "hover";

export interface PopoverProps {
  /** Element that triggers the popover */
  trigger: ReactNode;
  /** Content displayed inside the popover panel */
  content: ReactNode;
  /** Position of the popover relative to the trigger */
  position?: PopoverPosition;
  /** How the popover is triggered */
  triggerOn?: PopoverTriggerOn;
  /** Additional class names for the wrapper */
  className?: string;
}
