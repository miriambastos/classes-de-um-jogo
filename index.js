//Miriam
//17/04/2024

// classe heroi
class heroiDoJogo {
    constructor (nome , idade, tipo){
        this.nome = nome;
        this.idade = idade;
        this.tipo = tipo;
    }
    // switch case para os diferentes tipos de atacaques
    atacar (){

    let ataque;
        // quem quero evidenciar? o tipo, logo tenho que usar this.tipo
        switch (this.tipo) {
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
        }
        console.log(`O ${this.tipo} ${this.nome} atacou usando ${ataque}`);
        // o tipo e nome atacou usando ataque
    }
}
//chamar saida no console
let qualHeroi = new heroiDoJogo ("Miriam", 32, "ninja");
qualHeroi.atacar();


