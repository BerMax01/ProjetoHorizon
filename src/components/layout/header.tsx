export function Header() {
  return (
    <header className="flex items-center gap-4 border-2 border-white p-3 md:w-fit md:max-w-md">
      <img
        src={`${import.meta.env.BASE_URL}/assets/img/LogoForza.webp`}
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
  );
}