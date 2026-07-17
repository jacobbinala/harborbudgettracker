import { education } from "@/lib/content";
import { Section } from "./Section";

export function Education() {
  return (
    <Section id="education" title={education.title}>
      <ul className="space-y-12">
        {education.items.map((item) => (
          <li key={item.credential}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
              <h3 className="font-display text-lg font-semibold tracking-tight text-accent sm:text-xl">
                {item.credential}
              </h3>
              <time className="shrink-0 text-sm text-muted">{item.dates}</time>
            </div>
            <p className="mt-1 text-sm text-muted">{item.school}</p>
            <ul className="mt-4 space-y-2">
              {item.details.map((detail) => (
                <li
                  key={detail}
                  className="text-sm leading-relaxed text-muted sm:text-base"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  );
}
