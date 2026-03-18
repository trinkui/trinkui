/**
 * Simple class name utility for the docs app.
 * Filters falsy values and joins class strings.
 */
export function cn(...inputs: (string | undefined | null | false | 0)[]) {
  return inputs.filter(Boolean).join(" ");
}
