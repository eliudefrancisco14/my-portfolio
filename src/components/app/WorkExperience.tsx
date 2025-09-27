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
    jobTitle: "Desenvolvedor de Software",
    description: [
      "Com uma visão futurista e detalhada, trabalhei na interface de projectos diversos apresentando assim as melhores soluções para a UI dos projectos. ",
    ],
    tecnologies: ["Python", "Odoo", "NextJS", ".NET", "SQLServer", "TailwindCSS", "Postman", "SQL"],
  },
  {
    startDate: "Setembro 2023",
    endDate: "Novembro 2024",
    companyName: "INOKRI",
    jobTitle: "Desenvolvedor Fullstack - CTO",
    description: [
      "Com uma visão futurista e detalhada, trabalhei na interface de projectos diversos apresentando assim as melhores soluções para a UI dos projectos. ",
    ],
    tecnologies: ["VueJS", "NextJS", ".NET", "SQLServer", "TailwindCSS", "Postman"],
  },
  {
    startDate: "Março 2023",
    endDate: "Julho 2023",
    companyName: "INFOSI",
    jobTitle: "Desenvolvedor Fullstack",
    description: [
      "Durante o meu estágio como desenvolvedor, eu pude colaborar em projectos de grande conhecimento nacional, e projectos inovadores.",
      "Também tive a oportunidade de melhorar a minha forma de trabalhar com as metodologias ágeis (SCRUM).",
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
                {item.startDate} - {item.endDate}
              </time>
              <h3 className="text-lg font-semibold text-gray-700 dark:text-white">
                {item.companyName} | {item.jobTitle}
              </h3>
              {/* <div className="mb-4 text-base font-normal text-gray-800 dark:text-gray-300">
                <ol>
                  {item.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
                  ))}
                </ol>
              </div> */}
              <div className="mb-4 text-base font-normal text-gray-800 dark:text-gray-300">
                <ol className="inline-flex gap-2 flex-wrap">
                  {item.tecnologies.map((tech, index) => (
                    <li className="flex flex-wrap gap-1" key={index}>
                      <div className="px-2 py-1 rounded-md border border-neutral-200 dark:border-neutral-800 bg-white/30 dark:bg-neutral-900/30 text-neutral-800 dark:text-neutral-200 backdrop-blur-sm">
                      {tech}
                      </div>
                    </li>
                  ))}
                </ol>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default WorkExperience;
