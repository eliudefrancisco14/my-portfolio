interface EducationData {
  startDate: string;
  endDate: string;
  collegeName?: string;
  schoolName?: string;
  courseName: string;
  address: string;
}

const educationData: EducationData[] = [
  {
    startDate: "Setembro 2023",
    endDate: "Presente",
    collegeName: "INSTIC - Instituto Superior de Tecnologias de Informação e Comunicação",
    courseName: "Engehnaria de Informática",
    address: "Luanda, Angola",
  },
  {
    startDate: "Fevereiro 2019",
    endDate: "Julho 2023",
    collegeName: "ITEL - Instituto de Telecomunicações",
    courseName: "Técnico de Informática",
    address: "Angola, Luanda, Rangel",
  },
];

const Education = () => {
  return (
    <div className="flex flex-col gap-4">
      <h1 className="text-2xl font-bold">Educação</h1>
      <div className="p-1">
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          {educationData.map((item, index) => (
            <li className="mb-10 ms-4">
              <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
              <time className="mb-1 text-sm font-normal leading-none text-gray-600 dark:text-gray-500">
                {item.startDate} - {item.endDate}
              </time>
              <h3 className="text-lg font-semibold text-gray-600 dark:text-white">
                {item.courseName} | {item?.collegeName || item?.schoolName}
              </h3>
              <p className="mb-4 text-base font-normal text-gray-800 dark:text-gray-400">
                {item.address}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </div>
  );
};

export default Education;
