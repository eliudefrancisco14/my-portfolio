import ArrowIcon from "../ArrowIcon";
import { Button } from "../ui/button";

const CV = () => {
  return (
    <div className="mt-5">
      <div className="flex flex-col gap-4">
        <h1 className="mt-10 text-2xl font-bold">Documentos</h1>
        <div className="flex flex-wrap gap-1">
          {/* <Button>Cópia do Bilhete de Identidade</Button> */}
          <a href="/CV.pdf" target="_blank">
            <Button variant="default" className="bg-neutral-900 text-white hover:bg-neutral-800 dark:bg-white dark:text-neutral-900 dark:hover:bg-neutral-200">
              Abrir Currículo <ArrowIcon />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CV;