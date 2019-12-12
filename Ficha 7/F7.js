"use strict"

function submeter() {
    var nome= $("#nome").val();
    var idade= $("#idade").val();
    var cidade= $("#cidade").val();

    //estrutura
    var dados = {
        //primeiro uma string e depois do : está a ir buscar o valor no ficheiro js
        "nome" : nome,
        "idade" : idade,
        "cidade" : cidade,
    };

    var dados_json = JSON.stringify(dados); //converter de objeto para string

    localStorage.setItem("dados", dados_json);
}

function ler_dados() {
    var dados_json = localStorage.getItem("dados");

    //Converter de string para objeto
    var dados = JSON.parse(dados_json);

    $("#nome").text(dados.nome);
    $("#idade").text(dados.idade);
    $("#cidade").text(dados.cidade);

}

function limpar_dados(){
    //localStorage.clear(); // limpa tuda a storage
    localStorage.removeItem("dados");
}

$(function () {
    ler_dados();
});