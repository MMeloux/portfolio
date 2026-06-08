// TEMPORÁRIO — página de validação visual dos componentes de case
// Remover antes do deploy em produção

import CaseHero from "@/components/CaseHero"
import CaseMeta from "@/components/CaseMeta"
import CaseSection from "@/components/CaseSection"
import MetricBlock from "@/components/MetricBlock"
import Quote from "@/components/Quote"
import ArtefatoPlaceholder from "@/components/ArtefatoPlaceholder"

export default function PreviewPage() {
  return (
    <main>
      {/* 1. Hero do case — conteúdo real do Netflix */}
      <CaseHero
        badge="PROJETO CONCEITUAL"
        titulo="Ajudando os usuários da Netflix a escolher o que assistir"
        subtitulo="Pesquisa com usuários, priorização estratégica e duas funcionalidades aprovadas por 8 em 10 usuários em teste de usabilidade."
        mockup={{ legenda: "Mockup do case Netflix" }}
      />

      {/* 2. Visão geral — CaseMeta com 4 campos */}
      <CaseMeta
        itens={[
          { label: "Atuação", valor: "Product Discovery · UX Research · UI Design" },
          { label: "Equipe", valor: "2 Product Designers" },
          { label: "Ferramentas", valor: "Figma, FigJam, Maze, Google Forms" },
          { label: "Duração", valor: "6 meses" },
        ]}
      />

      {/* 3. O Desafio — CaseSection com parágrafo simples */}
      <CaseSection titulo="O Desafio">
        <p className="text-body-lg leading-body-lg text-gray-900 max-w-[720px]">
          Frequentemente as pessoas passam mais tempo escolhendo o que assistir do que de fato assistindo. Antes de propor uma solução, era preciso entender se essa dor era comum, como ela aparecia na rotina e qual o impacto para o negócio.
        </p>
      </CaseSection>

      {/* 4. Resultados — três MetricBlock lado a lado + Quote */}
      <CaseSection titulo="Resultados">
        {/* Distribuição provisória só para o preview — decidiremos a final depois */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          <MetricBlock
            numero="80%"
            descricao="declararam intenção de uso semanal"
            contexto="Validado em teste de usabilidade com 26 usuários"
          />
          <MetricBlock
            numero="100%"
            descricao="completaram o fluxo principal"
            contexto="Validado em teste de usabilidade com 26 usuários"
          />
          <MetricBlock
            numero="4,5/5"
            descricao="de satisfação média (CSAT)"
            contexto="Validado em teste de usabilidade com 26 usuários"
          />
        </div>
        <Quote
          texto="Acabou a novela para escolher filme. Eu usaria muito isso, ajuda a resolver o impasse."
          atribuicao="participante do teste"
        />
      </CaseSection>

      {/* Placeholders soltos para inspeção visual do componente isolado */}
      <div className="bg-paper px-6 md:px-12 pb-16 pt-8">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-4">
          <ArtefatoPlaceholder legenda="Matriz CSD" />
          <ArtefatoPlaceholder legenda="Mapa de jornada" altura="h-32" />
        </div>
      </div>
    </main>
  )
}
