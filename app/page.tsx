import { getFeaturedProjects } from "@/content/projects";
import { about } from "@/content/about";
import { site } from "@/content/site";
import { HomeHero } from "@/components/HomeHero";
import { ProofStrip } from "@/components/ProofStrip";
import { SelectedWorkSection } from "@/components/SelectedWorkSection";
import { CapabilitiesBento } from "@/components/CapabilitiesBento";
import { ProcessSection } from "@/components/ProcessSection";
import { HomeAbout } from "@/components/HomeAbout";
import { HomeContactTeaser } from "@/components/HomeContactTeaser";
import { ScrollReveal } from "@/components/ScrollReveal";
import { Section } from "@/components/Section";

export const metadata = {
  title: "Basement",
  description: "Editing and post-production. Work that moves.",
};

export default function HomePage() {
  const featured = getFeaturedProjects();
  const heroProject = featured[0] ?? null;
  return (
    <>
      <HomeHero featured={heroProject} />
      <ProofStrip />
      <ScrollReveal>
        <Section id="selected-work">
          <SelectedWorkSection projects={featured} />
        </Section>
      </ScrollReveal>
      <ScrollReveal>
        <Section>
          <CapabilitiesBento />
        </Section>
      </ScrollReveal>
      <ScrollReveal>
        <Section>
          <ProcessSection />
        </Section>
      </ScrollReveal>
      <ScrollReveal>
        <HomeAbout paragraph={about.paragraph} valueCards={about.valueCards} />
      </ScrollReveal>
      <ScrollReveal>
        <HomeContactTeaser locations={site.locations} emailHref={site.email.href} />
      </ScrollReveal>
    </>
  );
}
