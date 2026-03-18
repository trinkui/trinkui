import { variants } from "../../utils/variants";

export const linkStyles = variants({
  base: [
    "inline-flex items-center gap-1",
    "transition-colors duration-200",
    "cursor-pointer",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "focus-visible:ring-[rgb(var(--trinkui-primary))]",
    "rounded-[var(--trinkui-radius-sm)]",
  ].join(" "),
  variants: {
    color: {
      primary: "text-[rgb(var(--trinkui-primary))] hover:opacity-80",
      secondary: "text-[rgb(var(--trinkui-secondary-fg))] hover:opacity-80",
      foreground: "text-[rgb(var(--trinkui-fg))] hover:opacity-70",
    },
    size: {
      sm: "text-sm",
      md: "text-base",
      lg: "text-lg",
    },
    underline: {
      none: "no-underline",
      hover: "no-underline hover:underline",
      always: "underline underline-offset-4",
      active: "no-underline active:underline",
    },
  },
  defaultVariants: {
    color: "primary",
    size: "md",
    underline: "hover",
  },
});
