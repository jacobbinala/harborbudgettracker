import { skills } from "@/lib/content";
import { Section } from "./Section";

export function Skills() {
  return (
    <Section title={skills.title}>
      <div className="grid gap-10 sm:grid-cols-2">
        {skills.groups.map((group) => (
          <div key={group.label}>
            <h3 className="text-sm font-medium text-accent">{group.label}</h3>
            <ul className="mt-3 space-y-1.5">
              {group.items.map((item) => (
                <li key={item} className="text-sm leading-relaxed text-muted">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Section>
  );
}
