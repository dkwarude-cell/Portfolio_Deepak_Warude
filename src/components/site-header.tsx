"use client";

import * as React from "react";
import Link from "next/link";
import { Download, Menu, X } from "lucide-react";
import { motion, useMotionTemplate, useScroll, useTransform } from "framer-motion";
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

  return (
    <motion.header
      style={{ borderBottomColor: borderColor }}
      className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60"
    >
      <motion.div
        style={{ height: headerHeight }}
        className="mx-auto flex w-full max-w-5xl items-center justify-between px-6"
      >
        <Link href="#top" className="font-mono text-sm font-medium">
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
            aria-label="Toggle menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </Button>
        </div>
      </motion.div>

      {open && (
        <nav className="flex flex-col gap-1 border-t border-border/60 px-6 py-4 md:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className="py-2 text-sm text-muted-foreground hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
          <a
            href={profile.resumeUrl}
            download
            className="mt-2 flex items-center gap-2 text-sm font-medium text-primary"
          >
            <Download className="size-4" />
            Download Resume
          </a>
        </nav>
      )}
    </motion.header>
  );
}
