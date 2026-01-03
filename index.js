// Lista de heróis para demonstrar o funcionamento do laço de repetição
const herois = [
    { nome: "Arthur", xp: 900 },
    { nome: "Lara", xp: 1500 },
    { nome: "Kael", xp: 3500 },
    { nome: "Diana", xp: 6200 },
    { nome: "Vash", xp: 7500 },
    { nome: "Zelda", xp: 8800 },
    { nome: "Kratos", xp: 9500 },
    { nome: "Goku", xp: 12000 }
];

// Laço de repetição para percorrer cada herói
for (let i = 0; i < herois.length; i++) {
    let nome = herois[i].nome;
    let xp = herois[i].xp;
    let nivel = "";

    // Estrutura de decisão para determinar o nível
    if (xp < 1000) {
        nivel = "Ferro";
    } else if (xp <= 2000) {
        nivel = "Bronze";
    } else if (xp <= 5000) {
        nivel = "Prata";
    } else if (xp <= 7000) {
        nivel = "Ouro";
    } else if (xp <= 8000) {
        nivel = "Platina";
    } else if (xp <= 9000) {
        nivel = "Ascendente";
    } else if (xp <= 10000) {
        nivel = "Imortal";
    } else {
        nivel = "Radiante";
    }

    // Saída final
    console.log(`O Herói de nome **${nome}** está no nível de **${nivel}**`);
}