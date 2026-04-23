import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { PROJECTS, SITE } from "@/lib/site-data";

const CATEGORIES = ["All", ...Array.from(new Set(PROJECTS.map((p) => p.category)))];

const Works = () => {
  const [active, setActive] = useState("All");
  useEffect(() => { document.title = `Works — ${SITE.name}`; }, []);

  const filtered = useMemo(
    () => (active === "All" ? PROJECTS : PROJECTS.filter((p) => p.category === active)),
    [active],
  );

  return (
    <PageShell>
      <PageHeader
        index="02 — Works"
        title="Selected"
        italicTitle="works."
        intro="A small set of recent projects across product, brand, and interactive — a mix of client work and personal experiments."
      />

      <section className="container-edge">
        <div className="flex flex-wrap gap-2 border-y border-border py-4">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              onClick={() => setActive(c)}
              className={`rounded-full px-4 py-2 mono text-xs uppercase tracking-[0.2em] transition-all ${
                active === c
                  ? "bg-primary text-primary-foreground"
                  : "border border-border hover:border-primary hover:text-primary"
              }`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="divide-y divide-border">
          {filtered.map((p, i) => (
            <motion.a
              key={p.slug}
              href={p.href ?? "#"}
              target={p.href && p.href.startsWith("http") ? "_blank" : undefined}
              rel={p.href && p.href.startsWith("http") ? "noreferrer" : undefined}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.04 }}
              className="group relative grid grid-cols-12 items-center gap-4 py-8 md:py-10"
            >
              <span className="col-span-1 mono text-xs text-muted-foreground">0{i + 1}</span>
              <h3 className="col-span-11 md:col-span-5 display-serif text-4xl md:text-6xl transition-colors group-hover:text-primary">
                {p.title}
              </h3>
              <p className="col-span-12 md:col-span-3 text-muted-foreground">{p.summary}</p>
              <div className="col-span-9 md:col-span-2 flex flex-wrap gap-1.5">
                {p.tags.map((t) => (
                  <span key={t} className="mono rounded-full border border-border px-2.5 py-1 text-[10px] uppercase tracking-[0.18em] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
              <span className="col-span-3 md:col-span-1 mono text-right text-xs text-muted-foreground">{p.year}</span>

              {/* hover preview tile */}
              <div
                className={`pointer-events-none absolute right-0 top-1/2 hidden h-40 w-56 -translate-y-1/2 translate-x-6 rounded-2xl bg-gradient-to-br ${p.accent} opacity-0 transition-all duration-500 group-hover:translate-x-0 group-hover:opacity-100 md:block`}
              />
            </motion.a>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

export default Works;
