import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="02" title="Experience" />
        <div className="space-y-10">
          {experience.map((job, i) => (
            <FadeIn key={job.role + job.start} delay={i * 0.05}>
              <div className="grid gap-2 sm:grid-cols-[180px_1fr]">
                <p className="font-mono text-sm text-muted-foreground">
                  {job.start} — {job.end}
                </p>
                <div>
                  <h3 className="font-medium">
                    {job.role} <span className="text-muted-foreground">· {job.company}</span>
                  </h3>
                  <p className="text-sm text-muted-foreground">{job.location}</p>
                  <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                    {job.bullets.map((bullet) => (
                      <li key={bullet} className="flex gap-2">
                        <span className="mt-2 size-1 shrink-0 rounded-full bg-primary" aria-hidden />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
