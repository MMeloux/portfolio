import type { CSSProperties } from "react"

type MetaItem = {
  label: string
  valor: string
}

type Props = {
  itens: MetaItem[]
}

export default function CaseMeta({ itens }: Props) {
  // --meta-cols é consumido pela classe .case-meta-grid em globals.css.
  // Toda a lógica do grid (display, colunas, gap, breakpoint) vive nessa classe.
  const estiloColunas = { "--meta-cols": itens.length } as CSSProperties

  return (
    <div className="bg-paper px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto py-8">
        <dl className="case-meta-grid" style={estiloColunas}>
          {itens.map((item) => (
            <div key={item.label} className="flex flex-col gap-1">
              <dt className="text-caption font-medium tracking-caption uppercase text-gray-600">
                {item.label}
              </dt>
              <dd className="text-body-sm text-ink">
                {item.valor}
              </dd>
            </div>
          ))}
        </dl>
      </div>
    </div>
  )
}
