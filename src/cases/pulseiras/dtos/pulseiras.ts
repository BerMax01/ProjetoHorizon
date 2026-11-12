export type Pulseira = {
    id: number;
    nome: string;
    descricao: string;
    preco: number;
    imagesource: string,
}

export const pulseiras: Pulseira[] = [
    {
        id: 1,
        nome: "Pulseira Basica",
        descricao: "Arquibancada Geral",
        preco: 49.9,
        imagesource: "assets/img/PulseiraVerde.png",
    },
    {
        id: 2,
        nome: "Pulseira Premium",
        descricao: "Arquibancada coberta e acesso aos boxes",
        preco: 99.9,
        imagesource: "assets/img/PulseiraAzul.png",
    },
    {
        id: 3,
        nome: "Pulseira VIP",
        descricao: "Área premium, vista da largada e brinde",
        preco: 199.9,
        imagesource: "assets/img/PulseiraDourada.png",
    },
    {
        id: 4,
        nome: "Pulseira Especial",
        descricao: "Tudo do VIP e passeio de carro na pista",
        preco: 399.9,
        imagesource: "assets/img/PulseiraRosa.png",
    }
]
