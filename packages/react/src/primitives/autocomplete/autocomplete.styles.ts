import { variants } from "../../utils/variants";

export const autocompleteInputStyles = variants({
  base: [
    "flex w-full items-center gap-2",
    "border bg-[rgb(var(--trinkui-bg))] text-[rgb(var(--trinkui-fg))]",
    "transition-colors duration-200",
    "focus-within:ring-2 focus-within:ring-[rgb(var(--trinkui-primary))] focus-within:ring-offset-1 focus-within:outline-none",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  variants: {
    size: {
      sm: "h-8 px-3 text-sm rounded-[var(--trinkui-radius-sm)]",
      md: "h-10 px-4 text-sm rounded-[var(--trinkui-radius-md)]",
      lg: "h-12 px-4 text-base rounded-[var(--trinkui-radius-md)]",
    },
    hasError: {
      true: "border-red-500 focus-within:ring-red-500",
      false: "border-[rgb(var(--trinkui-border))]",
    },
  },
  defaultVariants: {
    size: "md",
    hasError: "false",
  },
});

export const autocompleteInputBaseStyles =
  "flex-1 bg-transparent outline-none placeholder:text-[rgb(var(--trinkui-muted))] disabled:cursor-not-allowed";

export const autocompleteDropdownStyles = [
  "absolute z-50 mt-1 w-full overflow-auto",
  "rounded-[var(--trinkui-radius-md)]",
  "border border-[rgb(var(--trinkui-border))]",
  "bg-[rgb(var(--trinkui-bg))]",
  "shadow-[var(--trinkui-shadow-lg)]",
  "py-1",
  "max-h-60",
].join(" ");

export const autocompleteOptionStyles = variants({
  base: [
    "flex w-full items-center px-4 cursor-pointer",
    "text-[rgb(var(--trinkui-fg))]",
    "transition-colors duration-100",
  ].join(" "),
  variants: {
    size: {
      sm: "py-1.5 text-sm",
      md: "py-2 text-sm",
      lg: "py-2.5 text-base",
    },
    highlighted: {
      true: "bg-[rgb(var(--trinkui-surface))]",
      false: "",
    },
    selected: {
      true: "text-[rgb(var(--trinkui-primary))] font-medium",
      false: "",
    },
    disabled: {
      true: "pointer-events-none opacity-50",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    highlighted: "false",
    selected: "false",
    disabled: "false",
  },
});
