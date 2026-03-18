import { variants } from "../../utils/variants";

export const checkboxBoxStyles = variants({
  base: [
    "inline-flex shrink-0 items-center justify-center",
    "border-2 border-[rgb(var(--trinkui-border))] rounded-[var(--trinkui-radius-sm)]",
    "transition-colors duration-200",
    "peer-focus-visible:ring-2 peer-focus-visible:ring-offset-2 peer-focus-visible:ring-[rgb(var(--trinkui-primary))]",
    "peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
  ].join(" "),
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
    color: {
      primary: "peer-checked:bg-[rgb(var(--trinkui-primary))] peer-checked:border-[rgb(var(--trinkui-primary))]",
      secondary: "peer-checked:bg-[rgb(var(--trinkui-secondary))] peer-checked:border-[rgb(var(--trinkui-secondary))]",
      success: "peer-checked:bg-emerald-500 peer-checked:border-emerald-500",
      warning: "peer-checked:bg-amber-500 peer-checked:border-amber-500",
      danger: "peer-checked:bg-red-500 peer-checked:border-red-500",
    },
  },
  defaultVariants: {
    size: "md",
    color: "primary",
  },
});

export const checkboxLabelStyles = variants({
  base: "text-[rgb(var(--trinkui-fg))] font-medium select-none",
  variants: {
    size: {
      sm: "text-sm",
      md: "text-sm",
      lg: "text-base",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const checkboxIconSizes = {
  sm: { width: 10, height: 10 },
  md: { width: 12, height: 12 },
  lg: { width: 14, height: 14 },
} as const;
