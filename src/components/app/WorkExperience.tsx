interface WorkExperienceData {
  startDate: string;
  endDate: string;
  companyName: string;
  jobTitle: string;
  description: string[];
  tecnologies: string[];
}

const WorkExperienceData: WorkExperienceData[] = [
  {
    startDate: "Dezembro 2024",
    endDate: "Presente",
    companyName: "UNDERALL",
    jobTitle: "Engenheiro de Software (Data & AI)",
    description: [
      "Desenvolvimento de produtos digitais B2B e B2G com foco em inteligência de dados e automação.",
      "Orquestro o ciclo completo de desenvolvimento — do conceito ao deploy — utilizando IA (Lovable, Manus) para acelerar a entrega de soluções complexas.",
      "Implementação e customização de Odoo para clientes empresariais, atuando como parceiro de revendas.",
      "Construção de APIs robustas com Python/FastAPI e .NET, integradas a pipelines de dados com SQL Server.",
    ],
    tecnologies: ["Python", "FastAPI", "Odoo", "NextJS", ".NET", "SQLServer", "TailwindCSS", "Docker", "SQL"],
  },
  {
    startDate: "Setembro 2023",
    endDate: "Novembro 2024",
    companyName: "INOKRI",
    jobTitle: "CTO & Desenvolvedor Fullstack",
    description: [
      "Liderança técnica da empresa, definindo arquitetura e stack tecnológico dos produtos.",
      "Desenvolvimento de plataformas web completas com Vue.js e Next.js no frontend e .NET no backend.",
      "Gestão de base de dados SQL Server e integração de APIs REST para clientes empresariais.",
    ],
    tecnologies: ["VueJS", "NextJS", ".NET", "SQLServer", "TailwindCSS", "Postman"],
  },
  {
    startDate: "Março 2023",
    endDate: "Julho 2023",
    companyName: "INFOSI",
    jobTitle: "Desenvolvedor Fullstack (Estágio)",
    description: [
      "Colaboração em projetos de âmbito nacional, incluindo sistemas de gestão escolar e plataformas hospitalares.",
      "Desenvolvimento com Laravel e Blade, aplicando metodologias ágeis (SCRUM) em equipa multidisciplinar.",
    ],
    tecnologies: ["Laravel", "Blade", "MySQL", "Bootstrap", "Trello"],
  },
];

const WorkExperience = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Experiência de Trabalho</h1>
      <div className="p-1">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {WorkExperienceData.map((item, index) => (
            <li key={index} className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-300">
                {item.startDate} — {item.endDate}
              </time>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-white mt-1">
                {item.companyName}
              </h3>
              <p className="text-sm text-neutral-500 dark:text-neutral-400 mb-2">{item.jobTitle}</p>
              <ul className="mb-3 text-sm text-gray-700 dark:text-gray-300 space-y-1 list-disc list-inside">
                {item.description.map((desc, i) => (
                  <li key={i}>{desc}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-1">
                {item.tecnologies.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-0.5 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white/30 dark:bg-neutral-900/30 text-neutral-800 dark:text-neutral-200 backdrop-blur-sm text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default WorkExperience;
