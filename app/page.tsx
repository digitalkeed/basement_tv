import { NavStudio } from "@/components/NavStudio";
import { HeroStudio } from "@/components/HeroStudio";
import { MarqueeStudio } from "@/components/MarqueeStudio";
import { WorkStudio } from "@/components/WorkStudio";
import { ServicesStudio } from "@/components/ServicesStudio";
import { TeamStudio } from "@/components/TeamStudio";
import { AboutStudio } from "@/components/AboutStudio";
import { ContactStudio } from "@/components/ContactStudio";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-[#050505] text-[#fafafa] selection:bg-[#e5ff00] selection:text-black font-sans overflow-x-hidden max-w-[100vw] box-border">
      <NavStudio />
      <main id="main" className="w-full max-w-[100vw] overflow-x-hidden box-border">
        <HeroStudio />
        <MarqueeStudio />
        <WorkStudio />
        <ServicesStudio />
        <TeamStudio />
        <AboutStudio />
        <ContactStudio />
      </main>
    </div>
  );
}
