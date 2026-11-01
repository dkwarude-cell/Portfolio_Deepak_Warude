"use client";

import { motion, useReducedMotion } from "framer-motion";

export function SectionHeading({
  eyebrow,
  title,
}: {
  eyebrow: string;
  title: string;
}) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="mb-10 flex items-baseline gap-4">
      <span className="font-mono text-sm text-primary">{eyebrow}</span>
      <h2 className="text-2xl font-semibold tracking-tight sm:text-3xl">
        {title}
      </h2>
      <motion.span
        aria-hidden
        className="h-px flex-1 origin-left bg-gradient-to-r from-primary/60 to-border"
        initial={reduceMotion ? undefined : { scaleX: 0 }}
        whileInView={reduceMotion ? undefined : { scaleX: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      />
    </div>
  );
}
