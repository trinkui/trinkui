import { variants } from "../../utils/variants";

export const chipStyles = variants({
  base: "inline-flex items-center gap-1.5 font-medium rounded-full transition-colors duration-150",
  variants: {
    variant: {
      solid: "",
      bordered: "border bg-transparent",
      flat: "",
      dot: "border border-[rgb(var(--trinkui-border))] bg-transparent text-[rgb(var(--trinkui-fg))]",
    },
    color: {
      default: "",
      primary: "",
      secondary: "",
      success: "",
      warning: "",
      danger: "",
    },
    size: {
      sm: "px-2 py-0.5 text-xs",
      md: "px-3 py-1 text-sm",
      lg: "px-4 py-1.5 text-sm",
    },
  },
  compoundVariants: [
    // Solid variants
    { variant: "solid", color: "default", class: "bg-[rgb(var(--trinkui-surface))] text-[rgb(var(--trinkui-fg))]" },
    { variant: "solid", color: "primary", class: "bg-[rgb(var(--trinkui-primary))] text-[rgb(var(--trinkui-primary-fg))]" },
    { variant: "solid", color: "secondary", class: "bg-[rgb(var(--trinkui-secondary))] text-[rgb(var(--trinkui-secondary-fg))]" },
    { variant: "solid", color: "success", class: "bg-green-500 text-white" },
    { variant: "solid", color: "warning", class: "bg-amber-500 text-white" },
    { variant: "solid", color: "danger", class: "bg-red-500 text-white" },

    // Bordered variants
    { variant: "bordered", color: "default", class: "border-[rgb(var(--trinkui-border))] text-[rgb(var(--trinkui-fg))]" },
    { variant: "bordered", color: "primary", class: "border-[rgb(var(--trinkui-primary))] text-[rgb(var(--trinkui-primary))]" },
    { variant: "bordered", color: "secondary", class: "border-[rgb(var(--trinkui-secondary))] text-[rgb(var(--trinkui-secondary-fg))]" },
    { variant: "bordered", color: "success", class: "border-green-500 text-green-600" },
    { variant: "bordered", color: "warning", class: "border-amber-500 text-amber-600" },
    { variant: "bordered", color: "danger", class: "border-red-500 text-red-600" },

    // Flat variants
    { variant: "flat", color: "default", class: "bg-[rgb(var(--trinkui-surface))] text-[rgb(var(--trinkui-fg))]" },
    { variant: "flat", color: "primary", class: "bg-[rgb(var(--trinkui-primary)/0.1)] text-[rgb(var(--trinkui-primary))]" },
    { variant: "flat", color: "secondary", class: "bg-[rgb(var(--trinkui-secondary)/0.15)] text-[rgb(var(--trinkui-secondary-fg))]" },
    { variant: "flat", color: "success", class: "bg-green-500/10 text-green-600" },
    { variant: "flat", color: "warning", class: "bg-amber-500/10 text-amber-600" },
    { variant: "flat", color: "danger", class: "bg-red-500/10 text-red-600" },
  ],
  defaultVariants: {
    variant: "solid",
    color: "default",
    size: "md",
  },
});

/** Dot indicator color mapping */
export const dotColorClasses: Record<string, string> = {
  default: "bg-[rgb(var(--trinkui-fg))]",
  primary: "bg-[rgb(var(--trinkui-primary))]",
  secondary: "bg-[rgb(var(--trinkui-secondary))]",
  success: "bg-green-500",
  warning: "bg-amber-500",
  danger: "bg-red-500",
};
