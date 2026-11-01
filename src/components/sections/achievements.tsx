import { Trophy } from "lucide-react";
import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { Card, CardContent } from "@/components/ui/card";
import { achievements } from "@/lib/data";

export function Achievements() {
  return (
    <section id="achievements" className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="06" title="Achievements" />
        <div className="grid gap-4 sm:grid-cols-3">
          {achievements.map((item, i) => (
            <FadeIn key={item.title} delay={i * 0.05}>
              <Card className="h-full border-border/70">
                <CardContent className="flex h-full flex-col gap-2 pt-2">
                  <Trophy className="size-5 text-primary" />
                  <h3 className="text-sm font-semibold">{item.title}</h3>
                  <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
                  <p className="text-sm text-muted-foreground">{item.detail}</p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </Container>
    </section>
  );
}
