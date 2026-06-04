type Props = {
  legenda: string
  altura?: string
}

export default function ArtefatoPlaceholder({ legenda, altura = "h-64" }: Props) {
  return (
    <div className={`${altura} w-full flex items-center justify-center rounded-lg border border-gray-200 bg-gray-100`}>
      <span className="text-caption font-medium tracking-caption uppercase text-gray-600">
        {legenda}
      </span>
    </div>
  )
}
