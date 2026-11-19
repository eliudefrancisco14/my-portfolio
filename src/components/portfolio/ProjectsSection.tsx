import { projects, type Project } from "@/data/portfolio";
import { ArrowUpRight, ScanText } from "lucide-react";
import FadeIn from "./FadeIn";

const ProjectCover = ({ project, featured }: { project: Project; featured: boolean }) => {
  if (project.image) {
    return (
      <img
        src={project.image}
        alt={project.imageAlt}
        loading="lazy"
        decoding="async"
        width={1280}
        height={720}
        className="w-full aspect-video object-cover object-top rounded-xl border border-border/40 bg-muted"
      />
    );
  }
  return (
    <div
      role="img"
      aria-label={project.imageAlt}
      className="relative w-full aspect-video rounded-xl border border-border/40 overflow-hidden bg-gradient-to-br from-secondary via-card to-muted flex items-center justify-center"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,hsl(var(--foreground)/0.08),transparent_60%)]" />
      <div className="relative flex flex-col items-center gap-3 text-foreground/70">
        <ScanText className={featured ? "w-16 h-16" : "w-12 h-12"} strokeWidth={1.25} aria-hidden="true" />
        <span className="font-display font-semibold tracking-tight text-[20px] text-foreground/80">
          {project.title.split(" — ")[0]}
        </span>
      </div>
    </div>
  );
};

const linkClass =
  "inline-flex items-center gap-1 text-[15px] font-medium text-foreground hover:underline underline-offset-4 rounded";

const ProjectCard = ({ project, featured }: { project: Project; featured: boolean }) => (
  <article
    className={`h-full flex flex-col gap-5 p-5 rounded-2xl border border-border/60 bg-card/40 backdrop-blur-sm hover:border-foreground/20 hover:shadow-[var(--shadow-card)] transition-all duration-300 ${
      featured ? "md:p-6" : ""
    }`}
  >
    <ProjectCover project={project} featured={featured} />
    <div className="flex flex-col flex-1">
      <h3 className={`font-display font-semibold text-foreground mb-2 ${featured ? "text-[22px]" : "text-[17px]"}`}>
        {project.title}
      </h3>
      <p className="text-[15px] text-muted-foreground leading-relaxed mb-4">{project.description}</p>
      <dl className="space-y-2 mb-4 text-[15px] leading-relaxed">
        <div>
          <dt className="inline font-medium text-foreground">Problema resolvido: </dt>
          <dd className="inline text-muted-foreground">{project.problem}</dd>
        </div>
        <div>
          <dt className="inline font-medium text-foreground">O meu papel: </dt>
          <dd className="inline text-muted-foreground">{project.role}</dd>
        </div>
      </dl>
      <ul className="flex flex-wrap gap-2 mb-5" aria-label="Tecnologias">
        {project.technologies.map((tech) => (
          <li
            key={tech}
            className="text-[13px] px-3 py-1 rounded-full border border-border/60 bg-secondary/50 text-secondary-foreground"
          >
            {tech}
          </li>
        ))}
      </ul>
      {(project.link || project.code) && (
        <div className="mt-auto flex flex-wrap gap-5">
          {project.link && (
            <a href={project.link} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Ver projeto <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          )}
          {project.code && (
            <a href={project.code} target="_blank" rel="noopener noreferrer" className={linkClass}>
              Ver código <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
            </a>
          )}
        </div>
      )}
    </div>
  </article>
);

const ProjectsSection = () => {
  const featured = projects.filter((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 px-6" aria-label="Projetos">
      <div className="max-w-4xl mx-auto">
        <FadeIn>
          <h2 className="text-[28px] font-display font-semibold text-foreground mb-8">Projetos</h2>
        </FadeIn>

        <div className="space-y-6 mb-6">
          {featured.map((project, i) => (
            <FadeIn key={project.title} delay={0.05 + i * 0.05}>
              <ProjectCard project={project} featured />
            </FadeIn>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {others.map((project, i) => (
            <FadeIn key={project.title} delay={0.05 + i * 0.05} className="h-full">
              <ProjectCard project={project} featured={false} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
