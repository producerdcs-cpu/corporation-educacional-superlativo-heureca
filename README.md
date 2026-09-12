# Corporation Educacional Superlativo Heureca®

> **Superlativo = o mais alto grau.**  
> **Heureca = “encontrei / achei a solução!”.**

**Onde o conhecimento ganha vida.**

A **Corporation Educacional Superlativo Heureca®** é uma plataforma educacional digital concebida para ampliar o apoio à aprendizagem em uma única experiência: da **alfabetização** ao **Ensino Superior**, passando por Ensino Fundamental, Ensino Médio, ENEM, vestibulares, concursos e produção acadêmica.

O projeto combina **experiência educacional, exploração, aulas dinâmicas, inteligência artificial generativa e RAG (Retrieval-Augmented Generation)** como base para uma futura plataforma de aprendizagem adaptativa.

---

## Visão

**Superlativo** representa o mais alto grau, excelência e busca por evolução. **Heureca** representa o momento da descoberta: encontrar, compreender e solucionar.

### Jornada educacional

```text
ALFABETIZAÇÃO → ENSINO FUNDAMENTAL → ENSINO MÉDIO
→ ENEM · VESTIBULARES · CONCURSOS → ENSINO SUPERIOR
→ PESQUISA · PRODUÇÃO ACADÊMICA · DESENVOLVIMENTO PROFISSIONAL
```

## Escopo educacional

- Alfabetização e letramento
- Ensino Fundamental
- Ensino Médio
- ENEM, vestibulares e concursos
- Ensino Superior e disciplinas afins
- TCC, Portfólio, Monografia, Tese e Artigo científico
- Resumos, resenhas, projetos, seminários e apresentações
- Metodologia científica, pesquisa e organização acadêmica
- Trilhas de aprendizagem, exercícios, revisão e simulados

> A tecnologia deve apoiar aprendizagem, planejamento, compreensão, revisão e organização. A autoria intelectual do estudante deve ser preservada e as regras da instituição de ensino respeitadas.

## Heureca AI Lab

Área dedicada à exploração educacional com IA.

```text
PERGUNTA / TEMA
      ↓
PERFIL E OBJETIVO
      ↓
RECUPERAÇÃO RAG
      ↓
CONTEXTO RELEVANTE
      ↓
GENAI / ORQUESTRAÇÃO
      ↓
AULA DINÂMICA
      ↓
PRÁTICA / EXERCÍCIOS
      ↓
FEEDBACK → PRÓXIMO PASSO
```

A versão atual usa **RAG local demonstrativo** para validar a experiência sem expor chaves ou simular uma integração externa inexistente. O módulo principal é `src/lib/ai-rag.ts` e foi separado para futura evolução para vector store, embeddings, provider GenAI, reranking e memória pedagógica controlada.

## Rotas

```text
/              Início
/universo      Universo educacional
/aulas         Catálogo de aulas
/ia            Heureca AI Lab
/explorador    Investigação e descoberta
/trabalhos     Central acadêmica
/primos        Experiência matemática
/contato       Canal institucional
```

## Arquitetura técnica

- React 19
- TypeScript 5
- TanStack Start / TanStack Router
- Vite
- Tailwind CSS 4
- Radix UI
- Lucide React
- Zustand
- Zod
- React Hook Form
- Recharts
- Node.js 22

Estrutura principal:

```text
public/
src/components/
src/lib/
src/routes/
migrations/
scripts/
server/
screenshots/
README.md
IMPLEMENTACAO-GERAL.md
```

## Segurança, privacidade e LGPD

- Não armazenar chaves de API no frontend.
- Segredos exclusivamente no servidor.
- Autenticação/autorização quando houver dados pessoais ou por usuário.
- RAG somente com fontes autorizadas.
- Minimização de dados e logs.
- Limites de uso e proteção contra abuso.
- Políticas de retenção e exclusão adequadas.
- Consideração da LGPD quando forem processados dados de estudantes, responsáveis, professores ou usuários identificáveis.

## Uso responsável de IA

A IA pode auxiliar em explicação de conceitos, exercícios, revisão, organização de estudos, planejamento, pesquisa orientada e feedback. Não deve ser posicionada como mecanismo para ocultar autoria, burlar avaliações ou produzir submissões acadêmicas em desacordo com regras institucionais.

## Roadmap

### Fundação 1.0

- [x] Identidade Superlativo Heureca®
- [x] Home institucional
- [x] Universo educacional
- [x] Catálogo de aulas
- [x] Explorador
- [x] Central acadêmica
- [x] Heureca AI Lab
- [x] RAG local demonstrativo

### Plataforma educacional

- [ ] Perfis de aprendizagem
- [ ] Trilhas personalizadas
- [ ] Progresso por disciplina
- [ ] Banco de questões
- [ ] Avaliações e simulados
- [ ] Histórico de aprendizagem
- [ ] Painel de desempenho

### GenAI + RAG de produção

- [ ] Backend seguro de IA
- [ ] Provider GenAI configurável
- [ ] Embeddings e vector database
- [ ] Recuperação híbrida e reranking
- [ ] Citações/fontes no contexto
- [ ] Memória pedagógica com consentimento
- [ ] Avaliação de respostas

### Ecossistema acadêmico

- [ ] Workspace acadêmico
- [ ] Templates de TCC/Artigo/Monografia/Tese
- [ ] Assistente metodológico
- [ ] Verificador estrutural
- [ ] Referências e bibliografia
- [ ] ABNT e normas institucionais configuráveis

## Qualidade

Antes de produção, validar build, typecheck, lint, testes, desktop/mobile, console, rotas, acessibilidade e segurança das integrações.

```bash
npm install
npm run dev
npm run typecheck
npm run lint
npm run test
npm run build
```

## Identidade

Direção visual: **azul-marinho + magenta + dourado + branco**, com referência conceitual **SUPORTE · FOCO · RESULTADOS**.

> **SUPERLATIVO HEURECA — ONDE O CONHECIMENTO GANHA VIDA!**

## Estado

**Redesign Integral / Fundação da Corporation Educacional Superlativo Heureca®** — base funcional em evolução para uma plataforma educacional GenAI + RAG. A implementação atual não alega integrações externas que ainda não foram configuradas.

## Autoria e licenciamento

Projeto proprietário enquanto não houver decisão formal diferente sobre licença.

**© DcsProducer® — Corporation Educacional Superlativo Heureca®**

Marcas, identidade visual, conteúdos proprietários e materiais institucionais permanecem sujeitos aos direitos aplicáveis de seus respectivos titulares.

## Visão final

```text
APRENDER → EXPLORAR → PERGUNTAR → ENCONTRAR
→ COMPREENDER → PRATICAR → EVOLUIR
```

**Superlativo Heureca® — o mais alto grau da descoberta começa quando a solução é encontrada.**