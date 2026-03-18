"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "../utils/cn";

export interface FadeInProps {
  /** Content to animate */
  children: React.ReactNode;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Animation duration (seconds) */
  duration?: number;
  /** Whether animation triggers on scroll into view */
  scrollTrigger?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Scroll-triggered fade-in animation wrapper.
 * Respects prefers-reduced-motion automatically.
 *
 * @example
 * <FadeIn delay={0.2}>
 *   <p>This fades in when scrolled into view</p>
 * </FadeIn>
 */
export function FadeIn({
  children,
  delay = 0,
  duration = 0.5,
  scrollTrigger = true,
  className,
}: FadeInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={scrollTrigger ? undefined : { opacity: 1 }}
      whileInView={scrollTrigger ? { opacity: 1 } : undefined}
      viewport={scrollTrigger ? { once: true, margin: "-50px" } : undefined}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
