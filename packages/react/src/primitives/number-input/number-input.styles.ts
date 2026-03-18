import { variants } from "../../utils/variants";

export const numberInputWrapperStyles = variants({
  base: [
    "flex items-center",
    "border bg-[rgb(var(--trinkui-bg))] text-[rgb(var(--trinkui-fg))]",
    "transition-colors",
    "focus-within:ring-2 focus-within:ring-[rgb(var(--trinkui-primary))] focus-within:ring-offset-1 focus-within:outline-none",
  ].join(" "),
  variants: {
    size: {
      sm: "h-8 text-sm rounded-[var(--trinkui-radius-sm)]",
      md: "h-10 text-sm rounded-[var(--trinkui-radius-md)]",
      lg: "h-12 text-base rounded-[var(--trinkui-radius-md)]",
    },
    hasError: {
      true: "border-[rgb(var(--trinkui-danger))] focus-within:ring-[rgb(var(--trinkui-danger))]",
      false: "border-[rgb(var(--trinkui-border))]",
    },
  },
  defaultVariants: {
    size: "md",
    hasError: "false",
  },
});

export const numberInputFieldStyles = [
  "flex-1 bg-transparent outline-none",
  "placeholder:text-[rgb(var(--trinkui-muted))]",
  "disabled:cursor-not-allowed disabled:opacity-50",
  "text-center",
  "w-full h-full",
  "[appearance:textfield]",
].join(" ");

export const numberInputButtonStyles = variants({
  base: [
    "inline-flex items-center justify-center",
    "text-[rgb(var(--trinkui-muted))]",
    "transition-colors duration-150",
    "hover:text-[rgb(var(--trinkui-fg))] hover:bg-[rgb(var(--trinkui-surface))]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--trinkui-primary))]",
    "disabled:pointer-events-none disabled:opacity-50",
    "cursor-pointer select-none shrink-0",
    "border-l border-[rgb(var(--trinkui-border))]",
  ].join(" "),
  variants: {
    size: {
      sm: "w-6",
      md: "w-8",
      lg: "w-9",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
