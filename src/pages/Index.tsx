import Navbar from "@/components/portfolio/Navbar";
import HeroSection from "@/components/portfolio/HeroSection";
import AboutSection from "@/components/portfolio/AboutSection";
import ProjectsSection from "@/components/portfolio/ProjectsSection";
import SkillsSection from "@/components/portfolio/SkillsSection";
import ContactSection from "@/components/portfolio/ContactSection";
import Footer from "@/components/portfolio/Footer";
import BlackHoleBackground from "@/components/portfolio/BlackHoleBackground";
import { motion, useScroll, useTransform, useReducedMotion } from "framer-motion";
import { useIsMobile } from "@/hooks/use-mobile";

const Index = () => {
  const { scrollYProgress } = useScroll();
  const isMobile = useIsMobile();
  const reduce = useReducedMotion();
  const x = useTransform(scrollYProgress, [0, 1], isMobile ? ["-2%", "2%"] : ["-10%", "10%"]);
  const scale = useTransform(scrollYProgress, [0, 1], isMobile ? [0.95, 1.05] : [0.9, 1.15]);

  return (
    <div className="min-h-screen relative">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-[60] focus:px-4 focus:py-2 focus:rounded-xl focus:bg-primary focus:text-primary-foreground"
      >
        Saltar para o conteúdo
      </a>
      {/* Sem efeito de parallax quando o utilizador pede movimento reduzido */}
      <motion.div style={reduce ? undefined : { x, scale }} className="fixed inset-0 z-0">
        <BlackHoleBackground />
      </motion.div>
      <div className="relative z-10">
        <Navbar />
        <main id="main">
          <HeroSection />
          <div className="section-divider" />
          <AboutSection />
          <div className="section-divider" />
          <ProjectsSection />
          <div className="section-divider" />
          <SkillsSection />
          <div className="section-divider" />
          <ContactSection />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Index;
