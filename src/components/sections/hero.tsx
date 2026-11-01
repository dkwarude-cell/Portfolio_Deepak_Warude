"use client";

import * as React from "react";
import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

export function Hero() {
  const sectionRef = React.useRef<HTMLElement>(null);
  const reduceMotion = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });

  const orb1Y = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const orb2Y = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 60]);
  const contentOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const photoY = useTransform(scrollYProgress, [0, 1], [0, 90]);

  return (
    <section
      ref={sectionRef}
      id="top"
      className="relative overflow-hidden pb-20 pt-16 sm:pt-24"
    >
      <motion.div
        aria-hidden
        style={{ y: reduceMotion ? 0 : orb1Y }}
        className="pointer-events-none absolute inset-x-0 top-[-10rem] -z-10 flex justify-center blur-3xl"
      >
        <div
          className="h-72 w-[36rem] bg-primary/20"
          style={{ clipPath: "ellipse(50% 50% at 50% 50%)" }}
        />
      </motion.div>
      <motion.div
        aria-hidden
        style={{ y: reduceMotion ? 0 : orb2Y }}
        className="pointer-events-none absolute -right-24 top-24 -z-10 size-72 rounded-full bg-primary/10 blur-3xl sm:size-96"
      />

      <motion.div style={{ y: reduceMotion ? 0 : contentY, opacity: reduceMotion ? 1 : contentOpacity }}>
        <Container className="flex flex-col-reverse items-center gap-10 sm:flex-row sm:items-center sm:justify-between">
          <motion.div
            initial={reduceMotion ? undefined : { opacity: 0, y: 24 }}
            animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-xl text-center sm:text-left"
          >
            <p className="font-mono text-sm text-primary">
              <span className="mr-2 inline-block size-1.5 animate-pulse rounded-full bg-primary align-middle" />
              Hi, I&apos;m {profile.shortName.split(" ")[0]} — {profile.status}
            </p>
            <h1 className="mt-4 text-3xl font-bold tracking-tight text-balance sm:text-5xl">
              {profile.tagline}
            </h1>
            <p className="mt-5 text-base text-muted-foreground sm:text-lg">
              {profile.role} · {profile.location}
            </p>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:justify-start">
              <Button
                nativeButton={false}
                render={
                  <a href="#projects">
                    View Projects <ArrowRight className="size-4" />
                  </a>
                }
              />
              <Button
                nativeButton={false}
                variant="outline"
                render={
                  <a href={profile.resumeUrl} download>
                    <Download className="size-4" /> Resume
                  </a>
                }
              />
            </div>

            <div className="mt-6 flex items-center justify-center gap-4 sm:justify-start">
              <a
                href={profile.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <GithubIcon className="size-5" />
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <LinkedinIcon className="size-5" />
              </a>
              <a
                href={`mailto:${profile.email}`}
                aria-label="Email"
                className="text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail className="size-5" />
              </a>
            </div>
          </motion.div>

          <motion.div
            style={{ y: reduceMotion ? 0 : photoY }}
            initial={reduceMotion ? undefined : { opacity: 0, scale: 0.9 }}
            animate={reduceMotion ? undefined : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="relative shrink-0"
          >
            <div
              className="absolute inset-0 -z-10 rounded-full bg-primary/25 blur-2xl"
              aria-hidden
            />
            <motion.div
              animate={reduceMotion ? undefined : { y: [0, -10, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="size-36 overflow-hidden rounded-full ring-2 ring-primary/30 sm:size-44"
            >
              <Image
                src={profile.avatar}
                alt={profile.name}
                width={352}
                height={352}
                priority
                className="size-full object-cover"
              />
            </motion.div>
          </motion.div>
        </Container>
      </motion.div>
    </section>
  );
}
