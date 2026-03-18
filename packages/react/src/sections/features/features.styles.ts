import { variants } from "../../utils/variants";

export const featureCardStyles = variants({
  base: [
    "flex flex-col gap-4 rounded-[var(--trinkui-radius-lg)] p-6",
    "transition-shadow duration-200",
  ].join(" "),
  variants: {
    variant: {
      default: [
        "bg-[rgb(var(--trinkui-surface))]",
        "border border-[rgb(var(--trinkui-border))]",
        "shadow-[var(--trinkui-shadow-sm)]",
      ].join(" "),
      ghost: [
        "bg-transparent",
        "border-0",
      ].join(" "),
    },
  },
  defaultVariants: {
    variant: "default",
  },
});
