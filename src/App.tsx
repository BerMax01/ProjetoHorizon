// Fase 2: página inteira em um único arquivo, sem dados.


function App() {
  return (
    <div className="min-h-screen bg-neutral-950 font-sans text-white">
      <div className="flex flex-col gap-4 p-4 md:gap-5 md:p-6 lg:p-8">
        {/* Header - Celuar, Tablet e Desktop */}
        <header className="flex items-center gap-4 border-2 border-white p-3 md:w-fit md:max-w-md">
          <img
            src="src/assets/LogoForza.webp"
            alt="Logo do Festival do Horizon"
            width={64}
            height={64}
            className="size-16 shrink-0 md:size-20"
          />
          <div>
            <h1 className="text-2xl font-extrabold md:text-3xl">Festival do Horizon</h1>
            <p className="mt-1 text-sm text-neutral-300">
              Venha participar das corridas do Horizon
            </p>
          </div>
        </header>

        {/* MAIN */}
        <main className="flex flex-col gap-4 md:gap-5 lg:grid lg:grid-cols-2 lg:gap-6">

          {/* LISTA 1: */}
          <section aria-labelledby="titulo-programacao" className="lg:col-span-2">
            <h2 id="titulo-programacao" className="mb-2 text-xl font-extrabold">
              Programação das corridas
            </h2>
            <div className="border-2 border-white p-3 md:p-5">
              <ol className="flex max-h-96 flex-col gap-3 overflow-y-auto md:max-h-none md:flex-row md:items-center md:gap-0 md:overflow-x-auto md:overflow-y-hidden md:pb-3">

                {/* Dia 1 */}
                <li className="flex items-center gap-3 md:shrink-0 md:gap-0">
                  
                  <article className="flex flex-1 items-center gap-3 border-2 border-white p-2 md:h-44 md:w-40 md:flex-none md:flex-col md:justify-center md:p-3 md:text-center">
                    <div className="grid size-12 shrink-0 place-items-center border-2 border-white">
                      <img src="src/assets/Abertura.png" alt="" width={32} height={32} className="size-11" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-pink-400">
                        Dia 1
                      </p>
                      <h3 className="text-base font-extrabold">Abertura</h3>
                      <p className="text-sm text-neutral-300">Autódromo FHF</p>
                      <p className="text-sm text-neutral-300">Horário: 15:00</p>
                    </div>
                  </article>
                </li>

                {/* Dia 2 */}
                <li className="flex items-center gap-3 md:shrink-0 md:gap-0">
                  <span
                    aria-hidden="true"
                    className="hidden border-t-2 border-dashed border-white md:block md:w-12 md:shrink-0"
                  />
                  
                  <article className="flex flex-1 items-center gap-3 border-2 border-white p-2 md:h-44 md:w-40 md:flex-none md:flex-col md:justify-center md:p-3 md:text-center">
                    <div className="grid size-12 shrink-0 place-items-center border-2 border-white">
                      <img src="src/assets/Passeio.png" alt="" width={32} height={32} className="size-11" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-pink-400">
                        Dia 2
                      </p>
                      <h3 className="text-base font-extrabold">Passeio Horizon</h3>
                      <p className="text-sm text-neutral-300">Local: Centro MHC</p>
                      <p className="text-sm text-neutral-300">Horário: 14:00</p>
                    </div>
                  </article>
                </li>

                {/* Dia 3 */}
                <li className="flex items-center gap-3 md:shrink-0 md:gap-0">
                  <span
                    aria-hidden="true"
                    className="hidden border-t-2 border-dashed border-white md:block md:w-12 md:shrink-0"
                  />
                  
                  <article className="flex flex-1 items-center gap-3 border-2 border-white p-2 md:h-44 md:w-40 md:flex-none md:flex-col md:justify-center md:border-white md:p-3 md:text-center">
                    <div className="grid size-12 shrink-0 place-items-center border-2 border-white">
                      <img src="src/assets/Offroad.png" alt="" width={32} height={32} className="size-11" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-pink-400">
                        Dia 3
                      </p>
                      <h3 className="text-base font-extrabold">Off-Road</h3>
                      <p className="text-sm text-neutral-300">Local: Deserto MHC</p>
                      <p className="text-sm text-neutral-300">Horário: 16:00</p>
                    </div>
                  </article>
                </li>

                {/* Dia 4 */}
                <li className="flex items-center gap-3 md:shrink-0 md:gap-0">
                  <span
                    aria-hidden="true"
                    className="hidden border-t-2 border-dashed border-white md:block md:w-12 md:shrink-0"
                  />
                  
                  <article className="flex flex-1 items-center gap-3 border-2 border-white p-2 md:h-44 md:w-40 md:flex-none md:flex-col md:justify-center md:p-3 md:text-center">
                    <div className="grid size-12 shrink-0 place-items-center border-2 border-white">
                      <img src="src/assets/Drift.png" alt="" width={32} height={32} className="size-11" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-pink-400">
                        Dia 4
                      </p>
                      <h3 className="text-base font-extrabold">Drift</h3>
                      <p className="text-sm text-neutral-300">Local: Arena Principal</p>
                      <p className="text-sm text-neutral-300">Horário: 17:00</p>
                    </div>
                  </article>
                </li>

                {/* Dia 5 */}
                <li className="flex items-center gap-3 md:shrink-0 md:gap-0">
                  <span
                    aria-hidden="true"
                    className="hidden border-t-2 border-dashed border-white md:block md:w-12 md:shrink-0"
                  />
                  <article className="flex flex-1 items-center gap-3 border-2 border-white p-2 md:h-44 md:w-40 md:flex-none md:flex-col md:justify-center md:p-3 md:text-center">
                    <div className="grid size-12 shrink-0 place-items-center border-2 border-white">
                      <img src="src/assets/Montanhas.png" alt="" width={32} height={32} className="size-11" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-pink-400">
                        Dia 5
                      </p>
                      <h3 className="text-base font-extrabold">Montanha</h3>
                      <p className="text-sm text-neutral-300">Local: Pico MHC</p>
                      <p className="text-sm text-neutral-300">Horário: 18:00</p>
                    </div>
                  </article>
                </li>

                {/* Dia 6 */}
                <li className="flex items-center gap-3 md:shrink-0 md:gap-0">
                  <span
                    aria-hidden="true"
                    className="hidden border-t-2 border-dashed border-white md:block md:w-12 md:shrink-0"
                  />
                  
                  <article className="flex flex-1 items-center gap-3 border-2 border-white p-2 md:h-44 md:w-40 md:flex-none md:flex-col md:justify-center md:p-3 md:text-center">
                    <div className="grid size-12 shrink-0 place-items-center border-2 border-white">
                      <img src="src/assets/Passeio.png" alt="" width={32} height={32} className="size-11" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-pink-400">Dia 6</p>
                      <h3 className="text-base font-extrabold">Passeio Horizon</h3>
                      <p className="text-sm text-neutral-300">Local: Guadalupe</p>
                      <p className="text-sm text-neutral-300">Horário: 21:00</p>
                    </div>
                  </article>
                </li>

                {/* Dia 7 */}
                <li className="flex items-center gap-3 md:shrink-0 md:gap-0">
                  <span
                    aria-hidden="true"
                    className="hidden border-t-2 border-dashed border-white md:block md:w-12 md:shrink-0"
                  />
                  
                  <article className="flex flex-1 items-center gap-3 border-2 border-white p-2 md:h-44 md:w-40 md:flex-none md:flex-col md:justify-center md:p-3 md:text-center">
                    <div className="grid size-12 shrink-0 place-items-center border-2 border-white">
                      <img src="src/assets/Monumentos.png" alt="" width={32} height={32} className="size-11" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-pink-400">Dia 7</p>
                      <h3 className="text-base font-extrabold">Monumentos</h3>
                      <p className="text-sm text-neutral-300">Local: Anjo MCH</p>
                      <p className="text-sm text-neutral-300">Horário: 09:00</p>
                    </div>
                  </article>
                </li>

                {/* Dia 8 */}
                <li className="flex items-center gap-3 md:shrink-0 md:gap-0">
                  <span
                    aria-hidden="true"
                    className="hidden border-t-2 border-dashed border-white md:block md:w-12 md:shrink-0"
                  />
                  
                  <article className="flex flex-1 items-center gap-3 border-2 border-white p-2 md:h-44 md:w-40 md:flex-none md:flex-col md:justify-center md:p-3 md:text-center">
                    <div className="grid size-12 shrink-0 place-items-center border-2 border-white">
                      <img src="src/assets/Alex.png" alt="" width={32} height={32} className="size-11" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-pink-400">Dia 8</p>
                      <h3 className="text-base font-extrabold">Corrida Alex</h3>
                      <p className="text-sm text-neutral-300">Local: Centro MHC</p>
                      <p className="text-sm text-neutral-300">Horário: 17:00</p>
                    </div>
                  </article>
                </li>

                {/* Dia 9 */}
                <li className="flex items-center gap-3 md:shrink-0 md:gap-0">
                  <span
                    aria-hidden="true"
                    className="hidden border-t-2 border-dashed border-white md:block md:w-12 md:shrink-0"
                  />
                  
                  <article className="flex flex-1 items-center gap-3 border-2 border-white p-2 md:h-44 md:w-40 md:flex-none md:flex-col md:justify-center md:p-3 md:text-center">
                    <div className="grid size-12 shrink-0 place-items-center border-2 border-white">
                      <img src="src/assets/Rami.png" alt="" width={32} height={32} className="size-11" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-pink-400">Dia 9</p>
                      <h3 className="text-base font-extrabold">Corrida Rami</h3>
                      <p className="text-sm text-neutral-300">Local: Horizon Palace</p>
                      <p className="text-sm text-neutral-300">Horário: 11:00</p>
                    </div>
                  </article>
                </li>

                {/* Dia 10 */}
                <li className="flex items-center gap-3 md:shrink-0 md:gap-0">
                  <span
                    aria-hidden="true"
                    className="hidden border-t-2 border-dashed border-white md:block md:w-12 md:shrink-0"
                  />
                  
                  <article className="flex flex-1 items-center gap-3 border-2 border-white p-2 md:h-44 md:w-40 md:flex-none md:flex-col md:justify-center md:p-3 md:text-center">
                    <div className="grid size-12 shrink-0 place-items-center border-2 border-white">
                      <img src="src/assets/Final.png" alt="" width={32} height={32} className="size-11" />
                    </div>
                    <div>
                      <p className="text-xs font-bold uppercase tracking-wide text-pink-400">Dia 10</p>
                      <h3 className="text-base font-extrabold">Corrida Final do Horizon</h3>
                      <p className="text-sm text-neutral-300">Local: Nome do local</p>
                      <p className="text-sm text-neutral-300">Horário: 15:00</p>
                    </div>
                  </article>
                </li>
              </ol>
            </div>

          </section>

          {/* INFORMAÇÕES DA LISTA 1: Não aparece no celular*/}
          <section
            aria-label="Informações da corrida"
            className="hidden border-2 border-white p-4 md:block md:min-h-60 lg:p-6"
          >
            {/*informações da corrida escolhida (não ta feito)*/}
          </section>

          {/* LISTA 2: Pulseiras */}
          <section aria-labelledby="titulo-pulseiras" className="flex flex-col">
            <h2 id="titulo-pulseiras" className="mb-2 text-xl font-extrabold">
              Escolha sua pulseira do Horizon
            </h2>
            <ul className="flex snap-x gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-4 md:overflow-visible md:pb-0 lg:flex-1">

              {/* Pulseira Básica */}
              <li className="w-40 shrink-0 snap-start md:w-auto">
                <article className="flex h-full flex-col gap-2 border-2 border-white p-3 lg:p-2">
                  <div className="grid h-28 place-items-center rounded bg-white md:h-32 lg:h-24">
                    <img
                      src="src/assets/PulseiraVerde.png"
                      alt="Pulseira Básica, verde"
                      width={112}
                      height={112}
                      className="size-28 md:size-28 lg:size-20"
                    />
                  </div>
                  <h3 className="text-base font-extrabold lg:text-sm">Pulseira Básica</h3>
                  <p className="text-sm text-neutral-300">Arquibancada geral</p>
                  <p className="mt-auto text-lg font-extrabold text-horizon-orange">R$ 49,90</p>
                  <button
                    type="button"
                    className="min-h-11 cursor-pointer rounded bg-linear-to-r from-horizon-red to-horizon-orange font-extrabold text-neutral-950"
                  >
                    Comprar
                  </button>
                </article>
              </li>

              {/* Pulseira Plus */}
              <li className="w-40 shrink-0 snap-start md:w-auto">
                <article className="flex h-full flex-col gap-2 border-2 border-white p-3 lg:p-2">
                  <div className="grid h-28 place-items-center rounded bg-white md:h-32 lg:h-24">
                    <img
                      src="src/assets/PulseiraAzul.png"
                      alt="Pulseira Plus, azul"
                      width={112}
                      height={112}
                      className="size-28 md:size-28 lg:size-20"
                    />
                  </div>
                  <h3 className="text-base font-extrabold lg:text-sm">Pulseira Plus</h3>
                  <p className="text-sm text-neutral-300">Arquibancada coberta e acesso aos boxes</p>
                  <p className="mt-auto text-lg font-extrabold text-horizon-orange">R$ 99,90</p>
                  <button
                    type="button"
                    className="min-h-11 cursor-pointer rounded bg-linear-to-r from-horizon-red to-horizon-orange font-extrabold text-neutral-950"
                  >
                    Comprar
                  </button>
                </article>
              </li>

              {/* Pulseira VIP */}
              <li className="w-40 shrink-0 snap-start md:w-auto">
                <article className="flex h-full flex-col gap-2 border-2 border-white p-3 lg:p-2">
                  <div className="grid h-28 place-items-center rounded bg-white md:h-32 lg:h-24">
                    <img
                      src="src/assets/PulseiraDourada.png"
                      alt="Pulseira VIP, dourada"
                      width={112}
                      height={112}
                      className="size-28 md:size-28 lg:size-20"
                    />
                  </div>
                  <h3 className="text-base font-extrabold lg:text-sm">Pulseira VIP</h3>
                  <p className="text-sm text-neutral-300">Área premium, vista da largada e brinde</p>
                  <p className="mt-auto text-lg font-extrabold text-horizon-orange">R$ 199,90</p>
                  <button
                    type="button"
                    className="min-h-11 cursor-pointer rounded bg-linear-to-r from-horizon-red to-horizon-orange font-extrabold text-neutral-950"
                  >
                    Comprar
                  </button>
                </article>
              </li>

              {/* Pulseira Ultra */}
              <li className="w-40 shrink-0 snap-start md:w-auto">
                <article className="flex h-full flex-col gap-2 border-2 border-white p-3 lg:p-2">
                  <div className="grid h-28 place-items-center rounded bg-white md:h-32 lg:h-24">
                    <img
                      src="src/assets/PulseiraRosa.png"
                      alt="Pulseira Ultra, rosa choque"
                      width={112}
                      height={112}
                      className="size-28 md:size-28 lg:size-20"
                    />
                  </div>
                  <h3 className="text-base font-extrabold lg:text-sm">Pulseira Ultra</h3>
                  <p className="text-sm text-neutral-300">Tudo do VIP e passeio de carro na pista</p>
                  <p className="mt-auto text-lg font-extrabold text-horizon-orange">R$ 399,90</p>
                  <button
                    type="button"
                    className="min-h-11 cursor-pointer rounded bg-linear-to-r from-horizon-red to-horizon-orange font-extrabold text-neutral-950"
                  >
                    Comprar
                  </button>
                </article>
              </li>
            </ul>
          </section>
        </main>

        {/* FOOTER */}
        <footer className="flex items-center gap-4 border-2 border-white p-3 md:p-4">
          <img
            src="src/assets/ForzaFooter.png"
            alt=""
            width={56}
            height={56}
            className="size-14 shrink-0 bg-white p-2"
          />
          <div className="flex flex-1 flex-col gap-1 lg:flex-row lg:items-center lg:justify-between lg:gap-6">
            <h2 className="text-xl font-extrabold md:text-2xl">Informações de Contato</h2>
            <address className="flex flex-col gap-0.5 whitespace-nowrap text-sm not-italic text-neutral-300 md:flex-row md:gap-6 md:text-base">
              <a href="mailto:forzaevent@horizon.com" className="hover:text-horizon-orange">
                forzaevent@horizon.com
              </a>
              <span>@horizonfestival</span>
              <a href="tel:+550000000000" className="hover:text-horizon-orange">
                (67) 92469-2822
              </a>
            </address>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default App
