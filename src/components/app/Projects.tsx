import BlurFade from "../ui/blur-fade";

type ProjectData = {
  title: string;
  description: string;
  problem: string;
  cover: string;
  link?: string;
  code?: string;
  nocode: boolean;
  noview: boolean;
  tecnologies: string[];
  status: "live" | "development" | "internal";
};

const projects: ProjectData[] = [
  {
    title: "Angofuel",
    description:
      "Plataforma de geolocalização de postos de combustível em Angola, com visualização em mapa interativo e dados em tempo real sobre disponibilidade de combustível.",
    problem:
      "Resolveu o problema crítico de filas e escassez de combustível, permitindo que condutores encontrassem postos abastecidos próximos antes de se deslocar.",
    cover: "/project/angofuel.png",
    link: "#",
    code: "#",
    nocode: false,
    noview: false,
    tecnologies: ["Laravel", "Bootstrap", "MySQL", "Google Maps API"],
    status: "live",
  },
  {
    title: "Assistente Hospitalar",
    description:
      "Plataforma de consultas médicas online que conecta pacientes a profissionais de saúde, com agendamento, histórico clínico e gestão de consultas.",
    problem:
      "Reduziu a barreira de acesso a cuidados de saúde, permitindo marcação de consultas sem deslocação presencial e com registo digital do historial do paciente.",
    cover: "/project/assistente-hospitalar.jpg",
    link: "#",
    code: "#",
    nocode: false,
    noview: false,
    tecnologies: ["Laravel", "Bootstrap", "MySQL"],
    status: "live",
  },
  {
    title: "School Management",
    description:
      "Sistema de gestão escolar completo (SGE) que cobre matrículas, gestão de turmas, lançamento de notas, relatórios académicos e comunicação escola-família.",
    problem:
      "Digitalizou processos administrativos de instituições de ensino que operavam em papel, reduzindo o tempo de processamento de matrículas e emissão de relatórios.",
    cover: "/project/schoolmanagement.png",
    link: "#",
    code: "#",
    nocode: false,
    noview: false,
    tecnologies: ["Laravel", "Bootstrap", "MySQL"],
    status: "live",
  },
  {
    title: "Gateway Matrix API",
    description:
      "API de streaming broadcast desenvolvida com Python/FastAPI e PostgreSQL, com suporte a ingestão de streams em tempo real, autenticação JWT e arquitetura orientada a eventos.",
    problem:
      "Criou uma infraestrutura de backend escalável para transmissão de conteúdo broadcast, com monitorização de fontes e processamento assíncrono de streams.",
    cover: "/project/Infosi.png",
    code: "https://github.com/eliudefrancisco14/gateway-matrix-api",
    nocode: false,
    noview: true,
    tecnologies: ["Python", "FastAPI", "PostgreSQL", "JWT", "Docker"],
    status: "development",
  },
  {
    title: "SnapRead",
    description:
      "Aplicação web de extração de texto a partir de imagens (OCR), com interface moderna em Next.js e API Python dedicada para processamento de imagens.",
    problem:
      "Simplificou a digitalização de documentos físicos, permitindo extrair e copiar texto de fotografias ou scans sem ferramentas complexas.",
    cover: "/project/Socia.jpg",
    code: "https://github.com/eliudefrancisco14/snapread-api",
    nocode: false,
    noview: true,
    tecnologies: ["Next.js", "Python", "TypeScript", "OCR"],
    status: "development",
  },
];

const statusLabel: Record<ProjectData["status"], { label: string; className: string }> = {
  live: {
    label: "Live",
    className: "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400",
  },
  development: {
    label: "Em Desenvolvimento",
    className: "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400",
  },
  internal: {
    label: "Interno",
    className: "bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400",
  },
};

const Projects = () => (
  <div className="flex flex-col gap-4">
    <BlurFade delay={0.25} inView>
      <h1 className="text-2xl font-bold mt-2">Projectos</h1>
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-1">
        Soluções desenvolvidas para clientes e projectos pessoais, do conceito ao deploy.
      </p>
    </BlurFade>
    <BlurFade delay={0.25 * 1} inView>
      <div className="flex flex-col gap-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="flex flex-col sm:flex-row rounded-lg border border-neutral-200 dark:border-neutral-800 bg-white/30 dark:bg-black/30 backdrop-blur-md overflow-hidden"
          >
            <div className="sm:w-36 w-full h-36 sm:h-auto shrink-0">
              <img
                className="w-full h-full object-cover"
                src={project.cover}
                alt={project.title}
              />
            </div>
            <div className="flex flex-col gap-2 p-4 flex-1">
              <div className="flex items-center gap-2 flex-wrap">
                <h5 className="font-bold text-gray-900 dark:text-white">
                  {project.title}
                </h5>
                <span
                  className={`text-xs px-2 py-0.5 rounded-full font-medium ${statusLabel[project.status].className}`}
                >
                  {statusLabel[project.status].label}
                </span>
              </div>
              <p className="text-sm text-gray-700 dark:text-gray-300">
                {project.description}
              </p>
              <p className="text-xs text-neutral-500 dark:text-neutral-400 italic">
                <span className="font-semibold not-italic text-neutral-600 dark:text-neutral-300">
                  Problema resolvido:{" "}
                </span>
                {project.problem}
              </p>
              <div className="flex flex-wrap gap-1 mt-1">
                {project.tecnologies.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2 py-0.5 rounded-md text-xs bg-gray-700 text-white dark:bg-neutral-700"
                  >
                    {skill}
                  </span>
                ))}
              </div>
              <div className="flex gap-3 mt-1">
                {!project.noview && project.link && project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-blue-600 dark:text-blue-400 hover:underline"
                  >
                    Ver projecto →
                  </a>
                )}
                {!project.nocode && project.code && project.code !== "#" && (
                  <a
                    href={project.code}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-neutral-600 dark:text-neutral-400 hover:underline"
                  >
                    Ver código →
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </BlurFade>
  </div>
);

export default Projects;
