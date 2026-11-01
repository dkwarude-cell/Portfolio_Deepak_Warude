import { ArrowUpRight, Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/icons";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section id="contact" className="py-20 sm:py-28">
      <Container className="text-center">
        <FadeIn>
          <p className="font-mono text-sm text-primary">07 · Contact</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">
            Let&apos;s build something that ships.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-muted-foreground">
            I&apos;m currently {profile.status.toLowerCase()}. The fastest way to reach
            me is email.
          </p>

          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 text-xl font-medium text-foreground underline decoration-primary/40 underline-offset-8 transition-colors hover:text-primary sm:text-2xl"
          >
            {profile.email}
            <ArrowUpRight className="size-5" />
          </a>

          <div className="mt-10 flex items-center justify-center gap-6">
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <GithubIcon className="size-4" /> GitHub
            </a>
            <a
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <LinkedinIcon className="size-4" /> LinkedIn
            </a>
            <a
              href={`mailto:${profile.email}`}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground"
            >
              <Mail className="size-4" /> Email
            </a>
          </div>
        </FadeIn>
      </Container>
    </section>
  );
}
