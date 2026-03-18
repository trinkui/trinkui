import { variants } from "../../utils/variants";

export const radioOuterStyles = variants({
  base: [
    "inline-flex shrink-0 items-center justify-center",
    "rounded-full border-2 border-[rgb(var(--trinkui-border))]",
    "transition-colors duration-150",
    "peer-focus-visible:ring-2 peer-focus-visible:ring-[rgb(var(--trinkui-primary))] peer-focus-visible:ring-offset-1",
  ].join(" "),
  variants: {
    size: {
      sm: "h-4 w-4",
      md: "h-5 w-5",
      lg: "h-6 w-6",
    },
    selected: {
      true: "border-[rgb(var(--trinkui-primary))]",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    selected: "false",
  },
});

export const radioInnerStyles = variants({
  base: "rounded-full bg-[rgb(var(--trinkui-primary))]",
  variants: {
    size: {
      sm: "h-2 w-2",
      md: "h-2.5 w-2.5",
      lg: "h-3 w-3",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const radioLabelStyles = variants({
  base: "font-medium text-[rgb(var(--trinkui-fg))]",
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
