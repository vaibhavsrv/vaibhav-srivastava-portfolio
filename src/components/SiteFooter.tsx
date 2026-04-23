import { Link } from "react-router-dom";
import { SITE, NAV } from "@/lib/site-data";

export const SiteFooter = () => {
  return (
    <footer className="relative mt-24 border-t border-border">
      <div className="container-edge py-16">
        <div className="grid gap-12 md:grid-cols-12">
          <div className="md:col-span-6">
            <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              · Available for select projects
            </p>
            <h2 className="display-serif mt-6 text-5xl md:text-7xl">
              Let's build
              <br />
              <span className="italic font-light text-primary">something</span> good.
            </h2>
            <Link
              to="/contact"
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-primary px-6 py-3 mono text-xs uppercase tracking-[0.2em] text-primary-foreground transition-all hover:shadow-neon"
            >
              Start a project →
            </Link>
          </div>

          <div className="md:col-span-3">
            <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Sitemap</p>
            <ul className="space-y-2">
              {NAV.map((n) => (
                <li key={n.to}>
                  <Link to={n.to} className="link-underline text-lg">{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground mb-4">Elsewhere</p>
            <ul className="space-y-2">
              {SITE.socials.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noreferrer" className="link-underline text-lg">
                    {s.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 flex flex-col gap-3 border-t border-border pt-6 md:flex-row md:items-center md:justify-between">
          <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            © {new Date().getFullYear()} {SITE.name} · Crafted with intention
          </p>
          <p className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
            {SITE.location}
          </p>
        </div>
      </div>

      <div className="overflow-hidden border-t border-border">
        <div className="marquee-track py-8">
          {Array.from({ length: 2 }).map((_, k) => (
            <div key={k} className="flex shrink-0 items-center gap-10 pr-10">
              {Array.from({ length: 6 }).map((__, i) => (
                <span key={i} className="display-serif text-[18vw] leading-none text-foreground/5 whitespace-nowrap">
                  {SITE.name.toUpperCase()} ✦
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
};
