export type RagChunk = {
  id: string;
  area: string;
  level: string;
  title: string;
  content: string;
  keywords: string[];
};

export type GeneratedLesson = {
  title: string;
  objective: string;
  duration: string;
  steps: Array<{ title: string; body: string }>;
  practice: string[];
  sources: RagChunk[];
};

/** RAG local demonstrativo. A interface permite trocar depois por um provider GenAI real. */
export const RAG_KNOWLEDGE: RagChunk[] = [
  { id: "pt-01", area: "Linguagens", level: "Todos", title: "Leitura ativa", content: "Ler o comando, localizar evidências no texto, marcar conectivos e distinguir inferência de opinião.", keywords: ["portugues", "interpretação", "leitura", "enem", "texto"] },
  { id: "pt-02", area: "Linguagens", level: "Todos", title: "Redação", content: "Uma redação consistente apresenta tese, argumentos relacionados ao tema, repertório pertinente e conclusão coerente.", keywords: ["redação", "enem", "texto", "argumentação"] },
  { id: "mat-01", area: "Matemática", level: "Todos", title: "Função afim", content: "Na função y = ax + b, a representa a variação de y por unidade de x e b é o valor de y quando x é zero.", keywords: ["matematica", "função", "álgebra", "enem"] },
  { id: "mat-02", area: "Matemática", level: "Todos", title: "Frações", content: "O denominador representa o número de partes iguais da unidade e o numerador indica quantas partes são consideradas.", keywords: ["matematica", "fração", "fundamental"] },
  { id: "nat-01", area: "Ciências da Natureza", level: "Todos", title: "Método científico", content: "Pergunta, hipótese, procedimento, observação, análise e conclusão formam uma sequência útil para investigar fenômenos.", keywords: ["ciências", "biologia", "química", "física", "pesquisa"] },
  { id: "hum-01", area: "Ciências Humanas", level: "Todos", title: "Análise histórica", content: "Contextualizar tempo, espaço, agentes, causas e consequências evita explicações isoladas de um processo histórico.", keywords: ["história", "geografia", "humanas", "enem"] },
  { id: "tec-01", area: "Tecnologia", level: "Todos", title: "Pensamento computacional", content: "Decomposição, reconhecimento de padrões, abstração e algoritmos ajudam a transformar problemas em etapas executáveis.", keywords: ["tecnologia", "programação", "informática", "algoritmo"] },
  { id: "acad-01", area: "Acadêmico", level: "Superior", title: "Metodologia científica", content: "Um trabalho acadêmico precisa alinhar problema, objetivos, método, evidências, análise e referências, preservando a autoria intelectual do estudante.", keywords: ["tcc", "artigo", "monografia", "tese", "metodologia", "abnt"] },
  { id: "acad-02", area: "Acadêmico", level: "Superior", title: "Estrutura acadêmica", content: "A estrutura deve refletir o tipo de trabalho e as regras da instituição. A normalização é parte da apresentação, não substitui a qualidade da pesquisa.", keywords: ["tcc", "artigo", "monografia", "tese", "portfólio", "abnt"] },
];

function tokenize(value: string) {
  return value.toLowerCase().normalize("NFD").replace(/[\u0300-\u036f]/g, "").split(/[^a-z0-9]+/).filter(Boolean);
}

export function retrieveRag(query: string, area?: string, level?: string) {
  const tokens = new Set(tokenize(query));
  return RAG_KNOWLEDGE.map((chunk) => {
    const keywordScore = chunk.keywords.reduce((score, keyword) => score + (tokenize(keyword).some((token) => tokens.has(token)) ? 2 : 0), 0);
    const text = tokenize(`${chunk.title} ${chunk.content}`);
    const textScore = text.reduce((score, word) => score + (tokens.has(word) ? 1 : 0), 0);
    const areaScore = area && chunk.area === area ? 3 : 0;
    const levelScore = level && chunk.level === level ? 1 : 0;
    return { chunk, score: keywordScore + textScore + areaScore + levelScore };
  }).sort((a, b) => b.score - a.score).slice(0, 3).map(({ chunk }) => chunk);
}

export function generateLesson(params: { topic: string; level: string; area: string; goal: string }): GeneratedLesson {
  const sources = retrieveRag(`${params.topic} ${params.goal}`, params.area, params.level);
  const context = sources.map((source) => source.content).join(" ");
  const title = params.topic.trim() ? `Aula inteligente: ${params.topic.trim()}` : `Aula inteligente de ${params.area}`;
  const goal = params.goal.trim() || "compreender o conceito, praticar e verificar o aprendizado";
  return {
    title,
    objective: `Ao final, o estudante deverá ${goal}.`,
    duration: "25–35 min",
    steps: [
      { title: "1 · Ativação", body: `Comece pelo que você já sabe sobre ${params.topic || "o tema"}. Relacione o assunto a um exemplo concreto antes de avançar.` },
      { title: "2 · Núcleo do conceito", body: context || "O mecanismo RAG está pronto para receber uma base pedagógica específica deste tema." },
      { title: "3 · Aplicação guiada", body: `Resolva um exemplo passo a passo e explique com suas próprias palavras por que cada etapa funciona. O foco é ${params.goal || "compreender e aplicar"}.` },
      { title: "4 · Verificação", body: "Faça as questões de prática sem consultar a explicação. Depois compare o raciocínio e corrija apenas o ponto em que surgiu a dúvida." },
    ],
    practice: [`Explique ${params.topic || "o tema"} em três frases, sem copiar a definição.`, "Crie um exemplo próprio e identifique o conceito utilizado.", "Responda: qual foi a evidência que sustentou sua resposta?"],
    sources,
  };
}