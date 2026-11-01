"use client";

import { motion, useReducedMotion } from "framer-motion";
import { useCoarsePointer } from "@/hooks/use-coarse-pointer";

export function FadeIn({
  children,
  delay = 0,
  className,
}: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const reduceMotion = useReducedMotion();
  const isCoarse = useCoarsePointer();
  const skipHeavyEffects = isCoarse;

  return (
    <motion.div
      className={className}
      initial={
        reduceMotion
          ? undefined
          : {
              opacity: 0,
              y: skipHeavyEffects ? 14 : 28,
              scale: skipHeavyEffects ? 1 : 0.97,
              filter: skipHeavyEffects ? "blur(0px)" : "blur(6px)",
            }
      }
      whileInView={
        reduceMotion
          ? undefined
          : { opacity: 1, y: 0, scale: 1, filter: "blur(0px)" }
      }
      viewport={{ once: true, margin: "-40px" }}
      transition={{
        duration: skipHeavyEffects ? 0.4 : 0.6,
        delay,
        ease: [0.16, 1, 0.3, 1],
      }}
    >
      {children}
    </motion.div>
  );
}
