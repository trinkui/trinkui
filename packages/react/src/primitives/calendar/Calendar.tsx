"use client";

import React, { forwardRef, useState, useCallback } from "react";
import type { CalendarProps } from "./calendar.types";
import {
  calendarContainerStyles,
  calendarHeaderStyles,
  calendarNavButtonStyles,
  calendarDayNameStyles,
  calendarDayStyles,
} from "./calendar.styles";
import { cn } from "../../utils/cn";

const DAY_NAMES = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

const MONTH_NAMES = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function isDateDisabled(date: Date, minDate?: Date, maxDate?: Date): boolean {
  if (minDate) {
    const min = new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate());
    if (date < min) return true;
  }
  if (maxDate) {
    const max = new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate());
    if (date > max) return true;
  }
  return false;
}

function getDaysInMonth(year: number, month: number): number {
  return new Date(year, month + 1, 0).getDate();
}

function getFirstDayOfMonth(year: number, month: number): number {
  return new Date(year, month, 1).getDay();
}

interface DayCell {
  date: Date;
  outsideMonth: boolean;
}

function getCalendarDays(year: number, month: number): DayCell[] {
  const days: DayCell[] = [];
  const firstDay = getFirstDayOfMonth(year, month);
  const daysInMonth = getDaysInMonth(year, month);
  const prevMonthDays = getDaysInMonth(year, month - 1);

  // Days from previous month
  for (let i = firstDay - 1; i >= 0; i--) {
    days.push({
      date: new Date(year, month - 1, prevMonthDays - i),
      outsideMonth: true,
    });
  }

  // Days of current month
  for (let d = 1; d <= daysInMonth; d++) {
    days.push({
      date: new Date(year, month, d),
      outsideMonth: false,
    });
  }

  // Fill remaining cells to complete last row
  const remaining = 7 - (days.length % 7);
  if (remaining < 7) {
    for (let i = 1; i <= remaining; i++) {
      days.push({
        date: new Date(year, month + 1, i),
        outsideMonth: true,
      });
    }
  }

  return days;
}

/**
 * Calendar primitive component.
 * A month grid calendar for selecting a single date.
 * Navigate months with prev/next buttons. Click a day to select.
 * Highlights today and the selected date. Disables out-of-range dates.
 *
 * @example
 * <Calendar onChange={(date) => console.log(date)} />
 * <Calendar value={new Date()} minDate={new Date()} />
 */
export const Calendar = forwardRef<HTMLDivElement, CalendarProps>(
  (
    {
      value: controlledValue,
      defaultValue,
      onChange,
      minDate,
      maxDate,
      disabled = false,
      className,
      ...props
    },
    ref
  ) => {
    const today = new Date();
    const isControlled = controlledValue !== undefined;
    const [internalValue, setInternalValue] = useState<Date | undefined>(defaultValue);
    const selectedDate = isControlled ? controlledValue : internalValue;

    const initialMonth = selectedDate ?? today;
    const [viewYear, setViewYear] = useState(initialMonth.getFullYear());
    const [viewMonth, setViewMonth] = useState(initialMonth.getMonth());

    const days = getCalendarDays(viewYear, viewMonth);

    const goToPrevMonth = useCallback(() => {
      setViewMonth((prev) => {
        if (prev === 0) {
          setViewYear((y) => y - 1);
          return 11;
        }
        return prev - 1;
      });
    }, []);

    const goToNextMonth = useCallback(() => {
      setViewMonth((prev) => {
        if (prev === 11) {
          setViewYear((y) => y + 1);
          return 0;
        }
        return prev + 1;
      });
    }, []);

    const handleSelectDay = useCallback(
      (date: Date) => {
        if (disabled) return;
        if (isDateDisabled(date, minDate, maxDate)) return;

        if (!isControlled) {
          setInternalValue(date);
        }
        onChange?.(date);
      },
      [disabled, isControlled, onChange, minDate, maxDate]
    );

    return (
      <div
        ref={ref}
        role="grid"
        aria-label={`${MONTH_NAMES[viewMonth]} ${viewYear}`}
        aria-disabled={disabled}
        className={cn(calendarContainerStyles, disabled && "opacity-50 pointer-events-none", className)}
        {...props}
      >
        {/* Header: month/year + nav */}
        <div className={calendarHeaderStyles}>
          <button
            type="button"
            aria-label="Previous month"
            onClick={goToPrevMonth}
            disabled={disabled}
            className={calendarNavButtonStyles}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M11.78 5.22a.75.75 0 010 1.06L8.06 10l3.72 3.72a.75.75 0 11-1.06 1.06l-4.25-4.25a.75.75 0 010-1.06l4.25-4.25a.75.75 0 011.06 0z"
                clipRule="evenodd"
              />
            </svg>
          </button>

          <span className="text-sm font-semibold text-[rgb(var(--trinkui-fg))]">
            {MONTH_NAMES[viewMonth]} {viewYear}
          </span>

          <button
            type="button"
            aria-label="Next month"
            onClick={goToNextMonth}
            disabled={disabled}
            className={calendarNavButtonStyles}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-4 w-4"
              aria-hidden="true"
            >
              <path
                fillRule="evenodd"
                d="M8.22 5.22a.75.75 0 011.06 0l4.25 4.25a.75.75 0 010 1.06l-4.25 4.25a.75.75 0 01-1.06-1.06L11.94 10 8.22 6.28a.75.75 0 010-1.06z"
                clipRule="evenodd"
              />
            </svg>
          </button>
        </div>

        {/* Day names row */}
        <div className="grid grid-cols-7" role="row">
          {DAY_NAMES.map((day) => (
            <div key={day} role="columnheader" className={calendarDayNameStyles}>
              {day}
            </div>
          ))}
        </div>

        {/* Day grid */}
        <div className="grid grid-cols-7">
          {days.map((cell, index) => {
            const isSelected = selectedDate ? isSameDay(cell.date, selectedDate) : false;
            const isToday = isSameDay(cell.date, today);
            const isDisabled = isDateDisabled(cell.date, minDate, maxDate);

            return (
              <button
                key={index}
                type="button"
                role="gridcell"
                aria-selected={isSelected}
                aria-disabled={isDisabled || cell.outsideMonth}
                tabIndex={isSelected ? 0 : -1}
                disabled={isDisabled || cell.outsideMonth || disabled}
                onClick={() => handleSelectDay(cell.date)}
                className={calendarDayStyles({
                  selected: isSelected ? "true" : "false",
                  today: isToday && !isSelected ? "true" : "false",
                  outsideMonth: cell.outsideMonth ? "true" : "false",
                  disabled: isDisabled ? "true" : "false",
                })}
              >
                {cell.date.getDate()}
              </button>
            );
          })}
        </div>
      </div>
    );
  }
);

Calendar.displayName = "Calendar";
