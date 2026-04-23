import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { PROJECTS } from "@/lib/site-data";

export const FeaturedWorks = ({ limit = 4 }: { limit?: number }) => {
  const items = PROJECTS.slice(0, limit);
  return (
    <section className="container-edge py-24 md:py-32">
      <div className="mb-16 flex flex-wrap items-end justify-between gap-6">
        <div>
          <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">/ Selected Projects</p>
          <h2 className="display-serif mt-4 text-6xl md:text-8xl">
            Things I've <br />
            <span className="italic font-light text-primary">built</span> recently.
          </h2>
        </div>
        <Link to="/works" className="link-underline mono text-xs uppercase tracking-[0.25em]">
          View all →
        </Link>
      </div>

      <div className="grid gap-8 md:grid-cols-2">
        {items.map((p, i) => (
          <motion.div
            key={p.slug}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
            className={`group relative overflow-hidden rounded-3xl border border-border p-1 hover-lift ${
              i % 2 ? "md:translate-y-12" : ""
            }`}
          >
            <div className={`relative aspect-[4/5] overflow-hidden rounded-[20px] bg-gradient-to-br ${p.accent}`}>
              <div className="absolute inset-0 bg-card/40 backdrop-blur-sm" />
              {/* big project number */}
              <span className="absolute right-6 top-6 mono text-xs text-foreground/60">
                0{i + 1} / {String(items.length).padStart(2, "0")}
              </span>
              <span className="absolute bottom-6 left-6 mono text-xs uppercase tracking-[0.2em] text-foreground/70">
                {p.year} · {p.category}
              </span>
              {/* hover overlay */}
              <div className="absolute inset-0 grid place-items-center opacity-0 transition-opacity duration-500 group-hover:opacity-100">
                <div className="grid h-24 w-24 place-items-center rounded-full bg-primary text-primary-foreground shadow-neon mono text-xs uppercase tracking-[0.2em]">
                  View →
                </div>
              </div>
            </div>
            <div className="flex items-end justify-between p-6">
              <div>
                <h3 className="display-serif text-3xl md:text-4xl">{p.title}</h3>
                <p className="mt-2 max-w-md text-muted-foreground">{p.summary}</p>
              </div>
              <div className="hidden md:flex flex-wrap justify-end gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="mono rounded-full border border-border px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
