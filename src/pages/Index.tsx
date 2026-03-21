import HeroSection from "@/components/HeroSection";
import EvidenceSection from "@/components/EvidenceSection";
import MusicSection from "@/components/MusicSection";
import MirrorSection from "@/components/MirrorSection";
import AskSection from "@/components/AskSection";
import FloatingElements from "@/components/FloatingElements";

const Index = () => {
  return (
    <main className="relative min-h-screen">
      <FloatingElements />
      <HeroSection />
      <EvidenceSection />
      <MusicSection />
      <MirrorSection />
      <AskSection />
    </main>
  );
};

export default Index;
