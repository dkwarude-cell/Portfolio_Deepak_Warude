import { Container } from "@/components/container";
import { FadeIn } from "@/components/fade-in";
import { SectionHeading } from "@/components/section-heading";
import { profile } from "@/lib/data";

export function About() {
  return (
    <section id="about" className="py-16 sm:py-20">
      <Container>
        <SectionHeading eyebrow="01" title="About" />
        <FadeIn>
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            {profile.bio}
          </p>
        </FadeIn>
      </Container>
    </section>
  );
}
