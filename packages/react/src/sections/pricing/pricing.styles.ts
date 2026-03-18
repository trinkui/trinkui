import { variants } from "../../utils/variants";

export const pricingCardStyles = variants({
  base: "flex flex-col gap-6 rounded-[var(--trinkui-radius-xl)] border p-8",
  variants: {
    popular: {
      true: "border-[rgb(var(--trinkui-primary))] shadow-[var(--trinkui-shadow-lg)]",
      false: "border-[rgb(var(--trinkui-border))]",
    },
  },
  defaultVariants: {
    popular: "false",
  },
});
