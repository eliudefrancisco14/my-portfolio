import { Github, Linkedin, Instagram, ArrowDown, ArrowRight } from "lucide-react";
import { personalInfo } from "@/data/portfolio";
import { AnimatedText } from "@/components/ui/animated-text";
import FadeIn from "./FadeIn";
import { motion } from "framer-motion";

const scrollToId = (id: string) => {
  document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });
};

const HeroSection = () => (
  <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-14" aria-label="Início">
    <div className="max-w-2xl mx-auto text-center">
      <FadeIn delay={0.1}>
        <p className="text-[15px] font-medium tracking-widest uppercase text-muted-foreground mb-4">
          {personalInfo.tagline}
        </p>
      </FadeIn>

      <h1 className="text-[34px] sm:text-[44px] md:text-[56px] font-display font-bold text-foreground leading-tight mb-3">
        <AnimatedText text={personalInfo.name} delay={0.2} />
      </h1>

      <FadeIn delay={0.25}>
        <p className="text-[17px] sm:text-[19px] font-display font-medium text-foreground/80 mb-6">
          {personalInfo.role}
        </p>
      </FadeIn>

      <FadeIn delay={0.3}>
        <p className="text-[17px] text-muted-foreground leading-relaxed max-w-lg mx-auto mb-8">
          {personalInfo.bio}
        </p>
      </FadeIn>

      <FadeIn delay={0.35}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3 mb-8">
          <motion.a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              scrollToId("#contact");
            }}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl bg-primary text-primary-foreground font-medium text-[15px] hover:opacity-90 transition-opacity"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            Vamos conversar
            <ArrowRight className="w-4 h-4" aria-hidden="true" />
          </motion.a>
          <motion.a
            href={personalInfo.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm text-foreground font-medium text-[15px] hover:border-foreground/30 transition-colors"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Linkedin className="w-4 h-4" aria-hidden="true" />
            Falar no LinkedIn
          </motion.a>
        </div>
      </FadeIn>

      <FadeIn delay={0.4}>
        <div className="flex items-center justify-center gap-4 mb-12">
          {[
            { href: personalInfo.social.github, icon: Github, label: "GitHub" },
            { href: personalInfo.social.linkedin, icon: Linkedin, label: "LinkedIn" },
            { href: personalInfo.social.instagram, icon: Instagram, label: "Instagram" },
          ].map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm text-muted-foreground hover:text-foreground transition-colors duration-200"
              aria-label={label}
              whileHover={{ scale: 1.15 }}
              whileTap={{ scale: 0.95 }}
            >
              <Icon className="w-5 h-5" aria-hidden="true" />
            </motion.a>
          ))}
        </div>
      </FadeIn>

      <FadeIn delay={0.5}>
        <button
          type="button"
          onClick={() => scrollToId("#about")}
          className="text-muted-foreground hover:text-foreground transition-colors duration-200 rounded-full p-1"
          aria-label="Ir para a secção Sobre"
        >
          <ArrowDown className="w-5 h-5 motion-safe:animate-bounce" aria-hidden="true" />
        </button>
      </FadeIn>
    </div>
  </section>
);

export default HeroSection;
