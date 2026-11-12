import type { Corrida } from "../dtos/corrida";

type CorridasCardProps = {
  corrida: Corrida;
};

export function CorridasCard({ corrida }: CorridasCardProps) {
  return (
    <li className="flex items-center gap-3 md:shrink-0 md:gap-0">


      {corrida.id !== 1 && (
        <span
          aria-hidden="true"
          className="hidden border-t-2 border-dashed border-white md:block md:w-12 md:shrink-0"
        />
      )}

      <article className="flex flex-1 items-center gap-3 border-2 border-white p-2 md:h-44 md:w-40 md:flex-none md:flex-col md:justify-center md:p-3 md:text-center">
        <div className="grid size-12 shrink-0 place-items-center border-2 border-white">
          <img src={`${import.meta.env.BASE_URL}/${corrida.imagesource}`} alt="" width={32} height={32} className="size-11" />
        </div>
        <div>
          <p className="text-xs font-bold uppercase tracking-wide text-pink-400">
            Dia {corrida.data}
          </p>
          <h3 className="text-base font-extrabold">{corrida.nome}</h3>
          <p className="text-sm text-neutral-300">{corrida.local}</p>
          <p className="text-sm text-neutral-300">Horário: {corrida.horario}</p>
        </div>
      </article>
    </li>
  )
}