import { variants } from "../../utils/variants";

export const inputWrapperStyles = variants({
  base: "flex items-center gap-2 transition-colors border bg-[rgb(var(--trinkui-bg))] text-[rgb(var(--trinkui-fg))] focus-within:ring-2 focus-within:ring-[rgb(var(--trinkui-primary))] focus-within:ring-offset-1 focus-within:outline-none",
  variants: {
    variant: {
      default: "border-[rgb(var(--trinkui-border))]",
      filled: "border-transparent bg-[rgb(var(--trinkui-surface))]",
      ghost: "border-transparent bg-transparent",
    },
    size: {
      sm: "h-8 px-3 text-sm rounded-[var(--trinkui-radius-sm)]",
      md: "h-10 px-4 text-sm rounded-[var(--trinkui-radius-md)]",
      lg: "h-12 px-4 text-base rounded-[var(--trinkui-radius-md)]",
    },
    hasError: {
      true: "border-red-500 focus-within:ring-red-500",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    hasError: "false",
  },
});

export const inputBaseStyles =
  "flex-1 bg-transparent outline-none placeholder:text-[rgb(var(--trinkui-muted))] disabled:cursor-not-allowed disabled:opacity-50";
