interface WorkExperienceData {
  startDate: string;
  endDate: string;
  companyName: string;
  jobTitle: string;
  description: string[];
}


const WorkExperienceData: WorkExperienceData[] = [
  {
    startDate: "Setembro 2023",
    endDate: "Present",
    companyName: "INOKRI",
    jobTitle: "BackEnd Developer | CTO",
    description: ["Com uma visão futurista e detalhada, trabalhei na interface de projectos diversos apresentando assim as melhores soluções para a UI dos projectos. "],
  },
  {
    startDate: "Março 2023",
    endDate: "Julho 2023",
    companyName: "INFOSI",
    jobTitle: "Software Developer",
    description: [
      "Durante o meu estágio como desenvolvedor, eu pude colaborar em projectos de grande conhecimento nacional, e projectos inovadores.", 
      "Também tive a oportunidade de melhorar a minha forma de trabalhar com as metodologias ágeis (SCRUM)."],
  },
];

const WorkExperience = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Experiência de Trabalho</h1>
      <div className="p-1">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {WorkExperienceData.map((item, index) => (
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                {item.startDate} - {item.endDate}
              </time>
              <h3 className="text-lg font-semibold text-gray-200 dark:text-white">
                {item.companyName} at {item.jobTitle}
              </h3>
              <div className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
                <ol>
                  {item.description.map((desc, index) => (
                    <li key={index}>{desc}</li>
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
