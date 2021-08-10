//semelhante ao call
//function.apply(this, [arg1, arg2])
//aplica na função tal e envia o this e um arrar de argumentos [arg1,arg2]
//retornar o this do contexto  que eu enviar.
this.nome = "Camila";

function dizMeuNome(idade) {
    this.idade = idade;
    console.log(this.nome, this.idade);
}

const dev = {
    nome: "Isabela",
};



//dizMeuNome.apply(this, [18]);
//dizMeuNome.apply(dev, [19]);

//console.log(dev.idade);
//console.log(this.idade);

function dizMeuNome1() {
    this.idade = arguments[0];
    this.gostos = arguments[1];
    this.roupas = arguments[2];
    console.log(this.nome, this.idade, this.gostos, this.roupas);
}

//dizMeuNome1.apply(this, [18, 'banana', 'casaco']);

function multiplicacao(){
    const args = Array.from(arguments);
    return args.reduce(acc, item => {
        return acc * item;
    }, 1);
}

const total = multiplicacao.apply(this, [2,2]);
console.log(total);