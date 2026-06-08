type Props = {
  texto: string
  atribuicao: string
}

export default function Quote({ texto, atribuicao }: Props) {
  return (
    <figure>
      <blockquote className="text-body-lg leading-body-lg text-ink italic">
        “{texto}”
      </blockquote>
      <figcaption className="text-body-sm text-gray-600 mt-3">
        — {atribuicao}
      </figcaption>
    </figure>
  )
}
