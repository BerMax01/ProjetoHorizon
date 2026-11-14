import { useCorrida } from "../hooks/use-corridas";

type SectionCardProps = {
  id: number | null;
};

const estilosLinha = [
  "font-bold text-white",         // linha 1
  "font-normal text-neutral-300", // linha 2
  "w-fit font-bold bg-gradient-to-r from-pink-500 to-orange-500 bg-clip-text text-transparent",    // linha 3
];

export function SectionCard({ id }: SectionCardProps) {
  const corridas = useCorrida();
  const corrida = corridas.find((c) => c.id === id);
  const linhas = corrida?.descricao.split("\n") ?? [];

  return (
    <section
      aria-label="Informações da corrida"
      className="hidden border-2 border-white p-4 text-white md:block md:min-h-60 lg:p-6"
    >
      {corrida ? (
        <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:gap-6">
          <h3 className="text-3xl font-extrabold leading-tight lg:hidden">
            {corrida.nome}
          </h3>

          <div className="flex items-start gap-4 lg:contents">
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
              <h3 className="hidden text-4xl font-extrabold leading-tight lg:block">
                {corrida.nome}
              </h3>
              <p className="text-xl font-bold uppercase tracking-wide text-pink-400 lg:text-2xl">
                Dia {corrida.data}
              </p>

              <div className="flex flex-col gap-1">
                {linhas.map((linha, i) => (
                  <p
                    key={i}
                    className={`max-w-prose text-base ${estilosLinha[i] ?? "text-neutral-300"}`}
                  >
                    {linha}
                  </p>
                ))}
              </div>

              <p className="text-base font-semibold text-neutral-200">
                Horário: {corrida.horario}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-neutral-400">
          Selecione uma corrida para ver os detalhes.
        </p>
      )}
    </section>
  );
}