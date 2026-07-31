import { useState } from "react";
import LoadingScreen from "@/components/LoadingScreen";
import SidebarNav from "@/components/SidebarNav";
import HeroSection from "@/components/HeroSection";
import JourneySection from "@/components/JourneySection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import CertsAwardsSection from "@/components/CertsAwardsSection";
import FooterContact from "@/components/FooterContact";

const Index = () => {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      <div className={`min-h-screen bg-background ${loaded ? "" : "overflow-hidden h-screen"}`}>
        <SidebarNav />
        <main>
          <HeroSection />
          <div className="lg:ml-48">
            <JourneySection />
            <ProjectsSection />
            <SkillsSection />
            <CertsAwardsSection />
            <FooterContact />
          </div>
        </main>
      </div>
    </>
  );
};

export default Index;
