import { PulseirasCard } from "../../cases/pulseiras/components/pulseiras-card";
import { PulseirasCardSkeleton } from "../../cases/pulseiras/components/pulseiras-card-ghost";
import { usePulseira } from "../../cases/pulseiras/hooks/use-pulseiras";

export function ListaPulseiras() {
    const { pulseiras, loading, error } = usePulseira();

    return (
        <section aria-labelledby="titulo-pulseiras" className="flex flex-col">
            <h2 id="titulo-pulseiras" className="mb-2 text-xl font-extrabold">
                Escolha sua pulseira do Horizon
            </h2>
            <ul className={`flex snap-x gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible md:pb-0 lg:flex-1 ${loading ? "overflow-x-hidden" : ""}`}>

                {/* Pulseiras */}

               {loading && (
                    <>
                        {Array.from({ length: 4 }).map((_, index) => (
                            <PulseirasCardSkeleton key={index} />
                        ))}
                    </>
                )}

                {error && <li className="w-full text-center text-red-600 text-lg font-bold py-6">Erro: {error}</li>}

                {pulseiras.map((pulseira) => (
                    <PulseirasCard key={pulseira.id} pulseira={pulseira} />
                ))}

            </ul>
        </section>
    )
}