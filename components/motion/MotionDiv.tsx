"use client";

import { type ReactNode } from "react";
import { m, type HTMLMotionProps } from "framer-motion";
import { useReducedMotion } from "@/hooks/useReducedMotion";

type Direction = "up" | "down" | "left" | "right";

interface MotionDivProps extends Omit<HTMLMotionProps<"div">, "children"> {
  children?: ReactNode;
  delay?: number;
  direction?: Direction;
}

const offsets: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 14 },
  down: { y: -14 },
  left: { x: 14 },
  right: { x: -14 },
};

export function MotionDiv({
  children,
  delay = 0,
  direction = "up",
  ...props
}: MotionDivProps) {
  const prefersReduced = useReducedMotion();

  if (prefersReduced) {
    return (
      <div data-motion className={props.className}>
        {children}
      </div>
    );
  }

  return (
    <m.div
      data-motion
      initial={{ opacity: 0, ...offsets[direction] }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{
        duration: 0.5,
        delay: delay + 0.1,
        ease: [0.16, 1, 0.3, 1],
      }}
      {...props}
    >
      {children}
    </m.div>
  );
}
