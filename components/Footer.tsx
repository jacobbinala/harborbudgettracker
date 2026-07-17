import { site } from "@/lib/content";

export function Footer() {
  return (
    <footer
      id="contact"
      className="scroll-mt-24 border-t border-border py-16 sm:py-20"
    >
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-10 px-6 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            Contact
          </p>
          <p className="mt-4 font-display text-3xl font-semibold tracking-tight text-accent sm:text-4xl">
            {site.name}
          </p>
          <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">
            Open to front-end roles, freelance web projects, and IT support
            opportunities.
          </p>
          <div className="mt-6 flex flex-col gap-2 text-sm">
            <a
              href={`mailto:${site.email}`}
              className="link-underline w-fit text-foreground"
            >
              {site.email}
            </a>
            <a
              href={`tel:${site.phone}`}
              className="link-underline w-fit text-foreground"
            >
              {site.phoneDisplay}
            </a>
          </div>
        </div>
        <nav
          aria-label="Contact links"
          className="flex flex-wrap gap-x-8 gap-y-3"
        >
          <a
            href={site.links.instagram}
            className="link-underline text-sm text-foreground"
          >
            Instagram
          </a>
          <a
            href={site.links.linkedin}
            className="link-underline text-sm text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={site.links.github}
            className="link-underline text-sm text-foreground"
          >
            GitHub
          </a>
        </nav>
      </div>
    </footer>
  );
}
