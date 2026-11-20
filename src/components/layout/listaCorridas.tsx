import { CorridasCardSkeleton } from "../../cases/corridas/components/corrida-card-ghost";
import { CorridasCard } from "../../cases/corridas/components/corridas-card";
import { useCorrida } from "../../cases/corridas/hooks/use-corridas";

type Props = {
    selectedCorridaId: number | null;
    setSelectedCorridaId: (id: number | null) => void;
};

export function ListaCorridas({
    selectedCorridaId,
    setSelectedCorridaId
}: Props) {
    const { corridas, loading, error } = useCorrida();

    return (
        <section aria-labelledby="titulo-programacao" className="lg:col-span-2">
            <h2 id="titulo-programacao" className="mb-2 text-xl font-extrabold">
                Programação das corridas
            </h2>

            <div className="border-2 border-white p-3 md:p-5">
                <ol className={`flex max-h-96 flex-col gap-3 overflow-y-auto md:max-h-none md:flex-row md:items-center md:gap-0 md:overflow-x-auto md:overflow-y-hidden md:pb-3 ${loading ? "overflow-y-hidden md:overflow-x-hidden" : ""}`}>

                    {loading && (
                        <>
                            {Array.from({ length: 10 }).map((_, index) => (
                                <CorridasCardSkeleton key={index} showConnector={index !== 0} />
                            ))}
                        </>
                    )}

                    {error && <li className="w-full text-center text-red-600 text-lg font-bold py-6">Erro: {error}</li>}

                    {corridas.map((corrida) => (
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
    );
}