# CLAUDE.md — Portfólio Mateus Melo

Este arquivo é lido automaticamente pelo Claude Code ao abrir sessões neste projeto. Contém o contexto completo do projeto, decisões de design, convenções técnicas e modo de operação esperado.

---

## 0. Modo de operação (leia primeiro)

**Sobre o usuário:** Mateus Melo, Product Designer (não desenvolvedor). Tem noção básica de código mas está aprendendo. Está construindo este portfólio como projeto pessoal e como exercício prático para dominar o Claude Code.

**Comporte-se assim neste projeto:**

1. **Explique antes de fazer.** Sempre que for executar comandos não triviais (criar arquivos, instalar pacotes, modificar configuração), descreva primeiro o que vai fazer e por quê. Aguarde confirmação para ações que afetam mais de um arquivo ou que mexem em configuração.

2. **Um passo de cada vez.** Não execute sequências longas de comandos sem checkpoints. Após cada etapa significativa, mostre o resultado e pergunte se deve seguir.

3. **Use português do Brasil** em todas as suas respostas, comentários de código (quando necessários) e mensagens. Nomes de variáveis, funções, classes e arquivos seguem convenção em inglês.

4. **Conventional Commits, sempre.** Toda mensagem de commit deve seguir o padrão `tipo: descrição` (ex: `feat: adiciona componente Nav`, `style: ajusta espaçamento do hero`, `fix: corrige link do currículo`). Tipos comuns: `feat`, `fix`, `style`, `refactor`, `docs`, `chore`. Mensagens em português.

5. **Não use `git push --force` nem reescreva histórico.** Se encontrar conflito ou erro de push, pare e peça orientação.

6. **Linguagem para iniciante.** Ao explicar conceitos técnicos, presuma que o Mateus pode não conhecer o jargão. Use analogias com design quando útil.

7. **Respeite o design system definido.** Não invente cores, tamanhos de fonte ou espaçamentos fora dos tokens definidos na seção 4. Se precisar de algo que não existe, pergunte antes de criar.

8. **Foco em qualidade sobre velocidade.** Este é um projeto de portfólio, peça de comunicação profissional. Código limpo, semântico e acessível tem prioridade sobre rapidez de implementação.

---

## 1. Visão geral do projeto

Portfólio público de Product Designer. Site institucional pessoal, focado em apresentar dois cases bem produzidos e a narrativa profissional do Mateus.

**Stack:**
- Next.js 15+ (App Router)
- TypeScript
- Tailwind CSS v4 (configuração vive no `app/globals.css`, NÃO em `tailwind.config.ts`)
- ESLint flat config
- Hospedagem: Vercel (deploy posterior)

**Estrutura de pastas:**
```
portfolio/
├── app/                          # Páginas (rotas) — App Router
│   ├── globals.css               # CSS global + tokens do design system
│   ├── layout.tsx                # Layout raiz (Nav + Footer + fontes)
│   ├── page.tsx                  # Home
│   ├── sobre/page.tsx            # Página Sobre
│   └── cases/
│       ├── netflix/page.tsx
│       └── premium-league/page.tsx
├── components/                   # Componentes reutilizáveis (PascalCase)
├── content/                      # Conteúdo dos cases (MDX ou TS) — se aplicável
├── public/                       # Arquivos estáticos (imagens, PDF, favicon)
├── CLAUDE.md                     # Este arquivo
└── README.md                     # Documentação do projeto
```

**Rotas:**
- `/` → Home (scroll longo: hero + cases + footer)
- `/sobre` → Página Sobre
- `/cases/netflix` → Case Netflix
- `/cases/premium-league` → Case Premium League
- `/curriculo` → redirect para PDF externo (a definir)

---

## 2. Identidade verbal

### 2.1 Posicionamento

Nome no portfólio: **Mateus Melo**. Posicionamento profissional: **Product Designer** (sem qualificador de senioridade).

Proposta de valor: Product Designer que transita por todas as etapas do processo, com autonomia e método. Diferencial: rigor analítico vindo de background em engenharia, aplicado a UX e produto.

### 2.2 Princípios editoriais

1. **Fala como alguém que resolveu o problema** — não como alguém que quer parecer que resolveu.
2. **Afirma o que se é, sem justificar a trajetória.** A transição (engenharia → UX) é parte da história, não desculpa.
3. **Não menciona tempo de carreira em UX** em nenhum lugar do site. Tempo é métrica fraca de maturidade.
4. **Honesto sobre o tipo de evidência.** Quando dado é qualitativo (teste de usabilidade), apresenta como tal. Não inflar.

### 2.3 Tom de voz

- **Direto e objetivo.** Frases curtas. Sem rodeios.
- **Confiante sem ser arrogante.** Decisões afirmadas com segurança, sem auto-elogio.
- **Estratégico mas humano.** Fala de negócio e dado sem virar relatório.
- **Sem jargão desnecessário.** Termos técnicos só quando essenciais.

### 2.4 Diretrizes de copy

| Evitar | Preferir |
|---|---|
| "Realizei pesquisas qualitativas com usuários" | "Conversei com 8 usuários para entender o problema" |
| "Desenvolvi soluções centradas no usuário" | "Desenhei uma solução validada com teste de usabilidade" |
| "Atuo de forma estratégica e colaborativa" | "Trabalho junto com PM e engenharia" |
| Parágrafos longos e densos | Blocos curtos, uma ideia por vez |
| "Apaixonado por design" | (cortar — não diz nada) |
| "Sempre gostei de pessoas e tecnologia" | (cortar — clichê de transição) |
| "Há X anos atuando em UX" | (cortar — tempo não entra) |

### 2.5 Frase de posicionamento (hero)

Duas linhas em paralelo, com peso visual equivalente, em fundo escuro:

> **Designer que resolve.**
> **Resultados que confirmam.**

Quebra forçada de linha (não dependente de largura).

---

## 3. Arquitetura de informação

### 3.1 Navegação (Nav)

Fixa no topo. Quatro elementos, apenas texto (sem botões, sem CTA, sem ícones decorativos):

- **Mateus Melo** (esquerda, link para `/`)
- **Trabalhos** (scroll suave até a seção de cases na home — comportamento ancorado em hash `#trabalhos`)
- **Sobre** (link para `/sobre`)
- **Currículo** (link externo, abre em nova aba, com indicador `↗` ao final)

**Comportamento da Nav:**
- Em sections claras: fundo `paper` com translucidez sutil + `backdrop-blur`.
- Em sections escuras (hero, footer): fundo transparente, texto claro.
- Altura: ~72px em desktop, ~64px em mobile.

### 3.2 Home (`/`)

Scroll longo, três sections principais:

1. **Hero** (fundo escuro, ocupa viewport quase inteira)
   - Frase de posicionamento como protagonista absoluta.
   - Sem foto. Sem CTAs explícitos.
   - Indicador discreto de scroll no final (opcional).

2. **Trabalhos** (fundo claro, anchor `#trabalhos`)
   - Listagem vertical de cases. Um por bloco grande.
   - Cada card: label "CASE / 01", título grande, descrição curta (1-2 linhas), tags (papel, ano, tipo), imagem/mockup, CTA "Ver case →".
   - Cor sutil de fundo no card, extraída do produto do case.

3. **Footer** (fundo escuro)
   - Três blocos: contato, links externos (LinkedIn, currículo), copyright/nome.

### 3.3 Página Sobre (`/sobre`)

Estratégica. É onde a narrativa de transição é apresentada de forma afirmativa.

**Estrutura:**

1. Abertura curta (uma frase). Ex: "Product Designer com background em engenharia elétrica."
2. Transição (1-2 parágrafos curtos): de onde veio, o que trouxe para UX.
3. Como o Mateus trabalha hoje (parágrafo).
4. O que interessa profissionalmente (parágrafo).
5. Foto (opcional, P&B se usar).
6. Contato direto.

**Restrições:**
- NÃO mencionar tempo de carreira.
- NÃO justificar a transição com clichê.
- Tom afirmativo, não vendedor.

### 3.4 Página de Case (`/cases/[slug]`)

Estrutura padrão. Para cases com dado (Netflix, Premium League), abrir com Resultados:

1. **Hero do case** — mockup composto + título + métrica/resultado principal.
2. **Visão geral** — faixa com papel, empresa, equipe, duração, ano.
3. **Resultados** — métricas em destaque, contexto curto.
4. **Desafio** — contexto e problema.
5. **Processo** — decisões mais interessantes, com raciocínio.
6. **Solução** — entregue + decisões.
7. **Telas / Galeria** — interface em detalhe (após contexto).
8. **Validação** — método de validação.
9. **Aprendizados** (opcional, só se específico e honesto).

Para cases sem dado (futuros), abertura troca para Desafio. Resultados vira "Próximos passos" ou "Hipóteses".

---

## 4. Design system (tokens)

**IMPORTANTE — Tailwind v4:** Toda configuração de tokens vive em `app/globals.css` dentro do bloco `@theme`. NÃO criar `tailwind.config.ts`. Sintaxe:

```css
@import "tailwindcss";

@theme {
  --color-paper: #FAFAFA;
  --color-ink: #0A0A0A;
  /* ... etc */
}
```

**NOTA:** Os valores numéricos abaixo são preliminares — serão calibrados na Fase 3 ao ver no navegador, possivelmente comparando com referências (Marcos Rezende, Uber Conta). As regras de uso são mais estáveis que os valores.

### 4.1 Cores

**Sections claras (maior parte do site):**

| Token Tailwind | Hex | Uso |
|---|---|---|
| `--color-paper` | `#FAFAFA` | Background principal do site |
| `--color-white` | `#FFFFFF` | Backgrounds em contraste, cards elevados |
| `--color-ink` | `#0A0A0A` | Texto principal |
| `--color-gray-900` | `#3D3D3D` | Texto secundário |
| `--color-gray-600` | `#737373` | Texto auxiliar, meta-informação |
| `--color-gray-400` | `#A3A3A3` | Borders, divisores |
| `--color-gray-200` | `#E5E5E5` | Borders sutis, divisores |
| `--color-gray-100` | `#F5F5F5` | Backgrounds sutis (hover states) |

**Sections escuras (hero, footer):**

| Token | Hex | Uso |
|---|---|---|
| `--color-ink` | `#0A0A0A` | Background |
| `--color-ink-soft` | `#171717` | Profundidade interna |
| `--color-paper` | `#FAFAFA` | Texto principal sobre escuro |
| `--color-gray-400` | `#A3A3A3` | Texto secundário sobre escuro |
| `--color-gray-600` | `#737373` | Texto auxiliar sobre escuro |

**Regras de uso:**
- Background padrão do site: `paper`, NÃO branco puro.
- Texto principal em fundo claro: `ink`, NUNCA preto puro (`#000`).
- Sem cor de destaque global. Hierarquia vem de tipografia, espaço e contraste de cinzas.
- Hover de link: aparece sublinhado. Sem mudança de cor.

**Cards de case** podem ter cor sutil de fundo extraída do produto (saturação baixa, luminosidade alta). Definir caso a caso ao ver as imagens reais. Não dominante.

### 4.2 Tipografia

**Família única:** Inter, via `next/font/google` (otimizada). Pesos contrastantes.

**Escala** (rem, base 16px):

| Token | Tamanho | Peso | Uso |
|---|---|---|---|
| `--text-display` | 4rem / 64px | 600 | Hero (frase de posicionamento) |
| `--text-h1` | 2.5rem / 40px | 600 | Título de página, título de case |
| `--text-h2` | 1.75rem / 28px | 500 | Seção de case, seção de home |
| `--text-h3` | 1.25rem / 20px | 500 | Subtítulo, label destacada |
| `--text-metric` | 3.5rem / 56px | 600 | Métricas grandes em "Resultados" |
| `--text-body-lg` | 1.125rem / 18px | 400 | Texto de destaque, intro de case |
| `--text-body` | 1rem / 16px | 400 | Texto corrido padrão |
| `--text-body-sm` | 0.875rem / 14px | 400 | Legendas, meta-informação |
| `--text-caption` | 0.75rem / 12px | 500 | Labels (CASE / 01), tags, uppercase |

**Tracking:**
- Display, H1: `-0.03em`
- Metric: `-0.04em`
- H2, H3: `-0.02em`
- Body: `0`
- Caption: `0.08em` + uppercase

**Leading:**
- Títulos: 1.1
- Body: 1.6
- Body-lg: 1.5

**Mobile:** escala reduz proporcionalmente. Display → ~2.5rem, H1 → ~2rem.

### 4.3 Espaçamento (escala de 4)

| Token | px | Uso |
|---|---|---|
| `--spacing-1` | 4 | Interno apertado |
| `--spacing-2` | 8 | Gap entre próximos |
| `--spacing-3` | 12 | Padding pequeno |
| `--spacing-4` | 16 | Padding padrão |
| `--spacing-6` | 24 | Gap entre blocos próximos |
| `--spacing-8` | 32 | Subseções |
| `--spacing-12` | 48 | Entre seções |
| `--spacing-16` | 64 | Margens generosas |
| `--spacing-24` | 96 | Grandes blocos |
| `--spacing-32` | 128 | Vertical de seções principais |

### 4.4 Border-radius

| Token | px | Uso |
|---|---|---|
| `--radius-none` | 0 | Elementos retos |
| `--radius-sm` | 8 | Tags, badges pequenos |
| `--radius-md` | 12 | Botões, inputs |
| `--radius-lg` | 16 | Cards, containers |
| `--radius-xl` | 24 | Cards grandes (uso pontual) |

NÃO usar `rounded-full` em botões. Cantos retos = sobriedade.

### 4.5 Grid e largura

- Container: max-width 1200px, centrado.
- Padding horizontal: `--spacing-6` mobile, `--spacing-12` desktop.
- Grid: 12 colunas, conteúdo principal em 8 colunas, texto em até 6 colunas (conforto de leitura).

### 4.6 Responsividade

Breakpoints (mobile-first):
- `md` 768px
- `lg` 1024px
- `xl` 1280px

Mobile: coluna única, tipografia reduz, padding lateral `--spacing-6`.

---

## 5. Componentes

Para Fase 3. Não criar todos de uma vez — construir conforme necessário.

**Nav** — fixa, comportamento adaptativo a fundo claro/escuro.
**Footer** — três blocos em fundo escuro.
**Link** — sem estilo padrão, sublinhado no hover. Externos com `↗`.
**Botão** — texto + sublinhado animado no hover (estilo padrão). Sólido apenas se necessário (fundo `ink`, texto `paper`, radius `md`).
**CaseCard** — bloco grande, label + título + descrição + tags + imagem + CTA.
**MetricBlock** — número grande (`--text-metric`), descrição curta, contexto.
**Hero** — fundo escuro, frase como protagonista.

### Convenções

- Nomes de componentes em PascalCase: `Nav.tsx`, `CaseCard.tsx`.
- Componentes em `/components/`.
- Páginas usam convenção do App Router: `app/[rota]/page.tsx`.

---

## 6. Convenções técnicas

### 6.1 Git

- Branch principal: `main`.
- Commits: Conventional Commits em português (`feat: adiciona Nav`, `style: ajusta hero`).
- Não usar `git push --force`.
- Commitar com frequência. Cada componente ou ajuste significativo merece um commit.

### 6.2 Código

- **TypeScript estrito.** Não usar `any` sem justificativa.
- **Componentes funcionais.** Sem classes.
- **Server Components por padrão.** Adicionar `"use client"` só quando necessário (interatividade, hooks).
- **Imports com alias `@/`** (configurado em `tsconfig.json`).
- **Sem console.log em código final.** Remover antes de commitar.

### 6.3 Acessibilidade (mínima desde o início)

- HTML semântico (`<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`).
- Hierarquia de headings correta (um `h1` por página).
- Contraste adequado (cinzas claros sobre fundo escuro precisam atender AA mínimo).
- Imagens com `alt` descritivo.
- Links com texto significativo (evitar "clique aqui").
- Foco visível (não remover `outline` sem substituir).

### 6.4 Imagens

- Imagens de case em `/public/cases/[slug]/`.
- Usar `next/image` para otimização.
- Sempre incluir `width`, `height` e `alt`.

---

## 7. O que NÃO está no escopo da V1

Para não cair na tentação de implementar antes da hora:

- Modo escuro global (site é light com sections escuras pontuais)
- Animações complexas (transições e fades sutis OK)
- Internacionalização (português apenas)
- Blog ou seção de escritos
- CMS (conteúdo dos cases vem direto no código por enquanto)
- Analytics avançado
- Mais de 2 cases

---

## 8. Referências de inspiração visual

Documentar para contexto. Não copiar literalmente:

- **Marcos Rezende** (marcosrezende.com) — linguagem visual dos cases (ritmo, hierarquia, tratamento de texto/dados), listagem de cases na home.
- **Uber Conta** (ubercontabrasil.com.br) — footer, paleta neutra, organização minimalista.
- **Naatz** (naatz.co/projects/ocalendar) — métricas grandes ao final, mockup com vídeo embedado.
- **Shiro** — composições visuais com mockups + elementos do produto (uso comedido).

---

## 9. Cases do MVP

| Case | Tipo | Dados | Abertura |
|---|---|---|---|
| Netflix | Estudo | Qualitativos + questionário + teste de usabilidade | Resultados |
| Premium League | Real | Antes/depois + teste de usabilidade | Resultados |

Conteúdo a ser produzido na Fase 3 (não inventar agora).

---

## 10. Glossário de decisões importantes

Lugar para registrar decisões que tomamos durante o projeto, com data e razão. Atualizar conforme avançamos.

- **2026-05 — Stack:** Next.js 15 + Tailwind v4 + TypeScript. Razão: stack moderna, bem suportada pelo Claude Code, deploy simples no Vercel.
- **2026-05 — Sem cor de destaque global:** identidade vem de tipografia, espaço e cinzas. Cor sutil apenas nos cards de case.
- **2026-05 — Sections âncora escuras:** hero e footer em fundo escuro, resto do site claro.
- **2026-05 — Tempo de carreira não aparece no site:** decisão consciente. Maturidade demonstrada pelo conteúdo dos cases.
- **2026-05 — Adiada a Nav adaptativa:** testes mostraram que nenhuma das abordagens (transparente, glassmorphism, bg-ink sólido) chegou a um resultado satisfatório sobre a Hero escura. Decisão de manter a Nav simples (paper translúcido + ink) por ora e revisitar no polimento da Fase 4.
