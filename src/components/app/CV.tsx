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
            <Button>
              Abrir Currículo <ArrowIcon />
            </Button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default CV;