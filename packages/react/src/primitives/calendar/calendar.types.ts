export interface CalendarProps {
  /** Controlled selected date */
  value?: Date;
  /** Default selected date (uncontrolled) */
  defaultValue?: Date;
  /** Callback when a date is selected */
  onChange?: (date: Date) => void;
  /** Minimum selectable date */
  minDate?: Date;
  /** Maximum selectable date */
  maxDate?: Date;
  /** Whether the calendar is disabled */
  disabled?: boolean;
  /** Additional class names */
  className?: string;
}
