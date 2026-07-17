import { about } from "@/lib/content";
import { Section } from "./Section";

export function About() {
  return (
    <Section title={about.title}>
      <p className="max-w-2xl text-base leading-relaxed text-muted sm:text-lg">
        {about.body}
      </p>
    </Section>
  );
}
