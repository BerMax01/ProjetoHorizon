import { CorridaService } from "../services/corridas-services";
import type { Corrida } from "../dtos/corrida";
import { useState } from "react";
import { useEffect } from "react";

export function useCorrida() {
    
    const [corridas, setCorridas] = useState<Corrida[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        CorridaService.listAll()
            .then(setCorridas)
            .catch(e => setError(e.message))
            .finally(() => setLoading(false));
    }, [])

    return {corridas, loading, error}

}