export type EducationLevel = "alfabetizacao" | "fundamental" | "medio" | "enem" | "vestibular" | "concursos" | "superior" | "academico";
export type EducationArea = "linguagens" | "matematica" | "natureza" | "humanas" | "tecnologia" | "negocios" | "academico";

export const EDUCATION_LEVELS = [
  { id: "alfabetizacao", title: "Alfabetização", description: "Consciência fonológica, leitura, escrita e primeiros conceitos matemáticos." },
  { id: "fundamental", title: "Ensino Fundamental", description: "Base completa para as principais áreas do currículo escolar." },
  { id: "medio", title: "Ensino Médio", description: "Aprofundamento, preparação para provas e consolidação da base." },
  { id: "enem", title: "ENEM", description: "Competências, interpretação, redação e resolução estratégica de questões." },
  { id: "vestibular", title: "Vestibulares", description: "Conteúdo, revisão, exercícios e estratégia conforme a prova." },
  { id: "concursos", title: "Concursos", description: "Conhecimentos gerais e específicos, legislação, lógica e revisão orientada." },
  { id: "superior", title: "Ensino Superior", description: "Disciplinas afins, reforço conceitual e apoio à organização acadêmica." },
  { id: "academico", title: "Produção Acadêmica", description: "TCC, portfólio, monografia, tese, artigo, resumo e apresentação." },
] as const;

export const EDUCATION_AREAS = [
  { id: "linguagens", title: "Linguagens", subjects: ["Português", "Literatura", "Redação", "Inglês", "Espanhol", "Comunicação"] },
  { id: "matematica", title: "Matemática", subjects: ["Matemática", "Álgebra", "Geometria", "Estatística", "Probabilidade", "Raciocínio lógico"] },
  { id: "natureza", title: "Ciências da Natureza", subjects: ["Biologia", "Química", "Física", "Ciências"] },
  { id: "humanas", title: "Ciências Humanas", subjects: ["História", "Geografia", "Filosofia", "Sociologia", "Atualidades"] },
  { id: "tecnologia", title: "Tecnologia", subjects: ["Informática", "Programação", "Dados", "Tecnologia da informação"] },
  { id: "negocios", title: "Negócios e Gestão", subjects: ["Administração", "Gestão", "Finanças", "Marketing", "Empreendedorismo"] },
  { id: "academico", title: "Acadêmico", subjects: ["Metodologia científica", "ABNT", "Pesquisa", "TCC", "Artigo", "Monografia", "Tese", "Portfólio"] },
] as const;

export const ACADEMIC_SERVICES = [
  { title: "TCC", text: "Tema, problema, objetivos, metodologia, estrutura, referências e preparação para apresentação." },
  { title: "Portfólio", text: "Curadoria de evidências, narrativa profissional, organização visual e revisão." },
  { title: "Monografia", text: "Planejamento do trabalho, estrutura acadêmica, coerência e normalização." },
  { title: "Tese", text: "Apoio à organização do projeto, revisão estrutural e clareza argumentativa." },
  { title: "Artigo científico", text: "Estrutura, resumo, introdução, método, resultados, discussão e referências." },
  { title: "Apresentação", text: "Roteiro, slides, síntese e preparação para defesa ou seminário." },
] as const;