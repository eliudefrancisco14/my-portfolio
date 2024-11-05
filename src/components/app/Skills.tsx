const skillData: string[] = [
  "Laravel",
  "PHP",
  "Node.js",
  "Express.js",
  "Next.js",
  "Python",
  "Java",
  "C#",
  "ASP.NET Core",
  "SQLServer",
  "RESTful APIs",
  "Docker",
  "Git",
  "OAuth",
  "JWT",
];

const frameworkData: string[] = [
  "Laravel",
  "Vue.js",
  "React",
  "Next.js",
  "Express.js",
  "Django",
  "Flask",
  "Spring Boot",
  "ASP.NET Core",
  "Angular",
  "Ruby on Rails",
  "Svelte",
  "NestJS",
  "Symfony",
  "Ember.js",
  "FastAPI",
  "Nuxt.js",
  "Meteor",
];

const Skills = () => {
  return (
    <div className="my-4">
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-bold">Tecnologias</h1>
        <div className="flex flex-wrap gap-1">
          {skillData.map((skill, index) => (
            <div
              key={index}
              className="flex border border-none rounded-md px-2 py-1 text-sm bg-gray-600 text-white"
            >
              {skill}
            </div>
          ))}
        </div>
      </div>
      <div className="flex flex-col gap-4 mt-4">
        <h1 className="text-2xl font-bold">FrameWorks</h1>
        <div className="flex flex-wrap gap-1">
          {frameworkData.map((framework, index) => (
            <div
              key={index}
              className="flex border border-none rounded-md px-2 py-1 text-sm bg-gray-600 text-white"
            >
              {framework}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
export default Skills;
