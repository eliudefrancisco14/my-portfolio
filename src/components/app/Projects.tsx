import Link from "next/link";
import { Button } from "../ui/button";
import BlurFade from "../ui/blur-fade";

type ProjectData = {
  title: string;
  description: string;
  cover: string;
  link: string;
  code?: string;
  nocode: boolean;
  noview: boolean;
  tecnologies: string[];
};

const projects: ProjectData[] = [
  {
    title: "Angofuel",
    description: "Sistemas de Geolocalização de Postos de Combustíveis.",
    cover: "/project/angofuel.png",
    link: "#",
    code: "#",
    nocode: false,
    noview: false,
    tecnologies: ["Laravel", "Bootstrap", "MySQL", "Google Maps"],
  },
  {
    title: "Assistente Hospitalar",
    description:
      "O Assistente Hospitalar é uma plataforma de consulta online.",
    cover: "/project/assistente-hospitalar.jpg",
    link: "#",
    code: "#",
    nocode: false,
    noview: false,
    tecnologies: ["Laravel", "Bootstrap", "MySQL"],
  },
  {
    title: "School Management",
    description:
      "O SGE é um sistema de gestão escolar.",
    cover: "/project/schoolmanagement.png",
    link: "#",
    code: "#",
    nocode: false,
    noview: false,
    tecnologies: ["Laravel", "Bootstrap", "MySQL"],
  },
];

const Projects = () => (
  <div className="flex flex-col gap-4">
    <BlurFade delay={0.25} inView>
      <h1 className="text-2xl font-bold mt-2">Projectos</h1>
    </BlurFade>
    <BlurFade delay={0.25 * 1} inView>
      <div className="flex flex-col gap-1">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-row rounded-md border border-neutral-200 dark:border-neutral-800 bg-white/30 dark:bg-black/30 backdrop-blur-md items-center mb-2"
          >
            <div>
              <img
                className="rounded-l-lg w-32 h-32 object-cover"
                src={project.cover}
                alt=""
              />
            </div>
            <div className="flex flex-col gap-2 p-4 text-justify flex-1 backdrop-blur-sm">
              <h5 className="font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
              <p className="font-normal text-gray-700 dark:text-gray-400">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 p-2">
                {project.tecnologies.map((skill, idx) => (
                  <div
                    key={idx}
                    className="flex border border-none rounded-md px-2 text-sm bg-gray-600 text-white"
                  >
                    {skill}
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </BlurFade>
  </div>
);

export default Projects;
