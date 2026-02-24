import { WorkSection111 } from "@/components/WorkSection111";
import { StatsStrip111 } from "@/components/StatsStrip111";
import { About111 } from "@/components/About111";
import { Contact111 } from "@/components/Contact111";
import { ScrollReveal111 } from "@/components/ScrollReveal111";

export const metadata = {
  title: "Basement — Editing & Post-Production",
  description: "Editing and post-production. Work that moves.",
};

export default function HomePage() {
  return (
    <>
      <ScrollReveal111 />
      <WorkSection111 />
      <StatsStrip111 />
      <About111 />
      <Contact111 />
    </>
  );
}
