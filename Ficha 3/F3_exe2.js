'use strict';
var nome = prompt("Introduza o seu nome?", "Nome");
//alert(`Ola ${nome}!`); /** Or **/

if(nome == null){
    alert("Olá desconhecido, bem vindo");
}
else if(nome == "Nome"){
    alert("Olá Alex, bem vindo");
}else {
    alert("Olá " + nome + ", bem vindo");
}