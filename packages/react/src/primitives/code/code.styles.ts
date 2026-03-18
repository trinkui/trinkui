import { variants } from "../../utils/variants";

export const codeStyles = variants({
  base: [
    "inline-block font-mono",
    "rounded-[var(--trinkui-radius-sm)]",
    "border",
  ].join(" "),
  variants: {
    color: {
      default: [
        "bg-[rgb(var(--trinkui-surface))]",
        "text-[rgb(var(--trinkui-fg))]",
        "border-[rgb(var(--trinkui-border))]",
      ].join(" "),
      primary: [
        "bg-[rgb(var(--trinkui-primary)/0.1)]",
        "text-[rgb(var(--trinkui-primary))]",
        "border-[rgb(var(--trinkui-primary)/0.2)]",
      ].join(" "),
      secondary: [
        "bg-[rgb(var(--trinkui-secondary)/0.1)]",
        "text-[rgb(var(--trinkui-secondary-fg))]",
        "border-[rgb(var(--trinkui-secondary)/0.2)]",
      ].join(" "),
      success: [
        "bg-green-500/10",
        "text-green-600",
        "border-green-500/20",
      ].join(" "),
      warning: [
        "bg-amber-500/10",
        "text-amber-600",
        "border-amber-500/20",
      ].join(" "),
      danger: [
        "bg-red-500/10",
        "text-red-600",
        "border-red-500/20",
      ].join(" "),
    },
    size: {
      sm: "px-1 py-0.5 text-xs",
      md: "px-1.5 py-0.5 text-sm",
      lg: "px-2 py-1 text-base",
    },
  },
  defaultVariants: {
    color: "default",
    size: "md",
  },
});
