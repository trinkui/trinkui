import { variants } from "../../utils/variants";

/** Styles for the outer Accordion container */
export const accordionStyles = variants({
  base: "w-full",
  variants: {
    variant: {
      default: "divide-y divide-[rgb(var(--trinkui-border))]",
      bordered: [
        "rounded-[var(--trinkui-radius-lg)] border",
        "border-[rgb(var(--trinkui-border))]",
        "divide-y divide-[rgb(var(--trinkui-border))]",
      ].join(" "),
      separated: "flex flex-col gap-2",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

/** Styles for individual AccordionItem wrappers */
export const accordionItemStyles = variants({
  base: "w-full",
  variants: {
    variant: {
      default: "",
      bordered: "",
      separated: [
        "rounded-[var(--trinkui-radius-md)] border",
        "border-[rgb(var(--trinkui-border))]",
      ].join(" "),
    },
    open: {
      true: "",
      false: "",
    },
    disabled: {
      true: "pointer-events-none opacity-50",
      false: "",
    },
  },
  defaultVariants: {
    variant: "default",
    open: "false",
    disabled: "false",
  },
});
