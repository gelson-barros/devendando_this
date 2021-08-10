// contexto dentro de um método
// não pega o this global, somente do objecto(não importando o modo strict)

this.nome = "Domingos";

const dev = {
    nome: "Cleiton",
    dizMeuNome: function(){
        console.log(this.nome);//
    }
}

dev.dizMeuNome();