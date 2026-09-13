# Implementação geral — Superlativo Heureca®

## Direção aprovada nesta versão

**Superlativo = mais alto grau.**

**Heureca = encontrei / achei a solução.**

A homepage agora apresenta essa ideia como o fundamento da marca e posiciona o projeto como uma **Corporation Educacional** de jornada ampla, não apenas como um site de reforço em Português e Matemática.

### Escopo incorporado

- Alfabetização
- Ensino Fundamental
- Ensino Médio
- ENEM
- Vestibulares
- Concursos
- Ensino Superior e disciplinas afins
- TCC
- Portfólio
- Monografia
- Tese
- Artigo científico
- Resumo, pesquisa e apresentações
- IA generativa e RAG
- Criação e exploração de aulas dinâmicas

### Rotas novas

- `/universo` — mapa completo da proposta educacional e áreas de conhecimento.
- `/ia` — Heureca AI Lab, com criação de aula e recuperação RAG local.

### Arquitetura de IA

`src/lib/ai-rag.ts` contém a camada de conhecimento e o contrato de geração. Ela separa:

1. recuperação de contexto;
2. composição da aula;
3. prática;
4. fontes/contexto recuperado.

Isso permite trocar o mecanismo local por embeddings/vector store + provider GenAI posteriormente.

### Segurança e responsabilidade

A entrega não expõe chave de API nem finge uma conexão externa que não existe. Para produção, o próximo nível é backend autenticado, controle de acesso, base documental autorizada, logs, limites, privacidade e memória com consentimento.

No módulo acadêmico, a tecnologia deve apoiar aprendizagem, organização e revisão, preservando a autoria intelectual do estudante e as regras da instituição.
