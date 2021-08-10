//escopo global

this.nome = "Dimuini";
//console.log(this.nome);
//console.log(this);

function dizMeuNome(){
    //escopo local
    console.log(this.nome);
}

dizMeuNome();