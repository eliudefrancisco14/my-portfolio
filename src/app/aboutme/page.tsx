import ArrowIcon from "@/components/ArrowIcon";


export default function Page() {
  return (
    <section>
      <div className="section-1 mt-5">
        <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
          About me
        </h1>
        <p className="mb-4">
          {`Sou o Eliúde Paulo Quintas Francisco, desenvolvedor de sistemas e plataformas. 
          Sou um amante da tecnologia, gosto de criar soluções com a tecnologia e sou fascinado em resolver os problemas dos outros que envolvem tecnologia como se fossem meus problemas.`}
        </p>
        <p className="mb-4">
          {`Sou desenvolvedor BackEnd e dedicado a lógica dos meus produtos, entretanto, também trabalho muito bem com o front, modelando e criando uma interface agradável e que atenda aos requisitos que sejam solicitados. `}
        </p>

        <p className="mb-4">
          {`Os meus hobbyes são:`}
          <ul>
            <li>1. Design Gráfico</li>
            <li>2. Leitura</li>
            <li>3. Trading - Investimento no mercado financeiro</li>
            <li>4. Ouvir Músicas e Instrumentais</li>
            <li>5. Meditar</li>
            <li>6. Estudar um pouco sobre outras áreas.</li>
          </ul>
        </p>

        <p className="mb-4">
          {`Seja Bem-vindo ao meu portfólio! Aqui eu chamo de "Meu planeta🌍". `}
        </p>

        <p className="mb-4">
          {`Aqui você encontrará uma coleção de projetos que desenvolvi ao longo dos anos, e algumas tecnologias que utilizo para o desenvolvimento de soluções. `}
        </p>

        <p className="mb-4">
          {`Sinta-se a vontade para explorar cada canto do meu planeta. 🌍`}
        </p>
      </div>
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/eliudefrancisco14"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://linkedin.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">linkedin</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://instagram.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">instagram</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://facebook.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">facebook</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">X</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://threads.com"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">threads</p>
          </a>
        </li>
      </ul>
    </section>
  );
}
