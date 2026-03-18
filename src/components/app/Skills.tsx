import {
  DiJavascript,
  DiPython,
  DiPhp,
  DiMysql,
  DiLaravel,
  DiVisualstudio,
} from "react-icons/di";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import {
  SiPostman,
  SiNextdotjs,
  SiTypescript,
  SiFastapi,
  SiDotnet,
  SiSupabase,
} from "react-icons/si";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";

interface SectionProps {
  title: string;
  children: React.ReactNode;
}

const Section = ({ title, children }: SectionProps) => (
  <div className="flex flex-col gap-2 w-full rounded-md border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 backdrop-blur">
    <h4 className="text-lg font-bold p-2 text-neutral-900 dark:text-neutral-100">
      {title}
    </h4>
    <hr className="ml-2 mr-4 border-neutral-200 dark:border-neutral-800" />
    <div className="flex flex-wrap gap-2 p-2 text-neutral-800 dark:text-neutral-200">
      {children}
    </div>
  </div>
);

const Technologies = () => (
  <div className="flex flex-col gap-2 w-full min-w-[200px]">
    <Section title="Linguagens">
      <TooltipProvider>
        <Tooltip>
          <TooltipTrigger asChild>
            <DiJavascript size={35} className="cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent><p>JavaScript</p></TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <SiTypescript size={30} className="cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent><p>TypeScript</p></TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <DiPython size={35} className="cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent><p>Python</p></TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <DiPhp size={35} className="cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent><p>PHP</p></TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger asChild>
            <DiMysql size={35} className="cursor-pointer" />
          </TooltipTrigger>
          <TooltipContent><p>SQL / MySQL</p></TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </Section>
  </div>
);

const Frameworks = () => (
  <Section title="Frameworks & Plataformas">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <FaReact size={35} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent><p>React</p></TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <SiNextdotjs size={30} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent><p>Next.js</p></TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <FaNodeJs size={35} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent><p>Node.js</p></TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <SiFastapi size={30} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent><p>FastAPI</p></TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <SiDotnet size={30} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent><p>.NET</p></TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <DiLaravel size={35} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent><p>Laravel</p></TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Section>
);

const DataAI = () => (
  <Section title="Data & AI">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="text-xs font-bold cursor-pointer px-1 py-1 rounded bg-neutral-100 dark:bg-neutral-800">SQL Server</span>
        </TooltipTrigger>
        <TooltipContent><p>Microsoft SQL Server</p></TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <SiSupabase size={30} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent><p>Supabase</p></TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="text-xs font-bold cursor-pointer px-1 py-1 rounded bg-neutral-100 dark:bg-neutral-800">Odoo</span>
        </TooltipTrigger>
        <TooltipContent><p>Odoo ERP (Parceiro Certificado)</p></TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="text-xs font-bold cursor-pointer px-1 py-1 rounded bg-neutral-100 dark:bg-neutral-800">Pandas</span>
        </TooltipTrigger>
        <TooltipContent><p>Pandas (Data Analysis)</p></TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <span className="text-xs font-bold cursor-pointer px-1 py-1 rounded bg-neutral-100 dark:bg-neutral-800">Power BI</span>
        </TooltipTrigger>
        <TooltipContent><p>Power BI (Data Visualization)</p></TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Section>
);

const Ferramentas = () => (
  <Section title="Ferramentas">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <DiVisualstudio size={35} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent><p>Visual Studio Code</p></TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <SiPostman size={30} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent><p>Postman</p></TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <FaDocker size={35} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent><p>Docker</p></TooltipContent>
      </Tooltip>
      <Tooltip>
        <TooltipTrigger asChild>
          <FaGitAlt size={35} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent><p>Git</p></TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Section>
);

const Skills = () => (
  <div className="mt-4 flex flex-col gap-3">
    <h1 className="text-2xl font-bold">Competências</h1>
    <div className="flex gap-4 flex-row flex-nowrap overflow-x-auto text-center">
      <Technologies />
      <Frameworks />
      <DataAI />
      <Ferramentas />
    </div>
  </div>
);

export default Skills;
