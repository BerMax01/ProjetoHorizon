type CorridasCardSkeletonProps = {
  showConnector?: boolean;
};

export function CorridasCardSkeleton({ showConnector = true }: CorridasCardSkeletonProps) {
  return (
    <li
      aria-hidden="true"
      className="flex animate-pulse items-center gap-3 md:shrink-0 md:gap-0"
    >
      {showConnector && (
        <span className="hidden border-t-2 border-dashed border-neutral-700 md:block md:w-12 md:shrink-0" />
      )}

      <article className="flex flex-1 items-center gap-3 border-2 border-neutral-700 p-2 md:h-44 md:w-40 md:flex-none md:flex-col md:justify-center md:p-3 md:text-center">
        <div className="grid size-12 shrink-0 place-items-center border-2 border-neutral-700">
          <div className="size-8 bg-neutral-700" />
        </div>

        <div className="flex flex-1 flex-col gap-2 md:w-full md:flex-none md:items-center">
          <div className="h-4 w-3/4 bg-neutral-700" />
          <div className="h-3 w-1/3 bg-neutral-700" />
          <div className="h-3 w-1/2 bg-neutral-800" />
          <div className="h-3 w-2/3 bg-neutral-800" />
        </div>
      </article>
    </li>
  );
}