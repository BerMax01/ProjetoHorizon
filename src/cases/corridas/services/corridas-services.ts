import { api } from "../../../lib/axios";
import type { Corrida } from "../dtos/corrida";

const ENDPOINT = "/corridas?key=84b322d0";

export const CorridaService = {
    async listAll(): Promise<Corrida[]> {
        const result = await api.get<Corrida[]>(ENDPOINT);

        return result.data;
    }
}