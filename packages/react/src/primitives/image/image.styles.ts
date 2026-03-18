import { variants } from "../../utils/variants";

export const imageStyles = variants({
  base: "block max-w-full",
  variants: {
    radius: {
      none: "rounded-none",
      sm: "rounded-[var(--trinkui-radius-sm)]",
      md: "rounded-[var(--trinkui-radius-md)]",
      lg: "rounded-[var(--trinkui-radius-lg)]",
      full: "rounded-full",
    },
    shadow: {
      none: "",
      sm: "shadow-[var(--trinkui-shadow-sm)]",
      md: "shadow-[var(--trinkui-shadow-md)]",
      lg: "shadow-[var(--trinkui-shadow-lg)]",
    },
  },
  defaultVariants: {
    radius: "none",
    shadow: "none",
  },
});

export const imageWrapperStyles = variants({
  base: "relative inline-block overflow-hidden",
  variants: {
    radius: {
      none: "rounded-none",
      sm: "rounded-[var(--trinkui-radius-sm)]",
      md: "rounded-[var(--trinkui-radius-md)]",
      lg: "rounded-[var(--trinkui-radius-lg)]",
      full: "rounded-full",
    },
    shadow: {
      none: "",
      sm: "shadow-[var(--trinkui-shadow-sm)]",
      md: "shadow-[var(--trinkui-shadow-md)]",
      lg: "shadow-[var(--trinkui-shadow-lg)]",
    },
  },
  defaultVariants: {
    radius: "none",
    shadow: "none",
  },
});
