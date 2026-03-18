"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "../utils/cn";

export interface BlurInProps {
  /** Content to animate */
  children: React.ReactNode;
  /** Delay before animation starts (seconds) */
  delay?: number;
  /** Animation duration (seconds) */
  duration?: number;
  /** Starting blur amount in pixels */
  blur?: number;
  /** Whether animation triggers on scroll into view */
  scrollTrigger?: boolean;
  /** Additional CSS classes */
  className?: string;
}

/**
 * Scroll-triggered blur-in animation wrapper.
 * Elements start blurred and sharpen into focus while fading in.
 * Respects prefers-reduced-motion automatically.
 *
 * @example
 * <BlurIn delay={0.1} blur={12}>
 *   <h1>Sharp headline</h1>
 * </BlurIn>
 */
export function BlurIn({
  children,
  delay = 0,
  duration = 0.6,
  blur = 8,
  scrollTrigger = true,
  className,
}: BlurInProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  const initial = { opacity: 0, filter: `blur(${blur}px)` };
  const animate = { opacity: 1, filter: "blur(0px)" };

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
