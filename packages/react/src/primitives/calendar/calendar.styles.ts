import { variants } from "../../utils/variants";

export const calendarContainerStyles = [
  "inline-block select-none",
  "rounded-[var(--trinkui-radius-lg)]",
  "border border-[rgb(var(--trinkui-border))]",
  "bg-[rgb(var(--trinkui-bg))]",
  "p-4",
  "shadow-[var(--trinkui-shadow-sm)]",
].join(" ");

export const calendarHeaderStyles = [
  "flex items-center justify-between mb-4",
].join(" ");

export const calendarNavButtonStyles = [
  "inline-flex items-center justify-center",
  "h-8 w-8",
  "rounded-[var(--trinkui-radius-sm)]",
  "text-[rgb(var(--trinkui-fg))]",
  "transition-colors duration-200",
  "hover:bg-[rgb(var(--trinkui-surface))]",
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--trinkui-primary))]",
  "disabled:pointer-events-none disabled:opacity-50",
  "cursor-pointer",
].join(" ");

export const calendarDayNameStyles = [
  "text-xs font-medium text-[rgb(var(--trinkui-muted))]",
  "flex items-center justify-center",
  "h-8 w-8",
].join(" ");

export const calendarDayStyles = variants({
  base: [
    "inline-flex items-center justify-center",
    "h-8 w-8",
    "rounded-[var(--trinkui-radius-sm)]",
    "text-sm transition-colors duration-150",
    "cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--trinkui-primary))]",
  ].join(" "),
  variants: {
    selected: {
      true: "bg-[rgb(var(--trinkui-primary))] text-[rgb(var(--trinkui-primary-fg))] font-medium",
      false: "text-[rgb(var(--trinkui-fg))] hover:bg-[rgb(var(--trinkui-surface))]",
    },
    today: {
      true: "font-bold",
      false: "",
    },
    outsideMonth: {
      true: "text-[rgb(var(--trinkui-muted))] opacity-40",
      false: "",
    },
    disabled: {
      true: "pointer-events-none opacity-30 cursor-default",
      false: "",
    },
  },
  defaultVariants: {
    selected: "false",
    today: "false",
    outsideMonth: "false",
    disabled: "false",
  },
});
