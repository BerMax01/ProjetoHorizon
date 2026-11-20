import { PulseirasCard } from "../../cases/pulseiras/components/pulseiras-card";
import { usePulseira } from "../../cases/pulseiras/hooks/use-pulseiras";

export function ListaPulseiras() {
    const { pulseiras, loading, error } = usePulseira();

    return (
        <section aria-labelledby="titulo-pulseiras" className="flex flex-col">
            <h2 id="titulo-pulseiras" className="mb-2 text-xl font-extrabold">
                Escolha sua pulseira do Horizon
            </h2>
            <ul className="flex snap-x gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible md:pb-0 lg:flex-1">

                {/* Pulseiras */}

                {loading && <li className="text-neutral-400">Carregando...</li>}

                {error && <li className="text-red-500">Erro: {error}</li>}

                {pulseiras.map((pulseira) => (
                    <PulseirasCard key={pulseira.id} pulseira={pulseira} />
                ))}

            </ul>
        </section>
    )
}