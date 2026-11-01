import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { education } from "@/lib/data";

export function Education() {
  return (
    <section id="education" className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="05" title="Education" />
        <div className="space-y-6">
          {education.map((item, i) => (
            <FadeIn key={item.degree}>
              <div
                className="grid gap-1 border-b border-border/60 pb-6 last:border-0 sm:grid-cols-[180px_1fr] sm:items-baseline"
                style={{ transitionDelay: `${i * 40}ms` }}
              >
                <p className="font-mono text-sm text-muted-foreground">{item.period}</p>
                <div>
                  <h3 className="font-medium">{item.degree}</h3>
                  <p className="text-sm text-muted-foreground">
                    {item.school}
                    {item.detail ? ` · ${item.detail}` : ""}
                  </p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
