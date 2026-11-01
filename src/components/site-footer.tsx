import { Container } from "@/components/container";
import { profile } from "@/lib/data";

export function SiteFooter() {
  return (
    <footer className="border-t border-border/60 py-8">
      <Container className="flex flex-col items-center gap-2 text-center text-sm text-muted-foreground sm:flex-row sm:justify-between sm:text-left">
        <p>
          &copy; 2026 {profile.name}. Built with Next.js & Tailwind CSS.
        </p>
        <p className="font-mono text-xs">Designed, built, and deployed by {profile.shortName}.</p>
      </Container>
    </footer>
  );
}
