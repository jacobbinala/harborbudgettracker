import { languages } from "@/lib/content";
import { Section } from "./Section";

export function Languages() {
  return (
    <Section title={languages.title}>
      <p className="max-w-2xl text-base leading-relaxed text-muted">
        {languages.body}
      </p>
    </Section>
  );
}
