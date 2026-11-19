import { Palette, BookOpen, BarChart3, Music, Brain, Globe } from "lucide-react";
import { personalInfo, education, interests, experiences } from "@/data/portfolio";
import FadeIn from "./FadeIn";
import { motion, useReducedMotion } from "framer-motion";

const iconMap: Record<string, React.ReactNode> = {
  palette: <Palette className="w-4 h-4" aria-hidden="true" />,
  book: <BookOpen className="w-4 h-4" aria-hidden="true" />,
  chart: <BarChart3 className="w-4 h-4" aria-hidden="true" />,
  music: <Music className="w-4 h-4" aria-hidden="true" />,
  brain: <Brain className="w-4 h-4" aria-hidden="true" />,
  globe: <Globe className="w-4 h-4" aria-hidden="true" />,
};

const AboutSection = () => {
  const reduce = useReducedMotion();
  return (
    <section id="about" className="py-24 px-6" aria-label="Sobre mim">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-[28px] font-display font-semibold text-foreground mb-8">Sobre mim</h2>
        </FadeIn>

        <FadeIn delay={0.1}>
          <p className="text-[17px] text-muted-foreground leading-relaxed mb-12">{personalInfo.aboutExtended}</p>
        </FadeIn>

        <FadeIn delay={0.15}>
          <h3 className="text-[15px] font-medium tracking-widest uppercase text-muted-foreground mb-8">Experiência</h3>
        </FadeIn>

        <div className="relative mb-12">
          <div className="absolute left-[7px] top-2 bottom-2 w-px bg-border" aria-hidden="true" />

          <ol className="space-y-8">
            {experiences.map((exp, i) => (
              <motion.li
                key={exp.company}
                initial={reduce ? false : { opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.1, ease: [0.25, 0.1, 0.25, 1] }}
                className="relative pl-8"
              >
                <div
                  className="absolute left-0 top-[6px] w-[15px] h-[15px] rounded-full border-2 border-foreground/30 bg-background z-10"
                  aria-hidden="true"
                />

                <div className="rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-5">
                  <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between mb-1 gap-1">
                    <h4 className="font-display font-medium text-[17px] text-foreground">{exp.role}</h4>
                    <span className="text-[13px] text-muted-foreground whitespace-nowrap sm:ml-4 font-medium">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-[15px] text-muted-foreground mb-2">{exp.company}</p>
                  <p className="text-[15px] text-muted-foreground/80 leading-relaxed">{exp.description}</p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        <FadeIn delay={0.3}>
          <h3 className="text-[15px] font-medium tracking-widest uppercase text-muted-foreground mb-6">Formação</h3>
        </FadeIn>
        <div className="space-y-4 mb-12">
          {education.map((edu) => (
            <FadeIn key={edu.school} delay={0.35}>
              <div className="flex items-baseline justify-between rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm p-5">
                <div>
                  <h4 className="font-display font-medium text-[17px] text-foreground">{edu.degree}</h4>
                  <p className="text-[15px] text-muted-foreground">{edu.school}</p>
                </div>
                <span className="text-[13px] text-muted-foreground whitespace-nowrap ml-4 font-medium">{edu.period}</span>
              </div>
            </FadeIn>
          ))}
        </div>

        <FadeIn delay={0.4}>
          <h3 className="text-[15px] font-medium tracking-widest uppercase text-muted-foreground mb-6">Interesses</h3>
        </FadeIn>
        <FadeIn delay={0.45}>
          <ul className="flex flex-wrap gap-3">
            {interests.map((interest) => (
              <li
                key={interest.label}
                className="flex items-center gap-2 px-4 py-2.5 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm text-foreground text-[15px]"
              >
                {iconMap[interest.icon]}
                <span>{interest.label}</span>
              </li>
            ))}
          </ul>
        </FadeIn>
      </div>
    </section>
  );
};

export default AboutSection;
