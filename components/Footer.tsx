export default function Footer() {
  return (
    <footer className="bg-ink px-6 md:px-12 py-16 md:py-24">
      <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <h2 className="text-caption tracking-caption uppercase text-gray-600">
            Contato
          </h2>
          <a
            href="mailto:eng.mmelo13@gmail.com"
            className="mt-4 inline-block text-body text-paper hover:underline"
          >
            eng.mmelo13@gmail.com
          </a>
        </div>

        <div>
          <h2 className="text-caption tracking-caption uppercase text-gray-600">
            Onde me encontrar
          </h2>
          <ul className="mt-4 flex flex-col gap-2">
            <li>
              <a
                href="https://www.linkedin.com/in/mateus-melo-uxdesigner/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body text-paper hover:underline"
              >
                LinkedIn<span className="ml-1">↗</span>
              </a>
            </li>
            <li>
              <a
                href="/curriculo.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="text-body text-paper hover:underline"
              >
                Currículo<span className="ml-1">↗</span>
              </a>
            </li>
          </ul>
        </div>

        <div className="flex flex-col">
          <p className="text-body-lg font-medium text-paper">Mateus Melo</p>
          <p className="text-body text-gray-400">Product Designer</p>
          <p className="mt-8 text-body-sm text-gray-600">© 2026</p>
        </div>
      </div>
    </footer>
  );
}
