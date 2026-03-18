export type CodeColor = "default" | "primary" | "secondary" | "success" | "warning" | "danger";
export type CodeSize = "sm" | "md" | "lg";

export interface CodeProps {
  /** The code text to display */
  children: string;
  /** Color variant of the inline code */
  color?: CodeColor;
  /** Size of the inline code */
  size?: CodeSize;
  /** Additional class names */
  className?: string;
}
