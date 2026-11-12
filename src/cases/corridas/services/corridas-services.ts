import { corridas } from "../dtos/corrida";

export const CorridaService = {
    listAll() {
        return corridas;
    }
}