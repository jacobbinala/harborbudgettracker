import type { ReactNode } from "react";
import { Reveal } from "./Reveal";

type SectionProps = {
  id?: string;
  title: string;
  children: ReactNode;
  wide?: boolean;
};

export function Section({ id, title, children, wide = false }: SectionProps) {
  return (
    <section
      id={id}
      className="scroll-mt-24 border-t border-border py-16 sm:py-20"
    >
      <div
        className={`mx-auto w-full px-6 ${wide ? "max-w-5xl" : "max-w-3xl"}`}
      >
        <Reveal>
          <h2 className="font-display text-sm font-semibold uppercase tracking-[0.2em] text-accent">
            {title}
          </h2>
        </Reveal>
        <div className="mt-8">{children}</div>
      </div>
    </section>
  );
}
