import { SITE } from "@/lib/site-data";

export const Marquee = () => {
  const items = ["Building", "Interactive", "Web Experiences", "Creative Developer"];
  return (
    <section className="overflow-hidden border-y border-border bg-background py-10">
      <div className="marquee-track">
        {Array.from({ length: 2 }).map((_, k) => (
          <div key={k} className="flex shrink-0 items-center gap-10 pr-10">
            {items.map((t, i) => (
              <span key={i} className="flex items-center gap-10 whitespace-nowrap">
                <span className="display-serif text-[14vw] md:text-[10vw] leading-none italic font-light">
                  {t}
                </span>
                <span className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-primary text-primary-foreground">
                  ✦
                </span>
              </span>
            ))}
          </div>
        ))}
      </div>
      <p className="mono mt-6 text-center text-xs uppercase tracking-[0.3em] text-muted-foreground">
        / Creating since {SITE.since}
      </p>
    </section>
  );
};
