"use client";

import * as React from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import {
  AnimatePresence,
  motion,
  useMotionTemplate,
  useScroll,
  useTransform,
} from "framer-motion";
import { cn } from "@/lib/utils";
import { nav, profile } from "@/lib/data";
import { ThemeToggle } from "@/components/theme-toggle";
import { Button } from "@/components/ui/button";

export function SiteHeader() {
  const [activeHash, setActiveHash] = React.useState<string>("");
  const [open, setOpen] = React.useState(false);

  const { scrollY } = useScroll();
  const headerHeight = useTransform(scrollY, [0, 100], [64, 56]);
  const borderPct = useTransform(scrollY, [0, 100], [0, 60]);
  const borderColor = useMotionTemplate`color-mix(in oklch, var(--primary) ${borderPct}%, var(--border))`;

  React.useEffect(() => {
    const sections = nav
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveHash(`#${entry.target.id}`);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px", threshold: 0 }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  React.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <motion.header
      style={{ borderBottomColor: borderColor }}
      className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <motion.div
        style={{ height: headerHeight }}
        className="mx-auto flex w-full max-w-5xl items-center justify-between px-6"
      >
        <Link href="#top" className="font-mono text-sm font-medium" onClick={() => setOpen(false)}>
          DW<span className="text-primary">.</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "text-sm text-muted-foreground transition-colors hover:text-foreground",
                activeHash === item.href && "text-foreground font-medium"
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Button
            nativeButton={false}
            size="sm"
            render={
              <a href={profile.resumeUrl} download>
                <Download className="size-4" />
                Resume
              </a>
            }
          />
        </div>

        <div className="flex items-center gap-1 md:hidden">
          <ThemeToggle />
          <Button
            variant="ghost"
            size="icon"
            className="size-11"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </motion.div>

      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
            className="overflow-hidden border-t border-border/60 md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-3">
              {nav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "flex min-h-11 items-center text-base text-muted-foreground transition-colors active:text-primary",
                    activeHash === item.href && "font-medium text-foreground"
                  )}
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={profile.resumeUrl}
                download
                className="mt-2 flex min-h-11 items-center gap-2 text-base font-medium text-primary"
              >
                <Download className="size-4" />
                Download Resume
              </a>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
