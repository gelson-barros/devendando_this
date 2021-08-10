//Call -> alterar contexto

//passar um this de um contexto para outro
//Do contexto global para um contexto de um metodo de um objecto

//function.call(this, arg1, arg2)->chamam a função tal e envia o this e os seus argumentos arg1,arg2
//call do inglês
//retornar o this do contexto  que eu enviar.

this.nome = "Camila";

function dizMeuNome(idade) {
    this.idade = idade;
    console.log(this.nome, this.idade);
}

const dev = {
    nome: "Isabela",
};

dizMeuNome.call(this, 18);
dizMeuNome.call(dev, 19);

console.log(dev.idade);
console.log(this.idade);