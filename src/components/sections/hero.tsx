import Image from "next/image";
import { ArrowRight, Download, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Container } from "@/components/container";
import { Button } from "@/components/ui/button";
import { profile } from "@/lib/data";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pb-20 pt-16 sm:pt-24">
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-[-10rem] -z-10 flex justify-center blur-3xl"
      >
        <div className="h-72 w-[36rem] bg-primary/15" style={{ clipPath: "ellipse(50% 50% at 50% 50%)" }} />
      </div>

      <Container className="flex flex-col-reverse items-center gap-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="max-w-xl text-center sm:text-left">
          <p className="font-mono text-sm text-primary">
            Hi, I&apos;m {profile.shortName.split(" ")[0]} — {profile.status}
          </p>
          <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
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
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <GithubIcon className="size-5" />
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <LinkedinIcon className="size-5" />
            </a>
            <a
              href={`mailto:${profile.email}`}
              aria-label="Email"
              className="text-muted-foreground transition-colors hover:text-foreground"
            >
              <Mail className="size-5" />
            </a>
          </div>
        </div>

        <div className="relative shrink-0">
          <div className="absolute inset-0 -z-10 rounded-full bg-primary/20 blur-2xl" aria-hidden />
          <div className="size-36 overflow-hidden rounded-full ring-2 ring-border sm:size-44">
            <Image
              src={profile.avatar}
              alt={profile.name}
              width={352}
              height={352}
              priority
              className="size-full object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}
