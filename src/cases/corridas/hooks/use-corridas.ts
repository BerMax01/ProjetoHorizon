import { CorridaService } from "../services/corridas-services";

export function useCorrida() {
    return CorridaService.listAll();
}