"use client";

import { m } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";
import { type ReactNode } from "react";

interface MotionSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  id?: string;
  "aria-label"?: string;
}

export function MotionSection({
  children,
  className,
  delay = 0,
  id,
  "aria-label": ariaLabel,
}: MotionSectionProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <section data-motion id={id} aria-label={ariaLabel} className={className}>
        {children}
      </section>
    );
  }

  return (
    <m.section
      data-motion
      id={id}
      aria-label={ariaLabel}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: delay + 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      className={className}
    >
      {children}
    </m.section>
  );
}
