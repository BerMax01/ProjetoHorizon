import { PulseiraService } from "../services/pulseiras-services";

export function usePulseira() {
    return PulseiraService.listAll();
}