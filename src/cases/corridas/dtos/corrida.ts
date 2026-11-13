export type Corrida={
    id: number,
    nome: string,
    data: string,
    horario: string,
    local: string,
    imagesource: string,
    descricao: string,
}

export const corridas: Corrida[] = [
    {
        id: 1,
        nome: "Abertura",
        data: "1",
        horario: "15:00",
        local: "Autódromo FHF",
        imagesource: "assets/img/Abertura.png",
        descricao: "O festival começa! Motores ligados, multidão na pista e a largada oficial da temporada no Autódromo FHF. Venha agora mesmo acompanhar o início de um grande festival"
    },

    {
        id: 2,
        nome: "Passeio Horizon",
        data: "2",
        horario: "14:00",
        local: "Centro MHC",
        imagesource: "assets/img/Passeio.png",
        descricao: "Sem pressa, sem placar. Um rolê descontraído pelo centro da cidade, curtindo os carros e as ruas. Aqueles com Pulseiras Especiais tem direito a dar um volta junto aos pilotos"
    },

    {
        id: 3,
        nome: "Off-Road",
        data: "3",
        horario: "16:00",
        local: "Deserto MHC",
        imagesource: "assets/img/OffRoad.png",
        descricao: "Hora de sujar o carro. Poeira, saltos e curvas fechadas no meio do deserto, onde só os mais corajosos terminam inteiros."
    },

    {
        id: 4,
        nome: "Drift",
        data: "4",
        horario: "17:00",
        local: "Arena Principal",
        imagesource: "assets/img/Drift.png",
        descricao: "Pneu cantando e fumaça pra todo lado. Quem deslizar com mais estilo na Arena Principal leva a plateia junto."
    },

    {
        id: 5,
        nome: "Montanha",
        data: "5",
        horario: "18:00",
        local: "Pico MHC",
        imagesource: "assets/img/Montanhas.png",
        descricao: "Subida cheia de curvas e vista de tirar o fôlego. No Pico MHC, um errinho e o carro vai embora ladeira abaixo."
    },

    {
        id: 6,
        nome: "Passeio Horizon",
        data: "6",
        horario: "21:00",
        local: "Guadalupe",
        imagesource: "assets/img/Passeio.png",
        descricao: "De volta ao clima tranquilo, agora à noite em Guadalupe. Luzes da cidade, som alto e boa companhia. Aqueles com Pulseiras Especiais tem direito a dar um volta junto aos pilotos"
    },

    {
        id: 7,
        nome: "Monumentos",
        data: "7",
        horario: "09:00",
        local: "Anjo MHC",
        imagesource: "assets/img/Monumentos.png",
        descricao: "Um tour de manhã cedo pelos pontos mais icônicos de Anjo MHC, perfeito pra fotos e para quem gosta de explorar."
    },

    {
        id: 8,
        nome: "Corrida Alex",
        data: "8",
        horario: "17:00",
        local: "Centro MHC",
        imagesource: "assets/img/Alex.png",
        descricao: "Um dos melhores pilotos da atualidade, Alex, convidado especial desafia os participantes a uma corrida de tirar o fôlego pelo centro da cidade. Quem será que leva a melhor?"
    },

    {
        id: 9,
        nome: "Corrida Rami",
        data: "9",
        horario: "11:00",
        local: "Horizon Palace",
        imagesource: "assets/img/Rami.png",
        descricao: "Mais um piloto de renome, Rami, junto aos desafiantes enfrentam uma corrida de alta velocidade pelo Horizon Palace. Quem será que cruza a linha de chegada primeiro?"
    },

    {
        id: 10,
        nome: "Corrida Final",
        data: "10",
        horario: "15:00",
        local: "Centro Cancún",
        imagesource: "assets/img/Final.png",
        descricao: "A decisão! Tudo o que foi conquistado até aqui vale ouro nas ruas de Cancún. Quem cruzar a linha primeiro leva o título do festival e a glória eterna. Prepare-se para a corrida mais intensa de todas!"
    }
]