import { variants } from "../../utils/variants";

export const cardStyles = variants({
  base: "flex flex-col rounded-[var(--trinkui-radius-xl)] overflow-hidden",
  variants: {
    variant: {
      default:
        "bg-[rgb(var(--trinkui-surface))] border border-[rgb(var(--trinkui-border))]",
      outlined: "bg-transparent border border-[rgb(var(--trinkui-border))]",
      elevated:
        "bg-[rgb(var(--trinkui-bg))] shadow-[var(--trinkui-shadow-md)]",
      ghost: "bg-transparent",
    },
    interactive: {
      true: "cursor-pointer transition-all hover:shadow-[var(--trinkui-shadow-lg)] hover:border-[rgb(var(--trinkui-primary))] hover:-translate-y-0.5",
      false: "",
    },
    fullHeight: {
      true: "h-full",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    interactive: "false",
    fullHeight: "false",
  },
});
