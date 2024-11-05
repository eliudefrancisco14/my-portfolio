import { Button } from "../ui/button";

type ProjectData = {
  title: string;
  description: string;
  link: string;
  code?: string;
  tecnologies: string[];
};

const projects: ProjectData[] = [
  {
    title: "Project 1",
    description: "Description for project 1",
    link: "http://example.com/project1",
    code: "http://example.com/project1",
    tecnologies: ["Laravel", "PHP", "Node.js", "Express.js"],
  },
  {
    title: "Project 2",
    description: "Description for project 2",
    link: "http://example.com/project2",
    code: "http://example.com/project2",
    tecnologies: ["Laravel", "PHP", "Node.js", "Express.js"],
  },
  {
    title: "Project 3",
    description: "Description for project 3",
    link: "http://example.com/project3",
    code: "http://example.com/project3",
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
          <div className="flex flex-col gap-2 p-4 text-center">
            <a href="#">
              <h5 className="mb-2 font-bold tracking-tight text-gray-900 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </a>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
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
            <div className="flex gap-2 mt-2">
              <Button variant="default">View</Button>
              <Button variant="outline" className="text-gray-500">Code</Button>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default Projects;

