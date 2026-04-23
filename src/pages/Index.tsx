import { PageShell } from "@/components/PageShell";
import { Hero } from "@/components/Hero";
import { Marquee } from "@/components/Marquee";
import { FeaturedWorks } from "@/components/FeaturedWorks";
import { IntroSplit } from "@/components/IntroSplit";
import { useEffect } from "react";
import { SITE } from "@/lib/site-data";

const Index = () => {
  useEffect(() => {
    document.title = `${SITE.name} — ${SITE.role}`;
  }, []);
  return (
    <PageShell>
      <Hero />
      <Marquee />
      <FeaturedWorks limit={4} />
      <IntroSplit />
    </PageShell>
  );
};

export default Index;
