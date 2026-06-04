// TEMPORÁRIO — página de validação visual dos componentes de case
// Remover antes do deploy em produção

import CaseHero from "@/components/CaseHero"
import CaseMeta from "@/components/CaseMeta"
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
