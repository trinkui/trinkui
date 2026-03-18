import { variants } from "../../utils/variants";

export const buttonStyles = variants({
  base: [
    "inline-flex items-center justify-center gap-2",
    "font-medium transition-all duration-200",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "focus-visible:ring-[rgb(var(--trinkui-primary))]",
    "disabled:pointer-events-none disabled:opacity-50",
    "cursor-pointer select-none",
  ].join(" "),
  variants: {
    variant: {
      primary: [
        "bg-[rgb(var(--trinkui-primary))] text-[rgb(var(--trinkui-primary-fg))]",
        "hover:opacity-90 active:scale-[0.98]",
        "shadow-sm",
      ].join(" "),
      secondary: [
        "bg-[rgb(var(--trinkui-secondary))] text-[rgb(var(--trinkui-secondary-fg))]",
        "hover:opacity-80 active:scale-[0.98]",
      ].join(" "),
      outline: [
        "border border-[rgb(var(--trinkui-border))] bg-transparent",
        "text-[rgb(var(--trinkui-fg))]",
        "hover:bg-[rgb(var(--trinkui-surface))] active:scale-[0.98]",
      ].join(" "),
      ghost: [
        "bg-transparent text-[rgb(var(--trinkui-fg))]",
        "hover:bg-[rgb(var(--trinkui-surface))] active:scale-[0.98]",
      ].join(" "),
      destructive: [
        "bg-[rgb(var(--trinkui-danger))] text-white hover:bg-[rgb(var(--trinkui-danger)/0.9)] active:scale-[0.98]",
        "shadow-sm",
      ].join(" "),
    },
    size: {
      sm: "h-8 rounded-[var(--trinkui-radius-sm)] px-3 text-sm",
      md: "h-10 rounded-[var(--trinkui-radius-md)] px-4 text-sm",
      lg: "h-12 rounded-[var(--trinkui-radius-md)] px-6 text-base",
      xl: "h-14 rounded-[var(--trinkui-radius-lg)] px-8 text-lg",
    },
    fullWidth: {
      true: "w-full",
      false: "",
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
    fullWidth: "false",
  },
});
