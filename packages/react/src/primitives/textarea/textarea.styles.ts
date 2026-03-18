import { variants } from "../../utils/variants";

export const textareaWrapperStyles = variants({
  base: [
    "flex transition-colors border",
    "bg-[rgb(var(--trinkui-bg))] text-[rgb(var(--trinkui-fg))]",
    "focus-within:ring-2 focus-within:ring-[rgb(var(--trinkui-primary))] focus-within:ring-offset-1 focus-within:outline-none",
  ].join(" "),
  variants: {
    variant: {
      default: "border-[rgb(var(--trinkui-border))]",
      filled: "border-transparent bg-[rgb(var(--trinkui-surface))]",
      ghost: "border-transparent bg-transparent",
    },
    size: {
      sm: "px-3 py-2 text-sm rounded-[var(--trinkui-radius-sm)]",
      md: "px-4 py-2.5 text-sm rounded-[var(--trinkui-radius-md)]",
      lg: "px-4 py-3 text-base rounded-[var(--trinkui-radius-md)]",
    },
    hasError: {
      true: "border-[rgb(var(--trinkui-danger))] focus-within:ring-[rgb(var(--trinkui-danger))]",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    hasError: "false",
  },
});

export const textareaBaseStyles =
  "flex-1 bg-transparent outline-none resize-y min-h-[5rem] placeholder:text-[rgb(var(--trinkui-muted))] disabled:cursor-not-allowed disabled:opacity-50";
