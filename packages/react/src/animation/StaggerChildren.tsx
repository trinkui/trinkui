"use client";

import React from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "../utils/cn";

export interface StaggerChildrenProps {
  /** Content to stagger — each direct child is animated separately */
  children: React.ReactNode;
  /** Delay between each child (seconds) */
  staggerDelay?: number;
  /** Delay before first child animates (seconds) */
  initialDelay?: number;
  /** Whether animation triggers on scroll into view */
  scrollTrigger?: boolean;
  /** Animation to apply to each child */
  childAnimation?: "fadeIn" | "slideUp";
  /** Distance for slideUp animation (pixels) */
  slideDistance?: number;
  /** Additional CSS classes */
  className?: string;
}

const containerVariants = (staggerDelay: number, initialDelay: number) => ({
  hidden: {},
  visible: {
    transition: {
      staggerChildren: staggerDelay,
      delayChildren: initialDelay,
    },
  },
});

const fadeVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] } },
};

const slideVariants = (distance: number) => ({
  hidden: { opacity: 0, y: distance },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
});

/**
 * Staggers the entrance animation of its direct children.
 * Each child fades or slides in one after another.
 * Respects prefers-reduced-motion.
 *
 * @example
 * <StaggerChildren staggerDelay={0.1} childAnimation="slideUp">
 *   <Card />
 *   <Card />
 *   <Card />
 * </StaggerChildren>
 */
export function StaggerChildren({
  children,
  staggerDelay = 0.1,
  initialDelay = 0,
  scrollTrigger = true,
  childAnimation = "slideUp",
  slideDistance = 24,
  className,
}: StaggerChildrenProps) {
  const shouldReduceMotion = useReducedMotion();
  const childVariants = childAnimation === "fadeIn" ? fadeVariants : slideVariants(slideDistance);

  if (shouldReduceMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      variants={containerVariants(staggerDelay, initialDelay)}
      initial="hidden"
      animate={scrollTrigger ? undefined : "visible"}
      whileInView={scrollTrigger ? "visible" : undefined}
      viewport={scrollTrigger ? { once: true, margin: "-50px" } : undefined}
      className={cn(className)}
    >
      {React.Children.map(children, (child, index) => (
        <motion.div key={index} variants={childVariants}>
          {child}
        </motion.div>
      ))}
    </motion.div>
  );
}
