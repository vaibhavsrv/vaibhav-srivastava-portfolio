import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { SITE } from "@/lib/site-data";

export const Hero = () => {
  return (
    <section className="relative">
      <div className="container-edge relative pt-10 pb-24 md:pt-16 md:pb-32">
        {/* status bar */}
        <div className="flex flex-wrap items-center justify-between gap-4 mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
          <span className="flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-primary animate-pulse-glow" />
            Available for work — Q3 2025
          </span>
          <span>{SITE.location}</span>
        </div>

        {/* main display */}
        <div className="relative mt-16 md:mt-24">
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="display-serif text-[18vw] md:text-[15vw] lg:text-[13rem]"
          >
            Frontend
            <span className="inline-block mx-4 align-middle">
              <span className="inline-block h-[0.7em] w-[0.7em] rounded-full bg-gradient-neon shadow-neon" />
            </span>
            <br />
            <span className="italic font-light">&amp; SDE</span>
            <span className="text-primary">.</span>
          </motion.h1>

          {/* meta row */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="mt-12 grid gap-10 md:grid-cols-12"
          >
            <div className="md:col-span-4">
              <p className="mono text-xs uppercase tracking-[0.25em] text-primary">● {SITE.name}</p>
              <p className="mt-4 text-lg text-muted-foreground text-balance">{SITE.tagline}</p>
            </div>
            <div className="md:col-span-5 md:col-start-8 flex items-end justify-end gap-4">
              <Link
                to="/works"
                className="group inline-flex items-center gap-3 rounded-full bg-primary px-7 py-4 mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-neon"
              >
                See Works
                <span className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
              <a
                href="#"
                className="inline-flex items-center gap-3 rounded-full border border-border px-7 py-4 mono text-xs uppercase tracking-[0.2em] hover:border-primary hover:text-primary"
              >
                Resume ↗
              </a>
            </div>
          </motion.div>
        </div>

        {/* floating orb */}
        <div
          className="pointer-events-none absolute -right-20 top-32 h-72 w-72 rounded-full opacity-40 blur-3xl"
          style={{ background: "radial-gradient(circle, hsl(var(--primary)/0.6), transparent 70%)" }}
        />
      </div>
    </section>
  );
};
