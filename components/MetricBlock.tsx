type Props = {
  numero: string
  descricao: string
  contexto: string
}

export default function MetricBlock({ numero, descricao, contexto }: Props) {
  return (
    <div className="flex flex-col">
      <span className="text-metric font-semibold tracking-metric leading-tight text-ink">
        {numero}
      </span>
      <p className="text-body text-ink mt-2">
        {descricao}
      </p>
      <p className="text-body-sm text-gray-600 mt-1">
        {contexto}
      </p>
    </div>
  )
}
