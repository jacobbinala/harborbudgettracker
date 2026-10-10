import { site } from "@/lib/content";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] flex-col justify-end overflow-hidden pb-16 pt-28 sm:justify-center sm:pb-24 sm:pt-32"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 15% 20%, rgba(255,255,255,0.06), transparent 55%), radial-gradient(ellipse 60% 50% at 85% 70%, rgba(255,255,255,0.04), transparent 50%)",
        }}
      />
      <div className="relative mx-auto w-full max-w-5xl px-6">
        <p className="animate-fade-rise font-display text-sm font-medium uppercase tracking-[0.22em] text-muted">
          {site.role}
        </p>
        <h1 className="animate-fade-rise-delay-1 mt-4 font-display text-[clamp(2.75rem,10vw,6.5rem)] font-semibold leading-[0.95] tracking-tight text-accent">
          {site.name}
        </h1>
        <p className="animate-fade-rise-delay-2 mt-6 max-w-xl text-lg leading-relaxed text-muted sm:text-xl">
          {site.tagline}
        </p>
        <div className="animate-fade-rise-delay-3 mt-10 flex flex-wrap items-center gap-x-8 gap-y-4">          
        <a
            href={site.links.linkedin}
            className="link-underline text-sm text-foreground"
          >
            LinkedIn
          </a>
          <a
            href={site.links.instagram}
            className="link-underline text-sm text-foreground"
          >
            Instagram
          </a>
          <a
            href={site.links.github}
            className="link-underline text-sm text-foreground"
          >
            GitHub
          </a>
        </div>
        <a
          href="/resume.pdf"
          download="resume.pdf"
          className="link-underline text-sm text-foreground mt-4 inline-block flex items-center gap-2"
        >
          Resume
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="18"
            height="18"
            fill="none"
            viewBox="0 0 20 20"
            aria-hidden="true"
            className="inline-block"
          >
            <path
              d="M10 3v10m0 0l-3.5-3.5M10 13l3.5-3.5M4 17h12"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>

   
    </section>
  );
}
