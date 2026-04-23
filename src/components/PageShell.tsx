import { motion } from "framer-motion";
import { ReactNode } from "react";
import { SiteNav } from "./SiteNav";
import { SiteFooter } from "./SiteFooter";
import { CustomCursor } from "./CustomCursor";

export const PageShell = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <CustomCursor />
      <SiteNav />
      <motion.main
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -24 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className="relative z-10 pt-28"
      >
        {children}
      </motion.main>
      <SiteFooter />
    </div>
  );
};
