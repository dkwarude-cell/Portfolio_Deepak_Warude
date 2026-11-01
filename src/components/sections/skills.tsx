import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { Badge } from "@/components/ui/badge";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <section id="skills" className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="04" title="Skills" />
        <div className="grid gap-6 sm:grid-cols-2">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={i * 0.04}>
              <h3 className="mb-3 text-sm font-medium text-muted-foreground">
                {group.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <Badge key={item} variant="outline" className="font-normal">
                    {item}
                  </Badge>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
