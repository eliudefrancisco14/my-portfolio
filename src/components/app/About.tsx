const albumData: string[] = [
  "/profile-large.jpg",
  "/gallery/ARTES/Arte1.jpg",
  "/gallery/ITEL/fititel.jpg",
  "/gallery/ITEL/outorga.jpg",
  "/gallery/INOKRI/contratando.jpg",
  "/perfil.jpg",
];

const About = () => {
  return (
    <div className="section-1 mt-5">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">About Me</h1>
      <p className="mb-4 text-justify">
        {`Sou Eliúde Paulo Quintas Francisco, um desenvolvedor fullstack apaixonado por tecnologia e inovação. Adoro criar soluções práticas que ajudam a resolver problemas reais, transformando ideias em ferramentas funcionais e eficientes.`}
      </p>
      <p className="mb-4 text-justify">
        {`Minha especialidade está no desenvolvimento BackEnd, com foco na lógica e na arquitetura das aplicações. No entanto, também domino o FrontEnd, projetando interfaces intuitivas e visualmente agradáveis que atendem às necessidades dos usuários.`}
      </p>

      <p className="mb-4 text-justify">{`Além do meu trabalho como desenvolvedor, tenho hobbies que me mantêm inspirado e criativo:`}</p>

      <ul className="list-none mb-4">
        <li className="flex items-center mb-2">
          <span className="mr-2 h-2 w-2 rounded-full bg-black"></span> Design
          Gráfico
        </li>
        <li className="flex items-center mb-2">
          <span className="mr-2 h-2 w-2 rounded-full bg-black"></span> Leitura
        </li>
        <li className="flex items-center mb-2">
          <span className="mr-2 h-2 w-2 rounded-full bg-black"></span> Trading -
          Investimento no mercado financeiro
        </li>
        <li className="flex items-center mb-2">
          <span className="mr-2 h-2 w-2 rounded-full bg-black"></span> Ouvir
          Músicas e Instrumentais
        </li>
        <li className="flex items-center mb-2">
          <span className="mr-2 h-2 w-2 rounded-full bg-black"></span> Meditação
        </li>
        <li className="flex items-center mb-2">
          <span className="mr-2 h-2 w-2 rounded-full bg-black"></span> Estudo de
          outras áreas
        </li>
      </ul>

      <div className="my-5 p-2">
        <h1 className="text-2xl font-bold my-4">Galeria</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {albumData.map((album, index) => (
            <div key={index}>
              <img
                className="h-auto max-w-full rounded-lg"
                src={album}
                alt={index.toString()}
              />
            </div>
          ))}
        </div>
      </div>

      <p className="mb-4 text-justify">
        {`Seja Bem-vindo ao meu portfólio! Aqui eu chamo de "Meu planeta🌍". `}
      </p>

      <p className="mb-4 text-justify">
        {`Aqui você encontrará uma coleção de projetos que desenvolvi ao longo dos anos, e algumas tecnologias que utilizo para o desenvolvimento de soluções. `}
      </p>

      <p className="mb-4 text-justify">
        {`Sinta-se a vontade para explorar cada canto do meu planeta. 🌍`}
      </p>
    </div>
  );
};

export default About;
