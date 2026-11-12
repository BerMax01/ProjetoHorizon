export type Corrida={
    id: number,
    nome: string,
    data: string,
    horario: string,
    local: string,
    imagesource: string,
}

export const corridas: Corrida[] = [
    {
        id: 1,
        nome: "Abertura",
        data: "1",
        horario: "15:00",
        local: "Autódromo FHF",
        imagesource: "assets/img/Abertura.png",
    },

    {
        id: 2,
        nome: "Passeio Horizon",
        data: "2",
        horario: "14:00",
        local: "Centro MHC",
        imagesource: "assets/img/Passeio.png",
    },

    {
        id: 3,
        nome: "Off-Road",
        data: "3",
        horario: "16:00",
        local: "Deserto MHC",
        imagesource: "assets/img/OffRoad.png",
    },

    {
        id: 4,
        nome: "Drift",
        data: "4",
        horario: "17:00",
        local: "Arena Principal",
        imagesource: "assets/img/Drift.png",
    },

    {
        id: 5,
        nome: "Montanha",
        data: "5",
        horario: "18:00",
        local: "Pico MHC",
        imagesource: "assets/img/Montanhas.png",
    },

    {
        id: 6,
        nome: "Passeio Horizon",
        data: "6",
        horario: "21:00",
        local: "Guadalupe",
        imagesource: "assets/img/Passeio.png",
    },

    {
        id: 7,
        nome: "Monumentos",
        data: "7",
        horario: "09:00",
        local: "Anjo MHC",
        imagesource: "assets/img/Monumentos.png",
    },

    {
        id: 8,
        nome: "Corrida Alex",
        data: "8",
        horario: "17:00",
        local: "Centro MHC",
        imagesource: "assets/img/Alex.png",
    },

    {
        id: 9,
        nome: "Corrida Rami",
        data: "9",
        horario: "11:00",
        local: "Horizon Palace",
        imagesource: "assets/img/Rami.png",
    },

    {
        id: 10,
        nome: "Corrida Final",
        data: "10",
        horario: "15:00",
        local: "Centro Cancún",
        imagesource: "assets/img/Final.png",
    }
]