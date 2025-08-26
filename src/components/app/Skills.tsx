import {
  DiJavascript,
  DiCss3,
  DiHtml5,
  DiPython,
  DiJava,
  DiPhp,
  DiMysql,
  DiLaravel,
  DiVisualstudio,
} from "react-icons/di";
import {
  FaReact,
  FaNodeJs,
  // FaLaravel,
  FaDocker,
  FaGitAlt,
} from "react-icons/fa";
import { 
  // SiVisualstudiocode, 
  SiPostman } from "react-icons/si";
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
  <div className="flex flex-col gap-2 w-full bg-white rounded-md shadow">
    <h4 className="text-lg font-bold p-2">{title}</h4>
    <hr className="ml-2 mr-4" />
    <div className="flex flex-wrap gap-1 p-2">{children}</div>
  </div>
);

const Technologies = () => (
  <Section title="Technologies">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <DiJavascript size={35} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p>JavaScript</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <DiCss3 size={35} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p>CSS3</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <DiHtml5 size={35} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p>HTML5</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <DiPython size={35} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Python</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <DiJava size={35} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Java</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <DiPhp size={35} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p>PHP</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <DiMysql size={35} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p>MySQL</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Section>
);

const Frameworks = () => (
  <Section title="Frameworks">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          <FaReact size={35} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p>React</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <FaNodeJs size={35} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Node.js</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <DiLaravel size={35} className="cursor-pointer"/>
          {/* <FaLaravel size={35} className="cursor-pointer" /> */}
        </TooltipTrigger>
        <TooltipContent>
          <p>Laravel</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Section>
);

const Ferramentas = () => (
  <Section title="Ferramentas">
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger asChild>
          {/* <SiVisualstudiocode size={35} className="cursor-pointer" /> */}
          <DiVisualstudio size={35} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Visual Studio Code</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <SiPostman size={35} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Postman</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <FaDocker size={35} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Docker</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <FaGitAlt size={35} className="cursor-pointer" />
        </TooltipTrigger>
        <TooltipContent>
          <p>Git</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  </Section>
);

const Skills = () => (
  <div className="mt-4 inline-flex gap-4">
    <Technologies />
    <Frameworks />
    <Ferramentas />
  </div>
);

export default Skills;
