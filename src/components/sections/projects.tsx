import { ExternalLink } from "lucide-react";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { GithubIcon } from "@/components/icons";
import { SectionHeading } from "@/components/section-heading";
import { TiltCard } from "@/components/tilt-card";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="03" title="Projects" />
        <div className="grid gap-6 sm:grid-cols-2">
          {projects.map((project, i) => (
            <FadeIn
              key={project.slug}
              delay={i * 0.05}
              className={cn(project.size === "lg" && "sm:col-span-2")}
            >
              <TiltCard className="h-full">
                <Card className="h-full border-border/70 bg-card/80 backdrop-blur-sm transition-colors hover:border-primary/50">
                  <CardHeader>
                    <div className="flex flex-wrap items-center justify-between gap-2">
                      <h3 className="text-lg font-semibold">{project.name}</h3>
                      {project.badges && project.badges.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {project.badges.map((badge) =>
                            badge === "NDA Signed" ? (
                              <Badge key={badge} variant="outline" className="text-muted-foreground">
                                {badge}
                              </Badge>
                            ) : (
                              <Badge key={badge} className="bg-primary/15 text-primary hover:bg-primary/15">
                                {badge}
                              </Badge>
                            )
                          )}
                        </div>
                      )}
                    </div>
                    <p className="font-mono text-xs text-muted-foreground">{project.period}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{project.summary}</p>

                    <ul className="mt-4 space-y-2 text-sm">
                      {project.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2 text-muted-foreground">
                          <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>

                    <div className="mt-5 flex flex-wrap gap-2">
                      {project.stack.map((tech) => (
                        <Badge key={tech} variant="secondary" className="font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {(project.github || project.live) && (
                      <div className="mt-5 flex flex-wrap gap-4 border-t border-border/60 pt-4 text-sm">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 font-medium text-muted-foreground transition-colors hover:text-primary"
                          >
                            <GithubIcon className="size-4" /> Code
                          </a>
                        )}
                        {project.live && (
                          <a
                            href={project.live}
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-1.5 font-medium text-muted-foreground transition-colors hover:text-primary"
                          >
                            <ExternalLink className="size-4" /> Live Demo
                          </a>
                        )}
                      </div>
                    )}
                  </CardContent>
                </Card>
              </TiltCard>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
