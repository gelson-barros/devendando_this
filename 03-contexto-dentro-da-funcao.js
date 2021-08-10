// Contexto dentro de uma função
// Não pega o this global, mas se não estiver no modo strict, sim!
//'use strict';

this.nome = "Tárcio";

function dizMeuNome(){
    console.log(this.nome);
}

dizMeuNome();