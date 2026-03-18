import { cn } from "./cn";

type VariantRecord = Record<string, Record<string, string>>;
type DefaultVariants<V extends VariantRecord> = {
  [K in keyof V]?: keyof V[K];
};

interface VariantsConfig<V extends VariantRecord> {
  base?: string;
  variants: V;
  defaultVariants?: DefaultVariants<V>;
  compoundVariants?: Array<
    Partial<{ [K in keyof V]: keyof V[K] }> & { class: string }
  >;
}

type VariantProps<V extends VariantRecord> = {
  [K in keyof V]?: keyof V[K];
};

/**
 * Lightweight class variance utility.
 * Alternative to CVA — generates variant-based Tailwind class strings.
 *
 * @example
 * const button = variants({
 *   base: "inline-flex items-center rounded",
 *   variants: {
 *     variant: { primary: "bg-primary text-white", outline: "border border-primary" },
 *     size: { sm: "text-sm px-3 py-1", md: "text-base px-4 py-2" },
 *   },
 *   defaultVariants: { variant: "primary", size: "md" },
 * });
 *
 * button({ variant: "outline", size: "sm" }) // "inline-flex items-center rounded border border-primary text-sm px-3 py-1"
 */
export function variants<V extends VariantRecord>(
  config: VariantsConfig<V>
): (props?: VariantProps<V> & { class?: string; className?: string }) => string {
  const { base = "", variants: variantDefs, defaultVariants = {}, compoundVariants = [] } = config;

  return (props = {}) => {
    const classes: string[] = [base];

    // Apply variant classes
    for (const [key, variantOptions] of Object.entries(variantDefs)) {
      const propsRecord = props as Record<string, unknown>;
      const defaultsRecord = defaultVariants as Record<string, unknown>;
      const value = (propsRecord[key] ?? defaultsRecord[key]) as string | undefined;
      if (value && variantOptions[value]) {
        classes.push(variantOptions[value]);
      }
    }

    // Apply compound variants
    for (const compound of compoundVariants) {
      const { class: compoundClass, ...conditions } = compound;
      const propsRecord = props as Record<string, unknown>;
      const defaultsRecord = defaultVariants as Record<string, unknown>;
      const matches = Object.entries(conditions).every(([k, v]) => {
        return (propsRecord[k] ?? defaultsRecord[k]) === v;
      });
      if (matches) {
        classes.push(compoundClass);
      }
    }

    // Append extra class/className
    if (props.class) classes.push(props.class);
    if (props.className) classes.push(props.className);

    return cn(...classes);
  };
}
