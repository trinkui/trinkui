"use client";

import React, { useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import type { AccordionProps, AccordionItem as AccordionItemType } from "./accordion.types";
import { accordionStyles, accordionItemStyles } from "./accordion.styles";
import { cn } from "../../utils/cn";

/** Chevron icon that rotates 180° when expanded */
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn(
        "h-5 w-5 shrink-0 text-[rgb(var(--trinkui-muted))]",
        "transition-transform duration-300",
        open && "rotate-180"
      )}
      aria-hidden="true"
    >
      <path
        fillRule="evenodd"
        d="M5.22 8.22a.75.75 0 011.06 0L10 11.94l3.72-3.72a.75.75 0 111.06 1.06l-4.25 4.25a.75.75 0 01-1.06 0L5.22 9.28a.75.75 0 010-1.06z"
        clipRule="evenodd"
      />
    </svg>
  );
}

export interface AccordionSingleItemProps {
  /** The accordion item data */
  item: AccordionItemType;
  /** Whether this item is currently open */
  isOpen: boolean;
  /** Callback to toggle the open state */
  onToggle: () => void;
  /** Visual variant */
  variant?: "default" | "bordered" | "separated";
  /** Unique id prefix for aria attributes */
  idPrefix?: string;
}

/**
 * A single accordion item that can be used independently.
 * Handles expand/collapse with smooth animation and full accessibility.
 *
 * @example
 * <AccordionItem
 *   item={{ id: "1", trigger: "Question?", content: "Answer." }}
 *   isOpen={false}
 *   onToggle={() => {}}
 * />
 */
export function AccordionSingleItem({
  item,
  isOpen,
  onToggle,
  variant = "default",
  idPrefix = "accordion",
}: AccordionSingleItemProps) {
  const shouldReduceMotion = useReducedMotion();
  const triggerId = `${idPrefix}-trigger-${item.id}`;
  const panelId = `${idPrefix}-panel-${item.id}`;

  return (
    <div
      className={accordionItemStyles({
        variant,
        open: isOpen ? "true" : "false",
        disabled: item.disabled ? "true" : "false",
      })}
    >
      {/* Trigger button */}
      <button
        id={triggerId}
        aria-expanded={isOpen}
        aria-controls={panelId}
        disabled={item.disabled}
        onClick={onToggle}
        className={cn(
          "flex w-full items-center justify-between gap-4 text-left",
          "py-4 font-medium text-[rgb(var(--trinkui-fg))]",
          "transition-colors duration-150 hover:text-[rgb(var(--trinkui-primary))]",
          "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--trinkui-primary))] focus-visible:ring-offset-2",
          (variant === "bordered" || variant === "separated") && "px-4"
        )}
      >
        <span>{item.trigger}</span>
        <ChevronIcon open={isOpen} />
      </button>

      {/* Animated panel */}
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            id={panelId}
            role="region"
            aria-labelledby={triggerId}
            key={panelId}
            initial={shouldReduceMotion ? false : { height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={shouldReduceMotion ? undefined : { height: 0, opacity: 0 }}
            transition={{
              height: { duration: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
              opacity: { duration: 0.25 },
            }}
            className="overflow-hidden"
          >
            <div
              className={cn(
                "pb-4 text-sm leading-relaxed text-[rgb(var(--trinkui-muted))]",
                (variant === "bordered" || variant === "separated") && "px-4"
              )}
            >
              {item.content}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

AccordionSingleItem.displayName = "AccordionSingleItem";

/**
 * Composable Accordion primitive with smooth animation and accessibility.
 * Supports single-open and multi-open modes, three visual variants, and
 * respects the user's prefers-reduced-motion preference.
 *
 * @example
 * <Accordion
 *   variant="separated"
 *   allowMultiple
 *   items={[
 *     { id: "1", trigger: "What is TrinkUI?", content: "A React UI library.", defaultOpen: true },
 *     { id: "2", trigger: "Is it free?", content: "Yes, there is a free tier." },
 *   ]}
 * />
 */
export function Accordion({
  items,
  allowMultiple = false,
  variant = "default",
  className,
}: AccordionProps) {
  // Initialise open state from defaultOpen
  const [openIds, setOpenIds] = useState<string[]>(() =>
    items.filter((item) => item.defaultOpen && !item.disabled).map((item) => item.id)
  );

  const isOpen = (id: string) => openIds.includes(id);

  const toggle = (id: string) => {
    if (allowMultiple) {
      setOpenIds((prev) =>
        prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
      );
    } else {
      setOpenIds((prev) => (prev.includes(id) ? [] : [id]));
    }
  };

  return (
    <div className={cn(accordionStyles({ variant }), className)}>
      {items.map((item) => (
        <AccordionSingleItem
          key={item.id}
          item={item}
          isOpen={isOpen(item.id)}
          onToggle={() => !item.disabled && toggle(item.id)}
          variant={variant}
          idPrefix="accordion"
        />
      ))}
    </div>
  );
}

Accordion.displayName = "Accordion";
