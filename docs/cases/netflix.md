# Case Netflix — Da Indecisão ao Play

> Versão editorial final consolidada após auditoria do passo 3.4.
> Conteúdo pronto para ser aplicado no template do passo 3.5 e implementado no Next.js no passo 3.6.

---

## Hero

**Badge:** PROJETO CONCEITUAL

**Título:** Ajudando os usuários da Netflix a escolher o que assistir

**Subtítulo:** Pesquisa com usuários, priorização estratégica e duas funcionalidades aprovadas por 8 em 10 usuários em teste de usabilidade.

---

## Visão Geral

- **Atuação:** Product Discovery · UX Research · UI Design · Prototipação · Testes de Usabilidade
- **Equipe:** 2 Product Designers
- **Ferramentas:** Figma, FigJam, Maze, Google Forms
- **Duração:** 6 meses

---

## Resultados

*Validados em testes de usabilidade com 26 usuários*

- **80%** declararam intenção de uso semanal
- **100%** completaram o fluxo principal
- **4,5/5** de satisfação média (CSAT)

> *"Acabou a novela para escolher filme. Eu usaria muito isso, ajuda a resolver o impasse."* — participante do teste

---

## O Desafio

*[Storyboard visual com os três momentos]*

Essa cena ilustra uma experiência pessoal: frequentemente passava mais tempo escolhendo do que assistindo.

Mas não podia assumir que minha experiência individual representava a realidade de todos os assinantes. Antes de propor qualquer solução, precisava entender se era uma dor comum para mais usuários, como ela era vivenciada na rotina deles e qual o impacto para o negócio.

Foi com essa dúvida que comecei a investigar.

---

## A Investigação

### 01 — Dados de mercado

Comecei mapeando os dados de mercado. Descobri que entre 2019 e 2023, o tempo médio para escolher um conteúdo em serviços de streaming subiu 42%, de 7 para 10 minutos `[fonte]`.

Para a Netflix, com 25 milhões de assinantes no Brasil `[fonte]`, cada minuto de indecisão aumenta o risco de o usuário fechar o app, e abandono recorrente pode levar ao cancelamento do serviço.

Os dados apontavam três fatores recorrentes que causavam essa indecisão:

1. Paradoxo da escolha
2. Fadiga de decisão
3. Recomendações genéricas

Mas isso era o panorama do mercado. Faltava entender o que disso valia para a Netflix em específico, e o que ainda era suposição minha.

### 02 — Matriz CSD

Montei uma matriz CSD para separar o que já sabia do que ainda precisava validar com os usuários.

*[Artefato visual — Matriz CSD]*

**Principais dúvidas**

- A dificuldade de escolha é rotineira ou esporádica, e qual o nível real de frustração?
- Quando não encontra nada, o usuário abandona a plataforma ou contorna o problema de outra forma?

**Suposição**

O problema da indecisão não é a quantidade de títulos, é a qualidade das recomendações, que não se baseiam no gosto real dos usuários.

### 03 — Questionário com usuários

Apliquei um questionário com 39 usuários de plataformas de streaming. Os resultados responderam as perguntas e confirmaram a suposição:

- A dor é rotineira, não pontual.
- A maioria desiste antes de insistir; fechar o app é a reação mais comum.
- O problema não é falta de opções, é excesso de opções erradas.

Com a causa raiz validada, três oportunidades de design ficaram claras: tornar a escolha mais rápida, personalizar recomendações desde o início e ajudar grupos a decidirem juntos.

---

## Solução

*[Artefato visual — Matriz Impacto × Esforço]*

Mapeei seis caminhos possíveis. Os de menor esforço, como reorganizar a home ou destacar conteúdos em alta, atacavam sintomas, não a causa raiz.

Priorizei duas soluções de maior esforço, Quizz de Humor e Match de Filmes, porque eram as únicas alinhadas às três oportunidades identificadas.

### Quizz de Humor

*[Telas do fluxo]*

Um filtro visual baseado no humor do momento. O usuário responde perguntas rápidas e em segundos recebe 5 recomendações alinhadas ao humor declarado, sem depender de histórico.

### Match de Filmes

*[Telas do fluxo]*

Uma área onde os usuários selecionam os títulos que mais gostam e o sistema sugere apenas os títulos que agradam a todos. Acaba com a negociação antes do play.

---

## Validação e resultados

Testei os protótipos com 26 usuários, combinando sessões moderadas, para entender o porquê das reações, e não moderadas via Maze, para escalar o volume de dados.

**Match de Filmes**

100% de conclusão · 4,8/5 de satisfação

> *"Isso salva casamentos! Resolve a briga de ficar meia hora escolhendo."* — participante do teste

**Quizz de Humor**

90% de conclusão · 4,3/5 de satisfação

> *"É rápido e divertido. Sinto que finalmente o sistema está me ouvindo de verdade."* — participante do teste

Os testes também revelaram oportunidades de melhoria pontuais. Como a proposta principal já estava validada, elas foram priorizadas para uma próxima versão, sem atrasar a entrega.

---

## Aprendizados

**Hipótese errada gera solução errada.** Se eu tivesse aceitado a percepção comum de que "o catálogo é o problema", teria construído soluções que não atacariam a causa raiz. A pesquisa não atrasou o projeto, ela ajudou a identificar o problema certo.

**Decidir o que fica fora é tão estratégico quanto decidir o que entra.** As oportunidades de melhoria identificadas no teste eram sugestões válidas, mas atrasariam o que importava agora: testar se a proposta principal funcionava. Priorizar uma primeira versão enxuta foi o que permitiu a validação da hipótese central.

---

## Lacunas factuais a preencher no passo 3.6

- `[fonte]` do dado de 42% (tempo de escolha 2019-2023)
- `[fonte]` do dado de 25 milhões de assinantes Netflix no Brasil

---

## Decisões aplicadas neste case (registro de auditoria)

Decisões tomadas durante o passo 3.4 que valem como referência para os próximos cases:

1. **Cases conceituais identificados como tais** no hero (badge "PROJETO CONCEITUAL").
2. **Dados qualitativos não inflados como métricas de negócio.** Validações de teste apresentadas como tal.
3. **Sem afirmar "redução de tempo de escolha"** — não foi medido antes/depois.
4. **Travessões evitados** no texto corrido (vírgula, ponto-e-vírgula ou frase nova). Permitidos em atribuição de quotes.
5. **Travessão longo (—)** na atribuição de quotes, não hífen (-).
6. **"Participante do teste"** como padrão de atribuição (não "usuário do teste").
7. **Sub-cabeçalhos com causalidade** dentro de seções: "01 — Dados de mercado", não "Mercado".
8. **Fontes de dados de mercado** precisam estar disponíveis quando o case for escrito.
