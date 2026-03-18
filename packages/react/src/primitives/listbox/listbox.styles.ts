import { variants } from "../../utils/variants";

export const listboxContainerStyles = variants({
  base: [
    "flex flex-col overflow-auto",
    "rounded-[var(--trinkui-radius-md)]",
    "bg-[rgb(var(--trinkui-bg))]",
    "py-1",
    "max-h-72",
    "w-full",
  ].join(" "),
  variants: {
    variant: {
      flat: "",
      bordered: "border border-[rgb(var(--trinkui-border))] shadow-[var(--trinkui-shadow-sm)]",
    },
  },
  defaultVariants: {
    variant: "flat",
  },
});

export const listboxOptionStyles = variants({
  base: [
    "flex w-full items-center gap-3 px-3 py-2",
    "text-sm transition-colors duration-100",
    "cursor-pointer select-none",
    "rounded-[var(--trinkui-radius-sm)]",
    "mx-1",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--trinkui-primary))]",
  ].join(" "),
  variants: {
    selected: {
      true: "bg-[rgb(var(--trinkui-primary)/0.1)] text-[rgb(var(--trinkui-primary))]",
      false: "text-[rgb(var(--trinkui-fg))] hover:bg-[rgb(var(--trinkui-surface))]",
    },
    disabled: {
      true: "pointer-events-none opacity-50 cursor-default",
      false: "",
    },
  },
  defaultVariants: {
    selected: "false",
    disabled: "false",
  },
});
