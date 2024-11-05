import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import WorkExperience from "@/components/app/WorkExperience";
import Education from "@/components/app/Education";
import Skills from "@/components/app/Skills";
import Projects from "@/components/app/Projects";
import { Button } from "@/components/ui/button";

function handleOpenCV() {
  window.open("/CV.pdf", "_blank");
}

export default function Page() {
  return (
    <section>
      <div className="mt-5 flex items-center mb-5">
        <Avatar className="w-32 h-32 mr-4">
          <AvatarImage src="https://github.com/eliudefrancisco14.png" />
          <AvatarFallback className="text-black">EF</AvatarFallback>
        </Avatar>

        <div>
          <h4 className="mb-0 text-2xl font-semibold tracking-tighter">
            Eliúde Paulo Quintas Francisco
          </h4>
          <p className="mb-4">
            {`Oi, eu sou Eliude Francisco, sou desenvolvedor de software, Angolano e entusiasta na área da Programação.`}
          </p>
        </div>
      </div>

      <WorkExperience />
      <Education />
      <div className="my-5">
        <div className="flex flex-col gap-4">
          <h1 className="text-2xl font-bold">Documentos</h1>
          <div className="flex flex-wrap gap-1">
            <Button>Cópia do Bilhete de Identidade</Button>
            <a href="/CV.pdf" target="_blank">
              <Button>Abrir Currículo</Button>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
