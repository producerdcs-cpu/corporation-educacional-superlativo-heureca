export const SITE = {
  name: "Superlativo Heureca",
  legal: "Corporation Educacional Superlativo Heureca",
  teacher: "Profª. Lú",
  slogan: "Onde o conhecimento ganha vida!",
  promise: "Aprender hoje para transformar o amanhã!",
  tagline: "Suporte • Foco • Resultados",
  invite: "Conte conosco!",
  phoneDisplay: "(67) 9.8475-9208",
  phoneTel: "+5567984759208",
  whatsapp:
    "https://wa.me/5567984759208?text=" +
    encodeURIComponent(
      "Olá, Profª. Lú! Gostaria de informações sobre a Corporation Educacional Superlativo Heureca e suas soluções de aprendizagem.",
    ),
  whatsappReciclagem:
    "https://wa.me/5567984759208?text=" +
    encodeURIComponent(
      "Olá, Profª. Lú! Quero informações e inscrição nos Cursos de Reciclagem (Português e Matemática).",
    ),
  facebook: "https://www.facebook.com/groups/521597561240445/contato",
  hours: [
    { start: "14:00", end: "15:30" },
    { start: "15:00", end: "16:30" },
    { start: "17:30", end: "19:00" },
  ],
} as const;

export const RECICLAGEM = {
  badge: "Novidade",
  title: "Cursos de Reciclagem",
  subjects: ["Português", "Matemática"] as const,
  focus: "Séries iniciais e Ensino Médio",
  period: "Aberto desde hoje",
  hoursLabel: "Horário vespertino",
  levels: [
    { id: "infantil", title: "Ensino Infantil" },
    { id: "fundamental", title: "Ensino Fundamental" },
    { id: "medio", title: "Ensino Médio" },
    { id: "enem", title: "ENEM" },
    { id: "vestibular", title: "Vestibulares e Concursos" },
  ] as const,
  pitch:
    "Acompanhamento educacional e aulas de reforço com suporte, foco e resultados — para aprender hoje e transformar o amanhã.",
} as const;

export const NAV = [
  { to: "/", label: "Início" },
  { to: "/universo", label: "Universo" },
  { to: "/reciclagem", label: "Reciclagem" },
  { to: "/aulas", label: "Aulas" },
  { to: "/ia", label: "Heureca AI" },
  { to: "/explorador", label: "Explorador" },
  { to: "/trabalhos", label: "Acadêmico" },
  { to: "/contato", label: "Contato" },
] as const;

export const LEVELS = [
  { id: "infantil", title: "Alfabetização", blurb: "Leitura, escrita, consciência fonológica e primeiros conceitos." },
  { id: "fundamental", title: "Fundamental", blurb: "Base completa para as principais áreas do currículo escolar." },
  { id: "medio", title: "Ensino Médio", blurb: "Aprofundamento, provas, redação e raciocínio." },
  { id: "enem", title: "ENEM", blurb: "Competências, interpretação e resolução estratégica." },
  { id: "vestibular", title: "Vestibulares", blurb: "Revisão, exercícios e estratégia por prova." },
] as const;
