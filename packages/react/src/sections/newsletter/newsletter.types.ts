import type { BaseSectionProps } from "@trinkui/shared";

export interface NewsletterBaseProps extends BaseSectionProps {
  pill?: string;
  title: string;
  subtitle?: string;
  /** Input placeholder text */
  inputPlaceholder?: string;
  /** Submit button label */
  submitLabel?: string;
  /** Privacy note text */
  privacyNote?: string;
  /** Called when form is submitted with email value */
  onSubmit?: (email: string) => void | Promise<void>;
  animated?: boolean;
}
