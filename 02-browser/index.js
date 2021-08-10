//'use strict'

/*
No browser sem usar use strict ele busca this.name de fora -> albina
*/
this.nome = "Albina";

function dizMeuNome() {
    console.log(this.nome);
}

//dizMeuNome();

const user = {
    //nome: 'Diego',
    dizMeuNome: function(){
        console.log(this.nome);
    }
}

user.dizMeuNome();

/*
this no escope global é o window
*/
console.log(window.nome);