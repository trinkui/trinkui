"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "../utils/cn";

export interface ScaleInProps {
  /** Content to animate */
  children: React.ReactNode;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Animation duration (seconds) */
  duration?: number;
  /** Starting scale value (0–1) */
  from?: number;
  /** Whether animation triggers on scroll into view */
  scrollTrigger?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Scroll-triggered scale-in animation wrapper.
 * Elements start at a reduced scale and grow to full size while fading in.
 * Respects prefers-reduced-motion automatically.
 *
 * @example
 * <ScaleIn delay={0.2} from={0.85}>
 *   <Card>Content</Card>
 * </ScaleIn>
 */
export function ScaleIn({
  children,
  delay = 0,
  duration = 0.5,
  from = 0.9,
  scrollTrigger = true,
  className,
}: ScaleInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const initial = { opacity: 0, scale: from };
  const animate = { opacity: 1, scale: 1 };

  return (
    <motion.div
      initial={initial}
      animate={scrollTrigger ? undefined : animate}
      whileInView={scrollTrigger ? animate : undefined}
      viewport={scrollTrigger ? { once: true, margin: "-50px" } : undefined}
      transition={{ duration, delay, ease: [0.25, 0.46, 0.45, 0.94] }}
      className={cn(className)}
    >
      {children}
    </motion.div>
  );
}
