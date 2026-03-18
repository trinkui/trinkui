import { variants } from "../../utils/variants";

export const switchTrackStyles = variants({
  base: [
    "relative inline-flex shrink-0 items-center",
    "rounded-full border-2 border-transparent",
    "transition-colors duration-200 ease-in-out",
    "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2",
    "focus-visible:ring-[rgb(var(--trinkui-primary))]",
    "disabled:cursor-not-allowed disabled:opacity-50",
    "cursor-pointer",
  ].join(" "),
  variants: {
    size: {
      sm: "h-5 w-9",
      md: "h-6 w-11",
      lg: "h-7 w-[3.25rem]",
    },
    checked: {
      true: "bg-[rgb(var(--trinkui-primary))]",
      false: "bg-[rgb(var(--trinkui-border))]",
    },
  },
  defaultVariants: {
    size: "md",
    checked: "false",
  },
});

export const switchThumbStyles = variants({
  base: [
    "pointer-events-none inline-block rounded-full",
    "bg-white shadow-sm ring-0",
    "transition-transform duration-200 ease-in-out",
  ].join(" "),
  variants: {
    size: {
      sm: "h-3.5 w-3.5",
      md: "h-4.5 w-4.5",
      lg: "h-5.5 w-5.5",
    },
    checked: {
      true: "",
      false: "translate-x-0.5",
    },
  },
  defaultVariants: {
    size: "md",
    checked: "false",
  },
});

export const switchThumbTranslate: Record<string, string> = {
  sm: "translate-x-[1.05rem]",
  md: "translate-x-[1.3rem]",
  lg: "translate-x-[1.55rem]",
};
