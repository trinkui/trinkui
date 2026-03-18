"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "../utils/cn";

export interface SlideUpProps {
  /** Content to animate */
  children: React.ReactNode;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Animation duration (seconds) */
  duration?: number;
  /** Distance to travel upward (pixels) */
  distance?: number;
  /** Whether animation triggers on scroll into view */
  scrollTrigger?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Slide-up reveal animation wrapper.
 * Elements start below and slide up into position.
 * Respects prefers-reduced-motion.
 *
 * @example
 * <SlideUp delay={0.1} distance={30}>
 *   <h1>Headline</h1>
 * </SlideUp>
 */
export function SlideUp({
  children,
  delay = 0,
  duration = 0.6,
  distance = 24,
  scrollTrigger = true,
  className,
}: SlideUpProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const initial = { opacity: 0, y: distance };
  const animate = { opacity: 1, y: 0 };

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
