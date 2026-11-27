export function PulseirasCardSkeleton() {
    return (
        <li aria-hidden="true" className="w-40 shrink-0 snap-start animate-pulse md:w-auto">
            <article className="flex h-full flex-col gap-2 border-2 border-neutral-700 p-3 lg:p-2">
                <div className="grid h-28 place-items-center rounded bg-neutral-800 md:h-32 lg:h-24">
                    <div className="size-28 bg-neutral-700 md:size-28 lg:size-20" />
                </div>
                <div className="h-4 w-3/4 bg-neutral-700 lg:h-3.5" />
                <div className="flex flex-col gap-1.5">
                    <div className="h-3 w-full bg-neutral-800" />
                    <div className="h-3 w-2/3 bg-neutral-800" />
                </div>
                <div className="mt-auto h-5 w-1/3 bg-neutral-700" />
                <div className="min-h-11 rounded bg-neutral-700" />
            </article>
        </li>
    );
}