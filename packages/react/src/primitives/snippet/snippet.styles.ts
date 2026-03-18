import { variants } from "../../utils/variants";

export const snippetStyles = variants({
  base: [
    "inline-flex items-center gap-3 font-mono text-sm",
    "rounded-[var(--trinkui-radius-md)] px-3 py-2",
  ].join(" "),
  variants: {
    variant: {
      flat: "",
      bordered: "border",
      shadow: "shadow-[var(--trinkui-shadow-sm)]",
    },
    color: {
      default: "bg-[rgb(var(--trinkui-surface))] text-[rgb(var(--trinkui-fg))]",
      primary: "bg-[rgb(var(--trinkui-primary)/0.1)] text-[rgb(var(--trinkui-primary))]",
      secondary: "bg-[rgb(var(--trinkui-secondary)/0.1)] text-[rgb(var(--trinkui-secondary-fg))]",
      success: "bg-green-500/10 text-green-600",
      warning: "bg-amber-500/10 text-amber-600",
      danger: "bg-red-500/10 text-red-600",
    },
  },
  defaultVariants: {
    variant: "flat",
    color: "default",
  },
  compoundVariants: [
    { variant: "bordered", color: "default", class: "border-[rgb(var(--trinkui-border))]" },
    { variant: "bordered", color: "primary", class: "border-[rgb(var(--trinkui-primary)/0.3)]" },
    { variant: "bordered", color: "secondary", class: "border-[rgb(var(--trinkui-secondary)/0.3)]" },
    { variant: "bordered", color: "success", class: "border-green-500/30" },
    { variant: "bordered", color: "warning", class: "border-amber-500/30" },
    { variant: "bordered", color: "danger", class: "border-red-500/30" },
  ],
});
