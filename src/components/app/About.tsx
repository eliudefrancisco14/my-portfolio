"use client";

import React, { useEffect, useState } from "react";

type AlbumItem = { src: string; caption: string };
const albumData: AlbumItem[] = [
  { src: "/profile-large.jpg", caption: "Retrato — em busca de novas ideias." },
  { src: "/gallery/ARTES/Arte1.jpg", caption: "Arte digital — explorando formas e cores." },
  { src: "/gallery/ITEL/fititel.jpg", caption: "ITEL — momentos de aprendizagem e evolução." },
  { src: "/gallery/ITEL/outorga.jpg", caption: "ITEL — celebração e conquistas." },
  { src: "/gallery/INOKRI/contratando.jpg", caption: "INOKRI — tecnologia conectando oportunidades." },
  { src: "/perfil.jpg", caption: "Perfil — essência e propósito em foco." },
];

const About = () => {
  const [modalOpen, setModalOpen] = React.useState(false);
  const [selectedIndex, setSelectedIndex] = React.useState<number | null>(null);

  const openModal = (index: number) => {
    setSelectedIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedIndex(null);
  };

  const goPrev = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => {
      if (prev === null) return prev;
      return (prev - 1 + albumData.length) % albumData.length;
    });
  };

  const goNext = () => {
    if (selectedIndex === null) return;
    setSelectedIndex((prev) => {
      if (prev === null) return prev;
      return (prev + 1) % albumData.length;
    });
  };

  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "ArrowLeft") goPrev();
      if (e.key === "ArrowRight") goNext();
    };
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [modalOpen, selectedIndex]);
  return (
    <div className="section-1 mt-5">
      <h1 className="mb-8 text-2xl font-semibold tracking-tighter">
        Sobre mim
      </h1>

      <p className="mb-4 text-justify">
        {`Olá! Sou Eliúde Paulo Quintas Francisco, engenheiro de software e desenvolvedor fullstack movido por desafios e apaixonado por transformar ideias em soluções digitais com propósito. Acredito que tecnologia vai além do código: é uma ponte para criar valor, abrir caminhos e gerar impacto real.`}
      </p>

      <p className="mb-4 text-justify">
        {`Minha maior expertise está no Back-End, onde desenho arquiteturas robustas, escaláveis e orientadas a dados. Mas também trago um olhar apurado para o Front-End, desenvolvendo interfaces modernas, intuitivas e envolventes que tornam a experiência do usuário memorável.`}
      </p>

      <p className="mb-4 text-justify">
        {`Fora do código, encontro inspiração em diferentes áreas que alimentam minha visão de mundo e fortalecem minha criatividade:`}
      </p>

      <ul className="list-none mb-4">
        <li className="flex items-center mb-2">
          <span className="mr-2 h-2 w-2 rounded-full bg-black dark:bg-white"></span> 🎨 Design
          Gráfico & Artes Visuais
        </li>
        <li className="flex items-center mb-2">
          <span className="mr-2 h-2 w-2 rounded-full bg-black dark:bg-white"></span> 📚
          Leitura & Aprendizado Contínuo
        </li>
        <li className="flex items-center mb-2">
          <span className="mr-2 h-2 w-2 rounded-full bg-black dark:bg-white"></span> 💹
          Investimentos & Mercado Financeiro
        </li>
        <li className="flex items-center mb-2">
          <span className="mr-2 h-2 w-2 rounded-full bg-black dark:bg-white"></span> 🎶
          Música, Instrumentais & Criatividade Sonora
        </li>
        <li className="flex items-center mb-2">
          <span className="mr-2 h-2 w-2 rounded-full bg-black dark:bg-white"></span> 🧘
          Meditação & Autoconhecimento
        </li>
        <li className="flex items-center mb-2">
          <span className="mr-2 h-2 w-2 rounded-full bg-black dark:bg-white"></span> 🌍
          Explorar novas áreas & perspectivas
        </li>
      </ul>

      <div className="my-5 p-2">
        <h1 className="text-2xl font-bold my-4">Galeria</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {albumData.map((album, index) => (
            <div
              key={index}
              className="w-full aspect-square overflow-hidden rounded-lg shadow-md cursor-pointer"
              onClick={() => openModal(index)}
            >
              <img
                className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                src={album.src}
                alt={album.caption}
              />
            </div>
          ))}
        </div>

        {modalOpen && selectedIndex !== null && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 dark:bg-neutral-900/70"
            onClick={closeModal}
          >
            <div
              className=" max-w-3xl w-full flex flex-col items-center"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                className="absolute top-2 right-2 text-white text-2xl font-bold bg-black bg-opacity-50 rounded-full px-3 py-1 hover:bg-opacity-80 transition"
                onClick={closeModal}
                aria-label="Fechar"
              >
                &times;
              </button>
              <button
                className="absolute left-2 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full px-3 py-2 text-xl z-20"
                onClick={goPrev}
                aria-label="Imagem anterior"
              >
                ‹
              </button>
              <img
                src={albumData[selectedIndex].src}
                alt={albumData[selectedIndex].caption}
                className="w-full max-h-[80vh] h-auto rounded-lg shadow-lg"
                style={{ objectFit: "contain" }}
              />
              <div className="absolute bottom-0 left-0 w-full rounded-b-lg overflow-hidden z-10">
                <div className="bg-gradient-to-t from-black/80 via-black/50 to-transparent px-4 pt-10 pb-3 text-center">
                  <p className="text-white text-sm md:text-base">{albumData[selectedIndex].caption}</p>
                </div>
              </div>
              <button
                className="absolute right-2 top-1/2 -translate-y-1/2 text-white bg-black/50 hover:bg-black/70 rounded-full px-3 py-2 text-xl z-20"
                onClick={goNext}
                aria-label="Próxima imagem"
              >
                ›
              </button>
            </div>
          </div>
        )}
      </div>

      <p className="mb-4 text-justify">
        {`Seja bem-vindo ao meu portfólio — ou como gosto de chamar, "Meu Planeta 🌍".`}
      </p>

      <p className="mb-4 text-justify">
        {`Aqui você encontrará uma coleção de projetos que desenvolvi ao longo dos anos, soluções que unem inovação, dados e design. É um espaço vivo, em constante evolução, refletindo não só minha trajetória como também minha visão de futuro.`}
      </p>

      <p className="mb-4 text-justify">
        {`Sinta-se à vontade para explorar cada canto deste planeta digital e descobrir como tecnologia, propósito e criatividade podem andar juntos.`}
      </p>
    </div>
  );
};

export default About;
