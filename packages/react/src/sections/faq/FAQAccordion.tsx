"use client";

import React, { forwardRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "motion/react";
import type { FAQBaseProps } from "./faq.types";
import { Section } from "../../layout/Section";
import { Container } from "../../layout/Container";
import { SectionHeader } from "../../layout/SectionHeader";
import { SlideUp } from "../../animation/SlideUp";
import { cn } from "../../utils/cn";

export interface FAQAccordionProps extends FAQBaseProps {
  /** Allow multiple items open simultaneously (default: false) */
  allowMultiple?: boolean;
  /** Visual style variant */
  variant?: "default" | "bordered";
}

/** Chevron icon that rotates when the item is open */
function ChevronIcon({ open }: { open: boolean }) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
      className={cn(
        "h-5 w-5 shrink-0 text-[rgb(var(--trinkui-muted))] transition-transform duration-300",
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

/**
 * Accordion-style FAQ section. Clicking a question expands/collapses the answer.
 * Supports single-open and multi-open modes.
 *
 * @example
 * <FAQAccordion
 *   pill="FAQ"
 *   title="Frequently asked questions"
 *   items={[
 *     { question: "What is TrinkUI?", answer: "A React UI component library for landing pages." },
 *   ]}
 * />
 */
export const FAQAccordion = forwardRef<HTMLElement, FAQAccordionProps>(
  (
    {
      pill,
      title,
      subtitle,
      items = [],
      theme,
      animated = true,
      allowMultiple = false,
      variant = "default",
      className,
      children,
      ...props
    },
    ref
  ) => {
    const shouldReduceMotion = useReducedMotion();

    // Track open item ids; array to support allowMultiple
    const [openIds, setOpenIds] = useState<number[]>(() => []);

    const isOpen = (index: number) => openIds.includes(index);

    const toggle = (index: number) => {
      if (allowMultiple) {
        setOpenIds((prev) =>
          prev.includes(index) ? prev.filter((id) => id !== index) : [...prev, index]
        );
      } else {
        setOpenIds((prev) => (prev.includes(index) ? [] : [index]));
      }
    };

    const Wrapper = animated ? SlideUp : React.Fragment;
    const wrapperProps = animated ? { scrollTrigger: false } : {};

    return (
      <Section
        ref={ref}
        theme={theme}
        spacing="lg"
        className={cn("relative overflow-hidden", className)}
        {...props}
      >
        <Container size="lg">
          <div className="flex flex-col gap-12">
            {/* Section header */}
            <Wrapper {...(wrapperProps as object)} delay={0}>
              <SectionHeader
                pill={pill}
                title={title}
                subtitle={subtitle}
                align="center"
              />
            </Wrapper>

            {/* Accordion items */}
            {items.length > 0 && (
              <Wrapper {...(wrapperProps as object)} delay={0.1}>
                <div
                  className={cn(
                    "flex flex-col",
                    variant === "default" && "divide-y divide-[rgb(var(--trinkui-border))]",
                    variant === "bordered" && "gap-3"
                  )}
                >
                  {items.map((item, index) => {
                    const open = isOpen(index);
                    const panelId = `faq-panel-${index}`;
                    const triggerId = `faq-trigger-${index}`;

                    return (
                      <div
                        key={index}
                        className={cn(
                          variant === "bordered" && [
                            "rounded-[var(--trinkui-radius-lg)] border",
                            open
                              ? "border-[rgb(var(--trinkui-primary))]"
                              : "border-[rgb(var(--trinkui-border))]",
                          ]
                        )}
                      >
                        {/* Question button */}
                        <button
                          id={triggerId}
                          aria-expanded={open}
                          aria-controls={panelId}
                          onClick={() => toggle(index)}
                          className={cn(
                            "flex w-full items-center justify-between gap-4 text-left",
                            "py-5 font-semibold text-[rgb(var(--trinkui-fg))]",
                            "transition-colors duration-150 hover:text-[rgb(var(--trinkui-primary))]",
                            "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[rgb(var(--trinkui-primary))]",
                            variant === "bordered" && "px-5"
                          )}
                        >
                          <span>{item.question}</span>
                          <ChevronIcon open={open} />
                        </button>

                        {/* Answer panel */}
                        <AnimatePresence initial={false}>
                          {open && (
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
                              <p
                                className={cn(
                                  "pb-5 text-[rgb(var(--trinkui-muted))] leading-relaxed",
                                  variant === "bordered" && "px-5"
                                )}
                              >
                                {item.answer}
                              </p>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    );
                  })}
                </div>
              </Wrapper>
            )}

            {children}
          </div>
        </Container>
      </Section>
    );
  }
);

FAQAccordion.displayName = "FAQAccordion";
