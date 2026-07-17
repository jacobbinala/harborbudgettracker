import { projects } from "@/lib/content";
import { ImageCarousel } from "./ImageCarousel";
import { Section } from "./Section";

export function Projects() {
  return (
    <Section id="work" title={projects.title} wide>
      <ul className="divide-y divide-border">
        {projects.items.map((project) => (
          <li
            key={project.title}
            className="grid gap-8 py-12 first:pt-0 last:pb-0 lg:grid-cols-[1.1fr_0.9fr] lg:gap-12"
          >
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <h3 className="font-display text-xl font-semibold tracking-tight text-accent sm:text-2xl">
                  {project.title}
                </h3>
                <time className="text-sm text-muted">{project.year}</time>
              </div>
              <a
                href={project.href}
                className="link-underline mt-3 inline-block text-sm text-foreground"
              >
                {project.hrefLabel}
              </a>
              <ul className="mt-6 space-y-2.5">
                {project.bullets.map((bullet) => (
                  <li
                    key={bullet}
                    className="text-sm leading-relaxed text-muted sm:text-base"
                  >
                    {bullet}
                  </li>
                ))}
              </ul>
            </div>

            {"images" in project && project.images && project.images.length > 0 ? (
              <ImageCarousel images={[...project.images]} label={project.title} />
            ) : (
              <div
                className="flex aspect-16/10 items-center justify-center border border-border bg-white/5 text-sm tracking-wide text-muted"
                aria-hidden
              >
                Image
              </div>
            )}
          </li>
        ))}
      </ul>
    </Section>
  );
}
