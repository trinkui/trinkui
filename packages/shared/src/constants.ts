/** Default animation duration in seconds */
export const ANIMATION_DURATION = 0.5;

/** Default animation ease */
export const ANIMATION_EASE = [0.25, 0.46, 0.45, 0.94] as const;

/** Default stagger delay between children */
export const STAGGER_DELAY = 0.1;

/** Intersection observer threshold for scroll-triggered animations */
export const INTERSECTION_THRESHOLD = 0.1;

/** Container max widths */
export const CONTAINER_SIZES = {
  sm: "max-w-screen-sm",
  md: "max-w-screen-md",
  lg: "max-w-screen-lg",
  xl: "max-w-screen-xl",
  "2xl": "max-w-screen-2xl",
  full: "max-w-full",
} as const;

/** Section spacing classes */
export const SECTION_SPACING = {
  none: "",
  sm: "py-12 md:py-16",
  md: "py-16 md:py-24",
  lg: "py-24 md:py-32",
  xl: "py-32 md:py-40",
} as const;

/** TrinkUI package name */
export const PACKAGE_NAME = "@trinkui/react";

/** TrinkUI version — updated by release script */
export const VERSION = "0.0.1";
