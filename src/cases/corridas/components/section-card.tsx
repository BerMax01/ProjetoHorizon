import { useCorrida } from "../hooks/use-corridas";

type SectionCardProps = {
  id: number|null;
};

export function SectionCard({ id }: SectionCardProps) {
    const corrida = useCorrida().find((c) => c.id === id);
    return (
       <section
      aria-label="Informações da corrida"
      className="hidden border-2 border-white p-4 text-white md:block md:min-h-60 lg:p-6"
    >
      {corrida ? (
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6">
          <div className="grid size-24 shrink-0 place-items-center border-2 border-white">
            <img
              src={`${import.meta.env.BASE_URL}/${corrida.imagesource}`}
              alt=""
              width={64}
              height={64}
              className="size-16"
            />
          </div>

          <div className="flex flex-col gap-2">
            <h3 className="text-3xl font-extrabold leading-tight lg:text-4xl">
              {corrida.nome}
            </h3>
             <p className="text-2xl font-bold uppercase tracking-wide text-pink-400">
              Dia {corrida.data}
            </p>
            <p className="font-bold max-w-prose text-base text-neutral-300">
              {corrida.descricao}
            </p>
          </div>
        </div>
      ) : (
        <p className="text-neutral-400">
          Selecione uma corrida para ver os detalhes.
        </p>
      )}
    </section>
    )
}
