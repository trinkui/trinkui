import { variants } from "../../utils/variants";

export const sliderTrackStyles = variants({
  base: "relative w-full rounded-full cursor-pointer",
  variants: {
    size: {
      sm: "h-1",
      md: "h-2",
      lg: "h-3",
    },
    color: {
      primary: "bg-[rgb(var(--trinkui-primary)/0.15)]",
      secondary: "bg-[rgb(var(--trinkui-secondary)/0.15)]",
      success: "bg-green-500/15",
      warning: "bg-amber-500/15",
      danger: "bg-red-500/15",
    },
    disabled: {
      true: "opacity-50 cursor-not-allowed",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    disabled: "false",
  },
});

export const sliderFillStyles = variants({
  base: "absolute inset-y-0 left-0 rounded-full",
  variants: {
    color: {
      primary: "bg-[rgb(var(--trinkui-primary))]",
      secondary: "bg-[rgb(var(--trinkui-secondary))]",
      success: "bg-green-500",
      warning: "bg-amber-500",
      danger: "bg-red-500",
    },
  },
  defaultVariants: {
    color: "primary",
  },
});

export const sliderThumbStyles = variants({
  base: [
    "absolute top-1/2 -translate-y-1/2 -translate-x-1/2 rounded-full",
    "border-2 shadow-[var(--trinkui-shadow-sm)]",
    "transition-shadow duration-150",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
  ].join(" "),
  variants: {
    size: {
      sm: "h-3 w-3",
      md: "h-4 w-4",
      lg: "h-5 w-5",
    },
    color: {
      primary: "bg-white border-[rgb(var(--trinkui-primary))] focus-visible:ring-[rgb(var(--trinkui-primary))]",
      secondary: "bg-white border-[rgb(var(--trinkui-secondary))] focus-visible:ring-[rgb(var(--trinkui-secondary))]",
      success: "bg-white border-green-500 focus-visible:ring-green-500",
      warning: "bg-white border-amber-500 focus-visible:ring-amber-500",
      danger: "bg-white border-red-500 focus-visible:ring-red-500",
    },
    disabled: {
      true: "cursor-not-allowed",
      false: "cursor-grab active:cursor-grabbing",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
    disabled: "false",
  },
});
