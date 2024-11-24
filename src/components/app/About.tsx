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
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">About me</h1>
      <p className="mb-4 text-justify">
        {`Sou o Eliúde Paulo Quintas Francisco, desenvolvedor de sistemas e plataformas. 
          Sou um amante da tecnologia, gosto de criar soluções e sou fascinado em resolver os problemas. `}
      </p>
      <p className="mb-4 text-justify">
        {`Sou desenvolvedor BackEnd e dedicado a lógica dos meus produtos, entretanto, também trabalho muito bem com o front, modelando e criando uma interface agradável e que atenda aos requisitos que sejam solicitados. `}
      </p>

      {`Os meus hobbyes são:`}
      <ul className="mb-4">
        <li>1. Design Gráfico</li>
        <li>2. Leitura</li>
        <li>3. Trading - Investimento no mercado financeiro</li>
        <li>4. Ouvir Músicas e Instrumentais</li>
        <li>5. Meditar</li>
        <li>6. Estudar um pouco sobre outras áreas.</li>
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
