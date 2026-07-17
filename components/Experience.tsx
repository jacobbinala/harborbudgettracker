import { experience } from "@/lib/content";
import { Section } from "./Section";

export function Experience() {
  return (
    <Section id="experience" title={experience.title}>
      <ul className="space-y-12">
        {experience.items.map((item) => (
          <li key={item.role}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-xl font-semibold tracking-tight text-accent">
                {item.role}
              </h3>
              <time className="text-sm text-muted">{item.dates}</time>
            </div>
            <p className="mt-1 text-sm text-muted">{item.org}</p>
            <ul className="mt-6 space-y-2.5">
              {item.bullets.map((bullet) => (
                <li
                  key={bullet}
                  className="text-sm leading-relaxed text-muted sm:text-base"
                >
                  {bullet}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
