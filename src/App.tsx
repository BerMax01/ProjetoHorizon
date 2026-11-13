// Fase 2: página inteira em um único arquivo, sem dados.

import { useState } from "react"
import { CorridasCard } from "./cases/corridas/components/corridas-card"
import { useCorrida } from "./cases/corridas/hooks/use-corridas"
import { PulseirasCard } from "./cases/pulseiras/components/pulseiras-card"
import { usePulseira } from "./cases/pulseiras/hooks/use-pulseiras"
import { Footer } from "./components/layout/footer"
import { Header } from "./components/layout/header"
import { SectionCard } from "./cases/corridas/components/section-card"


function App() {
  const [selectedCorridaId, setSelectedCorridaId] = useState<number | null>(null);
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-white">
      <div className="flex flex-col gap-4 p-4 md:gap-5 md:p-6 lg:p-8">

        <Header />

        {/* MAIN */}
        <main className="flex flex-col gap-4 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-6">

          {/* LISTAS */}
          <section aria-labelledby="titulo-programacao" className="lg:col-span-2">
            <h2 id="titulo-programacao" className="mb-2 text-xl font-extrabold">
              Programação das corridas
            </h2>
            <div className="border-2 border-white p-3 md:p-5">
              <ol className="flex max-h-96 flex-col gap-3 overflow-y-auto md:max-h-none md:flex-row md:items-center md:gap-0 md:overflow-x-auto md:overflow-y-hidden md:pb-3">

                {useCorrida().map((corrida) => (
                  <CorridasCard
                    key={corrida.id}
                    corrida={corrida}
                    selected={corrida.id === selectedCorridaId}
                    onSelect={setSelectedCorridaId}
                  />
                ))}
              </ol>
            </div>

          </section>

          <SectionCard id={selectedCorridaId} />

          {/* LISTA 2: Pulseiras */}
          <section aria-labelledby="titulo-pulseiras" className="flex flex-col">
            <h2 id="titulo-pulseiras" className="mb-2 text-xl font-extrabold">
              Escolha sua pulseira do Horizon
            </h2>
            <ul className="flex snap-x gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible md:pb-0 lg:flex-1">

              {/* Pulseiras */}

              {usePulseira().map((pulseira) => (
                <PulseirasCard key={pulseira.id} pulseira={pulseira} />
              ))}

            </ul>
          </section>
        </main>

        {/* FOOTER */}
        <Footer />

      </div>
    </div>
  )
}

export default App
