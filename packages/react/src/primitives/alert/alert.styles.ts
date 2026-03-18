import { variants } from "../../utils/variants";

export const alertStyles = variants({
  base: [
    "relative flex gap-3 rounded-[var(--trinkui-radius-md)] border-l-4 px-4 py-3",
    "text-[rgb(var(--trinkui-fg))]",
  ].join(" "),
  variants: {
    variant: {
      info: "border-l-blue-500 bg-blue-500/10",
      success: "border-l-green-500 bg-green-500/10",
      warning: "border-l-amber-500 bg-amber-500/10",
      danger: "border-l-red-500 bg-red-500/10",
    },
  },
  defaultVariants: {
    variant: "info",
  },
});

export const alertIconColorMap: Record<string, string> = {
  info: "text-blue-500",
  success: "text-green-500",
  warning: "text-amber-500",
  danger: "text-red-500",
};
