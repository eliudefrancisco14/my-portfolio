import { skills } from "@/data/portfolio";
import { motion, useReducedMotion } from "framer-motion";
import FadeIn from "./FadeIn";
import {
  SiPython,
  SiJavascript,
  SiTypescript,
  SiPhp,
  SiReact,
  SiNodedotjs,
  SiLaravel,
  SiNextdotjs,
  SiDocker,
  SiGit,
  SiPostman,
  SiPandas,
  SiNumpy,
  SiFastapi,
  SiDotnet,
  SiSupabase,
  SiPostgresql,
  SiOdoo,
  SiVuedotjs,
  SiMysql,
} from "react-icons/si";
import type { IconType } from "react-icons";

// Só logótipos oficiais. Itens sem ícone oficial (C#, SQL, Power BI, SQL Server)
// mostram um distintivo neutro com iniciais em vez de um logótipo errado.
const iconMap: Record<string, IconType> = {
  Python: SiPython,
  JavaScript: SiJavascript,
  TypeScript: SiTypescript,
  PHP: SiPhp,
  MySQL: SiMysql,
  React: SiReact,
  "Node.js": SiNodedotjs,
  Laravel: SiLaravel,
  "Next.js": SiNextdotjs,
  "Vue.js": SiVuedotjs,
  FastAPI: SiFastapi,
  ".NET": SiDotnet,
  Docker: SiDocker,
  Git: SiGit,
  Postman: SiPostman,
  Pandas: SiPandas,
  NumPy: SiNumpy,
  Supabase: SiSupabase,
  PostgreSQL: SiPostgresql,
  Odoo: SiOdoo,
};

const initialsFor = (item: string) => {
  const words = item.replace(/[^A-Za-z0-9#+ ]/g, "").split(" ").filter(Boolean);
  if (words.length > 1) return words.map((w) => w[0]).join("").slice(0, 3).toUpperCase();
  return item.slice(0, 3);
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.06, delayChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 16 },
  visible: { opacity: 1, y: 0 },
};

const SkillsSection = () => {
  const reduce = useReducedMotion();
  return (
    <section id="skills" className="py-24 px-6" aria-label="Competências">
      <div className="max-w-3xl mx-auto">
        <FadeIn>
          <h2 className="text-[28px] font-display font-semibold text-foreground mb-10">Competências</h2>
        </FadeIn>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-10">
          {skills.map((group, i) => (
            <FadeIn key={group.category} delay={0.1 + i * 0.05}>
              <div>
                <h3 className="text-[13px] font-medium tracking-widest uppercase text-muted-foreground mb-5">
                  {group.category}
                </h3>
                <motion.ul
                  className="grid grid-cols-3 gap-4"
                  variants={containerVariants}
                  initial={reduce ? false : "hidden"}
                  whileInView="visible"
                  viewport={{ once: true }}
                >
                  {group.items.map((item) => {
                    const Icon = iconMap[item];
                    return (
                      <motion.li
                        key={item}
                        variants={itemVariants}
                        whileHover={reduce ? undefined : { scale: 1.08, y: -4 }}
                        transition={{ type: "spring", stiffness: 400, damping: 15 }}
                        className="flex flex-col items-center gap-2 p-4 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm cursor-default"
                      >
                        {Icon ? (
                          <Icon className="w-7 h-7 text-foreground/70" aria-hidden="true" />
                        ) : (
                          <span
                            className="w-7 h-7 rounded-lg border border-border bg-secondary flex items-center justify-center text-[10px] font-bold text-muted-foreground"
                            aria-hidden="true"
                          >
                            {initialsFor(item)}
                          </span>
                        )}
                        <span className="text-[13px] text-muted-foreground text-center leading-tight">{item}</span>
                      </motion.li>
                    );
                  })}
                </motion.ul>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
