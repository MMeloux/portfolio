import Link from "next/link";

export default function Nav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-16 md:h-[72px] bg-paper/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-[1200px] mx-auto h-full px-6 md:px-12 flex items-center justify-between">
        <Link
          href="/"
          className="text-body font-medium text-ink hover:underline"
        >
          Mateus Melo
        </Link>

        <ul className="flex items-center gap-8">
          <li>
            <Link
              href="/#trabalhos"
              className="text-body text-ink hover:underline"
            >
              Trabalhos
            </Link>
          </li>
          <li>
            <Link
              href="/sobre"
              className="text-body text-ink hover:underline"
            >
              Sobre
            </Link>
          </li>
          <li>
            <a
              href="/curriculo.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="text-body text-ink hover:underline"
            >
              Currículo<span className="ml-1">↗</span>
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
