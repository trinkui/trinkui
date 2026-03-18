import { variants } from "../../utils/variants";

export const tabListStyles = variants({
  base: "flex",
  variants: {
    variant: {
      underline: "border-b border-[rgb(var(--trinkui-border))] gap-0",
      solid: [
        "bg-[rgb(var(--trinkui-surface))]",
        "rounded-[var(--trinkui-radius-lg)] p-1 gap-1",
      ].join(" "),
      bordered: [
        "border border-[rgb(var(--trinkui-border))]",
        "rounded-[var(--trinkui-radius-lg)] p-1 gap-1",
      ].join(" "),
    },
    fullWidth: {
      true: "w-full",
      false: "w-fit",
    },
  },
  defaultVariants: {
    variant: "underline",
    fullWidth: "false",
  },
});

export const tabButtonStyles = variants({
  base: [
    "inline-flex items-center justify-center font-medium",
    "transition-all duration-200 cursor-pointer select-none",
    "focus-visible:outline-none focus-visible:ring-2",
    "focus-visible:ring-[rgb(var(--trinkui-primary))] focus-visible:ring-offset-2",
    "text-[rgb(var(--trinkui-muted))]",
  ].join(" "),
  variants: {
    variant: {
      underline: "-mb-px border-b-2 border-transparent",
      solid: "rounded-[var(--trinkui-radius-md)]",
      bordered: "rounded-[var(--trinkui-radius-md)]",
    },
    size: {
      sm: "px-3 py-1.5 text-sm",
      md: "px-4 py-2 text-sm",
      lg: "px-5 py-2.5 text-base",
    },
    active: {
      true: "",
      false: "",
    },
    fullWidth: {
      true: "flex-1",
      false: "",
    },
  },
  compoundVariants: [
    {
      variant: "underline",
      active: "true",
      class: "border-[rgb(var(--trinkui-primary))] text-[rgb(var(--trinkui-primary))]",
    },
    {
      variant: "underline",
      active: "false",
      class: "hover:text-[rgb(var(--trinkui-fg))] hover:border-[rgb(var(--trinkui-border))]",
    },
    {
      variant: "solid",
      active: "true",
      class: "bg-[rgb(var(--trinkui-bg))] text-[rgb(var(--trinkui-fg))] shadow-[var(--trinkui-shadow-sm)]",
    },
    {
      variant: "solid",
      active: "false",
      class: "hover:text-[rgb(var(--trinkui-fg))]",
    },
    {
      variant: "bordered",
      active: "true",
      class: "bg-[rgb(var(--trinkui-bg))] text-[rgb(var(--trinkui-fg))] shadow-[var(--trinkui-shadow-sm)]",
    },
    {
      variant: "bordered",
      active: "false",
      class: "hover:text-[rgb(var(--trinkui-fg))]",
    },
  ],
  defaultVariants: {
    variant: "underline",
    size: "md",
    active: "false",
    fullWidth: "false",
  },
});
