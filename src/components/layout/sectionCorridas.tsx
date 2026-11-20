import { SectionCard } from "../../cases/corridas/components/section-card";

type Props = {
    selectedCorridaId: number | null;
};

export function SectionCorridas({ selectedCorridaId }: Props) {
    return (
        <SectionCard id={selectedCorridaId} />
    );
}