export const personalInfo = {
  name: "Eliúde Francisco",
  role: "Desenvolvedor de Software · Aplicações de Dados",
  tagline: "Software · Dados · IA",
  bio: "Desenvolvo aplicações web e soluções orientadas a dados, de APIs e integrações a dashboards e produtos com IA, que ajudam empresas e instituições a trabalhar melhor.",
  aboutExtended:
    "Sou Desenvolvedor de Software na Underall, onde construo produtos digitais B2B e B2G com foco em dados, automação e IA aplicada. Antes, fui CTO na Inokri Soluções Inteligentes, onde liderei a arquitetura e o desenvolvimento das plataformas da empresa, e Desenvolvedor de Sistemas no INFOSI, em projetos de âmbito nacional. Gosto de levar uma ideia do conceito ao deploy, com código limpo e decisões baseadas em dados.",
  email: "eliudepauloquintasf@gmail.com",
  location: "Luanda, Angola",
  social: {
    github: "https://github.com/eliudefrancisco14",
    linkedin: "https://linkedin.com/in/eliude-quintas-francisco-7b2347252",
    instagram: "https://instagram.com/eliudepauloquintas",
    twitter: "https://x.com/EliudeQuintas14",
  },
};

export type Project = {
  title: string;
  description: string;
  problem: string;
  role: string;
  technologies: string[];
  image?: string;
  imageAlt: string;
  link?: string;
  code?: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: "IBNN Portugal: Plataforma Digital para Igreja",
    featured: true,
    image: "/projects/ibnn-portugal.webp",
    imageAlt: "Página inicial da plataforma IBNN Portugal com agenda e ministérios",
    link: "https://ibnnportugal.pt",
    description:
      "Plataforma web multi-unidade que centraliza agenda, ministérios, galeria, conteúdos e área reservada para membros e líderes.",
    problem:
      "Substituiu canais dispersos (WhatsApp, folhas, redes sociais) por um único ponto de comunicação e gestão, com controlo de acessos por perfil e pedidos de media online.",
    role: "Desenvolvimento full-stack, do design ao deploy",
    technologies: ["React", "TypeScript", "Supabase", "PostgreSQL", "Vercel"],
  },
  {
    title: "SnapRead: Extração de Texto com OCR",
    featured: true,
    imageAlt: "Capa do SnapRead: ícone de digitalização de texto",
    link: "https://snapread-frontend.vercel.app/",
    code: "https://github.com/eliudefrancisco14/snapread-api",
    description: "Ferramenta web que extrai texto de imagens com um clique.",
    problem:
      "Evita a digitação manual de documentos, recibos e capturas de ecrã, com uma API própria de OCR.",
    role: "Frontend, API e deploy",
    technologies: ["React", "TypeScript", "Python", "FastAPI", "Tesseract OCR", "Docker"],
  },
  {
    title: "Angofuel: Postos de Combustível em Tempo Real",
    image: "/projects/angofuel.webp",
    imageAlt: "Mapa interativo do Angofuel com postos de combustível em Angola",
    description:
      "Plataforma de geolocalização de postos de combustível em Angola, com mapa interativo e disponibilidade em tempo real.",
    problem:
      "Ajudou condutores a encontrar postos abastecidos antes de se deslocarem, num período de filas e escassez.",
    role: "Desenvolvimento full-stack",
    technologies: ["Laravel", "MySQL", "Google Maps API", "Bootstrap"],
  },
  {
    title: "Assistente Hospitalar: Consultas Online",
    image: "/projects/assistente-hospitalar.webp",
    imageAlt: "Ecrã de marcação de consultas do Assistente Hospitalar",
    code: "https://github.com/eliudefrancisco14/hospitalar",
    description:
      "Plataforma de marcação de consultas que liga pacientes a profissionais de saúde, com histórico clínico digital.",
    problem: "Reduziu deslocações para marcar consultas e digitalizou o historial do paciente.",
    role: "Desenvolvimento full-stack (INFOSI)",
    technologies: ["Laravel", "Blade", "MySQL", "Bootstrap"],
  },
  {
    title: "School Management: Gestão Escolar",
    image: "/projects/school-management.webp",
    imageAlt: "Painel do sistema School Management com turmas e notas",
    description:
      "Sistema de gestão escolar: matrículas, turmas, notas, relatórios e comunicação escola-família.",
    problem:
      "Digitalizou processos que eram feitos em papel, reduzindo o tempo de matrículas e emissão de relatórios.",
    role: "Desenvolvimento full-stack",
    technologies: ["Laravel", "MySQL", "Bootstrap"],
  },
];

export type Experience = {
  role: string;
  company: string;
  period: string;
  description: string;
};

export const experiences: Experience[] = [
  {
    role: "Desenvolvedor de Software (Dados & IA)",
    company: "Underall",
    period: "Dez 2024 - Presente",
    description:
      "Desenvolvimento de produtos digitais B2B e B2G com foco em dados e automação: APIs em Python/FastAPI e .NET, integração com SQL Server, implementação e customização de Odoo para clientes empresariais.",
  },
  {
    role: "CTO & Desenvolvedor Fullstack",
    company: "Inokri Soluções Inteligentes",
    period: "Set 2023 - Dez 2024",
    description:
      "Liderança técnica: definição da arquitetura e stack, desenvolvimento de plataformas web com Vue.js/Next.js e .NET, e gestão de bases de dados SQL Server para clientes empresariais.",
  },
  {
    role: "Desenvolvedor de Sistemas (Estágio)",
    company: "INFOSI",
    period: "Mar 2023 - Jul 2023",
    description:
      "Participação em projetos de âmbito nacional, como gestão escolar e plataformas hospitalares, com Laravel, em equipa ágil (SCRUM).",
  },
];

export type Skill = {
  category: string;
  items: string[];
};

export const skills: Skill[] = [
  { category: "Linguagens", items: ["Python", "TypeScript", "JavaScript", "C#", "PHP", "SQL"] },
  { category: "Dados & IA", items: ["Pandas", "NumPy", "Power BI", "SQL Server", "PostgreSQL"] },
  {
    category: "Frameworks & Plataformas",
    items: ["FastAPI", ".NET", "React", "Next.js", "Vue.js", "Laravel", "Node.js"],
  },
  { category: "Ferramentas & Cloud", items: ["Supabase", "Odoo", "Docker", "Git", "Postman"] },
];

export const education = [
  {
    degree: "Engenharia Informática",
    school: "INSTIC",
    period: "2023 - Presente",
  },
  {
    degree: "Ensino Médio em Tecnologia da Informação",
    school: "ITEL",
    period: "2019 - 2023",
  },
];

export const interests = [
  { label: "Artes Visuais", icon: "palette" },
  { label: "Leitura", icon: "book" },
  { label: "Data Science", icon: "chart" },
  { label: "Música", icon: "music" },
  { label: "IA & ML", icon: "brain" },
  { label: "Explorar o Mundo", icon: "globe" },
  { label: "Filosofia", icon: "brain" },
  { label: "Poesia", icon: "book" },
];
