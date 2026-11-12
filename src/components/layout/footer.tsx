export function Footer() {
  return (
    <footer className="flex items-center gap-4 border-2 border-white p-3 md:p-4">
      <img
        src={`${import.meta.env.BASE_URL}/assets/img/ForzaFooter.png`}
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
  );
}