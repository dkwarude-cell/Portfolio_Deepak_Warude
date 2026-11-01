"use client";

import * as React from "react";
import { AnimatePresence, motion } from "framer-motion";
import { cn } from "@/lib/utils";

export function EmailLink({
  email,
  className,
  ariaLabel,
  children,
}: {
  email: string;
  className?: string;
  ariaLabel?: string;
  children: React.ReactNode;
}) {
  const [copied, setCopied] = React.useState(false);
  const timeoutRef = React.useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  async function handleClick() {
    try {
      await navigator.clipboard.writeText(email);
    } catch {
      // Clipboard API unavailable (e.g. insecure context) — the mailto
      // navigation below still fires regardless, so the click isn't a no-op.
    }
    setCopied(true);
    clearTimeout(timeoutRef.current);
    timeoutRef.current = setTimeout(() => setCopied(false), 1800);
  }

  React.useEffect(() => () => clearTimeout(timeoutRef.current), []);

  return (
    <span className="relative inline-flex">
      <a href={`mailto:${email}`} onClick={handleClick} aria-label={ariaLabel} className={className}>
        {children}
      </a>
      <AnimatePresence>
        {copied && (
          <motion.span
            role="status"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.2 }}
            className={cn(
              "pointer-events-none absolute -top-9 left-1/2 z-10 -translate-x-1/2",
              "whitespace-nowrap rounded-md bg-primary px-2.5 py-1 text-xs font-medium text-primary-foreground shadow-lg"
            )}
          >
            Email copied!
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
