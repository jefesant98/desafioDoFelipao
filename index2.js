// Definição da classe Heroi
class Heroi {
    constructor(nome, idade, tipo) {
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }

    // Método para realizar o ataque
    atacar() {
        let ataque = "";

        // Estrutura de decisão para definir o tipo de ataque
        switch (this.tipo.toLowerCase()) {
            case "mago":
                ataque = "magia";
                break;
            case "guerreiro":
                ataque = "espada";
                break;
            case "monge":
                ataque = "artes marciais";
                break;
            case "ninja":
                ataque = "shuriken";
                break;
            default:
                ataque = "um ataque genérico";
        }

        // Saída esperada
        console.log(`o ${this.tipo} atacou usando ${ataque}`);
    }
}

// Criando instâncias (objetos) da classe Heroi
const mago = new Heroi("Gandalf", 1000, "mago");
const guerreiro = new Heroi("Aragorn", 87, "guerreiro");
const monge = new Heroi("Lee Sin", 35, "monge");
const ninja = new Heroi("Naruto", 17, "ninja");

// Chamando o método atacar para cada herói
mago.atacar();      // Saída: o mago atacou usando magia
guerreiro.atacar(); // Saída: o guerreiro atacou usando espada
monge.atacar();     // Saída: o monge atacou usando artes marciais
ninja.atacar();     // Saída: o ninja atacou usando shuriken