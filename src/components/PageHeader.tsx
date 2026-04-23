import { motion } from "framer-motion";
import { ReactNode } from "react";

export const PageHeader = ({
  index,
  title,
  italicTitle,
  intro,
}: {
  index: string;
  title: string;
  italicTitle?: string;
  intro?: ReactNode;
}) => (
  <section className="container-edge pt-10 pb-20 md:pt-20 md:pb-32">
    <p className="mono text-xs uppercase tracking-[0.25em] text-primary">/ {index}</p>
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
      className="display-serif mt-6 text-7xl md:text-[12rem] leading-[0.9]"
    >
      {title}
      {italicTitle && (
        <>
          <br />
          <span className="italic font-light text-primary">{italicTitle}</span>
        </>
      )}
    </motion.h1>
    {intro && (
      <p className="mt-10 max-w-2xl text-lg text-muted-foreground text-balance">{intro}</p>
    )}
  </section>
);
