import { useState } from "react";
import { ListaCorridas } from "./listaCorridas";
import { SectionCorridas } from "./sectionCorridas";

export function CorridasConnection() {
    const [selectedCorridaId, setSelectedCorridaId] = useState<number | null>(null);

    return (
        <>
            <ListaCorridas
                selectedCorridaId={selectedCorridaId}
                setSelectedCorridaId={setSelectedCorridaId}
            />

            <SectionCorridas
                selectedCorridaId={selectedCorridaId}
            />
        </>
    );
}