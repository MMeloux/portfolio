import ArtefatoPlaceholder from "@/components/ArtefatoPlaceholder"

type Props = {
  badge?: string
  titulo: string
  subtitulo: string
  mockup?: { legenda: string }
}

export default function CaseHero({ badge, titulo, subtitulo, mockup }: Props) {
  return (
    <section className="bg-paper pt-32 pb-16 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        {badge && (
          <span className="mb-6 inline-block text-caption font-medium tracking-caption uppercase text-gray-600">
            {badge}
          </span>
        )}
        <h1 className="text-[2.25rem] md:text-case-title font-semibold leading-tight tracking-case-title text-ink mb-4">
          {titulo}
        </h1>
        <p className="text-body-lg leading-body-lg text-gray-900">
          {subtitulo}
        </p>

        {mockup && (
          <div className="mt-16">
            <ArtefatoPlaceholder legenda={mockup.legenda} altura="h-[480px]" />
          </div>
        )}
      </div>
    </section>
  )
}
