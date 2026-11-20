import { PulseiraService } from "../services/pulseiras-services";
import type { Pulseira } from "../dtos/pulseiras";
import { useState } from "react";
import { useEffect } from "react";

export function usePulseira() {
    
    const [pulseiras, setPulseiras] = useState<Pulseira[]>([])
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        PulseiraService.listAll()
            .then(setPulseiras)
            .catch(e => setError(e.message))
            .finally(() => setLoading(false));
    }, [])

    return {pulseiras, loading, error}

}