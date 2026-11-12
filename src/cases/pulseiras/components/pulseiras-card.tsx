import type { Pulseira } from "../dtos/pulseiras";

type PulseirasCardProps = {
    pulseira: Pulseira;
}

export function PulseirasCard({ pulseira }: PulseirasCardProps) {
    return (
        <li className="w-40 shrink-0 snap-start md:w-auto">
            <article className="flex h-full flex-col gap-2 border-2 border-white p-3 lg:p-2">
                <div className="grid h-28 place-items-center rounded bg-white md:h-32 lg:h-24">
                    <img
                        src={`${import.meta.env.BASE_URL}${pulseira.imagesource}`} 
                        alt= ""
                        width={112}
                        height={112}
                        className="size-28 md:size-28 lg:size-20"
                    />
                </div>
                <h3 className="text-base font-extrabold lg:text-sm">{pulseira.nome}</h3>
                <p className="text-sm text-neutral-300">{pulseira.descricao}</p>
                <p className="mt-auto text-lg font-extrabold text-horizon-orange">R$ {pulseira.preco.toFixed(2).replace('.', ',')}</p>
                <button
                    type="button"
                    className="min-h-11 cursor-pointer rounded bg-linear-to-r from-horizon-red to-horizon-orange font-extrabold text-neutral-950"
                >
                    Comprar
                </button>
            </article>
        </li>
    );
}   