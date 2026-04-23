import { motion } from "framer-motion";

export const IntroSplit = () => {
  return (
    <section className="container-edge py-24 md:py-32">
      <div className="grid gap-12 md:grid-cols-12">
        <div className="md:col-span-4">
          <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground sticky top-32">
            / About — 01
          </p>
        </div>
        <div className="md:col-span-8">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="display-serif text-4xl md:text-6xl leading-[1.05] text-balance"
          >
            CS student by day, shipping{" "}
            <span className="italic font-light text-primary">production React</span> at Infosys, and grinding{" "}
            <span className="italic font-light text-primary">700+ DSA problems</span> on the side — chasing the seam
            between clean engineering and great UI.
          </motion.h2>

          <div className="mt-12 grid gap-8 sm:grid-cols-3">
            {[
              { k: "700+", v: "DSA problems solved" },
              { k: "8.45", v: "CGPA · Galgotias Univ." },
              { k: "4★",   v: "HackerRank rating" },
            ].map((s) => (
              <div key={s.k} className="rounded-2xl border border-border bg-card/40 p-6 backdrop-blur">
                <p className="display-serif text-5xl text-primary">{s.k}</p>
                <p className="mono mt-2 text-xs uppercase tracking-[0.2em] text-muted-foreground">{s.v}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
