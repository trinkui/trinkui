"use client";

import { useState } from "react";

/* ------------------------------------------------------------------ */
/*  Inline Demo: Calendar                                              */
/* ------------------------------------------------------------------ */

const DAYS = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];
const MONTH_NAMES = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

function isSameDay(a: Date, b: Date) {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  );
}

function DemoCalendar({
  value,
  onChange,
  minDate,
  maxDate,
  disabled = false,
}: {
  value?: Date | null;
  onChange?: (date: Date) => void;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
}) {
  const today = new Date();
  const [viewMonth, setViewMonth] = useState(value ? value.getMonth() : today.getMonth());
  const [viewYear, setViewYear] = useState(value ? value.getFullYear() : today.getFullYear());

  const firstDayOfMonth = new Date(viewYear, viewMonth, 1).getDay();
  const daysInMonth = new Date(viewYear, viewMonth + 1, 0).getDate();
  const daysInPrevMonth = new Date(viewYear, viewMonth, 0).getDate();

  function goToPrevMonth() {
    if (viewMonth === 0) {
      setViewMonth(11);
      setViewYear((y) => y - 1);
    } else {
      setViewMonth((m) => m - 1);
    }
  }

  function goToNextMonth() {
    if (viewMonth === 11) {
      setViewMonth(0);
      setViewYear((y) => y + 1);
    } else {
      setViewMonth((m) => m + 1);
    }
  }

  function isDisabledDate(date: Date) {
    if (disabled) return true;
    if (minDate && date < new Date(minDate.getFullYear(), minDate.getMonth(), minDate.getDate())) return true;
    if (maxDate && date > new Date(maxDate.getFullYear(), maxDate.getMonth(), maxDate.getDate())) return true;
    return false;
  }

  // Build grid cells
  const cells: { date: Date; inMonth: boolean }[] = [];
  // Leading days from previous month
  for (let i = firstDayOfMonth - 1; i >= 0; i--) {
    cells.push({ date: new Date(viewYear, viewMonth - 1, daysInPrevMonth - i), inMonth: false });
  }
  // Current month
  for (let d = 1; d <= daysInMonth; d++) {
    cells.push({ date: new Date(viewYear, viewMonth, d), inMonth: true });
  }
  // Trailing days
  const remaining = 42 - cells.length;
  for (let d = 1; d <= remaining; d++) {
    cells.push({ date: new Date(viewYear, viewMonth + 1, d), inMonth: false });
  }

  return (
    <div className={`w-72 rounded-[var(--trinkui-radius-lg)] border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-bg))] p-4 ${disabled ? "opacity-50 pointer-events-none" : ""}`}>
      {/* Header */}
      <div className="mb-3 flex items-center justify-between">
        <button
          onClick={goToPrevMonth}
          className="flex h-8 w-8 items-center justify-center rounded-[var(--trinkui-radius-md)] text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))] hover:text-[rgb(var(--trinkui-fg))]"
          aria-label="Previous month"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        <span className="text-sm font-semibold text-[rgb(var(--trinkui-fg))]">
          {MONTH_NAMES[viewMonth]} {viewYear}
        </span>
        <button
          onClick={goToNextMonth}
          className="flex h-8 w-8 items-center justify-center rounded-[var(--trinkui-radius-md)] text-[rgb(var(--trinkui-muted))] transition-colors hover:bg-[rgb(var(--trinkui-secondary))] hover:text-[rgb(var(--trinkui-fg))]"
          aria-label="Next month"
        >
          <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Day names */}
      <div className="mb-1 grid grid-cols-7 text-center">
        {DAYS.map((d) => (
          <span key={d} className="py-1 text-xs font-medium text-[rgb(var(--trinkui-muted))]">
            {d}
          </span>
        ))}
      </div>

      {/* Day grid */}
      <div className="grid grid-cols-7 text-center" role="grid" aria-label="Calendar">
        {cells.map(({ date, inMonth }, idx) => {
          const isToday = isSameDay(date, today);
          const isSelected = value ? isSameDay(date, value) : false;
          const disabledDay = isDisabledDate(date);

          return (
            <button
              key={idx}
              disabled={disabledDay || !inMonth}
              onClick={() => inMonth && !disabledDay && onChange?.(date)}
              className={`relative m-0.5 flex h-8 w-8 items-center justify-center rounded-[var(--trinkui-radius-md)] text-xs transition-colors ${
                !inMonth
                  ? "text-[rgb(var(--trinkui-muted)/0.3)] cursor-default"
                  : disabledDay
                  ? "text-[rgb(var(--trinkui-muted)/0.4)] cursor-not-allowed"
                  : isSelected
                  ? "bg-[rgb(var(--trinkui-primary))] text-[rgb(var(--trinkui-primary-fg))] font-semibold"
                  : isToday
                  ? "border border-[rgb(var(--trinkui-primary))] text-[rgb(var(--trinkui-primary))] font-medium hover:bg-[rgb(var(--trinkui-primary)/0.1)]"
                  : "text-[rgb(var(--trinkui-fg))] hover:bg-[rgb(var(--trinkui-secondary))]"
              }`}
              aria-label={date.toDateString()}
              aria-selected={isSelected}
              role="gridcell"
            >
              {date.getDate()}
            </button>
          );
        })}
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Page                                                               */
/* ------------------------------------------------------------------ */

export default function CalendarPage() {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [rangeDate, setRangeDate] = useState<Date | null>(null);

  const minDate = new Date();
  minDate.setDate(minDate.getDate() - 5);
  const maxDate = new Date();
  maxDate.setDate(maxDate.getDate() + 30);

  return (
    <div className="space-y-10">
      {/* Header */}
      <div>
        <p className="mb-1 text-sm font-medium text-[rgb(var(--trinkui-primary))]">Components</p>
        <h1 className="text-3xl font-bold text-[rgb(var(--trinkui-fg))]">Calendar</h1>
        <p className="mt-2 text-[rgb(var(--trinkui-muted))]">
          A date picker calendar with month navigation, day selection, and support for min/max date constraints.
        </p>
      </div>

      {/* Installation */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Installation</h2>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>npm install @trinkui/react</code>
        </pre>
      </section>

      {/* Import */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Import</h2>
        <pre className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
          <code>{`import { Calendar } from "@trinkui/react";`}</code>
        </pre>
      </section>

      {/* Usage — Basic */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Usage</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Click a day to select it. Navigate between months using the arrow buttons. Today is outlined.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <DemoCalendar
              value={selectedDate}
              onChange={(d) => setSelectedDate(d)}
            />
            {selectedDate && (
              <p className="mt-4 text-sm text-[rgb(var(--trinkui-muted))]">
                Selected: <span className="font-medium text-[rgb(var(--trinkui-fg))]">{selectedDate.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
              </p>
            )}
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`const [date, setDate] = useState<Date | null>(null);

<Calendar
  value={date}
  onChange={(d) => setDate(d)}
/>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Min/Max Date Range */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Min / Max Date</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          Restrict selectable dates with <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">minDate</code> and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">maxDate</code>. Dates outside the range are dimmed and unclickable. This demo allows 5 days in the past through 30 days in the future.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <DemoCalendar
              value={rangeDate}
              onChange={(d) => setRangeDate(d)}
              minDate={minDate}
              maxDate={maxDate}
            />
            {rangeDate && (
              <p className="mt-4 text-sm text-[rgb(var(--trinkui-muted))]">
                Selected: <span className="font-medium text-[rgb(var(--trinkui-fg))]">{rangeDate.toLocaleDateString("en-US", { weekday: "long", year: "numeric", month: "long", day: "numeric" })}</span>
              </p>
            )}
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<Calendar
  value={date}
  onChange={(d) => setDate(d)}
  minDate={new Date("2026-03-13")}
  maxDate={new Date("2026-04-17")}
/>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Disabled */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Disabled</h2>
        <p className="mb-3 text-[rgb(var(--trinkui-muted))]">
          The entire calendar becomes non-interactive when disabled.
        </p>
        <div className="rounded-lg border border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
          <div className="p-8">
            <DemoCalendar disabled />
          </div>
          <div className="border-t border-[rgb(var(--trinkui-border))]">
            <pre className="overflow-x-auto rounded-b-lg bg-[#0a0a0f] px-4 py-3 text-sm text-slate-200">
              <code>{`<Calendar disabled />`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Props */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Props</h2>
        <div className="overflow-x-auto rounded-lg border border-[rgb(var(--trinkui-border))]">
          <table className="w-full text-left text-sm">
            <thead>
              <tr className="border-b border-[rgb(var(--trinkui-border))] bg-[rgb(var(--trinkui-surface))]">
                <th className="px-4 py-3 font-medium text-[rgb(var(--trinkui-fg))]">Prop</th>
                <th className="px-4 py-3 font-medium text-[rgb(var(--trinkui-fg))]">Type</th>
                <th className="px-4 py-3 font-medium text-[rgb(var(--trinkui-fg))]">Default</th>
                <th className="px-4 py-3 font-medium text-[rgb(var(--trinkui-fg))]">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[rgb(var(--trinkui-border))]">
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">value</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">Date | null</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">null</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">The currently selected date</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">onChange</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">(date: Date) =&gt; void</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Callback when a date is selected</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">minDate</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">Date</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Earliest selectable date</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">maxDate</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">Date</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">--</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Latest selectable date</td>
              </tr>
              <tr>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-primary))]">disabled</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">boolean</td>
                <td className="px-4 py-3 font-mono text-xs text-[rgb(var(--trinkui-muted))]">false</td>
                <td className="px-4 py-3 text-[rgb(var(--trinkui-muted))]">Disable the entire calendar</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Accessibility */}
      <section>
        <h2 className="mb-3 text-lg font-semibold text-[rgb(var(--trinkui-fg))]">Accessibility</h2>
        <ul className="list-disc space-y-1 pl-5 text-sm text-[rgb(var(--trinkui-muted))]">
          <li>Uses <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;grid&quot;</code> on the day grid and <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">role=&quot;gridcell&quot;</code> on each day button.</li>
          <li>Each day button has an <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-label</code> with the full date string for screen readers.</li>
          <li>Selected date uses <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">aria-selected=&quot;true&quot;</code>.</li>
          <li>Navigation buttons have accessible labels: &quot;Previous month&quot; and &quot;Next month&quot;.</li>
          <li>Disabled dates are marked with the <code className="rounded bg-[rgb(var(--trinkui-border)/0.5)] px-1 py-0.5 text-xs">disabled</code> attribute.</li>
        </ul>
      </section>

      {/* Navigation */}
      <div className="mt-16 flex items-center justify-between border-t border-[rgb(var(--trinkui-border))] pt-6">
        <a href="/components/button" className="text-sm text-[rgb(var(--trinkui-muted))] hover:text-[rgb(var(--trinkui-fg))] transition-colors">
          &larr; Button
        </a>
        <a href="/components/card" className="text-sm text-[rgb(var(--trinkui-primary))] hover:underline">
          Card &rarr;
        </a>
      </div>
    </div>
  );
}
