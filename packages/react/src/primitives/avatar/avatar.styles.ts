import { variants } from "../../utils/variants";

export const avatarStyles = variants({
  base: "inline-flex items-center justify-center rounded-full overflow-hidden shrink-0 bg-[rgb(var(--trinkui-primary)/0.1)] text-[rgb(var(--trinkui-primary))] font-medium",
  variants: {
    size: {
      xs: "h-6 w-6 text-xs",
      sm: "h-8 w-8 text-sm",
      md: "h-10 w-10 text-sm",
      lg: "h-12 w-12 text-base",
      xl: "h-16 w-16 text-xl",
    },
    ring: {
      true: "ring-2 ring-[rgb(var(--trinkui-bg))]",
      false: "",
    },
  },
  defaultVariants: {
    size: "md",
    ring: "false",
  },
});
