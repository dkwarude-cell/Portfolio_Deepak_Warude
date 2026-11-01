import Image from "next/image";
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
        <div className="grid gap-4 sm:grid-cols-2">
          {achievements.map((item, i) => {
            const hasImages = "images" in item && item.images && item.images.length > 0;

            return (
              <FadeIn
                key={item.title}
                delay={i * 0.05}
                className={hasImages ? "sm:col-span-2" : undefined}
              >
                <Card className="h-full overflow-hidden border-border/70">
                  {hasImages && (
                    <div className="grid grid-cols-2 gap-px bg-border/70">
                      {item.images!.map((src) => (
                        <div key={src} className="relative aspect-[4/3] overflow-hidden bg-muted">
                          <Image
                            src={src}
                            alt={item.title}
                            fill
                            sizes="(min-width: 640px) 50vw, 100vw"
                            className="object-cover"
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  <CardContent className="flex h-full flex-col gap-2 pt-4">
                    <Trophy className="size-5 text-primary" />
                    <h3 className="text-sm font-semibold">{item.title}</h3>
                    <p className="font-mono text-xs text-muted-foreground">{item.period}</p>
                    <p className="text-sm text-muted-foreground">{item.detail}</p>
                  </CardContent>
                </Card>
              </FadeIn>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
