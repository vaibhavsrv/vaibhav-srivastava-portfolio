import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV, SITE } from "@/lib/site-data";
import { Menu, X } from "lucide-react";

export const SiteNav = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => { setOpen(false); }, [pathname]);

  return (
    <>
      <header
        className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
          scrolled ? "py-3 backdrop-blur-xl bg-background/60 border-b border-border" : "py-6"
        }`}
      >
        <div className="container-edge flex items-center justify-between">
          <Link to="/" className="group flex items-center gap-3" aria-label="Home">
            <span className="relative grid h-9 w-9 place-items-center rounded-full bg-primary text-primary-foreground font-display text-lg font-semibold">
              {SITE.shortName.charAt(0)}
              <span className="absolute inset-0 rounded-full bg-primary animate-pulse-glow opacity-50 blur-md" />
            </span>
            <span className="mono text-xs uppercase tracking-[0.25em] text-muted-foreground">
              ©{new Date().getFullYear()} / {SITE.shortName}
            </span>
          </Link>

          <nav className="hidden md:flex items-center gap-1 rounded-full border border-border bg-card/60 px-2 py-2 backdrop-blur-xl">
            {NAV.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === "/"}
                className={({ isActive }) =>
                  `relative rounded-full px-5 py-2 mono text-xs uppercase tracking-[0.2em] transition-colors ${
                    isActive ? "text-primary-foreground" : "text-foreground hover:text-primary"
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-0 rounded-full bg-primary"
                        transition={{ type: "spring", stiffness: 380, damping: 30 }}
                      />
                    )}
                    <span className="relative">{item.label}</span>
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          <Link
            to="/contact"
            className="hidden md:inline-flex items-center gap-2 rounded-full border border-primary/50 px-5 py-2 mono text-xs uppercase tracking-[0.2em] text-primary transition-all hover:bg-primary hover:text-primary-foreground hover:shadow-neon"
          >
            Let's Talk
            <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse-glow" />
          </Link>

          <button
            onClick={() => setOpen((v) => !v)}
            className="md:hidden grid h-10 w-10 place-items-center rounded-full border border-border bg-card"
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-x-0 top-[72px] z-40 md:hidden"
          >
            <div className="container-edge">
              <div className="rounded-3xl border border-border bg-card/95 p-6 backdrop-blur-xl shadow-card">
                {NAV.map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    end={item.to === "/"}
                    className={({ isActive }) =>
                      `flex items-baseline justify-between border-b border-border py-4 last:border-0 ${
                        isActive ? "text-primary" : "text-foreground"
                      }`
                    }
                  >
                    <span className="font-display text-3xl">{item.label}</span>
                    <span className="mono text-xs text-muted-foreground">{item.index}</span>
                  </NavLink>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
