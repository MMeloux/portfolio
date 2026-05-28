import CaseCard from "./CaseCard";

export default function Trabalhos() {
  return (
    <section id="trabalhos" className="bg-paper px-6 md:px-12 py-24 md:py-32">
      <div className="max-w-[1200px] mx-auto">
        <header className="text-center">
          <h2 className="text-h1 leading-tight font-semibold text-ink">
            Trabalhos
          </h2>
          <p className="mt-4 text-body-lg text-gray-600 max-w-prose mx-auto">
            Estudos e projetos onde apliquei pesquisa, processo e validação.
          </p>
        </header>

        <div className="mt-12 md:mt-16 flex flex-col gap-12">
          <CaseCard
            number="01"
            title="Netflix"
            description="Redesenho da experiência de descoberta de conteúdo na home, com validação por teste de usabilidade."
            tags={["Product Designer", "Estudo", "2024"]}
            slug="netflix"
          />
          <CaseCard
            number="02"
            title="Premium League"
            description="Reformulação do fluxo de inscrição em campeonatos, com antes/depois e validação por teste de usabilidade."
            tags={["Product Designer", "Real", "2025"]}
            slug="premium-league"
          />
        </div>
      </div>
    </section>
  );
}
