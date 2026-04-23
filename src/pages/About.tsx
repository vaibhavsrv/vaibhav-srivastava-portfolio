import { useEffect } from "react";
import { motion } from "framer-motion";
import { PageShell } from "@/components/PageShell";
import { PageHeader } from "@/components/PageHeader";
import { EXPERIENCE, SERVICES, SITE, SKILLS, TESTIMONIALS } from "@/lib/site-data";

const About = () => {
  useEffect(() => { document.title = `About — ${SITE.name}`; }, []);
  return (
    <PageShell>
      <PageHeader
        index="03 — About"
        title="A short"
        italicTitle="story."
        intro={`Hi — I'm ${SITE.name}, a pre-final year CS student at Galgotias University. I'm currently a Frontend Developer Intern at Infosys Springboard, and I spend the rest of my time building full-stack projects and grinding DSA.`}
      />

      {/* Bio + portrait */}
      <section className="container-edge grid gap-10 md:grid-cols-12">
        <div className="md:col-span-5">
          <div className="aspect-[4/5] overflow-hidden rounded-3xl border border-border bg-gradient-to-br from-primary/30 via-card to-accent/20 p-8">
            <div className="flex h-full flex-col justify-between">
              <p className="mono text-xs uppercase tracking-[0.25em] text-foreground/70">Currently</p>
              <div>
                <p className="display-serif text-5xl">{SITE.name}</p>
                <p className="mono mt-3 text-xs uppercase tracking-[0.2em] text-foreground/70">{SITE.role}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="md:col-span-7 space-y-6 text-lg leading-relaxed text-muted-foreground">
          <p>
            I started writing code because I wanted to ship the things in my head. Somewhere between learning React and
            normalizing my first PostgreSQL schema, it stopped feeling like coursework and started feeling like a craft.
          </p>
          <p>
            I care about <span className="text-foreground">clean components</span>,{" "}
            <span className="text-foreground">honest APIs</span>, and{" "}
            <span className="text-foreground">code that the next person can actually read</span>. At Infosys I've been
            shipping production React for KYC dashboards under Agile sprints, and on my own time I'm building full-stack
            projects like <span className="text-foreground">Cura</span> and <span className="text-foreground">AuthFlow</span>.
          </p>
          <p>
            I'm aiming for SDE / frontend roles where I can write production-grade code, sit in real code reviews, and
            grow under senior mentorship. 700+ DSA problems in — still curious, still shipping.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="container-edge mt-32">
        <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">/ Services</p>
        <h2 className="display-serif mt-4 text-5xl md:text-7xl">What I do.</h2>
        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-border md:grid-cols-2">
          {SERVICES.map((s) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group relative bg-card p-8 transition-colors hover:bg-secondary"
            >
              <div className="flex items-baseline justify-between">
                <span className="mono text-xs text-muted-foreground">{s.n}</span>
                <span className="text-primary opacity-0 transition-opacity group-hover:opacity-100">→</span>
              </div>
              <h3 className="display-serif mt-6 text-3xl md:text-4xl">{s.title}</h3>
              <p className="mt-3 text-muted-foreground">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="container-edge mt-32">
        <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">/ Stack</p>
        <h2 className="display-serif mt-4 text-5xl md:text-7xl">
          Tools <span className="italic font-light text-primary">I trust.</span>
        </h2>
        <div className="mt-10 flex flex-wrap gap-3">
          {SKILLS.map((s) => (
            <span
              key={s}
              className="rounded-full border border-border bg-card px-5 py-2.5 mono text-xs uppercase tracking-[0.2em] transition-all hover:border-primary hover:text-primary"
            >
              {s}
            </span>
          ))}
        </div>
      </section>

      {/* Experience */}
      <section className="container-edge mt-32">
        <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">/ Experience</p>
        <h2 className="display-serif mt-4 text-5xl md:text-7xl">Where I've been.</h2>
        <div className="mt-12 divide-y divide-border border-y border-border">
          {EXPERIENCE.map((e) => (
            <div key={e.role + e.company} className="grid grid-cols-12 items-baseline gap-4 py-6">
              <span className="col-span-12 md:col-span-3 mono text-xs uppercase tracking-[0.2em] text-muted-foreground">{e.year}</span>
              <span className="col-span-12 md:col-span-5 display-serif text-2xl md:text-3xl">{e.role}</span>
              <span className="col-span-8 md:col-span-3 text-muted-foreground">{e.company}</span>
              <span className="col-span-4 md:col-span-1 mono text-right text-xs text-muted-foreground">{e.place}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="container-edge mt-32">
        <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">/ Kind words</p>
        <div className="mt-10 grid gap-6 md:grid-cols-3">
          {TESTIMONIALS.map((t, i) => (
            <motion.figure
              key={t.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="rounded-3xl border border-border bg-card p-8"
            >
              <span className="display-serif text-5xl text-primary leading-none">"</span>
              <blockquote className="mt-2 text-lg leading-relaxed">{t.quote}</blockquote>
              <figcaption className="mt-6 mono text-xs uppercase tracking-[0.2em] text-muted-foreground">
                {t.name} · {t.role}
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </section>
    </PageShell>
  );
};

export default About;
