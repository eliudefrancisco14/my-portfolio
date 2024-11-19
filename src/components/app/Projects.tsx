import Link from "next/link";
import { Button } from "../ui/button";

type ProjectData = {
  title: string;
  description: string;
  link: string;
  code?: string;
  nocode: boolean;
  tecnologies: string[];
};

const projects: ProjectData[] = [
  {
    title: "Angofuel",
    description: "Sistemas de Geolocalização de Postos de Combustíveis.",
    link: "#",
    code: "#",
    nocode: false,
    tecnologies: ["Laravel", "PHP", "MySQL", "Google Maps"],
  },
  {
    title: "Project 2",
    description: "Description for project 2",
    link: "#",
    code: "#",
    nocode: true,
    tecnologies: ["Laravel", "PHP", "Node.js", "Express.js"],
  },
  {
    title: "Project 3",
    description: "Description for project 3",
    link: "http://example.com/project3",
    code: "http://example.com/project3",
    nocode: false,
    tecnologies: ["Laravel", "PHP", "Node.js", "Express.js"],
  },
];

const Projects = () => (
  <div className="flex flex-col gap-4">
    <h1 className="text-2xl font-bold mt-2">Projectos</h1>
    <div className="grid grid-cols-2 gap-1">
      {projects.map((project, index) => (
        <div
          key={index}
          className="flex flex-col bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
        >
          <a href="#">
            <img
              className="rounded-t-lg w-100 h-100"
              src="/profile-large.jpg"
              alt=""
            />
          </a>
          <div className="flex flex-col gap-2 p-4 text-justify">
            <a href="#">
              <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                {project.title}
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-2 p-2">
              {project.tecnologies.map((skill, index) => (
                <div
                  key={index}
                  className="flex border border-none rounded-md px-2 py-1 text-sm bg-gray-600 text-white"
                >
                  {skill}
                </div>
              ))}
            </div>
            <hr />
            <div className="flex gap-2 mt-2">
              {project.nocode ? (
                <Link href={project?.link ?? "#"} target="_blank">
                  <Button variant="outline" className="text-gray-500">
                    Code
                  </Button>
                </Link>
              ) : null}

              <Link href={project?.code ?? "#"} target="_blank">
                <Button variant="default">View</Button>
              </Link>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;
