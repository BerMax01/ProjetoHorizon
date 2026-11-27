import { api } from "../../../lib/axios";
import type { Pulseira } from "../dtos/pulseiras";

const ENDPOINT = "/pulseiras?key=84b322d0";

export const PulseiraService = {
    async listAll(): Promise<Pulseira[]> {
        const result = await api.get<Pulseira[]>(ENDPOINT);

        return result.data;
    }
}