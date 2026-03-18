import { variants } from "../../utils/variants";

export const selectTriggerStyles = variants({
  base: [
    "flex w-full items-center justify-between gap-2",
    "transition-colors duration-200 cursor-pointer",
    "text-[rgb(var(--trinkui-fg))]",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--trinkui-primary))] focus-visible:ring-offset-2",
    "disabled:pointer-events-none disabled:opacity-50",
  ].join(" "),
  variants: {
    variant: {
      default: "border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))]",
      filled: "border border-transparent bg-[rgb(var(--trinkui-surface))]",
      ghost: "border border-transparent bg-transparent",
    },
    size: {
      sm: "h-8 px-3 text-sm rounded-[var(--trinkui-radius-sm)]",
      md: "h-10 px-4 text-sm rounded-[var(--trinkui-radius-md)]",
      lg: "h-12 px-4 text-base rounded-[var(--trinkui-radius-md)]",
    },
    hasError: {
      true: "border-red-500 focus-visible:ring-red-500",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    size: "md",
    hasError: "false",
  },
});

export const selectDropdownStyles = [
  "absolute z-50 mt-1 w-full overflow-auto",
  "rounded-[var(--trinkui-radius-md)]",
  "border border-[rgb(var(--trinkui-border))]",
  "bg-[rgb(var(--trinkui-bg))]",
  "shadow-[var(--trinkui-shadow-lg)]",
  "py-1",
  "max-h-60",
].join(" ");

export const selectOptionStyles = variants({
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
