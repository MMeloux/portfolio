import type { ReactNode } from "react"

type Props = {
  titulo: string
  children: ReactNode
}

export default function CaseSection({ titulo, children }: Props) {
  return (
    <section className="bg-paper py-16 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-h2 font-medium tracking-h2 leading-tight text-ink mb-8">
          {titulo}
        </h2>
        {children}
      </div>
    </section>
  )
}
