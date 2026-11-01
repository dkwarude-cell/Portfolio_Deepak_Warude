"use client";

import * as React from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useCoarsePointer } from "@/hooks/use-coarse-pointer";

export function CursorGlow() {
  const isCoarse = useCoarsePointer();
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const springX = useSpring(x, { stiffness: 120, damping: 25, mass: 0.4 });
  const springY = useSpring(y, { stiffness: 120, damping: 25, mass: 0.4 });

  React.useEffect(() => {
    if (isCoarse) return;
    const move = (e: PointerEvent) => {
      x.set(e.clientX - 300);
      y.set(e.clientY - 300);
    };
    window.addEventListener("pointermove", move);
    return () => window.removeEventListener("pointermove", move);
  }, [x, y, isCoarse]);

  if (isCoarse) return null;

  return (
    <motion.div
      aria-hidden
      className="pointer-events-none fixed left-0 top-0 z-0 hidden size-[600px] rounded-full bg-primary/[0.07] blur-[90px] sm:block"
      style={{ x: springX, y: springY }}
    />
  );
}
