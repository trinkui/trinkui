export type SnippetVariant = "flat" | "bordered" | "shadow";
export type SnippetColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";

export interface SnippetProps {
  /** The code/command text to display */
  code: string;
  /** Symbol prefix displayed before the code (e.g. "$", ">") */
  symbol?: string;
  /** Visual style variant */
  variant?: SnippetVariant;
  /** Color theme of the snippet */
  color?: SnippetColor;
  /** Show a copy-to-clipboard button */
  copyable?: boolean;
  /** Additional class names */
  className?: string;
}
